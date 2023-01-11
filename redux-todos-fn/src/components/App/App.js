import './App.css';
import '../../common-css/css/normalize.css';
import '../../common-css/css/skeleton.css';
import '../../common-css/css/dark-theme.css';

import Form from '../Form/Form';
import List from '../List/List';
import { selectIsLoading } from '../../store/selectors/todo';
import { useSelector } from 'react-redux';

function App() {
const isLoading = useSelector(selectIsLoading)
  return (
    <div className="container">
      {
        isLoading ? ('Loading') : (
          <>
           <List />
            <Form />
          </>
        )
      }

        </div>
  );
}

export default App;
