import React from 'react'
import { Header } from '@organism';
import { WebCam } from '@atoms';
import '$css/hub.css'


const Hub = () => {

    return (
        <div>
            <Header />
            <div className='webcam-container-style'>
                <WebCam faceDetection={true} />
            </div>

        </div>);
}

export default Hub;