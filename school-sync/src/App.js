import './App.css';

import AuthContextProvider from './Context/AuthContext';
import AllRoutes from './AllRoutes/AllRoutes';


function App() {
  return (
    <div className="App">

      <AuthContextProvider>
        <AllRoutes />
      </AuthContextProvider>

    </div>
  );
}

export default App;
