import { useCategories } from "../context/categoriesContext.jsx";
import { useNavigate } from "react-router-dom";
import AddCategory from "./AddCategory";
import "../css/sidebar.css";

function Sidebar() {
  const navigate = useNavigate();
  const { categories } = useCategories();

  return (
    <nav className="sidebar">
      <h1 className="sidebar__title">To do by Category</h1>
      <ul className="sidebar__list">
        <section>
          {categories.length > 0 ? (
            categories.map((categoria) => (
              <div key={categoria.cat_id}>
                <li
                  onClick={() => {
                    navigate(`/todo/${categoria.cat_id}`);
                  }}
                  className="sidebar__categories"
                >
                  {categoria.cat_nombre}
                </li>
              </div>
            ))
          ) : (
            <p>No hay categorias</p>
          )}
          <li className="sidebar__button">
            <AddCategory />
          </li>
        </section>
        <li className="sidebar__designer">Diseñado por <br/> <span>Samuel Ignacio Arango</span></li>
      </ul>
    </nav>
  );
}

export default Sidebar;
