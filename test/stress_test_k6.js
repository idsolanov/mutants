import http from 'k6/http'
import {sleep} from 'k6'
const uriApi= 'http://137.184.81.73'
export let options = {

    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    stages: [
        {duration: '1m', target:100},
        {duration: '2m', target:100},
        {duration: '1m', target:200},
        {duration: '2m', target:200},
        {duration: '1m', target:300},
        {duration: '2m', target:300},
        {duration: '1m', target:400},
        {duration: '2m', target:400},
        {duration: '1m', target:500},
        {duration: '2m', target:500},
        {duration: '1m', target:1000},
        {duration: '2m', target:1000},
        {duration: '1m', target:10000},
        {duration: '2m', target:10000},
        {duration: '1m', target:100000},
        {duration: '2m', target:100000},
        {duration: '1m', target:1000000},
        {duration: '5m', target:1000000},
        {duration: '1m', target:1000},
        {duration: '2m', target:1000},
        {duration: '1m', target:0},
        {duration: '2m', target:0},
        
    ]
}

export default () => {
    http.batch([
        ['GET', uriApi+'/stats']
    ])
    sleep(1)
}