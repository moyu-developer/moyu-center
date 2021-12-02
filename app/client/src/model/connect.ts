
import { Models } from '@rematch/core'
import commonModel from './common'

export interface RootModel extends Models<RootModel> {
	common: typeof commonModel
}

export const models: RootModel = { 
	common: commonModel
 }