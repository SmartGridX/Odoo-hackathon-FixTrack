import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/reset.css'
import './styles/theme.css'
import './styles/layout.css'
import './components/dashboard/DashboardTabs.css'
import './components/dashboard/DashboardHeader.css'
import './components/dashboard/RequestsTable.css'
import './components/dashboard/SummaryCard.css'
import './components/auth/AuthLayout.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
