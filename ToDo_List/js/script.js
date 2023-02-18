const start = () => {
    
    const addButton = document.getElementById('addButton')
    addButton.onclick = createNewTask
}

const createNewTask = () => {
    
    const taskList = document.getElementById('taskList')
    const taskSubject = document.getElementById('taskToDo')
    
    const newItem = createListItem(taskSubject.value)
    taskList.appendChild(newItem)    
    clearAndFocusInputElement(taskSubject)        
   
}

const createListItem = contentListItem => { //debugger;
    const newItem = document.createElement('div')
    const itemTextNode = document.createTextNode(contentListItem)
    newItem.innerHTML = '<div class="itemInList" onclick="changeColor(this)" ondblclick="removeTask(this)"><p>'+contentListItem+'</p></div>'; 

    return newItem
}

function changeColor(div) { //pesquisei um pouco aqui, minha versão sem pesquisa estava mudando de cor uma vez, mas não voltava a original...
    if (!div.dataset.corOriginal) {
        const style = window.getComputedStyle(div);
        div.dataset.corOriginal = style.backgroundColor; //???
    }
    
    if (div.style.backgroundColor !== "lightblue") {
        div.style.backgroundColor = "lightblue";
        div.classList.add("selected");
    } else {
        
        div.style.backgroundColor = div.dataset.corOriginal;
        div.classList.remove("selected");
    }
}
  
function removeTask(div) {
    div.remove();

}

const clearAndFocusInputElement = input => {
    input.value = ''
    input.focus()
}



start()