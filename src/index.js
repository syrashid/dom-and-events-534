// const list = document.getElementById('players');
// console.log(list);

// list.insertAdjacentHTML("beforeend", "<li>Luke Skywalker</li>");

// list.insertAdjacentHTML("beforeend", "<li>Leia Skywalker</li>");

// const luke = list.querySelector('li+li');

// console.log(luke.innerHTML);

// const teams = document.querySelectorAll('#fifa-wins>li');
// const list = document.querySelector('#fifa-wins');
// list.insertAdjacentHTML("beforeend", '<li>France (2 Wins)</li>');
// console.log(teams);

// const printTeam = (team) => {
//   console.log(team.innerText);
//   console.log(this);
// };


// teams.forEach(printTeam);


// function printTeam(team) {
//   console.log(team.innerText);
//   console.log(this);
// }


const avatars = document.querySelectorAll('img');

avatars.forEach((avatar) => {
  avatar.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('avatar');
  });
})
