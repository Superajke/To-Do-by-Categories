import useCategories from "../hooks/useCategories.jsx";
import AddCategory from "./AddCategory";
import "../css/sidebar.css";
import { useEffect } from "react";

function Sidebar() {
  const { categories, deleteCategory } = useCategories();

  useEffect(() => {
    console.log("CAMBIÓ");
  }, [categories]);

  return (
    <nav className="sidebar">
      <h1 className="sidebar__title">To do</h1>
      <ul className="sidebar__list">
        {categories.length > 0 ? (
          categories.map((categoria) => (
            <div key={categoria.id}>
              <li className="sidebar__categories">{categoria.nombre}</li>
              <li
                onClick={() => deleteCategory(categoria.id)}
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
