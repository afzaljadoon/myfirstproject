class Book{
       constructor(title,author,isbn){
       this.title = title;
       this.author = author;
       this.isbn = isbn;
    }
}

class UI{
    addBookToList(book){
        UI.prototype.addBookToList = function(book){
            const List = document.getElementById('book-list');
            // Create tr element
            const row = document.createElement('tr');
    
        //    Insert cols
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>`;
    
        List.appendChild(row);
    }
}

    showAlert(message,className){
    
        // Create div
        const div = document.createElement('div');
        // Add Classes
        div.className = `alert ${className}`;
        // Append child
        div.appendChild(document.createTextNode(message));
        // Get Parent
        const container = document.querySelector('.container');
        // Get Form
        const form = document.querySelector('#book-form');
        // Insert Alert
        container.insertBefore(div,form);
        // Set Timeout After 3 Sec
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 3000);

    }

    

    deleteBook(target){
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
    }
}

    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

        // Local Storage Class
        class Store{
            
            static getBooks(){
               let books;
               if(localStorage.getItem('books') === null){
                   books = [];
               }else{
                   books = JSON.parse(localStorage.getItem('books'));
               }
               return books;
            }
            static displayBooks(){
                const books = Store.getBooks();
                books.forEach(function(book) {
                    const ui = new UI();

                    // Add book to ui
                    ui.addBookToList(book);
                });
                
            }
            static addBook(book){
                 const books = Store.getBooks();

                 books.push(book); 

                localStorage.setItem('books',JSON.stringify(books)); 
            }

            static removeBook(isbn){
               const books = Store.getBooks();
               
               books.forEach(function(book,index){
                   if(book.isbn === isbn ){
                       books.splice(index,1);
                   }
               });
               localStorage.setItem('books',JSON.stringify(books));
            }
        }
        // DOM Load Event 
        document.addEventListener('DOMContentLoaded',Store.displayBooks);

         // Event listeners for add fields
document.getElementById('book-form').addEventListener('submit',function(e){
   
    // Get Form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

        //   instantiate book
        const book = new Book(title,author,isbn);

        // instantiate UI
        const ui = new UI();

        console.log(ui);

        // Validate 
        if(title === '' || author === '' || isbn === ''){
        //    Error alert 
          ui.showAlert('Please fill in all fields','error');
        }else{
              // Add Book To List
        ui.addBookToList(book);

        // Store in LS
        Store.addBook(book); 

        // Show success
        ui.showAlert('Book Added!','success');

        // Clear fields
        ui.clearFields();
        }
    
    e.preventDefault();
});

    // Event listener for delete
     document.getElementById('book-list').addEventListener('click',function(e){
        
        // instantiate UI
        const ui = new UI();

        // Delete book
        ui.deleteBook(e.target);

        // Remove From LS
        Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

        // Show Alert
        ui.showAlert('Book removed!','success');
        
        e.preventDefault();
     });