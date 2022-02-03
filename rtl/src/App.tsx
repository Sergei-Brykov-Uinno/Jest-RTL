import { useRoutes } from 'react-router-dom';
import { routesConfig } from './routes';

function App() {
  return useRoutes(routesConfig);
}

export default App;
