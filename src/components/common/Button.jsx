import React from 'react';

const isExternalLink = (url) => url?.startsWith('http');

const Button = ({
    children,
    onClick,
    type = 'button',
    variant = 'primary',
    className = '',
    href = null,
    target,
    rel
}) => {
    const variantClass = variant === 'primary'
        ? 'bg-color-primary text-white'
        : 'bg-white text-black';

    const baseClasses = `button-shadow px-6 py-3 text-base font-semibold cursor-pointer outline-none inline-block text-center ${variantClass} ${className}`;

    if (href) {
        const external = isExternalLink(href);
        return (
            <a
                href={href}
                className={baseClasses}
                target={target ?? (external ? '_blank' : undefined)}
                rel={rel ?? (external ? 'noopener noreferrer' : undefined)}
            >
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
