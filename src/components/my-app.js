/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { PolymerElement, html } from '@polymer/polymer';
import '@polymer/paper-toast'
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';

import { menuIcon } from './my-icons.js';
import './snack-bar.js';
import '@polymer/iron-pages/iron-pages.js';

import { connect } from 'pwa-helpers/connect-mixin.js';
import { installRouter } from 'pwa-helpers/router.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';
import '@polymer/app-route/app-route.js';
import '@polymer/app-route/app-location.js';
import { store } from '../store.js';
import { navigate, updateOffline, updateDrawerState, updateLayout, setProductId } from '../actions/app.js';

class MyApp extends connect(store)(PolymerElement) {
  static get template() {
    // Anything that's related to rendering should be done in here.
    return html`
    <style>
      :host {
        --app-drawer-width: 256px;
        display: block;

        --app-primary-color: #E91E63;
        --app-secondary-color: #293237;
        --app-dark-text-color: var(--app-secondary-color);
        --app-light-text-color: white;
        --app-section-even-color: #f7f7f7;
        --app-section-odd-color: white;

        --app-header-background-color: white;
        --app-header-text-color: var(--app-dark-text-color);
        --app-header-selected-color: var(--app-primary-color);

        --app-drawer-background-color: var(--app-secondary-color);
        --app-drawer-text-color: var(--app-light-text-color);
        --app-drawer-selected-color: #78909C;
      }

      app-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        text-align: center;
        background-color: var(--app-header-background-color);
        color: var(--app-header-text-color);
        border-bottom: 1px solid #eee;
      }

      .toolbar-top {
        background-color: #212121;
      }

      [main-title] {
        font-family: 'Pacifico';
        text-transform: lowercase;
        font-size: 30px;
        /* In the narrow layout, the toolbar is offset by the width of the
        drawer button, and the text looks not centered. Add a padding to
        match that button */
        padding-right: 44px;
      }

      .toolbar-list {
        display: none;
      }

      // .toolbar-list > a {
      //   display: inline-block;
      //   color: var(--app-header-text-color);
      //   text-decoration: none;
      //   line-height: 30px;
      //   padding: 4px 24px;
      // }

      // .toolbar-list > a[selected] {
      //   color: var(--app-header-selected-color);
      //   border-bottom: 4px solid var(--app-header-selected-color);
      // }

      .menu-btn {
        background: none;
        border: none;
        fill: var(--app-header-text-color);
        cursor: pointer;
        height: 44px;
        width: 44px;
        display: none;
      }

      .drawer-list {
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 24px;
        background: var(--app-drawer-background-color);
        position: relative;
      }

      .drawer-list > a {
        display: block;
        text-decoration: none;
        color: var(--app-drawer-text-color);
        line-height: 40px;
        padding: 0 24px;
      }

      .drawer-list > a[selected] {
        color: var(--app-drawer-selected-color);
      }

      .main-content {
        padding-top: 64px;
        min-height: 100vh;
      }

      .page {
        display: none;
      }

      .page[active] {
        display: block;
      }

      footer {
        padding: 24px;
        background: var(--app-drawer-background-color);
        color: var(--app-drawer-text-color);
        text-align: center;
      }

      /* Wide layout: when the viewport width is bigger than 460px, layout
      changes to a wide layout. */
      @media (min-width: 460px) {
        .toolbar-list {
          display: block;
        }

        .menu-btn {
          display: none;
          background: red;
        }

        .main-content {
        }

        /* The drawer button isn't shown in the wide layout, so we don't
        need to offset the title */
        .main-title {
          padding-right: 0px;
        }
      }
      app-header{
        z-index: 120
      }
      .main-title img{
        width: 40px;
      }
      .main-title{
        display: flex;
        flex-flow: wrap row;
        align-items: center;
        justify-content: center;
        width: 100%;
      }
      app-drawer{
        z-index: 123
      }
      footer{
  width: 100%;
  background: #212121;
  padding: 20px;
  box-sizing: border-box;
}
footer  .wrapper {
  color:#fff;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  max-width: 800px;
  width: 100%;
  margin:0 auto;
  font-family: "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 14px;
  box-sizing: border-box;

}
footer a{
  color:#fff;
  text-decoration: none;
}
.fadeOutDown {
    -webkit-animation: fadeOutDown 500ms ease-in-out; /* Chrome, Safari, Opera */
    animation: fadeOutDown 500ms ease-in-out;
    animation-fill-mode: forwards;
}

/* Chrome, Safari, Opera */
@-webkit-keyframes fadeOutDown {
    0% {
        opacity: 1;
        -webkit-transform: translateY(0);
    }
    100% {
        opacity: 0;
        -webkit-transform: translateY(-40px);
    }
}

/* Standard syntax */
@keyframes fadeOutDown {
    0% {
        opacity: 1;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(-40px);
    }
}
.fadeinDown {
    -webkit-animation: fadeInDown 500ms ease-in-out; /* Chrome, Safari, Opera */
    animation: fadeInDown 500ms ease-in-out;
    animation-fill-mode: forwards;
}

/* Chrome, Safari, Opera */
@-webkit-keyframes fadeInDown {
    0% {
        opacity: 0;
        -webkit-transform: translateY(-40px);
    }
    100% {
        opacity: 1;
        -webkit-transform: translateY(0);
    }
}

/* Standard syntax */
@keyframes fadeInDown {
    0% {
        opacity: 0;
        transform: translateY(-40px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

    </style>

    <app-location route="{{route}}"></app-location>
    <app-route 
      route="{{route}}" 
      pattern="/:page" 
      data="{{routeData}}" 
      tail="{{tail}}">
    </app-route>
    <app-route 
    route="{{route}}" 
    pattern="/blog/:year/:month/:day/:slug" 
    data="{{blogData}}">
    </app-route>

    <app-route 
    route="{{route}}" 
    pattern="/autor/:name" 
    data="{{autorData}}">
    </app-route>

    <app-route 
    route="{{route}}" 
    pattern="/tag/:name" 
    data="{{tagData}}">
    </app-route>

    <!-- Header -->
    <app-header condenses reveals effects="waterfall">
      <app-toolbar class="toolbar-top">
        <div class="main-title"> <a href="/"><img src="/images/DDD-1.png" alt=""></a> </div>
      </app-toolbar>

      <!-- This gets hidden on a small screen-->
      <nav class="toolbar-list">
        
      </nav>
    </app-header>
    <!-- Drawer content -->
    <app-drawer opened="{{_drawerOpened}}">
      <nav class="drawer-list">
        
      </nav>
    </app-drawer>
    <!-- Main content -->
    <iron-pages class="main-content" selected="[[page]]" class="menu" attr-for-selected="nume">
      <my-home nume="acasa" ></my-home>
      <main-blog nume="blog" slug="{{blogData.slug}}" ></main-blog>
      <main-autor nume="autor" autor="{{autorData.name}}" ></main-autor>
      <main-login nume="login" ></main-login>
      <main-tag nume="tag" tag="{{tagData.name}}" ></main-tag>
      <main-termeni-si-conditii nume="termeni-si-conditii" ></main-termeni-si-conditii>
    </iron-pages>

    <footer>
    <div class="wrapper">
      <div>Soulmatters © 2012 - 2020</div>
      <div> <a href="/termeni-si-conditii">Termeni și condiții</a> </div>
    </div>
    </footer>
    <paper-toast  id="toast" text="Bun venit!"></paper-toast>
  
    `;
  }

