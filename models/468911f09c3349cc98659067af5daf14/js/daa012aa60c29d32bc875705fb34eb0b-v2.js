"use strict";
(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
  [3266],
  {
    isBB: (e, t, i) => {
      i.d(t, { Z: () => a });
      var s = i("QbBG"),
        n = i("KDlt"),
        o = i("lotc");
      i("VHLl");
      const a = s.Z.extend({
        displayName: "Popup",
        optionTypes: {
          child: o.Z.component.isRequired,
          title: o.Z.string,
          className: o.Z.string,
          isClosable: o.Z.bool,
          width: o.Z.number,
        },
        defaultOptions: { className: "", isClosable: !0 },
        state: {},
        events: {},
        template: function () {
          var e = this.options,
            t = e.width,
            i = e.className,
            s = e.isClosable,
            o = e.title,
            a = e.child;
          return n.Z.getFromMacro(
            "front/macros/components/molecules/popup",
            "popup",
            [
              {
                className: i,
                isClosable: s,
                width: t,
                title: o,
                components: this.createChildrenComponents({ child: a }),
              },
            ]
          );
        },
      });
    },
    "9lp7": (e, t, i) => {
      i.d(t, { Z: () => c });
      var s = i("Qbh+"),
        n = i("isBB"),
        o = i("KDlt"),
        a = i("QbBG"),
        r = i("lotc"),
        l = a.Z.extend({
          displayName: "UpgradePlanPopupContent",
          optionTypes: { popupSubTitle: r.Z.string.isRequired },
          events: {
            "click .upgrade-additional-callback": "additionalButtonCallback",
          },
          additionalButtonCallback: function (e) {
            this.options.additionalButton &&
              "function" == typeof this.options.additionalButton.callback &&
              this.options.additionalButton.callback(e);
          },
          template: function () {
            return o.Z.getFromString(
              '\n            {% if options.popupImg %}<div class="illustration --{{ options.popupImg }}"></div>{% endif %}\n            <p class="title">{{ options.popupSubTitle }}</p>\n            <div class="infos">\n                {% for message in options.popupMessages %}\n                    <p>{{message|safe}}</p>\n                {% endfor %}\n            </div>\n            <div class="actions">\n                {% if options.nextPlan %}\n                    <div class="btn-wrapper">\n                        <a class="button btn-huge btn-important upgrade-link" href="{{ url(\'pages:plans\') }}" target="_blank">Upgrade to {{ options.nextPlan }}</a>\n                    </div>\n                {% endif %}\n                {% if options.additionalButton %}\n                    <div class="btn-wrapper">\n                        <a class="button btn-large btn-primary upgrade-additional-callback"\n                        {% if options.additionalButton.href %}href="{{ options.additionalButton.href }}" target="_blank"{% endif %}>{{ options.additionalButton.text }}</a>\n                    </div>\n                {% endif %}\n            </div>\n            ',
              { options: this.options }
            );
          },
        });
      const c = (0, s.Z)(
        a.Z.extend({
          template: function () {
            return o.Z.getFromString("{{ components.popup | component }}", {
              components: this.createChildrenComponents({
                popup: {
                  viewClass: n.Z,
                  options: {
                    title: "",
                    className: "upgrade-plan-popup",
                    child: {
                      viewClass: l,
                      options: {
                        popupImg: this.options.popupImg,
                        popupSubTitle: this.options.popupSubTitle,
                        popupMessages: this.options.popupMessages,
                        nextPlan: this.options.nextPlan,
                        additionalButton: this.options.additionalButton,
                      },
                    },
                  },
                },
              }),
            });
          },
        })
      );
    },
    "1HPd": (e, t, i) => {
      i.d(t, { Z: () => s });
      const s = i("rX1A").Z.extend({
        events: { "click .close": "hide", "touchstart .close": "hide" },
        show: function (e) {
          e && e.preventDefault && e.preventDefault(),
            this.$el.removeClass("hidden");
        },
        hide: function (e) {
          e && e.preventDefault && e.preventDefault(),
            this.$el.addClass("hidden");
        },
        isVisible: function () {
          return !this.el.classList.contains("hidden");
        },
      });
    },
    rX1A: (e, t, i) => {
      i.d(t, { Z: () => n });
      var s = i("nv4P");
      const n = s.Z.extend({
        constructor: function (e) {
          (this.viewer = e.viewer),
            (this.widgets = e.widgets),
            s.Z.apply(this, arguments);
        },
        enable: function () {
          this.$el.removeClass("disabled");
        },
        disable: function () {
          this.$el.addClass("disabled");
        },
        isEnabled: function () {
          return this.$el.hasClass("disabled");
        },
      });
    },
    "OUQ+": (e, t, i) => {
      i.d(t, { Z: () => u });
      var s = i("nv4P"),
        n = i("jQDz"),
        o = i("bvKJ"),
        a = i("Hjnd"),
        r = i.n(a),
        l = i("KDlt"),
        c = i("kAIv"),
        h = i("lotc");
      i("kNR+");
      const u = s.Z.extend({
        displayName: "Notification",
        optionTypes: {
          parent: h.Z.string,
          class: h.Z.string,
          content: h.Z.string,
          delay: h.Z.number,
        },
        defaultOptions: { parent: ".flashmessage-container" },
        events: { 'click [data-action="close"]': "onClickClose" },
        template: function () {
          return l.Z.getFromMacro("front/macros/notification", "flashmessage", [
            this.options.class,
            this.options.content,
            { safecontent: "True" },
          ]);
        },
        initialize: function () {
          s.Z.prototype.initialize.apply(this, arguments),
            this.render(),
            this.options.delay && this.close(this.options.delay);
        },
        render: function () {
          this.$el.html((0, n.Z)(this, "template")),
            r()(this.options.parent).append(this.$el);
          var e = this.$el.find(".notification");
          e.addClass("hidden"), (0, o.Z)(e.removeClass.bind(e, "hidden"));
        },
        onClickClose: function (e) {
          e && e.preventDefault && e.preventDefault(), this.close(0);
        },
        close: function (e) {
          var t = this;
          e = e || 0;
          var i = this.$el.find(".notification");
          return (
            setTimeout(function () {
              i.addClass("hidden"),
                (0, c.Z)(i).then(function () {
                  t.$el.parent()[0].removeChild(t.el);
                });
            }, e),
            this
          );
        },
      });
    },
    MskI: (e, t, i) => {
      i.d(t, { Z: () => lt });
      var s = i("Hjnd"),
        n = i.n(s),
        o = i("k46e"),
        a = i("lqp/"),
        r = i("Cgfs"),
        l = i("bvKJ"),
        c = i("Bpah"),
        h = i("3O9e"),
        u = i("mSEu"),
        d = i("5Eyw"),
        p = i.n(d),
        g = i("nv4P"),
        v = i("RyS8"),
        f = i("7txH"),
        m = i("V1mW"),
        w = i("WGQk"),
        b = i("R2Pi"),
        y = i("+VSF"),
        S = i("hDfq"),
        C = i("O56b"),
        Z = i("1nxQ"),
        M = i("/c5M"),
        V = i("MQQR"),
        x = i("yzbh"),
        k = i("vcih"),
        _ = i("wvpl"),
        T = i("aMVL"),
        O = i("uKuv"),
        P = i("9lp7"),
        D = i("1HPd"),
        $ = i("xKIK"),
        E = i("X9mO"),
        R = i("nC8o"),
        F = i("D7W8"),
        I = i("eKF4"),
        A = i("jQKg"),
        L = i("CTpj"),
        H = i("u6Gu"),
        B = i("t3PY"),
        z = i("JBVY"),
        N = i("KDlt"),
        U = i("X40V"),
        W = i("ws/s"),
        j = i("rX1A"),
        Q = i("xr2m"),
        q = i("pql+"),
        G = i("UZbZ"),
        K = i("kAIv"),
        J = (0, Q.Z)(
          [
            '<div class="setting" data-setting="<%= name %>" data-setting-group="<%= group %>">',
            '   <p class="setting-label"><%= label %></p>',
            "</div>",
          ].join("")
        ),
        Y = (0, Q.Z)(
          [
            '<div class="setting" data-setting="<%= name %>" data-setting-group="<%= group %>" data-setting-type="<%= type %>">',
            '   <p class="setting-label"><%= label %></p>',
            '   <p class="setting-value" data-value="<%= value %>" ><%= prettyValue %></p>',
            "</div>",
          ].join("")
        ),
        X = (0, Q.Z)(
          [
            '   <a class="control-menu-back back">Back</a>',
            '   <ul class="setting-list" data-setting="<%= name %>" data-setting-type="<%= type %>">',
            "       <%= listItems %>",
            "   </ul>",
          ].join("")
        ),
        ee = (0, Q.Z)(
          [
            '<li class="setting-item <% if (selected) { %>selected<% } %>" data-value="<%= value %>">',
            "   <%= prettyValue %>",
            '   <span class="shortcut" title="Keyboard shortcut"><%= shortcut %></span>',
            "</li>",
          ].join("")
        );
      const te = j.Z.extend({
        events: {
          "click .setting": "onSettingClick",
          "touchend .setting": "onSettingClick",
          "click .back": "togglePane",
          "touchend .back": "togglePane",
          "click .setting-item": "onSettingValueClick",
          "touchend .setting-item": "onSettingValueClick",
          'click [data-setting="viewerMode"] li': "onViewerModeChange",
          'touchend [data-setting="viewerMode"] li': "onViewerModeChange",
        },
        initialize: function (e) {
          if (
            (j.Z.prototype.initialize.apply(this, arguments),
            (this.settings = e.settings),
            (this.viewer = e.viewer),
            (0, F.Z)(this.settings))
          )
            return (
              console.warn("No settings object given to SettingsMenu"),
              void this.$el.hide()
            );
          (this.$list = this.$(".control-menu-list")),
            (this.$pane = this.$(".control-menu-pane")),
            this.$el.on(
              "click touchend",
              '.wireframe-colors a[data-setting="wireframeColor"]:not(.active)',
              this.onWireframeColorClick.bind(this)
            ),
            this.$el.on(
              "click touchend",
              '.wireframe-colors a[data-setting="wireframeColor"].active',
              this.onDisableWireframeClick.bind(this)
            ),
            this.$el.on(
              "click touchend",
              '.wireframe-colors a[data-setting="wireframeEnable"]',
              this.onDisableWireframeClick.bind(this)
            ),
            this.viewer.proxySettings.on("change", this.render.bind(this));
        },
        onViewerModeChange: function (e) {
          e && "touchend" === e.type && e.preventDefault(),
            "0" === this.viewer.proxySettings.get("viewerMode")
              ? this.viewer.subviews.osd.show("Click and hold to rotate", {
                  position: "top",
                  duration: 3e3,
                })
              : this.viewer.subviews.osd.show(
                  "Mouse to look around, keyboard to move",
                  { position: "top", duration: 3e3 }
                );
        },
        onDisableWireframeClick: function (e) {
          e && "touchend" === e.type && e.preventDefault();
          var t = this.$('.wireframe-colors [data-setting="wireframeEnable"]');
          this.viewer.proxySettings.set("wireframeEnable", !1),
            t.parent().find(".active").removeClass("active"),
            t.addClass("active");
        },
        onWireframeColorClick: function (e) {
          e && "touchend" === e.type && e.preventDefault();
          var t = n()(e.currentTarget),
            i = t.attr("data-value");
          this.viewer.proxySettings.set("wireframeColor", i),
            this.viewer.proxySettings.set("wireframeEnable", !0),
            t.parent().find(".active").removeClass("active"),
            t.addClass("active");
        },
        onSettingClick: function (e) {
          e && "touchend" === e.type && e.preventDefault && e.preventDefault();
          var t = n()(e.currentTarget).attr("data-setting"),
            i = this.settings[t];
          if (((i.name = t), i.isButton))
            return this[i.action] && this[i.action](e);
          this.renderSettingPane(i), this.togglePane(!0);
        },
        onSettingValueClick: function (e) {
          e.preventDefault(), e.stopPropagation();
          var t = n()(e.currentTarget),
            i = t.attr("data-value"),
            s = t.closest("[data-setting]"),
            o = s.attr("data-setting");
          switch (s.attr("data-setting-type") || "string") {
            case "number":
              i = parseFloat(i);
              break;
            case "bool":
              i = "true" === i;
          }
          this.viewer.proxySettings.set(o, i);
        },
        onSettingChangeWhileOpen: function () {
          this.renderSettingPane(this._currentSetting);
        },
        renderSettingPane: function (e) {
          var t,
            i = "",
            s = "string",
            n = this.viewer.proxySettings.get(e.name),
            o = this.getSettingFromValue(e.name, n),
            r = this.viewer._currentModel.get("options").shading.type;
          this._currentSetting &&
            this.viewer.proxySettings.off(
              "change:" + this._currentSetting.name,
              this.onSettingChangeWhileOpen,
              this
            ),
            (this._currentSetting = e),
            this._currentSetting &&
              this.viewer.proxySettings.on(
                "change:" + this._currentSetting.name,
                this.onSettingChangeWhileOpen,
                this
              ),
            ("shadingStyle" === e.name && "lit" !== r) ||
              (0, a.Z)(e.settings, function (e) {
                i += ee({
                  value: e.value,
                  type: e.type || s,
                  prettyValue: e.label,
                  selected: o === e,
                  shortcut: e.shortcut || "",
                });
              }),
            (t = (e.paneTemplate || X)({
              listItems: i,
              name: e.name,
              type: e.type || s,
              viewerSettings: this.viewer.proxySettings.toJSON(),
            })),
            this.$pane.html(t);
          var l = this.viewer.scene.getFeatures().webVR.getModel();
          "viewerMode" !== this._currentSetting.name || l.get("hasNativeHMD")
            ? this.$('[data-value="2"]').show()
            : this.$('[data-value="2"]').hide();
        },
        getSettingFromValue: function (e, t) {
          var i;
          return (
            (this.settings[e].settings || []).forEach(function (e) {
              (e.value !== t && e.value + "" != t + "") || (i = e);
            }),
            i
          );
        },
        togglePane: function (e, t) {
          var i = this;
          t && "touchend" === t.type && t.preventDefault(),
            this.$el.toggleClass("detail", e),
            (0, K.Z)(this.$(".control-menu-wrapper")).then(function () {
              i.$el.hasClass("detail") || i.clearPane();
            });
        },
        clearPane: function () {
          this.$pane.html("");
        },
        render: function () {
          var e = "",
            t = this.viewer.scene.getFeatures().quality.getModel(),
            i = this.viewer.scene.getFeatures().hotspot.getModel(),
            s = this.viewer.scene.getFeatures().animation.getModel(),
            n = [];
          (0, a.Z)(this.settings, function (e, t) {
            var i = (0, q.Z)(e);
            (i.name = t), n.push(i);
          }),
            (n = (0, G.Z)(n, "order")),
            (0, a.Z)(
              n,
              function (t) {
                var i,
                  s = t.name;
                if (t.isButton)
                  i = J({ name: s, label: t.label, group: t.group });
                else {
                  var n =
                    this.getSettingFromValue(
                      s,
                      this.viewer.proxySettings.get(s)
                    ) || t.settings[0];
                  i = Y({
                    name: s,
                    label: t.label,
                    value: n.value,
                    prettyValue: n.label,
                    group: t.group,
                    type: n.type,
                  });
                }
                e += i;
              }.bind(this)
            ),
            this.$list.html(e),
            j.Z.prototype.render.apply(this, arguments),
            s && s.get("animations").length
              ? this.$('[data-setting-group="animation"]').show()
              : this.$('[data-setting-group="animation"]').hide(),
            t && t.get("promiseReady").isFulfilled()
              ? this.$('[data-setting-group="textureQuality"]').show()
              : this.$('[data-setting-group="textureQuality"]').hide(),
            i && i.get("hotspots").length
              ? this.$('[data-setting-group="annotation"]').show()
              : this.$('[data-setting-group="annotation"]').hide(),
            t &&
              t.get("promiseReady").isFulfilled() &&
              window.requestAnimationFrame(
                function () {
                  var e = this.getSettingFromValue(
                    "textureQuality",
                    t.get("level")
                  );
                  this.$('[data-setting="textureQuality"] .setting-value')
                    .attr("data-value", e.value)
                    .text(e.label);
                }.bind(this)
              );
        },
        onTextureQualityReady: function (e) {
          var t = this.viewer.scene.getFeatures().quality;
          if (t)
            if (e.low || e.mid || e.high) {
              var i = t.getModel().get("level");
              this.viewer.proxySettings.set("textureQuality", i), this.render();
            } else this.$('[data-setting="textureQuality"]').remove();
        },
      });
      var ie = i("g6dK");
      function se(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, s);
        }
        return i;
      }
      function ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? se(Object(i), !0).forEach(function (t) {
                (0, $.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : se(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      var oe = u.Z.shortcuts;
      (0, V.Z)().uiInspector
        ? ((oe.inspectorControl.shortcuts[0].keyCombinations = "1"),
          (oe.inspectorControl.shortcuts[1].keyCombinations = "2"),
          (oe.inspectorControl.shortcuts[2].keyCombinations = "3"),
          (oe.inspectorControl.shortcuts[3].keyCombinations = "4"),
          (oe.inspectorControl.shortcuts[4].keyCombinations = "6"),
          (oe.viewerRendering.shortcuts[0].keyCombinations = ""),
          (oe.viewerRendering.shortcuts[1].keyCombinations = ""),
          (oe.viewerRendering.shortcuts[2].keyCombinations = ""),
          (oe.viewerRendering.shortcuts[3].keyCombinations = "5"))
        : ((oe.inspectorControl.shortcuts[0].keyCombinations = ""),
          (oe.inspectorControl.shortcuts[1].keyCombinations = ""),
          (oe.inspectorControl.shortcuts[2].keyCombinations = ""),
          (oe.inspectorControl.shortcuts[3].keyCombinations = ""),
          (oe.inspectorControl.shortcuts[4].keyCombinations = ""));
      var ae = new C.Z(oe.viewerRendering),
        re = function (e) {
          var t = N.Z.getFromString(
            '<a           class="{{ className }} {{ "active" if isActive else "" }}"           data-setting="{{ dataSetting }}"           data-value="{{ dataValue }}"           title="{{ title }}">        </a>'
          );
          return N.Z.getFromString(
            '<p class="wireframe-title">        Wireframe         <span class="shortcut" title="Keyboard shortcut">           {{ shortcut | safe }}        </span>        </p>        <div class="wireframe-colors">           {{ colorItems | safe }}        </div>'
          )({
            shortcut: ae.getShortDescriptionById("toggleWireframe"),
            colorItems: [
              {
                title: "Off",
                className: "colors-none",
                dataSetting: "wireframeEnable",
                dataValue: "0",
              },
              {
                title: "Black",
                className: "colors-black",
                dataSetting: "wireframeColor",
                dataValue: "000000FF",
              },
              {
                title: "White",
                className: "colors-white",
                dataSetting: "wireframeColor",
                dataValue: "ffffffFF",
              },
              {
                title: "Red",
                className: "colors-red",
                dataSetting: "wireframeColor",
                dataValue: "ff0000FF",
              },
              {
                title: "Blue",
                className: "colors-blue",
                dataSetting: "wireframeColor",
                dataValue: "0000FFFF",
              },
              {
                title: "Green",
                className: "colors-green",
                dataSetting: "wireframeColor",
                dataValue: "00FF00FF",
              },
              {
                title: "Yellow",
                className: "colors-yellow",
                dataSetting: "wireframeColor",
                dataValue: "FFFF00FF",
              },
            ]
              .map(function (i) {
                return t(
                  ne(
                    ne({}, i),
                    {},
                    { isActive: e.wireframeColor === i.dataValue }
                  )
                );
              })
              .join(""),
          });
        },
        le = {};
      (0, V.Z)().uiInspector ||
        (le.shadingStyle = {
          label: "Rendering",
          settings: [
            {
              label: "Lit",
              value: "lit",
              shortcut: ae.getShortDescriptionById("defaultRenderingMode"),
            },
            {
              label: "Shadeless",
              value: "shadeless",
              shortcut: ae.getShortDescriptionById("shadelessRenderingMode"),
            },
            {
              label: "MatCap",
              value: "matcap",
              shortcut: ae.getShortDescriptionById("matcapRenderingMode"),
            },
          ],
          paneTemplate: function (e) {
            var t = e.viewerSettings.hasWireframe,
              i = e.viewerSettings.wireframeColor;
            return N.Z.getFromString(
              '    <div class="setting-list-header">               <a class="back control-menu-back">Back</a>               <span class="setting-list-header-help">Key</span>           </div>            <ul class="setting-list" data-setting="{{ name }}">                {{ listItems | safe }}            </ul>            {{ wireframe | safe }}',
              ne(
                ne({}, e),
                {},
                { wireframe: t ? re({ wireframeColor: i }) : "" }
              )
            );
          },
          order: 2,
        });
      const ce = j.Z.extend({
        events: {
          "click .help": "onHelpClick",
          "click .ar": "onArClick",
          "click .vr": "onVrClick",
          "click .fullscreen": "onFullscreenClick",
          "click .theatre": "onTheatreClick",
          "touchend .control.tooltip": "replaceDOMElement",
        },
        constructor: function () {
          (this.fullScreenChange = this.fullScreenChange.bind(this)),
            (this.onVrClick = this.onVrClick.bind(this)),
            (this.onFullscreenClick = this.onFullscreenClick.bind(this)),
            (this.onTheatreClick = this.onTheatreClick.bind(this)),
            (this.onArClick = this.onArClick.bind(this)),
            j.Z.prototype.constructor.apply(this, arguments);
        },
        initialize: function () {
          j.Z.prototype.initialize.apply(this, arguments),
            (this.enableVR = !1),
            (this.wasClicked = this.$el
              .parents(".model-container")
              .hasClass("theatre")),
            !_.Z.hasFullscreen() &&
              (0, L.Z)() &&
              window.self === window.top &&
              (this.viewer.$el.addClass("no-fullscreen"),
              this.viewer.$el
                .find(".controls .settings")
                .addClass("shift-menu-left"));
          var e = window.innerWidth;
          try {
            e = window.parent.innerWidth;
          } catch (e) {}
          (0, U.Nc)({ width: e, breakpoint: "breakpointMedium" }) &&
            this.viewer.$el.find(".controls .general-controls .theatre").hide(),
            (this._theatreActive =
              "false" !== h.default.get("sf_theatre_mode", "false")),
            this.viewer.$el.toggleClass(
              "theatre-mode-active",
              this._theatreActive
            ),
            this.viewer.on(
              "model-loaded",
              this.updateNavigationSettings.bind(this)
            ),
            (this.generalControlsShortcuts = new C.Z(oe.generalControls)),
            this.generalControlsShortcuts.on(
              "fullscreen",
              this.onToggleFullScreen,
              this
            ),
            this.generalControlsShortcuts.listen([
              this.generalControlsShortcuts.getShortcut("fullscreen"),
            ]);
        },
        delegateEvents: function () {
          j.Z.prototype.delegateEvents.apply(this, arguments),
            this.onFullScreenChange(this.fullScreenChange),
            this.viewer.proxySettings.on("change", this.renderSettings, this),
            this.viewer.on("model-loaded", this.setModelListeners.bind(this));
        },
        undelegateEvents: function () {
          if (
            (j.Z.prototype.undelegateEvents.apply(this, arguments), !this.$el)
          )
            return this;
          this.offFullScreenChange(this.fullScreenChange),
            this.viewer.proxySettings.off("change", this.renderSettings, this),
            this.viewer.on(
              "model-loaded",
              this.removeModelListeners.bind(this)
            );
        },
        setModelListeners: function () {
          this.viewer.scene
            .getFeatures()
            .animation.getModel()
            .get("animations")
            .on("add remove reset", this.renderSettings, this);
          var e = this.viewer.scene.getFeatures().camera.getModel();
          this.listenTo(
            e,
            "change:useCameraConstraints",
            this.updateNavigationSettings.bind(this)
          );
        },
        removeModelListeners: function () {
          this.viewer.scene
            .getFeatures()
            .animation.getModel()
            .get("animations")
            .off("add remove reset", this.renderSettings, this);
          var e = this.viewer.scene.getFeatures().camera.getModel();
          this.stopListening(
            e,
            "change:useCameraConstraints",
            this.updateNavigationSettings.bind(this)
          );
        },
        setHasAnimations: function (e) {
          this.hasAnimations = e;
        },
        getSettingLabelForValue: function (e, t) {
          return (0, E.Z)(le[e].settings, function (e) {
            return e.value === t;
          }).label;
        },
        getEmbedUrl: function (e) {
          var t = z.ZP.craft(ne(ne({}, (0, B.Qc)(location.search)), e));
          return this.viewer._currentModel.get("embedUrl") + "?" + t;
        },
        onHelpClick: function (e) {
          e.preventDefault(),
            e.stopPropagation(),
            this.viewer.subviews.helpOverlay.show();
        },
        generateTextureQualitySettings: function (e) {
          le.textureQuality = {
            label: "Textures",
            group: "textureQuality",
            settings: [
              { label: "LD", value: "0" },
              { label: "SD", value: "1" },
              { label: "HD", value: "2" },
            ],
            order: 5,
          };
          var t = 0;
          ["low", "mid", "high"].forEach(
            function (i, s) {
              e[i] || (le.textureQuality.settings.splice(s - t, 1), t++);
            }.bind(this)
          ),
            ((0, R.Z)(le.textureQuality.settings).label = "HD"),
            this.renderSettings();
        },
        getAndroidIntentLink: function (e) {
          var t = e.url,
            i = this.viewer._currentModel.get("name"),
            s = this.viewer._currentModel.get("viewerUrl");
          return (
            "intent://arvr.google.com/scene-viewer/1.0?file=" +
            encodeURIComponent(t) +
            "&mode=ar_preferred&link=" +
            encodeURIComponent(s) +
            "&title=" +
            encodeURIComponent(i) +
            "#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;"
          );
        },
        updateNavigationSettings: function () {
          var e = this,
            t = this.getPlatform();
          "android" === t &&
            A.Z.getModelArEnterprise(t, this.viewer._currentModel.id)
              .then(function (t) {
                var i = document.querySelector(".control.tooltip.ar");
                i && (i.href = e.getAndroidIntentLink(t));
              })
              .catch(function (e) {
                console.error(e);
              }),
            this.viewer.scene
              .getFeatures()
              .camera.getModel()
              .get("useCameraConstraints")
              ? delete le.viewerMode
              : le.viewerMode ||
                (le.viewerMode = {
                  label: "Navigation",
                  settings: [
                    { label: "Orbit", value: "0" },
                    { label: "First Person", value: "1" },
                  ],
                  order: 4,
                }),
            this.renderSettings();
        },
        renderSettings: function () {
          (0, F.Z)(le)
            ? this.$(".control.settings").hide()
            : (this.$(".control.settings").show(),
              this.settings ||
                (this.settings = new te({
                  el: this.$(".settings-menu"),
                  viewer: this.viewer,
                  settings: le,
                })),
              this.settings.render());
        },
        getQrCode: function () {
          if ((0, V.Z)().uiArQrcode) {
            var e = document.getElementById("qrCode"),
              t = A.Z.getArRedirectionUrl(this.viewer._currentModel.get("uid"));
            return Promise.all([i.e(6565), i.e(8297)])
              .then(i.t.bind(i, "jGum", 19))
              .then(function (i) {
                return i.toCanvas(e, t, function (e) {
                  e && console.error(e);
                });
              });
          }
        },
        getPlatform: function () {
          var e = b.default.apple.device,
            t = b.default.android.device;
          if (e) {
            var i = (0, H.X)(),
              s = document.createElement("a");
            return i >= 11 || (s.relList && s.relList.supports("ar"))
              ? "ios"
              : "mobileIos";
          }
          return t ? ((0, H.d)() >= 7 ? "android" : "mobileAndroid") : "others";
        },
        openArDesktopInstructions: function () {
          this.viewer._currentModel.sharing().then(
            function () {
              var e = this.viewer._currentModel.get("sharing").shortUrl;
              this.viewer.subviews.arOverlayDesktop.setUrl(e),
                this.viewer.subviews.arOverlayDesktop.show();
            }.bind(this)
          );
        },
        openArMobileInstructions: function (e, t) {
          this.viewer.subviews.arOverlayMobile.setPlatform(e),
            this.viewer.subviews.arOverlayMobile.setMinVersion(t),
            this.viewer.subviews.arOverlayMobile.show();
        },
        setArLoaderListener: function () {
          var e = this;
          document.addEventListener(
            "visibilitychange",
            function t() {
              e.viewer.subviews.arOverlayLoading.hide(),
                document.removeEventListener("visibilitychange", t, !1);
            },
            !1
          );
        },
        onArClick: function (e) {
          var t = this;
          e.stopPropagation();
          var i = this.getPlatform();
          if ("ios" === i)
            this.viewer.subviews.arOverlayLoading.show(),
              this.setArLoaderListener(),
              y.Z ||
                setTimeout(
                  function () {
                    this.viewer.subviews.arOverlayLoading.hide();
                  }.bind(this),
                  1e4
                ),
              A.Z.getModelArEnterprise(i, this.viewer._currentModel.id)
                .then(function (e) {
                  var t = document.createElement("a"),
                    i = document.createElement("img");
                  (t.href = e.url), (t.rel = "ar"), t.appendChild(i), t.click();
                })
                .catch(function (e) {
                  t.viewer.subviews.arOverlayLoading.hide(),
                    t.viewer.subviews.arOverlayErrorMessage.show(),
                    console.error(e);
                });
          else {
            if ("android" === i)
              return (
                this.viewer.subviews.arOverlayLoading.show(),
                this.setArLoaderListener(),
                A.Z.getModelArEnterprise(i, this.viewer._currentModel.id)
                  .then(function (e) {
                    var i = t.getAndroidIntentLink(e);
                    window.open(i);
                  })
                  .catch(function (e) {
                    t.viewer.subviews.arOverlayLoading.hide(),
                      t.viewer.subviews.arOverlayErrorMessage.show(),
                      console.error(e);
                  }),
                !0
              );
            "mobileIos" === i
              ? this.openArMobileInstructions("iOS", "11")
              : "mobileAndroid" === i
              ? this.openArMobileInstructions("Android", "7")
              : (this.getQrCode(), this.openArDesktopInstructions());
          }
        },
        onVrClick: function (e) {
          var t = this,
            i = function () {
              t.widgets.hotspots &&
                (t.widgets.hotspots.hideTooltips(),
                (t.widgets.hotspots.currentHotspot = -1),
                t.widgets.hotspots.renderControl());
              var i = t.viewer.scene.getFeatures().webVR.getModel();
              if (
                (i.on(
                  "presentVrFailed",
                  function () {
                    this.openVrInstructions();
                  }.bind(t)
                ),
                t.viewer.scene.getViewerOSGJS().isVRSupported() &&
                  !b.default.apple.device)
              ) {
                if (t.viewer.scene.getViewerOSGJS().needsVRPolyFill()) {
                  var s = new W.Z({ message: "Initializing VR ..." });
                  return (
                    s.open(),
                    void t.viewer.scene
                      .getViewerOSGJS()
                      .loadWebxrPolyFill()
                      .then(
                        function () {
                          var t = this,
                            i = new ie.Z({
                              title: "Ready",
                              text: 'Press the "Enter VR" button to proceed.',
                              buttons: { ok: !0, okLabel: "Enter VR" },
                            });
                          s.replaceWith(i),
                            i.getPromise().then(function () {
                              return t.onVrClick(e);
                            });
                        }.bind(t)
                      )
                      .catch(
                        function () {
                          s.hide(), this.openVrInstructions();
                        }.bind(t)
                      )
                  );
                }
                i.set("enable", !i.get("enable"));
              } else
                b.default.any
                  ? (i.set("cardboard", !0),
                    t.fullscreenVR(e),
                    i.set("enable", !i.get("enable")))
                  : t.openVrInstructions();
            };
          "undefined" != typeof DeviceMotionEvent &&
          "function" == typeof DeviceMotionEvent.requestPermission
            ? DeviceMotionEvent.requestPermission()
                .then(function (e) {
                  "granted" === e && i();
                })
                .catch(function () {
                  alert(
                    "Accelerometer permission couldn't be granted. Please try again at a later time."
                  );
                })
            : i(),
            e.stopPropagation();
        },
        openVrWindow: function () {
          this.viewer._currentModel &&
            window.open(
              this.getEmbedUrl({ cardboard: 1, autostart: 1 }),
              "skfbCardboard",
              "menubar=no,toolbar=no"
            );
        },
        openVrInstructions: function () {
          this.viewer._currentModel.sharing().then(
            function () {
              this.viewer.subviews.helperVrOverlay.setUrl(
                this.getEmbedUrl({ cardboard: 1, autostart: 1 })
              ),
                this.viewer.subviews.helperVrOverlay.show();
            }.bind(this)
          );
        },
        isTheatreActive: function () {
          return this._theatreActive;
        },
        onTheatreClick: function (e) {
          e.stopPropagation(), e.preventDefault();
          var t = this.isTheatreActive(),
            i = I.Z.me().get("isAnonymous") && !this.wasClicked;
          (this.wasClicked = !0),
            this.viewer.trigger(
              t && !i ? "leaveTheatreMode" : "enterTheatreMode"
            );
          try {
            t && !i
              ? window.parent.postMessage("leaveTheatreMode", "*")
              : window.parent.postMessage("enterTheatreMode", "*");
          } catch (e) {}
          return (
            h.default.set("sf_theatre_mode", !t),
            this.viewer.$el.toggleClass("theatre-mode-active", !t),
            (this._theatreActive = !t),
            !1
          );
        },
        onFullscreenClick: function (e, t) {
          e.stopPropagation(), this.onToggleFullScreen(t);
        },
        onToggleFullScreen: function (e) {
          _.Z.hasFullscreen()
            ? _.Z.isFullscreen()
              ? _.Z.exitFullscreen()
              : _.Z.requestFullscreen(this.viewer.el)
            : e
            ? this.openVrWindow()
            : this.openFakeFullscreen();
        },
        openFakeFullscreen: function () {
          this.viewer._currentModel &&
            (b.default.any
              ? window.open(this.getEmbedUrl())
              : window.open(
                  this.getEmbedUrl(),
                  "skfbFullscreenFallback",
                  "menubar=no,toolbar=no"
                ));
        },
        onFullScreenChange: function (e) {
          _.Z.onFullScreenChange(e);
        },
        offFullScreenChange: function (e) {
          _.Z.offFullScreenChange(e);
        },
        fullScreenChange: function () {
          n()('[data-action="fullscreen"] > .icon')
            .toggleClass("icon-fullscreen-icon")
            .toggleClass("icon-fullscreen-off-icon"),
            this.viewer.$el.toggleClass("fullscreen", _.Z.isFullscreen()),
            this.viewer.scene.trigger("resizeViewerOnNextFrame", -1, -1);
          var e = this.viewer.scene.getFeatures().webVR;
          if (e) {
            var t = e.getModel();
            _.Z.isFullscreen()
              ? !0 === this.enableVR && t.set("enable", !0)
              : !0 === this.enableVR &&
                (t.set("enable", !1), (this.enableVR = !1));
          }
        },
        fullscreenVR: function (e) {
          return (this.enableVR = !0), this.onFullscreenClick(e, !0);
        },
        replaceDOMElement: (0, r.Z)(function (e) {
          var t = e.target.parentElement,
            i = e.target.nextSibling;
          t &&
            (t.removeChild(e.target),
            (0, l.Z)(function () {
              t.insertBefore(e.target, i);
            }));
        }, 2e3),
      });
      var he = { passive: !0 };
      const ue = j.Z.extend({
          VIEWER_MODE_ORBIT: 0,
          VIEWER_MODE_FPS: 1,
          HOTSPOT_CYCLE_PAUSE: 1e4,
          events: {
            "click .has-menu": "toggleMenu",
            "touchstart .has-menu": "toggleMenuTouch",
            keydown: "onKeydown",
            "mousedown  .webgl .canvas": "cameraMoveStart",
            "touchstart .webgl .canvas": "cameraMoveStart",
            "mousedown  .webgl": "mouseDownEvent",
            "touchstart .webgl": "mouseDownEvent",
            "mousedown  .fallback": "mouseDownEvent",
            "touchstart .fallback": "mouseDownEvent",
          },
          constructor: function () {
            (this.globalCloseEvent = this.globalCloseEvent.bind(this)),
              (this.globalMouseUpEvent = this.globalMouseUpEvent.bind(this)),
              (this.onKeydown = this.onKeydown.bind(this)),
              (this.onMousewheel = this.onMousewheel.bind(this)),
              j.Z.prototype.constructor.apply(this, arguments);
          },
          delegateEvents: function () {
            j.Z.prototype.delegateEvents.apply(this, arguments);
            var e = n()(document);
            e.on("keydown", this.onKeydown),
              e.on("mousedown", this.globalCloseEvent),
              e.on("mouseup", this.globalMouseUpEvent),
              e.on(
                "mousewheel.delegateEvents" + this.cid,
                ".annotation",
                this.preventScroll
              ),
              document.addEventListener("wheel", this.onMousewheel, he);
          },
          undelegateEvents: function () {
            j.Z.prototype.undelegateEvents.apply(this, arguments);
            var e = n()(document);
            e.off("keydown", this.onKeydown),
              e.off("mousedown", this.globalCloseEvent),
              e.off("mouseup", this.globalMouseUpEvent),
              e.off(
                "mousewheel.delegateEvents" + this.cid,
                ".annotation",
                this.preventScroll
              ),
              document.removeEventListener("wheel", this.onMousewheel, he);
          },
          enable: function () {
            this.$(".gui").removeClass("hidden"),
              (0, l.Z)(
                function () {
                  this.$(".gui").addClass("enabled");
                }.bind(this)
              );
          },
          disable: function () {
            this.$(".gui").removeClass("enabled").addClass("hidden");
          },
          closeMenus: function () {
            this.$(".gui").find(".has-menu").removeClass("active"),
              this.viewer.subviews.generalControls &&
                this.viewer.subviews.generalControls.settings &&
                this.viewer.subviews.generalControls.settings.togglePane(!1);
          },
          cameraMoveStart: function () {
            this.viewer.$(".webgl").addClass("camera-moving"),
              this.viewer.subviews.hotspots &&
                this.viewer.subviews.hotspots.pauseHotspotCycleInterval();
          },
          cameraMoveEnd: function () {
            this.viewer.$(".webgl").removeClass("camera-moving"),
              this.viewer.subviews.hotspots &&
                this.viewer.subviews.hotspots._hotspotCycleIntervalPaused &&
                this.viewer.subviews.hotspots.beginHotspotCycleInterval(
                  this.HOTSPOT_CYCLE_PAUSE
                );
          },
          onMousewheel: function () {
            if (this.viewer.scene) {
              var e = this.viewer.scene.getFeatures();
              if (Object.prototype.hasOwnProperty.call(e, "camera"))
                if (
                  e.camera.getModel().get("indexManipulator") ===
                  this.VIEWER_MODE_FPS
                ) {
                  var t = this.viewer.scene
                      .getViewerOSGJS()
                      .getManipulator()
                      .getCurrentManipulator()._stepFactor,
                    i = Math.round((t / 4) * 100);
                  this.viewer.subviews.osd.show("Walking speed: " + i, {
                    duration: 1e3,
                  });
                }
            }
          },
          onKeydown: function (e) {
            var t = document.activeElement,
              i = "";
            32 === e.which &&
              t &&
              ((i = t.tagName),
              -1 !== ["BODY", "CANVAS"].indexOf(i) &&
                (this.recenter(), e.preventDefault())),
              e.which >= 96 &&
                e.which <= 105 &&
                this.timeline &&
                this.timeline.setCurrentAnimation(e.which - 96),
              27 === e.which &&
                (this.viewer.subviews.hotspots &&
                  this.viewer.subviews.hotspots._hotspots.length &&
                  ((this.viewer.subviews.hotspots.currentHotspot = -1),
                  this.viewer.subviews.hotspots.applyCurrentHotspot(),
                  this.viewer.subviews.hotspots.unrevealHotspots(),
                  this.viewer.subviews.hotspots.stopHotspotCycleInterval()),
                this.closeMenus(),
                this.viewer.subviews.helpOverlay.hide());
          },
          preventParentScroll: function (e, t) {
            var i = n()(".hotspot-controls .list"),
              s = i.height(),
              o = i.children()[0].scrollHeight,
              a = i.children()[0].scrollTop;
            ((a === o - s && t < 0) || (0 === a && t > 0)) &&
              e.preventDefault();
          },
          preventScroll: function (e) {
            e.preventDefault();
          },
          globalMouseUpEvent: function () {
            this.cameraMoveEnd();
          },
          globalCloseEvent: function (e) {
            n()(e.target).hasClass("has-menu") ||
              n()(e.target).parents(".has-menu").length ||
              this.closeMenus(e);
          },
          toggleMenuTouch: function (e) {
            if ("label" === e.target.tagName.toLowerCase()) return e;
            e.preventDefault(), e.stopPropagation(), this.toggleMenu(e);
          },
          toggleMenu: function (e) {
            if ("label" === e.target.tagName.toLowerCase()) return e;
            e.preventDefault(), e.stopPropagation();
            var t = n()(e.currentTarget);
            t.hasClass("active")
              ? e.currentTarget === e.target &&
                t.attr("data-title", t.attr("title")).removeClass("active")
              : (this.closeMenus(),
                t
                  .attr("title", t.attr("data-title"))
                  .removeAttr("data-title")
                  .addClass("active"));
          },
          renderSetting: function (e, t) {
            this.viewer.$('[data-setting="' + e + '"]').removeClass("active"),
              ("wireframeColor" === e &&
                !1 === this.viewer.proxySettings.get("wireframeEnable")) ||
                this.viewer
                  .$('[data-setting="' + e + '"][data-value="' + t + '"]')
                  .addClass("active");
          },
          getPointerPosition: function (e) {
            var t,
              i = e.originalEvent ? e.originalEvent : e,
              s = {};
            return (
              (i.touches && i.touches.length) ||
              (i.changedTouches && i.changedTouches.length)
                ? ((t = (t =
                    i.touches && i.touches.length
                      ? i.touches
                      : i.changedTouches)[0]),
                  (s.x = t.pageX),
                  (s.y = t.pageY),
                  (s.type = "Touch"))
                : ((s.x = e.pageX), (s.y = e.pageY), (s.type = "Mouse")),
              s
            );
          },
          mouseDownEvent: function (e) {
            (this.mouseDownPosition = this.getPointerPosition(e)),
              this.viewer.subviews.hint.hide(),
              "touchstart" === e.type &&
                (e.target === e.currentTarget ||
                  (this.scene &&
                    this.scene.getCanvas &&
                    e.target === this.viewer.scene.getCanvas())) &&
                e.preventDefault();
          },
          recenter: function () {
            this.viewer.scene &&
              this.viewer.scene
                .getViewerOSGJS()
                .getManipulator()
                .computeHomePosition();
          },
        }),
        de = j.Z.extend({
          events: { "click .close": "close" },
          close: function (e) {
            e && e.preventDefault && e.preventDefault();
          },
        });
      var pe = i("uo4Z"),
        ge = u.Z.shortcuts;
      const ve = D.Z.extend({
        displayName: "HelpOverlay",
        mixins: [(0, pe.Z)(".tabs-container")],
        events: {
          "click .tabs a": "onTabClick",
          "touchstart .tabs a": "onTabClick",
          'click [data-action="reset-camera"]': "onResetCameraClick",
          'touchstart [data-action="reset-camera"]': "onResetCameraClick",
        },
        initialize: function () {
          D.Z.prototype.initialize.apply(this, arguments),
            (this.generalShortcuts = new C.Z(ge.generalControls)),
            (this.renderingShortcuts = new C.Z(ge.viewerRendering)),
            (this.annotationShortcuts = new C.Z(ge.annotationControl)),
            (this.animationShortcuts = new C.Z(ge.animationControl)),
            (this.soundShortcuts = new C.Z(ge.sound)),
            (this.inspectorShortcuts = new C.Z(ge.inspectorControl)),
            this.render();
        },
        onResetCameraClick: function (e) {
          e.preventDefault(),
            this.hide(),
            this.viewer.scene.getFeaturesManager().focusOnSavedCamera(2),
            (0, l.Z)(function (e) {
              e.target.blur();
            }, e);
        },
        render: function () {
          var e = this.renderingShortcuts.generateHelpSection(),
            t = this.generalShortcuts.generateHelpSection(),
            i = this.animationShortcuts.generateHelpSection(),
            s = this.annotationShortcuts.generateHelpSection(),
            n = this.inspectorShortcuts.generateHelpSection(),
            o = this.soundShortcuts.generateHelpSection();
          this.$(".rendering-shortcuts").html(e),
            this.$(".general-shortcuts").html(t),
            this.$(".animation-shortcuts").html(i),
            this.$(".annotation-shortcuts").html(s),
            this.$(".inspector-shortcuts").html(n),
            this.$(".sound-shortcuts").html(o);
        },
        onTabClick: function (e) {
          e.preventDefault();
          var t = n()(e.currentTarget),
            i = t.attr("data-target"),
            s = this.$("[data-tab].active"),
            o = this.$('[data-tab="' + i + '"]');
          this.$(".tabs li").removeClass("active"),
            t.parent().addClass("active"),
            s.removeClass("active"),
            o.addClass("active");
        },
      });
      var fe = i("Wuy/");
      const me = j.Z.extend({
        initialize: function () {
          j.Z.prototype.initialize.apply(this, arguments),
            (this.$hint = this.$(".viewer-hint"));
          var e = b.default.any
            ? "touch &amp; drag<br>to rotate"
            : "click &amp; hold<br>to rotate";
          this.$hint.find(".viewer-movehint .label").html(e),
            this.options.fallback && this.$hint.addClass("fallback-position");
        },
        show: function (e) {
          e = (0, fe.Z)((0, o.Z)({}, e), { force: !1 });
          var t = !h.default.get("sf_show_viewer_hint"),
            i = (0, V.Z)().uiHint;
          2 === i && (e.force = !0),
            (e.force || (1 === i && t)) && this.$hint.addClass("active");
        },
        hide: function (e) {
          (e = (0, fe.Z)((0, o.Z)({}, e), { remember: !0 })),
            this.$hint.removeClass("active"),
            e.remember && h.default.set("sf_show_viewer_hint", 1);
        },
      });
      var we = i("3pbp");
      const be = D.Z.extend({
        mixins: [we.Z, (0, pe.Z)(".js-scrollable")],
        setModel: function (e) {
          (this.model = e), this.render();
        },
        render: function () {
          this.model &&
            (this.$(".hotspot-title").html(
              (0, Z.sanitize)(this.model.get("name"))
            ),
            this.$(".hotspot-content").html(this.model.get("content").rendered),
            this.handleLazyLoading());
        },
      });
      var ye = i("aqzA"),
        Se = i("lotc"),
        Ce = ye.Z.osg,
        Ze = new (p())({ device: "VWR" });
      const Me = j.Z.extend({
        optionTypes: { color: Se.Z.string },
        reset: function () {
          (this._primaryProgress = 0), (this._secondaryProgress = 0);
        },
        handleLoading: function (e) {
          e.scene.on(
            "primary-progress",
            function (e) {
              if ((this.setPrimaryProgress(e.progress), (0, V.Z)().isApp)) {
                var t = Ze.createMessage({
                  data: { progress: e.progress + "" },
                });
                this.previousMessage && this.previousMessage.removeFromHash(),
                  t.appendToHash(),
                  (this.previousMessage = t);
              }
            }.bind(this)
          ),
            e.scene.on(
              "secondary-progress",
              function (e) {
                this.setSecondaryProgress(e.progress);
              }.bind(this)
            ),
            e.scene.on(
              "success",
              function () {
                this.viewer.$el
                  .removeClass("model-loading")
                  .addClass("model-loaded"),
                  e.model.trigger("status:loaded"),
                  this.trigger("loaded");
              }.bind(this)
            ),
            e.scene.on(
              "fail",
              function () {
                Ce.error("Viewer instanciation failed");
              }.bind(this)
            );
        },
        setPrimaryProgress: function (e) {
          (this._primaryProgress = Math.min(
            Math.max(this._primaryProgress, e),
            1
          )),
            this.updateMainProgressBar(),
            1 === this._primaryProgress && this.setSecondaryProgress(0);
        },
        setSecondaryProgress: function (e) {
          (this._secondaryProgress = Math.min(Math.max(0, e), 1)),
            this.updateSecondaryProgressBar();
        },
        updateMainProgressBar: function () {
          var e = this._primaryProgress,
            t = 1 === e;
          this.$(".main-progress").toggleClass("loading", !t),
            this.$(".main-progress-display__progress").css({
              width: 100 * e + "%",
            }),
            this.$(".main-progress-percentage").text(
              Math.floor(100 * e) + " %"
            );
        },
        updateSecondaryProgressBar: function () {
          var e = this._secondaryProgress;
          this.$(".secondary-progress-percentage").text(
            Math.floor(100 * e) + " %"
          ),
            this.$(".secondary-progress-display").css("width", 100 * e + "%");
          var t = 1 === this._primaryProgress,
            i = 1 === e;
          this.$(".secondary-progress").toggleClass("visible", t && !i);
        },
      });
      var Ve = i("wgEG"),
        xe = i("3+4K"),
        ke = i("p7Vz"),
        _e = i("yCA5"),
        Te = i("UGpv"),
        Oe = i("W4lT"),
        Pe = (i("UmQC"), i("45Yh")),
        De = i("p5Lb");
      function $e(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, s);
        }
        return i;
      }
      function Ee(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? $e(Object(i), !0).forEach(function (t) {
                (0, $.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : $e(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      const Re = Te.Z.extend({
        displayName: "Dropdown",
        mixins: [(0, pe.Z)('[data-ref="menu"]'), _e.Z],
        optionTypes: {
          child: Se.Z.component.isRequired,
          labelTitle: Se.Z.string,
          labelValue: Se.Z.string,
          longestLabelValue: Se.Z.string,
          placeholder: Se.Z.string,
          color: Se.Z.string,
          className: Se.Z.string,
          theme: Se.Z.oneOf([
            "dark",
            "light",
            "white-background",
            "grey-background",
          ]),
          menuAlign: Se.Z.oneOf(["left", "right"]),
          disabled: Se.Z.bool,
          withBackground: Se.Z.bool,
          grey: Se.Z.bool,
        },
        defaultOptions: {
          color: "",
          theme: "light",
          menuAlign: "left",
          disabled: !1,
          withBackground: !1,
          grey: !1,
        },
        events: {
          'click [data-action="toggle-menu"]:not([data-disabled="true"])':
            "onToggle",
          "click window": "onWindowClick",
          "resize window": "setMenuPosition",
        },
        state: { isOpen: !1 },
        viewDidMount: function () {
          this.setMenuPosition();
        },
        viewDidUpdate: function () {
          this.setMenuPosition();
        },
        onToggle: function () {
          this.setState({ isOpen: !this.state.isOpen });
        },
        onWindowClick: function (e) {
          !(0, Pe.Ub)(this.el, e.target) &&
            this.state.isOpen &&
            this.setState({ isOpen: !1 });
        },
        setMenuPosition: function () {
          var e = this.el.getBoundingClientRect(),
            t = this.refs.menu.getBoundingClientRect();
          this.refs.$menu.css({
            bottom: -Math.min(
              0,
              window.innerHeight - (e.bottom + t.height + 10)
            ),
            right:
              "right" === this.options.menuAlign
                ? Math.min(0, e.right - (t.width + 10))
                : "auto",
            left:
              "left" === this.options.menuAlign
                ? Math.min(0, window.innerWidth - (e.left + t.width + 10))
                : "auto",
          });
        },
        scrollToHeightPercent: function (e) {
          var t = this.refs.$menu.prop("scrollHeight");
          this.refs.$menu.scrollTop((0, De.vX)(0, 1, e) * t);
        },
        template: function () {
          var e = this;
          return N.Z.getFromMacro(
            "front/macros/components/atoms/dropdown",
            "dropdown",
            [
              {
                isOpen: this.state.isOpen && !this.options.disabled,
                labelTitle: this.options.labelTitle,
                labelValue: this.options.labelValue,
                longestLabelValue: this.options.longestLabelValue,
                placeholder: this.options.placeholder,
                color: this.options.color,
                disabled: this.options.disabled,
                withBackground: this.options.withBackground,
                grey: this.options.grey,
                theme: this.options.theme,
                className: this.options.className,
                components: this.createChildrenComponents({
                  child: [].concat(this.options.child).map(function (t, i) {
                    return Ee(
                      Ee({}, t),
                      {},
                      {
                        options: Ee(
                          Ee({}, t.options),
                          {},
                          {
                            key: t.options.key || i,
                            dropdown: {
                              isOpen: e.state.isOpen,
                              onToggle: e.onToggle.bind(e),
                              scrollToHeightPercent:
                                e.scrollToHeightPercent.bind(e),
                            },
                          }
                        ),
                      }
                    );
                  }),
                }),
              },
            ]
          );
        },
      });
      var Fe = (0, ke.Z)(function (e, t) {
          return e + t;
        }),
        Ie = function (e, t) {
          return (0, Oe.zy)(e, {}, function (e) {
            return e.value === t;
          });
        },
        Ae = Te.Z.extend({
          displayName: "DropdownOptionList",
          mixins: [_e.Z],
          optionTypes: {
            value: Se.Z.string.isRequired,
            options: Se.Z.arrayOf(
              Se.Z.shape({
                title: Se.Z.string.isRequired,
                value: Se.Z.string.isRequired,
                default: Se.Z.bool,
              }).isRequired
            ).isRequired,
            onSelectOption: Se.Z.func.isRequired,
            dropdown: Se.Z.shape({
              isOpen: Se.Z.bool.isRequired,
              onToggle: Se.Z.func.isRequired,
              scrollToHeightPercent: Se.Z.func.isRequired,
            }).isRequired,
            color: Se.Z.string,
            theme: Se.Z.string,
            closeOnSelection: Se.Z.bool,
          },
          events: {
            'click [data-action="select-option"]': "onOptionClick",
            'mouseenter [data-action="select-option"]': "onMouseEnterOption",
            'mouseleave [data-action="select-option"]': "onMouseLeaveOption",
            "keydown window": "onWindowKeyDown",
          },
          viewDidMount: function () {
            this.updateScrollPosition();
          },
          viewDidUpdate: function () {
            this.updateScrollPosition();
          },
          getSelectedIndex: function () {
            return this.options.options.indexOf(
              Ie(this.options.options, this.options.value)
            );
          },
          onOptionClick: function (e) {
            this.options.onSelectOption(e.target.getAttribute("data-value")),
              this.options.closeOnSelection &&
                this.options.dropdown.isOpen &&
                this.options.dropdown.onToggle();
          },
          onMouseEnterOption: function (e) {
            e.target.style.color = this.options.color;
          },
          onMouseLeaveOption: function (e) {
            e.target.getAttribute("data-active") || (e.target.style.color = "");
          },
          onWindowKeyDown: function (e) {
            this.options.dropdown.isOpen &&
              this.options.options.length &&
              ((38 !== e.which && 40 !== e.which) || e.preventDefault(),
              38 === e.which && this.selectIndex(Fe(-1)),
              40 === e.which && this.selectIndex(Fe(1)));
          },
          selectIndex: function (e) {
            var t = this.getSelectedIndex(),
              i = this.options.options.length,
              s = (i + e(t)) % i;
            this.options.onSelectOption(this.options.options[s].value),
              (this.scrollAtNextRender = !0);
          },
          scrollToSelectedOption: function () {
            var e = (this.getSelectedIndex() - 1) / this.options.options.length;
            this.options.dropdown.scrollToHeightPercent(e);
          },
          updateScrollPosition: function () {
            this.scrollAtNextRender &&
              ((this.scrollAtNextRender = !1), this.scrollToSelectedOption());
          },
          template: function () {
            return N.Z.getFromString(
              [
                "<ul class=\"c-dropdown-select {{ '--' + theme + '-theme' if theme else '' }}\">",
                "    {% for optionItem in options %}",
                "        {% set isActive = optionItem.value == value %}",
                "        <li",
                '            class="c-dropdown-select__option {{ {',
                "                '--active': isActive",
                '            } | class_names }}"',
                '            style="{{ {',
                "                'color': color if isActive else ''",
                '            } | style }}"',
                '            {% if isActive %} data-active="true" {% endif %}',
                '            data-value="{{ optionItem.value }}"',
                '            data-action="select-option">',
                "            {{ optionItem.title }}",
                "        </li>",
                "    {% endfor %}",
                "</ul>",
              ].join("\n"),
              {
                options: this.options.options,
                value: this.options.value,
                color: this.options.color,
                theme: this.options.theme,
              }
            );
          },
        });
      const Le = Te.Z.extend({
        displayName: "DropdownSelect",
        optionTypes: {
          value: Se.Z.string.isRequired,
          onChange: Se.Z.func.isRequired,
          options: Se.Z.arrayOf(
            Se.Z.shape({
              title: Se.Z.string.isRequired,
              value: Se.Z.string.isRequired,
              default: Se.Z.bool,
            }).isRequired
          ).isRequired,
          title: Se.Z.string,
          placeholder: Se.Z.string,
          color: Se.Z.string,
          theme: Se.Z.oneOf([
            "dark",
            "light",
            "white-background",
            "grey-background",
          ]),
          menuAlign: Se.Z.oneOf(["left", "right"]),
          disabled: Se.Z.bool,
          closeOnSelection: Se.Z.bool,
          autoScale: Se.Z.bool,
        },
        defaultOptions: { theme: "light", closeOnSelection: !0, autoScale: !1 },
        initialize: function () {
          Te.Z.prototype.initialize.apply(this, arguments);
          var e = this.getDefaultValue();
          !this.options.value && e && this.options.onChange(e);
        },
        getDefaultValue: function () {
          return (0, Oe.zy)(this.options.options, {}, function (e) {
            return e.default;
          }).value;
        },
        template: function () {
          return N.Z.getFromString("{{ components.dropdown | component }}", {
            components: this.createChildrenComponents({
              dropdown: {
                viewClass: Re,
                options: {
                  disabled: this.options.disabled,
                  labelTitle: this.options.title,
                  labelValue: Ie(this.options.options, this.options.value)
                    .title,
                  longestLabelValue: this.options.autoScale
                    ? this.options.options.reduce(function (e, t) {
                        return e.length > t.title.length ? e : t.title;
                      }, "")
                    : "",
                  placeholder: this.options.placeholder,
                  color: this.options.color,
                  theme: this.options.theme,
                  className: this.options.className,
                  menuAlign: this.options.menuAlign,
                  child: {
                    viewClass: Ae,
                    options: {
                      value: this.options.value,
                      options: this.options.options,
                      color: this.options.color,
                      theme: this.options.theme,
                      closeOnSelection: this.options.closeOnSelection,
                      onSelectOption: this.options.onChange,
                    },
                  },
                },
              },
            }),
          });
        },
      });
      var He = i("KGKI"),
        Be = i("e+fc");
      function ze(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          t &&
            (s = s.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            i.push.apply(i, s);
        }
        return i;
      }
      function Ne(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ze(Object(i), !0).forEach(function (t) {
                (0, $.Z)(e, t, i[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
            : ze(Object(i)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(i, t)
                );
              });
        }
        return e;
      }
      var Ue = (0, i("ULsr").Z)(He.Z),
        We = u.Z.shortcuts,
        je = {
          render: {
            title:
              "Render (" +
              We.inspectorControl.shortcuts[0].keyCombinations +
              ")",
            displayViews: [
              {
                text: "Final Render",
                icon: "viewer-icon-final-render",
                value: "Default",
                has2dView: !1,
              },
              {
                text: "No Post-Processing",
                icon: "viewer-icon-final-render",
                value: "DefaultNoPostProcess",
                has2dView: !1,
              },
            ],
          },
          animation: {
            title:
              "Animation (" +
              We.inspectorControl.shortcuts[4].keyCombinations +
              ")",
            displayViews: [
              {
                text: "Bones",
                icon: "viewer-icon-bones",
                value: "Bones",
                has2dView: !0,
              },
              {
                text: "Bones Influence",
                icon: "viewer-icon-influences",
                value: "BoneWeights",
                has2dView: !0,
              },
            ],
          },
          materials: {
            title:
              "Material channels (" +
              We.inspectorControl.shortcuts[1].keyCombinations +
              ")",
            displayViews: [
              {
                text: "Albedo",
                icon: "viewer-icon-diffuse",
                value: "DiffusePBR",
                has2dView: !0,
              },
              {
                text: "Base Color",
                icon: "viewer-icon-diffuse",
                value: "AlbedoPBR",
                has2dView: !0,
              },
              {
                text: "Diffuse",
                icon: "viewer-icon-diffuse",
                value: "DiffuseColor",
                has2dView: !0,
              },
              {
                text: "Specular",
                icon: "viewer-icon-specular",
                value: "SpecularPBR",
                has2dView: !0,
              },
              {
                text: "Metalness",
                icon: "viewer-icon-metalness",
                value: "MetalnessPBR",
                has2dView: !0,
              },
              {
                text: "Specular Color",
                icon: "viewer-icon-specular",
                value: "SpecularColor",
                has2dView: !0,
              },
              {
                text: "Glossiness",
                icon: "viewer-icon-roughness",
                value: "GlossinessPBR",
                has2dView: !0,
              },
              {
                text: "Anisotropy",
                icon: "viewer-icon-normal-map",
                value: "Anisotropy",
                has2dView: !0,
              },
              {
                text: "Roughness",
                icon: "viewer-icon-roughness",
                value: "RoughnessPBR",
                has2dView: !0,
              },
              {
                text: "Specular Glossiness",
                icon: "viewer-icon-specular",
                value: "SpecularHardness",
                has2dView: !0,
              },
              {
                text: "Scattering",
                icon: "viewer-icon-subsurface",
                value: "SubsurfaceScattering",
                has2dView: !0,
              },
              {
                text: "Translucency",
                icon: "viewer-icon-subsurface",
                value: "SubsurfaceTranslucency",
                has2dView: !0,
              },
              {
                text: "Normal Map",
                icon: "viewer-icon-normal-map",
                value: "NormalMap",
                has2dView: !0,
              },
              {
                text: "Bump Map",
                icon: "viewer-icon-normal-map",
                value: "BumpMap",
                has2dView: !0,
              },
              {
                text: "AO map",
                icon: "viewer-icon-AO",
                value: "AOPBR",
                has2dView: !0,
              },
              {
                text: "Cavity",
                icon: "viewer-icon-AO",
                value: "CavityPBR",
                has2dView: !0,
              },
              {
                text: "Lightmap",
                icon: "viewer-icon-lightmap",
                value: "DiffuseIntensity",
                has2dView: !0,
              },
              {
                text: "Displacement",
                icon: "viewer-icon-displacement",
                value: "Displacement",
                has2dView: !0,
              },
              {
                text: "Opacity",
                icon: "viewer-icon-transparency",
                value: "Opacity",
                has2dView: !0,
              },
              {
                text: "Alpha Masking",
                icon: "viewer-icon-transparency",
                value: "AlphaMask",
                has2dView: !0,
              },
              {
                text: "Emission",
                icon: "viewer-icon-emission",
                value: "EmitColor",
                has2dView: !0,
              },
              {
                text: "Specular F0",
                icon: "viewer-icon-specular",
                value: "SpecularF0",
                has2dView: !0,
              },
              {
                text: "Vertex Color",
                icon: "viewer-icon-diffuse",
                value: "VertexColor",
                has2dView: !0,
              },
              {
                text: "Vertex Alpha",
                icon: "viewer-icon-transparency",
                value: "VertexAlpha",
                has2dView: !0,
              },
              {
                text: "Clear Coat",
                icon: "viewer-icon-specular",
                value: "ClearCoat",
                has2dView: !0,
              },
              {
                text: "Clear Coat Roughness",
                icon: "viewer-icon-roughness",
                value: "ClearCoatRoughness",
                has2dView: !0,
              },
              {
                text: "Clear Coat Normal Map",
                icon: "viewer-icon-normal-map",
                value: "ClearCoatNormalMap",
                has2dView: !0,
              },
              {
                text: "Sheen",
                icon: "viewer-icon-specular",
                value: "Sheen",
                has2dView: !0,
              },
              {
                text: "Sheen Roughness",
                icon: "viewer-icon-roughness",
                value: "SheenRoughness",
                has2dView: !0,
              },
            ],
          },
          geometry: {
            title:
              "Geometry (" +
              We.inspectorControl.shortcuts[2].keyCombinations +
              ")",
            displayViews: [
              {
                text: "Matcap",
                icon: "viewer-icon-final-render",
                value: "MatcapFlat",
                has2dView: !1,
              },
              {
                text: "Matcap+Surface",
                icon: "viewer-icon-final-render",
                value: "MatcapDetail",
                has2dView: !1,
              },
              {
                text: "Wireframe",
                icon: "viewer-icon-geometry",
                value: "Wireframe",
                has2dView: !0,
              },
              {
                text: "Vertex Normals",
                icon: "viewer-icon-vertex-normals",
                value: "VertexNormal",
                has2dView: !1,
              },
            ],
          },
          uv: {
            title:
              "UV (" + We.inspectorControl.shortcuts[3].keyCombinations + ")",
            displayViews: [
              {
                text: "UV Checker",
                icon: "viewer-icon-UV",
                value: "UVChecker",
                has2dView: !0,
              },
            ],
          },
        },
        Qe = N.Z.getFromString(
          '\n        <div class="model-inspector__wireframe">\n            {{ wireframe | safe }}\n        </div>\n        <div class="model-inspector__single-sided-button"></div>\n        {{ components.singleSidedButton | component }}\n        {% if inspectableTextures or isStaff %}\n            <div class="mode__title">Viewport{%if not inspectableTextures and isStaff %} (Staff only){% endif %}</div>\n            <div class="toggle-button{%if not inspectableTextures and isStaff %} --staff{% endif %}">\n                <span class="toggle-button__option">\n                    <input type="radio" name="splitType" data-value="3d" id="splitType-3d">\n                    <label for="splitType-3d">3D</label>\n                </span>\n                <span class="toggle-button__option">\n                    <input type="radio" name="splitType" data-value="split" id="splitType-split">\n                    <label for="splitType-split">3D + 2D</label>\n                </span>\n                <span class="toggle-button__option">\n                    <input type="radio" name="splitType" data-value="2d" id="splitType-2d">\n                    <label for="splitType-2d">2D</label>\n                </span>\n            </div>\n        {% endif %}\n       {% for category, mode in modes %}\n            {% if mode.displayViews %}\n                <div class="mode__title">{{ mode.title }}</div>\n            {% endif %}\n            <ul>\n                {% for button in mode.displayViews %}\n                    <li                        class="mode {{ "selected" if button.value == active else "" }}" data-mode="{{ mode.title }}" data-value="{{ button.value }}"\n                        style="{{ button.style }}"\n                    >\n                        <i class="mode__icon {{ button.icon }}"></i>\n                        <span>{{ button.text }}</span>\n                    </li>\n                    {% endfor %}\n            </ul>\n       {% endfor %}\n    '
        ),
        qe = [
          "displayView",
          "material",
          "splitType",
          "texCoord",
          "forceSingleSided",
        ],
        Ge = { displayView: "Default", forceSingleSided: !1, splitType: "3d" };
      const Ke = j.Z.extend({
          mixins: [(0, pe.Z)(".js-scrollable")],
          children: {
            singleSidedButton: {
              selector: ".model-inspector__single-sided-button",
              viewClass: Ue,
              options: function () {
                var e = this;
                return {
                  "data-selenium": "single-sided",
                  children: "Single Sided",
                  value: Boolean(this.model.get("forceSingleSided")),
                  onChange: function (t) {
                    return e.model.set("forceSingleSided", t);
                  },
                };
              },
            },
            materialSelector: {
              selector:
                ".model-inspector__2D-options .model-inspector__material-options",
              viewClass: Le,
              shouldCreateChild: function () {
                return (
                  this.canInspectTextures() &&
                  "3d" !== this.model.get("splitType")
                );
              },
              options: function () {
                var e = this;
                return {
                  theme: "dark",
                  value: this.model.get("material").toString(),
                  onChange: function (t) {
                    return e.model.set("material", t);
                  },
                  options: this.model
                    .get("materialList")
                    .filter(function (e) {
                      return !e.uidUniqueMerged;
                    })
                    .map(
                      function (e) {
                        var t = e.uidListUnusedDuplicates.length
                          ? "Merged (" + e.name + ", ...)"
                          : e.name;
                        return {
                          title: this.model.materialHasTextureInView2d(e.uid)
                            ? t
                            : t + " (no texture)",
                          value: e.uid,
                        };
                      }.bind(this)
                    )
                    .sort(function (e, t) {
                      return e.title < t.title
                        ? -1
                        : e.title > t.title
                        ? 1
                        : void 0;
                    }),
                  closeOnSelection: !1,
                  autoScale: !0,
                };
              },
            },
            UVSelector: {
              selector:
                ".model-inspector__2D-options .model-inspector__UV-options",
              viewClass: Le,
              shouldCreateChild: function () {
                return (
                  this.canInspectTextures() &&
                  this.model.getCurrentUVs().length > 1
                );
              },
              options: function () {
                return {
                  theme: "dark",
                  value: this.model.get("texCoord").toString(),
                  onChange: function (e) {
                    this.model.set("texCoord", e);
                  }.bind(this),
                  options: this.model
                    .getCurrentUVs()
                    .sort(function (e, t) {
                      return e - t;
                    })
                    .map(function (e) {
                      return {
                        title: "UV " + e.toString(),
                        value: e.toString(),
                      };
                    }),
                  closeOnSelection: !1,
                  autoScale: !0,
                };
              },
            },
          },
          events: {
            "click .mode": "onSelectDisplayView",
            "click .model-inspector__minimize": "toggleVisibility",
            'click [name="splitType"]': "onSelectSplitType",
            "click [data-setting]": "changeWireframe",
          },
          initialize: function () {
            var e = this;
            j.Z.prototype.initialize.apply(this, arguments),
              this.initializeShortcuts(),
              this.updateModes(),
              this.updateSavedState(),
              (this._selectors = this.$(".model-inspector__2D-options")),
              this.render(),
              this._selectors.css({ visibility: "hidden" }),
              window.addEventListener("message", function (t) {
                t.data === Be.I && e.toggle();
              });
          },
          delegateEvents: function () {
            j.Z.prototype.delegateEvents.apply(this, arguments),
              this.model.on(
                "change:displayView",
                this.updateDisplayViewUI,
                this
              ),
              this.model.on(
                "change:material change:texCoord change:displayView change:forceSingleSided",
                this.renderChildren,
                this
              ),
              this.model.on(
                "change:material change:displayView change:splitType",
                this.update2DView,
                this
              ),
              this.model.on(
                "change:availableDisplayView",
                this.updateAvailableDisplayView,
                this
              ),
              this.model.on("change:uiVisible", this.show, this);
          },
          undelegateEvents: function () {
            j.Z.prototype.undelegateEvents.apply(this, arguments),
              this.model.off(
                "change:displayView",
                this.updateDisplayViewUI,
                this
              ),
              this.model.off(
                "change:material change:texCoord change:displayView change:forceSingleSided",
                this.renderChildren,
                this
              ),
              this.model.off(
                "change:material change:displayView change:splitType",
                this.update2DView,
                this
              ),
              this.model.off(
                "change:availableDisplayView",
                this.updateAvailableDisplayView,
                this
              ),
              this.model.off("change:uiVisible", this.show, this);
          },
          updateModes: function () {
            var e = this.model.get("availableDisplayView");
            (this.modes = (0, Ve.Z)(
              je,
              function (t, i, s) {
                var n = i.displayViews.filter(function (t) {
                  return -1 !== e.indexOf(t.value);
                });
                if (0 === n.length) return t;
                var a = (0, o.Z)({}, i, { displayViews: n });
                return (t[s] = a), t;
              },
              {}
            )),
              (this.modeNamesWith2d = (0, Ve.Z)(
                this.modes,
                function (e, t) {
                  var i = t.displayViews
                    .filter(function (e) {
                      return e.has2dView;
                    })
                    .map(function (e) {
                      return e.value;
                    });
                  return e.concat(i);
                },
                []
              ));
          },
          changeWireframe: function (e) {
            var t = e.currentTarget.dataset.setting,
              i = e.currentTarget.dataset.value;
            if ("wireframeEnable" === t) {
              var s = !this.options.wireframeModel.get("wireframeEnable");
              return this.options.wireframeModel.set("wireframeEnable", s);
            }
            this.options.wireframeModel.set("wireframeEnable", !0),
              this.options.wireframeModel.set(t, i);
          },
          onSelectDisplayView: function (e) {
            var t = e.currentTarget.getAttribute("data-value");
            this.model.set("displayView", t);
          },
          canInspectTextures: function () {
            return this.options.inspectableTextures || I.Z.me().get("isStaff");
          },
          _currentModeHas2dView: function () {
            var e = this.model.get("displayView");
            return -1 !== this.modeNamesWith2d.indexOf(e);
          },
          _getDisplayViewLabel: function () {
            return this.$el
              .find("[data-value=" + this.model.get("displayView") + "]")
              .text()
              .trim();
          },
          updateDisplayViewUI: function () {
            this.$el.find(".selected").removeClass("selected"),
              this.$el
                .find("[data-value=" + this.model.get("displayView") + "]")
                .addClass("selected");
          },
          updateAvailableDisplayView: function () {
            this.updateModes(),
              -1 ===
                this.model
                  .get("availableDisplayView")
                  .indexOf(this._savedState.displayView) &&
                (this._savedState.displayView = "Default"),
              this.render();
          },
          update2DView: function () {
            if (this.canInspectTextures())
              if (
                (this.updateSelectorsUI(),
                "3d" === this.model.get("splitType") ||
                  this.model.materialHasContentInView2d(
                    this.model.get("material")
                  ))
              )
                this.$el.find(".model-inspector__empty-2d-view").text("");
              else {
                var e =
                    this.model.get("materialByUid")[this.model.get("material")]
                      .name,
                  t = this.$el.find(".model-inspector__empty-2d-view"),
                  i = "2d" === this.model.get("splitType") ? "50%" : "25%",
                  s = "";
                (s = this._currentModeHas2dView()
                  ? "No data in " + e + "/" + this._getDisplayViewLabel()
                  : "2D view isn't available for " +
                    this._getDisplayViewLabel() +
                    ".\nSelect a Material Channel to view textures."),
                  t.text(s).css("right", i);
              }
          },
          updateSelectorsUI: function () {
            "3d" !== this.model.get("splitType") && this._currentModeHas2dView()
              ? this._selectors.css({ visibility: "visible" })
              : this._selectors.css({ visibility: "hidden" });
          },
          onSelectSplitType: function (e) {
            this.canInspectTextures() &&
              this.model.set(
                "splitType",
                e.currentTarget.getAttribute("data-value")
              );
          },
          initializeShortcuts: function () {
            var e = new C.Z(We.inspectorControl),
              t = this.onShortcut.bind(this),
              i = function () {
                this.toggle();
              }.bind(this);
            e.on("render materials geometry uv animation", t),
              e.on("inspector", i),
              e.listen();
          },
          onShortcut: function (e) {
            var t = this.modes[e.id];
            if (t) {
              var i = this._savedState.displayView,
                s = (0, xe.Z)(t.displayViews, function (e) {
                  return e.value === i;
                }),
                n = (s + 1) % t.displayViews.length,
                o = t.displayViews[n];
              this.model.get("uiVisible")
                ? this.options.osd.hide()
                : (0, w.Z)()
                ? this.model.set("uiVisible", !0)
                : this.options.osd.show(o.text, { duration: 1e3 }),
                this.model.set("displayView", o.value),
                this.updateSavedState();
            }
          },
          close: function () {
            this.$el.removeClass("--show"),
              this.updateSavedState(),
              this.model.set(Ge);
          },
          show: function (e, t) {
            this.$el.toggleClass("--show --open", t);
          },
          restoreState: function () {
            this.model.set(this._savedState);
          },
          updateSavedState: function () {
            var e = this;
            this._savedState = qe.reduce(function (t, i) {
              return Ne(Ne({}, t), {}, (0, $.Z)({}, i, e.model.get(i)));
            }, {});
          },
          toggle: function () {
            this.model.get("uiVisible")
              ? (this.model.set("uiVisible", !1), this.close())
              : (this.model.set("uiVisible", !0), this.restoreState());
          },
          toggleVisibility: function () {
            this.$el.toggleClass("--open");
          },
          render: function () {
            var e = this.viewer.proxySettings.get("setting.name");
            this.$(".model-inspector__modes").html(
              Qe({
                inspectableTextures: this.options.inspectableTextures,
                modes: this.modes,
                active: this.model.get("displayView"),
                wireframe: re({ wireframeColor: e }),
                isStaff: I.Z.me().get("isStaff"),
              })
            ),
              this.renderChildren(),
              this.afterRender();
          },
          afterRender: function () {
            this.$('[data-value="' + this.model.get("splitType") + '"]').prop(
              "checked",
              !0
            );
          },
        }),
        Je = j.Z.extend({
          events: { "click .osd": "hide" },
          show: function (e, t) {
            this.osdTimeout && window.clearTimeout(this.osdTimeout),
              (t = (0, o.Z)({ position: "center" }, t));
            var i = this.$(".osd");
            i.find(".osd-content").html(e),
              i.addClass("active"),
              i.removeClass("osd-top osd-center"),
              i.addClass("osd-" + t.position),
              t.duration &&
                ((t.duration = Math.max(0, t.duration)),
                t.duration !== 1 / 0 &&
                  (this.osdTimeout = setTimeout(
                    this.hide.bind(this),
                    t.duration
                  )));
          },
          hide: function () {
            this.$(".osd").removeClass("active");
          },
        });
      var Ye = i("sg6w"),
        Xe = i("WjOL"),
        et = i("SM3V"),
        tt = i("Oyie"),
        it = ye.Z.osg;
      const st = j.Z.extend({
        events: {
          "mouseover .snapshot .button": "showGuides",
          "mouseout .snapshot .button": "hideGuides",
        },
        initialize: function () {
          j.Z.prototype.initialize.apply(this, arguments),
            this.$el
              .find(".snapshot .button")
              .on("click", this.onSnapshot.bind(this));
        },
        onSnapshot: function (e) {
          var t = this.viewer.scene;
          e.preventDefault();
          var i = this.$el.find(".snapshot"),
            s = this.$el.find(".snapshot-flash"),
            n = this.$el.find(".img-container");
          if (!i.hasClass("progress")) {
            i.addClass("progress"),
              s.addClass("active"),
              setTimeout(function () {
                s.removeClass("active");
              }, 2e3);
            var o = !0,
              a = t.getFeatures();
            if (a.camera) {
              a.camera.getModel().saveCameraPosition();
              var r = t.getFeatures().saveUI;
              r ||
                ((r = new Xe.Z()).init(t.getFeaturesManager()._context),
                r._views[0].enableSaving()),
                (o = r._views[0].save());
            }
            tt.all([t.getScreenShot(1920, 1080), o]).then(
              this.onTakeScreenshot.bind(this, i, n)
            );
          }
        },
        onTakeScreenshot: function (e, t, i) {
          var s = i[0].toDataURL("image/jpeg"),
            n = (0, et.Z)(s),
            o = new Ye.Z({ imageFile: n }),
            a = this.viewer._currentModel,
            r = o.save({ modelUID: a.get("uid") }),
            l = t.find("img");
          l &&
            (l.remove(),
            null !== this.previewTimeout &&
              (window.clearTimeout(this.previewTimeout),
              (this.previewTimeout = null)));
          var c = new Image();
          (c.src = s),
            t.prepend(c),
            t.removeClass("invisible"),
            (this.previewTimeout = setTimeout(function () {
              t.addClass("invisible");
            }, 4e3)),
            r
              .then(function () {
                e.removeClass("progress"),
                  e.addClass("success"),
                  setTimeout(function () {
                    e.removeClass("success");
                  }, 2e3);
              })
              .catch(function () {
                new ie.Z({
                  title: "Save settings error",
                  text: "An unexpected error happened. The thumbnail has NOT been saved.",
                  buttons: { ok: !0 },
                }).open(),
                  it.error("Error while saving snapshot"),
                  e.removeClass("progress");
              });
        },
        showGuides: (0, r.Z)(function () {
          this.$(".snapshot-guides").addClass("active");
        }, 100),
        hideGuides: (0, r.Z)(function () {
          this.$(".snapshot-guides").removeClass("active");
        }, 100),
      });
      var nt = i("yCZG");
      const ot = j.Z.extend({
        _isHover: !1,
        events: {
          touchstart: "onTouchStart",
          mousedown: "onClick",
          mouseover: "onMouseover",
          mouseout: "onMouseout",
          mouseenter: "onMouseEnter",
          mouseleave: "onMouseLeave",
        },
        initialize: function () {
          j.Z.prototype.initialize.apply(this, arguments),
            (this.previousValue = null),
            (this._touched = !1),
            (this.$icon = this.$(".fa")),
            this.listenTo(this.model, "change:volume", this.render.bind(this)),
            this.render(),
            (this.$volumeMenu = this.$(".volume-menu")),
            (this.slider = new nt.Z(void 0, {
              model: this.model,
              global: !0,
              orientation: "vertical",
            })),
            this.$volumeMenu.append(this.slider.$el),
            this.initializeShortcuts();
        },
        delegateEvents: function () {
          j.Z.prototype.delegateEvents.apply(this, arguments),
            n()(window).on(
              "mouseup.delegateEvents" + this.cid,
              this.onVolumeInteractionEnd.bind(this)
            ),
            n()(window).on(
              "touchend.delegateEvents" + this.cid,
              this.onVolumeInteractionEnd.bind(this)
            );
        },
        undelegateEvents: function () {
          j.Z.prototype.undelegateEvents.apply(this, arguments),
            n()(window).off(".delegateEvents" + this.cid);
        },
        initializeShortcuts: function () {
          (this.soundControlShortcuts = new C.Z(u.Z.shortcuts.sound)),
            this.soundControlShortcuts.on("mute", this.toggleMute.bind(this)),
            this.soundControlShortcuts.listen();
        },
        onTouchStart: function () {
          this._touched = !0;
        },
        onClick: function (e) {
          e.preventDefault();
          var t = n()(e.target);
          t.is(".volume-menu") ||
            t.parents(".volume-menu").length ||
            this.toggleMute();
        },
        onMouseEnter: function () {
          this._isHover = !0;
        },
        onMouseLeave: function () {
          this._isHover = !1;
        },
        toggleMute: function () {
          this.slider.onoff();
        },
        togglePane: function (e) {
          this.$el.toggleClass("--active", e);
        },
        onMouseover: function () {
          this._touched ? (this._touched = !1) : this.togglePane(!0);
        },
        onMouseout: function () {
          !1 === this.slider.started && this.togglePane(!1);
        },
        onVolumeInteractionEnd: function () {
          this.model.get("enable") && (this._isHover || this.togglePane(!1));
        },
        show: function () {
          this.viewer.$el.addClass("sound-enabled");
        },
        hide: function () {
          this.viewer.$el.removeClass("sound-enabled");
        },
        render: function () {
          var e = this.model.get("volume");
          return (
            this.$icon.toggleClass("fa-volume-up", e >= 0.5),
            this.$icon.toggleClass("fa-volume-down", e > 0 && e < 0.5),
            this.$icon.toggleClass("fa-volume-off", 0 === e),
            this
          );
        },
      });
      var at = u.Z.shortcuts,
        rt = new (p())({ device: "WEB", listen: !0 });
      const lt = g.Z.extend({
        subviews: {},
        events: {
          'click [data-action="start"]': "onStart",
          'click [data-action="stop"]': "onStop",
          click: "globalCloseEvent",
          touchend: "globalCloseEvent",
          'click [data-action="inspector"]': "toggleInspector",
          'click [data-action="ascii"]': "toggleASCII",
        },
        initialize: function () {
          g.Z.prototype.initialize.apply(this, arguments),
            (this.canDisplay3D =
              (0, f.Z)() && (0, m.Z)() && !(0, V.Z)().forceFallback),
            (this.proxySettings = new c.Z({
              shadingStyle: null,
              viewerMode: null,
              wireframeColor: null,
              wireframeEnable: null,
              hasWireframe: null,
              annotationsVisible: null,
              textureQuality: null,
              speed: null,
              cycleMode: null,
              fps: null,
            })),
            this.initializeMandatorySubviews(),
            this.initializeHashMessages(),
            this.initializeSoundManager(),
            this.delegateGlobalMoveEvent(),
            this.delegateSubviews(),
            this.isVR() && b.default.apple.device && this.hackIosCanvasRender(),
            b.default.any ||
              !y.Z ||
              (0, V.Z)().transparent ||
              this.hackDesktopSafariCanvasBackground();
        },
        _createSubview: function (e, t, i) {
          return (
            (this.subviews[e] = new t(
              (0, o.Z)({}, { viewer: this, widgets: this.subviews }, i)
            )),
            this.subviews[e]
          );
        },
        globalCloseEvent: function (e) {
          n()(e.target).hasClass("has-menu") ||
            n()(e.target).parents(".has-menu").length ||
            (this.subviews.hotspots &&
              this.subviews.hotspots.toggleAnnotationList(!1),
            this.subviews.gui.closeMenus());
        },
        delegateGlobalMoveEvent: function () {
          if (!(0, w.Z)()) {
            var e = "mousedown touchstart",
              t = "mouseup touchend";
            this.$el.on(
              e,
              function (e) {
                "CANVAS" === e.target.tagName &&
                  this.el.classList.add("moving");
              }.bind(this)
            ),
              this.$el.on(
                t,
                function (e) {
                  var t = this;
                  "CANVAS" === e.target.tagName &&
                    (e.preventDefault(),
                    clearTimeout(this._mouseupStopTimeout),
                    (this._mouseupStopTimeout = setTimeout(function () {
                      t.el.classList.contains("moving") &&
                        t.el.classList.remove("moving");
                    }, 1e3)));
                }.bind(this)
              ),
              this.$el.on(
                "mousemove touchmove wheel ".concat(e, " ").concat(t),
                this.removeIdle.bind(this)
              ),
              T.Z.getAllAnimations().then(this.setIdleTimeout.bind(this)),
              this.$el.on(
                "wheel",
                function (e) {
                  "canvas" === e.target.tagName.toLowerCase() &&
                    (this.el.classList.add("moving"),
                    clearTimeout(this._mousewheelStopTimeout),
                    (this._mousewheelStopTimeout = setTimeout(
                      function () {
                        this.el.classList.remove("moving");
                      }.bind(this),
                      300
                    )));
                }.bind(this)
              );
          }
        },
        setIdleTimeout: function () {
          this.globalIdleTimeout = setTimeout(
            this.onGlobalIdleTimeout.bind(this),
            this.el.classList.contains("moving") ? 4500 : 3500
          );
        },
        removeIdle: function () {
          clearTimeout(this.globalIdleTimeout),
            this.el.classList.contains("idle") &&
              (this.el.classList.remove("idle"),
              (0, a.Z)(this.subviews, function (e) {
                e.trigger("idle", !1);
              })),
            this.setIdleTimeout.call(this);
        },
        preventScroll: function (e) {
          if (e.target.classList.contains("canvas")) return e.preventDefault();
          var t = void 0 !== e.target.dataset.hotspotTarget;
          this.subviews &&
            this.subviews.helpOverlay &&
            !this.subviews.helpOverlay.isVisible() &&
            !t &&
            e.preventDefault();
        },
        onGlobalIdleTimeout: function () {
          (0, w.Z)() ||
            (this.el.classList.add("idle"),
            (0, a.Z)(this.subviews, function (e) {
              e.trigger("idle", !0);
            }));
        },
        initializeMandatorySubviews: function () {
          this._createSubview("gui", ue, { el: this.$el }),
            this._createSubview("loading", Me, {
              el: this.$(".loading-container"),
            }),
            this._createSubview("hint", me, {
              el: this.$el,
              fallback: !this.canDisplay3D,
            }),
            this._createSubview("generalControls", ce, {
              el: this.canDisplay3D
                ? this.$(".general-controls")
                : this.$(".fallback .controls"),
              fallback: !this.canDisplay3D,
            }),
            this._createSubview("header", de, { el: this.$(".titlebar") }),
            this._createSubview("snapshot", st, { el: this.$el }),
            this._createSubview("helpOverlay", ve, {
              el: this.$(".help.overlay"),
            }),
            this._createSubview("hotspotsOverlay", be, {
              el: this.$(".hotspots-overlay"),
            }),
            this._createSubview(
              "arOverlayDesktop",
              D.Z.extend({
                setUrl: function (e) {
                  this.$(".url").attr("href", e).text(e);
                },
              }),
              { el: this.$(".ar-overlay-desktop") }
            ),
            this._createSubview(
              "arOverlayMobile",
              D.Z.extend({
                setPlatform: function (e) {
                  this.$(".mobilePlatform").text(e);
                },
                setMinVersion: function (e) {
                  this.$(".minVersion").text(e);
                },
              }),
              { el: this.$(".ar-overlay-mobile") }
            ),
            this._createSubview("arOverlayLoading", D.Z.extend({}), {
              el: this.$(".ar-overlay-loading"),
            }),
            this._createSubview("arOverlayErrorMessage", D.Z.extend({}), {
              el: this.$(".ar-overlay-error"),
            }),
            this._createSubview(
              "helperVrOverlay",
              D.Z.extend({
                setUrl: function (e) {
                  this.$(".url").attr("href", e);
                },
              }),
              { el: this.$(".helper-vr-overlay") }
            ),
            this._createSubview("osd", Je, { el: this.$el });
        },
        initShortcuts: function () {
          (this.viewerRenderingShortcuts = new C.Z(at.viewerRendering)),
            this.viewerRenderingShortcuts.on(
              "toggleWireframe",
              function () {
                if (
                  this.proxySettings.get("hasWireframe") &&
                  (0, V.Z)().uiInspector
                ) {
                  var e = !this.proxySettings.get("wireframeEnable");
                  this.proxySettings.set("wireframeEnable", e);
                }
              }.bind(this)
            ),
            this.viewerRenderingShortcuts.on(
              "inspector",
              this.toggleInspector,
              this
            ),
            this.viewerRenderingShortcuts.listen([
              this.viewerRenderingShortcuts.getShortcut("toggleWireframe"),
              this.viewerRenderingShortcuts.getShortcut("inspector"),
            ]),
            this.viewerRenderingShortcuts.on(
              "defaultRenderingMode",
              function () {
                this.proxySettings.set("shadingStyle", "lit");
              }.bind(this)
            ),
            this.viewerRenderingShortcuts.on(
              "shadelessRenderingMode",
              function () {
                this.proxySettings.set("shadingStyle", "shadeless");
              }.bind(this)
            ),
            this.viewerRenderingShortcuts.on(
              "matcapRenderingMode",
              function () {
                this.proxySettings.set("shadingStyle", "matcap");
              }.bind(this)
            ),
            this.updateShorcuts();
        },
        updateShorcuts: function () {
          "lit" === this._currentModel.get("options").shading.type || (0, w.Z)()
            ? this.viewerRenderingShortcuts.listen([
                this.viewerRenderingShortcuts.getShortcut(
                  "defaultRenderingMode"
                ),
                this.viewerRenderingShortcuts.getShortcut(
                  "shadelessRenderingMode"
                ),
                this.viewerRenderingShortcuts.getShortcut(
                  "matcapRenderingMode"
                ),
              ])
            : this.viewerRenderingShortcuts.stopListening([
                "defaultRenderingMode",
                "shadelessRenderingMode",
                "matcapRenderingMode",
              ]);
        },
        blurHotspots: function () {
          this.subviews.hotspots &&
            (this.subviews.hotspots.hideTooltips(),
            (this.subviews.hotspots.currentHotspot = -1),
            this.subviews.hotspots.renderControl());
        },
        initializeHashMessages: function () {
          (0, V.Z)().isApp &&
            rt.on(
              "message:vrMode",
              function (e) {
                var t = parseInt(e.data.vrMode, 10);
                this.blurHotspots(),
                  this.scene.getFeatures().webVR.getModel().set("enable", !!t),
                  e.removeFromHash();
              }.bind(this)
            );
        },
        initializeHotspotsSubviews: function (e) {
          var t = this;
          Promise.all([
            i.e(2698),
            i.e(4197),
            i.e(8813),
            i.e(1238),
            i.e(988),
            i.e(6028),
          ])
            .then(i.bind(i, "jDby"))
            .then(function (i) {
              var s = i.default,
                n = t.scene.getFeatures().hotspot.getModel();
              (t._createSubview("hotspots", s, {
                el: t.$el,
                model: n,
                container: t.$(".hotspots"),
                fallback: !t.canDisplay3D,
              }),
              0 === (0, V.Z)().annotationTooltipVisible) &&
                t.subviews.hotspots.hideTooltips();
              "function" == typeof e && e();
            });
        },
        initializeAnimationSubviews: function (e) {
          var t = this;
          i.e(2177)
            .then(i.bind(i, "+uiz"))
            .then(function (i) {
              var s = i.default,
                n = t.scene.getFeatures().animation.getModel();
              t._createSubview("animationControls", s, {
                el: t.$(".animation-controls"),
                model: n,
                currentModel: t._currentModel,
                enabled: !t.isVR(),
              }),
                "function" == typeof e && e();
            });
        },
        delegateSubviews: function () {
          this.isVR()
            ? (this.subviews.gui.disable(), this.subviews.header.disable())
            : (this.subviews.loading.on(
                "loaded",
                setTimeout.bind(
                  window,
                  this.subviews.gui.enable.bind(this.subviews.gui),
                  500
                )
              ),
              this.subviews.header.enable()),
            this.subviews.loading.on(
              "loaded",
              function () {
                (0, V.Z)().transparent ||
                  this.el.classList.add("transparent-pattern");
              }.bind(this)
            );
        },
        onStart: function () {
          this.start(), this._startTracked || (this._startTracked = !0);
        },
        start: function () {
          //debugger;
          this.el.classList.add("started"),
            this.el.classList.contains("transparent") ||
              this.el.classList.add("transparent-pattern"),
            this._options && this.load();
          var e =
            this.scene &&
            this.scene.getViewerOSGJS &&
            this.scene.getViewerOSGJS();
          return (
            e &&
              T.Z.getHasAnimation().then(
                function (t) {
                  if (t) {
                    var i = this.scene.getFeatures().animation.getModel();
                    this._wasPlaying &&
                      (i.set("playing", !0), (this._wasPlaying = void 0));
                  }
                  e.run();
                }.bind(this)
              ),
            k.Z.setEnabled(!0),
            this.trigger("started"),
            this
          );
        },
        onStop: function () {
          this.subviews.modelInspector &&
            (this.subviews.modelInspector.close(),
            n()(".summary").removeClass("shifted"),
            n()(".watermark").removeClass("shifted-watermark")),
            this.stop();
        },
        stop: function () {
          this.el.classList.remove("started");
          var e =
            this.scene &&
            this.scene.getViewerOSGJS &&
            this.scene.getViewerOSGJS();
          return (
            e &&
              (T.Z.getHasAnimation().then(
                function (e) {
                  if (e) {
                    var t = this.scene.getFeatures().animation.getModel();
                    (this._wasPlaying = t.get("playing")),
                      this._wasPlaying && t.set("playing", !1);
                  }
                }.bind(this)
              ),
              e.stop()),
            this.subviews.hotspots &&
              this.subviews.hotspots.triggerHotspotCycle(!1),
            k.Z.setEnabled(!1),
            this.trigger("stopped"),
            this
          );
        },
        load: function () {
          if (this._options) {
            var e = this._options;
            (this._options = null),
              this.scene && (this.scene.drop(), (this.scene = null)),
              this.subviews.loading.reset(),
              this.el.classList.remove("model-loaded"),
              this.el.classList.add("model-loading"),
              c.Z.get(e.uid)
                .then(this.onModelLoad.bind(this, e))
                .catch(function (e) {
                  console.warn(e);
                });
          }
        },
        lookat: function (e, t, i) {
          void 0 === i && (i = 1);
          var s = this.scene.getFeatures().camera.getModel();
          s.set("animationDuration", i), s.setTargetAndEye(t, e);
        },
        isVR: function () {
          return this.scene
            ? this.scene.getFeatures().webVR.getModel().get("enable")
            : (0, V.Z)().cardboard > 0;
        },
        isCardboard: function () {
          return (0, V.Z)().cardboard > 0;
        },
        onModelLoad: function (e, t) {
          M.Z.client.configureScope(function (e) {
            e.setTag("frontend", "3d");
          }),
            (this._currentModel = t),
            t.hit(),
            (this.scene = this.createScene(t, e));
          var i = this.scene;
          this.subviews.loading.handleLoading({ model: t, scene: i }),
            i.run(),
            this.canDisplay3D
              ? (this.initShortcuts(),
                this.initViewerFeatures(),
                this.subviews.hint.show(),
                this.trigger("model-loaded"),
                M.Z.client.configureScope(function (e) {
                  e.setTag("frontend", "web");
                }))
              : this.el.classList.add("fallback-mode");
        },
        errorHandler: function (e) {
          if (e instanceof v.r) {
            var t,
              i,
              s,
              n,
              a,
              r = (0, S.Jw)(e.account);
            switch (e.feature) {
              case "sound":
                (i = "sound track"),
                  (s = "sounds"),
                  (a = e.limit === u.Z.maxSoundtracksPerModel.ent);
                break;
              case "hotspot":
                (i = "annotation"),
                  (s = "annotations"),
                  (a = e.limit === u.Z.maxHotspotsPerModel.ent);
                break;
              default:
                throw e;
            }
            if (a)
              n = [
                "You have reached the maximum number of <b>" +
                  i +
                  "s</b> allowed by Sketchfab.",
              ];
            else {
              var l = e.value ? e.value - e.limit : 0;
              (n = [
                "You have reached the maximum number of <b>" +
                  e.limit +
                  " " +
                  i +
                  Z.pluralize(e.limit) +
                  "</b> allowed by your plan.",
                "To add a new " +
                  i +
                  ", you need to " +
                  (l
                    ? " delete " + l + " " + i + Z.pluralize(e.limit) + " or "
                    : "") +
                  "upgrade to " +
                  r +
                  " plan.",
              ]),
                (t = { href: "/plans", text: "Upgrade to " + r });
            }
            new P.Z(
              (0, o.Z)(e, {
                popupSubTitle: "You cannot add a new " + i,
                popupMessages: n,
                additionalButton: t,
                popupImg: s,
              })
            ).open();
          } else this.subviews.osd.show(e.message, arguments);
        },
        setScene: function (e) {
          if (this.scene)
            throw new Error("It is currently impossible to reset a scene");
          return (this._options = e), (this._currentUid = e.uid), this;
        },
        createScene: function (e, t) {
          if (this.canDisplay3D) {
            var i = {};
            return (
              (i.el = this.$(".webgl")),
              (i.features = t.features),
              (i.widgetAPI = t.widgetAPI),
              (i.model = e),
              (i.viewerAPI = t.viewerAPI),
              new O.Z(i)
            );
          }
          return new x.Z({
            model: e,
            el: this.$(".fallback"),
            features: t.features,
          });
        },
        initViewerFeatures: function () {
          this.initializeSound(),
            T.Z.getModelDisplayed().then(
              function () {
                T.Z.getHasAnimation().then(
                  function (e) {
                    e && this.initializeAnimation();
                  }.bind(this)
                ),
                  this.initializeHotspots(),
                  this.initializeShading(),
                  this.initializeViewerMode(),
                  this.initializeTextureQuality(),
                  this.initializeVr(),
                  this.initializeModelInspector();
              }.bind(this)
            );
        },
        initializeHotspots: function () {
          var e = this.scene.getFeatures().hotspot,
            t = e && e.getModel();
          t &&
            this.initializeHotspotsSubviews(
              function () {
                var e = this.subviews.hotspots;
                t.setUpdateCallback(e.refreshHotspots.bind(e));
                var i = t.get("hotspots");
                i.on(
                  "add remove sort change:title change:description change:position",
                  e.refreshHotspots,
                  e
                ),
                  i.on(
                    "add remove sort change:name",
                    e.updateHotspotsControls,
                    e
                  ),
                  i.on(
                    "add remove",
                    (0, r.Z)(this.subviews.generalControls.renderSettings, 100),
                    this.subviews.generalControls
                  ),
                  i.on("select", e.onHotspotSelected, e),
                  i.on("add", e.showAnnotations, e),
                  i.on("remove", function () {
                    0 === i.length && e.hideAnnotations();
                  }),
                  this.proxySettings.on(
                    "change:annotationsVisible",
                    function () {
                      i.length && this.proxySettings.get("annotationsVisible")
                        ? e.showAnnotations()
                        : e.hideAnnotations();
                    }.bind(this)
                  ),
                  this.proxySettings.set(
                    "annotationsVisible",
                    t.get("visible"),
                    { silent: !0 }
                  ),
                  t.set("proxyModel", this.proxySettings),
                  e.refreshHotspots(),
                  e.updateHotspotsControls(),
                  T.Z.getFirstCameraAnimation().then(
                    function () {
                      if (
                        (t.on("hotspot-error", this.errorHandler.bind(this)),
                        !0 === (0, V.Z)().annotationCycleAutostart)
                      ) {
                        var e = Math.max((0, V.Z)().annotation, 1);
                        i.trigger("select", i.at(e - 1)),
                          this.subviews.hotspots.triggerHotspotCycle(!0);
                      } else
                        (0, V.Z)().annotation > 0 &&
                          i.trigger("select", i.at((0, V.Z)().annotation - 1));
                    }.bind(this)
                  );
              }.bind(this)
            );
        },
        initializeAnimation: function () {
          var e = this.scene.getFeatures().animation.getModel();
          this.initializeAnimationSubviews(
            function () {
              this.el.classList.add("has-animation"),
                this.subviews.generalControls.setHasAnimations(!0),
                this.proxySettings.set("speed", e.get("speed")),
                this.proxySettings.set("cycleMode", e.get("cycleMode")),
                this.proxySettings.set("fps", e.get("fps")),
                this.proxySettings.on("change:speed", function (t, i) {
                  e.set("speed", i);
                }),
                this.proxySettings.on("change:cycleMode", function (t, i) {
                  e.set("cycleMode", i);
                }),
                this.proxySettings.on("change:fps", function (t, i) {
                  e.set("fps", i);
                }),
                e.on(
                  "change:fps",
                  function (e, t) {
                    this.proxySettings.set("fps", t);
                  }.bind(this)
                ),
                this.$(".osd").addClass("padded"),
                this.$(".timeline").removeClass("disabled");
            }.bind(this)
          );
        },
        isFeatureAvailable: function (e, t, i) {
          return e && t && 0 !== i.length;
        },
        initializeModelInspector: function () {
          var e = this.scene.getFeatures().inspector,
            t = this.proxySettings,
            i = this.$(".model-inspector");
          if (this.isFeatureAvailable((0, V.Z)().uiInspector, e, i)) {
            var s = e.getModel();
            this._createSubview("modelInspector", Ke, {
              model: s,
              inspectableTextures:
                (0, w.Z)() || this.scene.model.get("isInspectable"),
              wireframeModel: t,
              osd: this.subviews.osd,
              el: i,
            }),
              (0, V.Z)().uiInspectorOpen && this.toggleInspector(),
              this.subviews.generalControls.listenTo(
                s,
                "change:uiVisible",
                function (e, t) {
                  this.$('[data-action="inspector"]').toggleClass("active", t),
                    n()(".viewer").toggleClass("--shifted", t),
                    this.subviews.animationControls &&
                      this.subviews.animationControls.updateBarWidth();
                }.bind(this)
              ),
              (0, w.Z)() &&
                this.listenTo(
                  s,
                  "change:uiVisible",
                  function (e, t) {
                    var i = this.scene._widgetAPI,
                      s = this.subviews.modelInspector.model;
                    t
                      ? (s.initAvailableView(),
                        i
                          .alert("To edit the model, close the Inspector.", {
                            continue: !0,
                            continueLabel: "Close Inspector",
                          })
                          .then(
                            function () {
                              this.$("canvas").focus(), this.toggleInspector();
                            }.bind(this)
                          )
                          .catch(function (e) {
                            if ("Resuming editor" !== e) throw e;
                          }))
                      : i.resume();
                  }.bind(this)
                );
          } else this.$('[data-action="inspector"]').hide();
        },
        toggleInspector: function () {
          this.subviews.modelInspector &&
            (this.subviews.modelInspector.toggle(),
            this.subviews.snapshot.$(".snapshot.widget").toggle(),
            this.subviews.header.$(".actions").toggle());
        },
        toggleASCII: function () {
          var e = new URLSearchParams(window.location.search);
          e.set(
            "post_process_ascii",
            "1" !== e.get("post_process_ascii") ? "1" : "0"
          ),
            (window.location.search = e.toString());
        },
        initializeTextureQuality: function () {
          var e = this,
            t = this.scene.getFeatures().quality;
          if (t) {
            var i = t.getModel();
            i.get("promiseReady").then(
              function (e) {
                this.subviews.generalControls.generateTextureQualitySettings(e),
                  this.subviews.generalControls.settings.onTextureQualityReady.call(
                    this.subviews.generalControls.settings,
                    e
                  );
              }.bind(this)
            ),
              this.proxySettings.on("change:textureQuality", function () {
                var t = parseInt(this.get("textureQuality"), 10);
                window.requestAnimationFrame(function () {
                  i.set("level", t);
                });
                var s = e.subviews.generalControls.getSettingLabelForValue(
                  "textureQuality",
                  t + ""
                );
                e.$(".control-badge").text(s).addClass("active");
              });
          }
        },
        initializeViewerMode: function () {
          var e = this.scene.getFeatures().camera;
          if (e) {
            var t = e.getModel(),
              i = t.get("indexManipulator");
            this.proxySettings.set("viewerMode", i),
              this.subviews.gui.renderSetting("viewerMode", i),
              this.proxySettings.on(
                "change:viewerMode",
                function () {
                  t.set(
                    "indexManipulator",
                    parseInt(this.proxySettings.get("viewerMode"), 10)
                  ),
                    this.scene.getFeaturesManager().focusOnSavedCamera(1),
                    this.$("canvas").focus();
                }.bind(this)
              );
          }
        },
        initializeShading: function () {
          var e = this.scene.getFeatures().shadingStyle;
          if (e) {
            var t = e.getModel(),
              i = this,
              s = function () {
                i.proxySettings.set("shadingStyle", t.get("type")),
                  i.proxySettings.set(
                    "wireframeColor",
                    t.get("wireframeColor")
                  ),
                  i.proxySettings.set(
                    "wireframeEnable",
                    t.get("wireframeEnable")
                  ),
                  i.proxySettings.set("hasWireframe", t.get("hasWireframe")),
                  i.subviews.gui.renderSetting(
                    "wireframeColor",
                    i.proxySettings.get("wireframeColor")
                  ),
                  i.subviews.gui.renderSetting(
                    "wireframeEnable",
                    i.proxySettings.get("wireframeEnable") ? 1 : 0
                  ),
                  i.subviews.gui.renderSetting(
                    "hasWireframe",
                    i.proxySettings.get("hasWireframe") ? 1 : 0
                  ),
                  i.subviews.gui.renderSetting(
                    "shadingStyle",
                    i.proxySettings.get("shadingStyle")
                  );
              };
            s(),
              this.proxySettings.listenTo(t, "change", s),
              this.proxySettings.on("change:shadingStyle", function () {
                t.set("type", this.get("shadingStyle"));
              }),
              this.proxySettings.on("change:wireframeColor", function () {
                this.get("wireframeEnable")
                  ? t.setWireframeColorSmooth(this.get("wireframeColor"))
                  : t.set("wireframeColor", this.get("wireframeColor"));
              }),
              this.proxySettings.on("change:wireframeEnable", function () {
                t.set("wireframeEnable", !!this.get("wireframeEnable"));
              });
          }
        },
        initializeVr: function () {
          var e = this;
          this.isVR()
            ? (this.el.classList.add("vr-mode"),
              !h.default.get("sf_show_vr_hint") &&
                Promise.all([i.e(4197), i.e(1238), i.e(988), i.e(5341)])
                  .then(i.bind(i, "GAau"))
                  .then(function (t) {
                    var i = t.default()([_.Z.hasFullscreen()]);
                    e.subviews.osd.show(i, { duration: 5e3 });
                  }),
              h.default.set("sf_show_vr_hint", 1))
            : (0, V.Z)().vrLinkNavigation &&
              this.subviews.osd.show(
                b.default.any
                  ? "Tap on Screen or Press any button to switch to VR"
                  : "Press Enter to switch to VR",
                { duration: 5e3 }
              );
        },
        initializeSoundManager: function () {
          this.proxySettings.on("sound-error", this.errorHandler.bind(this)),
            this.proxySettings.on(
              "sound-hide",
              this.subviews.osd.hide.bind(this.subviews.osd)
            ),
            this.proxySettings.on(
              "sound-show",
              this.subviews.osd.show.bind(this.subviews.osd)
            ),
            k.Z.setProxyModel(this.proxySettings);
        },
        initializeSound: function () {
          var e = this.scene.getFeatures().sound;
          if (e) {
            var t = e.getModel(),
              i = t.get("soundtracks"),
              s = this._createSubview("sound", ot, {
                el: this.$(".general-controls .volume"),
                model: t,
              });
            i.on("add", s.show, s),
              i.on("remove", function () {
                0 === i.length && s.hide();
              }),
              i.length && t.get("visible") && s.show(),
              t.on("sound-error", this.errorHandler.bind(this));
          }
        },
        hackDesktopSafariCanvasBackground: function () {
          this.$("canvas").parent().css({ backgroundColor: "#000" });
        },
        hackIosCanvasRender: function () {
          (0, l.Z)(function () {
            (n()("canvas")[0].style.width =
              n()("canvas")[0].clientWidth + 1 + "px"),
              (0, l.Z)(function () {
                (n()("canvas")[0].style.width =
                  n()("canvas")[0].clientWidth - 1 + "px"),
                  (n()("canvas")[0].style.width = "");
              });
          });
        },
        isStarted: function () {
          return this.el.classList.contains("started");
        },
      });
    },
  },
]);
