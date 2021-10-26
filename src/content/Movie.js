import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuid } from 'uuid';
import Header from './Header';

const Movie = props => {

    const makeStarsLoop = rating => {
        let sum = [];
        for (let i = 1; i <= rating; i++) {
            const star = <FontAwesomeIcon key={ uuid() } style={{ fontSize: 10, color: 'black', stroke: 'black', strokeWidth: 20 }} icon={ faStar } />
            sum.push(star);
        };
        return sum;
    }

    const drawStars = rating => {
        const halfStar = <FontAwesomeIcon key={ uuid() } style={{ fontSize: 10, color: 'white', stroke: 'black', strokeWidth: 20 }}icon={ faStarHalf } />

        if(rating %2 === 0) {
            const result = makeStarsLoop(rating);
            return result;
        } else {
            const result = makeStarsLoop(rating);
            result.push(halfStar);
            return result;
        }
    }

    return (
        <header className={ "header" }>
            <Header stars={ drawStars } elements={ props }/>
        </header>
    );
};

export default Movie;