function Basketball() {
  this.type = "basketball"
} // 篮球类
function Football() {
  this.type = "football"
} // 足球类
function Tennis() {
  this.type = "tennis"
} //网球类
/**
 *通过传入的name判断需要哪一种, 然后由该工厂进行创建
 * @param {string} name
 */
function ballFactory1(name) {
  switch (name.toLowerCase()) {
    case "basketball":
      return new Basketball()
    case "football":
      return new Football()
    case "tennis":
      return new Tennis()
  }
}
function ballFactory2(type) {
  var o = new Object()
  o.type = type
  if (type === "") {
    // 然后通过判断type添加不同的逻辑功能
  }
  return 0
}
const ball = ballFactory1("Tennis")
console.log(ball instanceof Basketball)
