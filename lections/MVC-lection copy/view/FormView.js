class TodoFormView { 
    el = null;
    #form = null;
    divEl = null;
    divInEl = null;
    inpEl = null;
    submitBtnEl = null;
    inpSumEl = null;
    
    constructor(form) {
        this.#initForm();
        this.#form = form;
        console.log(this.el);
}
    
    #initForm() {
        this.el = document.createElement('form');
        this.el.id = 'newTaskForm';

        this.divEl = document.createElement('div')
        this.divEl.className = 'row';
        this.el.append(this.divEl);
        this.el.addEventListener('submit', (e) => { 
            e.preventDefault();
            const newTask = this.getFormValues(e.target);
            this.saveTodo(newTask)
            resetForm()
        })

        this.divInEl = document.createElement('div');
        this.divInEl.className = 'ten columns';
        this.divEl.append(this.divInEl);

        this.inpEl = document.createElement('input');
        this.inpEl.className = 'u-full-width';
        this.inpEl.type = 'text';
        this.inpEl.id = 'taskNameInput';
        this.divInEl.append(this.inpEl);

        this.submitBtnEl = document.createElement('div');
        this.submitBtnEl.className = 'two columns';
        this.divEl.append(this.submitBtnEl);

        this.inpSumEl = document.createElement('input');
        this.inpSumEl.type = 'submit';
        this.inpSumEl.value = 'Add';
        this.inpSumEl.id = 'submitBtn';
        this.submitBtnEl.append(this.inpSumEl);
    }

    getFormValues() {
       return {
           title: this.inpEl.value
       }
       
   };
 
    saveTodo(todo) { 
        this.#form.onSave(todo);
        console.log('save'+ todo)
    }
    resetForm(){
        this.el.value = '';
    }
}