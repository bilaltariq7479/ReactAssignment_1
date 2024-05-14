import './App.css';
import Layout from './layout';
import HomePage from './pages/homepage';
import Aboutus from './pages/aboutus';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App"> 
      <Layout>
      <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about_us" exact element={<Aboutus />} />
          {/* <Route path="/services" exact element={<ContactUs />} />
          <Route path="/sign_up" exact element={<SignUp />} /> */}
        </Routes>
        {/* <HomePage />
        <Aboutus /> */}
      </Layout>
    </div>
  );
}

export default App;
