import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from './ui/button'

interface PaginationProps {
  pageIndex: number
  perPage: number
  totalCount: number
}

export function Pagination({
  pageIndex,
  perPage,
  totalCount,
}: PaginationProps) {
  const pages = Math.floor(totalCount / perPage)

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Todal de {totalCount} item(s)
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Pagina {pageIndex + 1} de {pages}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">Primeira pagina</span>
          </Button>

          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Primeira anterior</span>
          </Button>

          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Proxima pagina</span>
          </Button>

          <Button variant="outline" className="h-8 w-8 p-0">
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Ultima pagina</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
