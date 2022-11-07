class StickController { 
    #collection = null;
    #stickHeader = null;
    #stickBoard = null;
    constructor(container) { 
        console.log(container);
        this.#stickHeader = new StickView({})
        container.append(this.#stickHeader.el)
        
        this.#stickBoard = new StickBoard({
            onCreateStick: (data)=>this.createStick(data)
        })
        container.append(this.#stickBoard.el)

   

    }

    createStick(data) { 
        this.#collection.createStick(data).then(() => {
            this.#stickBoard.renderList(this.#collection.list);
        });
    }
}