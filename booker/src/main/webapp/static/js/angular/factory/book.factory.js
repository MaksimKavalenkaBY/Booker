'use strict';
app.factory('BookFactory', function($http, MESSAGE, REST, ValidatorService) {

	function getBooks(page, callback) {
		if (!ValidatorService.allNotEmpty(callback, page)) {
			return;
		}

		$http.get(REST.BOOKS + '?page=' + page)
		.success(function(response) {
			var data = {success: true, data: response};
			callback(data);
		})
		.error(function(response) {
			response = {success: false, message: MESSAGE.GETTING_BOOKS_ERROR};
			callback(response);
		});
	}

	function getBookCustom(id, page, callback) {
		if (!ValidatorService.allNotEmpty(callback, id, page)) {
			return;
		}

		$http.get(REST.BOOKS + '/' + id + '?page=' + page)
		.success(function(response) {
			var data = {success: true, data: response};
			callback(data);
		})
		.error(function(response) {
			response = {success: false, message: MESSAGE.GETTING_BOOKS_ERROR};
			callback(response);
		});
	}

	function getBookStandard(id, callback) {
		if (!ValidatorService.allNotEmpty(callback, id)) {
			return;
		}

		$http.get(REST.BOOKS + '/' + id)
		.success(function(response) {
			var data = {success: true, data: response};
			callback(data);
		})
		.error(function(response) {
			response = {success: false, message: MESSAGE.GETTING_BOOKS_ERROR};
			callback(response);
		});
	}

	return {
		getBooks: getBooks,
		getBookCustom: getBookCustom,
		getBookStandard: getBookStandard
	};

});