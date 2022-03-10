const generateIntern =(data) => `
<div class="tile is-parent">
    <article class="tile is-child box">
    <p class="title">${data.name}</p>
    <p class="title">Intern</p>
    <p class="subtitle">${data.email}</p>
    <p class="subtitle">${data.id}</p>
    <p class="subtitle">${data.school}</p>

    </article>
  </div>

`

module.exports = generateIntern;