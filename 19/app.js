const API_URL = 'https://jsonplaceholder.typicode.com/photos?_limit=10';
class GalleryCollection {
    list = [];
    #api = new RestApi(API_URL);

    fetchList() {
        return this.#api.getList().then((data) => (this.list = data));
    }
}