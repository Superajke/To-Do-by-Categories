import "../css/toDo.css";
import { useCategories } from "../context/categoriesContext.jsx";
import { useNavigate, useParams } from "react-router-dom";

function ToDoCategory() {
  const navigate = useNavigate();
  const cat = useParams();
  const { categories } = useCategories();

  const getCategory = categories.find(
    (categoria) => categoria.cat_id === parseInt(cat.cat_id)
  );

  if (getCategory === undefined) {
    navigate("/")
  }

  return (
    <section className="todo">
      <h1 className="todo__title">To Do {getCategory?.cat_nombre}</h1>
      <p>Hola</p>
    </section>
  );
}

export default ToDoCategory;
