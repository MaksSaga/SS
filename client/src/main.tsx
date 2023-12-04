import ReactDOM from 'react-dom/client'
import { App } from './components/template/App.tsx'
import { BrowserRouter } from 'react-router-dom'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
