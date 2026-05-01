import { useDispatch } from "react-redux";
import { loadMore } from "../../../features/campers/campersSlice";

function LoadMoreButton() {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(loadMore())}>
      Load More
    </button>
  );
}

export default LoadMoreButton;