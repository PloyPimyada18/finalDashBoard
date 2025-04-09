import React, { useState } from 'react';

interface Reactor {
  value: string;
  label: string;
}

interface ReactorSelectorProps {
  selectedReactor: string;
  onReactorChange: (reactor: string) => void;
}

const ReactorSelector: React.FC<ReactorSelectorProps> = ({ selectedReactor, onReactorChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const reactors: Reactor[] = [
    { value: 'Reactor1', label: 'Reactor 1' },
    { value: 'Reactor2', label: 'Reactor 2' },
    { value: 'Reactor3', label: 'Reactor 3' },
    { value: 'Reactor4', label: 'Reactor 4' }
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200"
      >
        <span>{reactors.find(reactor => reactor.value === selectedReactor)?.label}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-10">
          {reactors.map((reactor) => (
            <button
              key={reactor.value}
              onClick={() => {
                onReactorChange(reactor.value);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm ${
                selectedReactor === reactor.value
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {reactor.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReactorSelector; 