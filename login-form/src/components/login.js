class Login extends HTMLElement {

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadow.innerHTML =
    /*html*/`
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      .login-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 98vh;
      }

      .login-form h2 {
        text-align: center;
        padding: 0.5rem;
      }

      .input-group {
        display: flex;
        flex-direction: column;
        width: 15%;
        padding: 1rem 0rem;
        gap: 0.7rem;
      }

      .input-group input{
        height: 1.8rem;
      }

      .form-actions {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        width: 15%;
        padding: 1rem 0rem;
      }

      .form-actions button {
        padding: 0.5rem;
        background-color: hsl(7, 51%, 34%);
        border-radius: 0.3rem;
        border: none;
        color: white;
        cursor: pointer;
      }

      .form-actions a {
        text-align: center;
        padding: 0.5rem;
        text-decoration: none;
        color: darkblue;
      }

    </style>

      <form class="login-form">
        <h2 class="login-title">Usuario</h2>

        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email">
        </div>

        <div class="input-group">
          <label for="password">Contraseña</label>
          <input type="password" id="password" name="password">
        </div>

        <div class="form-actions">
          <button type="submit">Enviar</button>
          <a href="#">Olvidé mi contraseña</a>
        </div>
      </form >
    `

    const submitBtn = this.shadow.querySelector('.form-actions button')
    submitBtn.addEventListener("click", () => {
      alert('enviado')
    })
  }
}

customElements.define('login-component', Login);