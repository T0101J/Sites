import Modal from './modal.js'

    // let btn = document.querySelector('#room-id');
    // btn.addEventListener('mouseleave', function(e) {
    // let text = document.querySelector('.copy');
    // text.select();
    // document.execCommand('copy');
  
    // });
        
const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//pegar o clique no marcar como lido
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    //adcionar a escuta 
    button.addEventListener("click", handleClick)
})


// Quando DELETE for clicado 
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

    function handleClick(event, check = true){
        event.preventDefault()

        //Otimização do texto no innerHTML para o h2 e o p da modal
        const text = check ? "Marcar como lida" : "Excluir"
        //chega qual action foi clicada 
        const slug = check ? "check" : "delete"
        //Seta o id da sala no 
        const roomId = document.querySelector("#room-id").dataset.id
        //Seleciona o event e o alvo, i meaning, get the dataid from the question 
        const questionId = event.target.dataset.id

        const form  = document.querySelector(".modal form")
        form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

        modalTitle.innerHTML = `${text} Excluir esta pergunta`  // se check for true marca cmo lido, se nao oto way
        modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
        modalButton.innerHTML = `Sim, ${text.toLowerCase()}`

        check ? modalButton.classList.remove("red") : modalButton.classList.add("red")
        //Abre a modal
        modal.open()
    }

    // ` o uso da crase permite que usemos ${variavel} between strings or at the end/beginning  ` instead of  + varivavel 
