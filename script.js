const rating = document.getElementById("rating")
const thankYou = document.getElementById("thank-you")
const userRating = document.querySelectorAll(".btn")
const submitButton = document.getElementById("submit")
const rate = document.getElementById("rate")

userRating.forEach((btn) => {
  btn.addEventListener("click", () => {
    rate.innerHTML = btn.innerHTML
  })
})

submitButton.addEventListener("click", () => {
  rating.classList.toggle("hidden")
  thankYou.classList.toggle("hidden")
})
