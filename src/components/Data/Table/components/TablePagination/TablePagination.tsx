import React from "react"
import styled from "styled-components"
import { themeSpacing, Pagination } from "@amsterdam/asc-ui"
import { PaginationType } from "../../types"

const StyledPagination = styled(Pagination)`
  margin-top: ${ themeSpacing(4) };
  display: flex;
  justify-content: center;
`

const TablePagination: React.FC<PaginationType> = ({
  page = 1, pageSize = 10, collectionSize = 10, onPageChange, paginationLength
}) => (
  <StyledPagination
    page={page}
    pageSize={pageSize}
    collectionSize={collectionSize}
    onPageChange={onPageChange}
    paginationLength={paginationLength}
  />
)

export default TablePagination
