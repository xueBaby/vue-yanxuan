/**
 * 直接更新状态state
 */

import {
  RECIEVE_HOMEDATA,
  RECEIVE_NAVDATA,
  RECEIVE_TOPICDATA
} from './mutation-types'

export default {
  [RECIEVE_HOMEDATA](state, {homeData}){
    state.homeData = homeData
  },
  [RECEIVE_NAVDATA](state,{navData}){
    state.navData = navData.categoryL1List
  },
  [RECEIVE_TOPICDATA](state,{topicData}){
    console.log(topicData);
    state.topicData = topicData
  }
  
  
}
