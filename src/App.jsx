import { eventos } from './data/eventos'
import ListaEventos from './components/ListaEventos'
import './App.css'

function App() {
  console.log(eventos)

  return (
    <div>
      <h1>Agenda Cultural</h1>
      <ListaEventos eventos={eventos} />
    </div>
  )
}

export default App
