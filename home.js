// Home‑page typewriter + buttons
document.addEventListener('DOMContentLoaded', () => {
  const intro   = document.getElementById('intro');
  const actions = document.getElementById('actions');
  const footer  = document.getElementById('footer');

  const text = `Politicraft is a simulated experience, ushering in a new era in digital entertainment and education. Politicraft was created and developed to provide a real life real time experience including the pressures and responsibilities that are attached to being the leader of an entire nation. You will construct its goverenment, and implement your vision for its growth. Your ambitions and personal agends are just that, yours and yours alone to choose what to do with them. Will you be the leader of as free nation, or do you believe it takes an emperor to lead an empire.
	Politicraft contains no bias or ideological opinions on The approach you and the other leaders take in the world you exist in, Politicraft is simply driven ny the chaos theory. No judgement, no advice,and no rewards for good decision making but no punishments for the bad ones made. Just a simple law that states "Anything that can happen , will. Politicraft simulates a reality where the great John Nash and his Governing Dynamics nobel prize receiving theorum serve to be the best way for you and the world you exist in to have the best chances of success and ultimately winning the highest universe ranking which is determined at the end of every year, And during that year the ranking's of individuals and globes collectively are calculated using the same subjects we use in the base reality we currently exist in. We wish you good fortune and Godspeed.
	 To continue with, or start a new nation select from the following.  
	 Ambassador,  this enables the very start of a new globe and you as its ambassador  not its leader just its initial user.
	The headed home selection will list any worlds you current exist in including the ones where you are its ambassador. The current ranking of you as a leader and the ranking of the world hosting your nation will be next to each selection `;

  let i = 0;
  const cursor = '<span class="cursor"></span>';

  function type() {
    if (i <= text.length) {
      intro.innerHTML = text.slice(0, i++) + cursor;
      requestAnimationFrame(type);
    } else {
      intro.innerHTML = text;                // remove cursor
      actions.style.display = 'flex';        // reveal buttons
      footer .style.display = 'block';
      actions.classList.add('fade-in');
      footer .classList.add('fade-in');
    }
  }
  type();

  // Button wiring
  document.getElementById('ambassadorBtn')
          .addEventListener('click', () => location.href = 'create_game.html');
  document.getElementById('savedBtn')
          .addEventListener('click', () => location.href = 'saved_games.html');
});
