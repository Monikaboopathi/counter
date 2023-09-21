const decrementBtn = document.getElementById('decrement')
const incrementBtn = document.getElementById('increment')
const countElement = document.getElementById('count')
let count=0;
// ask easycode|explain|refacotor
function updateCount(){
countElement.textContent=count;
}
// ask easycode|explain|refacotor
decrementBtn.addEventListener('click',()=>{
    count--;
    updateCount();
})

incrementBtn.addEventListener('click',()=>
{
    count++;
    updateCount()
})







