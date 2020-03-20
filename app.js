//Variabless
const listTwests = document.getElementById('lista-tweets');


//Evento Listeners

evenListener();

function evenListener() {
    //Envia formulario
    document.querySelector('#formulario').addEventListener('submit',agregarTweet)

    //Borrar Tweet
    listTwests.addEventListener('click',borrarTweet);

    //Contenido cargado
    document.addEventListener('DOMContentLoaded',localStListo);
}


//Funciones

//Añadir tweet
function agregarTweet(e) {
    e.preventDefault();
    //Leer valor de textarea
    const tweet = document.getElementById('tweet').value;
    
    //Crear elemento y agregar a lista
    const row = document.createElement('div');
    row.classList.add( "row", "bt", "box" );

    //imagen
    const img = document.createElement('img');
    img.src = "https://picsum.photos/id/1/80/80";
    img.classList = "img-fluid";
    const image = document.createElement("div");
    image.classList.add("col-m-2", "col-s-2");
    image.appendChild(img);
    
    //texto
    const text = document.createElement("div");
    text.classList.add("col-m-9", "col-s-9", "txt");
    text.innerText = tweet;

    //Boton x borrar
    const borrar = document.createElement("div");
    borrar.classList.add("col-m-1", "col-s-1");
    const boton = document.createElement("button");
    boton.classList = "x";
    boton.innerText = "x";
    borrar.appendChild(boton);

    //Meter elementos al div principal
    row.appendChild(image);
    row.appendChild(text);
    row.appendChild(borrar);
    
    //Agregar el tweet
    listTwests.appendChild(row);

    //Agregar a Local Storage
    agregarTweetLocalSt(tweet);

}

//Eliminar Tweet
function borrarTweet(e) {
    e.preventDefault();
    if(e.target.className === "x") {
        var tweeetBr = e.target.parentElement.parentElement;
        e.target.parentElement.parentElement.remove();
        
        borrarTeetLs(e.target.parentElement.parentElement.querySelector('.txt').innerText);
    }
}

//Mostrar datos de Ls en la lista
function localStListo() {
        let tweets = obtenerTweetsLocalSt();

        tweets.forEach( function(tweet) {
            //Crear elemento y agregar a lista
        const row = document.createElement('div');
        row.classList.add( "row", "bt", "box" );

        //imagen
        const img = document.createElement('img');
        img.src = "https://picsum.photos/id/1/80/80";
        img.classList = "img-fluid";
        const image = document.createElement("div");
        image.classList.add("col-m-2", "col-s-2");
        image.appendChild(img);
        
        //texto
        const text = document.createElement("div");
        text.classList.add("col-m-9", "col-s-9", "txt");
        text.innerText = tweet;

        //Boton x borrar
        const borrar = document.createElement("div");
        borrar.classList.add("col-m-1", "col-s-1");
        const boton = document.createElement("button");
        boton.classList = "x";
        boton.innerText = "x";
        borrar.appendChild(boton);

        //Meter elementos al div principal
        row.appendChild(image);
        row.appendChild(text);
        row.appendChild(borrar);
        
        //Agregar el tweet
        listTwests.appendChild(row);
    });

}

//Agregar tweeet a Local Storage
function agregarTweetLocalSt(tweet) {
    let tweets = obtenerTweetsLocalSt();

    //Añadir el nuevo tweet
    tweets.push(tweet);

    //Convertir a string a arreglo para ls
    localStorage.setItem('tweets', JSON.stringify(tweets))

}

//Obtener los tweets de Local Storage
function obtenerTweetsLocalSt() {
    let tweets;

    //Checar valores de local storage
    if(localStorage.getItem('tweets') === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

//Eliminar tweet de Local Storage 
function borrarTeetLs(tweetBr) {
    let tweets;
    tweets = obtenerTweetsLocalSt();

    tweets.forEach(function(tweet, index) {
        if(tweetBr === tweet) {
            tweets.splice(index, 1);
        }
    });

    localStorage.setItem("tweets", JSON.stringify(tweets));
}