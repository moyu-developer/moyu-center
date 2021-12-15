import { Models } from "@rematch/core";
import commonModel from "./common";
import type { LoginModel } from "../pages/login/model";

export interface RootModel extends Models<RootModel> {
  common: typeof commonModel;
  login: LoginModel;
}

export const globalModels: Pick<RootModel, "common"> = {
  common: commonModel,
};
