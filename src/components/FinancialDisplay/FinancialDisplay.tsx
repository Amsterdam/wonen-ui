import React from "react"

type Props = {
  amount: number
}
const formatter = new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0
})

const FinancialDisplay: React.FC<Props> = ( { amount } ) => <> { formatter.format( amount ) }</>

export default FinancialDisplay
