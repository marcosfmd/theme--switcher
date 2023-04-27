const changeModeLight = document.querySelector(".light")
const changeModeDark = document.querySelector(".dark")
const changeColorContainer = document.querySelector(".container")
const changeTitle = document.querySelector(".title-mode")
const changeMode = document.querySelector(".changeMode")


changeMode.addEventListener("click", () => {
  if(changeMode) {
    changeColorContainer.classList.toggle("dark-mode")
    changeTitle.classList.toggle("title-dark")
    changeModeLight.classList.toggle('image-ball')
    changeModeDark.classList.toggle('image-ball-check')
    
    if(changeColorContainer.classList.contains('dark-mode')) {
      changeTitle.innerHTML = 'Modo Dark'
    } else {
      changeTitle.innerHTML = 'Modo Light'
      
    }
  }
})