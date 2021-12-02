import { createModel } from "@rematch/core";
import { RootModel } from "./connect";


interface CommonState {
  token: string
}

const initializeCommonState: CommonState = {
  token: '1'
}

export default createModel<RootModel>()({
  name: 'common',
  state: initializeCommonState,
  reducers: {
  },
})