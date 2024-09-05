import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  margin-bottom: 1rem;
`

export const Placeholder: React.FC = ({ children }) => (
  <Wrapper>{ children }</Wrapper>
)

export default Placeholder
