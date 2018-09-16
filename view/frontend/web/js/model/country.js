define([
    'jquery'
], function (
    $
) {
    'use strict';
    return function main() {

        return $.ajax({
            showLoader: true,
            url: 'https://ipinfo.io',
            type: "GET",
            dataType: 'json',
            async: false
        }).done(function (data) {}).responseJSON.country;
    };
});