
import Container from "../utils/Container"
import ItemsListContainer from "../utils/ItemsListContainer"
import TitleSection from "../utils/TitleSection"

const Productos = ({ saludo }) => {
  return (
    <Container>
      <TitleSection className={"text-center md:text-start"} title={"Nuevos Lanzamientos"} />

      <article className="py-8">
        <h3 className="text-xl text-center md:text-start">{saludo}</h3>
        <ItemsListContainer className={"py-12 gap-12"} />
      </article>
    </Container>
  )
}

export default Productos
