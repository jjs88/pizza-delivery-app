var Container = (function() {

  return class Container extends Element {
    constructor(selector, text, classNames) {
      super('div', {
        text:text,
        classNames: classNames
      })

      super.appendToContainer(selector);
    }
  }


})();