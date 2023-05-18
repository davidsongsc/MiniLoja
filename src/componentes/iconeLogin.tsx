import React from 'react';

interface iconeLoginProps {
    width: string;
    height: string;
    color: string;
}

const IconeLogin: React.FC<iconeLoginProps> = ({ width, height, color }) => (

    <div className='op-index-map'>
        <text>Login</text>
    </div>


);

export default IconeLogin;
