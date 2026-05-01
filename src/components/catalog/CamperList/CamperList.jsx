import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCampers } from "../../../features/campers/campersSlice";
import CamperCard from "../CamperCard/CamperCard";

function CamperList() {
  const dispatch = useDispatch();
  const { items = [], isLoading } = useSelector(
    (state) => state.campers || {}
  );

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <>
      {Array.isArray(items) &&
        items.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}

      {isLoading && <p>Loading...</p>}
    </>
  );
}

export default CamperList;