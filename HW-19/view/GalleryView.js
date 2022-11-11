class GalleryView{
    #config = null;
    $el = null;
    static SELECTORS={
        IMG:'.img',
     }
    static template = ` <div class="fotorama">   </div>`;
    static imgTemplate = `<img class="img" data-img-index="{{id}}" "url": "{{url}}">`;

    static getElementId($el) {
        return '' +$el.closest(GalleryView.SELECTORS.IMG).data('imgIndex');
    }

    static getIMGHtml(img){
        return intorpalate(GalleryView.imgTemplate, img);
    }
    constructor(config) { 
        this.#config = config;
        this.#initView();
    }

    #initView() { 
        this.$el = $(GalleryView.template);
        this.$el.find('button').on('click', () => {
            this.#config.onCreate();
        })
  
    }
    renderList(list) {
        const $items = $(list.map(GalleryView.getIMGHtml).join(''));
        
        this.$el.append($items);
        
    };

}