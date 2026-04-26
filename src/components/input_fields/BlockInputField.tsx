interface Props {
    type: string,
    placeholder: string,
    name?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function BlockInputField({type, placeholder, name, onChange} : Props) {
    return (
        <input 
            type={type} 
            placeholder={placeholder} 
            name={name}
            className={`outline-none w-full py-2 px-4 border border-gray-400 rounded-md text-sm`} 
            onChange={onChange}/>
    )
}

export default BlockInputField