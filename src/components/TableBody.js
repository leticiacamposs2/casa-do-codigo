import React from 'react';

const TableBody = props => {
    const linhas = props.autores.map((linha, index) => {
        return (
            <tr key={index}>
                <td>{linha.nome}</td>
                <td>{linha.livro}</td>
                <td>{linha.preco}</td>
                <td><button onClick={() => { props.removeAutor(index) }} className="waves-effect waves-light indigo lighten-2 btn">Remover</button></td>
            </tr>

        )
    });

    return (
        <tbody>
            {linhas}
        </tbody>
    );
}

export default TableBody;