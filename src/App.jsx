import { useState } from 'react'
import Landing from './page/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Landing/>
    </div>
  )
}

export default App
