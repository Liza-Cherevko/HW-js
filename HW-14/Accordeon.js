class Accordeon {
  #el = null;
 #boxElem = document.querySelectorAll('.accordeon-item ')

constructor(el){
    this.#el = el;
    this.#bindEventListeners()
    this.show(0);
}

#bindEventListeners(){
    for (let i = 0; i < this.#boxElem.length; i++) {
        this.#boxElem.length[i].addEventListener("click", function() {
          this.classList.toggle("active");
          let panel = this.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        });
      }
  }
  
}