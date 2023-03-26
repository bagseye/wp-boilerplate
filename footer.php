<?php 

if(!defined('ABSPATH')) {
    exit;
}

?>

</main>

<footer class="footer" role="contentinfo">
    <div class="footer__inner">
        <div class="footer__container h-container-large grid">
            <div class="footer__col footer__items grid__span-3">
                <?php get_template_part('template-parts/footer/footer', 'nav'); ?>
        
                <?php get_template_part('template-parts/contact/social'); ?>
        
                <?php get_template_part('template-parts/contact/contact-methods'); ?>
            </div>

            <div class="footer__col grid__span-3-5">
                <div class="footer__logo">
                    <h3>Morgan Baker <span>Development</span></h3>
                </div>
                <div class="footer__copyright">
                    <p>&copy; <?= date('Y') ?> <?= bloginfo( 'name' ) ?></p>
                </div>
            </div>
        </div>
    </div>
</footer>

</div><!-- #page -->

<?php wp_footer(); ?>

<!-- <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script> -->

<!-- <script>
  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide' );
    splide.mount();
  } );
</script> -->

</body>
</html>