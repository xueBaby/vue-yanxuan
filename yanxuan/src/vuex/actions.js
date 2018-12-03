/**
 *  发送异步ajax请求 提交到mutation里面 间接更新状态
 */
import {
  RECIEVE_HOMEDATA,
  RECEIVE_NAVDATA
} from './mutation-types'
import {
  reqHomedata,
  reqNavData
} from '../api'
export default {
  async getHomedata({commit}){
    const result = await reqHomedata();
    if(result.code === 0){
      const homeData = result.data;
      commit(RECIEVE_HOMEDATA,{homeData})
    }
  },
  async getNavData({commit}){
    const result = await reqNavData();
    if(result.code === 0){
      const navData = result.data;
      commit(RECEIVE_NAVDATA,{navData})
    }
  }


}
