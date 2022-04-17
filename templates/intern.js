const generateIntern =(data) => `
<div class="tile is-parent">
    <article class="tile is-child box has-background-light-grey">
    <p class="title">Name: ${data.name}</p>
    <p class="title">Intern</p>
    <p class="subtitle">Email: ${data.email}</p>
    <p class="subtitle">Id#: ${data.id}</p>
    <p class="subtitle">School: ${data.school}</p>

    </article>
  </div>

`

module.exports = generateIntern;