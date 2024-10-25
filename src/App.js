import React from 'react';
import './commonResource/css/bootstrap.css'
import './commonResource/css/styles.css'
import Header from './Header'
import Alert from './Alert'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Footer from './Footer'
import AppleYoutube from './commonResource/AppleYoutube/AppleYoutube';



function App() {
  return (
    <div className="App">
      <Header />
      <Alert />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      {/* <AppleYoutube /> */}
      <Footer />
    </div>
  );
}

export default App;
