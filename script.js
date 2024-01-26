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
  if (answer) alert('too bad, i haven\'t written more!');
}