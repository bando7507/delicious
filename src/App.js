
import Pages from "./pages/Pages";
import { BrowserRouter } from 'react-router-dom'
import Category from "./components/Category";
function App() {
  return (

    <BrowserRouter>
    <Category />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
