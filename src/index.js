import createHome from './modules/home.js';
import toggleSidebar from './modules/toggle-sidebar.js';
import './styles.css';

function importAll(r) {
    r.keys().forEach(r)
}
importAll(require.context('/src/images', false, /\.(png|svg|jpg|jpeg|gif)$/));

(function initPage() {
    createHome();
    toggleSidebar();
})();
