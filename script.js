/*DROPDOWN MENU*/

const toggleBtn = document.querySelector('.toggle');
const toggleBtnIIcon = document.querySelector('.toggle i')
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function (){
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars-staggered fa-flip-horizontal'
}



/*FAQ ANIMATION*/

const allCross = document.querySelectorAll('.visible-pannel img');
console.log(allCross);

allCross.forEach(element =>{
    element.addEventListener('click', function(){

        const height = this.parentNode.parentNode.childNodes[3].scrollHeight;
        const currentChoice = this.parentNode.parentNode.childNodes[3];

        if(this.src.includes('Plus')){
            this.src ='Images/Section 7/Minus.svg';
            gsap.to(currentChoice, {duration: 0.2, height: height + 20, opacity : 1, padding: '1rem 0'})

        } else if (this.src.includes('Minus')){
            this.src ='Images/Section 7/Plus.svg';
            gsap.to(currentChoice, {duration: 0.2, height:0, opacity : 0, padding: '0'})
        }
    })
})


