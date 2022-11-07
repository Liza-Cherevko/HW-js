class StickController { 
    #collection = null;
    #stickHeader = null;
    #stickBoard = null;
    constructor(container) { 

       
        this.#stickHeader = new StickView({})
        container.append(this.#stickHeader.el)
        

        this.#stickBoard = new StickBoard({
            onSave: (data)=>this.saveStick(data)
        })
        container.append(this.#stickBoard.el)


        this.#collection = new StickCollection();
        this.#collection.fetchList().then(() => {
            this.#stickBoard.renderList( this.#collection.list)
        });


     

   

    }

    saveStick(data) { 
        this.#collection.createStick(data).then(() => {
            this.#stickBoard.renderList(this.#collection.list);
        });
    }
}