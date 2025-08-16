import React from 'react'

function Button({ className, text, divclassName, icon, onClick, type }) {
  return (
    <div className={divclassName}>
        <button type={type} className={className} onClick={onClick}>
          {text}
          {icon}
        </button>
    </div>
  );
}

export default Button