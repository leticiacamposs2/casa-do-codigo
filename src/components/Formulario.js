import React, { Component } from 'react';
import FormValidator from '../utils/FormValidator';
import PopUp from '../utils/PopUp'

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.validador = new FormValidator([
            {
                campo: 'nome',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com um nome'
            },
            {
                campo: 'livro',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com um livro'
            },
            {
                campo: 'preco',
                metodo: 'isInt',
                args: [{ min: 0, max: 99999 }],
                validoQuando: true,
                mensagem: 'Entre com um valor numérico'
            }
        ]);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
            validacao: this.validador.valido(),
        }
        
        this.state = this.stateInicial;
    }

    escutadorDeInput = event => {

        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    submitFormulario = () => {

        const validacao = this.validador.valida(this.state);

        if (validacao.isValid) {
            this.props.escutadorDeSubmit(this.state);
            this.setState(this.stateInicial);
        } else {
            const { nome, livro, preco } = validacao;
            const campos = [nome, livro, preco];

            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid;
            });
            camposInvalidos.forEach(campo => {
                PopUp.exibeMensagem('error', campo.message);
            });
        }
    }

    render() {

        const { nome, livro, preco } = this.state;

        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="nome">Nome</label>
                        <input 
                            className="validade"
                            id="nome"
                            type="text"
                            name="nome"
                            vale={nome}
                            onChange={this.escutadorDeInput}
                        />
                    </div>

                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="livro">Livro</label>
                        <input 
                            className="validade"
                            id="livro"
                            type="text"
                            name="livro"
                            value={livro}
                            onChange={this.escutadorDeInput} 
                        />
                    </div>

                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="preco">Preço</label>
                        <input 
                            className="validade"
                            id="preco"
                            type="text"
                            name="preco"
                            value={preco}
                            onChange={this.escutadorDeInput} 
                        />
                    </div>
                </div>
                <button onClick={this.submitFormulario} type="button" className="waves-effect waves-light indigo lighten-2 btn">Salvar</button>
            </form>
        );
    }
}

export default Formulario;