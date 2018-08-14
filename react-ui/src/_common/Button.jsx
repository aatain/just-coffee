import React from 'react'

export const Button = ({ text, onClick, type, disabled, styles}) => (
    <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={`btn ${styles}`}
    >
    { text }
    </button >
);

export default Button;