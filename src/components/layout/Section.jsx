import React from 'react';

const Section = ({ children, className = '', id = '', size = 'large' }) => {
  const paddingClass = size === 'medium' ? 'padding-section-medium' : 'padding-section-large';

  return (
    <section
      id={id}
      className={`section-${id} ${paddingClass} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
