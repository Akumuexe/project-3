// import React from 'react';
// //import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// //import Register from './pages/register';

// function App() {
//   return (
//     <div className="App">
    
//       <Router>
//         		<Routes>
//           			<Route exact path='/'>
//                   Hi
//                 </Route>
//                 <Route exact path='/register'>
//                 </Route>
//         		</Routes>
//     	</Router>
//     </div>
//   );
// }

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'; 
import Register from './pages/register';
import Welcome from './pages/welcome';

// import Navbar from './components/Navbar';
// import { setContext } from '@apollo/client/link/context';
// import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorixation: token ? `Bearer ${token}` : '',
      
//     },
//   };
// });

// const client = new ApolloClient ({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <Routes>
      <>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/register" element={<Register />} />
      </>
    </Routes>
  );
}


export default App;
