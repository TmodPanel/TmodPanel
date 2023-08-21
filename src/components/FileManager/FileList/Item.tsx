
import React from 'react'


export interface File {
    name: string
    type: string
    size: string
    date: string
    action?: string
}

interface FileItemProps {
    file: File
    onFileClick?: (file: File) => void
    onFileDelete?: (file: File) => void
}


function FileItem (props: FileItemProps) {
  const { file, onFileClick, onFileDelete } = props


  const handleFileClick = () => {
    if (onFileClick) {
      onFileClick(file)
    }
  }

  const handleFileDelete = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (onFileDelete) {
      onFileDelete(file)
    }
  }

  return (
    <div onClick={handleFileClick}>
        <button onClick={handleFileDelete}>Delete</button>
    </div>
  )
}

export default FileItem