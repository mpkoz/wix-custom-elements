const createDiv4 = (index, dataAddress, network, fallback) => {
  const newDiv = document.createElement('div');
  newDiv.setAttribute("data-widget","m-layout-complete-listing");
  newDiv.setAttribute("data-address",dataAddress);
  newDiv.setAttribute("data-id",index.toString());
  newDiv.setAttribute("data-fallback-provider",fallback);
  newDiv.setAttribute("data-network",network);
  newDiv.setAttribute("data-version","2");
  newDiv.setAttribute("data-bidding-start-text", "Starting Price: ");
  newDiv.setAttribute("data-current-bid-text", "Current Price: ");
  newDiv.setAttribute("data-min-bid-text", "minimum bid");
  //newDiv.setAttribute("data-emit-window-events", "true");
  return newDiv;
};


const createStyle4 = () => {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = `
      .m-expandable-image{
        background: #ffffff !important;
      }
        .m-token-media{
        width: 100%;
        height: auto;
      }

      .m-countdown{
        background: #fff !important;
        margin-top: 10px !important;
      }

      .lazy-image{
        width: 100% !important;
        height: auto !important;
      }

      .lazy-image img{
        max-width: 100% !important;
        width: 100% !important;
        height: auto !important;
        max-height: 200%;
      }

      .m-expandable-image-expanded.show{
        background: #ffffff !important;
      }

      .m-expandable-image>button{
        background: #000000 !important;

      }

      .m-expandable-image>button span{
        line-height: 15px !important;
        font-size: 24px !important;
      }
      .
      .column {
        .m-countdown {
          color: black !important;
        }
      }

      .m-expandable-image-expanded>button{
        background: hsla(0,0%,0%,.5) !important;
      }
    `;
  return styleElement;
};

class ListingFullElement extends HTMLElement {
  constructor() {
    super();
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    this.edition = params.id;
    this.dataAddress = globalDataAddress;
    this.network = globalNetwork;
    this.fallback = globalFallback;
  }

  connectedCallback() {
    this.appendChild(createStyle4());
    this.appendChild(createDiv4(this.edition, this.dataAddress, this.network, this.fallback));
  }
}
customElements.define('listing-full-element',  ListingFullElement);