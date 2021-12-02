import styled from "styled-components"
import { themeSpacing, Pagination } from "@amsterdam/asc-ui"

export const DEFAULT_PAGE_SIZE = 10

export type PaginationProps = {
  page: number
  pageSize: number
  collectionSize: number
  onPageChange?: (page: number) => void
}

const StyledPagination = styled(Pagination)`
  margin-top: ${ themeSpacing(4) };
  display: flex;
  justify-content: center;
`

const TablePagination: React.FC<PaginationProps> = ({ page = 1, pageSize = 10, collectionSize = 10, onPageChange }) => (
  <StyledPagination
    page={page}
    pageSize={pageSize}
    collectionSize={collectionSize}
    onPageChange={onPageChange}
  />
)

export default TablePagination
