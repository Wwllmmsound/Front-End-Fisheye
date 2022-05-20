import { PhotographerApi } from '../api/Api.js'
import { PhotographerModel } from './PhotographerModel.js'
import { MediaFactory } from '../factory/MediaFactory.js'


class PhotographerMedia {
    constructor(photographerId, title, image, video, likes, date, price, name) {
        this._id = (new URL(document.location)).searchParams.get("id"),
            this._photographerId = photographerId,
            this._title = title,
            this._image = image,
            this._video = video,
            this._likes = likes,
            this._date = date,
            this._price = price,
            this._name = name,
            this.photographersApi = new PhotographerApi('../data/photographers.json')
    }
    get id() {
        return this._id
    }
    setId(id) {
        this._id = id;
    }
    get photographerId() {
        return this._photographerId
    }
    setTitle() {
        this._title = title
    }
    get title() {
        return this._title
    }
    setImage(image) {
        this._image = image
    }
    get image() {
        return this._image
    }
    setVideo(video) {
        this._video = video
    }
    get video() {
        return this._video
    }
    setLikes(likes) {
        this._likes = likes
    }
    get likes() {
        return this._likes
    }
    setDate() {
        this._date = date
    }
    get date() {
        return this._date
    }
    setPrice() {
        this._price = price
    }
    get price() {
        return this._price
    }
    setName(name) {
        this._name = name
    }



    // ________________________FUNCTION CREATING THE PHOTOS GRID______________________




    async getPhotographerNameById(id) {

        let name = "";

        const photographersHead = await this.photographersApi.getPhotographer();
        const listPhotographers = photographersHead.map(photographer => new PhotographerModel(
            photographer.name,
            photographer.portrait,
            photographer.city,
            photographer.country,
            photographer.tagline,
            photographer.price,
            photographer.id
        ))
        console.log(listPhotographers);

        for (let photographer of listPhotographers) {
            if (photographer.id == id) {
                name = photographer.name;
            }
        }

        return name;
    }

    async init() {
        const allPhotos = await this.photographersApi.getMedia();
        const listPhotos = allPhotos.map(media => new PhotographerMedia(
            media.photographerId,
            media.title,
            media.image,
            media.video,
            media.likes,
            media.date,
            media.price
        ))

        for (let media of listPhotos) {
            if (media.photographerId == this._id) {
                let name = await this.getPhotographerNameById(media.photographerId);
                const mediaDisplay = new MediaFactory(media, name);
                this.setName(name);
                if (media._video != undefined) {
                    this.setVideo(media._video);
                } else {
                    this.setImage(media._image);
                }
                this.setLikes(media.likes);
                mediaDisplay.displayCard(media);

            }
        }
    }
}
const photographerMedia = new PhotographerMedia();
photographerMedia.init();
export { PhotographerMedia };