'use strict';

// Configuring the library module
angular.module('library').run(['Menus',
	function(Menus) {
		// Set top bar menu item
		Menus.addMenuItem('topbar', 'Library', 'library');
	}
]);