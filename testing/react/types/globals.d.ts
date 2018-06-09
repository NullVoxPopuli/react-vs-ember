import { Store } from "redux";

export {}; // this file needs to be a module?

declare global {
  interface Window {
    devToolsExtension: any;
    Cypress: any;
    __store__: Store;
  }

  interface Global {
    window: Window;
    document: Document;
    navigator: Navigator;
  }
}
