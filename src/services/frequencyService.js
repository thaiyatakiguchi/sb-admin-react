import React, { Component } from 'react';
import history from '../core/history';

export default function getConfidentialValue (keyword) {
    // var keyword = 'abac';
    var url = 'http://174.138.26.245:5003/Thai_segment/'+ keyword;
    
    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            console.log('result')
            let result = data;
            console.log(result, 'Result data');
        })
        .then(()=> history.push('/frequencyAnalytic'))
.catch(function(error) {
    console.log(error);
}); 
}