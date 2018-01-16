/*
 * Options:
 * -- text (String, Boolean)
 * ---- Changes the text of the email
 * -- redirect (Boolean)
 * ---- Redirects the page instead of creating a link
 * 
*/

(function ($j) {

    "use strict";

    $.fn.jEmailGenerator = function ( options ) {

        var opts = $.extend({
            text: '',
            link: true,
            redirect: false
        }, options);

        return this.each(function () {

            var $email = $j( this );

            if ( typeof $email.attr( 'data-eName' ) !== 'undefined' && typeof $email.attr( 'data-eHost' ) !== 'undefined' && typeof $email.attr( 'data-eDomain' ) !== 'undefined' ) {
                var emailLink = $email.attr( 'data-eName' ) + '@' + $email.attr( 'data-eHost' ) + '.' + $email.attr( 'data-eDomain' );

                if ( opts.text === '' ) {
                    $email.text( emailLink );
                } else if ( opts.text === false ) {

                } else {
                    $email.text( opts.text );
                }

                if ( opts.redirect === false && $email.is( 'a' ) ) {
                    $email.attr( 'href', 'mailto:' + emailLink );
                }

                if ( opts.redirect === true ) {
                    $email.on('click', function( e ){
                        e.preventDefault();
                        window.location.href = 'mailto:' + emailLink;
                    });
                }
            }

        });

    }

})(jQuery);