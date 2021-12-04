</main>

<footer role="contentinfo">
    <?php if( has_nav_menu( 'footer' ) ) : ?>
        <nav aria-label="<?php esc_attr_e( 'Secondary Menu', 'wpboiler' ) ?>">
            <ul>
                <?php 
                wp_nav_menu(
                    array(
                        'theme_location'    => 'footer',
                        'items_wrapp'       => '%3$s',
                        'container'         => false,
                        'depth'             => 1, 
                        'link_before'       => '<span>',
                        'link_after'        => '</span>',
                        'fallback_cb'       => false,
                    )
                    );
                ?>
            </ul>
        </nav>
    <?php endif; ?>
    
    <?php echo get_template_part('template-parts/contact/social'); ?>

    <?php echo get_template_part('template-parts/contact/contact-methods'); ?>
    <div class="copyright">
        <p>&copy; <?php echo date('Y') ?> <?php echo bloginfo( 'name' ) ?></p>
        <p><?php 
        printf(
            esc_html__( 'Designed & developed by %s', 'wpboiler' ),
            '<a href="' . esc_url( __( 'https://www.morganbaker.dev', 'wpboiler' ) ) . '">Morgan Baker Development</a>'
        );
        ?></p>
    </div>
</footer>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>