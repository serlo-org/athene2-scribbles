/*global jQuery: false, window: false */
(function ($, window, undefined) {
    'use strict';
    $(function () {
        var $body = $('body'),
            $navigationToggler = $('#navigation-toggle'),
            $sidebarToggler = $('#sidebar-toggle');

        $.SerloSideMenu({
            root: '#main-nav',
            selector: '> li'
        });

        $.SerloAjaxOverlay();

        $.SerloSearch();

        $.SerloLayout();
    });

})(jQuery, window);