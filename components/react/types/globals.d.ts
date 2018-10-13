
export {}; // this file needs to be a module?

declare global {
  interface Window {
  }

  interface Global {
    window: Window;
    document: Document;
    navigator: Navigator;
  }
}
