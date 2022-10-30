import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import './styles.css'

const $root = document.querySelector('#root')
const rootDOM = ReactDOM.createRoot($root)

rootDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)
