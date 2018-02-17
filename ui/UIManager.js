var UIManager = (function() {

  return class UIManager {

    addTitle(selector, tag, text, classNames) {
      new Title(selector, tag, text, classNames);
    }

    addListItem(selector, text, classNames, handlers) {
      new ListItem(selector, text, classNames, handlers);
    }

    addButton(selector, text, classNames, handlers, data) {
      new Button(selector, text, classNames, handlers, data);
    }

    addContainer(selector, text, classNames, handlers, data) {
      return new Container(selector, text, classNames);
    }

    addOrderItem() {
      return new Container(selector, text, classNames);
    }

    removeButton(selector) {
      document.querySelector(selector).parentNode.removeChild(document.querySelector(selector));
    }
  }




})();