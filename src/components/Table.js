import React from 'react';

function Table(props) {

    const sChracters = props.characters.map((character) => {
       return (
            <tr>
                <td>{character.name}</td>
                <td>{character.birth_year}</td>
                <td>{character.height}</td>
                <td>{character.mass}</td>
                <td>{character.homeworld}</td>
                <td>{character.species}</td>
            </tr>)
    })
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Birth Date</th>
                        <th>Height</th>
                        <th>Mass</th>
                        <th>Home World</th>
                        <th>Species</th>
                    </tr>
                </thead>
                <tbody>
                    {sChracters}
                </tbody>
            </table>
        </div>
    )
}

export default Table