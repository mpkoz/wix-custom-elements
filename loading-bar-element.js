const createDiv5 = () => {
  const newDiv = document.createElement('div');
    newDiv.setAttribute("id", "loadingBar");
  return newDiv;
};


const createCanvas5= () => {
  const canvas = document.createElement('canvas');
  canvas.setAttribute("id", "loadingBarCanvas");
  canvas.width = 1200;
  canvas.height = 20;
  return canvas;
};
                
const createSelectorDiv5 = (id) => {
  const newDiv = document.createElement('div');
  newDiv.setAttribute("id", id);
  newDiv.setAttribute("class", "selectorDiv");
  return newDiv;
};

const createStyle5 = () => {
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
    this.appendChild(createStyle5());
    this.appendChild(createCanvas5());
    this.appendChild(createSelectorDiv5("canvasSelector"));
    //this.appendChild(createDiv());
    loadingBar();
  }

}
customElements.define('loading-bar-element',  LoadingBarElement);