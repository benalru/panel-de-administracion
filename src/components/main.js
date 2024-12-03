class Main extends HTMLElement {
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

          main{
            display: grid;
            grid-template-columns: 2fr 4fr;
            gap: 3rem;
          }
        </style>
        
        <main>
          <slot></slot>
        </main>
      `
    }
  }
  
  customElements.define('main-component', Main)