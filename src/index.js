import handlers from './modules/handlers.js';
import dom from './modules/dom.js';

function importAll(r) {
    r.keys().forEach(r)
}
importAll(require.context('/src/images', false, /\.(png|svg|jpg|jpeg|gif)$/));

(function initPage() {
    handlers.toggleSidebar();
    handlers.selected();
    handlers.projectModal();
    dom.displayProjectsList();
})();
