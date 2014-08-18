'use strict';

// Setting up route
angular.module('library').config(['$stateProvider',
	function($stateProvider) {
		// Library state routing
		$stateProvider.
		state('viewLibrary', {
			url: '/library',
			templateUrl: 'modules/library/views/view-library.client.view.html'
		});
	}
]);