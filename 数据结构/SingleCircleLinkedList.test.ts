import SingleCircleLinkedList from "./LinkedList/SingleCircleLinkedList"
import { Node } from "./LinkedList/list"
describe("SingleCircleLinkedList", () => {
  const list = new SingleCircleLinkedList<number>()
  list.add(0)
  list.add(1)
  list.add(2)
  list.add(3)

  it("for add method", () => {
    list.add(10, 0) // 添加到第一个位置
    list.add(20, 3) //
    list.add(1000) //添加到最后一个位置
    expect(list.get(0)).toBe(10)
    expect(list.get(list.size - 1)).toBe(1000)
    //#region 这一段是为了拿到最后一个元素
    let tail = list.head as Node<number>
    for (let i = 0; i < list.size; i++) {
      if (i === 0) {
        continue
      }
      tail = tail.next as Node<number>
    }
    //#endregion
    expect(tail.next === list.head).toBeTruthy()
  })
  it("for remove method", () => {
    expect(list.remove(0)).toBe(10)
    expect(list.remove(list.size - 1)).toBe(1000)
    //#region 这一段是为了拿到最后一个元素
    let tail = list.head as Node<number>
    for (let i = 0; i < list.size; i++) {
      if (i === 0) {
        continue
      }
      tail = tail.next as Node<number>
    }
    //#endregion
    expect(tail.next === list.head).toBeTruthy()
  })
})
