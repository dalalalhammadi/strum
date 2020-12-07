import React from "react";
import { Redirect, useParams } from "react-router-dom";
import musicStore from "../stores/musicStore";
import { DetailWrapper } from "../styles";
import { observer } from "mobx-react";
import AddButton from "./buttons/AddButton";
import ukuleleStore from "../stores/ukuleleStore";
import UkuleleList from "./UkuleleList";

const MusicDetail = () => {
  const { musicSlug } = useParams();

  const music = musicStore.ukuleles.find((_music) => _music.slug === musicSlug);

  if (!music) return <Redirect to="/musics" />;

  const ukuleles = music.ukuleles.map((ukulele) =>
    ukuleleStore.getUkuleleById(ukulele.id)
  );

  return (
    <>
      <DetailWrapper>
        <h1>{music.name}</h1>
        <img src={music.image} alt={music.name} />
      </DetailWrapper>
      <UkuleleList ukuleles={music.ukuleles} />
      <AddButton music={music} />
    </>
  );
};

export default observer(MusicDetail);
