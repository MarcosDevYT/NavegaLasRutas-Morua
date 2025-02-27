import ButtonIcon from "../utils/ButtonIcon"

const ProductItem = ({ src = "../sin-producto.png", nombre = "Producto" , precio = "0.00", categoria = "Categoria", estilo = "Estilo" }) => {

  return (
    <li className="relative flex flex-col max-w-[280px] h-[430px] shadow-md">
      <div className="absolute z-10 flex w-full px-2 py-2 justify-between items-center">
        <p className="text-base w-[100px] py-0.5 text-center border-2 border-black rounded-full bg-black text-white">{categoria}</p>
        <p className="text-base w-[100px] py-0.5 text-center border-2 rounded-full bg-[#ECD1AF]">{estilo}</p>
      </div>
      <figure className="relative w-full h-full overflow-hidden rounded-t-md">
        <img src={src} alt={nombre} className="w-full h-full object-cover" />

        <div className="opacity-0 hover:opacity-100 transition-all absolute top-0 left-0 z-10 bg-black/20 w-full h-full flex items-center justify-center gap-8">
          <ButtonIcon src={"../expand.svg"} alt={"Expandir"}/>
          <ButtonIcon src={"../shopping-bag-line.svg"} alt={"Carrito"}/>
        </div>
      </figure>
      <div className="w-full h-[60px] p-2 rounded-b-lg bg-white">
        <p className="text-lg">{nombre}</p>
        <p className="text-sm">Precio: $ {precio} </p>
      </div>
    </li>
  )
}

export default ProductItem
