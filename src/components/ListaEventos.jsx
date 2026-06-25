import PropTypes from 'prop-types';
import EventoCard from './EventoCard';

function ListaEventos({ eventos }) {
  if (eventos.length === 0) {
    return <p className="sin-eventos">No hay eventos que coincidan</p>;
  }

  return (
    <div className="lista-eventos">
      {/* pasamos el id directo al key para que react no tire el warning */}
      {eventos.map(evento => (
        <EventoCard
          key={evento.id}
          nombre={evento.nombre}
          lugar={evento.lugar}
          duracion={evento.duracion}
          tipo={evento.tipo}
          descripcion={evento.descripcion}
          fechas={evento.fechas}
          esGratuito={evento.esGratuito}
        />
      ))}
    </div>
  );
}

ListaEventos.propTypes = {
  eventos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ListaEventos;
