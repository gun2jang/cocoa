const navbar = document.getElementsByClassName('nav')[0]
const loginClose = document.getElementById('login-close')
const signupClose = document.getElementById('signup-close')
window.addEventListener('scroll', function () {
  let pos = navbar.getBoundingClientRect()
  if (pos.top === 0) {
    navchange(true)
  } else if (pos.top !== 0) {
    navchange(false)
  }
})

function navchange (bool) {
  if (bool) {
    navbar.style.backgroundColor = 'rgba(255, 255, 255, 1)'
    navbar.style.boxShadow = '0 0 1rem rgba(0, 0, 0, 0.3)'
    navbar.style.height = '4rem'
    navbar.style.zIndex = '100'
    for (let i = 0; i < 5; i++) {
      document.getElementsByClassName('navtab')[i].style.fontSize = '1.3em'
    }
  } else {
    navbar.style.height = '5rem'
    navbar.style.boxShadow = 'none'
    for (let i = 0; i < 5; i++) {
      document.getElementsByClassName('navtab')[i].style.fontSize = '1.5em'
    }
  }
}

(function dialog () {
  let login = document.getElementById('login-dialog')
  let signup = document.getElementById('signup-dialog')

  document.getElementById('login-button').onclick = function () {
    login.show()
    signup.close()
  }
  document.getElementById('signup-button').onclick = function () {
    signup.show()
    login.close()
  }
  loginClose.addEventListener('click', login.close.bind(login))
  signupClose.addEventListener('click', signup.close.bind(signup))
})()
