class App {
    constructor() {
        this.photographers = document.querySelector('#photographers')
        this.photographersApi = new photographerApi('./../data/photographers.json')
    };

    async main() {
        const photographersData = await this.photographersApi.getPhotographer();

        photographersData
            .map(profile => new photographerList(profile))
            .forEach(profile => {
                const template = new photographerProfile(profile);
                this.photographers.appendChild(template.photographerTemplate())
            }
    }
}
const app = new App()
app.main()



photographerTemplate();