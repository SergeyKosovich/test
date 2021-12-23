document.domain = 'localhost';

const iframe = document.getElementById('iframe');

class IframeLocalStorageMethods {
  constructor(iframe) {
    this.iframe = iframe;
  }
  getItem(item, callback = null) {
    console.log(this.iframe.contentWindow.localStorage.getItem(item));
    if (callback) {
      callback();
    }
  }
  setItem(item, itemNew, callback = null) {
    this.iframe.contentWindow.localStorage.setItem(item, itemNew);
    console.log('written');
    if (callback) {
      callback();
    }
  }
  removeItem(item, callback = null) {
    this.iframe.contentWindow.localStorage.removeItem(item);
    console.log('deleted');
    if (callback) {
      callback();
    }
  }
}
const iframeLocalStorageMethods = new IframeLocalStorageMethods(iframe);
