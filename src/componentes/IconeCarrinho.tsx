import React from 'react';

interface CartIconProps {
    width: string;
    height: string;
    color: string;
}

const iconeCarrinho: React.FC<CartIconProps> = ({ width, height, color }) => (
    <div>
        <img src="https://svgsilh.com/svg_v2/2655083.svg" width={width} height={height} color={color} alt="" />
        <text style={{
            borderWidth: '1px',
            borderStyle: 'double',
            borderRadius: '50%',
            position: 'relative',
            fontSize: '15px',
            padding: '2px 9px',
            top: '-5px',
            left: '12px',

        }}>0</text>
    </div>
);

export default iconeCarrinho;
