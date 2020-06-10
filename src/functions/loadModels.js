import * as face from 'face-api.js'

const loadModels = (callback) => {
    Promise.all([
        face.loadSsdMobilenetv1Model(process.env.PUBLIC_URL+'/models'),
        face.loadTinyFaceDetectorModel(process.env.PUBLIC_URL+'/models'),
        face.loadFaceLandmarkModel(process.env.PUBLIC_URL+'/models'),
        face.loadFaceLandmarkTinyModel(process.env.PUBLIC_URL+'/models'),
        face.loadFaceRecognitionModel(process.env.PUBLIC_URL+'/models'),
        face.loadFaceExpressionModel(process.env.PUBLIC_URL+'/models')
    ]).then(async () => {
       callback()
    }).catch(err => console.error(JSON.stringify(err)))
}

export default loadModels