import Link from "next/link"
import { navLinks } from "../utils/data";

function Header() {


    return (
        <header className="flex justify-between p-5 max-w-7xl mx-auto">
            <div className="flex items-center space-x-5">
                <Link href="/">
                    <img className="w-44 object-contain cursor-pointer" src="https://links.papareact.com/yvf" alt="" />
                </Link>
                <div className="hidden md:inline-flex items-center space-x-5">
                    {navLinks.map((link, index) => {
                        return link.name == "Rent" ?
                        <div className="cursor-pointer text-white bg-green-600 px-4 py-1 rounded-full">
                            <Link href={link.href}>
                                <a key={index}>{link.name}</a>
                            </Link>
                        </div>
                            : link.name=="Images" || link.name=="Find" ? <></> : (
                        <div className="cursor-pointer">
                            <Link href={link.href}>
                                <li key={index}>{link.name}</li>
                            </Link>
                        </div>)
                    })}
                </div>
            </div>
            <div className="flex items-center space-x-5 text-green-600">
                {navLinks.map((link, index) => {
                    return link.name == "Images" || link.name=="Find" ? (
                        <div className={link.name == "Find" ? "cursor-pointer border px-4 py-1 rounded-full border-green-600" : "cursor-pointer"}>
                            <Link href={link.href}>
                                <a key={index}>{link.name}</a>
                            </Link>
                        </div>
                    ) :
                    <></>
                })}
            </div>
        </header>
    )
}

export default Header