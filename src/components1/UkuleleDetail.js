import React from "react";
import { Redirect, useParams } from "react-router-dom";
import ukuleleStore from "../stores/ukuleleStore";
import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { observer } from "mobx-react";

const UkuleleDetail = () => {
  const { ukuleleSlug } = useParams();

  const ukulele = ukuleleStore.products.find(
    (_ukulele) => _ukulele.slug === ukuleleSlug
  );

  if (!ukulele) return <Redirect to="/ukulele" />;

  return (
    <>
      <DetailWrapper>
        <h1>{ukulele.name}</h1>
        <img src={ukulele.image} alt={ukulele.name} />
        <p> {ukulele.description}</p>
        <p> {ukulele.price}KD</p>
        <DeleteButton ukuleleId={ukulele.id} />
      </DetailWrapper>
    </>
  );
};

export default observer(UkuleleDetail);
