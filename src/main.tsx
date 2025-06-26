import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { StagewiseToolbar } from '@stagewise/toolbar-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Stagewise Toolbar の初期化
const toolbarConfig = {
  plugins: [], // 必要に応じてプラグインを追加
}

document.addEventListener('DOMContentLoaded', () => {
  const toolbarRoot = document.createElement('div')
  toolbarRoot.id = 'stagewise-toolbar-root'
  document.body.appendChild(toolbarRoot)

  ReactDOM.createRoot(toolbarRoot).render(
    <React.StrictMode>
      <StagewiseToolbar config={toolbarConfig} />
    </React.StrictMode>,
  )
}) 