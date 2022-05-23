class LikeListCounter {
    constructor(){
        this._count = 0
        this._likeCount = document.querySelector("#totalOfLike")
    }

    update(action) {
        if (action === 'add'){
            this._count += 1
        } else if (action === 'unadd'){
            this._count -= 1
        } else {
            throw 'Unknown action'
        }

        this._likeCount.innerHTML = this._count;
    }
}