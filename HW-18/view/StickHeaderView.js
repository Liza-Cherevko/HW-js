class StickHeaderView { 
    el = null;
    #config = null;
 
    static headerTemplate = `
                <div class="board__header">
                    <button class="board__header-add">Add sticker</button>
                </div>
                `
    static stickerTemplate = `   
    <div class ="sticker">
    <div class = "sticker__header">X</div>
    <div class="sticker__txt" data-stick-id="{{id}}>
    <textarea name="sticker__txt" id="text" cols="25" rows="10">
             {{description }}
    </textarea>
</div>
</div>`
    
static  generateStickerItemHtml({ id, description, }) {
    return StickHeaderView.stickerTemplate
        .replaceAll('{{description}}', description)
        .replaceAll('{{id}}', id);
}
// static getStickerId(el) {
//     const parent = el.closest('.' + StickHeaderView.CLASSES.TASK_STICK_CLASS);

//     return parent ? parent.dataset.stickId : null;
//     }  
    
    constructor(config) { 
        this.#config = config;
        this.#initView();
        console.log(this.el);
    }

    #initView() { 
        this.el = this.getHTMLElement(StickHeaderView.headerTemplate);
        const stickHTML =this.getHTMLElement(StickHeaderView.stickerTemplate);
        this.el.addEventListener('click', (e) => { 
            e.preventDefault();
            // this.#addSticker()
            console.log('create stick', stickHTML)
            this.#config.onSave(stickHTML)
        })
    }

    getHTMLElement(html) { 
        const container = document.createElement('div');
        container.innerHTML = html;
        return container.children[0];
    }
       addNewStick(id) { 
        this.#config.addStick(id)
        console.log('add'+ id)
    }
}
 