import "../../styles/components/shared/button.scss"

function Button({text, onClick}:{text: string, onClick?: () => void}) {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

export default Button