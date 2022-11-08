class StickBoard { 
    static boardTemplate = ` <div class="board__area"> </div>  `
    static CLASSES = {
        DELETE_BTN_CLASS: 'sticker__header', 
        TASK_STICK_CLASS: 'sticker',
    };
    static getStickerId(el) {
        const parent = el.closest('.' + StickBoard.CLASSES.TASK_STICK_CLASS);
        return parent ? parent.dataset.stickId : null;
        } 
    #config = null;
    constructor(config) { 
        this.#config = config;
        this.#initView();
    }

    #initView() { 
        this.el = this.getHTMLElement(StickBoard.boardTemplate);
        this.el.addEventListener('click', (e) => { 
            const StickId = StickBoard.getStickerId(e.target);
            if (e.target.classList.contains(StickBoard.CLASSES.DELETE_BTN_CLASS)) { 
                console.log('sticker-delete')
                // return this.deleteStick(StickId); 
            }
        })
     
    }
    renderList(list) { 
        this.el.innerHTML = list.map(StickHeaderView.generateStickerItemHtml).join('')
    }

    getHTMLElement(html) { 
        const container = document.createElement('div');
        container.innerHTML = html;
        return container.children[0];
    }


    deleteStick(id) { 
        this.#config.onDelete(id);
        console.log('delete'+ id)
    }
  
}
