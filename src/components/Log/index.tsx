import React from 'react'
import LogBody from './content'
import NavigationBar from './NavigationBar'

export default function LogContent() {

  const [size, setSize] = React.useState('500px')

  return (
    <div>
        <NavigationBar size={size} setSize={setSize} />
        <br />
        <LogBody size={size} />
    </div>
    
  )
}
