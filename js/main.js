// const TypeWriter = function(txtElement, wordsArray, wait = 3000) {
//     this.txtElement = txtElement;
//     this.words = wordsArray;
//     this.wait = parseInt(wait, 10);
//     this.wordIndex = 0;
//     this.txt = '';
//     this.type();
//     this.isDeleting = false;
// }

// //Method Type
// TypeWriter.prototype.type = function() {
//     //get current index of words
//     const currentArr = this.wordIndex % this.words.length;
    
//     //get full text of current Array
//     const fullTxt = this.words[currentArr];
    
//     //check if deleting
//     (this.isDeleting) ? this.txt = fullTxt.substring(0, this.txt.length - 1) : this.txt = fullTxt.substring(0, this.txt.length + 1);
    
//     //insert txt to span element
//     this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
    
//     //initial type speed
//     let typeSpeed = 300;
    
//     if(this.isDeleting) {
//         typeSpeed /= 2;
//     }
    
//     //check if word is rendered completely
//     if(!this.isDeleting && this.txt === fullTxt) {
//         //pause at end of word
//         typeSpeed = this.wait;
//         //set delete to true
//         this.isDeleting = true;
//     } else if(this.isDeleting && this.txt === '') {
//         this.isDeleting = false;
//         //next word
//         this.wordIndex++;
//         //pause before another word
//         typeSpeed = 500;
//     }
    
//     setTimeout(() => this.type(), typeSpeed);
// }

//ES6 Class
class TypeWriter {
    constructor(txtElement, wordsArray, wait = 3000) {
        this.txtElement = txtElement;
        this.words = wordsArray;
        this.wait = parseInt(wait, 10);
        this.wordIndex = 0;
        this.txt = '';
        this.type();
        this.isDeleting = false;
    }
    
    type() {
        //get current index of words
        const currentArr = this.wordIndex % this.words.length;
        
        //get full text of current Array
        const fullTxt = this.words[currentArr];
        
        //check if deleting
        (this.isDeleting) ? this.txt = fullTxt.substring(0, this.txt.length - 1) : this.txt = fullTxt.substring(0, this.txt.length + 1);
        
        //insert txt to span element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
        
        //initial type speed
        let typeSpeed = 300;
        
        if(this.isDeleting) {
            typeSpeed /= 2;
        }
        
        //check if word is rendered completely
        if(!this.isDeleting && this.txt === fullTxt) {
            //pause at end of word
            typeSpeed = this.wait;
            //set delete to true
            this.isDeleting = true;
        } else if(this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            //next word
            this.wordIndex++;
            //pause before another word
            typeSpeed = 500;
        }
        
        setTimeout(() => this.type(), typeSpeed);
    }
}

//init on DOM load
document.addEventListener('DOMContentLoaded', init);

//Init App
function init() {
    const txtElement = document.querySelector('.textType');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    
    //Init Typewriter
    new TypeWriter(txtElement, words, wait);
}