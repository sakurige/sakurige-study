export default interface List<E> {
  clear: () => void // 清空链表
  // add(element: E): void // 在最后添加元素
  add(element: E, index?: number): void // 在指定位置添加元素
  set(index: number, element: E): E // 设置特定位置的值
  isEmpty: () => boolean // 链表是否为空
  get: (index: number) => E // 获取特定位置的值
  remove: (index: number) => E // 删除指定位置的元素
  contains: (element: E) => boolean // 是否包含某个元素
  indexOf(element: E): number // 获取元素的位置
}
