/*
*mock数据的入口js mock数据接口 生成随机数据拦截js
*/
import Mock from 'mockjs';
import HomeData from './datahome.json';
import NavData from './datanav.json';
import TopicData from './datatopic.json';

Mock.mock('/homedata',{
  code: 0 ,
  data: HomeData
});
Mock.mock('/navdata',{
  code: 0,
  data: NavData
});
Mock.mock('/topicdata',{
  code: 0,
  data: TopicData
})


