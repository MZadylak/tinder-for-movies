import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import Nav from '../menu/Nav';
import { movieContext } from '../context';

const Api = () => {
    const [ state, setState ] = useState('');
    const { Provider: MovieProvider } = movieContext;
    const { title, picture, value, desc } = state;

    const userChoice = action => {
        if(action === 'btn1') {
            alert('Successfully added to queue!')
        } else {
            generateData();
        }
    }

    useEffect(() => {
        generateData();
    }, []);

    const generateData = async() => {
            try {
                const number = Math.floor(Math.random() * 1000 + 15099);
                console.log(number);
                const request = await fetch(`https://api.themoviedb.org/3/movie/${number}?api_key=dd633cbe062d8a88b03550636b629f9d`);
                if (request.ok) {
                    const response = await request.json();
                    const {
                        original_title : title,
                        poster_path : image,
                        vote_average : value,
                        overview: desc,
                    } = response;
                    const picture = `https://image.tmdb.org/t/p/w500/${image}`;
                    return setState({ title, picture, value, desc });
                }
                return Promise.reject('Link is invalid!');
            } catch (err) {
                throw new Error('Unknown error: ', err);
            };
        };

    return (
        <>
            <Movie title={ title } picture={ picture } rating={ value } desc={ desc }/>
            <MovieProvider value={ e => userChoice(e) }>
                <Nav />
            </MovieProvider>
        </>
    )
};

export default Api;