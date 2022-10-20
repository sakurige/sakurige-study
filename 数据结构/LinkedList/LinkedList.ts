import List from "./list"
/**
 * 节点类
 */
class Node<E> {
  constructor(public value: E, public next: Node<E> | null) {}
}
/**
 * 链表
 */
class SingleLinkList<E> implements List<E> {
  #size: number = 0
  #head: Node<E> | null = null
  get size() {
    return this.#size
  }
  get head() {
    return this.#head
  }
  clear() {
    this.#head = null
    this.#size = 0
  }
  add(element: E, index: number = this.#size) {
    this.#checkRangeForAdd(index)
    if (index === 0) {
      //如果是第一个元素，就将head指向新元素就好
      this.#head = new Node<E>(element, this.#head)
    } else {
      // 如果不是第一个元素，就获取插入位置的前一个元素
      let preNode = this.#node(index - 1)
      // 将前一个元素的next作为新节点的next
      let newNode = new Node<E>(element, preNode.next)
      // 将前一个节点的next指向新节点
      preNode.next = newNode
    }
    this.#size++
  }
  set(index: number, element: E): E {
    const node = this.#node(index)
    const oldValue = node.value
    node.value = element
    return oldValue
  }
  isEmpty() {
    return this.#size === 0
  }
  get(index: number): E {
    return this.#node(index).value
  }
  remove(index: number) {
    this.#checkRange(index)
    let node: Node<E>
    if (index === 0) {
      node = this.#head as Node<E>
      this.#head = node.next
    } else {
      let preNode = this.#node(index - 1)
      node = preNode.next as Node<E>
      preNode.next = node.next
    }
    this.#size--
    return node.value
  }
  contains(element: E) {
    return this.indexOf(element) !== -1
  }
  indexOf(element: E) {
    let node = this.#head as Node<E>
    let index = 0
    let isExist = false
    while (node) {
      if (node.value === element) {
        isExist = true
        break
      }
      index++
      node = node.next as Node<E>
    }
    if (!isExist) {
      index = -1
    }
    return index
  }
  #checkRangeForAdd(index: number) {
    if (index < 0 || index > this.#size) {
      throw new Error(`${index} out of range`)
    }
  }
  #checkRange(index: number) {
    if (index < 0 || index >= this.#size) {
      throw new Error(`${index} out of range`)
    }
  }
  /**
   * 获取索引位置的节点
   * @param index 索引
   */
  #node(index: number) {
    this.#checkRange(index) // 边界判断
    let node = this.#head as Node<E> // 拿到head节点
    for (let i = 0; i < index; i++) {
      node = node.next as Node<E>
    }
    return node
  }
}
const linkList = new SingleLinkList<number>()
linkList.add(0)
linkList.add(1)
// console.log(linkList.head, linkList.size)

linkList.add(2)
linkList.add(3)
linkList.add(4)
linkList.add(5)
// linkList.add(1000, 0)
// linkList.add(3000, 1)

// console.log(linkList.head, linkList.size)
console.log("index   ", linkList.indexOf(5), linkList.size)

// console.log(linkList.remove(0))
// console.log(linkList.remove(1))

// console.log(linkList.head, linkList.size)

export default SingleLinkList
export { Node }
