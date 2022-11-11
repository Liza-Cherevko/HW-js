class GalleryController {
    #collection = null;
    #galleryView = null;
    
    constructor($container) {
        this.#galleryView = new GalleryView({
            onLoad: this.loadGallery
            
        });
        $container.append(this.#galleryView.$el);
    
    
        this.#collection = new GalleryCollection();
        this.#collection.fetchList().then(() => {
            this.#galleryView.renderList(this.#collection.list);
        });
    }
    loadGallery = ()=> {
        this.#collection.loadGallery().then(() => {
            this.#galleryView.renderList(this.#collection.list);
        });
    };
    }