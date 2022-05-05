import React from 'react';

const InputField = ({ label, type, name, placeholder, args }) => {
    return (
        <>
            <label htmlFor={name} className='text-sm font-medium leading-none text-gray-800'>{label}</label>
            <input {...args} type={type} name={name} placeholder={placeholder} id={name} className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"  />
        </>
    );
};

export default InputField;