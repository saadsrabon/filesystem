export type FolderItem = {
  id: string
  name: string
  type: 'folder'
  parentId: string | null
}

export type FileItem = {
  id: string
  name: string
  type: 'file'
  parentId: string | null
  content: string
}

export type FileSystemItem = FolderItem | FileItem
