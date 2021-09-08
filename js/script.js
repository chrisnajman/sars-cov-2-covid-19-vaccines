const slideOut = () => {
  const toggleSlideOut = document.querySelector(".slide-out")
  const toggleHeader = document.querySelector(".slide-out__header")
  const toggleContent = document.querySelector(".slide-out__content")
  const toggleOpenClose = document.querySelector(".slide-out__openclose")

  toggleHeader.classList.toggle("slide-out__header--open")
  toggleSlideOut.classList.toggle("slide-out--open")
  toggleContent.classList.toggle("slide-out__content--open")

  toggleOpenClose.innerText = toggleOpenClose.innerText === "+" ? "-" : "+"
}

const slideOutButton = document.querySelector(".slide-out__button")
slideOutButton.addEventListener("click", () => {
  slideOut()
})
