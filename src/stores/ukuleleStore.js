import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

class UkuleleStore {
  products = [];

  constructor() {
    makeObservable(this, {
      products: observable,
      fetchUkulele: action,
      createUkulele: action,
      updateUkulele: action,
      deleteUkulele: action,
    });
  }

  fetchUkulele = async () => {
    try {
      const response = await axios.get("http://localhost:8001/products");
      this.products = response.data;
    } catch (error) {
      console.error("UkuleleStore -> fetchUkulele -> error", error);
    }
  };

  createUkulele = async (newUkulele) => {
    try {
      const formData = new FormData();
      for (const key in newUkulele) formData.append(key, newUkulele[key]);
      const res = await axios.post("http://localhost:8001/products", formData);
      this.products.push(res.data);
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
        `http://localhost:8001/products/${updatedUkulele.id}`,
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
      await axios.delete(`http://localhost:8001/products/${ukuleleId}`);
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
