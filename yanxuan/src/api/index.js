/**
 * 发送ajax
 */
import ajax from './ajax';
export const reqHomedata = () => ajax('/homedata');
export const reqNavData = () => ajax('/navdata'); //地址要和mockserver的地址对应
export const reqTopicData = () => ajax('/topicdata');
