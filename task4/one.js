document.domain = 'localhost';

const iframe = document.getElementById('iframe');

class IframeLocalStorageMethods {
  constructor(iframe) {
    this.iframe = iframe;
  }
  getItem(item) {
    console.log(this.iframe.contentWindow.localStorage.getItem(item));
  }
  setItem(item, itemNew) {
    this.iframe.contentWindow.localStorage.setItem(item, itemNew);
    console.log('written');
  }
  removeItem(item) {
    this.iframe.contentWindow.localStorage.removeItem(item);
    console.log('deleted');
  }
}
const iframeLocalStorageMethods = new IframeLocalStorageMethods(iframe);