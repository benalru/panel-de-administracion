class Table extends HTMLElement {
    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
    }
  
    static get observedAttributes () {}
  
    connectedCallback () {
        this.loadData()
        this.render()
    }

    loadData(){
        this.data = [
            {
                category: 'Frutas',
                name: 'peras',
                price: 10
            },
            {
                category: 'Frutas',
                name: 'manzanas',
                price: 5
            },
            {
                category: 'Frutas',
                name: 'platanos',
                price: 7
            }
        ]
    }
  
    render () {
      this.shadow.innerHTML =
        /* html */`
        <style>
            ul{
                list-style: none;
                margin: 0;
                padding: 0;
            }

            .table{
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            .table-header{
                background-color: white;
                
            }

            .table-header-buttons{
                background-color: hsl(0, 0%, 100%);
            }

            .filter-button svg{
                width: 2rem;

            }

            .table-body{
                display: flex;
                flex-direction: column;
                gap: 1rem;
                min-height: 70vh;
            }

            .table-register-header{
                background-color: hsl(0, 0%, 100%);
                display: flex;
                justify-content: flex-end;
                padding: 0.2rem 0.5rem;
            }

            .table-register-header-buttons{
                display: flex;
                align-items: left;
            }

            .edit-button svg{
                width: 2rem;
            }

            .delete-button{
                width: 2rem;
            }

            .table-register-body{
                background-color: hsl(0, 0%, 0%);
                padding: 1rem;
            }

            .table-register-body ul li{
                color: hsl(0, 0%, 100%);
            }

            .table-footer{
                background-color: hsl(0, 0%, 100%);
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 1rem;
            }

            .table-footer-pagination{
                display: flex;
                justify-content: space-between;
            }

            .table-footer-pagination span{
                text-align: center;
            }

            .table-footer-pagination-button{
                width: 2rem;
                display: flex;
                align-items: center;
            }

            .table-footer-pagination-current-page{
                align-items: center;
                display: flex;
                justify-content: center;
                width: 2rem;
            }      
        </style>

        <section class="table">
            <div class="table-header">
                <div class="table-header-buttons">
                    <div class="filter-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>filter-menu</title><path d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z" /></svg>
                    </div>
                </div>
            </div>
            <div class="table-body"></div>
            <div class="table-footer">
                <div class="table-footer-information"><p>2 registros en total, mostrando 10 por página</p></div>
                <div class="table-footer-pagination">
                    <div class="table-footer-pagination-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-double-left</title><path d="M18.41,7.41L17,6L11,12L17,18L18.41,16.59L13.83,12L18.41,7.41M12.41,7.41L11,6L5,12L11,18L12.41,16.59L7.83,12L12.41,7.41Z" /></svg></div>
                    <div class="table-footer-pagination-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-left</title><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" /></svg></div>
                    <div class="table-footer-pagination-current-page">
                        <h2>1</h2>
                    </div>
                    <div class="table-footer-pagination-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-right</title><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg></div>
                    <div class="table-footer-pagination-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-double-right</title><path d="M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z" /></svg></div>
                </div>
            </div>
        </section>
        `

        const tableBody = this.shadow.querySelector('.table-body')

        this.data.forEach(element => {

            const tableRegister = document.createElement('div')
            tableRegister.classList.add('table-register')
            tableBody.appendChild(tableRegister)
    
            const tableRegisterHeader = document.createElement('div')
            tableRegisterHeader.classList.add('table-register-header')
            tableRegister.appendChild(tableRegisterHeader)
    
            const tableRegisterHeaderButtons = document.createElement('div')
            tableRegisterHeaderButtons.classList.add('table-register-header-buttons')
            tableRegisterHeader.appendChild(tableRegisterHeaderButtons)
    
            const tableRegisterEdit = document.createElement('div')
            tableRegisterEdit.classList.add('edit-button')
            tableRegisterEdit.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil-outline</title><path d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" /></svg>'
            tableRegisterHeaderButtons.appendChild(tableRegisterEdit)
    
            const tableRegisterDelete = document.createElement('div')
            tableRegisterDelete.classList.add('delete-button')
            tableRegisterDelete.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>'
            tableRegisterHeaderButtons.appendChild(tableRegisterDelete)
    
            const tableRegisterBody = document.createElement('div')
            tableRegisterBody.classList.add('table-register-body')
            tableRegister.appendChild(tableRegisterBody)
    
            const tableRegisterList = document.createElement('ul')
            tableRegisterList.classList.add('table-register-list')
            tableRegisterBody.appendChild(tableRegisterList)
    
            const liCategory = document.createElement('li')
            liCategory.textContent = `Categoría: ${element.category}`
            tableRegisterList.appendChild(liCategory)
    
            const liName = document.createElement('li')
            liName.textContent = `Nombre: ${element.name}`
            tableRegisterList.appendChild(liName)
    
            const liPrice = document.createElement('li')
            liPrice.textContent = `Precio: ${element.price}`
            tableRegisterList.appendChild(liPrice)
        })
    }
  }
  
  customElements.define('table-component', Table)