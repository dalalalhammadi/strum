import { useState } from "react";
import Modal from "react-modal";
import { CreatButtonStyled } from "../../styles.js";
import ukuleleStore from "../../stores/ukuleleStore";

const UkuleleModal = ({ isOpen, closeModal, oldUkulele }) => {
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
    event.preventDefult();
    ukuleleStore[oldUkulele ? "updataUkulele" : "createUkulele"](ukulele);
    closeModal();
  };

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
            onChange={handleChange}
            type="text"
            className="form-control"
          />
        </div>
        <CreatButtonStyled type="submit">
          {oldUkulele ? "update" : "create "}
        </CreatButtonStyled>
      </form>
    </Modal>
  );
};

export default UkuleleModal;
