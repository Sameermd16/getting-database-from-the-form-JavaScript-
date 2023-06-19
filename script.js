const modal = document.querySelector('.modal')
const modalCloseBtn =  document.querySelector(".modal-close-btn")
const form = document.getElementById('login_form')
const modalText = document.getElementById('modal-text')
const modalInner = document.getElementById('modal-inner')

setTimeout(() => {
    modal.style.display = "inline"
}, 1500);

modalCloseBtn.addEventListener('click', () =>{
    modal.style.display = "none"
})

form.addEventListener('submit', (event) => {
    const formData = new FormData(form) //feeding form element
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')
    console.log(name, email, password)

    console.log('form submitted')
    event.preventDefault()
    let modalInnerLoading = document.createElement('div')
    modalInnerLoading.textContent = //img & p? how? 
    modalText.innerHTML =  `<div class="modal-inner-loading">
                                <img src="images/loading.svg" class="loading">
                                <p id="uploadText">Uploading your data to the dark web...</p>
                            </div>`
    setTimeout(() => {
        document.getElementById('uploadText').innerText = "Making the sale"
    }, 3000)
    setTimeout(() => {
        modalInner.innerHTML = `<h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
                                <p>We just sold the rights to your eternal soul.</p>
                                <div class="idiot-gif">
                                    <img src="images/pirate.gif">
                                </div>
                                ` 

    }, 4500)
})




const revealBtn = document.getElementById("reveal_btn")
const answerDiv = document.querySelector(".answer")
const question = document.querySelector(".question")

revealBtn.addEventListener("click", () => {
    answerDiv.style.display = "block"
    question.style.backgroundColor = "#68e1fd"
    question.style.color = "#1434A9"
    revealBtn.style.display = "none"
    
})
