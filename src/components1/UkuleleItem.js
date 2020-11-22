import { UkuleleWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import UpdatedButton from "./buttons/UpdateButton";
import { Link } from "react-router-dom";

const UkuleleItem = ({ ukulele }) => {
  return (
    <UkuleleWrapper>
      <Link to={`/ukulele/${ukulele.slug}`}>
        <img src={ukulele.image} />
      </Link>
      <p>{ukulele.name} </p>
      <p className="ukulele-price">{ukulele.price} KD </p>
      <UpdatedButton ukulele={ukulele} />
      <DeleteButton ukuleleId={ukulele.id} />
    </UkuleleWrapper>
  );
};
export default UkuleleItem;
