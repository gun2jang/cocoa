waves = []
for (i = 0; i < 11; i++) {
  waves[i] = document.getElementsByClassName('wave')[i]
  left = i * (document.innerWidth)
  waves[i].style.left = 'left'
}
