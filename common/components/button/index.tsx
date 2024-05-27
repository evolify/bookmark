import { cls } from "common/utils"
import "./style.scss"

interface ButtonProps extends React.ComponentPropsWithoutRef<"button">{
}
export function Button(props: ButtonProps){
  const {children, className, ...restProps} = props
  return <button className={cls("btn", className)} {...restProps}>
    {children}
  </button>
}

interface IconButtonProps extends ButtonProps{
  icon: React.ReactNode,
  text?: string
}

export function IconButton(props: IconButtonProps){
  const {icon, text, className, ...restProps} = props
  return (
    <Button className={cls("icon-btn", className)} {...restProps}>
      {icon}
      {
        text && <span>{text}</span>
      }
    </Button>
  )
}
