const input = document.querySelector(".input");
const addbtn = document.querySelector(".addbtn");
const list = document.querySelector(".list");

addbtn.addEventListener("click",()=>{
    
    const val = input.value;
    if(val== ""){
        alert("Please enter a valid item");
        return;
    }
        createListEl(val);
   
   
})



function createListEl(val){

    const listItem = document.createElement('div');
    listItem.classList.add("item")
    const listText = document.createElement('p');
    listText.innerText = val;
    listText.addEventListener('click',strikeThrough);
    const delsrc = "del.png";
    const delIcon = document.createElement('img');
    delIcon.classList.add('del')
    delIcon.setAttribute('src',delsrc);

    listItem.appendChild(listText);
    listItem.append(delIcon);
    list.append(listItem);
    
    input.value = "";
    removeItem();
}
function removeItem(){
    const delArray = document.querySelectorAll(".del");
    // console.log(delArray);
    delArray.forEach(del=>{
        del.addEventListener('click',()=>{
            del.parentNode.remove();
        })
    })
}
// const delArray = document.querySelectorAll(".del");
// console.log(delArray)

function strikeThrough(){
    this.classList.add('strike');
}