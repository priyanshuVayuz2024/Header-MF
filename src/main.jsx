import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

const Wrapper = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <BrowserRouter>
        <App setOpen={setOpen} open={open} />
      </BrowserRouter>

    </>
  )
}


createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Wrapper />
  // </StrictMode>,
)
