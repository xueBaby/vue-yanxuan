/**
 *  发送异步ajax请求 提交到mutation里面 间接更新状态
 */
import {
  RECIEVE_HOMEDATA
} from './mutation-types'
import {reqHomedata} from '../api'
export default {
  async getHomedata({commit}){
    console.log(1111)
    const result = await reqHomedata();
    if(result.code === 0){
      const homeData = result.data;
      commit(RECIEVE_HOMEDATA,{homeData})
    }
    
  }


}
