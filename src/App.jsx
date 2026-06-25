import { useState } from 'react'
import { eventos } from './data/eventos'
import ListaEventos from './components/ListaEventos'
import FiltroTipo from './components/FiltroTipo'
import './App.css'

function App() {
  // guardamos lo que escribe el usuario y la categoria elegida
  const [busqueda, setBusqueda] = useState('')
  const [filtro, setFiltro] = useState('Todos')
  const [eventoSeleccionado, setEventoSeleccionado] = useState(null)

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

  // calculamos cuantos son gratis para mostrar el contador
  const cantidadGratis = eventosFiltrados.filter(e => e.esGratuito).length

  const limpiarSeleccion = () => setEventoSeleccionado(null)
  const seleccionarEvento = (evento) => setEventoSeleccionado(evento)

  const urlGoogleMaps = eventoSeleccionado
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${eventoSeleccionado.lugar} ${eventoSeleccionado.nombre}`)}`
    : ''

  return (
    <div className="app-container">
      <header className="app-header">
        <div>
          <p className="eyebrow">Agenda Cultural</p>
          <h1>Eventos imperdibles de la ciudad</h1>
          <p className="lead">Filtra por categoría, busca por nombre y descubre los eventos gratuitos.</p>
        </div>
      </header>

      <main className="app-main">
        <div className="panel-filtros">
          <input
            className="input-busqueda"
            type="text"
            placeholder="Buscar eventos por nombre..."
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
          />
          <FiltroTipo filtroActual={filtro} setFiltro={setFiltro} />
        </div>

        <div className="panel-resumen">
          <div className="contador-gratis">
            <p>Eventos gratuitos: <strong>{cantidadGratis}</strong></p>
          </div>
          {eventoSeleccionado && (
            <div className="seleccion-info">
              <div>
                <p className="subtitulo">Evento seleccionado</p>
                <h2>{eventoSeleccionado.nombre}</h2>
                <p>{eventoSeleccionado.lugar}</p>
              </div>
              <div className="acciones-seleccion">
                <a href={urlGoogleMaps} target="_blank" rel="noreferrer" className="boton-maps">
                  Ver en Google Maps
                </a>
                <button type="button" className="boton-limpiar" onClick={limpiarSeleccion}>
                  Quitar selección
                </button>
              </div>
            </div>
          )}
        </div>

        <ListaEventos
          eventos={eventosFiltrados}
          onSeleccionar={seleccionarEvento}
          eventoSeleccionado={eventoSeleccionado}
        />
      </main>
    </div>
  )
}

export default App
