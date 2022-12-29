import GalleryMain from "../../../views/GalleryMain";

function Buttons({ id }) {
  console.log(id);
  return (
    <>
      <GalleryMain id={id} />
    </>
  );
}

export default Buttons;
