import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AuthContextProvider from './Context/AuthContext';
import AllRoutes from './AllRoutes/AllRoutes';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="App">

      <AuthContextProvider>
        <BrowserRouter>
          <AllRoutes />
          {/* <Dashboard /> */}
        </BrowserRouter>
      </AuthContextProvider>

    </div>
  );
}

export default App;
