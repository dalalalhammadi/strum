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
    const response = await axios.get("http://localhost:8000/products");
    this.products = response.data;
  };

  createUkulele = (newUkulele) => {
    newUkulele.id = this.products[this.products.length - 1].id + 1;
    newUkulele.slug = slugify(newUkulele.name);
    this.products.push(newUkulele);
  };

  updateUkulele = (updatedUkulele) => {
    const ukulele = this.products.find(
      (ukulele) => ukulele.id === updatedUkulele.id
    );
    for (const key in ukulele) ukulele[key] = updatedUkulele[key];
    ukulele.slug = slugify(ukulele.name);
  };

  deleteUkulele = async (ukuleleId) => {
    try {
      await axios.delete(`http://localhost:8000/products/${ukuleleId}`);
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
