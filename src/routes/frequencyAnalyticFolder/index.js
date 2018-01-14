import React from 'react';
import FrequencyAnalytic from './frequencyPage';
//import page content and return as content (page)with path
export default {

  path: '/frequencyAnalytic',

  action() {
    return <FrequencyAnalytic />;
  },

};
