import { UkuleleWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import UpdatedButton from "./buttons/UpdateButton";
import { Link } from "react-router-dom";

const MusicItem = ({ music }) => {
  return (
    <UkuleleWrapper>
      <Link to={`/ukulele/${music.slug}`}>
        <img src={music.image} />
      </Link>
      <p>{music.name} </p>
      <UpdatedButton music={music} />
      <DeleteButton musicId={music.id} />
    </UkuleleWrapper>
  );
};
export default MusicItem;
