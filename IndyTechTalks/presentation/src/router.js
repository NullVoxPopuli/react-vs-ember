import EmberRouter from "@ember/routing/router";
import config from "../config/environment";

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.routerRootURL || config.rootURL
});

Router.map(function() {
  this.route('krusty-krab', function() {
    this.route('call-one');
    this.route('call-two');
  });

  this.route('starwars', function() {
    this.route('person', { path: ':id'});
  });
});

export default Router;
