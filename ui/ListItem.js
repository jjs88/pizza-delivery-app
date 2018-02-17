var ListItem = (function() {

    return class ListItem extends Element {
      constructor(selector, text, classNames, handlers) {
        super('li', {
          text:text,
          classNames:classNames,
          handlers: handlers
        });

        super.appendToContainer(selector);
      }
    }



})()