import ProductItem from "./ProductItem"

const ItemsListContainer = ({ className }) => {

  return (
    <ul className={`${className} flex items-center justify-center md:justify-start `}>
      <ProductItem />
    </ul>
  )
}

export default ItemsListContainer
