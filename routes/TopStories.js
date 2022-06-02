var express=require('express')
var router=express.Router()


router.get('/',function(req,res,next){
    res.render('TopStories')
})

module.exports=router

// const BASE_URL = "https://hacker-news.firebaseio.com/v0/"
// const Id_url = BASE_URL + "topstories.json"

// let TopStories_url = []
//     let TopStories = []

// getStory_url(Id_url)

// function showStory(data)
// {
    
  

// }

// function getStory_url(url)
// {
    
//   fetch(url).then(res => res.json()).then(json => {
//     json.forEach(element => {
//     TopStories_url.push(BASE_URL + "item/" + element + ".json")
//     })
//     console.log(TopStories_url)
//     getStory_detail(TopStories_url)
//     })
// }

// function getStory_detail(data)
// {
//     data.forEach(element=>{
//         fetch(element).then(res => res.json()).then(data => {
//             TopStories.push(data)
//         })
//     })
// }


