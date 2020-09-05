import React from 'react';

class Table extends React.Component {
    render(){
        return(
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
                        <tr>
                            <td>{this.props.characters.name}</td>
                            <td>{this.props.characters.birth_year}</td>
                            <td>{this.props.characters.height}</td>
                            <td>{this.props.characters.mass}</td>
                            <td>{this.props.planet.name}</td>
                            <td>{this.props.species.name}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table