class StickerView { 
    static boardTemplate = `
    <div class="sticker">
    <div class="sticker__header"> x </div>
        <div class="sticker__txt">
             <textarea name="sticker__txt" id="text" cols="25" rows="10">
               {{title}}
             </textarea>
     </div>
</div>
              `
    #config = null;
    constructor(config) { 
        this.#config = config;
        this.#initView();
    }

    #initView() { 
        this.el = getHTMLElement(StickView.boardTemplate);
        this.el.addEventListener('click', (e) => { 
            // this.#addSticker()
            console.log('sfsdfsdf', e)
        })
    }

}
function getHTMLElement(html) { 
    const container = document.createElement('div');
    container.innerHTML = html;
    return container.children[0];
}