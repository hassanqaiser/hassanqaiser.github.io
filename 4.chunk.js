webpackJsonp([4],{

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Dashboard = (function () {
    function Dashboard() {
    }
    Dashboard = __decorate([
        core_1.Component({
            selector: 'dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.template.html")
        }), 
        __metadata('design:paramtypes', [])
    ], Dashboard);
    return Dashboard;
}());
exports.Dashboard = Dashboard;


/***/ },

/***/ "./src/app/dashboard/dashboard.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var dashboard_component_ts_1 = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var widget_directive_1 = __webpack_require__("./src/app/layout/widget/widget.directive.ts");
var map_component_1 = __webpack_require__("./src/app/dashboard/esrimap/components/map.component.ts");
var search_component_1 = __webpack_require__("./src/app/dashboard/esrimap/components/search.component.ts");
var legend_component_1 = __webpack_require__("./src/app/dashboard/esrimap/components/legend.component.ts");
var layerMenuButton_component_1 = __webpack_require__("./src/app/dashboard/esrimap/components/layerMenuButton.component.ts");
var mainmap_component_1 = __webpack_require__("./src/app/dashboard/esrimap/components/mainmap.component.ts");
var map_service_1 = __webpack_require__("./src/app/dashboard/esrimap/services/map.service.ts");
exports.routes = [
    { path: '', component: dashboard_component_ts_1.Dashboard, pathMatch: 'full' }
];
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule.routes = exports.routes;
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(exports.routes)
            ],
            declarations: [
                dashboard_component_ts_1.Dashboard,
                widget_directive_1.Widget,
                mainmap_component_1.MainMapComponent,
                map_component_1.MapComponent,
                search_component_1.SearchComponent,
                legend_component_1.LegendComponent,
                layerMenuButton_component_1.layerMenuButtonComponent
            ],
            providers: [
                map_service_1.MapService
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DashboardModule;


/***/ },

/***/ "./src/app/dashboard/dashboard.template.html":
/***/ function(module, exports) {

module.exports = "<h1 class=\"page-title\">Dashboard <small><small>The Lucky One</small></small></h1>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <main-map></main-map>\n  </div>\n</div>\n"

/***/ },

