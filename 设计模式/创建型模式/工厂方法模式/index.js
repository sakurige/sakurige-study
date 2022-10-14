// 以创建不同功能的按钮为例
function BtnFactory(type, content) {
  if (this instanceof BtnFactory) {

    return this[type](content)
  } else {
    return new BtnFactory(type, content)
  }
}
BtnFactory.prototype = {
  warnBtn: function (content) {
    console.log(content)
  },
  cancelBtn: function (content) {
    console.log(content)
  },
  okBtn: function (content) {
    console.log(content)
  },
}
const warnBtn = new BtnFactory("warnBtn", "警告")

