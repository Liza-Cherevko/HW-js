class TodoListView { 
    el = null;
    constructor(el) { 
        this.#initView()
      console.log(  this.el);
    }

    #initView() {
        this.el = document.createElement('div');
        this.el.className = 'task-list u-full-width'
     }
}