var Title = (function() {

  return class Title extends Element {
    constructor(selector, tag, text, classNames) {
      super(tag, {
        text: text,
        classNames: classNames
      })
      super.appendToContainer(selector)
    }
  }



})();