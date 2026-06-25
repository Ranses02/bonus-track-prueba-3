import { useState } from 'react'
import { eventos } from './data/eventos'
import ListaEventos from './components/ListaEventos'
import FiltroTipo from './components/FiltroTipo'
import './App.css'

function App() {
  // guardamos lo que escribe el usuario y la categoria elegida
  const [busqueda, setBusqueda] = useState('')
  const [filtro, setFiltro] = useState('Todos')

  // limpiamos los espacios del buscador por seguridad antes de filtrar
  const textoLimpio = busqueda.trim().toLowerCase()

  const eventosFiltrados = eventos.filter(evento => {
    const coincideNombre = evento.nombre.toLowerCase().includes(textoLimpio)
    const coincideTipo = filtro === 'Todos' || evento.tipo === filtro
    return coincideNombre && coincideTipo
  })

  return (
    <div>
      <h1>Agenda Cultural</h1>

      <input
        type="text"
        placeholder="Buscar eventos por nombre..."
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)}
      />

      <FiltroTipo filtroActual={filtro} setFiltro={setFiltro} />

      <ListaEventos eventos={eventosFiltrados} />
    </div>
  )
}

export default App
