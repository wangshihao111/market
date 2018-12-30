import axios from 'axios'

export default {
  getVerificationCode(data) {
    const url = '';
    return axios.get(url, {
      params: data
    })
  },
  accountRegister(data) {
    const url = '';
    return axios.post(url, data);
  }
}