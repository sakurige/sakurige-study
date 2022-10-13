export default interface List<E> {
  clear: () => void
  add(element: E): void
  // add(index: number, element: E): void
  set(index: number, element: E): E
  isEmpty: () => boolean
  get: (index: number) => E
  remove: (index: number) => E
  contains: (element: E) => boolean
}
