function Book(name) {
  // 构造函数
  this.name = name // 公共属性
  this.getPrace = function () {
    // 公有方法只有类实例才可以访问
    return prace
  }
}
// 原型上的属性, 实例对象可访问, 类通过prototype可访问
Book.prototype.isJsBook = false
Book.prototype.hello = function () {
  console.log("222")
}

var book = new Book("你不知道的javascript")

console.log(book, book.hello())
