class Accordeon {
  #el = null;
 #boxElem = document.querySelectorAll('.accordeon-item ')

constructor(el){
    this.#el = el;
    this.#bindEventListeners()
    this.show(0);
}

#bindEventListeners(){
    this.#boxElem.addEventListener('click', (e) => {
        if (e.target.classList.contains('accordeon-title')) {
            const index = this.#findTitleIndex(e.target);

            this.show(index);
        }
    });
}
#findTitleIndex(accElem){
    for (let i = 0; i < this.#boxElem.children.length; i++) {
        if (this.#boxElem.children[i] === accElem) {
            return i;
        }
    }

    return null;
}
show(index) {
    if (!this.#boxElem.children[index]) {
        return;
    }

}
}