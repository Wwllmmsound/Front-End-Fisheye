class App {
    constructor() {
        this.photographers = document.querySelector('#photographers')
        this.photographersApi = new photographerApi('./data/photographers.json')
    }

    async main() {
        const photographersData = await this.photographersApi.getPhotographer();

        photographersData
            .map(photographerTemplate);
        }
}

const app = new App()
app.main()