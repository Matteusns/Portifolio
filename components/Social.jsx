import Link from "next/link" 
import {FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram} from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, path: "https://github.com/Matteusns"},
    {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/mateusnsousa/"},
    {icon: <FaInstagram />, path: "https://www.instagram.com/ns.teus/"}
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
            return <Link key={index} target="_blank" href={item.path} className={iconStyles}>{item.icon}</Link>
        })}
    </div>
  )
}

export default Social