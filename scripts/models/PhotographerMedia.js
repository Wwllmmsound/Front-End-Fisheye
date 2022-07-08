import { PhotographerApi } from '../api/Api.js'
import { PhotographerModel } from './PhotographerModel.js'
import { MediaFactory } from '../factory/MediaFactory.js'
import { likesCounter } from '../utils/likesCounter.js'
import { sortingBy } from '../utils/sortingBy.js'
import { LightboxModal } from '../models/LightboxModal.js'

class PhotographerMedia {
    constructor(photographerId, title, image, video, likes, date, price, id, name) {
        this._id = (new URL(document.location)).searchParams.get("id"),
        this._photographerId = photographerId,
        this._title = title,
        this._image = image,
        this._video = video,
        this._likes = likes,
        this._date = date,
        this._price = price,
        this.imageId = id,
        this.photographersApi = new PhotographerApi('../data/photographers.json'),
        this._name = name
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


    async displayPhotosCard(media){
        const photosList = this.PhotographerPhotoList(media);
        const photosSection = document.querySelector("#photosList");

        photosSection.appendChild(photosList);
    }

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

        for (let photographer of listPhotographers) {
            if (photographer.id == this._id) {
                name = photographer.name;
            }
        }

        return name;
    }

    async getMediaByPhotographer(){
        const allPhotos = await this.photographersApi.getMedia();
        const listPhotos = allPhotos.map(media => new PhotographerMedia(
            media.photographerId,
            media.title,
            media.image,
            media.video,
            media.likes,
            media.date,
            media.price,
            media.id
        ))
    	let tab = [];

    	for(let media of listPhotos){
            if(media.photographerId == this._id){
        	    tab.push(media);
        	}
        }
    	return tab
    }

    async initMediaDisplay(medias, name){
        const photosSection = document.querySelector("#photosList");

        let tabMedia = await medias;

        for(let media of tabMedia){
            const display = new MediaFactory(media, name);
            if (media._video != undefined) {
                this.setVideo(media._video);
            } else {
                this.setImage(media._image);
            }
            display.displayCard();
            likesCounter();
        }
    }

    async displayligthBox() {
        const pictures = document.querySelectorAll(".item");
        pictures.forEach((element) => {
          element.addEventListener("click", async (e) => {
            console.log(e.target.id);
            e.preventDefault();
            const background = document.getElementById("lightboxModal");
            background.style.display = "block";
            background.setAttribute("aria-hidden", "false");
            const medias = await this.getMediaByPhotographer();
            let photographerName = await this.getPhotographerNameById();
            console.log(photographerName);
            let mediaId = e.target.id;
            console.log(mediaId);
            let lightbox = new LightboxModal(medias, photographerName);
            console.log(lightbox);
            lightbox.displayModal(mediaId, medias, photographerName);
            });
        });
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
            media.price,
            media.id
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
        likesCounter();
        sortingBy();
        this.displayligthBox();
    }
}
const photographerMedia = new PhotographerMedia();
photographerMedia.init();
export { PhotographerMedia };