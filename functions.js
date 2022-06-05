// Add function
document.getElementById('add').addEventListener('click', (e) => {
    let inputT = document.getElementById('input')
    let inputTitle = inputT.value
    let inputD = document.getElementById('todoDes')
    let inputDes = inputD.value

    let ulList = document.getElementById('ul')

    if (inputTitle !== "" && inputDes !== "") {

        const createDivTitle = document.createElement('div')
        createDivTitle.id = "div-title"
        createDivTitle.className = "fw-bold"
        const divTitle = document.createTextNode(inputTitle)
        createDivTitle.appendChild(divTitle)

        const createDiv = document.createElement('div')
        createDiv.id = "div"
        createDiv.className = "ms-2 me-auto"
        const divDes = document.createTextNode(inputDes)
        createDiv.appendChild(createDivTitle)
        createDiv.appendChild(divDes)

        const createButton = document.createElement('button')
        createButton.id = "delete"
        createButton.type = "button"
        createButton.className = "btn-close btn-close-dark"
        createButton.setAttribute("aria-label", "Close")

        const createLi = document.createElement('li')
        createLi.id = "li"
        createLi.className = "list-group-item-action list-group-item d-flex justify-content-between align-items-start"
        createLi.appendChild(createDiv)
        createLi.appendChild(createButton)

        ulList.appendChild(createLi)
        inputT.value = ''
        inputD.value = ''
        inputTitle = ''
        inputDes = ''
    }
    else {
        alert("Please fill all the required field...")
    }

    // Remove function
    removeTodo()
    // 
})
// 


// Remove function 
function removeTodo() {
    var remove = document.querySelectorAll('#delete')
    for (let i = 0; i < remove.length; i++) {
        remove[i].addEventListener('click', () => {
            remove[i].parentElement.remove()
        })
    }
}
removeTodo()
// 