//conexion con la api
//ver info que nos da
//enlazar el nombre que seleccionamos con la url de la api
//comprobar que nos funciona
//añadir más elementos
// que cada pokemos nos devuelva el nombre, imagen, tipo, altura y peso
//ajustar css (opcional)

document.getElementById('get-pokemon').addEventListener('click', function() {
  const select = document.getElementById("pokemon-select");
    const pokemonName = select.value;

    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error("Error al obtener los datos del pokemon")
        }else{
            return response.json();
        }
    })
    .then(data => {
         const template = `
            <li>
            <img src="${data.sprites.front_default}" alt="${data.name}" />
            <h2><strong>Nombre:</strong> ${data.name}</h2>
            <p><strong>Tipo:</strong> ${data.types.map(t => t.type.name).join("")}</p>
            <p><strong>Altura:</strong> ${data.height}</p>
            <p><strong>Peso:</strong> ${data.weight}</p>
            </li>
      `
         document.getElementById("pokemon-info").innerHTML = template;
         console.log(data)
    });
});

/*function obtenerNombre(nombre){

const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;
const mostrarTiposPokemon = getDataPokemon.types.map((tipo) => tipo.type.name).join(", ");

function getDataPokemon (){
    fetch(url)
    .then (response => {
        if(!response.ok){
            throw new Error("Error al obtener los datos del pokemon");
        }
        return response.json();
    })
     .then(data => {
         mostrarTiposPokemon(data);
        
    })   
}

//console.log(mostrarTiposPokemon);
*/