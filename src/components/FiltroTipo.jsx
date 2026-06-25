import PropTypes from 'prop-types';

function FiltroTipo({ filtroActual, setFiltro }) {
  const categorias = ['Todos', 'Concierto', 'Teatro', 'Exposición'];

  return (
    <div className="filtro-tipo">
      {/* botones simples para cambiar el estado del filtro en App */}
      {categorias.map(categoria => (
        <button
          key={categoria}
          className={`boton-filtro ${filtroActual === categoria ? 'activo' : ''}`}
          onClick={() => setFiltro(categoria)}
        >
          {categoria}
        </button>
      ))}
    </div>
  );
}

FiltroTipo.propTypes = {
  filtroActual: PropTypes.string.isRequired,
  setFiltro: PropTypes.func.isRequired
};

export default FiltroTipo;
