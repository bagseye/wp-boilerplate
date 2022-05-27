</main>

<footer class="footer">
    <div class="footer__container">

        <?php get_template_part('template-parts/footer/footer', 'nav'); ?>

        <?php get_template_part('template-parts/contact/social'); ?>

        <?php get_template_part('template-parts/contact/contact-methods'); ?>

    </div>
    <div class="footer__container">

        <div class="copyright">
            <p>&copy; <?= date('Y') ?> <?= bloginfo( 'name' ) ?></p>
            <p>
            <?php 
            printf(
                esc_html__( 'Designed & developed by %s', 'wpboiler' ),
                '<a href="' . esc_url( __( 'https://www.morganbaker.dev', 'wpboiler' ) ) . '">Morgan Baker Development</a>'
            );
            ?>
            </p>
        </div>

    </div>  

</footer>

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>