new Typed('#tiles', {
  strings: ['Developer', '3D Artist', 'Writer', 'Cook', 'Editor'],
  typeSpeed: 70,
  backSpeed: 50,
  backDelay: 700,
  loop: true,
  showCursor: true
});

function showmore() {
  let answer = confirm('You wanna see more?');
  if (answer) alert('Too bad, I haven\'t written more! But you can always click on the profile picture for some fun');
}

const targetElm = document.querySelector('.profile-img');
targetElm.addEventListener('click', () => {
  targetElm.classList.toggle('animate');
});