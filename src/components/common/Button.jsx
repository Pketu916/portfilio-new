import React from 'react';

const Button = ({
    children,
    onClick,
    type = 'button',
    variant = 'primary',
    className = '',
    href = null
}) => {
    const variantClass = variant === 'primary'
        ? 'bg-color-primary text-white'
        : 'bg-white text-black';

    const baseClasses = `button-shadow px-6 py-3 text-base font-semibold cursor-pointer outline-none inline-block text-center ${variantClass} ${className}`;

    if (href) {
        return (
            <a href={href} className={baseClasses}>
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={baseClasses}
        >
            {children}
        </button>
    );
};

export default Button;
