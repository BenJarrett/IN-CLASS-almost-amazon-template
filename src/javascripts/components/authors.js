// FIXME: STUDENTS show your authors
const showAuthors = (array) => {
  document.querySelector('#store').innerHTML = '';
  // CREATE A BUTTON TO ADD BOOKS
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add An Author</button>';
  array.forEach((item) => {
    // FIXME: STUDENTS create cards for your authors
    document.querySelector('#store').innerHTML += `<div class="card">
                                                    <div class="card-body" style="height: 180px;">
                                                    <h5 class="card-title"><a href="#" id="author-name-title--${item.firebaseKey}">${item.first_name} ${item.last_name}</a></h5>
                                                    <h5 class="card-title">${item.email}</h5>
                                                    <hr>
                                                   
                                                    <button class="btn btn-info" data-toggle="modal" data-target="#formModal" id="edit-author-btn--${item.firebaseKey}">Edit Author</button>
                                                    <button class="btn btn-danger" id="delete-author--${item.firebaseKey}">Delete Author</button>
                                                    </div>
                                                  </div>`;
  });
};

const emptyAuthors = () => {
  document.querySelector('#store').innerHTML = '<h1>No Authors</h1>';
};

export { showAuthors, emptyAuthors };
