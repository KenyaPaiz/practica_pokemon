import axios from 'axios';
import {useState, useEffect} from 'react';
import Pokemon from './Pokemon';


export default function ListPokemons() {
    /**
     * useState() = inicializamos nuestro estado con 2 valores
     * 
     * 1. pokemons => arreglo vacio y con el que voy a trabajar cuando retorne mis datos
     * 2. setPokemons => actualiza el arreglo del estado
     * 
     */
    /** this.state = {pokemons: []} */
    const [pokemons, setPokemons] = useState([]);
    const [contador, setContador] = useState(0);

    /** funcion expresada */
    const getPokemons = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then((response) => {
            /** Recorro el data y results del objeto de la api pokemon */
            console.log(response.data.results);
            setPokemons(response.data.results);
        })
        .catch((err) => {console.log(err)})
    }

    /** useEffect => es una funcion de efectos que me ayuda a montar el estado o los metodos que contiene el estado */
    useEffect(() => {
        getPokemons();
    },[])

    return (
        pokemons.map((val, i) => {
            return <Pokemon key={i} pokes={val} />
        })
    )
}
