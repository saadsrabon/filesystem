import type { FileSystemItem } from './types'

//need to create a function which can find out the childrens.
const items: FileSystemItem[] = [
  {
    id: '1',
    name: 'Projects',
    type: 'folder',
    parentId: null,
  },
  {
    id: '2',
    name: 'Webbly',
    type: 'folder',
    parentId: '1',
  },
  {
    id: '3',
    name: 'notes.txt',
    type: 'file',
    parentId: '2',
    content: 'Hello',
  },
]

function getChildren(items: FileSystemItem[], id: string): FileSystemItem[] {
  return items.filter((item) => item.parentId === id)
}

console.log(getChildren(items, '1'))

console.log('I am here')
