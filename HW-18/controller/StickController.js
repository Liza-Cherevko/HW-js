class StickController { 
    #collection = null;
    #stickHeader = null;
    #stickBoard = null;
    constructor(container) { 

       
        this.#stickHeader = new StickHeaderView({
            onSave: (data)=>this.saveStick(data)
        })
        container.append(this.#stickHeader.el)
        

        this.#stickBoard = new StickBoard({
            addStick: (data) => this.addNewStick(data),
            onDelete: (id)  =>  this.deleteStick(id)
        })
        container.append(this.#stickBoard.el)


        this.#collection = new StickCollection();
        this.#collection.fetchList().then(() => {
            this.#stickBoard.renderList( this.#collection.list)
        });
    }

    addNewStick(id) { 
        this.#collection.addNewStick(id).then(() => {
            this.#stickBoard.renderList(this.#collection.list)
        })
    }
    saveStick(data) { 
        this.#collection.createStick(data).then(() => {
            this.#stickBoard.renderList(this.#collection.list);
        });
    }
    deleteStick(id) {
        this.#collection.deleteStick(id).then(() => {
            this.#stickBoard.renderList(this.#collection.list);
        });
    }
}