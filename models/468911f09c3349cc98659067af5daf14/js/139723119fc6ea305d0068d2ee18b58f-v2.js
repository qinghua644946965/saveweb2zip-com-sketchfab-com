!(function (t, e) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = e();
  else if ("function" == typeof define && define.amd) define([], e);
  else {
    var o = e();
    for (var n in o) ("object" == typeof exports ? exports : t)[n] = o[n];
  }
})(self, () =>
  (self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
    [5991],
    {
      zu1l: (t) => {
        var e = {
            ApiCoreVersion: "1_0",
            start: "-",
            stop: "-",
            load: "-",
            gotoAnnotation: "-",
            getAnnotationList: "-",
            lookat: "-",
            setFov: "-",
            getCurrentTime: "-",
            play: "-",
            pause: "-",
            seekTo: "-",
            getAnimations: "-",
            setCurrentAnimationByUID: "-",
            setCycleMode: "-",
            setSpeed: "-",
            getSceneGraph: "-",
            getNodeMap: "-",
            getMatrix: "-",
            setMatrix: "-",
            hide: "-",
            show: "-",
            translate: "-",
            rotate: "-",
            getRootMatrixNode: "-",
            getCameraLookAt: "-",
            setCameraLookAt: "-",
            getScreenShot: "-",
            getMaterialList: "-",
            getTextureList: "-",
            addTexture: "-",
            updateTexture: "-",
            setTextureQuality: "-",
            setMaterial: "-",
            setPostProcessing: "-",
            getPostProcessing: "-",
          },
          o = Object.assign({}, e, { getWorldToScreenCoordinates: "-" }),
          n = Object.assign({}, o, {
            ApiCoreVersion: "1_2",
            pickColor: "-",
            setListenerOptions: "-",
            unselectAnnotation: "-",
          }),
          i = Object.assign({}, n, {
            ApiCoreVersion: "1_3",
            setCameraEasing: "-",
            showAnnotation: "-",
            hideAnnotation: "-",
            getAnnotation: "-",
            updateAnnotation: "-",
            createAnnotation: "-",
            removeAnnotation: "-",
            pickFromScene: "-",
            pickFromScreen: "-",
            addVideoTexture: "-",
            translate: "-",
            rotate: "-",
          }),
          a = Object.assign({}, i, {}),
          r = Object.assign({}, a, {
            ApiCoreVersion: "1_4",
            getEnvironment: "-",
            getLight: "-",
            getFov: "-",
            getRootMatrixNode: "-",
            getShadingStyle: "-",
            getWireframe: "-",
            setCurrentAnimationByUID: "-",
            setEnvironment: "-",
            setLight: "-",
            setShadingStyle: "-",
            setWireframe: "-",
          }),
          s = Object.assign({}, r, {
            ApiCoreVersion: "1_5",
            setAnnotationsTexture: "-",
            addVideoTexture: "-",
            gotoAnnotation: "-",
            setBackground: "-",
            getBackgroundList: "-",
            setEnvironment: "-",
            getEnvironmentList: "-",
            setCycleMode: "-",
          }),
          l = Object.assign({}, s, {}),
          c = Object.assign({}, l, {
            mouseMove: "-",
            mouseDown: "-",
            mouseUp: "-",
            mouseClick: "-",
            mouseDblClick: "-",
            mouseWheel: "-",
            startRecord: "-",
            endRecord: "-",
          }),
          d = Object.assign({}, c, {
            ApiCoreVersion: "1_6",
            createAnnotationFromScenePosition: "-",
            createAnnotationFromWorldPosition: "-",
            getAnimations: "-",
            hideAnnotationTooltip: "-",
            removeAllAnnotations: "-",
            setCameraConstraints: "-",
            setEnableCameraConstraints: "-",
            setAnnotationCameraTransition: "-",
            showAnnotationTooltip: "-",
            recenterCamera: "-",
            setUserInteraction: "-",
          }),
          u = Object.assign({}, d, {
            ApiCoreVersion: "1_7",
            setUVOffset: "-",
            setUVRotation: "-",
            setUVScale: "-",
            refreshCanvas: "-",
            refreshDraw: "-",
            setHighlightOptions: "-",
            highlightMaterial: "-",
          }),
          h = Object.assign({}, u, { setEnableCameraConstraints: "-" }),
          p = Object.assign({}, h, {
            ApiCoreVersion: "1_8",
            isLightFeatureEnabled: "-",
            startAR: "-",
            hide: "-",
            focusOnVisibleGeometries: "-",
            setCameraLookAtEndAnimationCallback: "-",
            setEnableCameraConstraints: "-",
            setLightFeatureEnabled: "-",
            setSpeed: "-",
            show: "-",
          }),
          g = Object.assign({}, p, {
            createAnnotationFromWorldPosition: "-",
            createAnnotationFromScenePosition: "-",
            hideAnnotationTooltip: "-",
            showAnnotationTooltip: "-",
            hideAnnotationTooltips: "-",
            showAnnotationTooltips: "-",
          }),
          f = Object.assign({}, g, {
            hideAnnotationTooltip: "-",
            showAnnotationTooltip: "-",
            hideAnnotationTooltips: "-",
            showAnnotationTooltips: "-",
          }),
          m = Object.assign({}, f, {
            ApiCoreVersion: "1_9",
            hideAnnotationTooltip: "-",
            showAnnotationTooltip: "-",
            hideAnnotationTooltips: "-",
            removeTexture: "-",
          }),
          v = Object.assign({}, m, {
            ApiCoreVersion: "1_10",
            createMaterial: "-",
            assignMaterial: "-",
            createDecal: "-",
            destroyDecal: "-",
            pickFromTextureCoordinates: "-",
            findDecalFromWorldPosition: "-",
          }),
          b = Object.assign({}, v, {
            pickFromTextureCoordinates: "-",
            findDecalFromWorldPosition: "-",
          }),
          _ = Object.assign({}, b, { _initializeAnnotationMarkdown: "-" }),
          w = Object.assign({}, _, {
            ApiCoreVersion: "1_11",
            setCameraRoll: "-",
          }),
          y = Object.assign({}, w, {
            ApiCoreVersion: "1_12",
            getLight: "-",
            setLight: "-",
          });
        t.exports = {
          "1.0.0": e,
          "1.0.1": e,
          "1.0.2": e,
          "1.0.3": e,
          "1.1.0": o,
          "1.2.0": n,
          "1.2.1": n,
          "1.3.0": i,
          "1.3.1": a,
          "1.3.2": a,
          "1.4.0": r,
          "1.4.1": r,
          "1.4.2": r,
          "1.4.3": r,
          "1.5.0": s,
          "1.5.1": l,
          "1.5.2": c,
          "1.5.3": c,
          "1.6.0": d,
          "1.6.1": d,
          "1.7.0": u,
          "1.7.1": h,
          "1.7.2": h,
          "1.8.0": p,
          "1.8.1": g,
          "1.8.2": f,
          "1.8.3": f,
          "1.8.4": f,
          "1.9.0": m,
          "1.9.1": m,
          "1.9.2": m,
          "1.10.0": v,
          "1.10.1": b,
          "1.10.2": b,
          "1.10.3": b,
          "1.10.4": _,
          "1.10.5": _,
          "1.11.0": w,
          "1.11.1": w,
          "1.12.0": y,
          "1.12.1": y,
        };
      },
      "VlB/": (t, e, o) => {
        "use strict";
        o.d(e, { Z: () => l });
        var n = o("sGMM"),
          i = o("7isf"),
          a = o("45Yh"),
          r = o("Oyie");
        function s(t) {
          var e = (0, i.Z)(t.find(".image-container"));
          return new r(function (t) {
            window.requestAnimationFrame(function () {
              e.forEach(function (t) {
                t.classList.remove("--loading");
              }),
                t();
            });
          });
        }
        const l = {
          name: "WithImageContainers",
          afterRender: function () {
            var t, e;
            ((t = this.$el),
            (e = (0, i.Z)(t.find(".image-container .image-container__image"))
              .map(function (t) {
                return [t.getAttribute("data-src"), t];
              })
              .filter(function (t) {
                return !!(0, n.Z)(t, 1)[0];
              })
              .map(function (t) {
                var e = (0, n.Z)(t, 2),
                  o = e[0],
                  i = e[1];
                return (
                  i.removeAttribute("data-src"),
                  new r(function (t, e) {
                    var n = (0, a.jo)(
                      i,
                      function (r) {
                        r &&
                          (n(),
                          (0, a.po)(o)
                            .then(function () {
                              i.setAttribute("src", o), t();
                            })
                            .catch(function () {
                              e("Image failed to load on scroll");
                            }));
                      },
                      { margin: 200 }
                    );
                  })
                );
              })),
            r.all(e).then(function () {
              return t;
            })).then(s);
          },
        };
      },
      lCzS: (t, e, o) => {
        "use strict";
        o.d(e, { Z: () => p });
        var n = o("R4My"),
          i = o.n(n),
          a = o("JBVY"),
          r = o("t3PY"),
          s = o("Bpah"),
          l = o("mSEu"),
          c = o("MQQR"),
          d = o("2jst"),
          u = o("Oyie"),
          h = function (t, e) {
            var o = new (i().Model)();
            return (
              (o.url = t + e),
              o.fetch().then(function (t) {
                return (window.prefetchedData[e] = t), t;
              })
            );
          };
        const p = function () {
          var t = (function () {
            if ("dev" !== l.Z.buildMode) {
              var t = !1;
              if (
                (l.Z.prodHookRestrictedDomains.forEach(function (e) {
                  document.location.href.indexOf(e) > -1 && (t = !0);
                }),
                t)
              )
                return;
            }
            if (-1 !== window.location.search.substr(1).indexOf("hook_")) {
              for (
                var e,
                  o = "hook_".length,
                  n = window.location.search.substr(1).split(r.BJ),
                  i = 0;
                i < n.length;
                ++i
              ) {
                var s = n[i];
                if (-1 !== s.indexOf("hook_")) {
                  e = s.substr(o, s.indexOf("=") - o);
                  break;
                }
              }
              if (e && a.ZP.bool("hook_" + e))
                return (
                  "https://" +
                  ("prod" === e
                    ? "sketchfab.com"
                    : "fatvoxel" === e
                    ? "fatvoxel.com"
                    : e + ".fatvoxel.com")
                );
            }
          })();
          if (t) {
            var e = (0, c.Z)().model;
            if (e) {
              var o = (function (t, e) {
                for (
                  var o = [
                      "",
                      "animations",
                      "backgrounds",
                      "environments",
                      "hotspots",
                      "matcaps",
                      "sounds",
                      "textures",
                    ],
                    n = [],
                    i = 0;
                  i < o.length;
                  ++i
                ) {
                  var a = (0, d.Z)(o[i], e);
                  n.push(h(t, a));
                }
                return u.all(n).then(function (o) {
                  var n = o[0].version;
                  return h(
                    t,
                    "/i/models/"
                      .concat(e, "/versions/")
                      .concat(n.uid, "/options")
                  ).then(function (t) {
                    return (o[0].options = t), new s.Z(o[0]);
                  });
                });
              })(t, e);
              s.Z.get = function () {
                return o;
              };
            }
          }
        };
      },
      "7e5f": (t, e, o) => {
        "use strict";
        o.d(e, { Z: () => v });
        var n = o("Hjnd"),
          i = o.n(n),
          a = o("jQDz"),
          r = o("nv4P"),
          s = o("X40V"),
          l = o("RyS8"),
          c = o("yTkX"),
          d = o("R2Pi"),
          u = o("lotc"),
          h = o("XXsV"),
          p = o("lrhy"),
          g = o("kAIv"),
          f = o("Oyie"),
          m = [];
        const v = r.Z.extend({
          parent: "body",
          el: '<article data-element="popup" />',
          optionTypes: {
            cleanOnClose: u.Z.bool,
            shouldExitOnClickOutside: u.Z.bool,
            shouldExitOnEscape: u.Z.bool,
            shouldRejectOnCancel: u.Z.bool,
          },
          defaultOptions: {
            cleanOnClose: !0,
            shouldExitOnClickOutside: !0,
            shouldExitOnEscape: !0,
            shouldRejectOnCancel: !1,
          },
          events: {
            'click [data-action="close"]': "cancel",
            "click button:not([type])": c.PF,
            "mousedown .popup-container": "onMouseDown",
            "mouseup .popup-container": "onMouseUp",
          },
          onMouseDown: function (t) {
            this.lastMouseDownTarget = t.target;
          },
          onMouseUp: function (t) {
            this.options.shouldExitOnClickOutside &&
              t.currentTarget === this.lastMouseDownTarget &&
              (this.cancel(t), delete this.lastMouseDownTarget);
          },
          constructor: function () {
            (this.onKeyDown = this.onKeyDown.bind(this)),
              (this.identifier = Symbol(Math.random())),
              (this.resizeHandler = function () {
                i().each(m, function (t, e) {
                  e.setHeightForMobileResolution();
                });
              }.bind(this)),
              r.Z.apply(this, arguments);
          },
          initialize: function () {
            r.Z.prototype.initialize.apply(this, arguments),
              this.renderLayout();
          },
          setElement: function () {
            return (
              r.Z.prototype.setElement.apply(this, arguments),
              (this.$container = this.$(".popup-container")),
              this
            );
          },
          delegateEvents: function () {
            r.Z.prototype.delegateEvents.apply(this, arguments),
              i()(window).on("resize", this.resizeHandler),
              document.addEventListener("keydown", this.onKeyDown, !0);
          },
          undelegateEvents: function () {
            r.Z.prototype.undelegateEvents.apply(this, arguments),
              i()(window).off("resize", this.resizeHandler),
              document.removeEventListener("keydown", this.onKeyDown, !0);
          },
          getPromise: function () {
            return (
              this._promise || (this._promise = (0, p.pJ)()), this._promise
            );
          },
          open: function () {
            return -1 !== m.indexOf(this)
              ? (this.show(), this.setElement(this.$el), this.getPromise())
              : (this.render(),
                m.unshift(this),
                i()((0, a.Z)(this, "parent")).append(this.$el),
                this.setElement(this.$el),
                this.hide(),
                this.setHeightForMobileResolution(),
                window.requestAnimationFrame(
                  function () {
                    this.show();
                  }.bind(this)
                ),
                this.getPromise());
          },
          show: function () {
            this.$container.removeClass("hidden"),
              document.body.classList.add("--prevent-scroll"),
              h.K.add(this.identifier);
          },
          hide: function () {
            this.$container.addClass("hidden"),
              h.K.delete(this.identifier),
              h.K.isEmpty() &&
                document.body.classList.remove("--prevent-scroll");
          },
          setIsLoading: function (t) {
            this.$container.toggleClass("popup-loading", t);
          },
          isHidden: function () {
            return this.$container.hasClass("hidden");
          },
          onKeyDown: function (t) {
            27 === t.keyCode &&
              this.options.shouldExitOnEscape &&
              h.K.getTopPopup() === this.identifier &&
              (this.cancel(), t.stopPropagation());
          },
          cancel: function (t) {
            return (
              this._close(),
              this.options.shouldRejectOnCancel
                ? this.getPromise().reject(new l.ud(t))
                : this.getPromise().resolve({
                    manuallyClosed: Boolean(t && t.target),
                  })
            );
          },
          continue: function (t) {
            return this._close(), this.getPromise().resolve(t);
          },
          _close: function (t, e) {
            return this.$container.closest(".inline-popup").length > 0
              ? this
              : this.options.cleanOnClose || e
              ? (this.hide(),
                (0, p.Vs)(500, (0, g.Z)(this.$el))
                  .catch(function () {})
                  .then(this.remove.bind(this)))
              : (this.hide(), f.resolve());
          },
          close: function (t) {
            return this._close(null, t);
          },
          replaceWith: function (t, e) {
            return this.close(e), t.open();
          },
          setHeightForMobileResolution: function () {
            if (d.default.any) {
              var t = this.$(".js-popup");
              (0, s.Nc)({
                width: window.innerWidth,
                breakpoint: "breakpointXSmall",
              }) && t.css({ height: window.innerHeight });
            }
          },
          resize: function (t) {
            var e = this.$(".js-popup");
            t.width && e.width(t.width), t.height && e.height(t.height);
          },
          autofocus: function () {
            var t = window.scrollX,
              e = window.scrollY;
            this.$(".form-input:visible").length > 0
              ? (this.$(".form-input").eq(0).focus(), window.scrollTo(t, e))
              : (this.$(".btn-primary, .submit").focus(),
                window.scrollTo(t, e));
          },
          _removeElement: function () {
            this.$el.remove();
          },
          remove: function () {
            return (
              this.undelegateEvents(),
              r.Z.prototype.remove.apply(this, arguments)
            );
          },
          renderLayout: function () {
            this.$el.html(this.template()),
              (this.$container = this.$(".popup-container"));
          },
          afterRender: function () {
            r.Z.prototype.afterRender.apply(this, arguments),
              this.renderChildren();
          },
        });
      },
      Pu2i: (t, e, o) => {
        "use strict";
        o.r(e), (0, o("CTpj").Z)(!0);
        o("BdNe"), o("QQD/");
        var n = o("Hjnd"),
          i = o.n(n),
          a = o("Bpah"),
          r = o("lCzS"),
          s = o("MQQR"),
          l = o("QG/p"),
          c = o("zu1l"),
          d = o.n(c),
          u = o("lZH+"),
          h = o.n(u);
        const p = function () {
          return {
            _viewer: void 0,
            version: "0.2",
            initialize: function (t, e) {
              (this._viewer = t), (this._uid = e);
              var o = this;
              window.addEventListener(
                "message",
                function (t) {
                  if (t.data && t.data.command) {
                    var e = t.data;
                    "initialize" !== e.command &&
                      Object.prototype.hasOwnProperty.call(o, e.command) &&
                      o[e.command].call(o, e);
                  }
                },
                !1
              );
            },
            ready: function () {
              this.answer({ status: "load" });
            },
            clientReady: function () {
              return h().resolve();
            },
            answer: function (t) {
              (t.source = this._uid),
                void 0 !== window.parent && window.parent.postMessage(t, "*");
            },
            start: function () {
              this._viewer.start(), this.answer({ status: "start" });
            },
            stop: function () {
              this._viewer.stop(), this.answer({ status: "stop" });
            },
            lookat: function (t) {
              this._viewer.lookat &&
                (this._viewer.lookat(t.eye, t.target, t.duration),
                window.setTimeout(
                  function () {
                    this.answer({ status: "lookat" });
                  }.bind(this),
                  1e3 * t.duration
                ),
                this.answer({ status: "lookat start" }));
            },
            autospin: function (t) {
              !1 === t && (t = 0), this.answer({ status: "autospin" });
            },
            getViewerAPI: function () {},
          };
        };
        var g = o("aqzA"),
          f = o("AuQH"),
          m = o("mv18"),
          v = g.Z.osg,
          b = function () {
            v.NodeVisitor.apply(this, arguments), this.reset();
          };
        v.createPrototypeObject(
          b,
          v.objectInherit(v.NodeVisitor.prototype, {
            reset: function () {
              (this._nodes = []),
                (this._nodeMap = {}),
                (this._nodeList = {}),
                (this._dirty = !0);
            },
            isDirty: function () {
              return this._dirty;
            },
            getRootNode: function () {
              return this._nodes[0];
            },
            getRealNodeMap: function () {
              return this._nodeList;
            },
            getRepresentationNodeMap: function () {
              return this._nodeMap;
            },
            createNodeEntry: function (t) {
              this._dirty = !1;
              var e = t.getInstanceID();
              this._nodeList[e] || (this._nodeList[e] = t);
              var o = {
                name: t.getName(),
                instanceID: e,
                nodeMask: t.getNodeMask(),
              };
              return this._nodeMap[e] || (this._nodeMap[e] = o), o;
            },
            applyNode: function (t) {
              var e = this._nodes;
              (this._nodes = []), this.traverse(t);
              var o = this.createNodeEntry(t);
              (o.children = this._nodes),
                (o.type = "Group"),
                e.push(o),
                (this._nodes = e);
            },
            applyMatrixTransform: function (t) {
              var e = this._nodes;
              (this._nodes = []), this.traverse(t);
              var o = this.createNodeEntry(t);
              (o.children = this._nodes),
                (o.type = "MatrixTransform"),
                (o.localMatrix = v.mat4.clone(t.getMatrix())),
                (o.worldMatrix = t.getWorldMatrices()[0]),
                e.push(o),
                (this._nodes = e);
            },
            applyGeometry: function (t) {
              var e = this._nodes;
              (this._nodes = []), this.traverse(t);
              var o = this.createNodeEntry(t);
              (o.type = t.className()), e.push(o), (this._nodes = e);
            },
            apply: function (t) {
              var e = t.getTypeID();
              e === v.Node.typeID
                ? this.applyNode(t)
                : e === v.MatrixTransform.typeID
                ? this.applyMatrixTransform(t)
                : t instanceof v.Geometry
                ? this.applyGeometry(t)
                : this.traverse(t);
            },
          })
        );
        const _ = b;
        var w = o("CUcOv"),
          y = o("qk4i");
        function M() {
          (this.handlers = []), (this.events = []);
        }
        M.prototype = {
          subscribe: function (t) {
            this.events.forEach(function (e) {
              t(e.name, e.args);
            });
            var e = this.handlers.push(t);
            return function () {
              this.handlers.split(e - 1, 1);
            };
          },
          emit: function (t, e) {
            this.events.push({ name: t, args: e }),
              this.handlers.forEach(function (o) {
                o(t, e);
              });
          },
        };
        const k = M;
        var C = g.Z.osg,
          I = function (t) {
            (this._translateUpdateCallbackListPerNode = {}),
              (this._rotateUpdateCallbackListPerNode = {}),
              (this._nodeList = t);
          };
        I.prototype = {
          addTranslateUpdateCallback: function (t, e, o) {
            var n = this._translateUpdateCallbackListPerNode[o];
            n &&
              (C.mat4.setTranslation(t.getMatrix(), n._target),
              (e._source = n._target)),
              (this._translateUpdateCallbackListPerNode[o] = e);
          },
          addRotateUpdateCallback: function (t, e, o) {
            var n = this._rotateUpdateCallbackListPerNode[o];
            if (n) {
              var i = n._target,
                a = C.mat4.create(),
                r = C.vec3.create();
              C.mat4.fromQuat(a, i),
                C.mat4.getTranslation(r, t.getMatrix()),
                C.mat4.setTranslation(a, r),
                C.mat4.copy(t.getMatrix(), a),
                (e._source = n._target);
            }
            this._rotateUpdateCallbackListPerNode[o] = e;
          },
          removeTranslateUpdateCallback: function (t) {
            delete this._translateUpdateCallbackListPerNode[t];
          },
          removeRotateUpdateCallback: function (t) {
            delete this._rotateUpdateCallbackListPerNode[t];
          },
          update: function (t, e) {
            var o, n, i;
            for (n in this._rotateUpdateCallbackListPerNode)
              (o = this._rotateUpdateCallbackListPerNode[n]),
                (i = this._nodeList[n]),
                o.update(i, e);
            for (n in this._translateUpdateCallbackListPerNode)
              (o = this._translateUpdateCallbackListPerNode[n]),
                (i = this._nodeList[n]),
                o.update(i, e);
            return !0;
          },
        };
        var S = function (t, e, o, n, i) {
          (this._source = t),
            (this._target = e),
            (this._duration = o),
            (this._started = -1),
            (this._easing = n),
            (this._finished = !1),
            (this._callback = i);
        };
        S.prototype = {
          isFinished: function () {
            return this._finished;
          },
          update: function (t, e) {
            if (this._finished) return !0;
            y.Z.redrawShadow();
            var o = e.getFrameStamp().getSimulationTime();
            this._started < 0 && (this._started = o);
            var n = (o - this._started) / this._duration;
            return (
              n > 1 &&
                ((this._finished = !0),
                this._callback && this._callback(this._result),
                (n = 1)),
              this._easing && (n = this._easing(n)),
              this.interpolate(n, t),
              !0
            );
          },
        };
        var E = function (t, e, o, n, i) {
          S.call(this, t, e, o, n, i), (this._result = C.vec3.create());
        };
        E.prototype = C.objectInherit(S.prototype, {
          interpolate: function (t, e) {
            C.vec3.lerp(this._result, this._source, this._target, t),
              C.mat4.setTranslation(e.getMatrix(), this._result),
              e.dirtyBound();
          },
        });
        var D = function (t, e, o, n, i) {
          S.call(this, t, e, o, n, i),
            (this._result = C.quat.create()),
            (this._translate = C.vec3.create()),
            (this._finalResult = C.mat4.create());
        };
        D.prototype = C.objectInherit(S.prototype, {
          interpolate: function (t, e) {
            C.quat.slerp(this._result, this._source, this._target, t),
              C.mat4.getTranslation(this._translate, e.getMatrix()),
              C.mat4.fromQuat(this._finalResult, this._result),
              C.mat4.setTranslation(this._finalResult, this._translate),
              C.mat4.copy(e.getMatrix(), this._finalResult),
              e.dirtyBound();
          },
        });
        var F,
          A,
          x = o("JbUU"),
          T = o("FGWR"),
          O = g.Z.osg,
          Z = g.Z.osgAnimation,
          N = function (t) {
            (this._partial = t),
              (this._events = {}),
              (this._replayEmitter = new k()),
              this._partial.on(
                "model-loaded",
                function () {
                  this._emitEvents();
                }.bind(this)
              ),
              (this._sceneGraphVisitor = new _()),
              (this._nodeMap = void 0);
          };
        N.prototype = {
          _filterAnnotationModelMessage: function (t) {
            delete t.refreshAction, delete t.sticky;
          },
          addGlobalListener: function (t) {
            this._replayEmitter.subscribe(t);
          },
          intersectPoint: function (t, e, o, n) {
            var i = this._getFeatureModel("material").findFirstMaterial(
              t._nodePath
            );
            this._replayEmitter.emit("click", {
              position3D: e,
              position2D: o,
              normal: n,
              instanceID: this._getHitNodeID(t),
              material: i ? i.getJSON() : null,
            });
          },
          _getFeatureModel: function (t) {
            var e = this._partial.scene.getFeatures()[t];
            if (e) return e.getModel();
          },
          _getViewerOSG: function () {
            return this._getViewer()._viewer;
          },
          _getViewer: function () {
            return this._partial.scene;
          },
          _emitEvents: function () {
            var t = [
              "viewerready",
              "annotationFocus",
              "annotationBlur",
              "click",
            ];
            this._partial.scene.on(
              "all",
              function (e, o) {
                -1 !== t.indexOf(e) && this._replayEmitter.emit(e, o);
              }.bind(this)
            ),
              (this.emitEvents = function () {});
          },
          _computeSceneGraph: function () {
            var t = this._sceneGraphVisitor;
            t.isDirty() && this._getViewer().getRootModel().accept(t);
          },
          _getRootNode: function () {
            return (
              this._computeSceneGraph(), this._sceneGraphVisitor.getRootNode()
            );
          },
          _getRealNodeMap: function () {
            return (
              this._computeSceneGraph(),
              this._sceneGraphVisitor.getRealNodeMap()
            );
          },
          _getRepresentationNodeMap: function () {
            return (
              this._computeSceneGraph(),
              this._sceneGraphVisitor.getRepresentationNodeMap()
            );
          },
          _convertDataUriToImage: function (t, e, o) {
            var n = t;
            n.length > 100 &&
              n.match(/^(?:[data]{4}:(text|image|application)\/[a-z]*)/) &&
              (n = n.slice(0, 100));
            var i = this._getFeatureModel("material").getImageCollection();
            w.Z.instance
              .getOrCreateImage(t)
              .promise.then(function (a) {
                var r = i.addNewImage({
                  uid: e,
                  url: t,
                  width: a.getWidth(),
                  height: a.getHeight(),
                  name: n,
                });
                o(null, r.getUID());
              })
              .catch(function () {
                o("failed to add texture");
              });
          },
          start: function (t) {
            this._partial.start(), t(null);
          },
          stop: function (t) {
            this._partial.stop(), t(null);
          },
          load: function (t) {
            this._partial.load(), t(null);
          },
          gotoAnnotation: function (t, e) {
            var o = this._getFeatureModel("hotspot").get("hotspots"),
              n = o.at(t);
            o.trigger("select", n), e(null, t);
          },
          getAnnotationList: function (t) {
            var e = this._getFeatureModel("hotspot").get("hotspots").toJSON();
            e.forEach(this._filterAnnotationModelMessage.bind(this)),
              t(null, e);
          },
          lookat: function (t, e, o, n) {
            this.setCameraLookAt(t, e, o, n);
          },
          setFov: function (t, e) {
            var o = this._getFeatureModel("camera");
            o.set("dollyPrevent", !0);
            var n = o.setJSON({ fov: t });
            e(n.length ? n : null, t), o.set("dollyPrevent", !1);
          },
          getCurrentTime: function (t) {
            var e = this._getFeatureModel("animation"),
              o = e.getCurrentAnimation().get("duration");
            t(null, (e.get("progress") * o) / 100);
          },
          play: function (t) {
            this._getFeatureModel("animation").set("playing", !0), t(null);
          },
          pause: function (t) {
            var e = this._getFeatureModel("animation");
            e ? (e.set("playing", !1), t(null)) : t("no animation feature");
          },
          seekTo: function (t, e) {
            var o = this._getFeatureModel("animation"),
              n = (100 * t) / o.getCurrentAnimation().get("duration");
            o.trigger("seek", n), e(null);
          },
          getAnimations: function (t) {
            var e = this._getFeatureModel("animation"),
              o = [];
            e.get("animations").forEach(function (t) {
              var e = [];
              e.push(t.get("uid")),
                e.push(t.get("name")),
                e.push(t.get("duration")),
                o.push(e);
            }),
              t(null, o);
          },
          setCurrentAnimationByUID: function (t, e) {
            this._getFeatureModel("animation").set("currentUID", t), e(null);
          },
          setCycleMode: function (t, e) {
            var o = this._getFeatureModel("animation");
            1 === o.get("animations").length && "all" === t && (t = "one");
            var n = o.setJSON(
              { cycleMode: t },
              { validate: !0, warnOnError: !0 }
            );
            e(n && n.length ? n : null);
          },
          setSpeed: function (t, e) {
            var o = this._getFeatureModel("animation").setJSON(
              { speed: t },
              { validate: !0, warnOnError: !0 }
            );
            e(o && o.length ? o : null, t);
          },
          getSceneGraph: function (t) {
            t(null, this._getRootNode());
          },
          getNodeMap: function (t) {
            t(null, this._getRepresentationNodeMap());
          },
          getNodeMask: function (t, e) {
            var o = this._getNodeFromUserNodeID(t);
            o
              ? e(null, o.getNodeMask())
              : e("node with id " + t.toString() + " not found");
          },
          getMatrix: function (t, e) {
            var o = this._getNodeFromUserNodeID(t);
            o
              ? e(null, {
                  local: o.getMatrix(),
                  world: o.getWorldMatrices()[0],
                })
              : e("node with id " + t.toString() + " not found");
          },
          setMatrix: function (t, e, o) {
            var n = this._getNodeFromUserNodeID(t);
            n
              ? (O.mat4.copy(n.getMatrix(), e),
                n.dirtyBound(),
                o(null),
                y.Z.redrawShadow())
              : o("node with id " + t.toString() + " not found");
          },
          hide: function (t, e) {
            var o = this._getNodeFromUserNodeID(t);
            o
              ? (o.setNodeMask(0), e(null))
              : e("show: node id " + t + " not found"),
              y.Z.redrawShadow();
          },
          show: function (t, e) {
            var o = this._getNodeFromUserNodeID(t);
            o
              ? (o.setNodeMask(-1), e(null))
              : e("show: node id " + t + " not found"),
              y.Z.redrawShadow();
          },
          translate: function () {
            var t,
              e,
              o = arguments.length,
              n = arguments[o - 1],
              i = arguments[0],
              a = arguments[1];
            4 === o
              ? (t = arguments[2])
              : 5 === o && ((t = arguments[2]), (e = arguments[3])),
              (t = t || 0);
            var r = Z[e] || Z.easeOutQuad,
              s = this._getNodeFromUserNodeID(i);
            if (s)
              if (s.getTypeID() === O.MatrixTransform.typeID) {
                if (t > 0) {
                  var l = O.vec3.create();
                  O.mat4.getTranslation(l, s.getMatrix());
                  var c = new E(l, a, t, r, function (t) {
                    s.removeUpdateCallback(c), n(null, t);
                  });
                  s.addUpdateCallback(c);
                } else
                  O.mat4.setTranslation(s.getMatrix(), a),
                    s.dirtyBound(),
                    n(null, a);
                y.Z.redrawShadow();
              } else n("you can only translate MatrixTransform nodes");
            else n("node with id " + i.toString() + " not found");
          },
          rotate:
            ((F = O.vec3.create()),
            (A = O.vec3.create()),
            function () {
              var t,
                e,
                o = arguments.length,
                n = arguments[o - 1],
                i = arguments[0],
                a = arguments[1];
              4 === o
                ? (t = arguments[2])
                : 5 === o && ((t = arguments[2]), (e = arguments[3])),
                (t = t || 0);
              var r = Z[e] || Z.easeOutQuad,
                s = this._getNodeFromUserNodeID(i);
              if (s)
                if (s.getTypeID() === O.MatrixTransform.typeID) {
                  var l = O.quat.create(),
                    c = O.mat4.create();
                  if (
                    (O.mat4.fromRotation(
                      c,
                      -a[0],
                      O.vec3.set(A, a[1], a[2], a[3])
                    ),
                    O.mat4.getRotation(l, c),
                    t > 0)
                  ) {
                    var d = O.quat.create();
                    O.mat4.getRotation(d, s.getMatrix());
                    var u = new D(d, l, t, r, function (t) {
                      s.removeUpdateCallback(u), n(null, t);
                    });
                    s.addUpdateCallback(u);
                  } else
                    O.mat4.fromQuat(c, l),
                      O.mat4.getTranslation(F, s.getMatrix()),
                      O.mat4.setTranslation(c, F),
                      O.mat4.copy(s.getMatrix(), c),
                      s.dirtyBound(),
                      n(null, a);
                  y.Z.redrawShadow();
                } else n("you can only translate MatrixTransform nodes");
              else n("node with id " + i.toString() + " not found");
            }),
          getRootMatrixNode: function (t) {
            var e = this._getViewer().getRootModel();
            if ((e || t("No scene loaded"), !this._nodeInTheMiddle)) {
              (this._nodeInTheMiddle = new O.MatrixTransform()),
                this._nodeInTheMiddle.setName("NITM");
              for (var o = e.getChildren(), n = 0, i = o.length; n < i; n++)
                this._nodeInTheMiddle.addChild(o[n]);
              e.removeChildren(), e.addChild(this._nodeInTheMiddle);
            }
            t(
              null,
              this._nodeInTheMiddle.getInstanceID(),
              this._nodeInTheMiddle.getMatrix()
            );
          },
          getCameraLookAt: function (t) {
            var e = this._getViewerOSG().getManipulator(),
              o = [],
              n = [];
            e.getTarget(o),
              e.getEyePosition(n),
              t(null, { position: n, target: o });
          },
          setCameraLookAt: function (t, e) {
            var o = this._getFeatureModel("camera"),
              n = this._getViewerOSG().getManipulator(),
              i = arguments[arguments.length - 1],
              a = 3 === arguments.length ? 2 : arguments[2];
            a <= 0
              ? n.setTargetAndEye(e, t)
              : (o.setTargetAndEye(e, t), o.set("animationDuration", a)),
              y.Z.redrawShadow(),
              i(null);
          },
          getScreenShot: function () {
            var t,
              e,
              o = arguments.length,
              n = arguments[o - 1],
              i = "image/jpeg";
            if (2 === o) i = arguments[0];
            else if (3 === o)
              (t = Math.floor(arguments[0])), (e = Math.floor(arguments[1]));
            else if (4 === o)
              (t = Math.floor(arguments[0])),
                (e = Math.floor(arguments[1])),
                (i = arguments[2]);
            else if (1 !== o)
              return void n(
                "Wrong number of arguments, signature should be (width, height, [callback]), (width, height, mimetype, [callback]), (mimetype, [callback]) or ([callback])."
              );
            var a = this._getViewer().getScreenShot(t, e);
            n(null, a.toDataURL(i));
          },
          getMaterialList: function (t) {
            var e = this._getFeatureModel("material");
            t(null, (0, f.Z)(e.getJSON()));
          },
          getTextureList: function (t) {
            t(
              null,
              this._getFeatureModel("material").getImageCollection().toJSON()
            );
          },
          addTexture: function (t, e) {
            this._convertDataUriToImage(t, void 0, e);
          },
          updateTexture: function (t, e, o) {
            this._convertDataUriToImage(
              t,
              e,
              function (t) {
                if (t) o(t);
                else {
                  var n = this._getFeatureModel("material").getMaterials();
                  for (var i in n) {
                    var a = n[i].getChannels();
                    for (var r in a) {
                      var s = a[r],
                        l = s.getTextureModel();
                      l && l.getUID() === e && s.trigger("updateChannel");
                    }
                  }
                  o(null, e);
                }
              }.bind(this)
            );
          },
          setTextureQuality: function (t, e) {
            var o = this._getFeatureModel("quality");
            o.get("promiseReady").then(
              function (n) {
                var i = { ld: 0, sd: 1, hd: 2 };
                if (
                  (n.high || (i = { ld: 0, hd: 1 }),
                  n.mid || (i = { hd: 0 }),
                  t in i)
                ) {
                  var a = i[t];
                  o.set("level", a), e(null, "texture quality set to " + a);
                } else {
                  var r = (0, m.Z)(i, function (t, e) {
                    return e;
                  }).join(", ");
                  e(
                    [
                      'Quality must be a string "ld", "sd" or "hd".',
                      " Available qualities for this model are : ",
                      r,
                    ].join(""),
                    null
                  );
                }
              }.bind(this)
            );
          },
          setMaterial: function (t, e) {
            var o = this._getFeatureModel("material"),
              n = t.stateSetID,
              i = o.getMaterialByStateSetID(n);
            i.setMaterialJSON(t, o.getImageCollection(), {
              validate: !1,
              warnOnError: !1,
            }),
              i.trigger("apply"),
              y.Z.redrawShadow(),
              e(null);
          },
          setPostProcessing: function (t, e) {
            this._getFeatureModel("postProcess").set(t), e(null);
          },
          getPostProcessing: function (t) {
            t(this._getFeatureModel("postProcess").toJSON());
          },
          getWorldToScreenCoordinates: function (t, e) {
            var o = x.Z.getScreenPositionFromWorldPoint(t);
            e({
              glCoord: o.slice(0, 2),
              canvasCoord: T.Z.glCoordToCanvas(o[0], o[1], o).slice(0, 2),
            });
          },
          _getNodeFromUserNodeID: function (t) {
            return this._getRealNodeMap()[t];
          },
          _getHitNodeID: function (t) {
            if (t && t._nodePath && t._nodePath.length) {
              var e = t._nodePath[t._nodePath.length - 1];
              if (e) return e.getInstanceID();
            }
          },
        };
        const P = N;
        var R,
          L,
          U,
          V,
          j = o("4EEe"),
          H = o("gvzH"),
          B = o("Lz+S"),
          G = o("XkCy"),
          q = o("aMVL"),
          W = o("+cla"),
          z = o("Oyie"),
          K = g.Z.osg,
          J = function () {
            P.apply(this, arguments),
              (this._displayed = !1),
              q.Z.getModelDisplayed().then(
                function () {
                  this._displayed = !0;
                }.bind(this)
              ),
              (this._pickMask = {
                click: H.Z.PICK_GEOMETRY_FAST,
                mousemove: H.Z.PICK_GEOMETRY_FAST,
              });
          };
        J.prototype = (0, W.Z)(P.prototype, {
          addGlobalListener: function (t) {
            G.Z.getBoxReady().then(
              function () {
                j.Z.initViewerAPI(this),
                  this._getViewer()
                    .getInputManager()
                    .setEnable(B.Z.SCENE_VIEWERAPI, !0);
              }.bind(this)
            ),
              this._replayEmitter.subscribe(t);
          },
          intersectPoint: void 0,
          _emitEvents: function () {
            var t = {
                viewerready: "viewerready",
                started: "viewerstart",
                stopped: "viewerstop",
                annotationFocus: "annotationFocus",
                annotationBlur: "annotationBlur",
                annotationMouseEnter: "annotationMouseEnter",
                annotationMouseLeave: "annotationMouseLeave",
                annotationSelect: "annotationSelect",
                nodeMouseEnter: "nodeMouseEnter",
                nodeMouseLeave: "nodeMouseLeave",
                click: "click",
                cameraStart: "camerastart",
                cameraStop: "camerastop",
              },
              e = function (e, o) {
                var n = t[e];
                n && this._replayEmitter.emit(n, o);
              }.bind(this);
            this._partial.on("all", e),
              this._partial.scene.on("all", e),
              (this._emitEvents = function () {});
          },
          onCursorUp:
            ((L = K.vec3.create()),
            (U = K.vec3.create()),
            (V = K.vec2.create()),
            function (t) {
              if (this._displayed) {
                (V[0] = t.canvasX), (V[1] = t.canvasY);
                var e = x.Z.computeNearestIntersection2D(
                    V[0],
                    V[1],
                    this._pickMask.click
                  ),
                  o = {
                    position3D: null,
                    position2D: V,
                    normal: null,
                    instanceID: null,
                    material: null,
                  };
                if (e) {
                  x.Z.getWorldPositionFromHit(e, U, L);
                  var n = this._getFeatureModel("material").findFirstMaterial(
                    e._nodePath
                  );
                  (o.normal = L),
                    (o.position3D = U),
                    (o.instanceID = this._getHitNodeID(e)),
                    (o.material = n ? n.getJSON() : null),
                    this._replayEmitter.emit("click", o);
                } else this._replayEmitter.emit("click", o);
              }
            }),
          onMouseMove: (function () {
            var t,
              e,
              o = K.vec3.create(),
              n = K.vec3.create(),
              i = K.vec2.create();
            return function (a) {
              if (this._displayed) {
                (i[0] = a.canvasX), (i[1] = a.canvasY);
                var r = x.Z.computeNearestIntersection2D(
                  i[0],
                  i[1],
                  this._pickMask.click
                );
                if (r) {
                  x.Z.getWorldPositionFromHit(r, n, o);
                  var s = this._getHitNodeID(r),
                    l = this._getFeatureModel("material").findFirstMaterial(
                      r._nodePath
                    );
                  if (e === s) return;
                  return (
                    e &&
                      this._replayEmitter.emit("nodeMouseLeave", {
                        position3D: null,
                        position2D: null,
                        normal: o,
                        instanceID: e,
                        material: t,
                      }),
                    (e = s),
                    (t = l ? l.getJSON() : null),
                    void this._replayEmitter.emit("nodeMouseEnter", {
                      position3D: n,
                      position2D: i,
                      normal: o,
                      instanceID: e,
                      material: t,
                    })
                  );
                }
                e &&
                  (this._replayEmitter.emit("nodeMouseLeave", {
                    position3D: n,
                    position2D: i,
                    normal: o,
                    instanceID: e,
                    material: t,
                  }),
                  (e = void 0),
                  (t = void 0));
              }
            };
          })(),
          setListenerOptions: function (t) {
            if (t && "function" != typeof t)
              switch (t.name) {
                case "click":
                  this._pickMask.click =
                    "slow" === t.pick
                      ? H.Z.PICK_GEOMETRY_SLOW
                      : H.Z.PICK_GEOMETRY_FAST;
                  break;
                case "nodeMouseEnter":
                case "nodeMouseLeave":
                  this._pickMask.mousemove =
                    "slow" === t.pick
                      ? H.Z.PICK_GEOMETRY_SLOW
                      : H.Z.PICK_GEOMETRY_FAST;
              }
          },
          pickColor:
            ((R = new Uint8Array(4)),
            function (t, e) {
              new z(
                function (e, o) {
                  var n = this._getViewerOSG().getCamera();
                  n.setFinalDrawCallback(function (i) {
                    var a = i.getGraphicContext();
                    if (
                      a.checkFramebufferStatus(a.FRAMEBUFFER) ===
                      a.FRAMEBUFFER_COMPLETE
                    ) {
                      a.flush(), a.finish();
                      var r =
                          t[0] * (a.drawingBufferWidth / a.canvas.clientWidth),
                        s =
                          a.drawingBufferHeight *
                          (1 - t[1] / a.canvas.clientHeight);
                      a.readPixels(r, s, 1, 1, a.RGBA, a.UNSIGNED_BYTE, R),
                        e(R),
                        n.setFinalDrawCallback(void 0);
                    } else o();
                  });
                }.bind(this)
              ).then(function () {
                e(R);
              });
            }),
          unselectAnnotation: function (t) {
            this.gotoAnnotation(-1, t);
          },
          requestRedraw: function () {
            y.Z.redrawShadow();
          },
        });
        const $ = J;
        var Y = o("jQKg"),
          X = g.Z.osg,
          Q = g.Z.osgAnimation,
          tt = function () {
            $.apply(this, arguments), (this.updateDaemon = void 0);
          };
        tt.prototype = (0, W.Z)($.prototype, {
          setCameraEasing: function (t) {
            this._getFeatureModel("camera").set("easingFunction", t);
          },
          hideAnnotation: function (t, e) {
            this._getFeatureModel("hotspot")
              .get("hotspots")
              .at(t)
              .set("visible", !1),
              y.Z.draw(),
              e(null);
          },
          showAnnotation: function (t, e) {
            this._getFeatureModel("hotspot")
              .get("hotspots")
              .at(t)
              .set("visible", !0),
              y.Z.draw(),
              e(null);
          },
          createAnnotation: function (t, e, o, n, i, a, r) {
            var s = x.Z.computeNearestIntersection3D(t, e);
            if (!s) return r(null);
            var l = this._getFeatureModel("hotspot"),
              c = l.createHotspot(s, !0);
            Y.Z.getMarkdownPreview(a).then(
              function (t) {
                c.set({
                  name: i,
                  content: { raw: a, rendered: t.result },
                  eye: o,
                  target: n,
                }),
                  y.Z.redrawShadow(),
                  r(null, l.get("hotspots").length - 1),
                  y.Z.draw();
              },
              function () {
                c.set({ name: i, eye: o, target: n }),
                  y.Z.redrawShadow(),
                  r(null, l.get("hotspots").length - 1),
                  y.Z.draw();
              }.bind(this)
            );
          },
          updateAnnotation: function (t) {
            var e,
              o = this._getFeatureModel("hotspot").get("hotspots"),
              n = o.at(t);
            if (3 === arguments.length) {
              var i = arguments[1],
                a = {};
              if (
                (i.title && (a.name = i.title),
                i.content && (a.content = { raw: i.content }),
                i.eye && (a.eye = i.eye),
                i.target && (a.target = i.target),
                (e = arguments[2]),
                i.content)
              )
                return void Y.Z.getMarkdownPreview(i.content).then(
                  function (t) {
                    a.content.rendered = t.result;
                    var o = n.toJSON();
                    this._filterAnnotationModelMessage(o),
                      e(null, o),
                      n.set(a),
                      y.Z.draw();
                  }.bind(this),
                  function () {
                    var t = n.toJSON();
                    this._filterAnnotationModelMessage(t),
                      e(null, t),
                      n.set(a),
                      y.Z.draw();
                  }.bind(this)
                );
              n.set(a);
            } else e = arguments[1];
            var r = n.toJSON();
            this._filterAnnotationModelMessage(r),
              y.Z.redrawShadow(),
              e(null, r);
          },
          getAnnotation: function (t, e) {
            var o = this._getFeatureModel("hotspot")
              .get("hotspots")
              .at(t)
              .toJSON();
            this._filterAnnotationModelMessage(o), e(null, o);
          },
          removeAnnotation: function (t, e) {
            var o = this._getFeatureModel("hotspot").get("hotspots"),
              n = o.at(t);
            o.remove(n), y.Z.redrawShadow(), e(null);
          },
          pickFromScreen: (function () {
            var t = X.vec3.create(),
              e = X.vec3.create();
            return function (o, n) {
              var i = x.Z.computeNearestIntersection2D(
                o[0],
                o[1],
                this._pickMask.click
              );
              if (!i) return n(null);
              x.Z.getWorldPositionFromHit(i, e, t);
              var a = this._getHitNodeID(i),
                r = this._getFeatureModel("material").findFirstMaterial(
                  i._nodePath
                );
              n(null, {
                position3D: e,
                position2D: o,
                normal: t,
                instanceID: a,
                material: r ? r.getJSON() : null,
              });
            };
          })(),
          pickFromScene: (function () {
            var t = X.vec3.create(),
              e = X.vec3.create();
            return function (o, n, i) {
              var a = x.Z.computeNearestIntersection3D(o, n);
              if (!a) return i(null);
              x.Z.getWorldPositionFromHit(a, e, t);
              var r = this._getHitNodeID(a),
                s = this._getFeatureModel("material").findFirstMaterial(
                  a._nodePath
                );
              i(null, {
                position3D: e,
                normal: t,
                instanceID: r,
                material: s ? s.getJSON() : null,
              });
            };
          })(),
          addVideoTexture: function (t, e, o) {
            this._convertVideoDataUriToImage(t, void 0, e, o);
          },
          _convertVideoDataUriToImage: function (t, e, o, n) {
            var i = this._getFeatureModel("material").getImageCollection();
            w.Z.instance
              .getOrCreateImage(t)
              .promise.then(function (a) {
                var r = i.addNewImage({
                  uid: e,
                  url: t,
                  width: a.getWidth(),
                  height: a.getHeight(),
                  name: t.slice(0, 100),
                });
                void 0 !== o && a.getImage && (a.getImage().loop = o),
                  n(null, r.getUID());
              })
              .catch(function () {
                n("failed to add texture");
              });
          },
          translate: function (t, e, o) {
            var n = arguments.length,
              i = arguments[n - 1],
              a = 0,
              r = Q.easeOutQuad;
            n > 2 &&
              ((o = arguments[2]).duration && (a = o.duration),
              o.easing && Q[o.easing] && (r = Q[o.easing]));
            var s = this._getNodeFromUserNodeID(t);
            if (s)
              if (s.getTypeID() === X.MatrixTransform.typeID) {
                if (a > 0) {
                  var l = X.vec3.create();
                  X.mat4.getTranslation(l, s.getMatrix());
                  var c = new E(
                    l,
                    e,
                    a,
                    r,
                    function (e) {
                      this.updateDaemon.removeTranslateUpdateCallback(t),
                        i(null, e);
                    }.bind(this)
                  );
                  this.updateDaemon || this._initUpdateDaemon(),
                    this.updateDaemon.addTranslateUpdateCallback(s, c, t);
                } else
                  X.mat4.setTranslation(s.getMatrix(), e),
                    s.dirtyBound(),
                    i(null, e);
                y.Z.redrawShadow();
              } else i("you can only translate MatrixTransform nodes");
            else i("node with id " + t.toString() + " not found");
          },
          rotate: (function () {
            var t = X.vec3.create(),
              e = X.vec3.create();
            return function (o, n, i) {
              var a = arguments.length,
                r = arguments[a - 1],
                s = 0,
                l = Q.easeOutQuad;
              a > 2 &&
                ((i = arguments[2]).duration && (s = i.duration),
                i.easing && Q[i.easing] && (l = Q[i.easing]));
              var c = this._getNodeFromUserNodeID(o);
              if (c)
                if (c.getTypeID() === X.MatrixTransform.typeID) {
                  var d = X.quat.create(),
                    u = X.mat4.create();
                  if (
                    (X.mat4.fromRotation(
                      u,
                      -n[0],
                      X.vec3.set(e, n[1], n[2], n[3])
                    ),
                    X.mat4.getRotation(d, u),
                    s > 0)
                  ) {
                    var h = X.quat.create();
                    X.mat4.getRotation(h, c.getMatrix());
                    var p = new D(
                      h,
                      d,
                      s,
                      l,
                      function (t) {
                        this.updateDaemon.removeRotateUpdateCallback(o),
                          r(null, t);
                      }.bind(this)
                    );
                    this.updateDaemon || this._initUpdateDaemon(),
                      this.updateDaemon.addRotateUpdateCallback(c, p, o);
                  } else
                    X.mat4.fromQuat(u, d),
                      X.mat4.getTranslation(t, c.getMatrix()),
                      X.mat4.setTranslation(u, t),
                      X.mat4.copy(c.getMatrix(), u),
                      c.dirtyBound(),
                      r(null, n);
                  y.Z.redrawShadow();
                } else r("you can only rotate MatrixTransform nodes");
              else r("node with id " + o.toString() + " not found");
            };
          })(),
          _initUpdateDaemon: function () {
            var t = this._getViewer().getRootModel();
            (this.updateDaemon = new I(this._getRealNodeMap())),
              t.addUpdateCallback(this.updateDaemon);
          },
        });
        const et = tt;
        var ot = g.Z.osg,
          nt = function () {
            ot.NodeVisitor.apply(this, arguments), this.reset();
          };
        ot.createPrototypeObject(
          nt,
          ot.objectInherit(ot.NodeVisitor.prototype, {
            reset: function () {
              (this._nodes = []),
                (this._nodeMap = {}),
                (this._nodeList = {}),
                (this._dirty = !0),
                (this._apiSceneID = 0);
            },
            isDirty: function () {
              return this._dirty;
            },
            getRootNode: function () {
              return this._nodes[0];
            },
            getRealNodeMap: function () {
              return this._nodeList;
            },
            getRepresentationNodeMap: function () {
              return this._nodeMap;
            },
            createNodeEntry: function (t) {
              this._dirty = !1;
              var e = t._uniqueID;
              this._nodeList[e] || (this._nodeList[e] = t);
              var o = {
                name: t.getName(),
                instanceID: e,
                nodeMask: t.getNodeMask(),
              };
              return this._nodeMap[e] || (this._nodeMap[e] = o), o;
            },
            applyNode: function (t) {
              var e = this._nodes;
              (this._nodes = []), this.traverse(t);
              var o = this.createNodeEntry(t);
              (o.children = this._nodes),
                (o.type = "Group"),
                e.push(o),
                (this._nodes = e);
            },
            applyMatrixTransform: function (t) {
              var e = this._nodes;
              (this._nodes = []), this.traverse(t);
              var o = this.createNodeEntry(t);
              (o.children = this._nodes),
                (o.type = "MatrixTransform"),
                (o.localMatrix = ot.mat4.clone(t.getMatrix())),
                (o.worldMatrix = t.getWorldMatrices()[0]),
                e.push(o),
                (this._nodes = e);
            },
            applyGeometry: function (t) {
              var e = this._nodes;
              (this._nodes = []), this.traverse(t);
              var o = this.createNodeEntry(t);
              (o.type = t.className()), e.push(o), (this._nodes = e);
            },
            apply: function (t) {
              if (void 0 !== t._uniqueID) {
                var e = t.getTypeID();
                e === ot.Node.typeID
                  ? this.applyNode(t)
                  : e === ot.MatrixTransform.typeID
                  ? this.applyMatrixTransform(t)
                  : t instanceof ot.Geometry
                  ? this.applyGeometry(t)
                  : this.traverse(t);
              } else this.traverse(t);
            },
          })
        );
        const it = nt;
        var at,
          rt = g.Z.osg,
          st = function () {
            et.apply(this, arguments),
              (this._sceneGraphVisitor = new it()),
              (this.updateDaemon = void 0),
              (this._startDrag = !1),
              (this._startCoord = rt.vec2.create());
          };
        st.prototype = (0, W.Z)(et.prototype, {
          addGlobalListener: function (t) {
            G.Z.getBoxReady().then(
              function () {
                j.Z.initViewerAPI_1_4(this),
                  this._getViewer()
                    .getInputManager()
                    .setEnable(B.Z.SCENE_VIEWERAPI_1_4, !0);
              }.bind(this)
            ),
              this._replayEmitter.subscribe(t);
          },
          onCursorUp:
            ((at = rt.vec2.create()),
            function (t) {
              var e =
                this._startDrag &&
                rt.vec2.dist(rt.vec2.set(at, t.glX, t.glY), this._startCoord) >
                  5;
              (this._startDrag = !1), e || $.prototype.onCursorUp.call(this, t);
            }),
          onCursorDown: function (t) {
            rt.vec2.set(this._startCoord, t.glX, t.glY), (this._startDrag = !0);
          },
          getFov: function (t) {
            t(null, this._getFeatureModel("camera").get("fov"));
          },
          setCurrentAnimationByUID: function (t, e) {
            P.prototype.setCurrentAnimationByUID.apply(this, arguments),
              y.Z.redrawShadow(),
              e(null);
          },
          setLight: function (t, e, o) {
            var n = this._getFeatureModel("lighting").get("lights")[t];
            e &&
              (void 0 !== e.matrix && n.set("matrix", e.matrix),
              void 0 !== e.enabled && n.set("enable", e.enabled),
              void 0 !== e.type && n.set("type", e.type),
              void 0 !== e.shadowEnabled &&
                n.set("castShadows", e.shadowEnabled),
              void 0 !== e.color && n.set("color", e.color),
              void 0 !== e.intensity && n.set("intensity", e.intensity)),
              y.Z.redrawShadow(),
              o(null);
          },
          getLight: function (t, e) {
            var o = this._getFeatureModel("lighting").get("lights");
            (!o || t >= o.length) &&
              e("light with id " + t.toString() + " not found");
            var n = o[t];
            e(null, {
              matrix: n.get("matrix"),
              enabled: n.get("enable"),
              shadowEnabled: n.get("castshadows"),
              color: n.get("color"),
              intensity: n.get("intensity"),
            });
          },
          setEnvironment: function (t, e) {
            var o = this._getFeatureModel("environment");
            t &&
              (void 0 !== t.enabled && o.set("enable", t.enabled),
              void 0 !== t.exposure && o.set("exposure", t.exposure),
              void 0 !== t.lightIntensity &&
                o.set("lightIntensity", t.lightIntensity),
              void 0 !== t.rotation && o.set("rotation", t.rotation),
              void 0 !== t.shadowEnabled &&
                o.set("shadowEnable", t.shadowEnabled)),
              y.Z.redrawShadow(),
              e(null);
          },
          getEnvironment: function (t) {
            var e = this._getFeatureModel("environment");
            t(null, {
              enabled: e.get("enable"),
              exposure: e.get("exposure"),
              lightIntensity: e.get("lightIntensity"),
              rotation: e.get("rotation"),
              shadowEnabled: e.get("shadowEnable"),
            });
          },
          setShadingStyle: function (t, e, o) {
            var n = this._getFeatureModel("shadingStyle");
            try {
              n.set("renderer", t), e && e.type && n.set("type", e.type);
            } catch (t) {
              return o(null);
            }
            y.Z.redrawShadow(), o(null);
          },
          getShadingStyle: function (t) {
            var e = this._getFeatureModel("shadingStyle");
            t(null, { shadingStyle: e.get("renderer"), type: e.get("type") });
          },
          setWireframe: function (t, e, o) {
            var n = this._getFeatureModel("shadingStyle");
            try {
              n.set("wireframeEnable", t),
                e && e.color && n.set("wireframeColor", e.color);
            } catch (t) {
              return o(null);
            }
            y.Z.redrawShadow(), o(null);
          },
          getWireframe: function (t) {
            var e = this._getFeatureModel("shadingStyle");
            t(null, {
              enabled: e.get("wireframeEnable"),
              color: e.get("wireframeColor"),
            });
          },
          _getHitNodeID: function (t) {
            if (t && t._nodePath && t._nodePath.length) {
              var e = t._nodePath[t._nodePath.length - 1];
              if (e) return e._uniqueID;
            }
          },
          getRootMatrixNode: function (t) {
            var e = this._getViewer().getRootModel();
            if ((e || t("No scene loaded"), !this._nodeInTheMiddle)) {
              var o = this._sceneGraphVisitor;
              o.reset(), this._getViewer().getRootModel().accept(o);
              var n = 0,
                i = o.getRepresentationNodeMap();
              for (var a in i) {
                var r = parseInt(a, 10);
                n = n > r ? n : r;
              }
              n++,
                (this._nodeInTheMiddle = new rt.MatrixTransform()),
                this._nodeInTheMiddle.setName("NITM"),
                (this._nodeInTheMiddle._uniqueID = n);
              for (var s = e.getChildren(), l = 0, c = s.length; l < c; l++)
                this._nodeInTheMiddle.addChild(s[l]);
              e.removeChildren(),
                e.addChild(this._nodeInTheMiddle),
                o.reset(),
                this._getViewer().getRootModel().accept(o);
            }
            t(
              null,
              this._nodeInTheMiddle._uniqueID,
              this._nodeInTheMiddle.getMatrix()
            );
          },
        });
        const lt = st;
        var ct = g.Z.osg,
          dt = function () {
            it.apply(this, arguments);
          };
        ct.createPrototypeObject(
          dt,
          ct.objectInherit(it.prototype, {
            setApiCore: function (t) {
              this._apicore = t;
            },
            createNodeEntry: function (t) {
              this._dirty = !1;
              var e = t._uniqueID;
              this._nodeList[e] || (this._nodeList[e] = t);
              var o = this._apicore._getFeatureModel("material"),
                n = o ? o.findFirstMaterial(this.nodePath) : "",
                i = {
                  name: t.getName(),
                  instanceID: e,
                  nodeMask: t.getNodeMask(),
                  materialID: n ? n.getJSON().id : null,
                };
              return this._nodeMap[e] || (this._nodeMap[e] = i), i;
            },
          })
        );
        const ut = dt;
        var ht = function () {
          (this.actions = []), (this.startedAt = 0), (this.recording = !1);
        };
        ht.prototype = {
          addCamera: function (t) {
            if (this.recording) {
              if (this.lastCamera) {
                var e = this.lastCamera;
                if (
                  e &&
                  e.position[0] === t.position[0] &&
                  e.position[1] === t.position[1] &&
                  e.position[2] === t.position[2] &&
                  e.target[0] === t.target[0] &&
                  e.target[1] === t.target[1] &&
                  e.target[2] === t.target[2]
                )
                  return;
              }
              (this.lastCamera = t),
                (t.type = "camera"),
                void 0 === t.timeStamp && (t.timeStamp = this.timeElapsed()),
                this.actions.push(t);
            }
          },
          addInputEvent: function (t, e) {
            this.recording &&
              ((e.type = t),
              (e.timeStamp = this.timeElapsed()),
              this.actions.push(e));
          },
          start: function () {
            this.recording ||
              ((this.actions = []),
              (this.startedAt = window.performance.now()),
              (this.recording = !0));
          },
          stop: function () {
            this.recording = !1;
            for (
              var t = this.actions.length,
                e = new Float32Array(8 * t),
                o = 0,
                n = 0;
              n < t;
              n++
            ) {
              var i = this.actions[n];
              switch (i.type) {
                case "camera":
                  (e[o++] = i.timeStamp),
                    (e[o++] = 1),
                    (e[o++] = i.position[0]),
                    (e[o++] = i.position[1]),
                    (e[o++] = i.position[2]),
                    (e[o++] = i.target[0]),
                    (e[o++] = i.target[1]),
                    (e[o++] = i.target[2]);
                  break;
                case "click":
                  (e[o++] = i.timeStamp),
                    (e[o++] = 2),
                    (e[o++] = i.clientX),
                    (e[o++] = i.clientY),
                    (e[o++] = i.ctrlKey),
                    (e[o++] = i.shiftKey),
                    (e[o++] = i.altKey),
                    o++;
                  break;
                case "wheel":
                  (e[o++] = i.timeStamp),
                    (e[o++] = 3),
                    (e[o++] = i.clientX),
                    (e[o++] = i.clientY),
                    (e[o++] = i.ctrlKey),
                    (e[o++] = i.shiftKey),
                    (e[o++] = i.altKey),
                    o++;
                  break;
                case "mousemove":
                  (e[o++] = i.timeStamp),
                    (e[o++] = 4),
                    (e[o++] = i.clientX),
                    (e[o++] = i.clientY),
                    (e[o++] = i.ctrlKey),
                    (e[o++] = i.shiftKey),
                    (e[o++] = i.altKey),
                    o++;
                  break;
                case "mousedown":
                  (e[o++] = i.timeStamp),
                    (e[o++] = 5),
                    (e[o++] = i.clientX),
                    (e[o++] = i.clientY),
                    (e[o++] = i.ctrlKey),
                    (e[o++] = i.shiftKey),
                    (e[o++] = i.altKey),
                    o++;
                  break;
                case "mouseup":
                  (e[o++] = i.timeStamp),
                    (e[o++] = 6),
                    (e[o++] = i.clientX),
                    (e[o++] = i.clientY),
                    (e[o++] = i.ctrlKey),
                    (e[o++] = i.shiftKey),
                    (e[o++] = i.altKey),
                    o++;
                  break;
                case "dblclick":
                  (e[o++] = i.timeStamp),
                    (e[o++] = 7),
                    (e[o++] = i.clientX),
                    (e[o++] = i.clientY),
                    (e[o++] = i.ctrlKey),
                    (e[o++] = i.shiftKey),
                    (e[o++] = i.altKey),
                    o++;
              }
            }
            return (this.actions = []), e.slice(0, o);
          },
          timeElapsed: function () {
            return window.performance.now() - this.startedAt;
          },
        };
        const pt = ht;
        var gt = function () {
          lt.apply(this, arguments),
            (this._sceneGraphVisitor = new ut()),
            this._sceneGraphVisitor.setApiCore(this);
        };
        gt.prototype = (0, W.Z)(lt.prototype, {
          setAnnotationsTexture: function (t, e) {
            this._getFeatureModel("hotspot").set("textureOptions", t),
              y.Z.redrawShadow(),
              e(null);
          },
          gotoAnnotation: function (t, e, o) {
            var n = this._getFeatureModel("hotspot").get("hotspots"),
              i = n.at(t);
            if (!i) return n.trigger("select", i), void o(null, t);
            i.set("cameraPreventAnimation", e.preventCameraAnimation),
              i.set("cameraPreventMove", e.preventCameraMove),
              n.trigger("select", i),
              i.set("cameraPreventAnimation", !1),
              i.set("cameraPreventMove", !1),
              o(null, t);
          },
          _convertVideoDataUriToImage: function (t, e, o, n) {
            var i = this._getFeatureModel("material").getImageCollection();
            w.Z.instance
              .getOrCreateImage(t, o || {})
              .promise.then(function (o) {
                var a = i.addNewImage({
                  uid: e,
                  url: t,
                  width: o.getWidth(),
                  height: o.getHeight(),
                  name: t.slice(0, 100),
                });
                n(null, a.getUID());
              })
              .catch(function () {
                n("failed to add texture");
              });
          },
          addVideoTexture: function (t, e, o) {
            this._convertVideoDataUriToImage(t, void 0, e, o);
          },
          setBackground: function (t, e) {
            var o = this._getFeatureModel("background");
            t.uid
              ? (o.set("enable", "fixed"), o.set("uid", t.uid))
              : t.color
              ? (o.set("enable", "color"), o.set("color", t.color))
              : t.enable
              ? o.set("enable", t.enable)
              : t.transparent && o.set("enable", "none"),
              e(null);
          },
          _getUserCollectionList: function (t, e) {
            var o = new XMLHttpRequest();
            o.open("GET", "https://api.sketchfab.com/v3/me/" + e, !0),
              (o.responseType = "json"),
              (o.onload = function () {
                if (4 === o.readyState && 200 === o.status) {
                  var e = o.response,
                    n = [];
                  for (var i in e.results) {
                    var a = e.results[i];
                    a && a.uid && n.push({ name: a.name, uid: a.uid });
                  }
                  t(n);
                }
              }),
              (o.onerror = function () {
                t(null);
              }),
              o.send(null);
          },
          getBackgroundList: function (t) {
            this._getUserCollectionList(t, "backgrounds");
          },
          setEnvironment: function (t, e) {
            var o = this._getFeatureModel("environment");
            t &&
              (void 0 !== t.enabled && o.set("enable", t.enabled),
              void 0 !== t.exposure && o.set("exposure", t.exposure),
              void 0 !== t.lightIntensity &&
                o.set("lightIntensity", t.lightIntensity),
              void 0 !== t.rotation && o.set("rotation", t.rotation),
              void 0 !== t.shadowEnabled &&
                o.set("shadowEnable", t.shadowEnabled),
              void 0 !== t.blur && o.set("blur", t.blur),
              void 0 !== t.uid && o.set("uid", t.uid)),
              y.Z.redrawShadow(),
              e(null);
          },
          getEnvironmentList: function (t) {
            this._getUserCollectionList(t, "environments");
          },
          setCycleMode: function (t, e) {
            var o,
              n = this._getFeatureModel("animation");
            switch (t) {
              case "loopOne":
                o = "one";
                break;
              case "loopAll":
                o = "all";
                break;
              case "one":
                o = "oneAndStop";
                break;
              case "all":
                o = "";
                break;
              default:
                o = t;
            }
            n.set("cycleMode", o), y.Z.redrawShadow(), e(null);
          },
          _emitEvents: function () {
            var t = {
                viewerready: "viewerready",
                started: "viewerstart",
                stopped: "viewerstop",
                animationChange: "animationChange",
                animationEnded: "animationEnded",
                animationPlay: "animationPlay",
                animationStop: "animationStop",
                annotationFocus: "annotationFocus",
                annotationBlur: "annotationBlur",
                annotationMouseEnter: "annotationMouseEnter",
                annotationMouseLeave: "annotationMouseLeave",
                annotationSelect: "annotationSelect",
                nodeMouseEnter: "nodeMouseEnter",
                nodeMouseLeave: "nodeMouseLeave",
                click: "click",
                cameraStart: "camerastart",
                cameraStop: "camerastop",
              },
              e = function (e, o) {
                var n = t[e];
                n && this._replayEmitter.emit(n, o);
              }.bind(this);
            this._partial.on("all", e),
              this._partial.scene.on("all", e),
              (this._emitEvents = function () {});
          },
          _userProvidedEventDispatch: function (t, e, o) {
            if (
              (this.actionsRecorder && this.actionsRecorder.addInputEvent(t, o),
              !this._getViewer() || !this._getViewer().getFeaturesManager())
            )
              return !0;
            var n = !this._getViewer()
              .getFeaturesManager()
              .getCanvas()
              .dispatchEvent(e);
            return y.Z.redrawShadow(), n;
          },
          _userProvidedMouseEventDispatch: function (t, e) {
            var o = new MouseEvent(t, {
              view: window,
              bubbles: !0,
              cancelable: !0,
              clientX: e.clientX,
              clientY: e.clientY,
              ctrlKey: e.ctrlKey,
              shiftKey: e.shiftKey,
              altKey: e.altKey,
            });
            return this._userProvidedEventDispatch(t, o, e);
          },
          mouseMove: function (t, e) {
            e(this._userProvidedMouseEventDispatch("mousemove", t));
          },
          mouseDown: function (t, e) {
            e(this._userProvidedMouseEventDispatch("mousedown", t));
          },
          mouseUp: function (t, e) {
            e(this._userProvidedMouseEventDispatch("mouseup", t));
          },
          mouseClick: function (t, e) {
            e(this._userProvidedMouseEventDispatch("mouseup", t));
          },
          mouseDblClick: function (t, e) {
            e(this._userProvidedMouseEventDispatch("dblclick", t));
          },
          mouseWheel: function (t, e) {
            var o = new WheelEvent("wheel", {
              view: window,
              bubbles: !0,
              cancelable: !0,
              deltaX: t.deltaX,
              deltaY: t.deltaY,
            });
            e(this._userProvidedEventDispatch("wheel", o, t));
          },
          _getCameraInfo: function () {
            var t = { target: [], position: [] };
            return (
              this.manipulator.getTarget(t.target),
              this.manipulator.getEyePosition(t.position),
              t
            );
          },
          _cameraRecord: function () {
            if (this.actionsRecorder) {
              var t = this._getCameraInfo();
              this.actionsRecorder.addCamera(t),
                requestAnimationFrame(this._cameraRecordBinding);
            }
          },
          startRecord: function (t) {
            (this.actionsRecorder = new pt()),
              (this.manipulator = this._getViewerOSG().getManipulator());
            var e = this._getCameraInfo();
            this.actionsRecorder.start(),
              (e.timeStamp = 0),
              this.actionsRecorder.addCamera(e),
              (this._cameraRecordBinding = this._cameraRecord.bind(this)),
              requestAnimationFrame(this._cameraRecordBinding),
              t("recording started");
          },
          endRecord: function (t) {
            var e = this._getCameraInfo();
            this.actionsRecorder.addCamera(e),
              t(this.actionsRecorder.stop()),
              (this.actionsRecorder = void 0);
          },
        });
        const ft = gt;
        var mt = function () {
          ft.apply(this, arguments);
        };
        mt.prototype = (0, W.Z)(ft.prototype, {
          hideAnnotationTooltip: function (t) {
            this._getFeatureModel("hotspot")
              .get("proxyModel")
              .set("annotationsVisible", !1),
              t(null);
          },
          showAnnotationTooltip: function (t) {
            this._getFeatureModel("hotspot")
              .get("proxyModel")
              .set("annotationsVisible", !0),
              t(null);
          },
          setCameraConstraints: function (t, e) {
            var o = this._getFeatureModel("camera"),
              n = o.setJSON(t, { validate: !0 });
            o.trigger("change:enableCameraConstraints"),
              o.set("viewer-api-hotspots", !0),
              e(n);
          },
          setEnableCameraConstraints: function (t, e) {
            this._getFeatureModel("camera").set("enableCameraConstraints", t),
              e(null);
          },
          setAnnotationCameraTransition: function (t, e, o) {
            this._getFeatureModel("hotspot").preventHotspotCameraAction(t, e),
              o(null);
          },
          getAnimations: function (t) {
            var e = this._getFeatureModel("animation").get("animations");
            if (!e.length) return t(null, []);
            var o = new Array(e.length);
            return (
              e.forEach(function (t) {
                var e = [];
                e.push(t.get("uid")),
                  e.push(t.get("name")),
                  e.push(t.get("duration")),
                  e.push(t.get("order")),
                  (o[t.get("order")] = e);
              }),
              t(null, o)
            );
          },
          _initializeAnnotationMarkdown: function (t, e, o, n, i, a, r) {
            Y.Z.getMarkdownPreview(a).then(
              function (s) {
                e.set({
                  name: i,
                  content: { raw: a, rendered: s.result },
                  eye: o,
                  target: n,
                }),
                  y.Z.redrawShadow(),
                  r(null, t.get("hotspots").length - 1),
                  y.Z.draw();
              },
              function () {
                e.set({ name: i, eye: o, target: n }),
                  y.Z.redrawShadow(),
                  r(null, t.get("hotspots").length - 1),
                  y.Z.draw();
              }.bind(this)
            );
          },
          createAnnotationFromWorldPosition: function (t, e, o, n, i, a) {
            var r = this._getFeatureModel("hotspot"),
              s = r.createHotspotFromWorldPosition(t, !0);
            this._initializeAnnotationMarkdown(r, s, e, o, n, i, a);
          },
          createAnnotationFromScenePosition: function (t, e, o, n, i, a) {
            var r = this._getFeatureModel("hotspot"),
              s = r.createHotspotFromScenePosition(t, !0);
            this._initializeAnnotationMarkdown(r, s, e, o, n, i, a);
          },
          removeAllAnnotations: function (t) {
            for (
              var e = this._getFeatureModel("hotspot").get("hotspots");
              e.length > 0;

            )
              e.remove(e.at(0));
            y.Z.redrawShadow(), t(null);
          },
          recenterCamera: function (t) {
            this._getViewerOSG().getManipulator().computeHomePosition(),
              t(null);
          },
          setUserInteraction: function (t, e) {
            this._getViewer().getInputManager().setEnable(B.Z.SCENE, t),
              e(null);
          },
        });
        const vt = mt;
        var bt = function () {
          vt.apply(this, arguments);
        };
        bt.prototype = (0, W.Z)(vt.prototype, {
          setUVOffset: function (t, e, o, n, i) {
            this._getFeatureModel("material").setUVOffset(
              t.stateSetID,
              e,
              o,
              n
            ),
              i(null);
          },
          setUVRotation: function (t, e, o, n) {
            this._getFeatureModel("material").setUVRotation(t.stateSetID, e, o),
              n(null);
          },
          setUVScale: function (t, e, o, n, i) {
            this._getFeatureModel("material").setUVScale(t.stateSetID, e, o, n),
              i(null);
          },
          refreshDraw: function () {
            y.Z.redrawShadow(), y.Z.requestDrawHiddenDefered();
          },
          refreshCanvas: function () {
            var t = this._getViewer().getCanvas(),
              e = t.width;
            (t.width = e + 1),
              new (h())(function (t) {
                t();
              }).finally(function () {
                t.width = e;
              });
          },
          setHighlightOptions: function (t) {
            var e = this._getFeatureModel("outline");
            e &&
              (void 0 !== t.outlineWidth &&
                e.set("outlineWidth", t.outlineWidth),
              void 0 !== t.outlineColor &&
                e.set("colorSelection", t.outlineColor),
              void 0 !== t.highlightColor &&
                e.set("colorHover", t.highlightColor),
              void 0 !== t.outlineDuration &&
                e.set("durationOutline", t.outlineDuration),
              void 0 !== t.highlightDuration &&
                e.set("durationHighlight", t.highlightDuration));
          },
          highlightMaterial: function (t) {
            var e = this._getFeatureModel("outline");
            if (null == t)
              return e.trigger("hideOutline"), void e.trigger("hideHighlight");
            var o = this._getFeatureModel("material"),
              n = t.stateSetID,
              i = o.getMaterialByStateSetID(n);
            e.trigger("displayOutlineNoFocus", i.get("stateSet"));
          },
          setEnableCameraConstraints: function (t, e) {
            var o = this._getFeatureModel("camera");
            o.set("enableCameraConstraints", t),
              o.set("useCameraConstraints", t),
              e(null);
          },
        });
        const _t = bt;
        var wt = g.Z.osg,
          yt = function () {
            ut.apply(this, arguments);
          };
        wt.createPrototypeObject(
          yt,
          wt.objectInherit(ut.prototype, {
            setApiCore: function (t) {
              this._apicore = t;
            },
            createNodeEntry: function (t) {
              this._dirty = !1;
              var e = t._uniqueID;
              this._nodeList[e] || (this._nodeList[e] = t);
              var o = this._apicore._getFeatureModel("material"),
                n = o ? o.findFirstMaterial(this.nodePath) : "",
                i = {
                  name: t.getName(),
                  instanceID: e,
                  nodeMask: t.getNodeMask(),
                  materialID: n ? n.id : null,
                };
              return this._nodeMap[e] || (this._nodeMap[e] = i), i;
            },
          })
        );
        const Mt = yt;
        var kt = o("haCR"),
          Ct = o.n(kt),
          It = function () {
            _t.apply(this, arguments),
              (this._sceneGraphVisitor = new Mt()),
              this._sceneGraphVisitor.setApiCore(this);
          };
        It.prototype = (0, W.Z)(_t.prototype, {
          setSpeed: function (t, e) {
            var o = this._getFeatureModel("animation").setJSON(
              { speed: t },
              { validate: !0, warnOnError: !0 }
            );
            e(o && o.length ? o : null, t), e(null);
          },
          setCameraLookAtEndAnimationCallback: function () {
            var t = this._getFeatureModel("camera"),
              e = arguments[arguments.length - 1];
            t.set(
              "userEndAnimationCallback",
              function () {
                e(null, !0);
              }.bind(this)
            );
          },
          _emitEvents: function () {
            var t = {
                viewerready: "viewerready",
                started: "viewerstart",
                stopped: "viewerstop",
                backgroundLoaded: "backgroundLoaded",
                "primary-progress": "modelLoadProgress",
                "secondary-progress": "textureLoadProgress",
                animationChange: "animationChange",
                animationEnded: "animationEnded",
                animationBegan: "animationBegan",
                animationPlay: "animationPlay",
                animationStop: "animationStop",
                annotationFocus: "annotationFocus",
                annotationBlur: "annotationBlur",
                annotationMouseEnter: "annotationMouseEnter",
                annotationMouseLeave: "annotationMouseLeave",
                annotationSelect: "annotationSelect",
                nodeMouseEnter: "nodeMouseEnter",
                nodeMouseLeave: "nodeMouseLeave",
                click: "click",
                cameraStart: "camerastart",
                cameraStop: "camerastop",
              },
              e = function (e, o) {
                var n = t[e];
                n && this._replayEmitter.emit(n, o);
              }.bind(this);
            this._partial.on("all", e),
              this._partial.scene.on("all", e),
              (this._emitEvents = function () {});
          },
          focusOnVisibleGeometries: function (t) {
            var e = this._getViewerOSG()
              .getManipulator()
              .getCurrentManipulator();
            e.setComputeBoundNodeMaskOverride(0),
              e.computeHomePosition(2),
              t(null),
              y.Z.redrawShadow();
          },
          startAR: function () {
            var t = new Event("fake", { bubbles: !0, cancelable: !1 });
            this._partial.subviews.generalControls.onArClick(t);
          },
          setLightFeatureEnabled: function (t, e) {
            this._getFeatureModel("lighting").set("enable", t),
              y.Z.redrawShadow(),
              e(null);
          },
          isLightFeatureEnabled: function (t) {
            t(null, this._getFeatureModel("lighting").get("enable"));
          },
          hide: function (t, e) {
            var o = this._getNodeFromUserNodeID(t);
            o
              ? (o.setNodeMask(0), o.dirtyBound(), e(null))
              : e("show: node id " + t + " not found"),
              y.Z.redrawShadow();
          },
          show: function (t, e) {
            var o = this._getNodeFromUserNodeID(t);
            o
              ? (o.setNodeMask(-1), o.dirtyBound(), e(null))
              : e("show: node id " + t + " not found"),
              y.Z.redrawShadow();
          },
          setEnableCameraConstraints: function (t, e, o) {
            var n = this._getFeatureModel("camera");
            n.set("enableCameraConstraints", t),
              n.set("useCameraConstraints", t),
              void 0 !== o
                ? void 0 !== e.preventFocus &&
                  n.set("preventCameraConstraintsFocus", e.preventFocus)
                : (o = e),
              o(null);
          },
          _setHotspot: function (t, e, o, n, i, a, r, s) {
            e.set(
              {
                name: i,
                content: { raw: a, rendered: r },
                eye: o,
                target: n,
                sticky: null,
              },
              { silent: !0 }
            ),
              s(null, t.get("hotspots").length - 1),
              e.set("building", void 0),
              y.Z.draw();
          },
          _initializeAnnotationMarkdown: function (t, e, o, n, i, a, r) {
            var s = a && a.length;
            if (s) {
              for (
                var l = [
                    [/!\[([^\[]+)\]\((?:javascript:)?([^\)]+)\)/g],
                    [/\[([^\[]+)\]\((?:javascript:)?([^\)]+)\)/g],
                    [/\n([^\n]+)\n/g],
                    [/\n(#+)(.*)/g],
                    [/(\*\*|__)(.*?)\1/g],
                    [/(\*|_)(.*?)\1/g],
                    [/\~\~(.*?)\~\~/g],
                    [/\:\"(.*?)\"\:/g],
                    [/\n\s*```\n([^]*?)\n\s*```\s*\n/g],
                    [/`(.*?)`/g],
                    [/\n(\*|\-|\+)(.*)/g],
                    [/\n[0-9]+\.(.*)/g],
                    [/\n(&gt;|\>)(.*)/g],
                    [/\n-{5,}/g],
                    [
                      /(\|[^\n]+\|\r?\n)((?:\|:?[-]+:?)+\|)(\n(?:\|[^\n]+\|\r?\n?)*)?/g,
                    ],
                    [/\s?<\/ul>\s?<ul>/g],
                    [/\s?<\/ol>\s?<ol>/g],
                    [/<\/blockquote>\n<blockquote>/g],
                    [/https?:\/\/[^"']*/g],
                  ],
                  c = 0;
                c < l.length && null === a.match(l[c++]);

              );
              s = !1;
            }
            if (s)
              Y.Z.getMarkdownPreview(a).then(
                function (s) {
                  this._setHotspot(t, e, o, n, i, a, s.result, r);
                }.bind(this),
                function () {
                  this._setHotspot(t, e, o, n, i, void 0, void 0, r),
                    e.set({ name: i, eye: o, target: n });
                }.bind(this)
              );
            else {
              var d = Ct().sanitize(a);
              this._setHotspot(t, e, o, n, i, d, d, r);
            }
          },
          createAnnotationFromWorldPosition: function (t, e, o, n, i, a) {
            var r = this._getFeatureModel("hotspot"),
              s = r.createHotspotFromWorldPosition(t, !0, !0);
            this._initializeAnnotationMarkdown(r, s, e, o, n, i, a);
          },
          createAnnotationFromScenePosition: function (t, e, o, n, i, a) {
            var r = this._getFeatureModel("hotspot"),
              s = r.createHotspotFromScenePosition(t, !0, !0);
            this._initializeAnnotationMarkdown(r, s, e, o, n, i, a);
          },
          _getFeatureModel: function (t) {
            if (this._partial.scene) {
              var e = this._partial.scene.getFeatures()[t];
              if (e) return e.getModel();
            }
          },
          hideAnnotationTooltip: function (t, e) {
            var o = this._getFeatureModel("hotspot").get("hotspots");
            if (o) {
              var n = 1;
              return (
                o.each(function (e) {
                  n === t && e.set("hideAnnotationTooltip", !0), n++;
                }),
                void e(null)
              );
            }
            e("no annotations at all");
          },
          showAnnotationTooltip: function (t, e) {
            var o = this._getFeatureModel("hotspot");
            o.get("proxyModel").set("hideAnnotationTooltip", void 0);
            var n = o.get("hotspots");
            if (n) {
              var i = 1;
              return (
                n.each(function (e) {
                  i === t && e.set("hideAnnotationTooltip", void 0), i++;
                }),
                void e(null)
              );
            }
            e("no annotations at all");
          },
          hideAnnotationTooltips: function (t, e) {
            var o = this._getFeatureModel("hotspot").get("hotspots");
            if (o)
              return (
                o.each(function (t) {
                  t.set("hideAnnotationTooltip", !0);
                }),
                void e(null)
              );
            e("no annotations at all");
          },
          showAnnotationTooltips: function (t) {
            var e = this._getFeatureModel("hotspot");
            e.get("proxyModel").set("hideAnnotationTooltip", void 0);
            var o = e.get("hotspots");
            if (o)
              return (
                o.each(function (t) {
                  t.set("hideAnnotationTooltip", void 0);
                }),
                void t(null)
              );
            t("no annotations at all");
          },
        });
        const St = It;
        var Et = function () {
          St.apply(this, arguments);
        };
        Et.prototype = (0, W.Z)(St.prototype, {
          hideAnnotationTooltip: function (t, e) {
            var o = this._getFeatureModel("hotspot").get("hotspots");
            if (o) {
              var n = 0;
              return (
                o.each(function (e) {
                  n === t && e.set("hideAnnotationTooltip", !0), n++;
                }),
                void e(null)
              );
            }
            e("no annotations at all");
          },
          showAnnotationTooltip: function (t, e) {
            var o = this._getFeatureModel("hotspot");
            o.get("proxyModel").set("hideAnnotationTooltip", void 0);
            var n = o.get("hotspots");
            if (n) {
              var i = 0;
              return (
                n.each(function (e) {
                  i === t && e.set("hideAnnotationTooltip", void 0), i++;
                }),
                void e(null)
              );
            }
            e("no annotations at all");
          },
          hideAnnotationTooltips: function (t) {
            var e = this._getFeatureModel("hotspot").get("hotspots");
            if (e)
              return (
                e.each(function (t) {
                  t.set("hideAnnotationTooltip", !0);
                }),
                void t(null)
              );
            t("no annotations at all");
          },
          removeTexture: function (t, e) {
            var o = !1,
              n = w.Z.instance.getTextureCollection(),
              i = n.get(t);
            i &&
              (i.isTextureNull && !i.isTextureNull() && i.releaseGLObjects(),
              n.remove(t),
              i.destroy(),
              (o = !0));
            var a = this._getFeatureModel("material").getImageCollection();
            if (
              (a &&
                a.forEach(function (e) {
                  void 0 !== e &&
                    (e.getUID() === t && (a.remove(e), (o = !0)),
                    0 === e.getImages.length && a.remove(e),
                    e.destroy());
                }),
              !o)
            )
              return e("failed to find  texture " + t);
            e();
          },
        });
        const Dt = Et;
        var Ft = function () {
          Dt.apply(this, arguments);
        };
        Ft.prototype = (0, W.Z)(Dt.prototype, {
          createMaterial: function (t, e) {
            e(
              null,
              this._getFeatureModel("material").makeMaterial(t).getJSON()
            );
          },
          assignMaterial: function (t, e, o) {
            var n = this._getFeatureModel("material"),
              i = this._getNodeFromUserNodeID(t.instanceID);
            i
              ? (n.assignMaterial(i, e), o(null))
              : o(
                  "Couldn't find node, make sure node.instanceID is set with a proper value"
                );
          },
          createDecal: function (t, e) {
            try {
              var o,
                n = this._getFeatureView("Decals").createDecalFromData(t);
              e(
                void 0 !== n
                  ? null
                  : "Couldn't create the decal (no surface hit for this position and normal)",
                n
              );
            } catch (o) {
              e("Error when creating decal:\n" + o);
            }
          },
          destroyDecal: function (t, e, o) {
            2 === arguments.length && (o = e);
            try {
              var n = this._getFeatureView("Decals");
              n.destroyDecal(t, e), o(null);
            } catch (e) {
              o("Error when deleting decal: " + t + ":\n" + e);
            }
          },
          findDecalFromWorldPosition: function (t, e) {
            try {
              e(
                null,
                this._getFeatureView("Decals").findDecalFromWorldPosition(t)
              );
            } catch (t) {
              e("Error when trying to find decal:\n" + t);
            }
          },
          pickFromTextureCoordinates: function (t, e, o) {
            try {
              var n = this._getNodeFromUserNodeID(t.instanceID);
              o(
                null,
                this._getFeatureView("Decals").getWorldHitFromTexCoord(n, e)
              );
            } catch (t) {
              console.log(t),
                o("Error when calling pickFromTextureCoordinates:\n" + t);
            }
          },
          _getFeatureView: function (t) {
            if (this._partial.scene) {
              var e = this._partial.scene.getFeatures()[t];
              if (e) return e._views[0];
            }
          },
          _initializeAnnotationMarkdown: function (t, e, o, n, i, a, r) {
            var s = !1;
            if (a && a.length)
              for (
                var l = [
                    /!\[([^\[]+)\]\((?:javascript:)?([^\)]+)\)/g,
                    /\[([^\[]+)\]\((?:javascript:)?([^\)]+)\)/g,
                    /\n([^\n]+)\n/g,
                    /\n(#+)(.*)/g,
                    /\*\*(.*?)\*\*/g,
                    /(\*|_)(.*?)\1/g,
                    /\~\~(.*?)\~\~/g,
                    /\:\"(.*?)\"\:/g,
                    /\n\s*```\n([^]*?)\n\s*```\s*\n/g,
                    /`(.*?)`/g,
                    /\n(\*|\-|\+)(.*)/g,
                    /\n[0-9]+\.(.*)/g,
                    /\n(&gt;|\>)(.*)/g,
                    /\n-{5,}/g,
                    /(\|[^\n]+\|\r?\n)((?:\|:?[-]+:?)+\|)(\n(?:\|[^\n]+\|\r?\n?)*)?/g,
                    /\s?<\/ul>\s?<ul>/g,
                    /\s?<\/ol>\s?<ol>/g,
                    /<\/blockquote>\n<blockquote>/g,
                    /https?:\/\/[^"']*/g,
                  ],
                  c = 0;
                c < l.length;

              )
                if (null !== a.match(l[c++])) {
                  s = !0;
                  break;
                }
            if (s)
              Y.Z.getMarkdownPreview(a).then(
                function (s) {
                  this._setHotspot(t, e, o, n, i, a, s.result, r);
                }.bind(this),
                function () {
                  this._setHotspot(t, e, o, n, i, void 0, void 0, r),
                    e.set({ name: i, eye: o, target: n });
                }.bind(this)
              );
            else {
              var d = Ct().sanitize(a);
              this._setHotspot(t, e, o, n, i, d, d, r);
            }
          },
        });
        const At = Ft;
        var xt = function () {
          At.apply(this, arguments);
        };
        xt.prototype = (0, W.Z)(At.prototype, {
          setCameraRoll: function (t, e) {
            this._getViewerOSG().getManipulator().setCameraRoll(t), e(null);
          },
        });
        const Tt = xt;
        var Ot = function () {
          Tt.apply(this, arguments);
        };
        Ot.prototype = (0, W.Z)(Tt.prototype, {
          setLight: function (t, e, o) {
            var n = this._getFeatureModel("lighting").get("lights")[t];
            e &&
              (void 0 !== e.type && n.set("type", e.type),
              void 0 !== e.attachedToCamera &&
                n.set("attachedToCamera", e.attachedToCamera),
              void 0 !== e.matrix && n.set("matrix", e.matrix),
              void 0 !== e.enabled && n.set("enable", e.enabled),
              void 0 !== e.type && n.set("type", e.type),
              void 0 !== e.shadowEnabled &&
                n.set("castShadows", e.shadowEnabled),
              void 0 !== e.color && n.set("color", e.color),
              void 0 !== e.intensity && n.set("intensity", e.intensity),
              void 0 !== e.angle && n.set("angle", e.angle),
              void 0 !== e.falloff && n.set("falloff", e.falloff)),
              y.Z.redrawShadow(),
              o(null);
          },
          getLight: function (t, e) {
            var o = this._getFeatureModel("lighting").get("lights");
            (!o || t >= o.length) &&
              e("light with id " + t.toString() + " not found");
            var n = o[t];
            e(null, {
              type: n.get("type"),
              attached: n.get("attachedToCamera"),
              matrix: n.get("matrix"),
              enabled: n.get("enable"),
              shadowEnabled: n.get("castShadows"),
              color: n.get("color"),
              intensity: n.get("intensity"),
              angle: n.get("angle"),
              falloff: n.get("falloff"),
            });
          },
        });
        const Zt = Ot;
        var Nt = o("7txH"),
          Pt = o("eKF4"),
          Rt = {
            APICore1_0: P,
            APICore1_2: $,
            APICore1_3: et,
            APICore1_4: lt,
            APICore1_5: ft,
            APICore1_6: vt,
            APICore1_7: _t,
            APICore1_8: St,
            APICore1_9: Dt,
            APICore1_10: At,
            APICore1_11: Tt,
            APICore1_12: Zt,
          },
          Lt = function (t) {
            (this._definitions = {}),
              (this._instance = void 0),
              (this._instanceId = t),
              (this._name = void 0),
              (this._parentDomain = this.getMessageTargetDomain(
                document.referrer
              )),
              (this._defer = new l.Z());
          };
        (Lt.create = function (t, e, o, n) {
          var i;
          if (e) {
            var a = e;
            i = new Lt(t);
            var r = d()[e];
            if (!r) {
              var s = Object.keys(d()),
                l = s[s.length - 1];
              (r = d()[l]),
                console.warn(
                  "you requested api version " +
                    e +
                    " but this version is not available. Returned api version " +
                    l +
                    " instead"
                ),
                (a = l);
            }
            var c = (function (t, e) {
              return new Rt[t](e);
            })("APICore" + r.ApiCoreVersion, o);
            i.register(a, r, c);
          } else
            (i = new p()).initialize(o, n),
              console.warn(
                "you are using a deprecated api, please update to the new one, read mode xxxx"
              );
          return i;
        }),
          (Lt.prototype = {
            ready: function () {
              if (window.parent) {
                var t = (0, s.Z)().apiHookEnv;
                if (void 0 !== t)
                  if (Pt.Z.me().get("isStaff")) {
                    var e = new XMLHttpRequest(),
                      o = function (t) {
                        if (e.readyState === XMLHttpRequest.DONE) {
                          var o = JSON.parse(t.target.response);
                          if (o.domain) {
                            var n = o.domain;
                            if (n === window.location.hostname);
                            else {
                              var i = {
                                type: "api.ready",
                                instanceId: this._instanceId,
                                results: [this._instanceId],
                                options: { domain: n },
                              };
                              window.parent.postMessage(i, this._parentDomain);
                            }
                          }
                        }
                      }.bind(this);
                    e.addEventListener("load", o),
                      e.open(
                        "GET",
                        "/i/users/viewer-api/authorized-domains?domain=" + t
                      );
                    var n = document.cookie.match(
                      new RegExp("sb_csrftoken=([^;]+)")
                    );
                    n || console.error("CRSF cookie missing");
                    var i = n[1];
                    e.setRequestHeader("X-CSRFToken", i), e.send();
                  }
                var a = {
                  type: "api.ready",
                  instanceId: this._instanceId,
                  results: [this._instanceId],
                };
                (0, Nt.Z)() || (a.error = "No Hardware Support for Webgl"),
                  window.parent.postMessage(a, this._parentDomain);
              }
            },
            clientReady: function () {
              return this._defer.promise;
            },
            register: function (t, e, o) {
              (this._name = t),
                (this._members = Object.keys(e)),
                (this._membersMapping = e),
                (this._instance = o),
                this.init();
            },
            getViewerAPI: function () {
              return this._instance;
            },
            getMessageTargetDomain: function (t) {
              if (!t || !t.length) return "*";
              var e = t.split("//");
              return e[0] + "//" + e[1].split("/")[0];
            },
            init: function () {
              this._defer.resolve();
              var t = ["api.initialize", "api.request"],
                e = Object.getPrototypeOf(this._instance);
              window.addEventListener(
                "message",
                function (o) {
                  if (
                    (o.origin === this._parentDomain ||
                      "*" === this._parentDomain) &&
                    o.data &&
                    o.data.type
                  ) {
                    var n = o.data.type;
                    if (-1 !== t.indexOf(n)) {
                      var i = "api.initialize" !== n;
                      if (
                        !i ||
                        (o.data.instanceId &&
                          o.data.instanceId === this._instanceId)
                      )
                        try {
                          if (i && this._instanceId !== o.data.instanceId)
                            throw "Invalid request : instance does not exists";
                          if ("api.request" === o.data.type) {
                            var a = this._membersMapping[o.data.member];
                            if (("-" === a && (a = o.data.member), !a || !e[a]))
                              throw (
                                "Invalid request : member function does not exists: " +
                                a
                              );
                            if ("function" != typeof e[a])
                              throw (
                                "Invalid request : member function does not exists: " +
                                a
                              );
                            for (
                              var r = e[a],
                                s = o.data.arguments.slice(),
                                l = s.length - 1;
                              l >= 0 && void 0 === s[l];
                              l--
                            )
                              s.splice(l, 1);
                            return (
                              r.length &&
                                "function" == typeof s[r.length - 1] &&
                                (s.length = r.length - 1),
                              s.push(
                                function () {
                                  o.source.postMessage(
                                    {
                                      type: "api.request.result",
                                      instanceId: this._instanceId,
                                      requestId: o.data.requestId,
                                      results:
                                        Array.prototype.slice.call(arguments),
                                    },
                                    this._parentDomain
                                  );
                                }.bind(this)
                              ),
                              void r.apply(this._instance, s)
                            );
                          }
                          if ("api.initialize" === o.data.type) {
                            if (this._name !== o.data.name)
                              throw "No API named '" + o.data.name + "'";
                            var c = this._members,
                              d = this._instance;
                            if (void 0 !== d.addGlobalListener) {
                              var u = function () {
                                var t = {
                                  type: "api.event",
                                  instanceId: this._instanceId,
                                  results:
                                    Array.prototype.slice.call(arguments),
                                };
                                o.source.postMessage(t, this._parentDomain);
                              }.bind(this);
                              d.addGlobalListener(u);
                            }
                            return void o.source.postMessage(
                              {
                                type: "api.initialize.result",
                                instanceId: this._instanceId,
                                requestId: o.data.requestId,
                                results: [null, this._instanceId, c],
                              },
                              this._parentDomain
                            );
                          }
                        } catch (t) {
                          console.error(t),
                            o.source.postMessage(
                              {
                                type: n + ".result",
                                instanceId: this._instanceId,
                                requestId: o.data.requestId,
                                results: [t.stack ? t.stack : t],
                              },
                              this._parentDomain
                            );
                        }
                    }
                  }
                }.bind(this)
              );
            },
          });
        const Ut = Lt;
        var Vt = o("EbOf"),
          jt = o("3pbp"),
          Ht = o("VlB/"),
          Bt = o("nv4P");
        function Gt() {
          var t = !0,
            e = !1;
          try {
            e = window.self !== window.top;
          } catch (t) {
            e = !0;
          }
          try {
            document.cookie;
          } catch (e) {
            t = !1;
          }
          return e && !t;
        }
        var qt = o("U6YP"),
          Wt = o("MskI"),
          zt = o("1HPd"),
          Kt = o("Dbg1");
        const Jt = zt.Z.extend({
          events: {
            "click .share-link button": "copyToClipboard",
            'click [data-action="share-on-facebook"]': "shareOnFacebook",
            'click [data-action="share-on-linkedin"]': "shareOnLinkedin",
            'click [data-action="share-on-pinterest"]': "shareOnPinterest",
            'click [data-action="share-on-reddit"]': "shareOnReddit",
            'click [data-action="share-on-tumblr"]': "shareOnTumblr",
            'click [data-action="share-on-twitter"]': "shareOnTwitter",
          },
          constructor: function () {
            (this.handleKeyboardEvents = this.handleKeyboardEvents.bind(this)),
              zt.Z.prototype.constructor.apply(this, arguments);
          },
          show: function () {
            var t = this;
            this.model || (this.model = this.viewer._currentModel),
              this.model.sharing(),
              this.model.on("change:sharing", this.render.bind(this)),
              zt.Z.prototype.show.apply(this, arguments),
              this.clipboard ||
                o
                  .e(7455)
                  .then(o.t.bind(o, "F1yB", 23))
                  .then(function (e) {
                    (t.clipboard = new e.default(t.$(".share-link button")[0])),
                      t.listenClipboard.call(t),
                      "function" == typeof t.callAfterClipboardLoaded &&
                        t.callAfterClipboardLoaded();
                  });
          },
          delegateEvents: function () {
            zt.Z.prototype.delegateEvents.apply(this, arguments),
              i()(document).on("keyup", this.handleKeyboardEvents);
          },
          undelegateEvents: function () {
            zt.Z.prototype.undelegateEvents.apply(this, arguments),
              i()(document).off("keyup", this.handleKeyboardEvents);
          },
          handleKeyboardEvents: function (t) {
            27 === t.keyCode && this.hide();
          },
          render: function () {
            this.$(".share-link .text").val(this.model.get("sharing").shortUrl),
              this.$(".share-social").attr(
                "href",
                this.model.get("viewerUrl") + "#email"
              ),
              this.$(".share-embed .button").attr(
                "href",
                this.model.get("viewerUrl") + "#embed"
              ),
              this.$(".share-mail").attr(
                "href",
                Kt.Z.getMailTo({
                  modelName: this.model.get("name"),
                  userName: this.model.get("user").displayName,
                  url: this.model.get("viewerUrl"),
                  isCollectionMode: !1,
                })
              );
          },
          listenClipboard: function () {
            this.clipboard.on(
              "success",
              function () {
                var t = this.viewer
                  ? this.viewer
                  : this.options.embedPage.viewer;
                t &&
                  t.subviews.osd.show("Copied to clipboard.", {
                    duration: 5e3,
                    position: "top",
                  });
              }.bind(this)
            ),
              this.clipboard.on(
                "error",
                function () {
                  this.viewer.subviews.osd.show(
                    "Could not copy to clipboard.",
                    { duration: 5e3, position: "top" }
                  );
                }.bind(this)
              );
          },
          copyToClipboard: function () {
            this.clipboard ||
              (this.callAfterClipboardLoaded = this.copyToClipboard);
          },
          getShareModel: function () {
            return o
              .e(2542)
              .then(o.bind(o, "PNd5"))
              .then(function (t) {
                return t.default;
              });
          },
          shareOnFacebook: function (t) {
            var e = this;
            t.preventDefault(),
              this.getShareModel().then(function (t) {
                t.shareOnFacebook(e.model.get("sharing").shortUrl);
              });
          },
          shareOnTwitter: function (t) {
            var e = this;
            t.preventDefault(),
              this.getShareModel().then(function (t) {
                t.shareOnTwitter(e.model.toJSON(), e.model.get("sharing"));
              });
          },
          shareOnPinterest: function (t) {
            var e = this;
            t.preventDefault(),
              this.getShareModel().then(function (t) {
                t.shareOnPinterest(e.model.toJSON(), e.model.get("sharing"));
              });
          },
          shareOnReddit: function (t) {
            var e = this;
            t.preventDefault(),
              this.getShareModel().then(function (t) {
                t.shareOnReddit(e.model.toJSON(), e.model.get("sharing"));
              });
          },
          shareOnTumblr: function (t) {
            var e = this;
            t.preventDefault(),
              this.getShareModel().then(function (t) {
                t.shareOnTumblr(e.model.toJSON(), e.model.get("sharing"));
              });
          },
          shareOnLinkedin: function (t) {
            var e = this;
            t.preventDefault(),
              this.getShareModel().then(function (t) {
                t.shareOnLinkedin(e.model.toJSON(), e.model.get("sharing"));
              });
          },
        });
        var $t = o("fEbO");
        const Yt = Bt.Z.extend({
          mixins: [Ht.Z, jt.Z],
          events: {
            'click [data-action="start"]': "start",
            'click [data-action="allowRestricted"]': "allowRestricted",
          },
          initialize: function () {
            if (Gt()) this.$el.addClass("embed-sandboxed");
            else if (
              (Bt.Z.prototype.initialize.apply(this, arguments),
              !0 !== this.model.get("isDeleted"))
            ) {
              var t = !!(0, s.Z)().autostart;
              (t || (0, s.Z)().apiId) && this.start(t);
              var e = (0, s.Z)().uiInfos;
              if (void 0 === e) {
                var o = (0, s.Z)().descButton;
                e = void 0 === o || o;
              }
              this.initializeSharingOverlay(),
                this.afterRender(),
                Pt.Z.me().canAccessFeature("ff_useonevieweratatime") &&
                  this.attachPostMessageListener();
            }
          },
          attachPostMessageListener: function () {
            var t = this;
            window.addEventListener(
              "message",
              function (e) {
                if (t.viewer)
                  switch (e.data) {
                    case $t.s0:
                      return t.viewer.stop();
                    case $t.d9:
                      return t.viewer.start();
                  }
              },
              !1
            );
          },
          start: (0, Vt.Z)(function (t) {
            this.initializeViewer(t);
          }),
          allowRestricted: function () {
            Pt.Z.me().setAllowsRestricted(!0),
              this.$(".overlay.restricted").addClass("hidden");
          },
          initializeSharingOverlay: function () {
            (this.shareOverlay = new Jt({
              el: this.$(".share.overlay"),
              model: this.model,
              embedPage: this,
            })),
              (this.onShareClick = this.onShareClick.bind(this)),
              this.$(".titlebar .actions .share").on(
                "click",
                this.onShareClick
              );
          },
          onShareClick: function () {
            this.shareOverlay.show();
          },
          onViewerStart: function () {
            this.$(".titlebar .actions .share").off("click", this.onShareClick);
          },
          onViewerStop: function () {},
          initializeViewer: function (t) {
            var e = this.$(".viewer");
            this.$(".play-button").addClass("loading"),
              t && e.addClass("started");
            var o = new Wt.Z({ el: e });
            this.viewer = o;
            var n = (0, s.Z)().apiVersion,
              i = Ut.create((0, s.Z)().apiId, n, o, this.model.get("uid"));
            o.on("start", this.onViewerStart),
              o.on("stop", this.onViewerStop),
              o.setScene({
                uid: this.model.get("uid"),
                features: qt.Z,
                viewerAPI: i.getViewerAPI(),
              }),
              this.$(".play-button").removeClass("loading"),
              i
                ? ((this.api = i),
                  i.ready(),
                  i.clientReady().then(function () {
                    t && o.start(t);
                  }))
                : t && o.start(t);
          },
          toggleUserSummary: function () {
            var t = !(!this.inAvatar && !this.inUserSummary);
            this.userSummary[t ? "show" : "hide"]();
          },
          enterAvatar: function (t) {
            var e = i()(t.currentTarget).data("user");
            (this.inAvatar = !0),
              this.userSummary.setUser(e),
              this.userSummary.anchor(t.currentTarget),
              this.toggleUserSummary();
          },
          leaveAvatar: function () {
            (this.inAvatar = !1), this.toggleUserSummary();
          },
          enterUserSummary: function () {
            (this.inUserSummary = !0), this.toggleUserSummary();
          },
          leaveUserSummary: function () {
            (this.inUserSummary = !1), this.toggleUserSummary();
          },
        });
        var Xt = o("ejdl"),
          Qt = o("iu9k");
        function te(t, e) {
          var o =
            ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
            t["@@iterator"];
          if (!o) {
            if (
              Array.isArray(t) ||
              (o = (function (t, e) {
                if (!t) return;
                if ("string" == typeof t) return ee(t, e);
                var o = Object.prototype.toString.call(t).slice(8, -1);
                "Object" === o && t.constructor && (o = t.constructor.name);
                if ("Map" === o || "Set" === o) return Array.from(t);
                if (
                  "Arguments" === o ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                )
                  return ee(t, e);
              })(t)) ||
              (e && t && "number" == typeof t.length)
            ) {
              o && (t = o);
              var n = 0,
                i = function () {};
              return {
                s: i,
                n: function () {
                  return n >= t.length
                    ? { done: !0 }
                    : { done: !1, value: t[n++] };
                },
                e: function (t) {
                  throw t;
                },
                f: i,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          var a,
            r = !0,
            s = !1;
          return {
            s: function () {
              o = o.call(t);
            },
            n: function () {
              var t = o.next();
              return (r = t.done), t;
            },
            e: function (t) {
              (s = !0), (a = t);
            },
            f: function () {
              try {
                r || null == o.return || o.return();
              } finally {
                if (s) throw a;
              }
            },
          };
        }
        function ee(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var o = 0, n = new Array(e); o < e; o++) n[o] = t[o];
          return n;
        }
        //debugger
        (0, s.Z)().dnt || 
            o.e(733)
            .then(o.bind(o, "GuWZ"));
        var oe = ["models:embed", "models:embed_specific_version"];
        //debugger
        (0, Xt.f)(function () {
          (0, r.Z)();
          var t = (function (t) {
              //debugger
              var e,
                o =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : window.location.pathname + window.location.search,
                n = te(t);
              try {
                for (n.s(); !(e = n.n()).done; ) {
                  var i = e.value,
                    a = (0, Qt.EQ)(i, o);
                  if (a) return a;
                }
              } catch (t) {
                n.e(t);
              } finally {
                n.f();
              }
              return {};
            })(oe),
            e = t.model_id;
          a.Z.get(e).then(function (t) {
            if ("ok" === t.get("displayStatus"))
              return new Yt({ model: t, el: "body" });
          });
        });
      },
      ULsr: (t, e, o) => {
        "use strict";
        o.d(e, { Z: () => d });
        var n = o("sQwH"),
          i = o("3MRe"),
          a = o("3Z9q"),
          r = o("bjID"),
          s = o("+zma"),
          l = o("QbBG"),
          c = ["el", "_isChildOfAComponent"];
        function d(t) {
          return l.Z.extend({
            displayName: "FromReact(".concat(t.displayName || t.name, ")"),
            optionTypes: t.propTypes,
            root: null,
            initialize: function () {
              l.Z.prototype.initialize.apply(this, arguments);
            },
            viewDidMount: function () {
              this.render();
            },
            viewWillReceiveOptions: function (t) {
              this.renderReact(t);
            },
            shouldViewUpdate: function () {
              return !1;
            },
            template: function () {
              return "";
            },
            render: function () {
              this.renderReact(this.options);
            },
            viewWillUnmount: function () {
              this.el && this.root && this.root.unmount();
            },
            renderReact: function (e) {
              if (!this.el)
                throw (
                  ((o = this.displayName),
                  new Error(
                    "\n\nReactDOM.render error: `".concat(
                      o,
                      "` Component doesn't have a valid mount point. Check its selector.\n"
                    )
                  ))
                );
              var o;
              this.root || (this.root = (0, r.createRoot)(this.el)),
                this.root.render(
                  (0, n.Z)(
                    s.n2.Provider,
                    {},
                    void 0,
                    a.createElement(
                      t,
                      (function (t) {
                        return t.el, t._isChildOfAComponent, (0, i.Z)(t, c);
                      })(e)
                    )
                  )
                );
            },
          });
        }
      },
      Dbg1: (t, e, o) => {
        "use strict";
        o.d(e, { Z: () => u });
        var n = o("Hjnd"),
          i = o.n(n),
          a = o("mSEu"),
          r = o("Oyie"),
          s = [
            "<script>",
            "  (function(d, s, id){",
            "     var js, fjs = d.getElementsByTagName(s)[0];",
            "     if (d.getElementById(id)) {return;}",
            "     js = d.createElement(s); js.id = id;",
            '     js.src = "//connect.facebook.net/en_US/sdk.js";',
            "     fjs.parentNode.insertBefore(js, fjs);",
            '   }(document, "script", "facebook-jssdk"));',
            "</script>",
          ].join(""),
          l = null;
        const c = function () {
          return window.FB
            ? r.resolve(window.FB)
            : l ||
                (l = new r(function (t) {
                  var e = i()(s);
                  i()("body").append(e),
                    (window.fbAsyncInit = function () {
                      window.FB.init({
                        appId: a.Z.facebookAppId,
                        status: !0,
                        cookie: !0,
                        xfbml: !0,
                        version: a.Z.facebookApiVersion,
                      }),
                        t(window.FB);
                    });
                }));
        };
        var d = o("KDlt");
        o("DAiq");
        const u = {
          shareOnFacebook: function (t, e) {
            c().then(function (o) {
              o.ui({ method: "share", href: t, quote: e });
            });
          },
          shareOnTwitter: function (t, e) {
            var o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : { via: "sketchfab" },
              n = 800,
              i = 400,
              a = window.screen.width / 2 - n / 2,
              r = window.screen.height / 2 - i / 2,
              s =
                "https://twitter.com/intent/tweet?url=" +
                encodeURIComponent(t) +
                "&text=" +
                encodeURIComponent(e);
            Object.prototype.hasOwnProperty.call(o, "via") &&
              null !== o.via &&
              (s += "&via=" + o.via);
            var l = window.open(
              s,
              "_blank",
              "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" +
                n +
                ", height=" +
                i
            );
            l && l.moveTo(a, r);
          },
          shareOnPinterest: function (t, e, o) {
            var n = window.screen.width / 2 - 390,
              i = window.screen.height / 2 - 200,
              a =
                "http://pinterest.com/pin/create/button/?url=" +
                encodeURIComponent(t) +
                "&description=" +
                encodeURIComponent(e) +
                "&media=" +
                encodeURIComponent(o),
              r = window.open(
                a,
                "_blank",
                "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=780, height=400"
              );
            r && r.moveTo(n, i);
          },
          shareOnReddit: function (t, e) {
            var o =
              "https://www.reddit.com/submit?url=" +
              encodeURIComponent(t) +
              "&title=" +
              encodeURIComponent(e);
            window.open(o, "_blank");
          },
          shareOnTumblr: function (t, e) {
            var o = window.screen.width / 2 - 270,
              n = window.screen.height / 2 - 300,
              i = d.Z.get("front/partials/embed/iframe", {
                model: t,
                parameters: { flags: [] },
              }),
              a =
                "https://www.tumblr.com/widgets/share/tool?posttype=video&content=" +
                encodeURIComponent(i.replace(/(\r\n|\n|\r)/gm, "")) +
                "&canonicalUrl=" +
                encodeURIComponent(e),
              r = window.open(
                a,
                "_blank",
                "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, copyhistory=no, width=540, height=600"
              );
            r && r.moveTo(o, n);
          },
          shareOnLinkedin: function (t) {
            var e = window.screen.width / 2 - 300,
              o = window.screen.height / 2 - 235,
              n = "https://www.linkedin.com/sharing/share-offsite/?url=".concat(
                t
              ),
              i = window.open(
                n,
                "_blank",
                "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=600, height=470"
              );
            i && i.moveTo(e, o);
          },
          getMailTo: function (t) {
            var e = t.modelName,
              o = t.userName,
              n = t.isCollectionMode,
              i = t.url,
              a = e + " by " + o,
              r = n
                ? [
                    "Check out this collection of 3D/VR models on Sketchfab:",
                    "\n",
                    a,
                    "\n",
                    i +
                      "?utm_source=email&utm_medium=email&utm_campaign=collection-shared",
                  ].join("")
                : [
                    "Check out this model in 3D and virtual reality on Sketchfab:",
                    "\n",
                    a,
                    "\n",
                    i +
                      "?utm_source=email&utm_medium=email&utm_campaign=model-shared",
                  ].join("");
            return (
              "mailto:?subject=" +
              encodeURIComponent(a) +
              "&body=" +
              encodeURIComponent(r)
            );
          },
        };
      },
      fEbO: (t, e, o) => {
        "use strict";
        o.d(e, { ZP: () => c, d9: () => s, s0: () => r });
        var n = o("3Z9q"),
          i = o("VDcQ"),
          a = o("+zma"),
          r = "viewer/stop",
          s = "viewer/start";
        function l(t, e) {
          try {
            t && t.contentWindow && t.contentWindow.postMessage(e, "*");
          } catch (t) {
            console.error(t);
          }
        }
        function c() {
          var t = (0, i.v9)(
            a.wl.authUser.canAccessFeature("ff_useonevieweratatime")
          );
          n.useEffect(
            function () {
              if (t) {
                var e = document.querySelector("#api-frame");
                return (
                  l(e, r),
                  function () {
                    l(e, s);
                  }
                );
              }
            },
            [t]
          );
        }
      },
      DAiq: (t, e, o) => {
        o("F67Y"),
          ((window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})[
            "front/partials/embed/iframe.jinja"
          ] = {
            root: function (t, e, o, n, i) {
              var a = null,
                r = null,
                s = "";
              try {
                t.getTemplate(
                  "front/macros/model.jinja",
                  !1,
                  "front/partials/embed/iframe.jinja",
                  !1,
                  function (l, c) {
                    l
                      ? i(l)
                      : c.getExported(function (l, c) {
                          if (l) i(l);
                          else if (c.hasOwnProperty("model_iframe")) {
                            var d = c.model_iframe;
                            e.setVariable("model_iframe", d),
                              (s += '<div class="sketchfab-embed-wrapper">'),
                              (s += n.suppressValue(
                                ((a = 0),
                                (r = 103),
                                n.callWrap(d, "model_iframe", e, [
                                  t
                                    .getFilter("query_string")
                                    .call(
                                      e,
                                      n.memberLookup(
                                        n.contextOrFrameLookup(e, o, "model"),
                                        "embedUrl"
                                      ),
                                      n.memberLookup(
                                        n.contextOrFrameLookup(
                                          e,
                                          o,
                                          "parameters"
                                        ),
                                        "flags"
                                      )
                                    ),
                                  {
                                    width: n.memberLookup(
                                      n.contextOrFrameLookup(
                                        e,
                                        o,
                                        "parameters"
                                      ),
                                      "width"
                                    ),
                                    height: n.memberLookup(
                                      n.contextOrFrameLookup(
                                        e,
                                        o,
                                        "parameters"
                                      ),
                                      "height"
                                    ),
                                  },
                                ])),
                                t.opts.autoescape
                              )),
                              n.memberLookup(
                                n.contextOrFrameLookup(e, o, "parameters"),
                                "byline"
                              ) &&
                                ((s +=
                                  '\n    <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;">\n        <a href="'),
                                (s += n.suppressValue(
                                  n.memberLookup(
                                    n.contextOrFrameLookup(e, o, "model"),
                                    "viewerUrl"
                                  ),
                                  t.opts.autoescape
                                )),
                                (s +=
                                  '" target="_blank" style="font-weight: bold; color: #1CAAD9;">'),
                                (s += n.suppressValue(
                                  n.memberLookup(
                                    n.contextOrFrameLookup(e, o, "model"),
                                    "name"
                                  ),
                                  t.opts.autoescape
                                )),
                                (s += '</a>\n        by <a href="'),
                                (s += n.suppressValue(
                                  n.memberLookup(
                                    n.memberLookup(
                                      n.contextOrFrameLookup(e, o, "model"),
                                      "user"
                                    ),
                                    "profileUrl"
                                  ),
                                  t.opts.autoescape
                                )),
                                (s +=
                                  '" target="_blank" style="font-weight: bold; color: #1CAAD9;">'),
                                (s += n.suppressValue(
                                  n.memberLookup(
                                    n.memberLookup(
                                      n.contextOrFrameLookup(e, o, "model"),
                                      "user"
                                    ),
                                    "displayName"
                                  ),
                                  t.opts.autoescape
                                )),
                                (s +=
                                  '</a>\n        on <a href="https://sketchfab.com" target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a>\n    </p>\n')),
                              i(null, (s += "</div>\n"));
                          } else i(new Error("cannot import 'model_iframe'"));
                        });
                  }
                );
              } catch (t) {
                i(n.handleError(t, a, r));
              }
            },
          });
      },
      oNdp: (t, e, o) => {
        "use strict";
        o.d(e, { Z: () => n });
        const n = {
          "--color-black": "#000000",
          "--color-white": "#ffffff",
          "--color-primary-25": "#f7f9fa",
          "--color-primary-50": "#e8f7fb",
          "--color-primary-100": "#92d9ec",
          "--color-primary-200": "#4cc8f1",
          "--color-primary-300": "#1db9ed",
          "--color-primary-400": "#1caad9",
          "--color-primary-500": "#1c88bb",
          "--color-primary-600": "#007396",
          "--color-primary-700": "#005e74",
          "--color-primary-800": "#023748",
          "--color-primary-900": "#01222d",
          "--color-secondary-25": "#ffe4ee",
          "--color-secondary-300": "#e9256d",
          "--color-secondary-400": "#df1660",
          "--color-secondary-500": "#c81859",
          "--color-secondary-600": "#b1114c",
          "--color-secondary-800": "#700e32",
          "--color-neutral-0": "#ffffff",
          "--color-neutral-25": "#fdfdfd",
          "--color-neutral-50": "#f2f2f2",
          "--color-neutral-100": "#e7e7e7",
          "--color-neutral-200": "#cccccc",
          "--color-neutral-300": "#aaaaaa",
          "--color-neutral-400": "#999999",
          "--color-neutral-500": "#777777",
          "--color-neutral-600": "#555555",
          "--color-neutral-700": "#444444",
          "--color-neutral-800": "#333333",
          "--color-neutral-900": "#222222",
          "--color-neutral-1000": "#000000",
          "--color-success-25": "#e8fbec",
          "--color-success-50": "#c8f6d2",
          "--color-success-100": "#92eca5",
          "--color-success-200": "#1fcc74",
          "--color-success-300": "#1ac95d",
          "--color-success-400": "#00a317",
          "--color-success-500": "#149e49",
          "--color-success-800": "#045724",
          "--color-warning-25": "#fff8eb",
          "--color-warning-50": "#fff3b2",
          "--color-warning-200": "#fed600",
          "--color-warning-300": "#ff9e3a",
          "--color-warning-400": "#ff8507",
          "--color-warning-600": "#ab6f31",
          "--color-warning-800": "#8a3800",
          "--color-error-25": "#fffbfb",
          "--color-error-50": "#f6d3d6",
          "--color-error-100": "#ffadad",
          "--color-error-200": "#e07881",
          "--color-error-400": "#f02624",
          "--color-error-500": "UNUSED",
          "--color-error-600": "#d7100e",
          "--color-error-700": "#9a0c0a",
          "--color-error-800": "#750e13",
          "--color-editor-0": "#000000",
          "--color-editor-50": "#0d0d0d",
          "--color-editor-100": "#1a1a1a",
          "--color-editor-200": "#333333",
          "--color-editor-300": "#595959",
          "--color-editor-400": "#666666",
          "--color-editor-500": "#777777",
          "--color-editor-600": "#999999",
          "--color-editor-700": "#aaaaaa",
          "--color-editor-800": "#cccccc",
          "--color-editor-900": "#e7e7e7",
          "--color-editor-1000": "#ffffff",
          "--color-brand-sketchfab": "#1caad9",
          "--color-brand-epic": "#0b0b0b",
          "--color-brand-facebook": "#3a589a",
          "--color-brand-twitter": "#1d9bf0",
          "--color-brand-apple": "#050708",
          "--color-brand-pinterest": "#ce1d21",
          "--color-brand-linkedin": "#1884bc",
          "--color-brand-instagram": "#f00075",
          "--color-brand-tumblr": "#36465d",
          "--color-brand-reddit": "#ff5700",
          "--color-user-pro": "#00aad8",
          "--color-user-prem": "#007395",
          "--color-user-ent": "#222222",
          "--color-user-staff": "#ff9e3a",
          "--color-user-master": "#28cca7",
          "--color-black-a10": "rgba(0, 0, 0, 0.1)",
          "--color-black-a20": "rgba(0, 0, 0, 0.2)",
          "--color-black-a30": "rgba(0, 0, 0, 0.3)",
          "--color-black-a40": "rgba(0, 0, 0, 0.4)",
          "--color-black-a50": "rgba(0, 0, 0, 0.5)",
          "--color-black-a60": "rgba(0, 0, 0, 0.6)",
          "--color-black-a70": "rgba(0, 0, 0, 0.7)",
          "--color-black-a80": "rgba(0, 0, 0, 0.8)",
          "--color-black-a90": "rgba(0, 0, 0, 0.9)",
          "--color-white-a10": "rgba(255, 255, 255, 0.1)",
          "--color-white-a20": "rgba(255, 255, 255, 0.2)",
          "--color-white-a30": "rgba(255, 255, 255, 0.3)",
          "--color-white-a40": "rgba(255, 255, 255, 0.4)",
          "--color-white-a50": "rgba(255, 255, 255, 0.5)",
          "--color-white-a60": "rgba(255, 255, 255, 0.6)",
          "--color-white-a70": "rgba(255, 255, 255, 0.7)",
          "--color-white-a80": "rgba(255, 255, 255, 0.8)",
          "--color-white-a90": "rgba(255, 255, 255, 0.9)",
          "--color-primary-a10": "rgba(28, 170, 217, 0.1)",
          "--color-primary-a20": "rgba(28, 170, 217, 0.2)",
          "--color-primary-a30": "rgba(28, 170, 217, 0.3)",
          "--color-primary-a40": "rgba(28, 170, 217, 0.4)",
          "--color-primary-a50": "rgba(28, 170, 217, 0.5)",
          "--color-primary-a60": "rgba(28, 170, 217, 0.6)",
          "--color-primary-a70": "rgba(28, 170, 217, 0.7)",
          "--color-primary-a80": "rgba(28, 170, 217, 0.8)",
          "--color-primary-a90": "rgba(28, 170, 217, 0.9)",
          "--color-warning-a20": "rgba(255, 158, 58, 0.2)",
          "--color-error-a20": "rgba(240, 38, 36, 0.2)",
          "--color-shadow": "rgba(34, 34, 34, 0.1)",
          "--color-neutral-900-on-100": "#222222",
          "--color-neutral-500-on-0": "#777777",
          "--color-neutral-500-on-100": "#777777",
          "--color-neutral-600-on-200": "#555555",
          "--color-neutral-200-on-600": "#cccccc",
          "--color-primary-400-on-800": "#1caad9",
          "--gradient-primary-500-300-45deg":
            "linear-gradient(45deg, #1687ac 0%, #41bde7 100%)",
          "--gradient-primary-900-300-45deg":
            "linear-gradient(45deg, #19295a 0%, #2ec3fb 100%)",
          "--gradient-primary-900-700-45deg":
            "linear-gradient(45deg, #13161e 0%, #111727 34.35%, #0e4b61 100%)",
          "--gradient-primary-400-200-45deg":
            "linear-gradient(45deg, #1caad9 0%, #4cc8f1 100%)",
          "--gradient-secondary-600-300-45deg":
            "linear-gradient(45deg, #a60b43 0%, #f42671 100%)",
          "--gradient-secondary-900-300-45deg":
            "linear-gradient(45deg, #3e081c 0%, #ff4489 100%)",
          "--gradient-error-page":
            "linear-gradient(to bottom, #05131a 0%, #0a2633 100%)",
          "--website_background-color": "#f2f2f2",
          "--website_color": "#222222",
          "--website-top_background-color": "#ffffff",
          "--website-top_color": "#222222",
          "--website-top-search-icon_color": "#999999",
          "--website-top-search-input_color": "#000000",
          "--website-inverted_color": "#eeeeee",
          "--org-header-top_background": "#2e3338",
          "--org-header-main_background": "#2a404e",
          "--link_color": "#1caad9",
          "--link--hover_color": "#1c88bb",
          "--link-inverted_color": "#ffffff",
          "--link-inverted--hover_color": "#f2f2f2",
          "--link-primary-inverted_color": "#1caad9",
          "--link-primary-inverted--hover_color": "#1c88bb",
          "--button-primary_background-color": "#1caad9",
          "--button-primary_color": "#ffffff",
          "--button-primary--hover_background-color": "#1c88bb",
          "--button-primary--active_shadow-color": "#005e74",
          "--button-warning_background-color": "#ff9e3a",
          "--button-warning_color": "#ffffff",
          "--button-warning--hover_background-color": "#ff8507",
          "--button-warning--active_shadow-color": "#ab6f31",
          "--button-tertiary_background-color": "transparent",
          "--button-tertiary_color": "#1caad9",
          "--button-tertiary--hover_background-color": "#e8f7fb",
          "--button-tertiary--active_shadow-color": "#92d9ec",
          "--button-tertiary_border-color": "#1caad9",
          "--button-store_background-color": "#df1660",
          "--button-store_color": "#ffffff",
          "--button-store--hover_background-color": "#c81859",
          "--button-store--active_shadow-color": "#700e32",
          "--button-danger_background-color": "#f02624",
          "--button-danger_color": "#ffffff",
          "--button-danger--hover_background-color": "#d7100e",
          "--button-danger--active_shadow-color": "#9a0c0a",
          "--button-success_background-color": "#1ac95d",
          "--button-success_color": "#ffffff",
          "--button-success--hover_background-color": "#149e49",
          "--button-success--active_shadow-color": "#045724",
          "--button-facebook_background-color": "#3a589a",
          "--button-facebook_color": "#ffffff",
          "--button-facebook--hover_background-color": "#324576",
          "--button-facebook--active_shadow-color": "#1a2646",
          "--button-apple_background-color": "#ffffff",
          "--button-apple_color": "#050708",
          "--button-apple--hover_background-color": "#cccccc",
          "--button-apple--active_shadow-color": "#999999",
          "--button-apple_border-color": "#050708",
          "--button-epic_background-color": "#0b0b0b",
          "--button-epic_color": "#ffffff",
          "--button-epic--hover_background-color": "#555555",
          "--button-epic--active_shadow-color": "#999999",
          "--button-google_background-color": "#ffffff",
          "--button-google_color": "#555555",
          "--button-google--hover_background-color": "#cccccc",
          "--button-google--active_shadow-color": "#999999",
          "--button-google_border-color": "#999999",
          "--button-twitter_background-color": "#1d9bf0",
          "--button-twitter_color": "#ffffff",
          "--button-twitter--hover_background-color": "#0d88ed",
          "--button-twitter--active_shadow-color": "#0864b0",
          "--button-plan-pro_background-color": "#00aad8",
          "--button-plan-pro_color": "#ffffff",
          "--button-plan-pro--hover_background-color": "#1c88bb",
          "--button-plan-pro--active_shadow-color": "#023748",
          "--button-plan-prem_background-color": "#007395",
          "--button-plan-prem_color": "#ffffff",
          "--button-plan-prem--hover_background-color": "#005e74",
          "--button-plan-prem--active_shadow-color": "#01222d",
          "--button-plan-ent_background-color": "#222222",
          "--button-plan-ent_color": "#ffffff",
          "--button-plan-ent--hover_background-color": "#0f0f0f",
          "--button-plan-ent--active_shadow-color": "#ffffff",
          "--button-plan-ent_border-color": "#ffffff",
          "--button-primary-inverted_background-color": "#ffffff",
          "--button-primary-inverted_color": "#1caad9",
          "--button-primary-inverted--hover_background-color": "#e8f7fb",
          "--button-primary-inverted--active_shadow-color": "#92d9ec",
          "--button-primary-inverted--hover_color": "#1c88bb",
          "--button-store-inverted_background-color": "#ffffff",
          "--button-store-inverted_color": "#df1660",
          "--button-store-inverted--hover_background-color": "#ffe4ee",
          "--button-store-inverted--active_shadow-color": "#700e32",
          "--button-store-inverted--hover_color": "#c81859",
          "--button-danger-inverted_background-color": "#ffffff",
          "--button-danger-inverted_color": "#f02624",
          "--button-danger-inverted--hover_background-color": "#f6d3d6",
          "--button-danger-inverted--active_shadow-color": "#ffadad",
          "--button-danger-inverted--hover_color": "#f02624",
          "--button-loading_background-color": "#e7e7e7",
          "--button-loading_color": "#007396",
          "--button-loading--hover_background-color": '""',
          "--button-loading--active_shadow-color": '""',
          "--button-loading--hover_color": "#007396",
          "--badge--neutral_background-color": "#e7e7e7",
          "--badge--neutral_color": "#333333",
          "--badge--success_background-color": "#c8f6d2",
          "--badge--success_color": "#045724",
          "--badge--primary_background-color": "#92d9ec",
          "--badge--primary_color": "#023748",
          "--badge--warning_background-color": "#fff3b2",
          "--badge--warning_color": "#8a3800",
          "--badge--error_background-color": "#f6d3d6",
          "--badge--error_color": "#750e13",
          "--card-thumbnail_background":
            "radial-gradient(ellipse at center, #f5f5f5 0%, #d8d8d8 99%)",
          "--card-darken-overlay_background": "rgba(49, 51, 55, 0.5)",
          "--editor-color": "#333333",
          "--editor-important-color": "#0d0d0d",
          "--editor-key-color": "#1a1a1a",
          "--editor-minor-color": "#595959",
          "--editor-trivial-color": "#666666",
          "--editor-text-color": "#cccccc",
          "--editor-strong-color": "#ffffff",
          "--editor-border-color": "#000000",
          "--editor-active-color": "#1caad9",
          "--editor-scrollbar-track-color": "#aaaaaa",
          "--editor-scrollbar-thumb-color": "#595959",
          "--editor-disabled-overlay": "rgba(89, 89, 89, 0.75)",
          "--viewer_background-color": "#000000",
          "--viewer-kdb_background":
            "linear-gradient(to bottom, #ffffff 0%, #ffffff 5%, #cccccc 6%, #ffffff 100%)",
          "--loading-wave_background":
            "linear-gradient(to right, #e7e7e7, #dddddd 33%, #e7e7e7 66%)",
          "--checkerboard-pattern_background": "#ffffff",
          "--checkerboard-pattern_color": "#cccccc",
        };
      },
      AHX3: (t, e, o) => {
        "use strict";
        o.d(e, { Z: () => n });
        const n = {
          "website-top-height": "60px",
          "website-big-top-height": "86px",
          "website-banner-height": "50px",
          "website-responsive-top-height": "40px",
          "website-responsive-navigation-width": "250px",
          "website-fullscreen-padding": "30px",
          "editor-header-height": "55px",
          "editor-panel-width": "320px",
          "editor-scrollbar-width": "10px",
          "editor-group-widget-header-height": "30px",
          "editor-group-widget-switch-width": "50px",
          "editor-group-widget-switch-height": "24px",
          "editor-group-widget-switch-margin": "2px",
          "editor-group-widget-switch-cursor-width": "12px",
          "editor-nested-group-widget-switch-margin": "3px",
          "editor-image-widget-width": "30px",
          "editor-image-widget-height": "30px",
          "promotional-banner-height": "70px",
          "viewer-control-size": "30px",
          "website-max-width": "2000px",
          "responsive-breakpoint-x-large": "1400px",
          "responsive-breakpoint-medium": "1100px",
          "responsive-breakpoint-x-small": "800px",
          "responsive-breakpoint-x-x-small": "480px",
          "breakpoint-x-small": "576px",
          "breakpoint-small": "768px",
          "breakpoint-medium-small": "960px",
          "breakpoint-medium": "1024px",
          "breakpoint-medium-large": "1280px",
          "breakpoint-large": "1440px",
          "breakpoint-x-large": "1920px",
          "responsive-grid-one-column": "768px",
          "responsive-grid-two-column": "1024px",
          "responsive-grid-three-column": "1920px",
        };
      },
      SRJ6: (t, e, o) => {
        "use strict";
        o.d(e, { Z: () => n });
        const n = {
          view: "TqWebjgr",
          icon: "gXtW9sME",
          "--left": "mvH25JvN",
          "--right": "ssxYToYd",
          "--small": "sbvDlKmf",
          label: "nACfv1rV",
          "--success": "WJrYfKMM",
          "--active": "P4G5qVRg",
          "--sketchfab": "IOyc041V",
          "--informative": "ER723FQ2",
          "--organization": "VniWTAZW",
          "--inactive": "yVMkLFi6",
          "--pending": "BGDERYDD",
          "--error": "kKTqEuOZ",
        };
      },
      "9bF+": (t, e, o) => {
        "use strict";
        o.d(e, { Z: () => n });
        const n = { view: "a2R_0KGr", round: "BEap4jJv", square: "bc_D_a9t" };
      },
    },
    (t) => (
      t.O(
        0,
        [
          9994, 2698, 5471, 193, 7550, 2929, 7913, 1438, 4522, 9946, 148, 7549,
          4939, 8400, 1287, 1465, 7231, 1238, 2322, 325, 5644, 416, 9453, 3266,
          1111, 5041,
        ],
        () => {
          //debugger
          return (e = "Pu2i"), t((t.s = e));
          var e;
        }
      ),
      t.O()
    ),
  ])
);
