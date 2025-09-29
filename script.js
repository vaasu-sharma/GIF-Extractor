document.getElementById('input').addEventListener('keyup',function(event){
    event.preventDefault();
    if(event.keyCode===13)
    document.getElementById('btn').click();
});

function getApi(){
     
    var userInput = document.getElementById("input").value
    var gifApiKey = "kpeCqloW1Vg54xQ6nzAedtkN94DocfFB"
    var gifApiURL = `https://api.giphy.com/v1/gifs/search?api_key=${gifApiKey}&q=${userInput}&rating=g`
    

    fetch(gifApiURL).then(function (response){
         return response.json();
    }).then(function (giphy){
        //  console.log(giphy.data[0].images.fixed_height.url)
         for(i=0;i<giphy.data.length;i++){
         var imgPath=giphy.data[i].images.fixed_height.url
         var img = document.createElement("img")
         img.setAttribute("src", imgPath)
        //  img.setAttribute("id",boxing)
        img.id="boxing";
         document.getElementById('babba').appendChild(img);
        //  document.body.appendChild(img)
    }
})
removeApi();
};
function removeApi(){
    for(i=0;i<50;i++)
    document.querySelector('img').remove();
}