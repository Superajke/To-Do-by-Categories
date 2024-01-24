import Sidebar from "./components/sidebar";
import RoutesDir from './Routes'

function App() {
  return (
    <section className="App">
      <Sidebar />
      <section className="page">
        <RoutesDir/>
      </section>
    </section>
  );
}

export default App;
