import { ChangeEvent as Event } from 'react'

type InputType = {
    label: string
    type: string
    inputChange: (e: Event<HTMLInputElement> | Event<HTMLTextAreaElement>) => void
    inputValue: string
}

export default function Input({
    label,
    type,
    inputChange,
    inputValue,
}: InputType) {
    let isTextarea: boolean = false

    if (type === 'textarea') {
        isTextarea = true
    }

    return (
        <div className='flex flex-col gap-4'>
            <label htmlFor={label.toLowerCase()}>
                {label[0].toUpperCase() + label.slice(1)}
            </label>
            {isTextarea ? (
                <textarea
                    name={label}
                    className='input h-32'
                    rows={5}
                    onChange={inputChange}
                    value={inputValue}
                />
            ) : (
                <input
                    type={type}
                    name={label.toLowerCase()}
                    className='input'
                    onChange={inputChange}
                    value={inputValue}
                />
            )}
        </div>
    )
}
