import { useState } from 'react'
import { eventos } from './data/eventos'
import ListaEventos from './components/ListaEventos'
import FiltroTipo from './components/FiltroTipo'
import './App.css'

function App() {
  // guardamos lo que escribe el usuario y la categoria elegida
  const [busqueda, setBusqueda] = useState('')
  const [filtro, setFiltro] = useState('Todos')

  // normalizador para quitar acentos y comparar en minúsculas
  const normalizar = (s) => (
    String(s || '')
      .normalize('NFD')
      .replace(/\p{Diacritic}/gu, '')
      .toLowerCase()
  )

  // limpiamos y normalizamos el buscador por seguridad antes de filtrar
  const textoLimpio = normalizar(busqueda.trim())
  const filtroNormalizado = normalizar(filtro)

  const eventosFiltrados = eventos.filter(evento => {
    const nombreNorm = normalizar(evento.nombre)
    const tipoNorm = normalizar(evento.tipo)
    const coincideNombre = nombreNorm.includes(textoLimpio)
    const coincideTipo = filtroNormalizado === 'todos' || tipoNorm === filtroNormalizado
    return coincideNombre && coincideTipo
  })

  // logs para debug de filtro (puede quitarse luego)
  console.log('filtro:', filtro, '->', filtroNormalizado, 'resultados:', eventosFiltrados.length)

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
