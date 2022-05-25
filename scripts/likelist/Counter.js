class LikeListCounter {
    constructor(){
        this._count = this.media.likes,
        this._likeCount = document.querySelector("#totalOfLike").value
    }

    update(action) {
        if (action === 'add'){
            this._count ++;
        } else if (action === 'unadd'){
            this._count --;
        } else {
            throw 'Unknown action'
        }

        this._likeCount.innerHTML = this._count;

        console.log('click click');
    }
}

export { LikeListCounter }