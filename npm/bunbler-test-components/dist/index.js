import React from 'react';

function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure " + obj);
}

var Button = function Button(_ref) {
  _objectDestructuringEmpty(_ref);
  return /*#__PURE__*/React.createElement("button", null, "aaa");
};

export { Button };
