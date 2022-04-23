const toasts = document.getElementById('toasts')
const button = document.getElementById('button')

const messages = [
  'Message one',
  'Message two',
  'Message three',
  'Message four',
]


const type = [
  'info',
  'success',
  'error',
]

const getRandomMessage = () => messages[Math.floor(Math.random() * messages.length)]
const getRandomType = () => type[Math.floor(Math.random() * type.length)]
button.addEventListener('click', () => createNotification())


//topOfLastEl to get the top position of the elements along the y - axis
let topOfLastEl = 0
function createNotification(message = null, type = null) {
  //if notifications lenght equals to 0 then topOfLastEl equals to 0 too
  //because to add notifications again from the bottom
  if (toasts.children.length === 0) {
    topOfLastEl = 0
  }

  const notif = document.createElement('div')
  notif.classList.add('toast')
  notif.classList.add(type ? type : getRandomType())
  notif.innerHTML = message ? message : getRandomMessage()
  toasts.append(notif)

  setTimeout(() => {

    if (toasts.children.length > 1) {
      /*adding a notifications height + 10 to place it
       top of each other with gap 10px 
      */
      topOfLastEl += (notif.clientHeight + 10)
    }
    notif.style.transform = `translateY(-${topOfLastEl + 10}px)`
  }, 0)



  //removing notification each 3000ms
  setTimeout(() => {
    notif.remove()
  }, 3000)
}
