import { useState } from 'react'
import '../App.css'
import PasswordInput from './PasswordInput'
import SubmitButton from './SubmitButton'

// Main App component
// Renders both the PasswordInput and SubmitButton components
function App() {

  return (
    <div>
      <PasswordInput/>
      <SubmitButton/>
    </div>
  )
}

export default App