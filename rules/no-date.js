'use strict';

module.exports = {
  meta: {
    docs: {},
  },
  create(context) {
    return {
      Identifier(node) {
        if(node.name === "Date") {
          context.report(node, "Use moment instead of Date");
        }
      }
    };
  },
};
