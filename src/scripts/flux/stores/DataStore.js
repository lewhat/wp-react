import alt          from 'flux/alt/alt.js';
import DataActions  from 'flux/actions/DataActions.js';

class DataStore {
    constructor() {
        this.data = {};

        this.bindListeners({
            // Listen to the getSuccess() in DataActions.js
            handleSuccess: DataActions.GET_SUCCESS
        });

        this.exportPublicMethods({
            getAll:         this.getAll,
            getAllPages:    this.getAllPages,
            getAllPosts:    this.getAllPosts,
            getPageBySlug:  this.getPageBySlug,
            getAllTags: this.getAllTags
        });
    }

    // Store data returned by getSuccess() in DataActions.js
    handleSuccess(data) {
        this.setState({ data });
    }

    // Returns all pages and posts
    getAll() {
        return this.getState().data;
    }

    // Returns all Pages
    getAllPages() {
        return this.getState().data.pages;
    }

    // Returns all Posts
    getAllPosts() {
        return this.getState().data.posts;
    }

    // Returns all Tags
    getAllTags() {
        console.log(this.getState())
        return this.getState().data.tags;
    }

    // Returns a Page by provided slug
    getPageBySlug(slug){
        const pages = this.getState().data.pages;
        return pages[Object.keys(pages).find((page, i) => {
            return pages[page].slug === slug;
        })] || {};
    }

}

export default alt.createStore(DataStore, 'DataStore');