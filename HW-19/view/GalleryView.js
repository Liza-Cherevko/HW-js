class GalleryView{
    #config = null;
    $el = null;
    static SELECTORS={
        IMG:'.img',
     }
     static template = `  <div     </div> `
    static imgTemplate = `<img src = "{{url}}" class="img" data-img-index="{{id}}" >`;


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
        this.$el.foreach((photo) => { 
            $('.fotorama').append( `<div class = "fotorama-item" data-src="${photo.url}" data-caption="${photo.title}">
            <img src="${photo.thumbnailUrl}"/></div>`)

        })
      
}
    renderList(list) {
        const $items = $(list.map(GalleryView.getIMGHtml).join(''));
    };

}