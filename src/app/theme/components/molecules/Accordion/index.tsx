import React, { useState } from "react";

// Define the type for AccordionProps
interface AccordionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children?: React.ReactNode;
}

// Memoized Accordion component
const Accordion: React.FC<AccordionProps> = React.memo(
  ({ title, isOpen, onToggle, children }) => {
    console.log(`Rendering ${title}`);

    return (
      <div className="accordion">
        <div className="accordion-header" onClick={onToggle}>
          <h2>{title}</h2>
          {/* Add an icon or text to indicate the accordion state (open/closed) */}
          {isOpen ? "[-]" : "[+]"}
        </div>
        {/* Conditionally render the content based on the accordion state */}
        {isOpen && <div className="accordion-content">{children}</div>}
      </div>
    );
  }
);

export default Accordion;
