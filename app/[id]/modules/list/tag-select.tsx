import CreateableSelect from "react-select/creatable"

interface Props{
  value: string[]
  data: string[]
  onChange: (val: string[]) => void
}

export default function TagSelect({value, data, onChange}: Props) {
  const list:any = data.map(t=>({
    label: t,
    value: t,
  }))

  return (
    <CreateableSelect
      menuPortalTarget={document.body}
      className='input' 
      isMulti
      value={value.map(t=>({
        label: t,
        value: t
      }))} 
      options={list} 
      onChange={values=>onChange(values.map(t=>t.value))}
    />
  )
}
