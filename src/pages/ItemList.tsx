import { useState } from "react";
import items from "../data/dummyItemList"
import { RiAddLine } from "@remixicon/react";
import BlockIconTextBtn from "../components/buttons/BlockIconTextBtn";
import BlockInputField from "../components/input_fields/BlockInputField";

function ItemList() {
    const [search, setSearch] = useState<string>('')
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)

    return (
        <div className={`min-h-screen w-full h-full px-6 pt-6 flex flex-col space-y-4`}>
            <div className={`flex flex-row space-x-4 items-center`}>
                <BlockInputField type="text" placeholder="Cari Barang" onChange={handleSearch}/>
                <BlockIconTextBtn icon={RiAddLine} text="Tambah"/>
            </div>
            <table className={`w-full text-sm text-black`}>
                <thead>
                    <tr className={`text-gray-500 border-b border-default`}>
                        <th scope="col" className={`px-6 py-3 font-semibold text-left w-1/4`}>Kode Barang</th>
                        <th scope="col" className={`px-6 py-3 font-semibold text-left`}>Nama</th>
                        <th scope="col" className={`px-6 py-3 font-semibold text-left w-1/8`}>Jumlah</th>
                    </tr>
                </thead>
                <tbody className={`divide-y divide-gray-300`}>
                    { items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())).map((item, index) => {
                        return (
                            <tr key={index}>
                                <td className={`px-6 py-3`}>{item.id}</td>
                                <td className={`px-6 py-3`}>{item.name}</td>
                                <td className={`px-6 py-3`}>{item.quantity}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ItemList