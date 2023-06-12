import { useState } from "react"
import CTA from "./CTA"
import { navbar } from "../data/navbar"

const Navbar = () => {
  // eslint-disable-next-line
  const [links, setLinks] = useState(navbar)

  return (
    <div className="navbar absolute bg-white p-5 rounded-md shadow-lg text-center w-72 md:bg-transparent md:shadow-none md:w-auto md:rounded-none md:p-0 md:relative md:text-left md:flex md:items-center">
      <ul className="md:flex">
        {links.map(({ id, title }) => (
          <li key={id} className="my-3 md:my-0 md:mx-3 md:text-white">
            {title}
          </li>
        ))}
      </ul>
      <CTA />
    </div>
  )
}

export default Navbar