import { useHotkeys } from 'react-hotkeys-hook'
import { Search } from "common/components/icon"
import { add, update } from "../../store"
import "./style.scss"
import ThemeSwitch from "common/components/theme-switch"
import SidebarSwitch from "./sidebar-switch"
import { useRef } from 'react'

export default function Header() {
  const ref = useRef<HTMLInputElement>()
  useHotkeys("mod+f, f", ()=>{
    console.log("ffff")
    if(ref.current){
      ref.current.focus()
    }
  }, {
    preventDefault: true
  })

  useHotkeys("mod+v", async ()=>{
    const text = (await navigator.clipboard.readText()).trim()
    if(/^(https?:\/\/[^\s]+)/.test(text)){
      add(text)
    }
  }, {
    preventDefault: true
  })

  function onChange(val: string) {
    update({ keywords: val.trim() })
  }

  return (
    <header>
      <SidebarSwitch />
      <div className="filter">
        <input ref={ref} type="text" onChange={e => onChange(e.target.value)} />
        <Search />
      </div>
      <ThemeSwitch />
    </header>
  )
}
