import { zodResolver } from '@hookform/resolvers/zod'
import {
  DialogClose,
  DialogDescription,
  DialogTitle,
} from '@radix-ui/react-dialog'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { getRestaurant, type getRestaurantResponse } from '@/api/get-restaurant'
import { UpdateProfile } from '@/api/update-profile'

import { Button } from './ui/button'
import { DialogContent, DialogFooter, DialogHeader } from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

const storeProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string().nullable(),
})

type StoreProfileSchema = z.infer<typeof storeProfileSchema>

export function StoreDialogProfile() {
  const querryClient = useQueryClient()

  const { data: restaurant } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getRestaurant,
    staleTime: Infinity,
  })

  function updateRestaurantCached({ name, description }: StoreProfileSchema) {
    const cached = querryClient.getQueryData<getRestaurantResponse>([
      'managed-restaurant',
    ])

    if (cached) {
      querryClient.setQueryData<getRestaurantResponse>(['managed-restaurant'], {
        ...cached,
        name,
        description,
      })
    }

    return { cached }
  }

  const { mutateAsync: updateProfilefn } = useMutation({
    mutationFn: UpdateProfile,
    onMutate({ name, description }) {
      const { cached } = updateRestaurantCached({ name, description })

      return { previousProfile: cached }
    },
    onError(_, __, context) {
      if (context?.previousProfile) {
        updateRestaurantCached(context?.previousProfile)
      }
    },
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: restaurant?.name ?? '',
      description: restaurant?.description ?? '',
    },
  })

  async function handleUpdateProfile(data: StoreProfileSchema) {
    try {
      await updateProfilefn({
        name: data.name,
        description: data.description ?? '',
      })

      toast.success('Perfil atualizado com sucesso')
    } catch {
      toast.error('Falha autalizar o perfil, tenta novamente')
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da loja</DialogTitle>
        <DialogDescription>
          Atualize as Informações do seu estabelecimento visiveis ao seu cliente
        </DialogDescription>
      </DialogHeader>

      <form
        onSubmit={handleSubmit(handleUpdateProfile)}
        className="space-y-4 py-4"
      >
        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-right" htmlFor="name">
            Nome
          </Label>
          <Input className="col-span-3" id="name" {...register('name')} />
        </div>

        <div className="grid grid-cols-4 items-center gap-4">
          <Label className="text-right" htmlFor="description">
            Descrição
          </Label>
          <Textarea
            className="col-span-3"
            id="description"
            {...register('description')}
          />
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost" type="button">
              Cacelar
            </Button>
          </DialogClose>

          <Button type="submit" variant="sucess" disabled={isSubmitting}>
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
