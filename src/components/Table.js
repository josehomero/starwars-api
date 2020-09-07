import React from 'react';

class Table extends React.Component {
    render(){
        const sChracters = this.props.character.map(character => {
            <tr><td>character.name</td><td>character.age</td></tr>
        })
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
                        
                            
                            {sChracters}
                        
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table