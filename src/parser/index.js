import { parseHTML } from './html-parser';

function createASTElement(tag, attrs, parent) {
  return {
    type: 1,
    tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    rawAttrsMap: {},
    parent,
    children: []
  };
}

export function parse(template, options) {
  const stack = [];
  let root;
  let currentParent;

  function closeElement(element) {
    if (!stack.length && element !== root) {
      if (currentParent) {
        currentParent.children.push(element);
        element.parent = currentParent;
      }
    }
  }

  parseHTML(template, {
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
      const children = currentParent.children;

    },

    comment(text, start, end) {
      if (currentParent) {
        const child = {
          type: 3,
          text,
          isComment: true
        };
        currentParent.children.push(child);
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