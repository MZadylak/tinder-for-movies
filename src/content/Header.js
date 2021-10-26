import React from 'react';

const Header = (props) => {
    const { elements, stars } = props;
    const { title, rating, picture, desc } = elements;
    return (
        <>
        <h2 className={ "header__title" }>{ title }</h2>
        <p className={ "header__text" }>{ stars(rating) }<span>{ rating }</span></p>
        <div className={ "header__flip "}>
            <div className={ "header__flip-front"}>
                <img className={ "header__picture" } src={ picture } alt={ title } />
            </div>
            <div className={ "header__flip-back" }>
                <p className= { "header__text header__text-flip" }>{ desc }</p>
            </div>
        </div>
        </>
    )
};

export default Header;