class GalleryView{
    #config = null;
    $el = null;
    static SELECTORS={
        IMG:'.img',
     }
    static template = `  <div class="fotorama"  data-loop="true">    </div> `;

    static imgTemplate = `<img class="img" data-img-index="{{id}}" src = "{{url}}">`;


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
        // this.$el.find('img').onLoad();
     
  }
    renderList(list) {
        const $items = $(list.map(GalleryView.getIMGHtml).join(''));
        
        this.$el.append($items);
    };

}