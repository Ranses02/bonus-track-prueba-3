# Análisis — Agenda Cultural (Bonus Track Prueba 3)

## Descripción del Proyecto
Aplicación React desarrollada con Vite para explorar eventos culturales. Incluye búsqueda por nombre, filtros por categoría, tarjeta de evento con datos detallados y resaltado de eventos gratuitos.

## Estructura del Proyecto
```
src/
├── components/
│   ├── EventoCard.jsx        # Tarjeta individual de evento
│   ├── ListaEventos.jsx      # Contenedor de tarjetas con map()
│   └── FiltroTipo.jsx        # Botones para filtro por categoría
├── data/
│   └── eventos.js            # Array de eventos precargados
├── App.jsx                   # Estado, filtros, búsqueda y contador
├── App.css                   # Estilos de tarjetas, botones y layout
├── index.css                 # Estilos globales
└── main.jsx                  # Punto de arranque de React
```

## Etapas Implementadas

### Etapa 1 — Proyecto base
- Creación del proyecto con Vite.
- Instalación de dependencias.
- Creación de `src/data/eventos.js` con 12 eventos.
- Verificación en `App.jsx` de la carga de datos.

### Etapa 2 — Componente EventoCard
- Creación de `EventoCard.jsx` con props: `nombre`, `lugar`, `duracion`, `tipo`, `descripcion`, `fechas`, `esGratuito`.
- Uso de `PropTypes` para validación.
- Renderizado semántico con `<article>`.
- Lógica condicional para mostrar la etiqueta `GRATIS`.

### Etapa 3 — Lista de eventos
- Creación de `ListaEventos.jsx`.
- Recibe el array de eventos por props.
- Recorre el array con `.map()` y renderiza un `EventoCard` por evento.
- Uso de `key={evento.id}` para evitar advertencias de React.
- Mensaje condicional "No hay eventos que coincidan" cuando quedan cero resultados.

### Etapa 4 — Filtros y búsqueda segura
- `App.jsx` usa `useState` para `busqueda` y `filtro`.
- Input controlado para la búsqueda por texto.
- Botones de filtro en `FiltroTipo.jsx` para las opciones: Todos, Concierto, Teatro, Exposición.
- Normalización de texto para comparar sin acentos ni mayúsculas/minúsculas.
- `type="button"` en botones para evitar envíos de formulario indeseados.
- `aria-pressed` en botones para mejorar accesibilidad.

### Etapa 5 — Destacar y contar gratuitos
- En `EventoCard.jsx` se muestra la etiqueta `GRATIS` si `esGratuito` es true.
- Se destaca visualmente el borde de la tarjeta gratuita.
- `App.jsx` calcula `cantidadGratis` a partir del array filtrado.
- Se muestra el contador por encima de la lista.
- Estilos de tarjetas y contador aplicados en `App.css`.

## Buenas prácticas aplicadas
- Validación de props con `PropTypes`.
- Uso de keys únicos con `id`.
- Búsqueda segura con `.trim()` y normalización de texto.
- Accesibilidad básica en los botones de filtro.
- Renderizado condicional limpio para estados vacíos.
- Separación de responsabilidades por componentes.

## Commits realizados
- `feat: proyecto base con datos`
- `feat: componente EventoCard con props y validacion`
- `feat: renderizado de ListaEventos con key usando id`
- `feat: filtro y búsqueda controlada en App`
- `fix: filtro - normalizar texto y evitar submit con type=button`
- `feat: destacar eventos gratuitos y contador (Etapa 5)`
- `style: tarjetas y etiquetas para lista de eventos`

## Conclusión
El proyecto está completo conforme a las etapas de la prueba. Se respetó la estructura de componentes, se aplicaron filtros y búsqueda seguros, y se dejó la interfaz en formato de tarjetas con énfasis en los eventos gratuitos.
