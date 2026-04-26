import type { RemixiconComponentType } from "@remixicon/react"
import React from "react"

interface Props {
    icon: RemixiconComponentType,
    title: string
    onClick: () => void
}

function IconBtn({ icon, title, onClick } : Props) {
    const Icon = React.createElement(icon)

    return (
        <button onClick={onClick} title={title}>
            {Icon}
        </button>
    )
}

export default IconBtn