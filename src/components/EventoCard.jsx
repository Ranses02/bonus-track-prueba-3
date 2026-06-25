import PropTypes from 'prop-types';

function EventoCard({ nombre, lugar, duracion, tipo, descripcion, fechas }) {
  return (
    <article className="evento-card">
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
  fechas: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default EventoCard;
