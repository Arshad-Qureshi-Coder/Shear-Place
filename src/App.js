import React, { useCallback, useState } from 'react';
import {
  BrowserRouter as Router, 
  Routes, 
  Route,
} from 'react-router-dom';

import { AuthContext } from './shared/Context/AuthContext';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Signup from './user/pages/Signup';
import Auth from './user/pages/Auth';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handlers for login/logout state
  const login = useCallback(() => { 
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => { 
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider 
      value={{ isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/:userId/places" element={<UserPlaces />} />
            <Route path="/places/new" element={<NewPlace />} />
            <Route path="/places/:placeId" element={<UpdatePlace />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;




// import React, { useState, useEffect } from 'react';

// function App() {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null); // Added state for error handling

//   async function fetchData() {
//     setIsLoading(true);
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       const result = await response.json();
//       setData(result);
//     } catch (error) {
//       setError(error); // Set error state if fetch fails
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, []); // Empty dependency array to fetch data only on mount

//   return (
//     <div>
//       {isLoading ? (
//         <h1>Loading data...</h1>
//       ) : error ? ( // Render error message if error state is set
//         <p>Error: {error.message}</p>
//       ) : data ? (
//         <ul>
//           {data.map((user) => (
//             <li key={user.id}>{user.name}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>No data available yet.</p> // Added fallback message for no data
//       )}
//     </div>
//   );
// }

// export default App;