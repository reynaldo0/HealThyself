import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion flex flex-col">
      {items.map((item, index) => (
        <div key={index} className="accordion-item my-2">
          <button
            className={`accordion-title flex w-full items-center justify-between rounded-t-lg px-4 py-4 text-white transition duration-300 focus:outline-none ${
              activeIndex === index ? 'bg-primary-300' : 'bg-primary-200'
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <span className="text-base font-medium md:text-lg">{item.title}</span>
            <svg
              className={`plus-icon h-4 w-4 fill-current ${
                activeIndex === index ? 'hidden' : ''
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M7 10V4a1 1 0 0 1 2 0v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H4a1 1 0 1 1 0-2h6z" />
            </svg>
            <svg
              className={`minus-icon h-4 w-4 fill-current ${
                activeIndex === index ? '' : 'hidden'
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 9h12a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            </svg>
          </button>
          <div
            className={`accordion-content rounded-b-lg px-4 py-2 text-base ${
              activeIndex === index ? 'block bg-primary-200 text-slate-100' : 'hidden'
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;