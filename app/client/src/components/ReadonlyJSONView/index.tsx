import ReactJson from "react-json-view"
import type { FC} from 'react';
import { useMemo } from 'react';

import styled from './index.module.less'

export interface ReadonlyJSONViewProps {
  json: string | Record<string, any>
}

export default ((props) => {

  /**
   * JSON 字符串
   */
  const json = useMemo(() => {
    if (typeof props.json === 'string') {
      try {
        return JSON.parse(props.json)
      } catch (error) {
        console.error(`ReadonlyJSONView Props.json is not JSONString...`)        
      }
    }
    return props.json
  }, [props.json])

  return <div className={styled.readonlyView}>
    <ReactJson src={json} />
  </div>
})  as FC<ReadonlyJSONViewProps>