import {
  TOKEN_KEY,
 
} from '../constants'
import _ from 'lodash'

import browser from 'webextension-polyfill'

const hasToken = async () => {
  
}


const removeToken = async () => {}



const getInfo = () => {
  const info = {
    optsUpdatedAt: 0,
    listsUpdatedAt: 0,
  }
  return info
}











/**
 * latest sync logic
 * date: 2019-01-21
 *
 * options:
 *  - record the time when options are changed
 *  - get remote options updated time
 *  - if local time is later than remote upload local options to remote and set remote time, else if local time is before than remote download the remote options and set local time
 *
 * lists:
 *  - record each time of list be updated (UPDATE_LIST_BY_ID)
 *  - upload local operations to remote (include the time and save in server storage)
 *  - compare the latest updated time of each list
 *  - if local time is before than remote download that remote list
 *
 */
const refresh = async () => {

}

const login = async token => {

}


const init = async () => {

}

export default {
  getInfo,
  removeToken,
  hasToken,
  login,
  init,
  refresh,
}
