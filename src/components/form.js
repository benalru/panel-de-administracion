class Form extends HTMLElement {
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
            form{
                display: grid;
                grid-template-columns: 5, 2;
                padding: 2rem;
            }

            ul{
                list-style: none;
                margin: 0;
                padding: 0;
            }

            .form-header{
                background-color: hsl(0, 0%, 100%);
                display: flex;
                justify-content: space-between;
                height: 2.2rem;
            }

            .form-header-tabs{
                align-items: center;
                display: flex;
                height: 100%;
            }

            .form-header-tabs ul{
                display: flex;
                height: 100%;
            }

            .form-header-tabs ul li{
                align-items: center;
                background-color: rgb(3, 56, 124);
                color: hsl(0, 0%, 100%);
                display: flex;
                padding: 0 0.5rem;
            }

            .form-header-tabs ul li.activate{
                background-color: hsl(271, 76%, 53%);
            }

            .form-header-buttons{
                display: flex;
                padding: 0 0.5rem;
            }

            .form-header-buttons svg{
                width: 2rem;
            }

            .clear-button{

            }

            .save-button{

            }

            .form-body form{
                display: grid;
                gap: 1rem;
                grid-template-columns: repeat(4, 1fr);
                padding: 1rem 0;
            }

            .form-element{
                display: flex;
                flex-direction: column;
                gap: 1rem;
                width: 100%;
            }
            
            .form-element-label label{
                color: hsl(0, 0%, 100%);
            }

            .form-element-input > *{
                padding: 0.2rem;
                width: 100%;
            }
        </style>

        <section class="form">
            <div class="form-header">
                <div class="form-header-tabs">
                    <ul>
                        <li class="activate">General</li>
                        <li>Imagenes</li>
                    </ul>
                </div>
                <div class="form-header-buttons">
                    <div class="clear-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>broom</title><path d="M19.36,2.72L20.78,4.14L15.06,9.85C16.13,11.39 16.28,13.24 15.38,14.44L9.06,8.12C10.26,7.22 12.11,7.37 13.65,8.44L19.36,2.72M5.93,17.57C3.92,15.56 2.69,13.16 2.35,10.92L7.23,8.83L14.67,16.27L12.58,21.15C10.34,20.81 7.94,19.58 5.93,17.57Z" /></svg></div>
                    <div class="save-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>content-save</title><path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg></div>
                </div>
            </div>
            <div class="form-body">
                <form>
                    <div class="form-element">
                        <div class="form-element-label">
                            <label>Categoría</label>    
                        </div>
                        <div class="form-element-input">
                            <select name="select">
                                <option value="value1" selected>Agua</option>
                                <option value="value2">Fruta</option>
                                <option value="value3">Verdura</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-element">
                        <div class="form-element-label">
                            <label>Nombre</label>
                        </div>
                        <div class="form-element-input">
                            <input type="text" value="" />
                        </div>
                    </div>
                    <div class="form-element">
                        <div class="form-element-label">
                            <label>Referencia</label>
                        </div>
                        <div class="form-element-input">
                            <input type="text" value="" />
                        </div>
                    </div>
                    <div class="form-element">
                        <div class="form-element-label">
                            <label>Precio</label>
                        </div>
                        <div class="form-element-input">
                            <input type="number" value="" />
                        </div>
                    </div>
                    <div class="form-element">
                        <div class="form-element-label">
                            <label>Unidades</label>
                        </div>
                        <div class="form-element-input">
                            <input type="number" value="" />
                        </div>
                    </div>
                    <div class="form-element">
                        <div class="form-element-label">
                            <label>Unidad de medida</label>
                        </div>
                        <div class="form-element-input">
                            <select name="select">
                                <option value="value1" selected>gr</option>
                                <option value="value2">kg</option>
                                <option value="value3">ml</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-element">
                        <div class="form-element-label">
                            <label>Medida</label>
                        </div>
                        <div class="form-element-input">
                            <input type="number" value="" />
                        </div>
                    </div>
                    <div class="form-element">
                        <div class="form-element-label">
                            <label>Visible</label>
                        </div>
                        <div class="form-element-input">
                            <select name="select">
                                <option value="value1" selected>Sí</option>
                                <option value="value2">No</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </section>
        `
    }
  }
  
  customElements.define('form-component', Form)