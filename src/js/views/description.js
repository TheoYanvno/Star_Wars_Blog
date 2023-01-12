import React, {useState, useEffect, useContext} from 'react';
import { Context } from "../store/appContext";

export const Description = () => {
    const {store, actions} = useContext(Context)

    useEffect(() => {
        actions.fetchDescription(store.item)
        console.log(store.description)
    }, [])

    return (
        <div className='description-container'>
                {store.description.hair_color ? 
                    <div className='details-container'>
                        <h1 className='name'>{store.description.name}</h1>
                        <h4 className='description'>Hair color: {store.description.hair_color}</h4>
                        <h4 className='description'>Eye color: {store.description.eye_color}</h4>
                        <h4 className='description'>Birth year: {store.description.birth_year}</h4>
                        <h4 className='description'>Gender: {store.description.gender}</h4>
                    </div>
                : store.description.terrain ? 
                <div className='details-container'>
                    <h1 className='name'>{store.description.name}</h1>
                    <h4 className='description'>Terrain: {store.description.terrain}</h4>
                    <h4 className='description'>Population: {store.description.population}</h4>
                </div>
                : store.description.passengers ?
                <div className='details-container'>
                    <h1 className='name'>{store.description.name}</h1>
                    <h4 className='description'>Manufacturer: {store.description.manufacturer}</h4>
                    <h4 className='description'>Passengers: {store.description.passengers}</h4>
                </div>
                : null}
        </div>
    )
}