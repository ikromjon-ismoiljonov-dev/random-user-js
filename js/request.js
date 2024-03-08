// api
const API = 'https://randomuser.me/api/?results=9'

// for leader
const overlay = document.getElementById('overlay')

//toggle Loader

const loaderToggle = (toggle) =>{
    if(toggle){
        overlay.classList.remove('hidden');
    }   else{
        overlay.classList.add('hidden');
    }
}

//request Promise 

const getData = (resourse) =>{
    return new Promise((resolve, reject) =>{
        const request = new XMLHttpRequest();
        
        request.addEventListener('readystatechange', ()=>{
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);
                resolve(data.results);
                loaderToggle(false);
            } else if(request.readyState < 4 && request.status === 200){
                console.log('Loading ...')
                loaderToggle(true)
            }
            else if(request.readyState === 4){
                reject("error");
                loaderToggle(false)
            }
        })
        
        request.open('GET', resourse);
        request.send();
    })
}


//  Load

const reload = ()=>{
    getData(API)
        .then((data)=>{
            updateUI(data);
        })
        .catch((err)=>{
            console.log(err);
        })
}

document.addEventListener('DOMContentLoaded', reload);


loaderToggle();