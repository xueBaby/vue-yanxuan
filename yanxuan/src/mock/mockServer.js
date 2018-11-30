/*
*mock数据的入口js mock数据接口 生成随机数据拦截js
*/
import Mock from 'mockjs';
import homeData from './datahome.json';
import navData from './datanav.json';
import topicData from './datatopic.json';

Mock.mock('/homeData',{
  code: 0 ,
  data: homeData
});
Mock.moock('/navData',{
  code: 0,
  data: navData
});
Mock.mock('/topicData',{
  code: 0,
  data: topicData
})


