import React, { Component } from 'react';
import history from '../core/history';

export default function getConfidentialValue (keyword) {
    // var keyword = 'abac';
    var url = 'http://174.138.26.245:5003/Thai_segment/'+ keyword;
    
    fetch(url)
        .then((resp) => resp.json())
        .then(function(data) {
            let result = data;
            console.log(result, "from service");
            return result;
            console.log(result);
        })
        // .then(()=> history.push('/frequencyAnalytic'))
}