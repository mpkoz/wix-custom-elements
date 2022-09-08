const createDiv3 = (index) => {
  const newDiv = document.createElement('div');
  newDiv.style.setProperty('width', '0px');
  newDiv.style.setProperty('height', '0px');
  newDiv.style.setProperty('display', 'none');
  newDiv.style.opacity = "0";

  return newDiv;
};

const createStyle3 = () => {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = `

    `;
  return styleElement;
};

class SortElement extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['sort'];
  }

  attributeChangedCallback(name, oldValue, newValue) {   
    if(name == "sort"){
        if(newValue == 'edition'){
            sortListings(0);
        } else if (newValue == 'timeleft'){
            sortListings(1);
        } else if (newValue == 'color') {
            sortListings(2);
        }

    }
  }

  connectedCallback() {
    this.appendChild(createDiv3());
  }

}
customElements.define('sort-element',  SortElement);

