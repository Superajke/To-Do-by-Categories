import { useCategories } from "../context/categoriesContext.jsx";
import { useNavigate } from "react-router-dom";
import AddCategory from "./AddCategory";
import "../css/sidebar.css";

function Sidebar() {
  const navigate = useNavigate();
  const { categories } = useCategories();

  return (
    <nav className="sidebar">
      <h1 onClick={() => navigate("/")} className="sidebar__title">
        To do by Category
      </h1>
      <ul className="sidebar__list">
        <section className="sidebar__categories">
          <li className="sidebar__categories_title">Categorías</li>
          {categories.length > 0 ? (
            categories.map((categoria) => (
              <div className="categories__list" key={categoria.cat_id}>
                <li
                  onClick={() => {
                    navigate(`/todo/${categoria.cat_id}`);
                  }}
                  className="sidebar__category"
                >
                  {categoria.cat_nombre}
                </li>
              </div>
            ))
          ) : (
            <p className="sidebar__nocat">No hay categorias disponibles</p>
          )}
          <li className="sidebar__button">
            <AddCategory />
          </li>
        </section>
        <li className="sidebar__designer">
          Diseñado por <br /> <span>Samuel Ignacio Arango</span>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
