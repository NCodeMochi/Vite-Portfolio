import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center"> 
            <h2 className="text-4xl font-semibold">
                Neil<span className="text-yellow-600">.</span>
            </h2>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin />
            <FaGithub />
            <FaXTwitter />
            <FaInstagram />
        </div>
    </nav>
  )
}

export default Navbar
