class TodoController {
    
    #collection = null;
    #listView = null;
    #formView = null;

    constructor(container) {
        console.log(container);

        this.#listView = new TodoListView({
            onToggle: (id) => this.toggleTodo(id),
            onDelete:(id)=>this.deleteTodo(id)
        });
        container.append(this.#listView.el);


        this.#collection = new TodoCollection();
        this.#collection.fetchList().then(() => {
            this.#listView.renderList( this.#collection.list)
        });

      
        this.#formView = new FormView({
            onSave: (data) => this.saveTodo(data)
        });
        container.append( this.#formView.el)
       
    }

    toggleTodo(id) {
        this.#collection.toggleTodo(id).then(() => {
            this.#listView.renderList(this.#collection.list)
        })
    }

    deleteTodo(id) {
        this.#collection.deleteTodo(id).then(() => {
            this.#listView.renderList(this.#collection.list);
        });
    }
    saveTodo(data) { 
        this.#collection.createTodo(data).then(() => {
            this.#listView.renderList(this.#collection.list);
        });
    }
  
    
}
