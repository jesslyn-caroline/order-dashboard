import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

function IndexLayout() {
    return (
        <div className={`max-w-480 min-h-screen w-full h-fit flex flex-row `}>
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default IndexLayout