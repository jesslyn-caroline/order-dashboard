import { useState } from "react"
import { useNavigate } from "react-router-dom"

function ItemListHook() {
    const navigate = useNavigate()

    const [search, setSearch] = useState<string>('')
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)  

    const handleAddItem = () => navigate('/item/add')

    return {
        search,
        handleSearch,
        handleAddItem
    }
}

export default ItemListHook