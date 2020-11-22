import ukuleleStore from "../stores/ukuleleStore";
import { ListWrapper } from "../styles";
import UkuleleItem from "./UkuleleItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { observer } from "mobx-react";
import AddButton from "./buttons/AddButton";

const UkuleleList = (props) => {
  const [query, setQuery] = useState("");

  const filteredUkulele = ukuleleStore.products.filter((ukulele) =>
    ukulele.name.toLowerCase().includes(query.toLowerCase())
  );
  const ukuleleList = filteredUkulele.map((ukulele) => (
    <UkuleleItem ukulele={ukulele} key={ukulele.id} />
  ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <AddButton />
      <ListWrapper>{ukuleleList} </ListWrapper>;
    </>
  );
};

export default observer(UkuleleList);
