<?php
/**
 * Plugin Name: LeadMaster Landing
 * Plugin URI: https://desarrolloydisenio.com.ar/
 * Description: Inserta la landing estática de LeadMaster desde un shortcode.
 * Version: 1.2.0
 * Author: Desarrollo y Diseño
 * Author URI: https://desarrolloydisenio.com.ar/
 * License: GPL-2.0-or-later
 * Text Domain: leadmaster-landing
 */

if (!defined('ABSPATH')) {
    exit;
}

function leadmaster_landing_add_rewrite_rule(): void
{
    add_rewrite_rule('^leadmaster/?$', 'index.php?leadmaster_landing_page=1', 'top');
}

add_action('init', 'leadmaster_landing_add_rewrite_rule');

function leadmaster_landing_query_vars(array $vars): array
{
    $vars[] = 'leadmaster_landing_page';
    return $vars;
}

add_filter('query_vars', 'leadmaster_landing_query_vars');

function leadmaster_landing_render_clean_page(): void
{
    if ((int) get_query_var('leadmaster_landing_page') !== 1) {
        return;
    }

    $landing_file = plugin_dir_path(__FILE__) . 'assets/index.html';

    if (!file_exists($landing_file)) {
        status_header(500);
        echo 'LeadMaster Landing: no se encontró assets/index.html';
        exit;
    }

    $html = (string) file_get_contents($landing_file);
    $assets_url = trailingslashit(plugins_url('assets', __FILE__));

    $html = str_replace(
        array('./_next/', '/_next/', '/leadmaster/_next/'),
        $assets_url . '_next/',
        $html
    );

    $html = str_replace(
        array('./favicon.ico', '/favicon.ico', '/leadmaster/favicon.ico'),
        $assets_url . 'favicon.ico',
        $html
    );

    $html = str_replace(
        array('./logo-pajaro.webp', '/logo-pajaro.webp', '/leadmaster/logo-pajaro.webp'),
        $assets_url . 'logo-pajaro.webp',
        $html
    );

    status_header(200);
    header('Content-Type: text/html; charset=UTF-8');
    echo $html;
    exit;
}

add_action('template_redirect', 'leadmaster_landing_render_clean_page', 0);

function leadmaster_landing_activate(): void
{
    leadmaster_landing_add_rewrite_rule();
    flush_rewrite_rules();
}

register_activation_hook(__FILE__, 'leadmaster_landing_activate');

function leadmaster_landing_deactivate(): void
{
    flush_rewrite_rules();
}

register_deactivation_hook(__FILE__, 'leadmaster_landing_deactivate');

function leadmaster_landing_shortcode($atts): string
{
    $atts = shortcode_atts(
        array(
            'height' => '4500px',
        ),
        $atts,
        'leadmaster'
    );

    $height = sanitize_text_field((string) $atts['height']);

    if (!preg_match('/^\d+(px|vh|vw|%)$/', $height)) {
        $height = '4500px';
    }

    $landing_url = add_query_arg('leadmaster_landing_page', '1', home_url('/'));

    ob_start();
    ?>
    <div class="leadmaster-landing-wrapper" style="width:100%;max-width:100%;overflow:hidden;">
        <iframe
            src="<?php echo esc_url($landing_url); ?>"
            title="LeadMaster Landing"
            loading="lazy"
            style="width:100%;height:<?php echo esc_attr($height); ?>;border:0;display:block;"
        ></iframe>
    </div>
    <?php

    return (string) ob_get_clean();
}

add_shortcode('leadmaster', 'leadmaster_landing_shortcode');
add_shortcode('leadmaster_landing', 'leadmaster_landing_shortcode');