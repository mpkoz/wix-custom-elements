const createDiv1 = (index, dataAddress, network, fallback) => {
  const newDiv = document.createElement('div');
  newDiv.setAttribute("data-widget","m-catalog-card");
  newDiv.setAttribute("data-address",dataAddress);
  newDiv.setAttribute("data-fallback-provider",fallback);
  newDiv.setAttribute("data-id",index.toString());
  newDiv.setAttribute("data-network",network);
  newDiv.setAttribute("data-version","2");
  newDiv.setAttribute("data-bidding-start-text", "Starting Price: ");
  newDiv.setAttribute("data-min-bid-text", "Minimum bid");
  newDiv.setAttribute("data-current-bid-text", "Current Price: ");
  newDiv.setAttribute("data-emit-window-events", "true");
  newDiv.setAttribute("data-winning-bid-text", "Winning bid: ");
  newDiv.setAttribute("data-no-media", "true");

  return newDiv;
};

const createSelectorDiv1 = (index) => {
  const newDiv = document.createElement('div');
  newDiv.setAttribute("id", index.toString());
  newDiv.setAttribute("class", "selectorDiv");
  return newDiv;
};

const createStyle1 = () => {
  const styleElement = document.createElement('style');
  styleElement.innerHTML = `
    `;
  return styleElement;
};

function waitToInstantiate(listing, delay){
  //if(!listing.hasInstantiated){
    //setTimeout(function (a) {
      //a.listing.element = a;
        // a.listing.element = a.parentNode.parentNode;
        // listingContainer = a.parentNode.parentNode.parentNode;
        // a.appendChild(createStyle1());
        // a.appendChild(createDiv1(a.listing.listingId, a.dataAddress, a.network, a.fallback));
        // a.appendChild(createSelectorDiv1(a.listing.listingId));
        // a.hasInstantiated = true;
    //}, delay, listing);
  //}
}

class ListingElement extends HTMLElement {
  constructor() {
    super();    
    this.listing = listings[0];
    this.dataAddress = globalDataAddress;
    this.network = globalNetwork;
    this.fallback = globalFallback;
    this.hasInstantiated = false;
    //parentNodes.push(this.parentNode);
  }

  setListingTime(nTime){
    this.listing.nTime = nTime;
  }

  static get observedAttributes() {
    return ['ntime', 'listingid', 'sort'];
  }

  connectedCallback() {
      this.listing = listings[currentInstantiationIndex++];
      this.listing.element = this.parentNode.parentNode;
      listingContainer = this.parentNode.parentNode.parentNode;
      this.appendChild(createStyle1());
      this.appendChild(createDiv1(this.listing.listingId, this.dataAddress, this.network, this.fallback));
      this.appendChild(createSelectorDiv1(this.listing.listingId));
      this.hasInstantiated = true;
  }
}

customElements.define('listing-element',  ListingElement);

