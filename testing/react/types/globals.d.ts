export {}; // this file needs to be a module?

declare global {
  interface Window {
    devToolsExtension: any
  }

  interface Global {
    window: Window;
    document: Document;
    navigator: Navigator;
  }
}
