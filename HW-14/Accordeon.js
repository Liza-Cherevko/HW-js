class Accordion {
    static CLASSES = {
        ITEM: 'accordion-item',
        TITLE: 'accordion-title',
        BODY: 'accordion-body',
        ACTIVE: 'accordeon-title-active',
    };
    #el = null;
    #itemsEl = null;
    #titlesEl = null;
    #activeIndex = null;
    constructor(el) { 
        this.#el = el;
        this.#bindClasses() 
        this.#bindEventListeners()
    }

    #bindClasses() { 
        this.#itemsEl = this.#el.querySelectorAll('.'+ Accordion.CLASSES.ITEM);
        this.#titlesEl = this.#el.querySelectorAll('.'+ Accordion.CLASSES.TITLE);
    }

    #bindEventListeners() { 
        this.#el.addEventListener('click', (e) => { 
            if (e.target.classList.contains(Accordion.CLASSES.TITLE)) { 
                const index = this.#findTitleIndex(e.target);
                this.toggle(index);
            }
        })
    }
    #findTitleIndex(titleEl) { 
        for (let i = 0; i < this.#titlesEl.length; i++) {
            if (this.#titlesEl[i] === titleEl) {
                return i;
            }
        }

        return null;
    }
    show(index) { 
        this.#activeIndex = index;
        this.#itemsEl[index].classList.add(Accordion.CLASSES.ACTIVE)

    }
    hide(index) { 
        this.#itemsEl[index].classList.remove(Accordion.CLASSES.ACTIVE)
        this.#activeIndex = null;
    }
    toggle(index) { 
        const prevIndex = this.#activeIndex;
        this.#collapseOthers()
        if (prevIndex !== index) {
            this.show(index);
        } 
       
    }

}

































// рабочая версия
// class Accordeon {
//     #el = null;
//     static accItem = Array.from(document.querySelectorAll('.accordeon-item'));
//     constructor(el) {
//         this.#el = el;
//         this.#getElem()
    
//     }
    
//     #getElem() {
//         Accordeon.accItem.forEach((item) => {
//             item.addEventListener('click', (e) => {
//                 let currentAcc = e.target.closest('.accordeon-item');
//         let currentContent = e.target.nextElementSibling;
//            currentAcc.classList.toggle('active');
//            if (currentAcc.classList.contains('active')) {
//                currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
//            } else {
//             currentContent.style.maxHeight = 0
//            }
//             })
// });
//     }
// }

// пример 
// const accItem = Array.from(document.querySelectorAll('.accordeon-item'));
// accItem.forEach((item) => {
//     item.addEventListener('click', titleHandler)
// });
//        function titleHandler(e) {
//         e.preventDefault();
//         let currentAcc = e.target.closest('.accordeon-item');
//         let currentContent = e.target.nextElementSibling;
//            currentAcc.classList.toggle('active');
//            if (currentAcc.classList.contains('active')) {
//                currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
//            } else { 
//             currentContent.style.maxHeight = 0
//            }
//     } 