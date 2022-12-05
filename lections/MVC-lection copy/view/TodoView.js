class TodoListView { 
    el = null;
    #config = null;
    static CLASSES = {
        TASK_ITEM_CLASS: 'task-item',
        DELETE_BTN_CLASS: 'delete-btn',
        TASK_DONE_CLASS: 'done'
    };
    static todoItemTemplate =
        ` <div class="task-item {{doneClass}}" data-todo-id="{{id}}">
     {{title}}
     <span class="delete-btn">x</span>
 </div>`;

   static  generateTodoItemHtml({ id, title, isDone }) {
    return TodoListView.todoItemTemplate
        .replaceAll('{{title}}', title)
        .replaceAll(
            '{{doneClass}}',
            isDone ? TodoListView.CLASSES.TASK_DONE_CLASS : ''
        )
        .replaceAll('{{id}}', id);
}
    
    static getTodoId(el) {
    const parent = el.closest('.' + TodoListView.CLASSES.TASK_ITEM_CLASS);

    return parent ? parent.dataset.todoId : null;
    };

    constructor(config) { 
        this.#initView()
        this.#config = config;
        console.log(this.el);
    }

    #initView() {
        this.el = document.createElement('div');
        this.el.className = 'task-list u-full-width';
        this.el.addEventListener('click', (e) => { 
            const todoId = TodoListView.getTodoId(e.target);
            switch(true){
                case e.target.classList.contains(TodoListView.CLASSES.DELETE_BTN_CLASS):
                    return this.deleteTodo(todoId); 
                 case e.target.classList.contains(TodoListView.CLASSES.TASK_ITEM_CLASS):
                    return this.toggleTodo(todoId) ;
          }
        })
    }
    
    renderList(list) { 
        this.el.innerHTML = list.map(TodoListView.generateTodoItemHtml).join('')
    }
  
    deleteTodo(id) { 
        this.#config.onDelete(id);
        console.log('delete'+ id)
    }
    toggleTodo(id) { 
        this.#config.onToggle(id)
        console.log('toggle'+ id)
    }
  
}