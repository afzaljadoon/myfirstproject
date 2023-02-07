const http = new EasyHTTP;

// const users = http.get('https:jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

//   User data
  const data = {
      name: 'Afzal jadoon',
      username: 'Afzaljadoon',
      email: 'jadoonafzal027@gmail.com'
  }
    // Create Users
//    http.post('https:jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));


// Update post
// http.put('https:jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));


//    Delete Users
http.delete('https:jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));
