import { PhotographerApi } from '../api/Api.js';
import { PhotographerMedia } from '../models/PhotographerMedia.js';
import { MediaFactory } from '../factory/MediaFactory.js';
import { SortFactory } from '../factory/SortFactory.js';

export function sortingBy(){
    const photographersApi = new PhotographerApi('../data/photographers.json');
    const allPhotos = photographersApi.getMedia();
    const mediaContainer = document.getElementById('photosList');

    const options = document.querySelectorAll('.orderBy');

    var photographerMedia_ = new PhotographerMedia();

    // renvoie tous les médias pour le photographe demandé

   for(let option of options){

    option.addEventListener("click", (event) =>{
        var id_ =  document.getElementById("orderBy").id;
        var text_ = document.getElementById("orderBy").value;
        let medias = sort(text_);
            console.log("click",text_);
            console.log(medias);

        // relance la fonction du display des medias
        // afficher les medias sorted
    });
   }

   // selectionne l'ordre d'affichage des médias


    async function sort(text_) {


    // vide le conteneur de médias
    mediaContainer.innerHTML = '';

    

   console.log(photographerMedia_);

   var med =  await photographerMedia_.getMediaByPhotographer(photographerMedia_.id);
   var name = await  photographerMedia_.getPhotographerNameById(med.photographerId);

    console.log(med)
    const newListPhotos = med.map(media => new PhotographerMedia(
        media.photographerId,
        media.title,
        media.image,
        media.video,
        media.likes,
        media.date,
        media.price
    ))
    mediaContainer.innerHTML = newListPhotos;

    // var sortMedia = new SortFactory(med);
    //     mediaContainer.innerHTML = med;
        switch (text_) {
            case 'popular':
                return med.sort(function(a, b) {

                    console.log("Sorted by number of Likes");

                    return b._likes - a._likes });
                break;

            case 'date':
                return med.sort(function(a, b){

                    console.log("Sorted by Date");
                    return new Date(b._date) - new Date(a._date)
                        });
                break;

            case 'title':
                return med.sort(function(a, b) {
                    console.log("Sorted by Title");
                    return (a.title > b.title) ? 1 : -1;
                });
                break;
                    // affichage par défaut
            default:
                return med
        }
    }
}