import type { MenuProps } from "../models/MenuProps"
import Home from "../pages/Home"
import ItemList from "../pages/ItemList"
import PurchaseOrder from "../pages/PurchaseOrder"

const menus:MenuProps[] = [
    { path: '/', label: 'Home', element: <Home /> },
    { path: '/items', label: 'Items', element: <ItemList /> },
    { path: '/vendors', label: 'Vendors', element: <Home /> },
    { path: '/purchase-orders', label: 'Purchase Orders', element: <PurchaseOrder /> },
    { path: '/received-items', label: 'Received Items', element: <Home /> },
    { path: '/received-orders', label: 'Received Orders', element: <Home /> },
    { path: '/delivery-orders', label: 'Delivery Orders', element: <Home /> },
]

export default menus