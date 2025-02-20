const item = document.querySelector('.about-item');
const addButton = document.querySelector('#add-item');
const clearButton = document.querySelector('#clear-button');
let ancestor = document.querySelector('.main-content');
let grandParent = document.createElement('div');
const parent = document.createElement('ul');


function addItem(){
    grandParent.classList.add('content');
    ancestor.appendChild(grandParent);
    parent.classList.add('parent-element');
    grandParent.appendChild(parent);
    const child = document.createElement('li');
    child.classList.add('child-element');
    parent.appendChild(child);
    const button = document.createElement('button');
    button.classList.add('delete-button');
    parent.appendChild(button);
    child.innerText = item.value;
    button.innerText = "Delete";
    function deleteButton(){
        parent.removeChild(child);
        button.remove();
    }
    button.addEventListener("click", deleteButton);

    function clearAllItem(){
        parent.remove();
        child.remove();
        button.remove();
    }
    clearButton.addEventListener("click", clearAllItem);
    item.value = "";

}


addButton.addEventListener("click", addItem);
