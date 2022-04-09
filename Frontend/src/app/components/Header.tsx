import Link from "next/link"
import { navLinks } from "../utils/data";
import Logo from "./Logo";

function Header() {


    return (
        <header className="flex justify-between p-5 max-w-7xl mx-auto">
            <div className=" cursor-pointer flex items-center space-x-5">
                <Link href="/">
                    <div>
                        <Logo />
                    </div>
                </Link>
                <div className="hidden md:inline-flex items-center space-x-5">
                    {navLinks.map((link, index) => {
                        return link.name == "Rent" ?
                            <Link key={index} href={link.href}>
                                <div key={index} className="cursor-pointer text-white bg-green-600 px-4 py-1 rounded-full">
                                <p key={index}>{link.name}</p>
                            </div>
                        </Link>
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
                        <div key={index} className={link.name == "Find" ? "cursor-pointer border px-4 py-1 rounded-full border-green-600" : "cursor-pointer"}>
                            <Link key={index} href={link.href}>
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