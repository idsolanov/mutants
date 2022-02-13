import http from 'k6/http'
import {sleep,check} from 'k6'
const uriApi= 'http://137.184.81.73'
export let options = {

    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    stages: [
        {duration: '10s', target:100},
        {duration: '1m', target:100},
        {duration: '10s', target:10000},
        {duration: '5m', target:10000},
        {duration: '10s', target:100},
        {duration: '1m', target:100},
        {duration: '1s', target:0},
    ]
}

export default () => {
    /*const response = http.post(uriApi+'/mutant',{
        'dna':['ATGCGA','CAGTGC','TTATGT','AGAAGG','CACCTA','TCACTG']
    })
    check(response,{
        "post status was 200": response.status == "200"
    })

    const response2 = http.get(uriApi+'/stats')
    check(response2,{
        'get is status 200': (r) => r.status === 200,
        'get verify content': (r) => r.body.includes('count_mutant_dna')
    })*/

    const response3 = http.post(uriApi+'/mutant',{
        'dna':['TTGCAA','CAGTGC','TTATGT','AGAAGG','CCCCTA','TCACTG']
    })
    check(response3,{
        "post status was 403": response3.status == "403"
    })

    sleep(0.1)
}