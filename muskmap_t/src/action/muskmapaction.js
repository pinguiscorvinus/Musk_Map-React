//引入axios接收
import axios from 'axios'

// 取得口罩地圖資料
export const getmuskmapdata = (data) => ({
  type: 'GET_MUSKMAPSDATA',
  value: data,
})
export const fetchMuskmapdata = () => {
  return (dispatch) => {
    axios
      .get(
        'https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json'
      )
      .then(function (response) {
        // Success
        const muskmap = response.data
        dispatch(getmuskmapdata(muskmap))
      })
      .catch(function (error) {
        // Error
        console.log(error)
      })
  }
}
// 取得地點選擇
export const getcurrentcity = (city) => ({
  type: 'SENT_LOCATIONDATA',
  value: city,
})
export const passcurrentcity = (city) => {
  return (dispatch) => {
    dispatch(getcurrentcity(city))
  }
}