  static get properties() {
    return {
      appTitle: String,
      page: {
        type: String,
        notify: true,
        observer: '_pageChanged'
      },
      _drawerOpened: Boolean,
      _snackbarOpened: Boolean,
      _offline: {
        type: Boolean,
        value: false,
        observer: '_offlineChanged'
      },
      blogData: String,
      route: String,
      routeData: String
    }
  }
  _offlineChanged(status, old){
    if(status){
      this.$.toast.text = 'Acum sunteți offline'
    }else if(old){
      this.$.toast.text = 'Acum sunteți online'

    }
    this.$.toast.open()
  }
  static get observers() {
    return [
      '_routePageChanged(routeData.page)',
    ];
  }
  _routePageChanged(page) {   
    this.page = page || 'acasa';
   
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
_pageChanged(page, old){
  this.shadowRoot.querySelector(`[nume=${old || 'acasa'}]`).classList.add('fadeinUp')
  this.shadowRoot.querySelector(`[nume=${page || 'acasa'}]`).classList.add('fadeinDown')
  switch (page) {
      case 'acasa':
          return import('./my-home')
          break;
      case 'blog':
          return import('./main-blog')
          break;
      case 'autor':
          return import('./main-autor')
          break;
      case 'tag':
          return import('./main-tag')
          break;
      case 'login':
          return import('./main-login')
          break;
      case 'termeni-si-conditii':
          return import('./main-termeni-si-conditii')
          break;
  }
}
  constructor() {
    super();
    // To force all event listeners for gestures to be passive.
    // See https://www.polymer-project.org/2.0/docs/devguide/gesture-events#use-passive-gesture-listeners
    setPassiveTouchGestures(true);
    installOfflineWatcher((offline) => store.dispatch(updateOffline(offline)));
  }

  _firstRendered() {
    installRouter((location) => {
      const blog = location.pathname.indexOf("/", 1) !== -1 ? location.pathname.replace(/\//, '').replace(/\//g, '-') : location.pathname
      var path = location.pathname.indexOf("/", 1) !== -1 ? '/blog' : location.pathname
    if (isNaN(parseInt(location.pathname.split('/')[1]))){
      path = '/'+ location.pathname.split('/')[1]
    }
    store.dispatch(navigate(window.decodeURIComponent(path)))
    });
    installOfflineWatcher((offline) => store.dispatch(updateOffline(offline)));
    installMediaQueryWatcher(`(min-width: 460px)`,
        (matches) => store.dispatch(updateLayout(matches)));
  }

  _didRender(properties, changeList) {
    if ('_page' in changeList) {
      const pageTitle = properties.appTitle + ' - ' + changeList._page;
     
    }
  }

  _stateChanged(state) {
    this._offline = state.app.offline;
    this._snackbarOpened = state.app.snackbarOpened;
    this._drawerOpened = state.app.drawerOpened;
  }
}

window.customElements.define('my-app', MyApp);
