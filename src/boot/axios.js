import Vue from 'vue'
import axios from 'axios'
import ApiService from 'src/services/api.service'
import { TokenService } from 'src/services/token.service'

Vue.prototype.$axios = axios

ApiService.init(process.env.ROOT_API)

if(TokenService.getToken()) {
  ApiService.setHeader()
}