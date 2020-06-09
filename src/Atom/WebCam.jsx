import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import * as face from 'face-api.js'

const WebCam = ({ faceDetection }) => {
    const videoContainerRef = useRef()
    const canvas = useRef()
    const handleUserMedia = async (stream) => {
      
        Promise.all([
            face.loadSsdMobilenetv1Model('/models'),
             face.loadTinyFaceDetectorModel('/models'),
             face.loadMtcnnModel('/models'),
             face.loadFaceLandmarkModel('/models'),
             face.loadFaceLandmarkTinyModel('/models'),
             face.loadFaceRecognitionModel('/models'),
             face.loadFaceExpressionModel('/models')
        ]).then(async () => {
            videoContainerRef.current.srcObject = stream
            await videoContainerRef.current.play()
            if (faceDetection) {
                faceDetectionHandler()
            }
        }).catch(err => console.error(JSON.stringify(err)))
    }

    const handleMediaError = (err) => {
        console.error(err)
    }
    const getWebCamVideoSource = () => {
        navigator.getUserMedia({ audio: false, video: true }, (stream) => handleUserMedia(stream), (err) => handleMediaError(err))
    }

    const faceDetectionHandler = async () => {
     
        console.log(canvas.current)
        console.log(videoContainerRef.current)
        console.log("interval")
        setInterval(async () => {
         
            const displaySize = {
                width: videoContainerRef.current.width, height: videoContainerRef.current.height
            }
            face.matchDimensions(canvas.current, displaySize)
            const detections = await face.detectAllFaces(videoContainerRef.current, new face.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
            const resizedDetections = face.resizeResults(detections, displaySize)
            canvas.current.getContext('2d').clearRect(0, 0, canvas.current.width, canvas.current.height)
            face.draw.drawDetections(canvas.current, resizedDetections)
            face.draw.drawFaceLandmarks(canvas.current, resizedDetections)
            face.draw.drawFaceExpressions(canvas.current, resizedDetections)
            console.log(detections)
        }, 100)
    }
    useEffect(() => {
        getWebCamVideoSource()
    })
    return (
        <div>
            <canvas width="500" height="500" style={{position:"absolute", zIndex:1000}} ref={canvas} />
            <video width="500" height="500" ref={videoContainerRef} />
        </div>
    );
}

export default WebCam;