import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import KanBan from "./kanban/kanban"

ReactDOM.render(
  <React.StrictMode>
      <KanBan api_port={process.env.API_PORT}/>
  </React.StrictMode>,
  document.getElementById('root')
);
