import { PhotographerApi } from '../api/Api.js'
import { PhotographerMedia } from '../models/PhotographerMedia.js'

export function sortingBy(){
    const photographersApi = new PhotographerApi('../data/photographers.json');
    const allPhotos = photographersApi.getMedia();


// ________________________________DATE SORTING EVENT___________________________
    document.querySelector('#selectDate').addEventListener("click", (event) => {
        allPhotos.sort(function(a, b){

            return new Date(b.date) - new Date(a.date)
                });
        console.log("Sorted by Date");
        });
// ________________________________LIKES SORTING EVENT___________________________
    document.querySelector('#selectPopular').addEventListener("click", (event) => {
        allPhotos.sort((a, b) => b.age - a.age);

        console.log("Sorted by number of Likes");
        });
// ________________________________TITLE SORTING EVENT___________________________
    document.querySelector('#selectTitle').addEventListener("click", (event) => {
        allPhotos.sort(function(a, b){
            let fa = a.title.toLowerCase();
            let fb = b.title.toLowerCase();

            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
                });
        console.log("Sorted by Title");
        });

        console.log(allPhotos);
}

// Array.from(allPhotos).sort()