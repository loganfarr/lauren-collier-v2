"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var about_component_1 = require('./AboutComponent/about.component');
var contact_component_1 = require('./ContactComponent/contact.component');
var home_component_1 = require('./HomeComponent/home.component');
var navigation_component_1 = require('./NavigationComponent/navigation.component');
var portfolio_component_1 = require('./PortfolioComponent/portfolio.component');
var portfolio_service_1 = require('./PortfolioService/portfolio.service');
var app_routing_1 = require('./app.routing');
var spinner_component_1 = require('./SpinnerComponent/spinner.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                forms_1.ReactiveFormsModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                about_component_1.AboutComponent,
                contact_component_1.ContactComponent,
                home_component_1.HomeComponent,
                navigation_component_1.NavigationComponent,
                portfolio_component_1.PortfolioComponent,
                spinner_component_1.SpinnerComponent
            ],
            providers: [
                portfolio_service_1.PortfolioService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map