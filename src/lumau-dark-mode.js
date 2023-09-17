import { LitElement, html, css } from 'lit-element';

export class LumauDarkMode extends LitElement {
  constructor() {
    super();
    this._theme = null;
  }
  static properties = {
    _theme: { type: String },
  };
  static get styles() {
    return css`
      .btn {
        display: inline-flex;
        background: none;
        border: none;
        padding: 8px;
        border-radius: 50%;
      }
      .btn:hover {
        cursor: pointer;
        background-color: var(--lumau-dark-mode-bg-hover-color, #808080);
      }
      svg {
        fill: var(--lumau-dark-mode-color, #000);
      }
      .btn:hover > svg {
        fill: var(--lumau-dark-mode-hover-color, #000);
      }
    `;
  }

  render() {
    return html`
      <div
        class="btn"
        @click="${this.handleMode}"
      >
        ${
          this._theme === 'dark'
            ? html`
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-brightness-high"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
                  />
                </svg>
              `
            : html`
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-brightness-high-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
                  />
                </svg>
              `
        }
      </button>
    `;
  }

  handleMode() {
    console.log('CLICK');
    if (this._theme === 'dark') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      this._theme = 'light';
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      this._theme = 'dark';
      localStorage.setItem('theme', 'dark');
    }
  }

  firstUpdated() {
    const theme = localStorage.getItem('theme');
    console.log('localstorage theme', theme);
    if (!theme) {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        document.documentElement.classList.add('dark');
        this._theme = 'dark';
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.add('light');
        this._theme = 'light';
        localStorage.setItem('theme', 'light');
      }
    } else {
      document.documentElement.classList.add(theme);
      this._theme = theme;
    }
  }
}
customElements.define('lumau-dark-mode', LumauDarkMode);
