import React from 'react';
import { Button } from 'antd';

const CustomButton = ({text, type, onClick}) => {
    return ( 
        <Button onClick={() => onClick()} type={type}>{text}</Button>
     );
}
 
export default CustomButton;