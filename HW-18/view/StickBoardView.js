class StickBoard { 
    el = null;
    #config = null;
    static boardTemplate = ` <div class="board__area"> </div>  `
    static stickerTemplate = `   
   <div class ="sticker" data-stick-id="{{id}}" >
   <div class = "sticker__header" >X</div>
   <div class="sticker__txt" >
   <textarea name = "title"  id="text" cols="25" rows="10" class = "sticker__txt">
   {{description}}
   </textarea>
</div>
</div>
`
    static CLASSES = {
        DELETE_BTN_CLASS: 'sticker__header', 
        STICK_CLASS: 'sticker',
        STICK_TXT_CLASS: 'sticker__txt',
    };
    static  generateStickerItemHtml({ id, description, }) {
        return StickBoard.stickerTemplate
            .replaceAll('  {{description}}', description)
            .replaceAll('{{id}}', id);
    };
    static  getStickerId(el) {
        const parent = el.closest('.' + StickBoard.CLASSES.STICK_CLASS);
        return parent ? parent.dataset.stickId : null;
       
    };

    constructor(config) { 
        this.#initView();
        this.#config = config; 
      
    
    };

    #initView() { 
        this.el = document.createElement('div');
        this.el.className = 'board__area';
        this.el.addEventListener('click', (e) => { 
            const stickId = StickBoard.getStickerId(e.target)
            if (e.target.classList.contains(StickBoard.CLASSES.DELETE_BTN_CLASS)) { 
                return this.deleteStick(stickId); 
            }
        })
      
        this.el.addEventListener('change', (e) => { 
            const stickerId = StickBoard.getStickerId(e.target)
            if (e.target.classList.contains(StickBoard.CLASSES. STICK_TXT_CLASS)) { 
                return this.updateStick(stickerId, e.target.value); 
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
        console.log('delete '+ id)
        this.#config.onDelete(id);
    };
  
    updateStick(id) { 
        console.log('delete '+ id)
        this.#config.onUpdate(id);
    };

    #getFormData() {
        return {
            title: this.el.elements.title.value
        }
    }
}
