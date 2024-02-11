let centeredLogo = document.createElement("div");
const word = 'EXPLORE NEW  EXPLORE NEW  EXPLORE NEW  ';
let degrees = [];
let input = document.querySelector('header .container .info input#profile');
let profile = document.querySelector('header .container .info .profile img');
let menu = document.querySelector('.icon--menu');
let closeIcon = document.querySelector('.icon--close');
let listItems = document.querySelector("header .container ul");
let searchInput = document.querySelector('header .container .info .info--search input');
let searchIcon = document.querySelector('header .container .info .info--search i');
let welcome = 'welcome to Algerian Djo website, here you can find your styles';


centeredLogo.classList.add('centeredLogo');

for ( let i=0; i<word.length; i++) {
    let letter = document.createElement('div');
    letter.innerHTML = word[i]
    centeredLogo.appendChild(letter)

    const degree = Math.floor(parseInt(i) * 360 / word.length)
    degrees.push(degree)
}
let div = document.createElement('div');
div.innerHTML = `<i class="fa-solid fa-star"></i>`
centeredLogo.appendChild(div)
document.querySelector('.hero .col--right .row').appendChild(centeredLogo)

let gettingTheCenteredLogo = document.querySelectorAll('.hero .col--right .row .centeredLogo div')

let k=0;
degrees.forEach(ele => {
    gettingTheCenteredLogo[k].style = `transform: translateX(-50%) rotate(${ele}deg);`
    k+=1
})

input.addEventListener('change', ()=> {
    profile.src = URL.createObjectURL(input.files[0])
})

menu.onclick = () => {
    listItems.classList.add('active')
}
closeIcon.onclick = () => {
    listItems.classList.remove('active')
}

searchIcon.onclick = () => {
    searchIcon.classList.toggle('active')
    searchInput.classList.toggle('active')
}

gsap.from('.hero .col--right .row .centeredLogo', {
    left: '20%',
    top: '0%',
    ease: Bounce.easeOut,
    duration: 1,
    delay: 1
})
gsap.from('.hero .col--right .row .centeredLogo', { rotate: 1000, ease: Bounce.easeOut, duration: 2, scale: 0, border: '0.5px solid black'})
gsap.to('.hero .col--right .row .centeredLogo', {
    border: '15px solid var(--bg-clr)',
    delay: 2
})
gsap.to('.hero .col--right .row .centeredLogo', {
    rotate: 360,
    repeat: -1,
    ease: 'none',
    duration: 4,
    delay: 2
})
gsap.from('.overlay-full', {
    width: '100%',
    height: '100%',
    delay: 1.5
})
let msg = null
if (msg && speechSynthesis.speaking){
    speechSynthesis.cancel()
}

msg = new SpeechSynthesisUtterance(welcome);
speechSynthesis.speak(msg);
