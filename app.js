const input = document.querySelector('.input-list'); // select the all classes like this
const button  = document.querySelector('.button-list');
const list = document.querySelector('.list-group');
const divs = document.querySelectorAll('.search');
const buts = document.querySelector('.but');
const search = document.querySelector('#search-input');

  
button.addEventListener('click',addtodo);
list.addEventListener('click',deletes)

function addtodo(event){
    event.preventDefault();

    const listDiv = document.createElement('div');
    listDiv.classList.add('lists');
   
    const addList = document.createElement('li'); // For adding value of input 
    addList.innerText = input.value;
    addList.classList.add('add-list');
    listDiv.appendChild(addList);

    const addButton = document.createElement('button'); // adding for button
    addButton.innerHTML ='<i class = \'fa-solid fa-circle-check fa-2x\'></i>';
    addButton.classList.add('add-btn');
    listDiv.appendChild(addButton); 

    const removeButton = document.createElement('button'); // for remove button
    removeButton.innerHTML ='<i class = \'fa-solid fa-trash fa-2x\'></i>' 
    removeButton.classList.add('remove-btn');
    listDiv.appendChild(removeButton); 

    list.appendChild(listDiv); 

}
function deletes(e){
    if(e.target.classList.contains('fa-trash')){
        e.target.closest('.lists').remove();
    }
    if(e.target.classList.contains('fa-circle-check')){
        e.target.closest('.lists').classList.add('check');
    }
}


buts.addEventListener('click',function(e){
    e.preventDefault()
    divs[0].classList.toggle('expand')
})  

const filter =(word)=>{
    Array.from(list.children)
    .forEach(lists=>{
        if(lists.textContent.toLowerCase().includes(word)){
            lists.classList.remove('remove')
        }
        else{
            lists.classList.add('remove')
        }
    })
}
search.addEventListener('keyup',()=>{
     const word = search.value.trim().toLowerCase();
     filter(word)})