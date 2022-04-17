const generateEngineer =(data) => `
<div class="tile is-4 is-parent">
<article class="tile is-child box has-background-grey-light has-text-centered">
<p class="title">Name: ${data.name}</p>
    <p class="title">Engineer</p>
    <br>
    <p class="subtitle">Email: ${data.email}</p>
    <p class="subtitle">Id#: ${data.id}</p>
    <p class="subtitle">Github Id: ${data.gitHub}</p>

    </article>
  </div>

`

module.exports = generateEngineer;