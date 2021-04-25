var reson=[
   "Neetu Chauhaan", "Pratyaksha Chauhaan", "Divik Chauhaan"
]
var images=[
    "https://images.unsplash.com/photo-1503629760789-17d0cc6f520a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ","https://images.unsplash.com/photo-1440581572325-0bea30075d9d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ","https://images.unsplash.com/photo-1476041583396-e91e78267fb8?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ","https://images.unsplash.com/photo-1524596013831-27504321a6d9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
]
var i=0;
function nextslide(){
    document.getElementById ("reasontext").innerHTML=reasons[i]
    document.getElementById ("album").src=imges[i]; i++
}