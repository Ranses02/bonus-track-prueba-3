import PropTypes from 'prop-types';

function EventoCard({ nombre, lugar, duracion, tipo, descripcion, fechas, esGratuito }) {
  // si la prop esGratuito es true, mostramos una etiqueta especial y cambiamos el estilo
  const estiloCard = esGratuito ? { border: '2px solid #2ecc71', padding: '0.6rem' } : { border: '1px solid #ddd', padding: '0.6rem' };

  return (
    <article className="evento-card" style={estiloCard}>
      {esGratuito && <span className="etiqueta-gratis">GRATIS</span>}

      <h3>{nombre}</h3>
      <p><strong>Tipo:</strong> {tipo}</p>
      <p><strong>Lugar:</strong> {lugar}</p>
      {duracion > 0 && <p><strong>Duración:</strong> {duracion} minutos</p>}
      <p><strong>Descripción:</strong> {descripcion}</p>
      <p><strong>Fechas:</strong> {fechas.join(', ')}</p>
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
  esGratuito: PropTypes.bool
};

EventoCard.defaultProps = {
  esGratuito: false
};

export default EventoCard;
