
import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')
  const [list, setList] = useState([])
  const [mode, setMode] = useState('add')
  const [currentItem, setcurrentItem] = useState()

  const div = {
    display: 'flex',
    gap: '12px'
  }

  const li = {
    display: 'flex',
    gap: '12px'
  }

  const ul = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }

  const handleAdd = () => {
 
    setList(prev => [...prev, text])
    setText('')
  }

  const handleUpdate = () => {
 
    const prevList = [...list]
    const targetIndex = prevList.indexOf(currentItem)
    console.log(targetIndex, prevList)
    targetIndex > 0 ? prevList.splice(targetIndex, 1, text) : prevList.splice(0, 1, text)
    
    console.log(prevList)

    setMode('add')
    setList(prevList)
    setText('')
    
  }

  const handelRemove = (e) => {
    const prevList = [...list]


    const targetIndex = prevList.indexOf(e)

    targetIndex > 0 ? prevList.splice(targetIndex, targetIndex) : prevList.splice(0, 1)
    

    setList(prevList)
    
  }

  const toggleMode = (l) => {
    setcurrentItem(l)
    setText(l)
    setMode('update')
  }
  

  return (
    <>
      <div>
        <div style={div}>
          <input type="text" onChange={(e) => setText(e.target.value)} value={text}/>
          <button onClick={mode === 'add' ? handleAdd : handleUpdate }>{mode === 'add' ? '+' : 'Update' }</button>
        
        </div>

        <ul style={ul}>
          {
            list.map(l => {

              return (
                <>
                  <div style={li}>
                    <li onClick={() => toggleMode(l)}>{l}</li>
                    <button onClick={() => handelRemove(l)} >-</button>
                   
                  </div>
                </>
              )
            } )
          }
        </ul>

      </div>
    </>
  )
}

export default App
