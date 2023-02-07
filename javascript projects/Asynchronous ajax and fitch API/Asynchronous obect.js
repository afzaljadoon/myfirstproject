document.getElementById('button').addEventListener('click',loadData);

function loadData(){
    // create an xhr object
    const xhr = new XMLHttpRequest();
    // open
    xhr.open('GET','data.txt',true);

    // console.log('READYSTATE',xhr.readyState);
    // Optional - Used for spinners/loaders 
    xhr.onprogress = function(){
        console.log('READYSTATE',xhr.readyState);
    }

    xhr.onload = function(){
        console.log('READYSTATE',xhr.readyState);
        if(this.status === 200){
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
        }

    }
    // xhr.onreadystatechange = function(){
    //     console.log('READYSTATE',xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4){

    //         console.log(this.responseText);
    //     }
    // }

    xhr.onerror = function(){
        console.log('Request error...');
    }


    xhr.send();
    
    // HTTP Statuses
    // 200: "OK"
    // 403: "Forbidden"
    // 404: "Not Found"
}