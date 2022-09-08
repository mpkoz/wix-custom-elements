const createDiv = (dataAddress, network, fallback) => {
  const newDiv = document.createElement('div');
  newDiv.setAttribute("data-widget","m-multi-wallet-connect");
  newDiv.setAttribute("data-delay-auth", "true");
  newDiv.setAttribute("data-network", network);
  newDiv.setAttribute("data-fallback-provider", fallback);
  return newDiv;
};


const createStyle = () => {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = `
      #m-connection{
        align-content: center;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        height: 100%;
        display: flex;
      }

      @media screen and (min-width: 751px) {
        #m-connection{
          font-size: 12px;
        }
      }
      @media screen and (max-width: 750px) {
        #m-connection{
          font-size: 10px;
        }
      }
    `;
  return styleElement;
};

class ConnectWalletElement extends HTMLElement {
  constructor() {
    super();
    this.dataAddress = globalDataAddress;
    this.network = globalNetwork;
    this.fallback = globalFallback;
  }

  connectedCallback() {
    this.appendChild(createStyle());
    this.appendChild(createDiv(this.dataAddress, this.network, this.fallback));
  }

}
customElements.define('connect-wallet-element',  ConnectWalletElement);