import { useState } from "react";
import Modal from "react-modal";
import { CreateButtonStyled } from "../../styles";
import ukuleleStore from "../../stores/ukuleleStore";

const UkuleleModal = ({ music, isOpen, closeModal, oldUkulele }) => {
  const [ukulele, setUkulele] = useState(
    oldUkulele ?? {
      name: "",
      price: 0,
      description: "",
      image: "",
    }
  );

  const handleChange = (event) => {
    setUkulele({ ...ukulele, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (oldUkulele) ukuleleStore.updateUkulele(ukulele);
    else ukuleleStore.createUkulele(ukulele, music);
    // ukuleleStore[oldUkulele ? "updateUkulele" : "createUkulele"](
    //   ukulele,
    //   music

    closeModal();
  };

  const handleImage = (event) =>
    setUkulele({ ...ukulele, image: event.target.files[0] });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="ukulele Modal"
    >
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label> Name </label>
            <input
              value={ukulele.name}
              name="name"
              onChange={handleChange}
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-6">
            <label> Price </label>
            <input
              value={ukulele.price}
              name="price"
              onChange={handleChange}
              type="number"
              min="1"
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <label> Description </label>
          <input
            value={ukulele.description}
            name="description"
            onChange={handleChange}
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label> Image </label>
          <input
            value={ukulele.image}
            name="image"
            onChange={handleImage}
            type="file"
            className="form-control"
          />
        </div>
        <CreateButtonStyled type="submit">
          {oldUkulele ? "update" : "create "}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default UkuleleModal;
