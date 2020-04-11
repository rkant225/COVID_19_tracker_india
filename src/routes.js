import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const OtherSamplePage = React.lazy(() => import('./Demo/Other/SamplePage'));
const UserTask = React.lazy(() => import('./Demo/Orders/Orders'));
const COVID_19 = React.lazy(() => import('./Demo/COVID_19/COVID_19'));



const routes = [
    { path: '/COVID_19', exact: true, name: 'COVID_19', component: COVID_19 },
    { path: '/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
    { path: '/user-task', exact: true, name: 'User Task', component: UserTask },
    
];

export default routes;