const Button = ({ text, onClick }) => {

  return (
    <button onClick={onClick} className="border px-8 md:px-12 h-14 w-max text-xl md:text-2xl hover:bg-black hover:text-white transition-all ease-in-out cursor-pointer">
      {text}
    </button>
  )
}

export default Button
