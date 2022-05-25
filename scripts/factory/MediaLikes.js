import { PhotographerPage } from './PhotographerPage.js'

class MediaLikes extends PhotographerPage{
    constructor(){
        super(photographerId, title, image, video, likes, date, price, name)
        this._id = (new URL(document.location)).searchParams.get("id")
    }

    mediaLikes(){
        for (let media of allDatas){
            document.querySelector('#like-button')
            .addEventListener('click', function(){
                var clicked = false;
                if (clicked === false && media.photographerId == this._id){
                    clicked = true;
                    media.likes ++;
                    e.classList.add();
                    console.log("1 more like");
                }
            })
        }
    }
}

export { MediaLikes }