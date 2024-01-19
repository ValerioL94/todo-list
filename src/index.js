import dom from './modules/dom.js';
import tasks from './modules/tasks.js';
import './styles.css';

function importAll(r) {
    r.keys().forEach(r)
}
importAll(require.context('/src/images', false, /\.(png|svg|jpg|jpeg|gif)$/));

dom.initPage();
dom.displayProjectsList();
tasks.test();
dom.allTab.click();