/***/ "./src/app/dashboard/esrimap/components/layerMenuButton.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var layerMenuButtonComponent = (function () {
    function layerMenuButtonComponent() {
    }
    layerMenuButtonComponent = __decorate([
        core_1.Component({
            selector: 'layerMenuButton',
            template: "\n    <div id=\"layerMenuButton\" class=\"btn-group\">\n          <button type=\"button\" class=\"btn btn-xs dropdown-toggle\" data-toggle=\"dropdown\">\n            <span class=\"glyphicon glyphicon-align-justify\"></span>\n          </button>\n          <ul class=\"dropdown-menu\" role=\"menu\">\n            <li><a href=\"#\">Tablet</a></li>\n            <li><a href=\"#\">Smartphone</a></li>\n          </ul>\n    </div>\n    ",
            styles: ["\n      margin:0px;\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], layerMenuButtonComponent);
    return layerMenuButtonComponent;
}());
exports.layerMenuButtonComponent = layerMenuButtonComponent;


/***/ },

/***/ "./src/app/dashboard/esrimap/components/legend.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var map_service_1 = __webpack_require__("./src/app/dashboard/esrimap/services/map.service.ts");
var LayerList = __webpack_require__(8);
var LegendComponent = (function () {
    function LegendComponent(elRef, _mapService) {
        this.elRef = elRef;
        this._mapService = _mapService;
    }
    LegendComponent.prototype.init = function (map) {
        var self = this;
        //this.legend = this._mapService.createLegend({map, layerInfos}, this.elRef.nativeElement.firstChild);
        self.map = map;
        var mapLayers = self._mapService.getMapLayers();
        var layers = [];
        //console.log(layerInfos);
        mapLayers.forEach(function (layer) {
            // var btnNode = document.createElement('button');
            // btnNode.className="btn btn-xs";
            // btnNode.type = "button";
            // btnNode.name = 'Click';
            // btnNode.value = 'Click';
            // btnNode.id = layer.id;
            var btnDiv = document.createElement('div');
            btnDiv.className = "btn-group layerMenuButton";
            btnDiv.style.cssText = "margin:0px;";
            btnDiv.innerHTML = "\n\n          <button id=\"" + layer.id + "\" type=\"button\" class=\"btn btn-xs dropdown-toggle\" data-toggle=\"dropdown\">\n            <span class=\"glyphicon glyphicon-align-justify\"></span>\n          </button>\n          <ul class=\"dropdown-menu\" role=\"menu\">\n            <li><a href = \"https://services.arcgis.com/jDGuO8tYggdCCnUJ/arcgis/rest/services/US_State_Boundaries/FeatureServer/0\" target=\"_blank\">Description</a></li>\n          </ul>\n\n    ";
            // mapLayer.button = btnDiv; 
            // mapLayer.showSubLayers = true;
            // mapLayer.layer = layer;
            //layers.push(layer.layerInfos);
        });
        var myWidget = new LayerList({
            map: map,
            layers: [],
            showLegend: true,
            showSubLayers: true,
            removeUnderscores: true
        }, self.elRef.nativeElement.firstChild);
        myWidget.startup();
        $(document).on('click', function () {
            $("#context-Menu").hide(100);
        });
        $(document).on('contextmenu', function (e) {
            console.log(e);
            self.layerId = '';
            $("#context-Menu").hide(100);
            if (e.target.matches('.esriListVisible *')) {
                e.preventDefault();
                self.layerId = e.target.innerHTML;
                var layer = self.map.getLayer(self.layerId);
                if (layer) {
                    $('#context-Menu').css({
                        'position': 'fixed',
                        'top': e.pageY,
                        'left': e.pageX,
                        'display': 'block'
                    });
                    $("#context-Menu").show(100);
                }
            }
        });
    };
    LegendComponent.prototype.urlToDescription = function (e) {
        if (this.layerId !== '') {
            console.log("Hello: " + this.layerId);
            var layer = this.map.getLayer(this.layerId);
            if (layer) {
                window.open(layer.url, '_blank');
            }
        }
    };
    // destroy legend dijit
    LegendComponent.prototype.ngOnDestroy = function () {
        if (this.legend) {
            this.legend.destroy();
        }
    };
    LegendComponent = __decorate([
        core_1.Component({
            selector: 'esri-legend',
            template: " \n  <div></div>\n\n  <ul id=\"context-Menu\" class=\"dropdown-menu\" role=\"menu\" style=\"display:none;\">\n    <li><a href=\"#\" (click)=\"urlToDescription()\">Description</a></li>\n  </ul>\n\n  ",
            styles: ["\n    .layerMenuButton{\n      margin: 0px;\n    }\n    .esriButton {\n      margin: 0px;\n    }\n\n  "]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, map_service_1.MapService])
    ], LegendComponent);
    return LegendComponent;
}());
exports.LegendComponent = LegendComponent;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/dashboard/esrimap/components/mainmap.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var map_component_1 = __webpack_require__("./src/app/dashboard/esrimap/components/map.component.ts");
var search_component_1 = __webpack_require__("./src/app/dashboard/esrimap/components/search.component.ts");
var legend_component_1 = __webpack_require__("./src/app/dashboard/esrimap/components/legend.component.ts");
var IdentifyTask = __webpack_require__(20);
var InfoTemplate = __webpack_require__(1);
var IdentifyParameters = __webpack_require__(19);
var arrayUtils = __webpack_require__(4);
var MainMapComponent = (function () {
    function MainMapComponent() {
        this.title = 'Map Title';
        // map config
        //itemId = '8e42e164d4174da09f61fe0d3f206641';
        this.itemId = '98a4854bf226496ab6dc5214f5e2102e';
        this.mapOptions = {
            basemap: 'gray',
            center: [-97, 38],
            zoom: 5
        };
        // search config
        this.searchOptions = {
            enableButtonMode: true,
            enableLabel: false,
            enableInfoWindow: true,
            showInfoWindowOnSelect: true,
        };
    }
    // once the map loads
    MainMapComponent.prototype.onMapLoad = function (response) {
        var self = this;
        self.map = response;
        self.map.on("click", function (event) {
            var visibleLayers = [];
            self.map.layerIds.forEach(function (layerId) {
                if (layerId == "USStates Layer") {
                    var layer = self.map.getLayer(layerId);
                    visibleLayers = layer['visibleLayers'];
                }
            });
            self.identifyTask = new IdentifyTask("https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Census_USA/MapServer");
            self.identifyParams = new IdentifyParameters();
            self.identifyParams.tolerance = 3;
            self.identifyParams.returnGeometry = true;
            self.identifyParams.layerIds = visibleLayers;
            self.identifyParams.layerOption = IdentifyParameters.LAYER_OPTION_ALL;
            self.identifyParams.width = self.map.width;
            self.identifyParams.height = self.map.height;
            self.identifyParams.geometry = event.mapPoint;
            self.identifyParams.mapExtent = self.map.extent;
            var deferred = self.identifyTask
                .execute(self.identifyParams)
                .addCallback(function (response) {
                // response is an array of identify result objects
                // Let's return an array of features. NAME
                return arrayUtils.map(response, function (result) {
                    var feature = result.feature;
                    var layerName = result.layerName;
                    feature.attributes.layerName = layerName;
                    if (layerName === 'states') {
                        var statesTemplate = new InfoTemplate("", "STATE NAME: ${STATE_NAME}");
                        feature.setInfoTemplate(statesTemplate);
                    }
                    else if (layerName === 'Coarse Counties') {
                        var coarseCountiesTemplate = new InfoTemplate("", "Coarse County NAME: ${NAME}");
                        feature.setInfoTemplate(coarseCountiesTemplate);
                    }
                    else if (layerName === 'Detailed Counties') {
                        var detailedCountiesTemplate = new InfoTemplate("", "Detailed County NAME: ${NAME}");
                        feature.setInfoTemplate(detailedCountiesTemplate);
                    }
                    return feature;
                });
            });
            // InfoWindow expects an array of features from each deferred
            // object that you pass. If the response from the task execution
            // above is not an array of features, then you need to add a callback
            // like the one above to post-process the response and return an
            // array of features.
            //self.map.infoWindow.setFeatures([deferred]);
            //self.map.infoWindow.show(event.mapPoint);
        });
        // initialize the leged dijit with map and layer infos
        self.legendComponent.init(self.map);
        // bind the search dijit to the map
        self.searchComponent.init(self.map);
        // bind the map title
        //this.title = response.itemInfo.item.title;
    };
    MainMapComponent.prototype.turnAllLayersOff = function () {
        var layerIds = this.map.layerIds;
        var layer;
        for (var i = 0; i < layerIds.length; i++) {
            if (layerIds[i] !== 'Basemap') {
                layer = this.map.getLayer(layerIds[i]);
                layer.hide();
            }
        }
        layerIds = this.map.graphicsLayerIds;
        for (var i = 0; i < layerIds.length; i++) {
            layer = this.map.getLayer(layerIds[i]);
            layer.hide();
        }
    };
    MainMapComponent.prototype.turnAllLayersON = function () {
        var layerIds = this.map.layerIds;
        var layer;
        for (var i = 0; i < layerIds.length; i++) {
            layer = this.map.getLayer(layerIds[i]);
            layer.show();
        }
        layerIds = this.map.graphicsLayerIds;
        for (var i = 0; i < layerIds.length; i++) {
            layer = this.map.getLayer(layerIds[i]);
            layer.show();
        }
    };
    __decorate([
        core_1.ViewChild(map_component_1.MapComponent), 
        __metadata('design:type', map_component_1.MapComponent)
    ], MainMapComponent.prototype, "mapComponent", void 0);
    __decorate([
        core_1.ViewChild(search_component_1.SearchComponent), 
        __metadata('design:type', search_component_1.SearchComponent)
    ], MainMapComponent.prototype, "searchComponent", void 0);
    __decorate([
        core_1.ViewChild(legend_component_1.LegendComponent), 
        __metadata('design:type', legend_component_1.LegendComponent)
    ], MainMapComponent.prototype, "legendComponent", void 0);
    MainMapComponent = __decorate([
        core_1.Component({
            selector: 'main-map',
            template: "\n    <div class=\"row\">\n      <div class=\"col-sm-12 col-md-12 col-lg-12 map-col\">\n        <esri-map [options]=\"mapOptions\" (mapLoaded)=\"onMapLoad($event)\">\n          <esri-search [options]=\"searchOptions\"></esri-search>\n          <div id=\"HomeButton\"></div>\n        </esri-map>\n         <div class=\"panel panel-primary\">\n          <div class=\"panel-heading\">\n            <a class=\"panel-title\" data-toggle=\"collapse\" href=\"#collapseLayers\">Layers\n            </a>\n          </div>\n          <div id=\"collapseLayers\" class=\"panel-body\">\n\n            <div class=\"form-group\">\n              All Layers\n              <input type=\"radio\" (click)=\"turnAllLayersON()\" name=\"layerVisibility\" value=\"on\" checked=\"\"> ON\n              <input type=\"radio\" (click)=\"turnAllLayersOff()\" name=\"layerVisibility\" value=\"Off\"> OFF\n            </div>\n\n            <esri-legend id=\"esriLayerList\"></esri-legend> \n          </div>\n        </div>        \n      </div>\n    </div>\n    ",
            styles: ["\n      #layerListPane{\n          width:25%;\n      }\n      .esriLayer{\n        background-color: #fff;\n      }\n      .esriLayerList .esriList{\n          border-top:none;\n      }\n      .esriLayerList .esriTitle {\n        background-color: #fff;\n        border-bottom:none;\n      }\n      .esriLayerList .esriList ul{\n        background-color: #fff;\n      }      \n\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], MainMapComponent);
    return MainMapComponent;
}());
exports.MainMapComponent = MainMapComponent;


/***/ },

/***/ "./src/app/dashboard/esrimap/components/map.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var map_service_1 = __webpack_require__("./src/app/dashboard/esrimap/services/map.service.ts");
var SimpleFillSymbol = __webpack_require__(16);
var SimpleLineSymbol = __webpack_require__(17);
var Color = __webpack_require__(5);
var Popup = __webpack_require__(10);
var esriConfig = __webpack_require__(6);
var GeometryService = __webpack_require__(18);
var MapComponent = (function () {
    function MapComponent(elRef, _mapService) {
        this.elRef = elRef;
        this._mapService = _mapService;
        this.mapLoaded = new core_1.EventEmitter();
        this.$el = jQuery(elRef.nativeElement);
    }
    MapComponent.prototype.ngOnInit = function () {
        // create the map
        esriConfig.defaults.geometryService = new GeometryService("https://utility.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer");
        var popup = new Popup({
            fillSymbol: new SimpleFillSymbol(SimpleFillSymbol.STYLE_SOLID, new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID, new Color([255, 0, 0]), 2), new Color([255, 255, 0, 0.25]))
        }, document.createElement('div'));
        this.options = {
            infoWindow: popup,
            center: [-97, 38],
            navigationMode: 'classic',
            isZoomSlider: true,
            isPan: true,
            isPanArrows: true,
            zoom: 3
        };
        this.map = this._mapService.createMap(this.elRef.nativeElement.firstChild, this.options, this.$el);
        this.mapLoaded.next(this.map);
    };
    // destroy map
    MapComponent.prototype.ngOnDestroy = function () {
        if (this.map) {
            this.map.destroy();
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MapComponent.prototype, "mapLoaded", void 0);
    MapComponent = __decorate([
        core_1.Component({
            selector: 'esri-map',
            template: '<div><ng-content></ng-content></div>',
            inputs: ['options']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, map_service_1.MapService])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/dashboard/esrimap/components/search.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var map_service_1 = __webpack_require__("./src/app/dashboard/esrimap/services/map.service.ts");
var FeatureLayer = __webpack_require__(3);
var InfoTemplate = __webpack_require__(1);
var SearchComponent = (function () {
    function SearchComponent(elRef, _mapService) {
        this.elRef = elRef;
        this._mapService = _mapService;
        this.$el = jQuery(elRef.nativeElement);
    }
    // create the search dijit
    SearchComponent.prototype.init = function (map) {
        this.search = this._mapService.createSearch(this.options, this.elRef.nativeElement.firstChild);
        var sources = this.search.get("sources");
        //var sources = [];
        sources.push({
            featureLayer: new FeatureLayer("https://services.arcgis.com/jDGuO8tYggdCCnUJ/arcgis/rest/services/US_State_Boundaries/FeatureServer/0"),
            searchFields: ["STATE_NAME"],
            displayField: "STATE_NAME",
            exactMatch: false,
            outFields: ["*"],
            name: "US State Boundaries",
            placeholder: "e.g Utah",
            maxResults: 6,
            maxSuggestions: 6,
            //Create an InfoTemplate and include three fields
            infoTemplate: new InfoTemplate("US State Boundaries", "STATE NAME: ${STATE_NAME}</br>SUB REGION: ${SUB_REGION}"),
            enableSuggestions: true,
            minCharacters: 0
        });
        //  sources.push({
        //     featureLayer: new FeatureLayer("https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/US_Senators/FeatureServer/0"),
        //     searchFields: ["Name"],
        //     displayField: "Name",
        //     exactMatch: false,
        //     name: "Senator",
        //     outFields: ["*"],
        //     placeholder: "Senator name",
        //     maxResults: 6,
        //     maxSuggestions: 6,
        //     //Create an InfoTemplate
        //     infoTemplate: new InfoTemplate("Senator information", "Name: ${Name}</br>State: ${State}</br>Party Affiliation: ${Party}</br>Phone No: ${Phone_Number}<br><a href=${Web_Page} target=_blank ;'>Website</a>"),
        //     enableSuggestions: true,
        //     minCharacters: 0
        //  });
        this.search.set("sources", sources);
        //this.search.startup();
        this.search.set('map', map);
        this.search.set('enableButtonMode', true);
    };
    SearchComponent.prototype.ngOnInit = function () {
    };
    // start up once the DOM is ready
    SearchComponent.prototype.ngAfterViewInit = function () {
        this.search.startup();
    };
    // bind search dijit to map
    SearchComponent.prototype.setMap = function (map) {
        this.search.set('map', map);
    };
    // destroy search dijit
    SearchComponent.prototype.ngOnDestroy = function () {
        if (this.search) {
            this.search.destroy();
        }
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'esri-search',
            template: '<div></div>',
            inputs: ['options']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, map_service_1.MapService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/dashboard/esrimap/services/map.service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Legend = __webpack_require__(9);
var Search = __webpack_require__(12);
var FeatureLayer = __webpack_require__(3);
var InfoTemplate = __webpack_require__(1);
var ArcGISTiledMapServiceLayer = __webpack_require__(14);
var ArcGISDynamicMapServiceLayer = __webpack_require__(13);
var Map = __webpack_require__(15);
var HomeButton = __webpack_require__(7);
var Scalebar = __webpack_require__(11);
var MapService = (function () {
    function MapService() {
    }
    MapService.prototype.getMapLayers = function () {
        var layers = [];
        var basemapLayer = new ArcGISTiledMapServiceLayer("https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer", {
            id: "Basemap"
        });
        var statesLayer = new ArcGISDynamicMapServiceLayer("https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Demographics/ESRI_Census_USA/MapServer", {
            id: "USStates Layer"
        });
        statesLayer.setVisibleLayers([5]);
        //define the info template that is used to display the popup content.
        var template = new InfoTemplate();
        template.setTitle("<b>${NAME}</b>");
        template.setContent("<b>${NAME}</b>");
        var fl = new FeatureLayer('https://services.arcgis.com/BG6nSlhZSAWtExvp/arcgis/rest/services/World_Volcanoes/FeatureServer/0', {
            id: "fl1",
            mode: FeatureLayer.MODE_ONDEMAND,
            outFields: ["*"],
            infoTemplate: template
        });
        layers.push(basemapLayer);
        layers.push(statesLayer);
        layers.push(fl);
        return layers;
    };
    ;
    // load a web map and return respons
    MapService.prototype.createMap = function (domNodeOrId, options, jQueryOfHomeButton) {
        var map = new Map(domNodeOrId, options);
        map.addLayers(this.getMapLayers());
        map.infoWindow.resize(200, 75);
        var home = new HomeButton({
            map: map
        }, jQuery.find("HomeButton"));
        home.startup();
        var scalebar = new Scalebar({
            map: map,
            // "dual" displays both miles and kilometers
            // "english" is the default, which displays miles
            // use "metric" for kilometers
            scalebarUnit: "dual"
        });
        return map;
    };
    ;
    // create a search dijit at the dom node
    MapService.prototype.createSearch = function (options, domNodeOrId) {
        return new Search(options, domNodeOrId);
    };
    ;
    // create a legend dijit at the dom node
    MapService.prototype.createLegend = function (options, domNodeOrId) {
        return new Legend(options, domNodeOrId);
    };
    ;
    MapService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MapService);
    return MapService;
}());
exports.MapService = MapService;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/layout/widget/widget.directive.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var Widget = (function () {
    function Widget(el) {
        this.$el = jQuery(el.nativeElement);
        jQuery.fn.widgster.Constructor.DEFAULTS.bodySelector = '.widget-body';
        /*
         When widget is closed remove its parent if it is .col-*
         */
        jQuery(document).on('close.widgster', function (e) {
            var $colWrap = jQuery(e.target)
                .closest('.content > .row > [class*="col-"]:not(.widget-container)');
            // remove colWrap only if there are no more widgets inside
            if (!$colWrap.find('.widget').not(e.target).length) {
                $colWrap.remove();
            }
        });
    }
    Widget.prototype.ngOnInit = function () {
        this.$el.widgster();
    };
    Widget = __decorate([
        core_1.Directive({
            selector: '[widget]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Widget);
    return Widget;
}());
exports.Widget = Widget;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ }

});
//# sourceMappingURL=4.map