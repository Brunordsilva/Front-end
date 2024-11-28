document.getElementById('searchButton').addEventListener('click', () => {
    let pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => {
            // Manipulando o DOM para exibir as informaçõesemonTitle
            document.getElementById('pokemonTitle').textContent = data.name.toUpperCase();
            document.getElementById('pokemonImage').src = data.sprites.front_default;
            document.getElementById('pokemonType').textContent = `Tipo(s): ${data.types.map(type => type.type.name).join(', ')}`;

            // Exibindo as estatísticas
            let stats = data.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(', ');
            document.getElementById('pokemonStats').textContent = `Estatísticas: ${stats}`;
        })
        .catch(error => {
            alert('Pokémon não encontrado!');
            console.error('Erro:', error);

        });
    fetch('https://pokeapi.co/api/v2/pokemon/{id}')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error('Erro:', error));
});


document.getElementById('busque').addEventListener('click', () => {
    let TypeId = document.getElementById('tipo').value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/type/${TypeId}}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('tiponome').textContent = `Tipo(s): ${data.types.map(type => type.type.name).join(', ')}`;

        })
        .catch(error => console.error('Erro:', error));
});