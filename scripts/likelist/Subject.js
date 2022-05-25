class LikelistSubject {
    constructor(totalLikes, media){
        this._observers = totalLikes;
        this.media.likes = media;
    }

    like(media){
        this._observers.push(observer)

        console.log('tic tic');
    }

    unlike(media){
        this._observers = this._observers.filter(obs => obs!== observer)
    }

    fire(action){
        this._observers.forEach(observer => observer.update(action))
    }
}

export { LikelistSubject }