import { ReactNode } from "react"
import { Heading } from "@amsterdam/asc-ui"

type Props = {
  infoTitle: string
  infoText: ReactNode
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  children?: ReactNode
}

const InfoHeading: React.FC<Props> = ({ as = "h2", children }) =>
    <Heading as={ as }>
      { children }
    </Heading>

export default InfoHeading
