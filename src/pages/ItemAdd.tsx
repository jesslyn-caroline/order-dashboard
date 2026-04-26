import { RiArrowLeftLine } from "@remixicon/react"
import IconBtn from "../components/buttons/IconBtn"
import BlockInputField from "../components/input_fields/BlockInputField"
import ItemAddHook from "../hooks/ItemAddHook"

function ItemAdd() {
    const { ID, NAME, handleAddItem, handleBack } = ItemAddHook()

    return (
        <div className={`max-w-480 min-h-screen w-full h-fit px-12 py-6 flex flex-col space-y-5`}>
            <IconBtn icon={RiArrowLeftLine} title="Kembali" onClick={handleBack} />
            <h1 className={`text-xl font-semibold`}>Tambah Barang</h1>
            <form onSubmit={handleAddItem} className={`flex flex-col space-y-4 max-w-1/3`}>
                <div className={`flex flex-col space-y-1`}>
                    <label className={`text-sm font-medium`}>Kode Barang</label>
                    <BlockInputField type="text" placeholder="Kode Barang" name={ID}/>
                </div>
                <div className={`flex flex-col space-y-1`}>
                    <label className={`text-sm font-medium`}>Nama Barang</label>
                    <BlockInputField type="text" placeholder="Nama Barang" name={NAME}/>
                </div>
            </form>
        </div>
    )
}

export default ItemAdd