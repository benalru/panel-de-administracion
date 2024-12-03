class Menu extends HTMLElement {
    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
    }
  
    static get observedAttributes () {}
  
    connectedCallback () {
      this.render()
    }
  
    render () {
      this.shadow.innerHTML =
        /* html */`
        <style>

          *{
            box-sizing: border-box;
          }

          .menu svg{
            fill: white;
            width: 2rem;
            transform-origin: 0px 0px;
          }
        </style>

        <div class="menu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>apps</title><path d="M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z" /></svg>
        </div>
        `
    }
  }
  
  customElements.define('menu-component', Menu)