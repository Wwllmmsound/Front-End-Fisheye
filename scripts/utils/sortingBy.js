import { PhotographerApi } from '../api/Api.js';
import { PhotographerMedia } from '../models/PhotographerMedia.js';
import { MediaFactory } from '../factory/MediaFactory.js';
import { SortFactory } from '../factory/SortFactory.js';

export function sortingBy(){
    const photographersApi = new PhotographerApi('../data/photographers.json');
    const allPhotos = photographersApi.getMedia();
    const mediaContainer = document.getElementById('photosList');
    const options = document.querySelector('.orderBy');
    var photographerMedia_ = new PhotographerMedia();

    // renvoie tous les médias pour le photographe demandé



    options.addEventListener("input", (event) =>{
        var id_ =  document.getElementById("orderBy").id;
        var text_ = document.getElementById("orderBy").value;
        let name;
        let medias = sorting(event.target.value);


        photographerMedia_.getPhotographerNameById(photographerMedia_.id)

            .then((res)=>{
                name=res;
                photographerMedia_.initMediaDisplay(medias,name);
            });



            console.log("click",text_);
            console.log(medias);

        // relance la fonction du display des medias
        // afficher les medias sorted
    });

   // selectionne l'ordre d'affichage des médias


    async function sorting(text_) {


    // vide le conteneur de médias
    mediaContainer.innerHTML = '';

   console.log(photographerMedia_);

   var med =  await photographerMedia_.getMediaByPhotographer(photographerMedia_.id);
   var name = await  photographerMedia_.getPhotographerNameById(med.photographerId);

        switch (text_) {
            case 'popular':
                return med.sort(function(a, b) {

                    console.log("Sorted by number of Likes");

                    return b.likes - a.likes });
                break;

            case 'date':
                return med.sort(function(a, b){

                    console.log("Sorted by Date");
                    return new Date(b.date) - new Date(a.date)
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