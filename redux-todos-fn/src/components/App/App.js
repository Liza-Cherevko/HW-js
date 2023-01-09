import './App.css';
import '../../common-css/css/normalize.css';
import '../../common-css/css/skeleton.css';
import '../../common-css/css/dark-theme.css';
// import { useEffect, useState } from 'react';

import Form from '../Form/Form';
import List from '../List/List';

function App() {
  return (
    <div className="container">
            <List />
            <Form />
        </div>
  );
}

export default App;
