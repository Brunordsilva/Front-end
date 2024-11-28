document.getElementById('searchButton').addEventListener('click', () => {
    let pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('pokemonTitle').textContent = data.name.toUpperCase();
            document.getElementById('pokemonImage').src = data.sprites.front_default;
            document.getElementById('pokemonType').textContent = `Tipo(s): ${data.types.map(type => type.type.name).join(', ')}`;
            let stats = data.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(', ');
            document.getElementById('pokemonStats').textContent = `Estatísticas: ${stats}`;
        })
        .catch(error => {
            alert('Pokémon não encontrado!');
            console.error('Erro:', error);
        });
});

document.getElementById('busque').addEventListener('click', () => {
    let typeName = document.getElementById('tipo').value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/type/${typeName}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('tiponome').textContent = `Tipo: ${data.name.toUpperCase()}`;
            document.getElementById('info').textContent = `Dano Duplo Contra: ${data.damage_relations.double_damage_to.map(type => type.name).join(', ')}`;
            document.getElementById('weakness').textContent = `Apanha de 2x: ${data.damage_relations.double_damage_from.map(type => type.name).join(', ')}`;
        })
        .catch(error => {
            alert('Tipo não encontrado!');
            console.error('Erro:', error);
        });
});
