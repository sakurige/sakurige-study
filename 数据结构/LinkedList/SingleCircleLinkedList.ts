import { List, Node } from "./list"
class SingleCircleLinkedList<E> implements List<E> {
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
      // 执行到这里，size就应该加1了
      if (index === this.#size) {
        // 如果添加的是第一个元素，再把head的next指向自己就好了
        this.#head.next = this.#head
      } else {
        // 如果添加的是不为空的链表的第一个位置
        // 首先获取到最后一个位置的元素
        let tailNode = this.#node(this.#size - 1)
        // !!!注意：这里拿到的是倒数第二个个元素，因为我们之前已经将新节点添加到链表中了，只是size还未更新
        tailNode = tailNode.next as Node<E> // 这里拿到的才是末尾的元素
        tailNode.next = this.#head
        // (this.#node(this.size - 1).next as Node<E>).next = this.#head
      }
    } else {
      // 如果不是第一个元素，就获取插入位置的前一个元素
      let preNode = this.#node(index - 1)
      // 将前一个元素的next作为新节点的next
      let newNode = new Node<E>(element, preNode.next)
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
      node = this.#head as Node<E> // 让node指向头节点
      if (this.size === 1) {
        // 当链表只有一个元素时，直接将head指向null就好
        this.#head = null
      } else {
        // 当链表不只有一个元素，且要删除的是第一个元素
        // 获取最后一个节点元素
        let tailNode = this.#node(this.#size - 1)
        // 将现在的head节点，指向之前头结点的next
        this.#head = node.next
        // 让尾节点从新指向头节点
        tailNode.next = this.head
      }
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

const list = new SingleCircleLinkedList<number>()
list.add(0)
list.add(1)
list.add(2)
list.add(3)
list.add(4)
list.add(1000, 0)
list.add(2000, 3)

console.log(list.head?.next?.next?.next)
console.log(list.remove(3))
console.log(list.remove(0))
console.log(list.remove(list.size - 1))

console.log(list.head === list.head?.next?.next?.next?.next)
console.log(list.set(2, 100))
console.log(list.get(2))
export default SingleCircleLinkedList
