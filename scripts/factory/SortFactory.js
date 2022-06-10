import { PhotographerVideo } from '../models/PhotographerVideo.js'
import { PhotographerImage } from '../models/PhotographerImage.js'
import { sortingBy } from '../utils/sortingBy.js'

class SortFactory {
    constructor(element, med) {
        if (element._video != undefined) {
            return new PhotographerVideo(med, element)
        } else if (element._image != undefined) {
            return new PhotographerImage(med, element)
        } else {
            throw 'Unknown type format'
        }
    }
}

export { SortFactory };