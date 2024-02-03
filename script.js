const input = document.querySelector('input');
const button = document.querySelector('.addTask > button')

function addlist(e) {
    const notcompleted = document.querySelector('.notcompleted');
    const completed = document.querySelector('.completed');
    const check = document.createElement('input')
    check.setAttribute('type','checkbox')
    const newLi = document.createElement('li');
    const editbtn = document.createElement('button')
    const delbtn = document.createElement('button')

    editbtn.innerHTML = 'Edit'
    delbtn.innerHTML = 'Delete'

    if (input.value !== '') {
        newLi.innerHTML ='<p>'+ input.value+'</p>';
        input.value = '';
        notcompleted.appendChild(newLi)
        newLi.prepend(check)
        newLi.appendChild(editbtn)
        newLi.appendChild(delbtn)
    }
    editbtn.addEventListener('click', (e) => {
        const editedTask = prompt('Enter edited task', e.target.parentNode.children[1].textContent)
        if(editedTask){
            e.target.parentNode.children[1].textContent = editedTask
        }
    });
    delbtn.addEventListener('click', (e)=>{
        e.target.parentNode.remove()
    });
    check.addEventListener('change', (e)=>{
        if(e.target.checked){
            const task = e.target.parentNode
            task.remove()
            completed.appendChild(task)
        } else{
            const task = e.target.parentNode
            task.remove()
            notcompleted.appendChild(task)
        }
    })
}

button.addEventListener('click', addlist)