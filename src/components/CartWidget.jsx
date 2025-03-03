import { ShoppingBag } from "lucide-react"

const CartWidget = () => {
  return (
    <button className="relative flex items-center justify-center p-2 shadow-md rounded-full cursor-pointer">
      <ShoppingBag size={24} />
      <span className="absolute bottom-0 right-0 flex items-center justify-center p-1.5 py-0.5 bg-black rounded-2xl text-white text-xs">2</span>
    </button>
  )
}

export default CartWidget
