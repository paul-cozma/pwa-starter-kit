import { PolymerElement, html } from '@polymer/polymer';
import template from './template.html';
import style from './style.styl';
import axios from 'axios'
import '@polymer/paper-button'
class AuthBox extends PolymerElement {
    static get template()  {
         return html([`${template} <style>${style} </style>`])
}
    ready(){
        super.ready()
       // console.log(window.localStorage.token)
        }
    static get properties() { return {
       
    }}
    login(){
        const { username, password } = this.$;
        const body = {
            username: username.value,
            password: password.value
        }
        const url = "http://127.0.0.1/wp-json/jwt-auth/v1/token"
        const options = {
            body:JSON.stringify(body),
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        console.log(options)
       fetch(url, options).then(res => res.json()).then(data => {
        window.localStorage.token = data.token
       }).catch(err => console.log(err))
    }
    
}
window.customElements.define('auth-box', AuthBox);