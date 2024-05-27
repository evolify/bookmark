"use client"
import List from "./modules/list"
import Header from "./modules/header"
import Sidebar from "./modules/sidebar"
import "./style.scss"

export default function Page() {

  return (
    <div className="page">
      <Header/>
      <div className="content">
        <Sidebar />
        <List />
      </div>
    </div>
  )
}
