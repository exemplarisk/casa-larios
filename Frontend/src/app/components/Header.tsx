import Link from "next/link"
import { navLinks } from "../utils/data";

function Header() {

    const navigateToRoute = (route: string) => {
    }

    return (
        <header className="flex justify-between p-5 max-w-7xl mx-auto">
            <div className="flex items-center space-x-5">
                <Link href="/">
                    <img className="w-44 object-contain cursor-pointer" src="https://links.papareact.com/yvf" alt="" />
                </Link>
                <div className="hidden md:inline-flex items-center space-x-5">
                    {navLinks.map((link, index) => {
                        return link.name=="Rent" || link.name=="Images" || link.name=="Find" ? <></> : (
                        <div className="hover:open:active:focus:">
                            <Link href={link.href}>
                                <li key={index}>{link.name}</li>
                            </Link>
                        </div>)
                    })}
                    <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">Rent</h3>
                </div>
            </div>

            <div className="flex items-center space-x-5 text-green-600">
                <h3>Images</h3>
                <h3 className="border px-4 py-1 rounded-full border-green-600">Find</h3>
            </div>
        </header>
    )
}

export default Header