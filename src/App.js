import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { routerPath } from './util/constant.js'
import { Products } from './components/products/products'
import { User } from './components/user/user'
import { Header } from './containers/layout/header/header'
import { Footer } from './containers/layout/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={routerPath.root} element={<Products />} />
        <Route path={routerPath.user} element={<User />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
