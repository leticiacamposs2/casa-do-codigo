import React, { Component, Fragment } from 'react';
import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';

import Header from './components/Header';
import Tabela from './components/Tabela';
import Form from './components/Formulario';
import PopUp from './components/PopUp';

import ApiService from './services/ApiService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autores: [],
    };
  }

  componentDidMount() {
    ApiService.ListaAutores()
      .then(res => {
        this.setState({ autores: [...this.state.autores, ...res.data] })
      });
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

    this.setState(
      {
        autores: autores.filter((autor) => {
          return autor.id !== id;
        }),
      }
    );
    PopUp.exibeMensagem('error', "Autor removido com sucesso");
    ApiService.RemoveAutor(id);
  } 

  escutadorDeSubmit = autor => {
    ApiService.CriaAutor(JSON.stringify(autor))
      .then(res => res.data)
      .then(autor => {
        this.setState({ autores: [...this.state.autores, autor] });
        PopUp.exibeMensagem('success', "Autor adicionado com sucesso");
      });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h1>Casa do código</h1>
          <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
          <Form escutadorDeSubmit={this.escutadorDeSubmit}/>
        </div>
      </Fragment>
    );
  }
}

export default App;
