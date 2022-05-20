import { PhotographerVideo } from '../models/PhotographerVideo.js'
import { PhotographerImage } from '../models/PhotographerImage.js'
class MediaFactory {
    // element reprente here our media
    // on teste ici si notre media a comme proprieté video ou image 
    constructor(element, name) {

        if (element._video != undefined) {
            console.log(name);
            console.log(element);
            return new PhotographerVideo(name, element)
        } else if (element._image != undefined) {
            return new PhotographerImage(name, element)
        } else {
            throw 'Unknown type format'
        }
    }
}

export { MediaFactory };