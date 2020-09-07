import React from 'react';

function Table(props) {

    const sChracters = props.characters.map((character) => {
       return (
            <tr>
                <td>character.name</td>
                <td>character.age</td>
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