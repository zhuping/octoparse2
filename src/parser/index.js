import { parseHTML } from './html-parser';

export function parse(template) {
  const stack = [];
  let root = {
    node: 'root',
    children: []
  };

  function trimHTML(template) {
    return template
      .replace(/\r?\n+/g, '')
      .replace(/\/\*.*?\*\//ig, '')
      .replace(/&nbsp;/g, '\xa0')
      .replace(/[ ]+</ig, '<');
  }

  parseHTML(trimHTML(template), {
    start(tag, attrs = [], unary/*, start, end*/) {
      let element = {
        type: 'node',
        name: tag
      };

      element.attrs = makeAttrsMap(attrs);
      element.attrs['style'] = `margin:0;padding:0;${( element.attrs['style'] || '' )}`;

      if (tag === 'img') {
        element.attrs['style'] = `max-width:100%;height:auto;vertical-align:top;${( element.attrs['style'] || '' )}`;
      }

      if (unary) {
        let parent = stack[0] || root;
        if (parent.children === undefined) {
          parent.children = [];
        }
        parent.children.push(element);
      } else {
        stack.unshift(element);
      }
    },

    end(tag/*, start, end*/) {
      let element = stack.shift();
      if (element.name !== tag) {
        console.warn(`invalid state: mismatch end tag.`);
      }

      if (stack.length === 0) {
        root.children.push(element);
      } else {
        let parent = stack[0];
        if (parent.children === undefined) {
          parent.children = [];
        }
        parent.children.push(element);
      }
    },

    chars(text/*, start, end*/) {
      let child = {
        type: 'text',
        text
      };
      if (stack.length === 0) {
        root.children.push(child);
      } else {
        let parent = stack[0];
        if (parent.children === undefined) {
          parent.children = [];
        }
        parent.children.push(child);
      }
    }
  });

  return root.children;
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