import React from 'react';

const Container = ({ children, className = '', size = 'large' }) => {
    const containerClass = size === 'large' ? 'container-large' : 'container-medium';

    return (
        <div className={`${containerClass} padding-global ${className}`}>
            {children}
        </div>
    );
};

export default Container;
