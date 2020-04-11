import React, { Component, Fragment } from 'react';
import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';

import Header from './components/Header';
import Tabela from './components/Tabela';
import Form from './components/Formulario';
import PopUp from './components/PopUp';

class App extends Component {

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

  removeAutor = index => {

    const { autores } = this.state;

    this.setState({
      autores: autores.filter((autor, posAtual) => {
        return posAtual !== index;
      }),
    });

    PopUp.exibeMensagem("error", "Autor removido com sucesso")

  }

  escutadorDeSubmit = autor => {
    this.setState({ autores:[...this.state.autores, autor] })
    PopUp.exibeMensagem("sucess", "Autor adicionado com sucesso")
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
