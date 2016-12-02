import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import ReactDOMServer from 'react-dom/server'
//var xml2js = require('xml2js'); 
//var builder = new xml2js.Builder(); 
import App from './response.jsx';
Meteor.startup(() => {
  // code to run on server at startup
      
      var el = React.createElement(App,{test:"blue", uu: "bb"});
      var varreactHtml=ReactDOMServer.renderToStaticMarkup(el);
      varreactHtml = varreactHtml.replace(/data-/g,"");
      //const element = <div tabIndex="0">ggg</div>;
      
      //console.log(builder.buildObject(element));
      
      WebApp.connectHandlers.use("/", function(req, res, next) {
                  console.log("on hello");
                  res.writeHead(200);
                  res.end(varreactHtml);
                });
});
