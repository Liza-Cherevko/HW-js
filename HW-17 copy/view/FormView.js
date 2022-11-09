class FormView {
    static formTemplate = ` 
    <form >
    <div class="row">
        <div class="ten columns">
            <input
                type="text"
                name = "title"
                class="u-full-width"
            />
        </div>
        <div class="two columns">
            <input type="submit" id="submitBtn" value="Add" />
        </div>
    </div>
</form>`;
    #config = null;
    constructor(config) {
        this.#config = config;
        this.#initView();
        this.#getFormData();
       
    }

    #initView() {
        this.el = htmlToElement(FormView.formTemplate);
        this.el.addEventListener('submit', (e) => {
            e.preventDefault();
            const data = this.#getFormData()
            this.#resetForm()
            this.#config.onSave(data)
        })
    }

    #getFormData() {
        return {
            title: this.el.elements.title.value
        }
    }
    #resetForm() {
         this.el.elements.title.value = ''
        
    }
}
function htmlToElement(html) { 
    const container = document.createElement('div');
    container.innerHTML = html;
    return container.children[0];
}