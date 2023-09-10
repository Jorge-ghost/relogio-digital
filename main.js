const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')
const bom = document.getElementById('compri')
  const canvi = document.getElementById('canvi')

const relogio = setInterval(function time() {
  var dateToday = new Date()
  var hr = dateToday.getHours()
  var min = dateToday.getMinutes()
  var s = dateToday.getSeconds()

  if (hr < 10) hr = '0' + hr

  if (min < 10) min = '0' + min

  if (s < 10) s = '0' + s
  
  horas.textContent = hr
  minutos.textContent = min
  segundos.textContent = s
  
  
  if (hr >= 6 && hr < 12){
    canvi.innerHTML = `<h2>bom dia</h2>`
  }else if (hr >= 12 && hr <= 18){
    canvi.innerHTML = `<h2>boa tarde</h2>`
  }else {
    canvi.innerHTML = `<h2>boa noite</h2>`
  }
})
