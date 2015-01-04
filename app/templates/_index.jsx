var React = require("react"),
    Fluxxor = require("fluxxor"),
    FluxMixin = Fluxxor.FluxMixin(React),
    stores = require("./stores/stores"),
    actions = require("./actions/actions"),
    flux = new Fluxxor.Flux(stores, actions);
    window.flux = flux;  
    
flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});

var Application = React.createClass({
  mixins: [FluxMixin],

  render: function() {
    return (
    <div>
        <h1>Hello! Rakuten!</h1>
        <p>Build front end with SPEED SPEED SPEED</p>
    </div>);
  }
});




React.render(<Application flux={flux}/>, document.getElementById('content'));
