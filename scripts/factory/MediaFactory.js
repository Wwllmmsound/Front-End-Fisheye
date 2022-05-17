class MediaFactory {
    constructor(video, image){
        if (video === null){
            return new PhotographerImage(image)
        } else if (image === null){
            return new PhotographerVideo(video)
        } else {
            throw 'Unknown format type'
        }
    }
}