import { link } from "fs"
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
class LinkedList<E> implements List<E> {
  #size: number = 0 // 链表长度
  #head: Node<E> | null = null // 头节点
  #tail: Node<E> | null = null // 尾节点
  get size() {
    return this.#size
  }
  get head() {
    console.log("11111")

    return this.node(0)
  }
  get tail() {
    return this.node(this.#size - 1)
  }
  /**
   * 添加元素方法
   * @param element 添加的元素值
   */
  add(element: E): void
  /**
   * 添加元素方法
   * @param element 添加的元素值
   * @param index 添加的位置
   */
  add(element: E, index: number): void
  add(element: E, index: number = this.#size) {
    this.#checkRangeForAdd(index) // 检查索引是否符合规则
    if (index === 0) {
      const oldHead = this.#head
      this.#head = new Node(element, oldHead)
    } else {
      // 获取对应索引前一个元素
      const preNode = this.node(index - 1)
      // 创建新节点, 并将当前索引的元素作为新节点的next元素
      const newNode = new Node(element, preNode.next)
      // 旧节点的next指向新节点
      preNode.next = newNode
    }
    this.#size++
  }
  /**
   * 根据索引移除元素
   * @param index 索引
   */
  remove(index: number) {
    this.#checkRange(index)
    let node: Node<E>
    if (index === 0) {
      node = this.#head as Node<E>
      this.#head = node.next
    } else {
      const preNode = this.node(index - 1)
      node = preNode.next as Node<E>
      preNode.next = node.next
    }
    this.#size--
    return node.value
  }
  indexOf(element: E): number {
    let node = this.#head
    let index = 0
    let isExist = false
    while (node) {
      if (node.value === element) {
        isExist = true
        break
      }
      index++
      node = node.next
    }
    if (!isExist) {
      index = -1
    }
    return index
  }
  /**
   * 清空链表
   */
  clear() {
    this.#size = 0
    this.#head = null
  }
  isEmpty() {
    return this.#size === 0
  }
  /**
   *
   * @param index 索引
   * @param element 新值
   * @return 旧值
   */
  set(index: number, element: E) {
    this.#checkRange(index)

    const node = this.node(index)
    let oldValue: E = node.value
    node.value = element
    return oldValue
  }
  get(index: number) {
    this.#checkRange(index)

    return this.node(index).value
  }
  /**
   * 根据传入的索引查找对应节点
   * @param index 索引
   */
  node(index: number): Node<E> {
    let node = this.#head
    for (let i = 0; i < index; i++) {
      node = node ? node.next : null
    }
    return node as Node<E>
  }
  contains(element: E) {
    return this.indexOf(element) !== -1
  }
  /**
   * 检查索引是否符合规则
   * @param index 索引
   */
  #checkRangeForAdd(index: number) {
    if (index < 0 || index > this.#size) {
      throw new Error(`${index} is out of range of the list`)
    }
  }
  #checkRange(index: number) {
    if (index < 0 || index >= this.#size) {
      throw new Error(`${index} is out of range of the list`)
    }
  }
}
const linkList = new LinkedList<number>()
linkList.add(0)
linkList.add(1)
console.log(linkList.size)

linkList.add(2, 2)
console.log(linkList.head)
console.log(linkList.remove(2))

console.log(linkList.head)

export default LinkedList
export { Node }
