import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './card.css';

const Card = () => {

    const [pokemon, setPokemon] = useState('');
    const [query, setQuery] = useState('charmander');
    const [picture, setPicture] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [move, setMove] = useState('');
    const [ability, setAbility] = useState('');
    const [err, setErr] = useState('');

    useEffect((
        () => {
            (async (query) => {
                await axios.get(
                    `https://pokeapi.co/api/v2/pokemon/${query}`
                ).then(response => {
                    setName(response.data.name);
                    setPicture(response.data.sprites.other.dream_world.front_default);
                    setType(response.data.types[0].type.name);
                    setMove(response.data.moves[0].move.name);
                    setAbility(response.data.abilities[0].ability.name);
                    setErr('')
                }
                ).catch(() => setErr('Pokemon not found'));
            })(query);
        }), [query])

    return (

        <div className="ui container">

            <div className="centralTitle">
                <h1 className="japan"> ポケモン </h1>
                <h1 >Gotta cath'em all</h1>
            </div>

            <div className="central">
                <form className="ui input">
                    <input type="text"
                        value={pokemon}
                        onChange={e => setPokemon(e.target.value)}
                        style={{ margin: '0px 28px 0px 0px' }}>
                    </input>

                    <button className='ui button orange' onClick={(e) => { e.preventDefault(); setQuery(pokemon) }}>Search</button>
                </form>

                <div className="ui card">
                    {err ?
                        <h1>{err}</h1>
                        :
                        <>
                            <h2 style={{ color: 'pink', fontSize: '40px' }}>{name}</h2>

                            <div className="image">
                                <img src={picture} />
                            </div>

                            <p>Type: {type}</p>
                            <p>Move: {move}</p>
                            <p>Ability: {ability}</p>

                        </>}
                </div>

            </div>
        </div>
        
    );

}

export default Card;