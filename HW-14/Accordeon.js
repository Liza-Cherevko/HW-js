

// рабочая версия

class Accordeon {
    #el = null;
    static accItem = Array.from(document.querySelectorAll('.accordeon-item'));
    constructor(el) {
        this.#el = el;
        this.#getElem()
    
    }
    
    #getElem() {
        Accordeon.accItem.forEach((item) => {
            item.addEventListener('click', (e) => {
                let currentAcc = e.target.closest('.accordeon-item');
        let currentContent = e.target.nextElementSibling;
           currentAcc.classList.toggle('active');
           if (currentAcc.classList.contains('active')) {
               currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
           } else {
            currentContent.style.maxHeight = 0
           }
            })
});
    }
}

// class Accordeon {
//     #el = null;
//     #accItem = null; 
//     constructor(el) {
//         this.#el = el;
//         this.#bindEventListeners();
//         this.show(0);
//     }

//     #bindEventListeners() {
//         this.#accItem = document.querySelectorAll('.accordeon-item');
//         this.#accItem.addEventListener('click', (e) => {
//             if (e.target.classList.contains('accordeon-content')) {
//                 const index = this.#findTitleIndex(e.target);

//                 this.show(index);
//             }
//         });
//     }
//     #findTitleIndex(accEl) {
//         for (let i = 0; i < Accordeon.accItem.children.length; i++) {
//             if (Accordeon.accItem.children[i] === accEl) {
//                 return i;
//             }
//         }

//         return null;
//     }
//     show(index) {
//         if (!Accordeon.accItem.children[index]) {
//             return;
//         }
//         this.#hideAll();

//        Accordeon.accItem[index].classList.add('active');
//     }
    
// #hideAll() {
//     const visible = this.#el.querySelectorAll('.active');

//     visible.forEach((el) => el.classList.remove('active'));
// }
// }






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