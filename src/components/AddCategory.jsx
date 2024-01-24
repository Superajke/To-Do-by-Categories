import { useForm } from "react-hook-form";
import "../css/addCategory.css";
import { useState } from "react";
import { useCategories } from "../context/categoriesContext.jsx";

function AddCategory() {
  const { register, handleSubmit } = useForm();
  const [popup, setPopup] = useState(false);
  const { createCategories } = useCategories();

  const onSubmit = handleSubmit((data) => {
    createCategories(data);
    setPopup(!popup);
  });

  return (
    <section className="add">
      <button
        onClick={() => {
          setPopup(!popup);
        }}
      >
        Add Category
      </button>
      {popup && (
        <section className="add__popup">
          <form onSubmit={onSubmit} className="add__form">
            <label>Nombre de la categoría</label>
            <input type="text" {...register("category_name")} />

            <section className="popup__buttons">
              <button type="submit" className="submit_button">
                Crear Categoría{" "}
              </button>
              <button
                type="submit"
                className="submit_button"
                onClick={() => {
                  setPopup(!popup);
                }}
              >
                Volver{" "}
              </button>
            </section>
          </form>
        </section>
      )}
    </section>
  );
}

export default AddCategory;
