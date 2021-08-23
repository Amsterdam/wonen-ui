import styled from "styled-components"
import { Link } from "@reach/router"
import { themeColor } from "@amsterdam/asc-ui"

export default styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: ${ themeColor("tint", "level7") };
`
