import React from 'react';

interface SearchIconProps {
    width: string;
    height: string;
    color: string;
}

const IconePesquisa: React.FC<SearchIconProps> = ({ width, height, color }) => (
<div  className='op-index-map'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={width} height={height} style={{ fontSize: '1.5rem' }}>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
    </div>
);

export default IconePesquisa;
