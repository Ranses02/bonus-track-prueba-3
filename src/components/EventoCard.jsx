import PropTypes from 'prop-types';

const coloresTipo = {
  Concierto: { color: '#4338ca', fondo: '#eef2ff' },
  Teatro: { color: '#be185d', fondo: '#fce7f3' },
  Exposición: { color: '#047857', fondo: '#d1fae5' }
};

function EventoCard({ nombre, lugar, duracion, tipo, descripcion, fechas, esGratuito, selected, onSelect }) {
  const estiloTipo = coloresTipo[tipo] || { color: '#0f172a', fondo: '#e2e8f0' };

  return (
    <article
      className={`evento-card ${selected ? 'selected' : ''}`}
      onClick={onSelect}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onSelect()
      }}
    >
      <div className="evento-accent" style={{ backgroundColor: estiloTipo.color }} />

      <div className="evento-contenido">
        <div className="evento-meta-top">
          <span className="chip tipo-chip" style={{ color: estiloTipo.color, backgroundColor: estiloTipo.fondo }}>{tipo}</span>
          {esGratuito && <span className="etiqueta-gratis">GRATIS</span>}
        </div>

        <h3>{nombre}</h3>
        <p className="evento-subtitulo">{lugar}</p>

        <div className="evento-datos">
          {duracion > 0 && <span className="chip duracion-chip">{duracion} minutos</span>}
          <span className="chip fechas-chip">{fechas.join(' • ')}</span>
        </div>

        <p className="evento-descripcion">{descripcion}</p>
      </div>
    </article>
  );
}

EventoCard.propTypes = {
  nombre: PropTypes.string.isRequired,
  lugar: PropTypes.string.isRequired,
  duracion: PropTypes.number.isRequired,
  tipo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  fechas: PropTypes.arrayOf(PropTypes.string).isRequired,
  esGratuito: PropTypes.bool,
  selected: PropTypes.bool,
  onSelect: PropTypes.func
};

EventoCard.defaultProps = {
  esGratuito: false,
  selected: false,
  onSelect: () => {}
};

export default EventoCard;
