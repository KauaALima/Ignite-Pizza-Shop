import { Home, Pizza, UtensilsCrossed } from 'lucide-react'

import { AccountMenu } from './account-menu'
import { NavLink } from './navLink'
import { ToggleMode } from './theme/toggle-theme'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <div className="border-b">
      <header className="flex h-16 items-center gap-6 px-6">
        <Pizza className="h-6 w-6" />
        <Separator orientation="vertical" className="h-6" />
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home className="h-4 w-4" />
            Inicio
          </NavLink>

          <NavLink to="/orders">
            <UtensilsCrossed className="h-4 w-4" />
            Pedidos
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ToggleMode />
          <AccountMenu />
        </div>
      </header>
    </div>
  )
}
