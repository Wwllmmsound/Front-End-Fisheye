class Api {
    constructor(url) {
        this._url = url
    }

    async get() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.photographers)
            .catch(err => console.log('an error occurs', err))
    }
}

class PhotographerApi extends Api {
    constructor(url) {
        super(url)
    }

    async getPhotographer() {
        console.log('Donnée récupéré');
        return await this.get();
    }

    async getMedia(){
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.media)
            .catch(err => console.log('an error occurs', err))
    }
};

export { PhotographerApi };