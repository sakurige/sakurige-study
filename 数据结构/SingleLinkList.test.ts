import SingleLinkList from "./LinkedList/SingleLinkedList"
import { Node } from "./LinkedList/list"
describe("SingleLinkList", () => {
  const linkList = new SingleLinkList<string>()
  linkList.add("000")
  linkList.add("111")
  linkList.add("222")
  linkList.add("333")
  linkList.add("444")
  linkList.add("555")
  it("for add method", () => {
    linkList.add("shou", 0)
    linkList.add("zhong", 3)
    linkList.add("wei", 8)
    expect((linkList.head as Node<string>).value).toBe("shou")
    expect(linkList.get(3)).toBe("zhong")
  })
  it("for remove method", () => {
    expect(linkList.remove(3)).toBe("zhong")
    expect(linkList.remove(0)).toBe("shou")
    expect(linkList.remove(linkList.size - 1)).toBe("wei")
  })
  it("for indexOf method", () => {
    expect(linkList.indexOf("111")).toBe(1)
    expect(linkList.indexOf("000")).toBe(0)
    expect(linkList.indexOf("555")).toBe(linkList.size - 1)
  })
  it("for contains method", () => {
    expect(linkList.contains("111")).toBe(true)
    expect(linkList.contains("000")).toBe(true)
    expect(linkList.contains("555")).toBe(true)
    expect(linkList.contains("55222225")).toBe(false)
  })
})
