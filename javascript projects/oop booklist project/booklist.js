// Book Constructor
function Book(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI(){}
 
    // Add book To List
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

    // Show Alert
    UI.prototype.showAlert = function(message,className){
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
    //   Delete book
    UI.prototype.deleteBook = function(target){
        if(target.className === 'delete'){
           target.parentElement.parentElement.remove();
        }
    }
    // Clear Fields
    UI.prototype.clearFields = function(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

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

        // Validate 
        if(title === '' || author === '' || isbn === ''){
        //    Error alert 
          ui.showAlert('Please fill in all fields','error');
        }else{
              // Add Book To List
        ui.addBookToList(book);

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

        // Show Alert
        ui.showAlert('Book removed!','success');
        
        e.preventDefault();
     });