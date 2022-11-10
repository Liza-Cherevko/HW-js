class NotesController { 
    #collection = null;
    #boardView = null;
    #headerView = null;

    constructor($container) { 
        this.#headerView = new HeaderView({});
        $container.append(this.#headerView.$el);
        this.#collection = new NotesCollection();
        this.#collection.fetchList().then(() => {
            this.#listView.renderList( this.#collection.list)
        });   
    }


    deleteNote(id) {
        this.#collection.deleteNote(id).then(() => {
            this.#listView.renderList(this.#collection.list);
        });
    }
    saveNote(data) { 
        this.#collection.createNote(data).then(() => {
            this.#listView.renderList(this.#collection.list);
        });
    }
    }
