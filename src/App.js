import logo from './logo.svg'
import './App.css'
import SegmentControl from './SegmentControl'
import React from 'react'

function App() {
  return (
    <div className='App'>
      <SegmentControl
        items={['facebook', 'amazon', 'netflix', 'google']}
        initialIndex={2}
        onChange={(index, value) => console.log(index, value)}
      />
    </div>
  )
}

export default App
