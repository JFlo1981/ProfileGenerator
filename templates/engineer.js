const generateEngineer =(data) => `
<div class="tile is-parent">
    <article class="tile is-child box">
    <p class="title">${data.name}</p>
    <p class="title">Engineer</p>
    <p class="subtitle">${data.email}</p>
    <p class="subtitle">${data.id}</p>
    <p class="subtitle">${data.gitHub}</p>

    </article>
  </div>

`

module.exports = generateEngineer;