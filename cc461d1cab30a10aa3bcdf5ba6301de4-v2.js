"use strict";
(self.webpackChunksketchfab = self.webpackChunksketchfab || []).push([
  [733],
  {
    GuWZ: (t, e, n) => {
      n.r(e);
      var o = n("eKF4"),
        i = n("Z1Nz"),
        r = n.n(i),
        s = n("TxBr"),
        a = n("5hHH"),
        c = n("iu9k"),
        u = ["models:embed", "models:embed_specific_version"],
        l = [
          "misc:fallback_generator",
          "misc:fallback_generator_viewer",
          "models:view",
          "models:view_without_slug",
        ],
        f = o.Z.me().get("isStaff"),
        h = function () {
          return !(
            (u.some(function (t) {
              return (0, c.EQ)(t, window.location.pathname);
            }) &&
              (function () {
                try {
                  window.parent.location.host;
                } catch (t) {
                  return !1;
                }
                return !0;
              })()) ||
            (f &&
              l.some(function (t) {
                return (0, c.EQ)(t, window.location.pathname);
              }))
          );
        };
      o.Z.me().canAccessFeature("ff_analytics_package") &&
        h() &&
        ((0, i.init)({
          getCSRFToken: function () {
            return s.ZP.get("sb_csrftoken") || "";
          },
        }),
        r()("PAGE_VIEWED"),
        a.Z.listen(function () {
          return h() && r()("PAGE_VIEWED");
        }));
    },
    Z1Nz: function (t, e, n) {
      var o = n("Oyie"),
        i =
          (this && this.__awaiter) ||
          function (t, e, n, i) {
            return new (n || (n = o))(function (o, r) {
              function s(t) {
                try {
                  c(i.next(t));
                } catch (t) {
                  r(t);
                }
              }
              function a(t) {
                try {
                  c(i.throw(t));
                } catch (t) {
                  r(t);
                }
              }
              function c(t) {
                var e;
                t.done
                  ? o(t.value)
                  : ((e = t.value),
                    e instanceof n
                      ? e
                      : new n(function (t) {
                          t(e);
                        })).then(s, a);
              }
              c((i = i.apply(t, e || [])).next());
            });
          };
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.init = void 0);
      const r = n("lXhu");
      (e.init = function (t) {
        (0, r.setSettings)(t),
          (0, r.setSessionUid)(),
          r.EventBag.length > 0 && (0, r.post)();
      }),
        (e.default = function (t) {
          return i(this, void 0, void 0, function* () {
            const e = Object.assign(
              {
                Url: window.location.href,
                Referer: document.referrer,
                Screen: {
                  width: window.screen.width,
                  height: window.screen.height,
                },
                Browser: {
                  width: window.outerWidth,
                  height: window.outerHeight,
                },
              },
              "string" == typeof t ? { EventName: t } : t
            );
            r.EventBag.push(e), (0, r.post)();
          });
        });
    },
    lXhu: function (t, e, n) {
      var o = n("Oyie"),
        i =
          (this && this.__awaiter) ||
          function (t, e, n, i) {
            return new (n || (n = o))(function (o, r) {
              function s(t) {
                try {
                  c(i.next(t));
                } catch (t) {
                  r(t);
                }
              }
              function a(t) {
                try {
                  c(i.throw(t));
                } catch (t) {
                  r(t);
                }
              }
              function c(t) {
                var e;
                t.done
                  ? o(t.value)
                  : ((e = t.value),
                    e instanceof n
                      ? e
                      : new n(function (t) {
                          t(e);
                        })).then(s, a);
              }
              c((i = i.apply(t, e || [])).next());
            });
          };
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.post =
          e._post =
          e.setSessionUid =
          e.EventBag =
          e.setSettings =
          e.getSettings =
            void 0);
      let r = {
          domain: window.location.origin,
          endpoint: "/a/ramen",
          interval: 1e3,
          maxEventsLength: 10,
        },
        s = null;
      function a() {
        return r;
      }
      (e.getSettings = a),
        (e.setSettings = function (t) {
          return (r = Object.assign(Object.assign({}, r), t));
        });
      const c = ((t) => {
        try {
          const e = localStorage.getItem(t);
          return e ? JSON.parse(e) : [];
        } catch (t) {
          console.error("Can't read in localStorage", t);
        }
        return [];
      })("userEvents");
      e.EventBag = new Proxy(c, {
        set: function (t, e, n) {
          t[e] = n;
          try {
            localStorage.setItem("userEvents", JSON.stringify(t));
          } catch (t) {
            console.error("Can't write to localStorage", t);
          }
          return !0;
        },
      });
      function u() {
        return i(this, void 0, void 0, function* () {
          const t = a();
          if (0 === e.EventBag.length || !s) return;
          const n = e.EventBag.map((t) =>
              Object.assign(Object.assign({}, t), { SessionUid: s })
            ),
            o = JSON.stringify({ events: n }),
            i = new URL(t.endpoint, t.domain).toString();
          if(i.indexOf("/a/ramen")!=-1){
            return;
          }
          fetch(i, {
            method: "POST",
            headers: Object.assign(
              {
                "Content-Type": "application/json",
                "x-csrftoken": t.getCSRFToken(),
              },
              t.headers
            ),
            body: o,
          })
            .then((t) => {
              if (!t.ok) throw new Error("Invalid response");
              e.EventBag.length = 0;
            })
            .catch((t) => {
              console.error(t);
            });
        });
      }
      (e.setSessionUid = () => {
        if (!s)
          try {
            s = window.crypto.randomUUID().replace(/-/g, "");
          } catch (t) {
            console.error("setSessionUid failed", t);
          }
      }),
        (e._post = u),
        (e.post = (function (t, n, o) {
          let i;
          return (...r) => {
            clearTimeout(i),
              (i = setTimeout(() => {
                t.apply(this, r);
              }, n)),
              e.EventBag.length >= o && (t.apply(this, r), clearTimeout(i));
          };
        })(u, a().interval, a().maxEventsLength));
    },
  },
]);
