(function(w) {

var d=w.document;

BOOMR = BOOMR || {};
BOOMR.plugins = BOOMR.plugins || {};

var impl = {
	node_names: [],
	prefix: "nodecount.",

	// implement a method to do the actual work
	run: function()
	{
		// for this example, we'll ignore browsers that do not support
		// Array.forEach

		this.node_names.forEach(function(node_name) {
			BOOMR.addVar(this.prefix + node_name, d.getElementsByTagName(node_name).length);
		});

		// Set the plugin's completed state...
		this.complete = true;

		// And tell boomerang that we're ready to send the beacon if everyone else is...
		BOOMR.sendBeacon();
	},

	complete: false
};

BOOMR.plugins.NodeCounter = {
	init: function(config) {
		var i, properties = ["node_names", "prefix"];

		BOOMR.utils.pluginConfig(impl, config, "NodeCounter", properties);

		return this;
	},

	is_complete: function() {
		return impl.complete;
	}
};

}(window));

