

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