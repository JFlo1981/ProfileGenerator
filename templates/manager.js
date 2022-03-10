const generateManager =(data) => `
<div class="tile is-parent">
    <article class="tile is-child box">
      <p class="title">${data.name}</p>
      <p class="title">Manager</p>
      <p class="subtitle">${data.email}</p>
      <p class="subtitle">${data.id}</p>
      <p class="subtitle">${data.officeNumber}</p>


    </article>
  </div>

`

module.exports = generateManager;