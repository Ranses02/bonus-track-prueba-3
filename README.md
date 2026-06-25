# README - Agenda Cultural (Bonus Track Prueba 3)

## Descripción
SPA desarrollada en React (Vite) para la visualización de eventos culturales. Incluye renderizado dinámico, filtrado por categoría, búsqueda controlada por texto y resaltado de eventos gratuitos.

## Estructura Principal
```
src/
├── components/
│   ├── EventoCard.jsx    # Tarjeta de evento individual
│   ├── ListaEventos.jsx  # Contenedor del listado (map)
│   └── FiltroTipo.jsx    # Botones para filtro de categoría
├── data/
│   └── eventos.js        # Datos locales precargados
└── App.jsx               # Lógica central y manejo de estados
```

## Desarrollo por Etapas

- **Etapa 1 (Base):** Configuración inicial con Vite y carga del array de datos.
- **Etapa 2 (Tarjetas):** Creación de `EventoCard` con validación estricta de datos mediante PropTypes.
- **Etapa 3 (Listado):** Implementación de `ListaEventos` asignando el `id` como *key* única para evitar advertencias en el DOM.
- **Etapa 4 (Filtros):** Uso de `useState` para búsqueda por texto (input controlado) y selección de categoría, aplicando normalización de strings.
- **Etapa 5 (Condicionales):** Renderizado condicional para destacar visualmente los eventos gratuitos y agregar un contador dinámico.

## Historial de Commits
Se respetó la nomenclatura solicitada en la evaluación:

- `feat: proyecto base con datos`
- `feat: componente EventoCard con props y validacion`
- `feat: renderizado de la lista con key`
- `feat: filtro y busqueda controlada`
- `feat: destacar elementos y contador`

## Instrucciones de Ejecución
Para levantar el proyecto en un entorno local:

```bash
npm install
npm run dev
```

**Repositorio:** [https://github.com/Ranses02/bonus-track-prueba-3](https://github.com/Ranses02/bonus-track-prueba-3)
