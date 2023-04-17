const changeModeLight = document.querySelector(".light")
const changeModeDark = document.querySelector(".dark")
const changeTitle = document.querySelector(".title-mode")
const changeColorContainer = document.querySelector(".container")
const imageDark = document.querySelector(".image-dark")
const imageLight = document.querySelector(".image-light")


changeModeLight.addEventListener("click", () => {
  changeColorContainer.classList.remove("dark-mode")
  changeTitle.classList.remove("title-dark")
  changeTitle.textContent = 'Modo Light'

  if(imageLight.src.match('./assets/images/Vector.png')) {
    imageDark.src = './assets/images/ball.png'
  } else {
    imageLight.src ='./assets/images/Vector.png'
  }
  
})

changeModeDark.addEventListener("click", () => {
  changeColorContainer.classList.add("dark-mode")
  changeTitle.classList.add("title-dark")
  changeTitle.textContent = 'Modo Dark'

  if(imageDark.src.match('./assets/images/moon.png')) {
    imageLight.src = './assets/images/ball.png'
  } else {
    imageDark.src ='./assets/images/moon.png'
  }
})
