const toasts = document.getElementById('toasts')
const button = document.getElementById('button')

const messages = [
  'Message one',
  'Message two',
  'Message three',
  'Message four',
]



const getRandomMessage = () => messages[Math.floor(Math.random() * messages.length)]

button.addEventListener('click', createNotification)

let topOfLastEl = 0
function createNotification() {
  if (toasts.children.length === 0) {
    topOfLastEl = 0
  }

  const notif = document.createElement('div')
  notif.classList.add('toast')
  notif.innerHTML = getRandomMessage()
  toasts.append(notif)
  setTimeout(() => {
    if (toasts.children.length > 1) {
      topOfLastEl += (notif.clientHeight + 10)
    }
    notif.style.transform = `translateY(-${topOfLastEl + 10}px)`
  }, 0)


  setTimeout(() => {
    notif.remove()
  }, 3000)
}
