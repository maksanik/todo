import React from 'react';
import './SwitchButton.css';

function SwitchButton({ path }) {
  return (
    <a href={path} className='switch-button'>Go to {path}</a>
  );
}

export default SwitchButton;