import Ajax from '../utils/ajax'
import {apiUrlConfig} from './ApiConfig'

class UserService {
  login (user) {
    let url = apiUrlConfig().getUser
    return Ajax({url: url, method: 'GET'}).then(response => response.json())
  }

  logout () {
    let url = apiUrlConfig().getUser
    return Ajax({url: url, method: 'GET'})// .then(response => response.json())
  }
}

// 实例化后再导出
export default new UserService()
