import { PolymerElement, html } from '@polymer/polymer';
import axios from 'axios';
import template from './template.html';
import style from './style.styl';
import moment from 'moment';
import '@polymer/paper-button';
import 'moment/locale/ro'
import '@polymer/paper-toast/paper-toast'
class CommentBox extends PolymerElement {
    static get template()  {
         return html([`${template} <style>${style} </style>`])
}
    ready(){
        super.ready()
 
        }
    static get properties() { return {
        comments: {
         type: Array,
         value: () => [],
         observer: 'changed'
        },
        post: Number

    }}
    date(date){
        return moment(date).startOf('minute').fromNow()
    }
    changed(data){
        console.log(data)
    }
 async   getComments(){
        const blog = await fetch(`http://127.0.0.1/wp-json/wp/v2/comments/${post}`).then(data => data.json())
        console.log(blog)
        this.article = blog[0]

      console.log(post, 'fsdoapsdop')
    }
    sendComment(){
        const url = `http://127.0.0.1/wp-json/wp/v2/comments`;

        const {mesaj, name, website, email} = this.$
        const body = {
            author_name: name.value,
            author_email: email.value,
            author_url: website.value,
            content: mesaj.value,
            date:moment().format(),
            post: this.post

        }
        const snack = this.shadowRoot.querySelector('paper-toast')
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(body)
        }).then(res => res.json()).then(data => {
            console.log(data)
            if(data.code === 'rest_comment_content_invalid' ){
                snack.text = data.message
                snack.open()
            }else if( data.code  === 'rest_invalid_param'){
                snack.text = 'Adresa de email este invalidă!'
                snack.open()
            }else if(data.status === 'hold'){
                snack.text = 'Comentariul tău este în așteptare pentru a fi aprobat!'
                snack.open()
                name.value = '';
                email.value = '';
                website.value = '';
                mesaj.value = '';
            }else if(data.status === 'approved'){
                snack.text = 'Comentariul tău este publicat!'
                snack.open()
                name.value = '';
                email.value = '';
                website.value = '';
                mesaj.value = '';
                this.dispatchEvent(new CustomEvent('comment-approved', { bubbles: true, composed: true }));
                
            }

        }).catch(err => {
            console.log(err)
            snack.text = err.message
            snack.open()
        })
        console.log(body)
    }
    count(counter){
        return counter.length  
    }
}
window.customElements.define('comment-box', CommentBox);