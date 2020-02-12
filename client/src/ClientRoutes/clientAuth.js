// function to set JWT in request header
import axios from 'axios';

export default {
  userToken: function() {
    return (axios.defaults.headers.common[
      'Authorization'
    ] = localStorage.getItem('jwtToken'));
  },
  
  userLogin: function(obj) {
    return axios.post('/api/auth/login', obj);
  },
  
  populateLocalStorage: function(accountsData) {
    localStorage.setItem('jwtToken', accountsData.token);
    localStorage.setItem('eco-user', JSON.stringify(accountsData.user));
  },

  getLocalStorage: function(key) {
    return localStorage.getItem(key);
  },
}
  