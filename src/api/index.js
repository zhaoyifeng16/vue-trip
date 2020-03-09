import axios from 'axios'

export default {
  // 获取受欢迎的景点
  getPopular() {
    let url = "http://yapi.demo.qunar.com/mock/86871/getPopular"
    return axios.get(url)
  },

  // 获取类别
  getCategory() {
    let url = "http://yapi.demo.qunar.com/mock/86871/getCategory"
    return axios.get(url)
  },

  // 获取详情
  getDetail(id) {
    let url = "http://yapi.demo.qunar.com/mock/86871/getDetail"
    return axios.post(url,id)
  },

  // 获取酒店列表
  getHotels(id) {
    let url = "http://yapi.demo.qunar.com/mock/86871/getHotels"
    return axios.post(url,id)
  }
}