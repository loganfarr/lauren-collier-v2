"use strict";
var router_1 = require('@angular/router');
var about_component_1 = require('./AboutComponent/about.component');
var home_component_1 = require('./HomeComponent/home.component');
var portfolio_component_1 = require('./PortfolioComponent/portfolio.component');
exports.routing = router_1.RouterModule.forRoot([
    { path: '', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'portfolio', component: portfolio_component_1.PortfolioComponent }
]);
//# sourceMappingURL=app.routing.js.map