import Logo from "./Logo"
import MenuButton from "./MenuButton"

function Header() {
  return (
   <>
   <header className="absolute w-full p-5 flex items-center justify-between">
    <div>
        <Logo/>
    </div>
    <div>
        <MenuButton/>
    </div>
   </header>
   </>
  )
}

export default Header