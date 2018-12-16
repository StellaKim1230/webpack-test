console.log(__dirname)
module.exports = {
  hi: function() {
    var greet = document.createElement('div')
    greet.innerHTML = 'HI there and greetings!'
    return greet;
  }
}