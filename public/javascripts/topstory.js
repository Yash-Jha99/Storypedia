
const BASE_URL = "https://hacker-news.firebaseio.com/v0/"
const Id_url = BASE_URL + "topstories.json"

const main = document.getElementById('main')

const Stories_url = []

getStory_url(Id_url)

function getStory_url(url) {

  fetch(url).then(res => res.json()).then(json => {
    json.forEach(element => {
      Stories_url.push(BASE_URL + "item/" + element + ".json")
    })
    getStory_detail(Stories_url)
  })
}

function getStory_detail(url) {
  main.innerHTML = '';
  url.forEach(news => {
    fetch(news).then(res => res.json()).then(data => {
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

    })
  })
}