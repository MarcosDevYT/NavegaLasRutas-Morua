const CartWidget = ({ open, toggle}) => {
  const openCart = open;
  const toggleCart = toggle;

  return (
    <article>
      <div onClick={toggleCart} className={`${openCart ? "block" : "hidden"} absolute inset-0 h-screen z-[1] bg-transparent`}></div>

      <div className="relative">
        <div 
          onClick={toggleCart} 
          className="relative z-10 cursor-pointer p-2 rounded-full shadow-md bg-white"
        >
          <img src="/shopping-bag-line.svg" alt="Bolso" className="w-4 md:w-6" />
          <div className="absolute bottom-0 right-0 bg-black w-4 h-4 flex justify-around items-center rounded-full text-xs text-white">0</div>
        </div>

        

        <div 
          className={`
            ${openCart ? "flex" : "hidden"}
            absolute z-10 top-[130%] -left-12 md:left-1/2 -translate-x-1/2 flex-col gap-2 justify-center
            bg-slate-50 w-60 md:w-72 h-72 md:h-80 rounded-xs shadow-md
          `}
        >
          <div className="border-b-2 h-full">
            <ul>
              <li className="relative flex p-3 px-2 border-b">
                <img src="/producto-decorativo.png" alt="Producto" className="h-28 mr-4 cursor-pointer" />
                <div>
                  <p className="text-lg">Producto</p>
                  <p className="text-sm">cantidad: 1</p>
                  <div className="flex gap-2 mt-8">
                    <button className="px-2 rounded-full cursor-pointer shadow-md text-lg font-semibold">+</button>
                    <button className="px-2.5 rounded-full cursor-pointer shadow-md text-lg font-semibold">-</button>
                  </div>
                  <img src="/delete-bin-line.svg" alt="Eliminar" className="absolute top-3 right-3 w-6 cursor-pointer" />
                </div>
              </li>
            </ul>
          </div>
          <h3 className="h-max text-xl mb-2 text-center cursor-pointer">Abrir Carrito</h3>
        </div>
      </div>
    </article>
  );
};

export default CartWidget;


