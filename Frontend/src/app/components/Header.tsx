import Link from "next/link"
import { navLinks } from "../utils/data";
import Logo from "./Logo";
import React, { useState } from "react";
import ContactFooter from './ContactFooter'


function NavLink({ to, children }: any) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({ open, setOpen }: any) {
    return (

        <div className={`absolute z-50 top-0 left-0 h-screen w-screen bg-slate-500 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
                <a className="text-xl font-semibold" href="/">
                    <Logo />
                </a>
            </div>
            <div className="flex flex-col text-center">
                {navLinks.map((link, index) => {
                    return <Link href={link.href} key={index}>
                        <a className="p-4 text-3xl text-slate-50 border-b-2 border-gray-900" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                            {link.name}
                        </a>
                    </Link>
                })}
            </div>
            <ContactFooter />
        </div>
    )
}

function Header() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md bg-white px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen} />
            <div className="w-3/12 flex items-center">
                <a className="text-2xl font-semibold" href="/">C-L</a>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                    {navLinks.map((link, index) => {
                        return <NavLink key={index} to={link.href}>{link.name}</NavLink>
                    })}
                </div>
            </div>
        </nav>
    )
}


export default Header