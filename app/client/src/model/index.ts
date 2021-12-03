
import { init, RematchDispatch, RematchRootState } from '@rematch/core'
import rematchRuntimeStatus, { ExtraModelsFromLoading } from "@rematch/loading"
import { models } from './connect'
import type { RootModel } from './connect'


const store = init<RootModel, ExtraModelsFromLoading<RootModel>>({
  models,
  plugins: [rematchRuntimeStatus()]
});
export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, ExtraModelsFromLoading<RootModel>>;

export default store