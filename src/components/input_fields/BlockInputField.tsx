interface Props {
    type: string,
    placeholder: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function BlockInputField({type, placeholder, onChange} : Props) {
    return (
        <input 
            type={type} 
            placeholder={placeholder} 
            className={`outline-none w-full py-2 px-4 border border-gray-400 rounded-md text-sm`} 
            onChange={onChange}/>
    )
}

export default BlockInputField