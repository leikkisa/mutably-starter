console.log("Sanity Check: JS is working!")

$(document).ready(function(){

  // getPokemon()

  $('#get-btn').on('click', function() {
    getPokemon()
  })

  $('#new-pokemon-form').on('submit', function(event) {
    event.preventDefault()
    var newPokemonData = $(this).serialize()
    $(this).trigger("reset")
    $.ajax({
      method: 'POST',
      url: 'http://mutably.herokuapp.com/pokemon/',
      data: newPokemonData,
      success: addPokemon
    })
  })

  $('document').on('click', '.edit-btn', function() {

  })

  $('document').on('click', '.save-btn', function() {
    const id = $(this).data('id')
    $.ajax({
      method: 'PUT',
      url: `http://mutably.herokuapp.com/pokemon/${id}`,
      success: updatePokemon
    })
  })

  $('document').on('click', '.delete-btn', function() {
    const id = $(this).data('id')
    $.ajax({
      method: 'DELETE',
      url: `http://mutably.herokuapp.com/pokemon/${id}`,
      success: deletePokemon
    })
  })

})

function getPokemon() {
  $.ajax({
    method: 'GET',
    url: 'http://mutably.herokuapp.com/pokemon'
  }).done(function(data) {
    data.pokemon.forEach((pokemon, i) => {
      $('.list-group').append(`
          <li class="list-group-item">
            <img src="${pokemon.image}">
            <p class="name">Name: ${pokemon.name}</p>
            <p class="pokedex">Pokedex: ${pokemon.pokedex}</p>
            <p class="evolves_from">Evolves from: ${pokemon.evolves_from}</p>
            <button class="edit-btn">Edit</button>
            <button class="save-btn">Save</button>
            <button class="delete-btn">Delete</button>
          </li>
        `)
    })
  })
}

function addPokemon() {
  getPokemon()
}

function deletePokemon() {

}

function updatePokemon() {

}
