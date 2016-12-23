
import React, { Component } from 'react';
 
// App component - represents the whole app
export default class App extends Component {
  
    constructor(props) {
     console.log("App constructor");
    super(props);
  }

  render() {
    return (
    <document type="xml/freeswitch-httapi">
         <params>
           <someparam>abc</someparam>
         </params>
         <variables>
           <somevar>efg</somevar>
         </variables>
         <work>
          <log data-action="null"> end httpapi</log>
         </work>
    </document>
    );
  }
}


