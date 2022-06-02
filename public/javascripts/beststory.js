const BASE_URL = "https://hacker-news.firebaseio.com/v0/"
const Id_url = BASE_URL + "beststories.json"

const main=document.getElementById('main')

const Stories_url=[]
  
getStory_url(Id_url)

function getStory_url(url)
{
    
  fetch(url).then(res => res.json()).then(json => {
    json.forEach(element => {
    Stories_url.push(BASE_URL + "item/" + element + ".json")
    })
    getStory_detail(Stories_url)
    })
}

function getStory_detail(url)
{
  main.innerHTML='';
    url.forEach(news=>{
        fetch(news).then(res => res.json()).then(data => {
          const storyEl=document.createElement('div')
          storyEl.classList.add('News')
          storyEl.innerHTML=`
          <div class="NewsInfo" id="News">${data.title}</div>
          <div ><a class="link" href=${data.url}>Read More...</a></div>
          <div class="OtherInfo">By: ${data.by.toUpperCase()}<span class>Comments: ${data.kids.length}</span></div>`
          
          
          console.log(data)
          main.appendChild(storyEl)
          
        })
    })
}