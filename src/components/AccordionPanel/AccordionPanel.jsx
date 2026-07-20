import React, { useState } from 'react'
import { LuChevronDown, LuChevronUp } from 'react-icons/lu';
import "./AccordionPanel.css"

const AccordionPanel = ({ title, icon, children, defaultOpen = true }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className='accordion-card'>
      <div className="accordion-header" onClick={()=>setIsOpen(!isOpen)}>
        <div className="accordion-title">
          <span className='accordion-icon'>{icon}</span>
          <span>{title}</span>
        </div>
        {isOpen ? <LuChevronUp/> : <LuChevronDown/>}
      </div>
      {isOpen && (
        <div className="accordion-body">
            {children}
        </div>
      )}
    </div>
  )
}

export default AccordionPanel
