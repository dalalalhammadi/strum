import React from "react";
import { makeAutoObservable } from "mobx";
import instance from "./instance";

class SignupStore {
  constructor() {
    makeAutoObservable(this);
  }

  signup = async (userData) => {
    try {
      await instance.post("/signup", userData);
    } catch (error) {
      console.log("SignupStore -> signup -> error", error);
    }
  };
}

const signupStore = new SignupStore();

export default signupStore;
