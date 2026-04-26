import { Link, useLocation } from "react-router-dom"
import pages from "../data/navigation"

function Sidebar() {
    const location = useLocation()

    return (
        <div className={`min-w-48 max-w-48 h-screen border-r border-gray-400 py-12 sticky top-0`}>
            <ul className={`w-full flex flex-col`}>
            { pages.menus.map((menu, index) => {
                return (
                    <li className={`w-full text-sm text-blue-900 ${ location.pathname === menu.path ? 'font-bold border-l-5 border-blue-900 px-4 bg-blue-50': 'px-5'} py-3`}>
                        <Link to={menu.path} key={index}>{menu.label}</Link>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default Sidebar