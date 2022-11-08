class StickBoard { 
    el = null;
    #config = null;
    static boardTemplate = ` <div class="board__area"> </div>  `
    static stickerTemplate = `   

   <div class ="sticker">
   <div class = "sticker__header">X</div>
   <div class="sticker__txt" data-stick-id="{{id}}>
   <textarea name="sticker__txt" id="text" cols="25" rows="10">
        {{description}}
   </textarea>
</div>
</div>
`
    static CLASSES = {
        DELETE_BTN_CLASS: 'sticker__header', 
        STICK_CLASS: 'sticker',
    };
    static  generateStickerItemHtml({ id, description, }) {
        return StickBoard.stickerTemplate
            .replaceAll('{{description}}', description)
            .replaceAll('{{id}}', id);
    };
    static getStickerId(el) {
        const parent = el.closest('.' + StickBoard.CLASSES.STICK_CLASS);
        return parent ? parent.dataset.stickId : null;
    };
    

    constructor(config) { 
        this.#initView();
        this.#config = config; 
        console.log(this.el);
    };

    #initView() { 
        this.el = document.createElement('div');
        this.el.className = 'board__area';
        this.el.addEventListener('click', (e) => { 
            const StickId = StickBoard.getStickerId(e.target);
            if (e.target.classList.contains(StickBoard.CLASSES.DELETE_BTN_CLASS)) { 
                return this.deleteStick(StickId); 
            }
          })
     
    };
    renderList(list) { 
        this.el.innerHTML = list.map(StickBoard.generateStickerItemHtml).join('')
    };

    getHTMLElement(html) { 
        const container = document.createElement('div');
        container.innerHTML = html;
        return container.children[0];
    };


    deleteStick(id) { 
        this.#config.onDelete(id);
        console.log('delete '+ id)
    };
  
}
