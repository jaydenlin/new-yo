var React = require("react");
 
require("../css/<%= filename %>.scss");

var Application = React.createClass({

  render: function() {
    return (
    <div>
        <h1>Hello! Rakuten!</h1>
        <p>Build front end with SPEED SPEED SPEED</p>
    </div>);
  }
});


React.render(<Application/>, document.getElementById('<%= filename %>_content'));
