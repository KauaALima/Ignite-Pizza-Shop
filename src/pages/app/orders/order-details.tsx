import { DialogTitle } from '@radix-ui/react-dialog'

import {
  DialogContent,
  DialogDescription,
  DialogHeader,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function OrdersDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: asdbi12mldm</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  <span className="font-medium text-muted-foreground">
                    Pedente
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Cleinte</TableCell>
              <TableCell className="flex justify-end">Kauã Araujo</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">(98)7654432</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end">
                Kauã@email.com.br
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado ha
              </TableCell>
              <TableCell className="flex justify-end">ha 4 minutos</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Qtd</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">Sub-Total</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>Pizza de Calabresa</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$ 65</TableCell>
              <TableCell className="text-right">R$ 139</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Pizza de chocolate</TableCell>
              <TableCell className="text-right">2</TableCell>
              <TableCell className="text-right">R$ 65</TableCell>
              <TableCell className="text-right">R$ 139</TableCell>
            </TableRow>
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total do pedido</TableCell>
              <TableCell className="text-right font-medium">
                R$ 259,00
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}
