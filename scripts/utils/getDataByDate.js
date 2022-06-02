import { PhotographerApi } from '../api/Api.js'
import { PhotographerMedia } from '../models/PhotographerMedia.js'

export function getDataByDate(){
    const photographersApi = new PhotographerApi('../data/photographers.json');
    const allPhotos = photographersApi.getMedia();


    document.querySelector('#selectdate').addEventListener("click", (event) => {
        allPhotos.sort(function(a, b){
            return new Date(b.date) - new Date(a.date)
                });
        console.log("Sorted by Date");
        });
        console.log(allPhotos);
}

// Array.from(allPhotos).sort()