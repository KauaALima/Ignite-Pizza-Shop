import { Separator } from '@radix-ui/react-separator'
import { Pizza } from 'lucide-react'

export function Header() {
  return (
    <div className="border-b">
      <header className="flex h-16 items-center gap-6 px-6">
        <Pizza className="h-6 w-6" />

        <Separator orientation="horizontal" className="h-6" />
      </header>

      <nav></nav>
    </div>
  )
}
