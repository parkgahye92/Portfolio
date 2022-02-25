import React from 'react';
import Header from './components/Header';
import Main from './views/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Route path="/" component={Main} exact ></Route>
      <Footer />
    </div>
  );
}

export default App;