import Link from "next/link"
import { navLinks } from "../utils/data";
import Logo from "./Logo";
import useCollapse from 'react-collapsed'
import React, { useState } from "react";

function Collapse({ /* isActive */ }) {
/*     const [isExpanded, setExpanded] = React.useState(isActive);
    const { getToggleProps, getCollapseProps } = useCollapse({
        isExpanded
    });

    React.useEffect(() => {
        setExpanded(isActive);
    }, [isActive, setExpanded]);
 */
/*     return (
        <>
            <button
                {...getToggleProps({
                    style: { display: "block" },
                    onClick: () => setExpanded((x: any) => !x)
                })}
            >
                {isActive ? "Collapse" : "Expand"}
            </button>
            <div {...getCollapseProps({ style: { backgroundColor: "lightblue" } })}>
                <h2 style={{ margin: 0, padding: 10 }}>
                    Start editing to see some magic happen!
                </h2>
            </div>
        </>
    );
 */}


function Header() {

    const [isExpanded, setExpanded] = useState(false)
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })
    return (
        <header className="flex justify-between p-5 max-w-7xl mx-auto">
            <div className=" cursor-pointer flex items-center space-x-5">
                <Link href="/">
                    <div>
                        <Logo />
                    </div>
                </Link>
            </div>
            <button onClick={() => setExpanded((x) => !x)} id="triggerEl" type="button" className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
{/*             <Collapse isActive={isExpanded} />
 */}            <div className="hidden md:block w-full md:w-auto" id="targetEl">
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    {navLinks.map((link, index) => {
                        return <div key={index}>
                            <Link href={link.href}>
                                <a className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page" key={index}>{link.name}</a>
                            </Link>
                        </div>
                    })}
                </ul>
            </div>
            <div {...getCollapseProps({ style: { backgroundColor: "lightblue" } })}>
                <h2 style={{ margin: 0, padding: 10 }}>
                    Start editing to see some magic happen!
                </h2>
            </div>
        </header>
    )
}

export default Header