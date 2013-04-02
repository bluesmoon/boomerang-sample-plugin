(function(w) {

var d=w.document;

BOOMR = BOOMR || {};
BOOMR.plugins = BOOMR.plugins || {};

var impl = {
	node_names: [],

	complete: false
};

BOOMR.plugins.NodeCounter = {
	init: function(config) {
		var i, properties = ["node_names"];

		BOOMR.utils.pluginConfig(impl, config, "NodeCounter", properties);

		return this;
	},

	is_complete: function() {
		return impl.complete;
	}
};

}(window));

