import React from 'react';
interface IconeLookProps {
    width: string;
    height: string;
    color: string;
}

const IconeLook: React.FC<IconeLookProps> = ({ width, height, color }) => (

    <div className='op-index-map'>
        <text>Personalizados</text>

    </div>

);

export default IconeLook;
