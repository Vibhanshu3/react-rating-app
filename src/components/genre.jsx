import React, { Component } from 'react';

const Genre = (props) => {
    let { genres, onClick, currentGenre } = props;

    return (
        <ul className="">
            {genres.map((genre) => {
                var id = genre._id;
                return (currentGenre === genre.name ?
                    <li className="list-group-item active"
                        id={genre._id}
                        key={genre._id}

                        onClick={() => onClick(genre)}>{genre.name}
                    </li> 
                        :
                    <li className="list-group-item"
                        id={genre._id}
                        key={genre._id}

                        onClick={() => onClick(genre)}>{genre.name}
                    </li>
                )
            })}
        </ul>)

}

export default Genre; 