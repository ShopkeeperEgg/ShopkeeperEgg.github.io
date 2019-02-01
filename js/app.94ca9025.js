(function(t) {
  function M(M) {
    for (
      var a, n, j = M[0], l = M[1], c = M[2], z = 0, o = [];
      z < j.length;
      z++
    )
      (n = j[z]), i[n] && o.push(i[n][0]), (i[n] = 0);
    for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (t[a] = l[a]);
    N && N(M);
    while (o.length) o.shift()();
    return e.push.apply(e, c || []), s();
  }
  function s() {
    for (var t, M = 0; M < e.length; M++) {
      for (var s = e[M], a = !0, j = 1; j < s.length; j++) {
        var l = s[j];
        0 !== i[l] && (a = !1);
      }
      a && (e.splice(M--, 1), (t = n((n.s = s[0]))));
    }
    return t;
  }
  var a = {},
    i = { app: 0 },
    e = [];
  function n(M) {
    if (a[M]) return a[M].exports;
    var s = (a[M] = { i: M, l: !1, exports: {} });
    return t[M].call(s.exports, s, s.exports, n), (s.l = !0), s.exports;
  }
  (n.m = t),
    (n.c = a),
    (n.d = function(t, M, s) {
      n.o(t, M) || Object.defineProperty(t, M, { enumerable: !0, get: s });
    }),
    (n.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function(t, M) {
      if ((1 & M && (t = n(t)), 8 & M)) return t;
      if (4 & M && "object" === typeof t && t && t.__esModule) return t;
      var s = Object.create(null);
      if (
        (n.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: t }),
        2 & M && "string" != typeof t)
      )
        for (var a in t)
          n.d(
            s,
            a,
            function(M) {
              return t[M];
            }.bind(null, a)
          );
      return s;
    }),
    (n.n = function(t) {
      var M =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return n.d(M, "a", M), M;
    }),
    (n.o = function(t, M) {
      return Object.prototype.hasOwnProperty.call(t, M);
    }),
    (n.p = "/");
  var j = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = j.push.bind(j);
  (j.push = M), (j = j.slice());
  for (var c = 0; c < j.length; c++) M(j[c]);
  var N = l;
  e.push([0, "chunk-vendors"]), s();
})({
  0: function(t, M, s) {
    t.exports = s("56d7");
  },
  "3e3f": function(t, M, s) {},
  "56d7": function(t, M, s) {
    "use strict";
    s.r(M);
    s("cadf"), s("551c"), s("097d");
    var a = s("2b0e"),
      i = function() {
        var t = this,
          M = t.$createElement,
          s = t._self._c || M;
        return s("div", { attrs: { id: "app" } }, [s("router-view")], 1);
      },
      e = [],
      n = { name: "app", components: {} },
      j = n,
      l = s("2877"),
      c = Object(l["a"])(j, i, e, !1, null, null, null),
      N = c.exports,
      z = (s("28a5"), s("8c4f")),
      o = function() {
        var t = this,
          M = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      u = [
        function() {
          var t = this,
            M = t.$createElement,
            s = t._self._c || M;
          return s("div", { staticClass: "main" }, [
            s("div", { staticClass: "ball-area" }, [
              s("div", [t._v("**")]),
              s("div", [t._v("**")]),
              s("div", [t._v("**")]),
              s("div", [t._v("**")]),
              s("div", [t._v("**")]),
              s("div", [t._v("**")]),
              s("div", { staticClass: "blue" }, [t._v("**")])
            ]),
            s("div", { attrs: { id: "btn" } }, [t._v("随机选号")])
          ]);
        }
      ],
      r = (s("55dd"), s("5176")),
      d = s.n(r),
      v = {
        name: "app",
        data: function() {
          return {};
        },
        mounted: function() {
          for (
            var t = document.getElementById("btn"),
              M = [],
              s = [],
              a = document.getElementsByClassName("ball-area")[0],
              i = 1;
            i <= 33;
            i++
          )
            M.push(i);
          for (var e = 1; e <= 16; e++) s.push(e);
          function n(t, M) {
            var s = [],
              a = [];
            d()(a, t);
            for (var i = 0; i < M; i++)
              s.push(a.splice(Math.floor(Math.random() * a.length), 1));
            return s;
          }
          t.addEventListener("click", function() {
            for (
              var t = n(M, 6).sort(function(t, M) {
                  return t - M;
                }),
                i = n(s, 1).sort(function(t, M) {
                  return t - M;
                }),
                e = "",
                j = 0;
              j < t.length;
              j++
            ) {
              var l = t[j];
              e += "<div>".concat(l, "</div>");
            }
            (e += '<div class="blue">'.concat(i[0], "</div>")),
              (a.innerHTML = e);
          }),
            document.body.addEventListener("touchmove", function(t) {
              t.preventDefault();
            });
        }
      },
      y = v,
      T = (s("8fc1"), Object(l["a"])(y, o, u, !1, null, null, null)),
      g = T.exports,
      L = function() {
        var t = this,
          M = t.$createElement,
          s = t._self._c || M;
        return s("div", { staticClass: "m-main" }, [
          t._m(0),
          s(
            "section",
            { staticClass: "w960" },
            [
              0 === t.step
                ? [
                    s(
                      "div",
                      {
                        staticClass: "table",
                        staticStyle: { "margin-bottom": "40px" }
                      },
                      [
                        t._m(1),
                        s("div", { staticClass: "tr" }, [
                          s("div", { staticClass: "td" }, [t._v("版权使用者")]),
                          s("div", { staticClass: "td" }, [
                            t._v("\n          苏红\n        ")
                          ]),
                          s("div", { staticClass: "td" }, [t._v("奖金总额")]),
                          s("div", { staticClass: "td" }, [
                            s("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.totalNumber,
                                  expression: "totalNumber"
                                }
                              ],
                              staticStyle: { width: "80%" },
                              attrs: { type: "number" },
                              domProps: { value: t.totalNumber },
                              on: {
                                input: function(M) {
                                  M.target.composing ||
                                    (t.totalNumber = M.target.value);
                                }
                              }
                            }),
                            t._v(" 元\n        ")
                          ])
                        ])
                      ]
                    ),
                    s("div", { staticClass: "table" }, [
                      s(
                        "div",
                        { staticClass: "table-header" },
                        [
                          s(
                            "div",
                            { staticClass: "tr" },
                            [
                              t._l(t.config, function(M, a) {
                                return s("div", { key: a, staticClass: "td" }, [
                                  t._v(t._s(M.name))
                                ]);
                              }),
                              s("div", { staticClass: "td" }, [t._v("操作")])
                            ],
                            2
                          ),
                          t._l(t.list, function(M, a) {
                            return s(
                              "div",
                              { key: a, staticClass: "tr" },
                              [
                                t._l(t.config, function(a, i) {
                                  return s(
                                    "div",
                                    { key: i, staticClass: "td" },
                                    [
                                      s("label", [
                                        a.string
                                          ? s("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: M[a.set],
                                                  expression: "item[i.set]"
                                                }
                                              ],
                                              attrs: {
                                                type: "text",
                                                placeholder: a.name
                                              },
                                              domProps: { value: M[a.set] },
                                              on: {
                                                input: function(s) {
                                                  s.target.composing ||
                                                    t.$set(
                                                      M,
                                                      a.set,
                                                      s.target.value
                                                    );
                                                }
                                              }
                                            })
                                          : s("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: M[a.set],
                                                  expression: "item[i.set]"
                                                }
                                              ],
                                              attrs: {
                                                type: "number",
                                                placeholder: a.name
                                              },
                                              domProps: { value: M[a.set] },
                                              on: {
                                                input: function(s) {
                                                  s.target.composing ||
                                                    t.$set(
                                                      M,
                                                      a.set,
                                                      s.target.value
                                                    );
                                                }
                                              }
                                            })
                                      ])
                                    ]
                                  );
                                }),
                                s(
                                  "div",
                                  {
                                    staticClass: "td cp",
                                    on: {
                                      click: function(M) {
                                        t.deleteItem(a);
                                      }
                                    }
                                  },
                                  [
                                    s(
                                      "a",
                                      {
                                        staticClass: "del",
                                        attrs: { href: "javascript:;" }
                                      },
                                      [t._v("删除")]
                                    )
                                  ]
                                )
                              ],
                              2
                            );
                          }),
                          s(
                            "div",
                            {
                              staticClass: "tr",
                              staticStyle: { background: "#e8e8e8" }
                            },
                            [
                              t._l(t.config, function(M, a) {
                                return s("div", { key: a, staticClass: "td" }, [
                                  s("label", [
                                    "name" === M.set
                                      ? s("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: M.default,
                                              expression: "item.default"
                                            }
                                          ],
                                          attrs: {
                                            type: "text",
                                            placeholder: "默认" + M.name
                                          },
                                          domProps: { value: M.default },
                                          on: {
                                            input: function(s) {
                                              s.target.composing ||
                                                t.$set(
                                                  M,
                                                  "default",
                                                  s.target.value
                                                );
                                            }
                                          }
                                        })
                                      : s("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: M.default,
                                              expression: "item.default"
                                            }
                                          ],
                                          attrs: {
                                            type: "number",
                                            placeholder: "默认" + M.name
                                          },
                                          domProps: { value: M.default },
                                          on: {
                                            input: function(s) {
                                              s.target.composing ||
                                                t.$set(
                                                  M,
                                                  "default",
                                                  s.target.value
                                                );
                                            }
                                          }
                                        })
                                  ])
                                ]);
                              }),
                              s(
                                "div",
                                { staticClass: "td cp", on: { click: t.add } },
                                [
                                  s(
                                    "a",
                                    {
                                      staticStyle: { color: "#6853ff" },
                                      attrs: { href: "javascript:;" }
                                    },
                                    [t._v("添加")]
                                  )
                                ]
                              )
                            ],
                            2
                          )
                        ],
                        2
                      )
                    ]),
                    s("div", { staticClass: "btn-area" }, [
                      s(
                        "a",
                        {
                          staticClass: "btn m-btn-green",
                          staticStyle: {
                            "padding-left": "60px",
                            "padding-right": "60px"
                          },
                          attrs: { href: "javascript:;" },
                          on: { click: t.jsZs }
                        },
                        [t._v("计算")]
                      ),
                      s("label", { attrs: { for: "file" } }, [
                        s("div", { staticClass: "btn m-btn-orange" }, [
                          t._v("导入数据")
                        ]),
                        s("input", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: 0,
                              expression: "0"
                            }
                          ],
                          ref: "file",
                          attrs: { type: "file", id: "file" },
                          on: { input: t.change }
                        })
                      ]),
                      s(
                        "a",
                        {
                          staticClass: "btn m-btn-blue",
                          attrs: { href: "javascript:;" },
                          on: { click: t.exportData }
                        },
                        [t._v("导出数据")]
                      ),
                      s(
                        "a",
                        {
                          staticClass: "btn m-btn-red",
                          attrs: { href: "javascript:;" },
                          on: { click: t.clearAll }
                        },
                        [t._v("清空所有数据")]
                      )
                    ])
                  ]
                : [
                    s("div", { ref: "table", staticClass: "table" }, [
                      s(
                        "div",
                        { staticClass: "table-header" },
                        [
                          t._m(2),
                          t._l(t.list, function(M, a) {
                            return s(
                              "div",
                              {
                                key: a,
                                staticClass: "tr",
                                staticStyle: { "background-color": "#fff" }
                              },
                              [
                                s("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(M.xs)))
                                ]),
                                s("div", { staticClass: "td" }, [
                                  t._v(t._s(M.name))
                                ]),
                                s("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(M.jj)))
                                ]),
                                s("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(M.tz)))
                                ]),
                                s("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(M.sstc)))
                                ]),
                                s("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(M.jx)))
                                ]),
                                s("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(M.qqJJ)))
                                ]),
                                s("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(M.fmbf)))
                                ]),
                                s("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(M.fmcf)))
                                ]),
                                s("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(M.jj2)))
                                ]),
                                s("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(M.qt)))
                                ]),
                                s("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(M.total_all)))
                                ])
                              ]
                            );
                          }),
                          s("div", { staticClass: "tr" }, [
                            s("div", { staticClass: "td" }, [t._v("总计")]),
                            s("div", { staticClass: "td" }, [t._v(" -- ")]),
                            s("div", { staticClass: "td" }, [
                              t._v(t._s(t.so2(t.totalObj.jj)))
                            ]),
                            s("div", { staticClass: "td" }, [
                              t._v(t._s(t.so2(t.totalObj.tz)))
                            ]),
                            s("div", { staticClass: "td" }, [
                              t._v(t._s(t.so2(t.totalObj.sstc)))
                            ]),
                            s("div", { staticClass: "td" }, [
                              t._v(t._s(t.so2(t.totalObj.jx)))
                            ]),
                            s("div", { staticClass: "td" }, [
                              t._v(t._s(t.so2(t.totalObj.qqJJ)))
                            ]),
                            s("div", { staticClass: "td" }, [
                              t._v(t._s(t.so2(t.totalObj.fmbf)))
                            ]),
                            s("div", { staticClass: "td" }, [
                              t._v(t._s(t.so2(t.totalObj.fmcf)))
                            ]),
                            s("div", { staticClass: "td" }, [
                              t._v(t._s(t.so2(t.totalObj.jj2)))
                            ]),
                            s("div", { staticClass: "td" }, [
                              t._v(t._s(t.so2(t.totalObj.qt)))
                            ]),
                            s("div", { staticClass: "td" }, [
                              t._v(t._s(t.so2(t.totalObj.total_all)))
                            ])
                          ]),
                          s("div", { staticClass: "tr" }, [
                            s("div", { staticClass: "td" }),
                            s("div", { staticClass: "td" }),
                            s("div", { staticClass: "td" }),
                            s("div", { staticClass: "td" }),
                            s("div", { staticClass: "td" }),
                            s("div", { staticClass: "td" }),
                            s("div", { staticClass: "td" }),
                            s("div", { staticClass: "td" }),
                            s("div", { staticClass: "td" }, [t._v("误差：")]),
                            s("div", { staticClass: "td" }, [
                              t._v(
                                "\n            " +
                                  t._s(
                                    t.so2(t.totalNumber - t.totalObj.total_all)
                                  ) +
                                  "\n          "
                              )
                            ]),
                            s(
                              "div",
                              {
                                staticClass: "td",
                                staticStyle: { "font-size": "14px" }
                              },
                              [t._v("实际总数：")]
                            ),
                            s("div", { staticClass: "td" }, [
                              t._v(
                                "\n            " +
                                  t._s(t.totalNumber) +
                                  "\n          "
                              )
                            ])
                          ])
                        ],
                        2
                      )
                    ]),
                    s("div", { staticClass: "btn-area" }, [
                      s(
                        "a",
                        {
                          staticClass: "btn m-btn-blue",
                          attrs: { href: "javascript:;" },
                          on: {
                            click: function(M) {
                              t.downloadFile(1);
                            }
                          }
                        },
                        [t._v("生成Excel(测试版)")]
                      ),
                      s(
                        "a",
                        {
                          staticClass: "btn m-btn-green",
                          attrs: { href: "javascript:;" },
                          on: { click: t.downloadFile }
                        },
                        [t._v("生成文本文档")]
                      ),
                      s(
                        "a",
                        {
                          staticClass: "btn m-btn-white",
                          staticStyle: { color: "#787878" },
                          attrs: { href: "javascript:;" },
                          on: { click: t.tupian }
                        },
                        [t._v("生成图片")]
                      ),
                      s(
                        "a",
                        {
                          staticClass: "btn m-btn-red",
                          attrs: { href: "javascript:;" },
                          on: {
                            click: function(M) {
                              t.step = 0;
                            }
                          }
                        },
                        [t._v("返回")]
                      )
                    ])
                  ],
              s("a", { attrs: { id: "downlink" } })
            ],
            2
          )
        ]);
      },
      f = [
        function() {
          var t = this,
            M = t.$createElement,
            s = t._self._c || M;
          return s("header", [
            s("div", { staticClass: "logo" }, [
              s("img", {
                attrs: {
                  src:
                    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMC4wMHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTM4Mi40ODA0MjcgNjk4LjY4OGMtOC42NjEzMzMgMC4yNzczMzMtMTYuMzQxMzMzIDcuNzg2NjY3LTE3LjUxNDY2NyAxNi45Mzg2NjctMS4wODggOS4wODggNC44MjEzMzMgMTYuMzg0IDEzLjU0NjY2NyAxNi4yNTYgOC44NzQ2NjctMC4xNDkzMzMgMTYuODk2LTcuODcyIDE4LjAyNjY2Ni0xNy4xNzMzMzQgMC45MTczMzMtOS4yOC01LjM5NzMzMy0xNi41MTItMTQuMDU4NjY2LTE2LjAyMTMzM3pNMzIzLjUzNjQyNyA3MDkuMDk4NjY3Yy0yNi42NjY2NjcgMS4yNTg2NjctNTAuODE2IDI0LjUxMi01NC4yOTMzMzQgNTIuNTY1MzMzLTMuNjI2NjY3IDI4LjIyNCAxNS4xNjggNTAuODU4NjY3IDQyLjAyNjY2NyA1MC4zODkzMzMgMjcuMjQyNjY3LTAuNDI2NjY3IDUyLjM1Mi0yNC4yOTg2NjcgNTUuNjgtNTMuMDk4NjY2IDIuOTg2NjY3LTI4Ljg2NC0xNi4zNjI2NjctNTAuOTg2NjY3LTQzLjQxMzMzMy00OS44NTZ6IiBmaWxsPSIjRkZGRkZGIiAvPjxwYXRoIGQ9Ik03NjYuNDU5MDkzIDY3My42ODUzMzNjLTEyLjIwMjY2Ny0xMjcuNTk0NjY3LTE4My44NTA2NjctMjE1LjUzMDY2Ny0zODMuNDAyNjY2LTE5Ni40MzczMzMtMTk5LjU1MiAxOS4wOTMzMzMtMzUxLjQyNCAxMzcuOTg0LTMzOS4yMjEzMzQgMjY1LjYgMTIuMjI0IDEyNy41OTQ2NjcgMTgzLjg3MiAyMTUuNTUyIDM4My40MjQgMTk2LjQ1ODY2NyAxOTkuNTUyLTE5LjExNDY2NyAzNTEuNDI0LTEzOC4wMDUzMzMgMzM5LjItMjY1LjYyMTMzNHogbS0yNTEuMTM2IDQ5LjQ1MDY2N2MtOS4wNjY2NjcgODMuMDI5MzMzLTg5LjIzNzMzMyAxNTEuMzM4NjY3LTE3NS44NTA2NjYgMTUwLjk3Ni04My42MDUzMzMtMC4zMi0xMzkuNTYyNjY3LTY0Ljk4MTMzMy0xMjcuODA4LTE0Mi45OTczMzMgMTEuNTQxMzMzLTc2LjUyMjY2NyA4NC40OC0xNDAuODg1MzMzIDE2NS43MTczMzMtMTQ1LjIzNzMzNCA4NC4wNTMzMzMtNC42OTMzMzMgMTQ3LjAwOCA1NS45Nzg2NjcgMTM3Ljk0MTMzMyAxMzcuMjU4NjY3eiIgZmlsbD0iI0ZGRkZGRiIgLz48cGF0aCBkPSJNMTAyMi4wOTY0MjcgMzEzLjg3NzMzM2MtMzMuNjg1MzMzLTE4OC4yMjQtMTgzLjMzODY2Ny0yNjMuNzg2NjY3LTI4Ny4wNC0yNzAuOTk3MzMzLTE5LjQ5ODY2Ny0xLjg3NzMzMy0zNy42MTA2NjcgOS44NzczMzMtNDAuMjk4NjY3IDI4LjcxNDY2Ny0yLjU4MTMzMyAxOC4zMjUzMzMgMTAuNTM4NjY3IDM2LjU2NTMzMyAyOC43MTQ2NjcgNDAuMjk4NjY2IDY3Ljg0IDE0Ljk3NiAxOTYuMjAyNjY3IDM0LjczMDY2NyAyMzAuMTY1MzMzIDIyNS43NDkzMzQgMi45NjUzMzMgMTkuMzcwNjY3IDE4LjkyMjY2NyA0MC4wMjEzMzMgNDMuMDUwNjY3IDM0Ljc3MzMzMyAxNy42NjQtMy45MDQgMzMuNDUwNjY3LTEzLjcxNzMzMyAyNS40MDgtNTguNTM4NjY3ek03MjAuMzc5MDkzIDI2MS4yOTA2NjdhMjQuMzYyNjY3IDI0LjM2MjY2NyAwIDAgMC0yNy40OTg2NjYgMTcuNDUwNjY2Yy0zLjk0NjY2NyAxMy4xNDEzMzMgMy4zMjggMjguMTgxMzMzIDE2LjY4MjY2NiAzMC45NzYgMjguMzczMzMzIDUuOTMwNjY3IDQyLjI2MTMzMyAyNS40OTMzMzMgNDYuMzc4NjY3IDQ2LjM1NzMzNCAwIDAgMy42MjY2NjcgMTQuMTQ0IDE3LjI1ODY2NyAxOC4wNDggMTMuMzMzMzMzIDMuODE4NjY3IDM3LjQxODY2Ny02LjAzNzMzMyAzMC40ODUzMzMtMzIuMjk4NjY3LTYuODkwNjY3LTM1LjczMzMzMy00Mi40MTA2NjctNzQuMTEyLTgzLjMwNjY2Ny04MC41MzMzMzN6IiBmaWxsPSIjRTc5MDE0IiAvPjxwYXRoIGQ9Ik03MzcuNjM3NzYgMTYwLjQyNjY2N2MtMjkuNzgxMzMzLTUuMTQxMzMzLTQzLjQxMzMzMyAxNi4yMTMzMzMtNDMuNDEzMzMzIDMzLjI1ODY2NiAwIDE3LjAyNCAxMi4xNiAyOS4zMTIgMzQuNjAyNjY2IDM1LjU2MjY2NyA1OS42MDUzMzMgMTYuNTMzMzMzIDk3Ljg3NzMzMyA0Mi42NjY2NjcgMTA4LjM3MzMzNCAxMTEuNjggMy4wNTA2NjcgMjAuMDMyIDIxLjM1NDY2NyAzMC43MiAzNC42NDUzMzMgMzAuNzIgMTcuOTQxMzMzIDAgMzIuNDY5MzMzLTE0LjU0OTMzMyAzMi40NjkzMzMtMzIuNDY5MzMzIDAtMC42NjEzMzMtMC4wNjQtMS4zMjI2NjctMC4xMDY2NjYtMS45NjI2NjdsMC4xNzA2NjYtMC4wNDI2NjdjLTExLjM0OTMzMy04OC41MzMzMzMtNzcuNjk2LTE2MS4zNjUzMzMtMTY2Ljc0MTMzMy0xNzYuNzQ2NjY2eiIgZmlsbD0iI0U3OTAxNCIgLz48cGF0aCBkPSJNNzMxLjYwMDQyNyA2OTcuNDcyYy0xMS45NjggMTI0LjA1MzMzMy0xODguODQyNjY3IDIyMy4zODEzMzMtMzgwLjY1MDY2NyAyMTguNDk2LTE3Ny43NDkzMzMtNC4zOTQ2NjctMjk2LjE5Mi05Ny45ODQtMjc2LjU2NTMzMy0yMDYuNTcwNjY3IDE5LjEzNi0xMDUuNDcyIDE2NC40MTYtMTk2LjYyOTMzMyAzMzUuMjk2LTIwNi43MiAxODMuNTUyLTEwLjgxNiAzMzMuNTg5MzMzIDc0LjU4MTMzMyAzMjEuOTIgMTk0Ljc5NDY2N3ogbS0yNy45NjgtMTk4LjgwNTMzM2MtNy4wODI2NjcgMC4xOTItMTAuMDY5MzMzIDEuMDI0LTExLjEzNi0xLjUxNDY2Ny0wLjg3NDY2Ny0yLjA2OTMzMyAwLjE3MDY2Ny00LjMzMDY2NyAzLjk4OTMzMy0xMy45NzMzMzMgMTAuNjQ1MzMzLTI2Ljg1ODY2NyAyNy41NjI2NjctODIuMDY5MzMzLTcuMjMyLTExMi44NzQ2NjctMjIuOTU0NjY3LTIwLjMzMDY2Ny0xMjAuMTQ5MzMzLTM1Ljg0LTIyMi41NzA2NjcgMzUuMi01LjA5ODY2NyAzLjU0MTMzMy0xMy4zNzYgMTEuMDkzMzMzLTE3LjU1NzMzMyA5LjcwNjY2Ny00LjYwOC0xLjU1NzMzMy01LjU4OTMzMy02LjUyOC02LjIwOC0xNS45MTQ2NjctMy4zNDkzMzMtNTAuNjAyNjY3IDM5LjIxMDY2Ny0xOTEuMjMyLTcwLjU3MDY2Ny0xNzkuNTYyNjY3LTExNi42OTMzMzMgMTkuNzU0NjY3LTI3NC4xMzMzMzMgMjA0LjE2LTMxOS4xMjUzMzMgMjkzLjM1NDY2Ny0xNTkuNjggMzE2LjQ1ODY2NyA3MS4yMzIgNDQ1LjM5NzMzMyAyOTcuMTA5MzMzIDQ1Mi4xMzg2NjcgMjQ1LjA1NiA3LjIzMiA0OTMuMzEyLTEzMS45MDQgNTI1Ljk1Mi0zMTguMDM3MzM0IDIxLjc4MTMzMy0xMjQuMjQ1MzMzLTEyNC40OC0xNDkuNTg5MzMzLTE3Mi42NTA2NjYtMTQ4LjUyMjY2NnoiIGZpbGw9IiNENjI2MjkiIC8+PHBhdGggZD0iTTM3Ny4zODE3NiA1ODUuODc3MzMzYy04MS4yMzczMzMgNC4zNzMzMzMtMTU0LjE3NiA2OC43MTQ2NjctMTY1LjcxNzMzMyAxNDUuMjM3MzM0LTExLjczMzMzMyA3OC4wMTYgNDQuMjAyNjY3IDE0Mi42NzczMzMgMTI3LjgwOCAxNDIuOTk3MzMzIDg2LjYxMzMzMyAwLjM2MjY2NyAxNjYuNzg0LTY3Ljk0NjY2NyAxNzUuODUwNjY2LTE1MC45NzYgOS4wNjY2NjctODEuMjgtNTMuODg4LTE0MS45NTItMTM3Ljk0MTMzMy0xMzcuMjU4NjY3eiBtLTEwLjQzMiAxNzMuMDc3MzM0Yy0zLjMyOCAyOC44LTI4LjQzNzMzMyA1Mi42NTA2NjctNTUuNjggNTMuMDk4NjY2LTI2Ljg4IDAuNDY5MzMzLTQ1LjY3NDY2Ny0yMi4xNjUzMzMtNDIuMDI2NjY3LTUwLjM4OTMzMyAzLjQ3NzMzMy0yOC4wNTMzMzMgMjcuNjI2NjY3LTUxLjMwNjY2NyA1NC4yOTMzMzQtNTIuNTY1MzMzIDI3LjA1MDY2Ny0xLjEzMDY2NyA0Ni40IDIwLjk5MiA0My40MTMzMzMgNDkuODU2eiBtMTEuNTYyNjY3LTI3LjA5MzMzNGMtOC43MDQgMC4xMjgtMTQuNjEzMzMzLTcuMTY4LTEzLjU0NjY2Ny0xNi4yNTYgMS4xNzMzMzMtOS4xMzA2NjcgOC44NTMzMzMtMTYuNjYxMzMzIDE3LjUxNDY2Ny0xNi45Mzg2NjYgOC42NC0wLjQ5MDY2NyAxNC45NzYgNi43NDEzMzMgMTQuMDU4NjY2IDE2LTEuMTMwNjY3IDkuMzIyNjY3LTkuMTUyIDE3LjA0NTMzMy0xOC4wMjY2NjYgMTcuMTk0NjY2eiIgZmlsbD0iIzAzMDAwMCIgLz48L3N2Zz4=",
                  alt: "logo"
                }
              })
            ]),
            s("div", { staticClass: "mmm" }, [
              s("h1", { staticStyle: { "font-size": "26px" } }, [
                t._v("奖金计算系统")
              ])
            ]),
            s("div", { staticClass: "username" }, [t._v("\n      苏红\n    ")])
          ]);
        },
        function() {
          var t = this,
            M = t.$createElement,
            s = t._self._c || M;
          return s("div", { staticClass: "tr" }, [
            s("div", { staticClass: "td" }, [t._v("默认配置")])
          ]);
        },
        function() {
          var t = this,
            M = t.$createElement,
            s = t._self._c || M;
          return s("div", { staticClass: "tr" }, [
            s("div", { staticClass: "td" }, [t._v("系数")]),
            s("div", { staticClass: "td" }, [t._v("姓名")]),
            s("div", { staticClass: "td" }, [t._v("80%奖金")]),
            s("div", { staticClass: "td" }, [t._v("调整")]),
            s("div", { staticClass: "td" }, [t._v("手术提成")]),
            s("div", { staticClass: "td" }, [t._v("绩效")]),
            s("div", { staticClass: "td" }, [t._v("缺勤费")]),
            s("div", { staticClass: "td" }, [t._v("分娩病房")]),
            s("div", { staticClass: "td" }, [t._v("分娩产房")]),
            s("div", { staticClass: "td" }, [t._v("20%奖金")]),
            s("div", { staticClass: "td" }, [t._v("其他")]),
            s("div", { staticClass: "td" }, [t._v("总数")])
          ]);
        }
      ],
      D = (s("7f7f"), s("ac6a"), s("f499")),
      m = s.n(D),
      I = s("951f"),
      Y = s.n(I),
      C = {
        data: function() {
          return {
            config: [
              { name: "系数", set: "xs" },
              { name: "姓名", set: "name", string: !0 },
              { name: "80%奖金", set: "jj" },
              { name: "调整", set: "tz" },
              { name: "手术提成", set: "sstc" },
              { name: "绩效", set: "jx" },
              { name: "分娩病房", set: "fmbf" },
              { name: "分娩产房", set: "fmcf" },
              { name: "20%奖金", set: "jj2" },
              { name: "其他", set: "qt" },
              { name: "参与分？", set: "qqts" }
            ],
            list: [],
            addItem: {},
            totalObj: {
              jj: 0,
              tz: 0,
              qqJJ: 0,
              sstc: 0,
              jx: 0,
              fmbf: 0,
              fmcf: 0,
              jj2: 0,
              qt: 0,
              total_all: 0
            },
            days: 30,
            step: 0,
            totalNumber: 0
          };
        },
        methods: {
          add: function() {
            var t = this,
              M = {};
            d()(M, this.addItem);
            for (var s = 0; s < this.config.length; s++)
              M[this.config[s].set] = this.config[s].default;
            this.list.push(M),
              setTimeout(function() {
                t.clearAddItem();
              });
          },
          clearAddItem: function() {
            for (var t in this.addItem) this.addItem[t] = "";
          },
          exportData: function() {
            var t = prompt("请输入配置文件名称");
            t && this.downloadData(t, m()(this.list));
          },
          downloadData: function(t, M) {
            function s(t, M) {
              var s = document.createElement("a");
              s.setAttribute(
                "href",
                "data:text/plain;charset=utf-8," + encodeURIComponent(M)
              ),
                s.setAttribute("download", t),
                (s.style.display = "none"),
                document.body.appendChild(s),
                s.click(),
                document.body.removeChild(s);
            }
            s(t, M);
          },
          change: function() {
            var t = this.$refs.file.files[0];
            if (!/text/.test(t.type)) return alert("格式有误"), !1;
            var M = this,
              s = new FileReader();
            s.readAsText(t),
              (s.onload = function() {
                if (
                  confirm("确定导入文件么？导入文件会导致原来的输入内容被覆盖")
                )
                  try {
                    M.list = JSON.parse(this.result);
                  } catch (t) {
                    alert("导入失败！文件内容不匹配");
                  }
              });
          },
          tupian: function() {
            var t = this.$refs.table;
            Y()(t).then(function(t) {
              var M = t.toDataURL("image/png"),
                s = new Image();
              (s.src = M),
                document.body.appendChild(s),
                alert("生成图片成功，请在页面最下方查看");
            });
          },
          deleteItem: function(t) {
            this.list.splice(t, 1);
          },
          clearAll: function() {
            "苏红" ===
            prompt(
              "\n\n您确定要清空所有数据信息吗？一旦清空，无法恢复！！！\n\n请输入您的姓名以清空："
            )
              ? (this.list = [])
              : alert("清空失败，您的输入有误");
          },
          downloadFile: function(t) {
            var M = this,
              s = [
                "系数",
                "姓名",
                "80%奖金",
                "调整",
                "手术提成",
                "绩效",
                "缺勤费",
                "分娩病房",
                "分娩产房",
                "20%奖金",
                "其他",
                "总数"
              ],
              a = s.join("\t") + "\n";
            this.list.forEach(function(t) {
              var s = [];
              s.push(M.so2(t.xs)),
                s.push(t.name),
                s.push(M.so2(t.jj)),
                s.push(M.so2(t.tz)),
                s.push(M.so2(t.sstc)),
                s.push(M.so2(t.jx)),
                s.push(M.so2(t.qqJJ)),
                s.push(M.so2(t.fmbf)),
                s.push(M.so2(t.fmcf)),
                s.push(M.so2(t.jj2)),
                s.push(M.so2(t.qt)),
                s.push(M.so2(t.total_all)),
                (a += s.join("\t") + "\n");
            });
            var i = [
              "总计",
              "--",
              this.so2(this.totalObj.jj),
              this.so2(this.totalObj.tz),
              this.so2(this.totalObj.sstc),
              this.so2(this.totalObj.jx),
              this.so2(this.totalObj.qqJJ),
              this.so2(this.totalObj.fmbf),
              this.so2(this.totalObj.fmcf),
              this.so2(this.totalObj.jj2),
              this.so2(this.totalObj.qt),
              this.so2(this.totalObj.total_all)
            ];
            a += i.join("\t") + "\n";
            var e = prompt("请输入导出文件名称");
            1 === t
              ? this.downloadData(e + ".xls", a)
              : this.downloadData(e, a);
          },
          so2: function(t) {
            return Math.round(1e4 * +t) / 1e4 || 0;
          },
          jsZs: function() {
            function t(t) {
              return t ? +t : 0;
            }
            for (var M = 0, s = 0, a = 0; a < this.list.length; a++) {
              var i = this.list[a];
              (i.total =
                t(i.jj) +
                t(i.tz) +
                t(i.sstc) +
                t(i.jx) +
                t(i.fmbf) +
                t(i.fmcf) +
                t(i.jj2) +
                t(i.qt)),
                (this.totalObj.jj += t(i.jj)),
                (this.totalObj.tz += t(i.tz)),
                (this.totalObj.sstc += t(i.sstc)),
                (this.totalObj.jx += t(i.jx)),
                (this.totalObj.fmbf += t(i.fmbf)),
                (this.totalObj.fmcf += t(i.fmcf)),
                (this.totalObj.jj2 += t(i.jj2)),
                (this.totalObj.qt += t(i.qt)),
                (M += i.total),
                (i.isQq = 0 === +i.qqts),
                i.isQq || (s += t(i.xs));
            }
            for (
              var e = this.totalNumber - M, n = 0;
              n < this.list.length;
              n++
            ) {
              var j = this.list[n];
              j.isQq
                ? (j.qqJJ = 0)
                : ((j.qqJJ = e * t(j.xs) / s),
                  (j.qqJJ = Math.round(100 * j.qqJJ) / 100)),
                (j.total_all = j.total + j.qqJJ),
                (j.total_all = Math.round(100 * j.total_all) / 100),
                (this.totalObj.qqJJ += t(j.qqJJ)),
                (this.totalObj.total_all += t(j.total_all));
            }
            this.step = 1;
          }
        },
        created: function() {
          var t = window.localStorage.getItem("member");
          t && (this.list = JSON.parse(t));
          for (var M = 0; M < this.config.length; M++)
            this.addItem[this.config[M].set] = "";
        },
        mounted: function() {
          (this.imFile = document.getElementById("file")),
            (this.outFile = document.getElementById("downlink"));
        },
        watch: {
          list: {
            deep: !0,
            handler: function() {
              window.localStorage.setItem("member", m()(this.list));
            }
          }
        }
      },
      O = C,
      h = Object(l["a"])(O, L, f, !1, null, null, null),
      p = h.exports;
    a["a"].use(z["a"]);
    var x = [
      { path: "/", name: "index", meta: { title: "中彩票！！" }, component: g },
      {
        path: "/mom",
        name: "shot",
        meta: { title: "奖金计算系统" },
        component: p
      }
    ];
    function A(t, M, s) {
      return s || { x: 0, y: 0 };
    }
    var b = new z["a"]({ scrollBehavior: A, routes: x });
    b.beforeEach(function(t, M, s) {
      t.meta.title && (document.title = t.meta.title), s();
    });
    var _ = b;
    x.map(function(t) {
      return t.path.split("/:")[0];
    }),
      s("8594");
    (a["a"].config.productionTip = !1),
      new a["a"]({
        render: function(t) {
          return t(N);
        },
        router: _
      }).$mount("#app");
  },
  8594: function(t, M, s) {},
  "8fc1": function(t, M, s) {
    "use strict";
    var a = s("3e3f"),
      i = s.n(a);
    i.a;
  }
});
//# sourceMappingURL=app.94ca9025.js.map
