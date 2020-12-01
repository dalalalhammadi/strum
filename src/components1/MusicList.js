import musicStore from "../stores/musicStore";
import { ListWrapper } from "../styles";
import MusicItem from "./MusicItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { observer } from "mobx-react";

const MusicList = (props) => {
  const [query, setQuery] = useState("");

  const filteredMusic = musicStore.products.filter((music) =>
    music.name.toLowerCase().includes(query.toLowerCase())
  );
  const musicList = filteredMusic.map((music) => <MusicItem music={music} />);

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{musicList} </ListWrapper>;
    </>
  );
};

export default observer(MusicList);
