import React from 'react';

interface FormInputProps {
    label?: string;
    placeholder?: string;
    type?: string;
}

const FormInput: React.FC<FormInputProps> = (props) => {
    const { label, placeholder, type = 'text' } = props;
    return (
        <div>
            <label
                htmlFor={props.label}
                tw='font-bold select-none text-base text-gray-700'
            >
                {label}
            </label>
            <input
                id={label}
                type={type}
                name={label}
                placeholder={placeholder}
                tw='block border border-blue-400 leading-4 mt-2 placeholder-gray-500 px-4 py-2 rounded-lg text-gray-900 transition-all w-full focus:outline-none focus:ring focus:ring-blue-200'
            />
        </div>
    );
};

export default FormInput;
