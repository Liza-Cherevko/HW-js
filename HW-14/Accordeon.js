class Accordeon {
  #el = null;
  #accItem = null;
  #accTitle = null;
  #accBody = null;

constructor(el){
    this.#el = el;
    this.#getElem();
    this.#bindEventListeners();
    this.show(0);
}
#getElem(){
   this.#accItem = document.querySelector('.accordeon-item');
   this.#accTitle = document.querySelector('.accordeon-title');
   this.#accBody = document.querySelector('.accordeon-body');
}

#bindEventListeners(){
    this.#accItem.addEventListener('click', (e) => {
        if (e.target.classList.contains('accordeon-body')) {
            const index = this.#findTitleIndex(e.target);

            this.show(index);
        }
    });
  }
  #findTitleIndex(accItems){
    for (let i = 0; i < this.#accItem.children.length; i++) {
        if (this.#accItem.children[i] === accItems) {
            return i;
        }
    }

    return null;
}
show(index) {
if (!this.#accItem.children[index]) {
    return;
}

this.#hideAll();

this.#accTitle.children[index].classList.add('acc-active');
this.#accBody.children[index].classList.add('tacc-active');
}

#hideAll() {
const visible = this.#el.querySelectorAll('.tabset-active');

visible.forEach((el) => el.classList.remove('tabset-active'));
}

}