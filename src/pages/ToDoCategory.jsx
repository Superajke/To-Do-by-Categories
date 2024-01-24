import "../css/toDo.css";
import { useCategories } from "../context/categoriesContext.jsx";
import { useParams } from "react-router-dom";

function ToDoCategory() {
  const cat = useParams();
  const { categories } = useCategories();

  const getCategory = categories.find(
    (categoria) => categoria.cat_id === parseInt(cat.cat_id)
  );

  return (
    <section className="todo">
      <h1 className="todo__title">Lista To Do - {getCategory?.cat_nombre} -</h1>
      <p>Hola</p>
    </section>
  );
}

export default ToDoCategory;
