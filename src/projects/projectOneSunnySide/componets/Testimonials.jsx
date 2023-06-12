import { useState } from "react"
import { testimonials } from "../data/testimonial"

const Testimonials = () => {
  // eslint-disable-next-line
  const [people, setPeople] = useState(testimonials)

  return (
    <>
      <section className="py-10 px-5 lg:py-20">
        <h2 className="testimonials-header text-xl uppercase tracking-widest text-center">
          Client Testimonials
        </h2>

        <div className="md:grid grid-cols-2 gap-5 lg:grid-cols-3 xl:max-w-6xl xl:mx-auto">
          {people.map(({ id, image, name, desc, title }) => (
            <article key={id}>
              <img
                src={image}
                alt={name}
                className="w-20 rounded-full block mx-auto mt-10 mb-5"
              />
              <p className="text-center mb-5">{desc}</p>
              <h4 className="text-center">{name}</h4>
              <small className="block text-center">{title}</small>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Testimonials