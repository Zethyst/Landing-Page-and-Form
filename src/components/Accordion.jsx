import React, { useState, useRef } from 'react';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);
    const contentRef = useRef(null);

    const toggleAccordion = () => {
        setIsActive(!isActive);
        contentRef.current.style.maxHeight = isActive ? null : `${contentRef.current.scrollHeight}px`;
    };

    return (
        <div className={`accordion-item ${isActive ? 'active' : ''}`}>
            <h2 onClick={toggleAccordion} className='w-[430px]'>{title}</h2>
            <div ref={contentRef} className="accordion-content mb-2">
                {content}
            </div>
        </div>
    );
};

export default Accordion;
