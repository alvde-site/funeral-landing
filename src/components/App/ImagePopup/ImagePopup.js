import Swiper from "../Swiper/Swiper";

function ImagePopup(props) {
  function handleOverlayClose(e) {
    console.log(e.currentTarget, e.target)
    props.onOverlayClose(e)
  }
  return (
    <div
      className={`popup popup_handle_${props.name} ${
        props.portfolioImage.isOpen && "popup_opened"
      }`}
      onClick={handleOverlayClose}
    >
      <div
        className={`image-viewing${
          props.portfolioImage.slideSrc && " image-viewing_slider"
        }`}
      >
        <button
          className="popup__close popup__close_type_image-viewing"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}
        >
          &#10006;
        </button>
        {props.portfolioImage.slideSrc ? (
          <Swiper slideImages={props.portfolioImage.slideSrc} />
        ) : (
          <figure className="image-viewing__img-card">
            <img
              src={props.portfolioImage.src}
              alt={"фото"}
              className="image-viewing__image"
            />
          </figure>
        )}
      </div>
    </div>
  );
}

export default ImagePopup;
