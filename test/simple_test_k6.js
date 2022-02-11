import http from 'k6/http'
import {sleep} from 'k6'

export let options = {

    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    vus: 100,
    duration: '10s'
}

export default () => {
    http.get('http://localhost:3000/stats')
}