var DomainsView = MenuBaseView.extend({
  initialize: function () {
    MenuBaseView.prototype.initialize.call(this);
    this.listenTo(domainsMenu, 'reset', this.render);
  },
  _render: function () {
    var _this = this;
    _this.$el.html(_this.templateFn({
      hasSep: true
    }));
    var comp = _this.components();
    var top = comp.top;
    var bot = comp.bot;
    _this.addMenuItem({
      name: _.i18n('menuBack'),
      symbol: 'fa-arrow-left',
      onClick: function (e) {
        app.navigate('', {trigger: true});
      },
    }, top);
    domainsMenu.each(function (item) {
      _this.addMenuItem(item, bot);
    });
    setTimeout(function () {
      _this.fixStyles(bot, comp.plh);
    });
  },
});