import { useEffect, useState } from "react";

const useCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = () => {
      const subjects = localStorage.getItem("subjects");
      const parsedCategories = subjects ? JSON.parse(subjects) : [];
      setCategories(parsedCategories);
    };
    getCategories();
  }, []);

  const createCategories = (category) => {
    const storedCategories = localStorage.getItem("subjects");
    let currentCategories = storedCategories
      ? JSON.parse(storedCategories)
      : [];

    const newCategoryId =
      currentCategories.length > 0
        ? currentCategories[currentCategories.length - 1].cat_id + 1
        : 1;
    const updatedCategories = [
      ...currentCategories,
      {
        cat_id: newCategoryId,
        cat_nombre: category.category_name,
        fechaCreacion: new Date().toISOString(),
        fechaModificacion: new Date().toISOString(),
        todos: [],
      },
    ];
    setCategories(updatedCategories);
    localStorage.setItem("subjects", JSON.stringify(updatedCategories));
  };

  const deleteCategory = (id) => {
    const storedData = localStorage.getItem("subjects");
    let currentData = storedData ? JSON.parse(storedData) : [];

    const updatedData = currentData.filter((categoria) => categoria.cat_id !== id);

    localStorage.setItem("subjects", JSON.stringify(updatedData));
    setCategories(updatedData);
  };

  return { categories, createCategories, deleteCategory };
};

export default useCategories;
