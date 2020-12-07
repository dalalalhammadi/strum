import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";
import axios from "axios";
import { observer } from "mobx-react";

class UkuleleStore {
  ukuleles = [];
  loading = true;

  constructor() {
    makeObservable(this, {
      ukuleles: observable,
      loading: observable,
      fetchUkulele: action,
      createUkulele: action,
      updateUkulele: action,
      deleteUkulele: action,
    });
  }

  fetchUkulele = async () => {
    try {
      const response = await axios.get("http://localhost:8001/ukuleles");
      this.ukuleles = response.data;
      this.loading = false;
    } catch (error) {
      console.error("UkuleleStore -> fetchUkulele -> error", error);
    }
  };

  getUkuleleById = (ukuleleId) =>
    this.ukuleles.find((ukulele) => ukulele.id === ukuleleId);

  createUkulele = async (newUkulele, music) => {
    try {
      const formData = new FormData();
      for (const key in newUkulele) formData.append(key, newUkulele[key]);
      const res = await axios.post(
        `http://localhost:8001/musics/${music.id}/ukuleles`,
        formData
      );
      this.ukuleles.push(res.data);
      music.ukuleles.push({ id: res.data.id });
    } catch (error) {
      console.log("UkuleleStore -> createUkulele -> error", error);
    }
  };

  updateUkulele = async (updatedUkulele) => {
    try {
      const formData = new FormData();
      for (const key in updatedUkulele)
        formData.append(key, updatedUkulele[key]);
      await axios.put(
        `http://localhost:8001/ukuleles/${updatedUkulele.id}`,
        formData
      );
      const ukulele = this.products.find(
        (ukulele) => ukulele.id === updatedUkulele.id
      );
      for (const key in updatedUkulele) ukulele[key] = updatedUkulele[key];
      ukulele.image = URL.createObjectURL(updatedUkulele.image);

      for (const key in ukulele) ukulele[key] = updatedUkulele[key];
      ukulele.slug = slugify(ukulele.name);
    } catch (error) {
      console.log("UkuleleStore -> updateUkulele -> error", error);
    }
  };

  deleteUkulele = async (ukuleleId) => {
    try {
      await axios.delete(`http://localhost:8001/ukuleles/${ukuleleId}`);
      this.products = this.products.filter(
        (ukulele) => ukulele.id !== +ukuleleId
      );
    } catch (error) {
      console.log("UkuleleStore -> deleteUkulele -> error", error);
    }
  };
}

const ukuleleStore = new UkuleleStore();
ukuleleStore.fetchUkulele();
export default ukuleleStore;
