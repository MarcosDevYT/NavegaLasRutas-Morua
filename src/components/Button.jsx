import LinkRouter from "./LinkRouter"

const Button = ({ text, onClick, className, href }) => {

  if (href) return (
    <LinkRouter
      to={href}
      className={`${className} flex justify-center items-center border px-8 md:px-12 h-14 w-max text-xl md:text-2xl hover:bg-black hover:text-white transition-all ease-in-out cursor-pointer`}>
      {text}
    </LinkRouter>
  )

  return (
    <button onClick={onClick} className={`${className} border px-8 md:px-12 h-14 w-max text-xl md:text-2xl hover:bg-black hover:text-white transition-all ease-in-out cursor-pointer`}>
      <span>{text}</span>
    </button>
  )
}

export default Button
