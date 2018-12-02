/**
 * 直接更新状态state
 */

import {
  RECIEVE_HOMEDATA
} from './mutation-types'

export default {
  [RECIEVE_HOMEDATA](state, {homeData}){
    state.homeData = homeData
  }
  
}
