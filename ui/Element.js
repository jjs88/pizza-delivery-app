var Element = (function() {

  return class Element {
    constructor(tagName, options) {
      this.element = document.createElement(tagName);
      if(options) {
        if(options.text) this.element.textContent = options.text;
        if(options.classNames) options.classNames.split(' ').forEach(cls => this.element.classList.add(cls));
        if(options.handlers) options.handlers.forEach(item => this.element.addEventListener(item.name, item.handler));
        // console.log(options.data);
        if(options.data) this.element.setAttribute(`data-${options.data.name}`,options.data.link);
      }
    }

    appendToContainer(container) {
      container.appendChild(this.element);
    }

    setHTML(template) {
      this.element.innerHTML = template;
    }
  }



})();