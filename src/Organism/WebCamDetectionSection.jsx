import React from 'react';
import { useState } from 'react';
import { WebCam } from '@atoms';
import { ButtonList, TextList } from '@molecules'
import "$css/webCamDetectionSection.css"


const WebCamDetectionSection = () => {
    const [faceSquareState, setFaceSquareState] = useState(true)
    const [faceLandMarkState, setFaceLandmarkState] = useState(false)
    const [faceExpressionState, setFaceExpressionState] = useState(false)

    const handleStateChange = (name) => {

        switch (name) {
            case "face_square":
                setFaceSquareState(!faceSquareState)
                break;
            case "face_landmark":
                setFaceLandmarkState(!faceLandMarkState)
                break;
            case "face_expression":
                setFaceExpressionState(!faceExpressionState)
                break;
            default:
                break;
        }

        console.log(name)
    }
    return (
        <div className='webcam-container-style'>
            <WebCam faceDetection={{
                square: faceSquareState,
                landmarks: faceLandMarkState,
                expression: faceExpressionState
            }} />
            <div className="propeties-managment-style">
                <ButtonList datas={[
                    {
                        type: "primary",
                        text: "Face square",
                        name: "face_square"
                    },
                    {
                        type: "primary",
                        text: "Face landmark",
                        name: "face_landmark"
                    },
                    {
                        type: "primary",
                        text: "Face expression",
                        name: "face_expression"
                    }
                ]}
                    pressedCallBack={(name) => handleStateChange(name)}
                />
                <TextList datas={[
                    <p key={"faceSquareKey"}>Face squares: <span style={faceSquareState ? { color: "white", backgroundColor: 'green', padding: "5px" } : { color: "white", backgroundColor: 'red', padding: "5px" }}>{faceSquareState ? "Enabled" : "Disabled"}</span></p>,
                    <p key={"faceLandmarksKey"}>Face landmarks: <span style={faceLandMarkState ? { color: "white", backgroundColor: 'green', padding: "5px" } : { color: "white", backgroundColor: 'red', padding: "5px" }}>{faceLandMarkState ? "Enabled" : "Disabled"}</span></p>,
                    <p key={"faceExpressionKey"}>Face expressions: <span style={faceExpressionState ? { color: "white", backgroundColor: 'green', padding: "5px" } : { color: "white", backgroundColor: 'red', padding: "5px" }}>{faceExpressionState ? "Enabled" : "Disabled"}</span></p>
                ]} />
                {/* <CustomButton onClick={() => setScreenShot(!screenShotChangeHandler)} type='primary' text="Take screenshot" />
                {imgDatas && <img src={imgDatas} />} */}
            </div>
        </div>
    );
}

export default WebCamDetectionSection;