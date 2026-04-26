import { useNavigate } from "react-router-dom";

function ItemAddHook() {
    const navigate = useNavigate()

    const ID = 'id'
    const NAME = 'name'

    function handleAddItem(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const id = formData.get(ID)
        const name = formData.get(NAME)
    }

    const handleBack = () => navigate('/items')

    return { ID, NAME, handleAddItem, handleBack }
}

export default ItemAddHook