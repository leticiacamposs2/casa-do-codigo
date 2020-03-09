import React, {Component} from 'react';

import TableHead from './TableHead';
import TableBody from './TableBody';

class Tabela extends Component {
    render() {
        const { autores, removeAutor } = this.props;

        return (
            <table className="centered hightlight">
                <TableHead />
                <TableBody autores={autores} removeAutor={removeAutor} />
            </table>
        );
    }

}

export default Tabela;