let slideIndex = 1
showSlides(slideIndex)

function plusSlides (n) {
  const index = slideIndex + n
  showSlides(index)
}

function showSlides (n, className) {
  const slideClass = 'cn__facts__container--content-description'
  let i
  const slides = document.getElementsByClassName(slideClass)
  const prev = document.getElementById('prev')
  const next = document.getElementById('next')
  let prevDisplay = 'none'
  let nextDisplay = 'flex'
  if (n > 1) {
    slides.length
    prevDisplay = 'flex'
  }
  if (n >= slides.length) {
    nextDisplay = 'none'
  }
  if (slides.length === 0) {
    prevDisplay = 'none'
    nextDisplay = 'none'
  }
  prev.style.display = prevDisplay
  next.style.display = nextDisplay
  totals(n, slides.length)
  slideIndex = n
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'
      slides[i].setAttribute('class', slideClass)
  }
  slides[slideIndex-1].style.display = 'flex'
    slides[slideIndex-1].setAttribute('class', slideClass + ' fade')
}

function totals (actual, total) {
  let text = `${actual} of ${total} facts`
  const element = document.getElementById('slider_totals')
  if (total === 0) {
    text = ''
  }
  element.innerHTML = text
}