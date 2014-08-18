'use strict';

// Setting up route
angular.module('folders').config(['$stateProvider',
	function($stateProvider) {
		// Folders state routing
		$stateProvider.
		state('listFolders', {
			url: '/folders',
			templateUrl: 'modules/folders/views/list-folders.client.view.html'
		});
	}
]);
