import DataStore from 'flux/stores/DataStore.js'

class About extends React.Component {
    render() {
        let page = DataStore.getPageBySlug("free-mp3");
        // let acf = page.acf; // Advanced Custom Fields data
        console.log('page', page);

        return (
            <div>
                <h1>MP3 of The Day</h1>
                <h1>{page.title.rendered}</h1>
                {/*<h4>{acf.kicker}</h4>*/}
            </div>
        );
    }

}

export default About;
