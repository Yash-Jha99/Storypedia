
const BASE_URL = "https://hacker-news.firebaseio.com/v0/"
const Id_url = BASE_URL + "topstories.json"

const main = document.getElementById('main')
const showMore = document.getElementById('showMore')
let currentPage = 1

showMore.addEventListener("click", () => {
  getStory_url(Id_url, ++currentPage)
})

async function getStory_url(url, currentPage = 1) {
  const result = await (await fetch(url)).json()
  const storiesUrl = result.map(item => BASE_URL + "item/" + item + ".json")
  const index = currentPage * 1 - 1
  storiesUrl.slice(index, index + 12).forEach(url => getStory_detail(url))
  if (currentPage === 1)
    setTimeout(() => {
      showMore.style.visibility = "visible"
    }, 500)
}

async function getStory_detail(url) {
  const data = await (await fetch(url)).json()
  const storyEl = document.createElement('div')
  storyEl.classList.add('News')
  if ('kids' in data)
    comment = data.kids.length
  else
    comment = 0
  storyEl.innerHTML = `    
            <div class="card">
            <div class="card-body">
              <h4 class="card-title">${data.title}</h4>
              <a href="${data.url}" class="card-link">Read More...</a>
              <h6 class="card-subtitle mb-2"><span>By: ${data.by.toUpperCase()}</span><span>Comments: ${comment}</span></h6>
            </div>
            </div>`
  main.appendChild(storyEl)
}

getStory_url(Id_url)


