import React from 'react';
import {CustomButton} from '@atoms';
import '$css/buttonList.css'

const ButtonList = ({datas, pressedCallBack}) => {
    return (
        <div className='buttonList-global-container'>
            {datas.map((element, k) => <CustomButton key={k} onClick={() => pressedCallBack(element.name)} type={element.type} text={element.text} />)}
        </div>
     );
}
 
export default ButtonList;