import Container from "../utils/Container"
import TitleSection from "../utils/TitleSection"
import Button from "../utils/Button"
import ItemsServices from "../utils/ItemsServices"
import { ServicesItems } from "../../../data"

const Services = () => {
  return (
    <Container className={"flex flex-col items-center justify-center gap-12"}>
      <TitleSection title={"Nuestras Ventajas"} />
      <article className="flex flex-wrap gap-16 mb-4 items-center justify-center">
        {ServicesItems.map((item, index) => (
          <ItemsServices key={index} title={item.title} content={item.content} />
        ))}
      </article>
      <Button text={"Descubre Mas Productos"}/>
    </Container>
  )
}

export default Services
