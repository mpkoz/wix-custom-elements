const createDiv = () => {
  const newDiv = document.createElement('div');
    newDiv.setAttribute("id", "loadingBar");
  return newDiv;
};

const createCanvas= () => {
  const canvas = document.createElement('canvas');
  canvas.setAttribute("id", "loadingBarCanvas");
  canvas.width = 1200;
  canvas.height = 20;
  return canvas;
};
                
const createSelectorDiv = (id) => {
  const newDiv = document.createElement('div');
  newDiv.setAttribute("id", id);
  newDiv.setAttribute("class", "selectorDiv");
  return newDiv;
};

const createStyle = () => {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = `

      .selectorDiv {
        width: 0px;
        height: 0px;
      }

      #loadingBarCanvas{
        width: calc(100% - 1px);
        height: calc(100% - 1px);
        position: absolute;
        top: 0;
        left: 0;
        opacity: 1;
      }
    `;
  return styleElement;
};

class LoadingBarElement extends HTMLElement {
  constructor() {
    super();

  }

  connectedCallback() {
    this.appendChild(createStyle());
    this.appendChild(createCanvas());
    this.appendChild(createSelectorDiv("canvasSelector"));
    //this.appendChild(createDiv());
    loadingBar();
  }

}
customElements.define('loading-bar-element',  LoadingBarElement);