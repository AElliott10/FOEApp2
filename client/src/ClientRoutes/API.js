import axios from "axios";
//Routes to the database

export default {
  // Establishing your end points

  //Registers Account in the database
  saveAccounts: function (accountsData) {
    return axios.post("/api/account", accountsData);
  },

  
// Gets all data from family profile
getFamilyProfile: function (id) {
  return axios.get("/api/account/" + id);
}

  /*LogOut
  userLogout: function(obj) {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('eco-user');
  },*/

  /*userToken: function() {
    return (axios.defaults.headers.common[
      'Authorization'
    ] = localStorage.getItem('jwtToken'));
  },*/

};



/* Possible code to leverage
export default {
    // Gets all books
    getBooks: function() {
      return axios.get("/api/books");
    },
    // Gets the book with the given id
    getBook: function(id) {
      return axios.get("/api/books/" + id);
    },
    // Deletes the book with the given id
    deleteBook: function(id) {
      return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function(bookData) {
      return axios.post("/api/books", bookData);
    }
  };*/