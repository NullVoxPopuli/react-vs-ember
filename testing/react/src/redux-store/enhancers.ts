const devtools = window.devToolsExtension ?
  window.devToolsExtension() :
  (f: any) => f;

export default devtools;
