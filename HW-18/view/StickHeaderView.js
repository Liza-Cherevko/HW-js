class StickView { 
    static boardTemplate = `
                <div class="board__header">
                    <button class="board__header-add">Add sticker</button>
                </div>
                `
    static stickerTemplate = `   <div class="sticker__txt">
    <textarea name="sticker__txt" id="text" cols="25" rows="10">
    
    </textarea>
</div>`
    #config = null;
    constructor(config) { 
        this.#config = config;
        this.#initView();
    }

    #initView() { 
        this.el = this.getHTMLElement(StickView.boardTemplate);
        const stickHTML =this.getHTMLElement(StickView.stickerTemplate);
        this.el.addEventListener('click', (e) => { 
            // this.#addSticker()
            console.log('create stick', stickHTML)
            this.#config.onCreateStick(stickHTML)
        })
    }



    getHTMLElement(html) { 
        const container = document.createElement('div');
        container.innerHTML = html;
        return container.children[0];
    }
}
