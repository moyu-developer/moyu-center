import type { RematchDispatch, RematchRootState } from "@rematch/core";
import { init } from "@rematch/core";
import type { ExtraModelsFromLoading } from "@rematch/loading";
import rematchRuntimeStatus from "@rematch/loading";
import { globalModels } from "./connect";
import type { RootModel } from "./connect";

const store = init<RootModel, ExtraModelsFromLoading<RootModel>>({
  models: globalModels,
  plugins: [rematchRuntimeStatus()],
});
export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<
  RootModel,
  ExtraModelsFromLoading<RootModel>
>;

export default store;
