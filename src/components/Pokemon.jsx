import axios from 'axios';
import {useState, useEffect } from 'react';

/** {poke} => es la variable que retorna todo los pokemones en el componente ListPokemons.jsx */
export default function Pokemon({pokes}) {
    /**
     * axios: peticione => GET, UPDATE, DELETE, POST
     * hook: son funciones donde yo manipulo mi estado
     * hooks mas utilizados: useState, useEffect => this.state, this.setState
     */

    /** inicializo mi estado, tomando en cuenta que las  llaves {} ya contiene informacion de otro componente*/
    const [pokemon, setPokemon] = useState({})

    /** metodo para obtener cada pokemon por medio de su url */
    const getPokemon = (url) =>{
        axios.get(url)
        .then((response) => {
            //console.log(response)
            //actualizamos el estado con cada pokemon en base a su URL
            console.log(response.data);
            setPokemon(response.data)
        })
        .catch((err) => {console.log(err)})
    }

    const getName = () => {

    }

    /** montamos el metodo getPokemon para visualizarlo en pantalla */
    useEffect(() => {
        //pokes.url => es el resultado de cada url de un pokemon diferente
        //ejemplo: https://pokeapi.co/api/v2/pokemon/2/ => contiene informacion del pokemon ivysaur
        getPokemon(pokes.url)
    },[])

    return (
        <div>
            <h4>{pokemon.name}</h4>
            <img src={pokemon.sprites.back_default} alt="" />
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
        </div>
    )

    /*pokemon = [
        {
            name: "ivysaur",
            height: 15,
            sprites: {
                if: "bjhd",
                front_default: "hbhjbj"
            }
        }
    ]*/
}
