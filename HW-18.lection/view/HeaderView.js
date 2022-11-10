class HeaderView { 
    #config = null;
    $el = null;

    static template = `
    <div class="note" data-note-index="{{id}}">
    <span class="delete-note">x</span>
    <textarea class="edit-note-control" name="description" id="" cols="20" rows="10"></textarea>
</div>
`
    constructor(config) { 
        this.#config = config;
        this.#initView();
    }

    #initView() { 
        this.$el = $(HeaderView.template)
        this.$el.find('button').on('click', () => { 
            console.log('clicked')
        })
    }
}