const generateManager =(data) => `
<div class="tile is-parent">
    <article class="tile is-child box has-background-yellow">
      <p class="title">Name: ${data.name}</p>
      <p class="title">Manager</p>
      <p class="subtitle">Email: ${data.email}</p>
      <p class="subtitle">Id#: ${data.id}</p>
      <p class="subtitle">Office#: ${data.officeNumber}</p>


    </article>
  </div>

`

module.exports = generateManager;