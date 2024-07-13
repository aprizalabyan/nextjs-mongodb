"use client"

import React from 'react'

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  className?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  type?: 'button' | 'submit' | 'reset';
}

const ButtonDefault: React.FC<Props> = ({ children, onClick, className, icon: Icon, type }) => {
  return (
  <button
    type={type}
    onClick={onClick}
    className={`flex justify-center gap-2 items-center px-2 py-1 rounded hover:bg-gray-400 shadow-sm ${className}`}
  >
    {Icon && <Icon className="w-4 h-4" />}
    {children}
  </button>
  )
}

export default ButtonDefault