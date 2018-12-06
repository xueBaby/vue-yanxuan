/**
 * 计算属性 计算state的数据
 */
export default{
  // navList(state){
  //   let arr = []
  //   state.navData.forEach((item,index) => {
  //     arr.push(item.name) //添加名字
  //   })
  //   return arr //遍历的名字添加给arr
  // },
  navInfo(state){
    let navInfo = []
    console.log(state);
    state.navData.forEach((item, index) => {
      navInfo.push({name: item.name,url:item.wapBannerUrl,list:item.subCateList})
    })
    // 外面获取的是return出去的值
    return navInfo //将遍历的名字、图片地址、list：item.subCateList下面小图片的主数组
  }
  


}
