import { PhotographerVideo } from '../models/PhotographerVideo.js'
import { PhotographerImage } from '../models/PhotographerImage.js'
class MediaFactory {
    constructor(element, name) {
        if (element._video != undefined) {
            return new PhotographerVideo(name, element)
        } else if (element._image != undefined) {
            return new PhotographerImage(name, element)
        } else {
            throw 'Unknown type format'
        }
    }
}

export { MediaFactory };