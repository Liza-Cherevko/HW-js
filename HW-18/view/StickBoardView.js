class StickBoard { 
    static boardTemplate = ` <div class="board__area"> </div>  `


    #config = null;
    constructor(config) { 
        this.#config = config;
        this.#initView();
    }

    #initView() { 
        this.el = this.getHTMLElement(StickBoard.boardTemplate);
     
    }
    renderList(list) { 
        this.el.innerHTML = list.map(StickView.generateStickerItemHtml).join('')
    }

    getHTMLElement(html) { 
        const container = document.createElement('div');
        container.innerHTML = html;
        return container.children[0];
    }
}
