import { parseHTML } from './html-parser';

function createASTElement(tag, attrs, parent) {
  return {
    type: 'node',
    name: tag,
    attrs: makeAttrsMap(attrs),
    // parent,
    children: []
  };
}

export function parse(template, options) {
  const stack = [];
  let root;
  let currentParent;

  function trimHTML(template) {
    return template
      .replace(/\r?\n+/g, '')
      .replace(/\/\*.*?\*\//ig, '')
      .replace(/&nbsp;/g, '\xa0')
      .replace(/[ ]+</ig, '<');
  }

  function closeElement(element) {
    if (currentParent) {
      currentParent.children.push(element);
      // element.parent = currentParent;
    }
  }

  parseHTML(trimHTML(template), {
    start(tag, attrs, unary, start, end) {
      let element = createASTElement(tag, attrs, currentParent);
      if (!root) {
        root = element;
      }

      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end(tag, start, end) {
      const element = stack[stack.length - 1];
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars(text, start, end) {
      if (!currentParent) {
        if ((text = text.trim())) {
          console.warn(`text "${text}" outside root element will be ignored.`);
        }
        return;
      }

      const children = currentParent.children;
      let child;

      if (text && text !== ' ') {
        child = {
          type: 'text',
          text
        };
      } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
        child = {
          type: 3,
          text
        };
      }

      if (child) {
        children.push(child);
      }

    }
  });

  return root;
}

function makeAttrsMap(attrs) {
  const map = {};
  for (let i = 0, l = attrs.length; i < l; i++) {
    if (map[attrs[i].name]) {
      console.warn(`duplicate attribute: ` + attrs[i].name, attrs[i]);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map;
}