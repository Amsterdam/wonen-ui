export type Field = {
  key: string
  label: string
  italic: boolean
  isCurrency: boolean
  mapValue: (v: any) => any
  shouldShow: (value: any, isNested: boolean) => boolean
}
type FieldConfig = Pick<Field, "key"> & Partial<Pick<Field, "italic" | "isCurrency" | "mapValue" | "shouldShow">>

const defaultField = {
  italic: false,
  isCurrency: false,
  mapValue: (v: any) => v,
  shouldShow: () => true
}

export default (fields: Array<FieldConfig | string>, translations: Record<string, string>) =>
  fields.map(field => {
    const o = typeof field === "string" ? { key: field } : field
    const label = translations[o.key] ?? ""
    return { ...defaultField, label, ...o }
  })