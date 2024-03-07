import { useEffect, useId, useState } from "react";
import { Collection } from "./collection/index";
import "./index.scss";

function App() {
  const [collections, setCollections] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const fetchPhotos = () => {
    setIsLoading(true);

    const category = categoryId ? `category=${categoryId}` : "";

    fetch(
      `https://65e8c2fd4bb72f0a9c50559f.mockapi.io/photo_collections?page=${page}&limit=3&${category}`
    )
      .then((res) => res.json())
      .then((json) => {
        setCollections(json);
      })
      .catch((err) => {
        console.warn(err);
        alert("Unknown error");
      })
      .finally(() => setIsLoading(false));
  };

  const fetchCategories = () => {
    fetch("https://65e8c2fd4bb72f0a9c50559f.mockapi.io/categories")
      .then((res) => res.json())
      .then((json) => {
        setCategories(json);
        console.log(json);
      })
      .catch((err) => {
        console.warn(err);
        alert("Unknown error");
      });
  };

  useEffect(() => {
    fetchPhotos();
  }, [ categoryId, page ]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const onClickCategory = (category) => {
    setCategoryId(category);
  };

  const onClickPage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          {categories.map((obj, index) => (
            <li
              className={`${index === categoryId ? "active" : ""}`}
              key={obj.name}
              onClick={() => onClickCategory(index)}
            >
              {obj.name}
            </li>
          ))}
        </ul>
        <input
          className="search-input"
          placeholder="Поиск по названию"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="content">
        {isLoading ? (
          <h2>Идет загрузка...</h2>
        ) : (
          collections
            .filter((obj) => {
              return obj.name.toLowerCase().includes(searchValue.toLowerCase());
            })
            .map((item) => (
              <Collection
                key={item.name}
                name={item.name}
                images={item.photos}
              />
            ))
        )}
      </div>
      <ul className="pagination">
        {[...Array(3)].map((_, i) => (
          <li
            key={i}
            onClick={() => setPage(i+1)}
            className={`${page === i + 1 ? "active" : ""}`}
          >
            {i + 1}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
