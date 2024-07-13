"use client"

import React, { useState, useEffect } from 'react'

interface Props {
  id?: string;
  label?: string;
  value?: string;
  className?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  prevendIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  appendIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const InputTextDefault: React.FC<Props> = ({ id, label, onChange, value, className, required, prevendIcon: PrevendIcon, appendIcon: AppendIcon, }) => {
  const [inputId, setInputId] = useState(id || '');

  useEffect(() => {
    if (!id) {
      setInputId(`field-${Math.random().toString().substring(2, 8)}`);
    }
  }, [id]);

  return (
    <div>
      <label htmlFor={inputId} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="flex gap-3 px-3 py-2 items-center border border-gray-300 rounded-md shadow-sm bg-gray-100">
        {PrevendIcon && <PrevendIcon className="w-4 h-4 text-gray-500" />}
        <input
          type="text"
          id={inputId}
          onChange={onChange}
          value={value}
          className='block w-full focus:outline-none sm:text-sm bg-gray-100'
          required={required}
        />
        {AppendIcon && <AppendIcon className="w-4 h-4 text-gray-500" />}
      </div>
    </div>
  )
}

export default InputTextDefault