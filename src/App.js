import './App.css';
import Layout from './layout';
import HomePage from './pages/homepage';
import Aboutus from './pages/aboutus';
function App() {
  return (
    <div className="App"> 
      <Layout>
        <HomePage />
        <Aboutus />
      </Layout>
    </div>
  );
}

export default App;
