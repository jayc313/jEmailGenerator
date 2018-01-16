(function($j){

    // Example of creating a link and adding text
    $j( '.e .e__link--data' ).jEmailGenerator({
        text: 'Contact Us Here!'
    });

    // Example of keeping the current text
    $j( '.e__link--no-text-change' ).jEmailGenerator({
        text: false
    });

    // Example of adding email without link
    $j( '.e' ).jEmailGenerator();

    // Example of adding email with a redirect instead of a link
    $j( '.e .e__link--redirect' ).jEmailGenerator({
        text: 'Redirect without changing link',
        redirect: true
    });

})(jQuery)