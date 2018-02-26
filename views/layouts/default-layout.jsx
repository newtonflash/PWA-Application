var React = require('react');

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
            <head>
                <title>PWA Application</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#330000"/>
                <link rel="manifest" href="js/manifest.json"></link>
                <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"></link>
            </head>
            <body>
            {this.props.children}

            <script src="/js/webpack.bundle.js"></script>
            <noscript>
                This page requires javascript to be turned on.
            </noscript>
            </body>
            </html>
        );
    }
}

module.exports = DefaultLayout;