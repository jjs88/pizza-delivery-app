var Button = (function() {

  return class Button extends Element {
    constructor(selector, text, classNames, handlers, data) {
      super('button', {
        text:text,
        classNames:classNames,
        handlers: handlers,
        data:data
      });

      super.appendToContainer(selector);
    }
  }


})()