var React = require('react');
var DefaultLayout = require('./layouts/default-layout');

class indexPage extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <div id="application-container"></div>
            </DefaultLayout>
        );
    }
}

module.exports = indexPage;