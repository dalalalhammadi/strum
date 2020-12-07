import { makeObservable, observable, action } from "mobx";
import slugify from "react-slugify";
import axios from "axios";

class MusicStore {
  musics = [];

  constructor() {
    makeObservable(this, {
      musics: observable,
      fetchMusic: action,
    });
  }

  fetchMusic = async () => {
    try {
      const response = await axios.get("http://localhost:8001/musics");
      this.musics = response.data;
    } catch (error) {
      console.error("MusicStore -> fetchMusic -> error", error);
    }
  };
}

const musicStore = new MusicStore();
musicStore.fetchMusic();
export default musicStore;
