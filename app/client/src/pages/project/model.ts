import { createModel } from "@rematch/core";
import type { RootModel } from "src/model/connect";
import store from "src/model";

interface ProjectState {}

const initializeProjectState: ProjectState = {};

const projectModel = createModel<RootModel>()({
  state: initializeProjectState,
  effects: (dispatch) => ({
    get
  }),
  reducers: {},
});

store.addModel({ name: "login", ...projectModel });
