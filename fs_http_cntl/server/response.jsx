
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
         <params></params>
         <work>
          <playback data-name= {this.props.test} data-file={this.props.uu} data-error-file="http://my.com/sounds/invalid.wav" data-input-timeout="5000">
           <bind data-strip="#">~\d+#</bind>
          </playback>
         </work>
    </document>
    );
  }
}


