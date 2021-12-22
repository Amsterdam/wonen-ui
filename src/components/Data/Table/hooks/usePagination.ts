import { useState } from "react"
import { PaginationType } from "../types"

export const DEFAULT_PAGE_SIZE = 10

const extendsObject = <T extends Object>(...list: T[]) => {
  const result: T = {} as T
  list.forEach(obj => {
    if (obj) {
      Object.keys(obj).forEach(key => {
        const val = (obj as any)[key]
        if (val !== undefined) {
          (result as any)[key] = val
        }
      })
    }
  })
  return result
}

const usePagination = (
  collectionSize: number,
  pagination: PaginationType | false | undefined,
  onPageChange: (page: number) => void
): [PaginationType] => {

  const { collectionSize: paginationTotal = 0, ...paginationObj }
    = pagination && typeof pagination === "object" ? pagination : {}

  const [innerPagination, setInnerPagination] = useState<{
    page?: number
    pageSize?: number
  }>({
    page: 1,
    pageSize: DEFAULT_PAGE_SIZE
  })

  // extendsObject is merging the inner table props with the external input.
  const mergedPagination = extendsObject<Partial<PaginationType>>(
    innerPagination,
    paginationObj,
    {
      collectionSize: paginationTotal > 0 ? paginationTotal : collectionSize
    }
  )

  /*
   ** TODO: If page is already known, but collectionSize is not. Page is 1.
   ** If collectionSize is changing because of an API response, page is not changed if it was already set.
   ** Find a solution.
   */
  // Reset `page` if data length or pageSize changed
  // const maxPage = Math.ceil((paginationTotal || collectionSize) / mergedPagination.pageSize!)
  // if (mergedPagination.page! > maxPage) {
  //   // Prevent a maximum page count of 0
  //   mergedPagination.page = maxPage || 1
  // }

  const refreshPagination = (page?: number) => {
    setInnerPagination({
      page: page ?? 1,
      pageSize: mergedPagination.pageSize
    })
  }

  const onInternalChange: PaginationType["onPageChange"] = (page: number) => {
    if (pagination) {
      pagination.onPageChange?.(page)
    }
    refreshPagination(page)
    onPageChange(page)
  }

  if (pagination === false) {
    return [{}]
  }

  return [
    {
      ...mergedPagination,
      onPageChange: onInternalChange
    }
  ]
}

export default usePagination
