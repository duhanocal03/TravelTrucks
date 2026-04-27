import CamperCard from "../CamperCard/CamperCard";

function CamperList() {
  const fakeData = [1, 2, 3];

  return (
    <>
      {fakeData.map((item) => (
        <CamperCard key={item} />
      ))}
    </>
  );
}

export default CamperList;