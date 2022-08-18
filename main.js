// const btn = document.querySelector('.Questions_icon');
// const descr = document.querySelector('.Questions_rightdscr');
// const btn2 = document.querySelector('.Menu');
// const ul = document.querySelector('.Header_list2');
// btn.onclick = function(){
//     btn.classList.toggle('active')
//     descr.classList.toggle('active')
// }

// btn2.onclick = function() {
// 	ul.classList.toggle('active')
// }

const btn = document.querySelector('.Questions_icon');
const descr = document.querySelector('.Questions_rightdscr');
const btn2 = document.querySelector('.Menu');
const ul = document.querySelector('.Header_list2');
if (btn) {
    btn.onclick = function(){
        btn.classList.toggle('active')
        descr.classList.toggle('active')
    }
}

if (btn2) {
    btn2.onclick = function(x) {
        ul.classList.toggle('active')
        btn2.classList.toggle("change");
    } 

}
