const API_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers';
class StickCollection {
    list = [];
    #api = new RestApi(API_URL)
    
    fetchList() {
      return  this.#api.getList().then((data) => (this.list = data));
    }
  
  
    deleteStick(id) {
          return this.#api.delete(id).then(() => {
              this.list = this.list.filter((item) => item.id !== id);
          });
    }

     
  createStick(data) {
    return this.#api
      .create(data)
      .then((newstick) => { this.list=[...this.list,newstick] });
  }



}









