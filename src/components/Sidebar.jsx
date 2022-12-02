import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // вывод списка категорий
  const sideState = useSelector((initialState) => initialState);

  return sideState.categories.map((el) => {
    return (
      <Link to={`category/${el.id}`}>
        {" "}
        <div>{el.name}</div>
      </Link>
    );
  });
};

export default Sidebar;
