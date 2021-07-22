import React from 'react';

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

function CharTable(props) {
    const sChracters = props.characters.map((character) => {
        return (
            <tr key={character.name}>
                <td>{character.name}</td>
                <td>{character.birth_year}</td>
                <td>{character.height}</td>
                <td>{character.mass}</td>
                <td>{character.planetName}</td>
                <td>{character.speciesName}</td>
            </tr>)
    })
    
    return (
        <Container>
            <Table striped bordered hover>
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
            </Table>
        </Container>
    )
}

export default CharTable