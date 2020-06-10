import * as face from 'face-api.js'

const loadModels = (callback) => {
    Promise.all([
        face.loadSsdMobilenetv1Model('/models'),
        face.loadTinyFaceDetectorModel('/models'),
        face.loadFaceLandmarkModel('/models'),
        face.loadFaceLandmarkTinyModel('/models'),
        face.loadFaceRecognitionModel('/models'),
        face.loadFaceExpressionModel('/models')
    ]).then(async () => {
       callback()
    }).catch(err => console.error(JSON.stringify(err)))
}

export default loadModels