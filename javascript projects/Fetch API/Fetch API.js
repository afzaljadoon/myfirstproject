// Get local text data
document.getElementById('button1').addEventListener('click',getText);
function getText(){
    fetch('test.txt')
    .then(function(res){
       return res.text();
    })
    .then(function(data){
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(function(err){
        console.log(err);
    });
}
    //  Get local Json data
    document.getElementById('button2').addEventListener('click',getJson);
function getJson(){
    fetch('API.json')
    .then(function(res){
       return res.json();
    })
    .then(function(data){
      console.log(data);
      let output = '';
      data.forEach(function(post) {
          output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
        console.log(err);
    });
}

                //  Get from external API
    document.getElementById('button3').addEventListener('click',getExternal);
    function getExternal(){
        fetch('https://api.github.com/users')
        .then(function(res){
           return res.json();
        })
        .then(function(data){
          console.log(data);
          let output = '';
          data.forEach(function(user) {
              output += `<li>${user.login}</li>`;
          });
          document.getElementById('output').innerHTML = output;
        })
        .catch(function(err){
            console.log(err);
        });
    }
