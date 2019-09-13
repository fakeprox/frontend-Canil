import React, { Component } from 'react';
import './style.css';
export default class Login extends Component {

    render() {
        return (
            <div className="login-page">
                <article>

                    <p>Bem vindo, faça o login</p>
                    <input type="email" placeholder="E-mail"></input>
                    <input type="password" placeholder="Senha"></input>
                    <a>Esqueceu a senha?</a>
                <div className="actions">  
                    <button id="login">Entrar</button>             
                    <button id="create-account">Criar Conta</button>
                    
                </div>
                </article>
               
            </div>
        )

    }
}