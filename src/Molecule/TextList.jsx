import React from 'react';
import "$css/textList.css"


const TextList = ({datas}) => {
    return ( 
       <div className="main-text-list-container-style">
            {datas.map((el) => el )}
       </div>
     );
}
 
export default TextList;