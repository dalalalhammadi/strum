import React from "react";
import { Redirect, useParams } from "react-router-dom";
import musicStore from "../stores/musicStore";
import { DetailWrapper } from "../styles";
import { observer } from "mobx-react";

const MusicDetail = () => {
  const { musicSlug } = useParams();

  const music = musicStore.products.find((_music) => _music.slug === musicSlug);

  if (!music) return <Redirect to="/music" />;

  return (
    <DetailWrapper>
      <h1>{music.name}</h1>
      <img src={music.image} alt={music.name} />
    </DetailWrapper>
  );
};

export default observer(MusicDetail);
