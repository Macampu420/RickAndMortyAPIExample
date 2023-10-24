const totalCharactersCount = 500;

document.getElementById('getCharacters').onclick = async () => {
  const charactersData = await fetchAllCharactersData()
  renderCharacterCards(charactersData)
}

const fetchAllCharactersData = async () => {
  const responseFetch = await fetch(
    `https://rickandmortyapi.com/api/character/${pickRandomCharacters(10)}`
  )
  const charactersData = await responseFetch.json()
  return charactersData
}

const pickRandomCharacters = n => {
  const randomCharacters = []
  for (let i = 0; i < n; i++) {
    // picks a random id between 1 and totalCharactersCount
    randomCharacters.push(Math.floor(Math.random() * totalCharactersCount) + 1)
  }
  return randomCharacters.join(",")
}

const renderCharacterCards = charactersData => {
  const characterCards = charactersData.map(characterData => {
    return `
      <article class="cartaPersonaje">
          <div>
            <p>Nombre: ${characterData.name}</p>
            <p>Genero: ${characterData.gender}</p>
            <p>Especie: ${characterData.species}</p>
            <p>Estado: ${characterData.status}</p>
          </div>
          <div>
            <img src="${characterData.image}" alt="image for ${characterData.name}">
          </div>
      </article>
    `
  })

  document.getElementById('charctersContainer').innerHTML = characterCards.join('')
}
