const API_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/todos/';
class TodoCollection {
    list = [];
    #api = new RestApi(API_URL)
    
    fetchList() {
      return  this.#api.getList().then((data) => (this.list = data));
    }
  
    toggleTodo(id) {
      const item = this.list.find((item) => item.id === id);
      const updatedItem = {
        ...item,
        isDone: !item.isDone
      };
    return  this.#api.update(updatedItem).then((data) => {
      this.list =  this.list.map((item) => (item.id === data.id ? data : item));
      });
    }
  
    deleteTodo(id) {
          return this.#api.delete(id).then(() => {
              this.list = this.list.filter((item) => item.id !== id);
          });
    }

     
  createTodo(data) {
    data.isDone = false;
    return this.#api
      .create(data)
      .then((newtodo) => { this.list=[...this.list,newtodo] });
  }
}






