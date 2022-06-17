export function lightbox(){

    const photographersApi = new PhotographerApi('../data/photographers.json');
    const allPhotos = photographersApi.getMedia();
    const mediaContainer = document.getElementById('photosList');
    const item = document.querySelector('.item');
    var photographerMedia_ = new PhotographerMedia();
}

