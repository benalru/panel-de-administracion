class Title extends HTMLElement {
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
          
          .title h1{
            color: hsl(0, 0%, 100%);
            font-size: 2rem;
            margin: 0;
          }

        </style>

        <div class="title">
          <h1>Pedidos</h1>
        </div>
        `
    }
  }
  
  customElements.define('title-component', Title)