const url = 'https://api.chucknorris.io/jokes/search?query='

function facts (query) {
  return fetch(url + query)
}

function getFacts () {
  const query = document.getElementById('input_fact').value
  facts(query)
  .then((response) => response.json())
  .then((facts) => facts.result)
  .then((facts) => {
    const error = document.getElementById('error_message')
    error.style.display = 'none'
    const container = document.getElementById('slider_container')
    container.innerHTML = ''
    if (facts.length === 0){
      return
    }
    facts.map((fact) => {
      const element = document.createElement('span')
      const text = document.createTextNode(fact.value)
      element.appendChild(text)
      element.setAttribute('class', 'cn__facts__container--content-description')
      container.appendChild(element)
      showSlides(1)
    })
  })
  .catch(() => {
    const error = document.getElementById('error_message')
    error.style.display = 'flex'
    showSlides(1)
  })
}
const submitHandler = (event) => {
  event.preventDefault()
  getFacts()
}