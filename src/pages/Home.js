import React, { Component, Fragment } from 'react';
import '../../node_modules/materialize-css/dist/css/materialize.min.css';

import Tabela from '../components/Tabela';
import Form from '../components/Formulario';
import PopUp from '../utils/PopUp';
import ApiService from '../utils/ApiService';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            autores: [],
        };
    }

    componentDidMount() {
        ApiService.ListaAutores()
            .then(res => {
                if (res.message === 'success') {
                    this.setState({ autores: [...this.state.autores, ...res.data] })
                }
            })
            .catch(err => PopUp.exibeMensagem('error', "Erro na comunicação com a API ao tentar listar os autores"));
    }

    state = {
        autores: [
            {
                nome: 'Paulo',
                livro: 'React',
                preco: '1000'
            },
            {
                nome: 'Daniel',
                livro: 'Java',
                preco: '99'
            },
            {
                nome: 'Marcos',
                livro: 'Design',
                preco: '150'
            },
            {
                nome: 'Bruno',
                livro: 'DevOps',
                preco: '100'
            }
        ],
    }

    removeAutor = id => {
        const { autores } = this.state;

        const autoresAtualizado = autores.filter(autor => {
            return autor.id !== id
        });

        ApiService.RemoveAutor(id)
            .then(res => {
                if (res.message === 'deleted') {
                    this.setState({ autores: [...autoresAtualizado] });
                    PopUp.exibeMensagem('error', "Autor removido com sucesso");
                }
            })
            .catch(err => PopUp.exibeMensagem('error', "Erro na comunicação com a API ao tentar remover o autor"))
    }

    escutadorDeSubmit = autor => {
        ApiService.CriaAutor(JSON.stringify(autor))
            .then(res => {
                if (res.message === 'success') {
                    this.setState({ autores: [...this.state.autores, autor] });
                    PopUp.exibeMensagem('success', "Autor adicionado com sucesso");
                }
            })
            .catch(err => PopUp.exibeMensagem('error', "Erro na comunicação com a API ao tentar criar o autor"));
    }

    render() {
        return (
            <Fragment>
                <div className="container mb-10">
                    <h1>Casa do código</h1>
                    <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
                    <Form escutadorDeSubmit={this.escutadorDeSubmit} />
                </div>
            </Fragment>
        );
    }
}

export default Home;
