import { type RemixiconComponentType } from "@remixicon/react"
import React from "react"

interface Props {
    icon: RemixiconComponentType,
    text: string
}

function BlockIconTextBtn({ icon, text } : Props) {
    const Icon = React.createElement(icon)

    return (
        <button className={`w-fit bg-blue-700 text-white flex flex-row items-center py-2 px-2 rounded-md space-x-2 cursor-pointer`} title="Tambah Barang">
            <span className={`w-5`}>{Icon}</span>
            <span className={`text-sm font-semibold`}>{text}</span>
        </button>
    )
}

export default BlockIconTextBtn