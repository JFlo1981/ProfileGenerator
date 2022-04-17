const generateManager =(data) => `
<div class="tile is-12 is-vertical is-parent px-6">
<article class="tile is-child box has-background-grey has-text-centered">
<p class="title">Name: ${data.name}</p>
      <p class="title">Manager</p>
      <br>
      <p class="subtitle">Email: ${data.email}</p>
      <p class="subtitle">Id#: ${data.id}</p>
      <p class="subtitle">Office#: ${data.officeNumber}</p>


    </article>
  </div>

`

module.exports = generateManager;