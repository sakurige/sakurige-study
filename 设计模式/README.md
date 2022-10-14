# 设计模式相关学习

## 创建型模式

### 简单工厂模式

简单工厂模式又叫静态工厂模式, 主要用来创建同一类的对象

##### 缺点

每一次添加新的对象就需要创建一个新对象然后再改变工厂方法

### 工厂方法模式

通过对类的抽象,使其创建业务的主要用于创建多类的产品实例, 实质就是将创建对象的工作推迟到子类完成, 这样核心类就成了抽象类, js 中实现如下

```js
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
```

### 抽象工厂模式

通过对类的工厂抽象使其业务用于对产品类簇的创建, 而不负责创建某一类产品的实例
