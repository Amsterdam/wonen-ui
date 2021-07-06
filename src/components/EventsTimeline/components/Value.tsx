import React from "react"

type Props = {
	value: React.ReactNode
	displayItalic?: boolean
}

const Value: React.FC<Props> = ({ value, displayItalic = false }) => displayItalic ? <i>{ value }</i> : <>{ value }</>

export default Value