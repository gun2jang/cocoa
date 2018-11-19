let navbar = document.getElementsByClassName('nav')[0]
// if(pos.top==0){
//   navbar.style.backgroundColor = 'rgba(255, 255, 255, 1)';
//   navbar.style.boxShadow = '0 0 1rem rgba(0, 0, 0, 0.3)';
// } else{
//   navbar.style.boxShadow = '0 0 0 0'
// }

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
