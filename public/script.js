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
    const updatedPokemonData = {

    }

    $.ajax({
      method: 'PUT',
      url: `http://mutably.herokuapp.com/pokemon/${id}`,
      data: updatedPokemonData,
      success: updatePokemon
    })
  })

  $('document').on('click', '.delete-btn', function() {
    console.log('Attempting to delete')
    alert('Attempting to delete')
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
    console.log(data)
    data.pokemon.forEach((pokemon, i) => {
      $('.list-group').append(`
          <li class="list-group-item" id="${pokemon._id}">
            <img src="${pokemon.image}">
            <p class="name">Name: ${pokemon.name}</p>
            <p class="pokedex">Pokedex: ${pokemon.pokedex}</p>
            <p class="evolves_from">Evolves from: ${pokemon.evolves_from}</p>
            <button class="edit-btn" data-id="${pokemon._id}">Edit</button>
            <button class="save-btn" data-id="${pokemon._id}">Save</button>
            <button class="delete-btn" data-id="${pokemon._id}">Delete</button>
          </li>
        `)
    })
  })
}

function addPokemon() {
  getPokemon()
}

function deletePokemon(data) {
  const id = data._id
  console.log( 'data:', data )
  $(`#${id}`).remove()
}

function updatePokemon(data) {
  const id = data._id
}

function editPokemon() {

}
