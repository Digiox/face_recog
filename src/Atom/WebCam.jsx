import React from 'react';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import * as face from 'face-api.js'
import { useCallback } from 'react';
import loadModels from '$functions/loadModels.js'

const WebCam = ({ faceDetection, screenShot }) => {

    const videoContainerRef = useRef()
    const [loaded, setLoaded] = useState(false)
    const canvas = useRef()

    const takeScreenShot = () => {
        console.log('screenShot')
        const ctx = canvas.current.getContext('2d');
        ctx.drawImage(videoContainerRef.current, 0, 0, canvas.current.width, canvas.current.height)
        const data = canvas.current.toDataURL('image/png')
        return new Promise((resolve, reject) => {
            if (data) {
                resolve(data)
            }else {
                reject("ERROR")
            }
        })
    }

    const handleUserMedia = useCallback(async (stream) => {

      
        if (!loaded) {
            await videoContainerRef.current.pause()
            loadModels(async () => {
                setLoaded(true)
                videoContainerRef.current.srcObject = stream
                await videoContainerRef.current.play()
            })
        }
    }, [loaded])

    const handleMediaError = (err) => {
        console.error(err)
    }
    const getWebCamVideoSource = useCallback(() => {
        navigator.getUserMedia({ audio: false, video: { width: 500, height: 500 } }, (stream) => handleUserMedia(stream), (err) => handleMediaError(err))
    }, [handleUserMedia])


    useEffect(() => {
       if (screenShot) {
        screenShot(takeScreenShot)
       }
        getWebCamVideoSource()
        let interval;
        if (loaded) {
            interval = setInterval(async () => {
                canvas.current.getContext('2d').clearRect(0, 0, canvas.current.width, canvas.current.height)

                const displaySize = {
                    width: videoContainerRef.current.width, height: videoContainerRef.current.height
                }
                face.matchDimensions(canvas.current, displaySize)
                const detections = await face.detectAllFaces(videoContainerRef.current, new face.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
                const resizedDetections = face.resizeResults(detections, displaySize)
                if (faceDetection.square) {
                    face.draw.drawDetections(canvas.current, resizedDetections)
                }
                if (faceDetection.landmarks) {
                    face.draw.drawFaceLandmarks(canvas.current, resizedDetections)
                }
                if (faceDetection.expression) {
                    face.draw.drawFaceExpressions(canvas.current, resizedDetections)
                }
            }, 100)
            return () => clearInterval(interval)
        }
    }, [loaded, faceDetection, getWebCamVideoSource, screenShot])
    return (

        <div>
            <canvas width="500" height="500" style={{ position: "absolute" }} ref={canvas} ></canvas>
            <video style={{visibility: 'visible'}} width="500" height="500" ref={videoContainerRef} />
        </div>


    );
}

export default WebCam;