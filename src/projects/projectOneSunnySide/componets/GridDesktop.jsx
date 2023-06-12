import { useState } from "react"
import { gridDesktop } from "../data/grid"

const GridDesktop = () => {
  // eslint-disable-next-line
  const [cards, setCards] = useState(gridDesktop)

  return (
    <>
      <section className="grid grid-cols-4">
        {cards.map(({ id, image }) => (
          <article key={id}>
            <img src={image} alt="" />
          </article>
        ))}
      </section>
    </>
  )
}

export default GridDesktop