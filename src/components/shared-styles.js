/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
export const SharedStyles = html`
<style>
@import "@material/fab/mdc-fab";

  :host {
    display: block;
    box-sizing: border-box;
  }

  section {
    padding: 24px;
    background: var(--app-section-odd-color);
  }

  section > * {
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
  }

  section:nth-of-type(even) {
    background: var(--app-section-even-color);
  }

  h2 {
    font-size: 24px;
    text-align: center;
    color: var(--app-dark-text-color);
  }

  @media (min-width: 460px) {
    h2 {
      font-size: 36px;
    }
  }

  .circle {
    display: block;
    width: 64px;
    height: 64px;
    margin: 0 auto;
    text-align: center;
    border-radius: 50%;
    background: var(--app-primary-color);
    color: var(--app-light-text-color);
    font-size: 30px;
    line-height: 64px;
  }
  .wrapper{
        max-width: 1200px;
        width: 100%;
        margin: 20px auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, 300px);
        justify-content: center;
        grid-gap: 30px;
    }
    
   iron-image{
       width:100%;
       height: 250px;
   }
    .item{
        max-width: 100%;
        @apply --shadow-elevation-2dp;
        box-sizing: border-box;
        background: #fff;
        border-radius: 8px;
        
    }
    
    .item:nth-child(4n+1){
        grid-column: span 2
    }
    .item:nth-child(6n+1){
        grid-column: span 3
    }
    
    .item:first-child{
        grid-column: span 3
    }
    h3{
        font-size: 19px;
        font-weight: 400;
        color:#212121;
    }
    a{
        text-decoration: none;
        
    }
    p{
        font-size: 16px;
        font-weight: 300;
    }
    .meta{
        padding: 20px;
    }
    .header{
        height: 550px;
        width:100%;
        margin-top: -60px;
        display: flex;
        flex-flow: wrap column;
        justify-content: center;
        align-items: center;

    }
    h1{
        font-family:  "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        font-size: 42px;
        font-weight: 300;
        color:#fff;
        text-shadow: 0 2px 4px #212112;
        text-align: center;
        
    }
    .container{
        width:100vw;
    }
    .logo img{
        width: 120px;
    }
</style>
`;
