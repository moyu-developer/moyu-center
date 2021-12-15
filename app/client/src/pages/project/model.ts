import { createModel } from "@rematch/core";
import { RootModel } from "src/model/connect";
import store from "src/model";

interface ProjectState {}

const initializeProjectState: ProjectState = {};

const projectModel = createModel<RootModel>()({
  state: initializeProjectState,
  effects: (dispatch) => ({}),
  reducers: {},
});

store.addModel({ name: "login", ...projectModel });
