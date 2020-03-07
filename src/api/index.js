import axios from 'axios'
export default {
    getPopular() {
        let url = "http://yapi.demo.qunar.com/mock/86871/getPopular"
        return axios.get(url)
    },
    getHomeScoll() {
        let url = "http://yapi.demo.qunar.com/mock/86871/getHomeScroll"
        return axios.get(url)
    }
}