import { useCategories } from "../context/categoriesContext.jsx";
import { useNavigate } from "react-router-dom";
import AddCategory from "./AddCategory";
import "../css/sidebar.css";

function Sidebar() {
  const navigate = useNavigate();
  const { categories, deleteCategory } = useCategories();

  return (
    <nav className="sidebar">
      <h1 className="sidebar__title">To do</h1>
      <ul className="sidebar__list">
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
              <li
                onClick={() => deleteCategory(categoria.cat_id)}
                style={{ cursor: "pointer" }}
              >
                X
              </li>
            </div>
          ))
        ) : (
          <p>No hay categorias</p>
        )}
        <li>
          <AddCategory />
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
