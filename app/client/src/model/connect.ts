import type { Models } from "@rematch/core";
import commonModel from "./common";
import type { LoginModel } from "../pages/login/model";
import type { ProjectModel } from "src/pages/project/model";


export interface RootModel extends Models<RootModel> {
  common: typeof commonModel;
  login: LoginModel;
  project: ProjectModel
}

export const globalModels: Pick<RootModel, "common"> = {
  common: commonModel,
};
