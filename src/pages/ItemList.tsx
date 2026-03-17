import items from "../data/dummyItemList"
import { RiAddLine } from "@remixicon/react";

function ItemList() {
    return (
        <div className={`min-h-screen w-full h-full px-6 pt-6 flex flex-col space-y-4`}>
            <div className={`flex flex-row space-x-4 items-center`}>
                <input type="text" placeholder="Cari" className={`outline-none w-full py-2 px-4 border border-gray-400 rounded-md text-sm`}/>
                <button className={`w-fit bg-blue-700 text-white flex flex-row items-center py-2 px-2 rounded-md space-x-2 cursor-pointer`} title="Tambah Barang">
                    <RiAddLine className={`w-5`}/>
                    <span className={`text-sm font-semibold`}>Tambah</span>
                </button>
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
                    { items.map((item, index) => {
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