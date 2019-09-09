import Document, {Head, Main, NextScript} from 'next/document'
import Link from 'next/link'
import Nav from '../components/nav'
import Footer from '../components/footer'


class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        let props = { ...initialProps };

        return props;
    }

    render() {
        return (
            <html>
                <title>Persian Handmades | Persian Hand Embroideried Access</title>
                <Head>
                    <link href="./static/theme/assets/lib/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css?family=Volkhov:400i" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet"/>
                    <link href="./static/theme/assets/lib/animate.css/animate.css" rel="stylesheet"/>
                    <link href="./static/theme/assets/lib/components-font-awesome/css/font-awesome.min.css" rel="stylesheet"/>
                    <link href="./static/theme/assets/lib/et-line-font/et-line-font.css" rel="stylesheet"/>
                    <link href="./static/theme/assets/lib/flexslider/flexslider.css" rel="stylesheet"/>
                    <link href="./static/theme/assets/lib/owl.carousel/dist/assets/owl.carousel.min.css" rel="stylesheet"/>
                    <link href="./static/theme/assets/lib/owl.carousel/dist/assets/owl.theme.default.min.css" rel="stylesheet"/>
                    <link href="./static/theme/assets/lib/magnific-popup/dist/magnific-popup.css" rel="stylesheet"/>
                    <link href="./static/theme/assets/lib/simple-text-rotator/simpletextrotator.css" rel="stylesheet"/>
                    <link href="static/theme/assets/css/style.css" rel="stylesheet"/>
                    <link id="color-scheme" href="./static/theme/assets/css/colors/default.css" rel="stylesheet"/>

                    <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
                    
                    
                </Head>
                <body data-spy="scroll" data-target=".onpage-navigation" data-offset="60">
                    <Nav />
                    <Main /> 
                    <Footer />
                    <div className="scroll-up"><a href="#totop"><i className="fa fa-angle-double-up"></i></a></div>
                    <NextScript />
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
                    <script src="./static/theme/assets/lib/bootstrap/dist/js/bootstrap.min.js"></script>
                    <script src="./static/theme/assets/lib/wow/dist/wow.js"></script>
                    <script src="./static/theme/assets/lib/jquery.mb.ytplayer/dist/jquery.mb.YTPlayer.js"></script>
                    <script src="./static/theme/assets/lib/isotope/dist/isotope.pkgd.js"></script>
                    <script src="./static/theme/assets/lib/imagesloaded/imagesloaded.pkgd.js"></script>
                    <script src="./static/theme/assets/lib/flexslider/jquery.flexslider.js"></script>
                    <script src="./static/theme/assets/lib/owl.carousel/dist/owl.carousel.min.js"></script>
                    <script src="./static/theme/assets/lib/smoothscroll.js"></script>
                    <script src="./static/theme/assets/lib/magnific-popup/dist/jquery.magnific-popup.js"></script>
                    <script src="./static/theme/assets/lib/simple-text-rotator/jquery.simple-text-rotator.min.js"></script>
                    <script src="./static/theme/assets/js/plugins.js"></script>
                    <script src="./static/theme/assets/js/main.js"></script>
                    <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key="ODhmYmU0NzYtNjAzMS00NmJhLWI2ODQtZjRhOWE4YmEzM2UyNjM3MDI5MzcyNDgzNDgwNDI5" id="snipcart"></script>
               </body>
            </html>
        );
    }
}

export default MyDocument