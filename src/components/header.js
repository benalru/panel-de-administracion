class Header extends HTMLElement {
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

          header{
            align-items: center;
            display: flex;
            justify-content: space-between;
            padding: 0 5%;
          }
        </style>

        <header>
          <slot></slot>
        </header>
        `
    }
  }
  
  customElements.define('header-component', Header)