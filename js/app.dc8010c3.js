(function(t) {
  function s(s) {
    for (
      var i, n, c = s[0], o = s[1], l = s[2], u = 0, j = [];
      u < c.length;
      u++
    )
      (n = c[u]), a[n] && j.push(a[n][0]), (a[n] = 0);
    for (i in o) Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i]);
    r && r(s);
    while (j.length) j.shift()();
    return M.push.apply(M, l || []), e();
  }
  function e() {
    for (var t, s = 0; s < M.length; s++) {
      for (var e = M[s], i = !0, c = 1; c < e.length; c++) {
        var o = e[c];
        0 !== a[o] && (i = !1);
      }
      i && (M.splice(s--, 1), (t = n((n.s = e[0]))));
    }
    return t;
  }
  var i = {},
    a = { app: 0 },
    M = [];
  function n(s) {
    if (i[s]) return i[s].exports;
    var e = (i[s] = { i: s, l: !1, exports: {} });
    return t[s].call(e.exports, e, e.exports, n), (e.l = !0), e.exports;
  }
  (n.m = t),
    (n.c = i),
    (n.d = function(t, s, e) {
      n.o(t, s) || Object.defineProperty(t, s, { enumerable: !0, get: e });
    }),
    (n.r = function(t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function(t, s) {
      if ((1 & s && (t = n(t)), 8 & s)) return t;
      if (4 & s && "object" === typeof t && t && t.__esModule) return t;
      var e = Object.create(null);
      if (
        (n.r(e),
        Object.defineProperty(e, "default", { enumerable: !0, value: t }),
        2 & s && "string" != typeof t)
      )
        for (var i in t)
          n.d(
            e,
            i,
            function(s) {
              return t[s];
            }.bind(null, i)
          );
      return e;
    }),
    (n.n = function(t) {
      var s =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return n.d(s, "a", s), s;
    }),
    (n.o = function(t, s) {
      return Object.prototype.hasOwnProperty.call(t, s);
    }),
    (n.p = "/");
  var c = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    o = c.push.bind(c);
  (c.push = s), (c = c.slice());
  for (var l = 0; l < c.length; l++) s(c[l]);
  var r = o;
  M.push([0, "chunk-vendors"]), e();
})({
  0: function(t, s, e) {
    t.exports = e("56d7");
  },
  "3e3f": function(t, s, e) {},
  "56d7": function(t, s, e) {
    "use strict";
    e.r(s);
    e("cadf"), e("551c"), e("097d");
    var i = e("2b0e"),
      a = function() {
        var t = this,
          s = t.$createElement,
          e = t._self._c || s;
        return e("div", { attrs: { id: "app" } }, [e("router-view")], 1);
      },
      M = [],
      n = { name: "app", components: {} },
      c = n,
      o = e("2877"),
      l = Object(o["a"])(c, a, M, !1, null, null, null),
      r = l.exports,
      u = (e("28a5"), e("8c4f")),
      j = function() {
        var t = this,
          s = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      N = [
        function() {
          var t = this,
            s = t.$createElement,
            e = t._self._c || s;
          return e("div", { staticClass: "main" }, [
            e("div", { staticClass: "ball-area" }, [
              e("div", [t._v("**")]),
              e("div", [t._v("**")]),
              e("div", [t._v("**")]),
              e("div", [t._v("**")]),
              e("div", [t._v("**")]),
              e("div", [t._v("**")]),
              e("div", { staticClass: "blue" }, [t._v("**")])
            ]),
            e("div", { attrs: { id: "btn" } }, [t._v("随机选号")])
          ]);
        }
      ],
      d = (e("55dd"), e("5176")),
      z = e.n(d),
      h = {
        name: "app",
        data: function() {
          return {};
        },
        mounted: function() {
          for (
            var t = document.getElementById("btn"),
              s = [],
              e = [],
              i = document.getElementsByClassName("ball-area")[0],
              a = 1;
            a <= 33;
            a++
          )
            s.push(a);
          for (var M = 1; M <= 16; M++) e.push(M);
          function n(t, s) {
            var e = [],
              i = [];
            z()(i, t);
            for (var a = 0; a < s; a++)
              e.push(i.splice(Math.floor(Math.random() * i.length), 1));
            return e;
          }
          t.addEventListener("click", function() {
            for (
              var t = n(s, 6).sort(function(t, s) {
                  return t - s;
                }),
                a = n(e, 1).sort(function(t, s) {
                  return t - s;
                }),
                M = "",
                c = 0;
              c < t.length;
              c++
            ) {
              var o = t[c];
              M += "<div>".concat(o, "</div>");
            }
            (M += '<div class="blue">'.concat(a[0], "</div>")),
              (i.innerHTML = M);
          }),
            document.body.addEventListener("touchmove", function(t) {
              t.preventDefault();
            });
        }
      },
      v = h,
      g = (e("8fc1"), Object(o["a"])(v, j, N, !1, null, null, null)),
      f = g.exports,
      y = function() {
        var t = this,
          s = t.$createElement,
          e = t._self._c || s;
        return t.ok
          ? e("div", { staticClass: "m-main" }, [
              e("header", [
                t._m(0),
                e("div", { staticClass: "mmm" }, [
                  0 === t.step
                    ? e("h1", { staticStyle: { "font-size": "26px" } }, [
                        t._v("奖金计算系统(计算页)")
                      ])
                    : t._e(),
                  1 === t.step
                    ? e("h1", { staticStyle: { "font-size": "26px" } }, [
                        t._v("奖金计算系统(结果页)")
                      ])
                    : t._e()
                ]),
                e("div", { staticClass: "username" }, [
                  t._v("\n      苏红\n    ")
                ])
              ]),
              e(
                "section",
                { staticClass: "w960" },
                [
                  e("div", { staticClass: "tip" }, [
                    t._v(
                      "本网站仅供学习，请勿用于商业用途！由本网站计算造成的后果，网站作者和提供网站者不承担任何责任！"
                    )
                  ]),
                  0 === t.step
                    ? [
                        e(
                          "div",
                          {
                            staticClass: "table",
                            staticStyle: { "margin-bottom": "40px" }
                          },
                          [
                            t._m(1),
                            e("div", { staticClass: "tr" }, [
                              e("div", { staticClass: "td" }, [
                                t._v("版权使用者")
                              ]),
                              e("div", { staticClass: "td" }, [
                                t._v("\n          苏红\n        ")
                              ]),
                              e("div", { staticClass: "td" }, [
                                t._v("奖金总额")
                              ]),
                              e("div", { staticClass: "td" }, [
                                e("input", {
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
                                    input: function(s) {
                                      s.target.composing ||
                                        (t.totalNumber = s.target.value);
                                    }
                                  }
                                }),
                                t._v(" 元\n        ")
                              ])
                            ])
                          ]
                        ),
                        e("div", { staticClass: "table" }, [
                          e(
                            "div",
                            { staticClass: "table-header" },
                            [
                              e(
                                "div",
                                { staticClass: "tr" },
                                [
                                  t._l(t.config, function(s, i) {
                                    return e(
                                      "div",
                                      { key: i, staticClass: "td" },
                                      [t._v(t._s(s.name))]
                                    );
                                  }),
                                  e("div", { staticClass: "td" }, [
                                    t._v("操作")
                                  ])
                                ],
                                2
                              ),
                              t._l(t.list, function(s, i) {
                                return e(
                                  "div",
                                  { key: i, staticClass: "tr" },
                                  [
                                    t._l(t.config, function(i, a) {
                                      return e(
                                        "div",
                                        { key: a, staticClass: "td" },
                                        [
                                          e("label", [
                                            i.string
                                              ? e("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: s[i.set],
                                                      expression: "item[i.set]"
                                                    }
                                                  ],
                                                  attrs: {
                                                    type: "text",
                                                    placeholder: i.name
                                                  },
                                                  domProps: { value: s[i.set] },
                                                  on: {
                                                    input: function(e) {
                                                      e.target.composing ||
                                                        t.$set(
                                                          s,
                                                          i.set,
                                                          e.target.value
                                                        );
                                                    }
                                                  }
                                                })
                                              : e("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: s[i.set],
                                                      expression: "item[i.set]"
                                                    }
                                                  ],
                                                  attrs: {
                                                    type: "number",
                                                    placeholder: i.name
                                                  },
                                                  domProps: { value: s[i.set] },
                                                  on: {
                                                    input: function(e) {
                                                      e.target.composing ||
                                                        t.$set(
                                                          s,
                                                          i.set,
                                                          e.target.value
                                                        );
                                                    }
                                                  }
                                                })
                                          ])
                                        ]
                                      );
                                    }),
                                    e("div", { staticClass: "td" }, [
                                      e(
                                        "a",
                                        {
                                          staticClass: "del",
                                          staticStyle: {
                                            "margin-right": "5px",
                                            color: "#6853ff"
                                          },
                                          attrs: { href: "javascript:;" },
                                          on: {
                                            click: function(s) {
                                              t.add(i);
                                            }
                                          }
                                        },
                                        [t._v("添加")]
                                      ),
                                      e(
                                        "a",
                                        {
                                          staticClass: "del",
                                          attrs: { href: "javascript:;" },
                                          on: {
                                            click: function(s) {
                                              t.deleteItem(i);
                                            }
                                          }
                                        },
                                        [t._v("删除")]
                                      )
                                    ])
                                  ],
                                  2
                                );
                              }),
                              e(
                                "div",
                                {
                                  staticClass: "tr",
                                  staticStyle: { background: "#e8e8e8" }
                                },
                                [
                                  t._l(t.config, function(s, i) {
                                    return e(
                                      "div",
                                      { key: i, staticClass: "td" },
                                      [
                                        e("label", [
                                          "name" === s.set
                                            ? e("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: s.default,
                                                    expression: "item.default"
                                                  }
                                                ],
                                                attrs: {
                                                  type: "text",
                                                  placeholder: "默认" + s.name
                                                },
                                                domProps: { value: s.default },
                                                on: {
                                                  input: function(e) {
                                                    e.target.composing ||
                                                      t.$set(
                                                        s,
                                                        "default",
                                                        e.target.value
                                                      );
                                                  }
                                                }
                                              })
                                            : e("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: s.default,
                                                    expression: "item.default"
                                                  }
                                                ],
                                                attrs: {
                                                  type: "number",
                                                  placeholder: "默认" + s.name
                                                },
                                                domProps: { value: s.default },
                                                on: {
                                                  input: function(e) {
                                                    e.target.composing ||
                                                      t.$set(
                                                        s,
                                                        "default",
                                                        e.target.value
                                                      );
                                                  }
                                                }
                                              })
                                        ])
                                      ]
                                    );
                                  }),
                                  e(
                                    "div",
                                    {
                                      staticClass: "td cp",
                                      on: {
                                        click: function(s) {
                                          t.add(void 0);
                                        }
                                      }
                                    },
                                    [
                                      e(
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
                        e("div", { staticClass: "btn-area" }, [
                          e(
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
                          e("label", { attrs: { for: "file" } }, [
                            e("div", { staticClass: "btn m-btn-orange" }, [
                              t._v("导入数据")
                            ]),
                            e("input", {
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
                              on: { change: t.change }
                            })
                          ]),
                          e(
                            "a",
                            {
                              staticClass: "btn m-btn-blue",
                              attrs: { href: "javascript:;" },
                              on: { click: t.exportData }
                            },
                            [t._v("导出数据")]
                          ),
                          e(
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
                        e("div", { ref: "table", staticClass: "table" }, [
                          e(
                            "div",
                            { staticClass: "table-header" },
                            [
                              t._m(2),
                              t._l(t.list, function(s, i) {
                                return e(
                                  "div",
                                  {
                                    key: i,
                                    staticClass: "tr",
                                    staticStyle: { "background-color": "#fff" }
                                  },
                                  [
                                    e("div", { staticClass: "td" }, [
                                      t._v(t._s(s.name))
                                    ]),
                                    e("div", { staticClass: "td" }, [
                                      t._v(t._s(t.so2(s.xs)))
                                    ]),
                                    e("div", { staticClass: "td" }, [
                                      t._v(t._s(t.so2(s.jj)))
                                    ]),
                                    e("div", { staticClass: "td" }, [
                                      t._v(t._s(t.so2(s.tz)))
                                    ]),
                                    e("div", { staticClass: "td" }, [
                                      t._v(t._s(t.so2(s.sstc)))
                                    ]),
                                    e("div", { staticClass: "td" }, [
                                      t._v(t._s(t.so2(s.jx)))
                                    ]),
                                    e("div", { staticClass: "td" }, [
                                      t._v(t._s(t.so2(s.qqJJ)))
                                    ]),
                                    e("div", { staticClass: "td" }, [
                                      t._v(t._s(t.so2(s.fmbf)))
                                    ]),
                                    e("div", { staticClass: "td" }, [
                                      t._v(t._s(t.so2(s.fmcf)))
                                    ]),
                                    e("div", { staticClass: "td" }, [
                                      t._v(t._s(t.so2(s.jj2)))
                                    ]),
                                    e("div", { staticClass: "td" }, [
                                      t._v(t._s(t.so2(s.qt)))
                                    ]),
                                    e("div", { staticClass: "td" }, [
                                      t._v(t._s(t.so2(s.kqx)))
                                    ]),
                                    e("div", { staticClass: "td" }, [
                                      t._v(t._s(t.so2(s.total_all)))
                                    ])
                                  ]
                                );
                              }),
                              e("div", { staticClass: "tr" }, [
                                e("div", { staticClass: "td" }, [t._v("总计")]),
                                e("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(t.totalObj.xs)))
                                ]),
                                e("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(t.totalObj.jj)))
                                ]),
                                e("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(t.totalObj.tz)))
                                ]),
                                e("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(t.totalObj.sstc)))
                                ]),
                                e("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(t.totalObj.jx)))
                                ]),
                                e("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(t.totalObj.qqJJ)))
                                ]),
                                e("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(t.totalObj.fmbf)))
                                ]),
                                e("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(t.totalObj.fmcf)))
                                ]),
                                e("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(t.totalObj.jj2)))
                                ]),
                                e("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(t.totalObj.qt)))
                                ]),
                                e("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(t.totalObj.kqx)))
                                ]),
                                e("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(t.totalObj.total_all)))
                                ])
                              ])
                            ],
                            2
                          )
                        ]),
                        e("div", { staticClass: "btn-area" }, [
                          e(
                            "a",
                            {
                              staticClass: "btn m-btn-blue",
                              attrs: { href: "javascript:;" },
                              on: {
                                click: function(s) {
                                  t.downloadFile(1);
                                }
                              }
                            },
                            [t._v("生成Excel(测试版)")]
                          ),
                          e(
                            "a",
                            {
                              staticClass: "btn m-btn-green",
                              attrs: { href: "javascript:;" },
                              on: { click: t.downloadFile }
                            },
                            [t._v("生成文本文档")]
                          ),
                          e(
                            "a",
                            {
                              staticClass: "btn m-btn-white",
                              staticStyle: { color: "#787878" },
                              attrs: { href: "javascript:;" },
                              on: { click: t.tupian }
                            },
                            [t._v("生成图片")]
                          ),
                          e(
                            "a",
                            {
                              staticClass: "btn m-btn-red",
                              attrs: { href: "javascript:;" },
                              on: {
                                click: function(s) {
                                  t.step = 0;
                                }
                              }
                            },
                            [t._v("返回")]
                          )
                        ])
                      ],
                  e("a", { attrs: { id: "downlink" } })
                ],
                2
              )
            ])
          : t._e();
      },
      T = [
        function() {
          var t = this,
            s = t.$createElement,
            e = t._self._c || s;
          return e("div", { staticClass: "logo" }, [
            e("img", {
              attrs: {
                src:
                  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMC4wMHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTM4Mi40ODA0MjcgNjk4LjY4OGMtOC42NjEzMzMgMC4yNzczMzMtMTYuMzQxMzMzIDcuNzg2NjY3LTE3LjUxNDY2NyAxNi45Mzg2NjctMS4wODggOS4wODggNC44MjEzMzMgMTYuMzg0IDEzLjU0NjY2NyAxNi4yNTYgOC44NzQ2NjctMC4xNDkzMzMgMTYuODk2LTcuODcyIDE4LjAyNjY2Ni0xNy4xNzMzMzQgMC45MTczMzMtOS4yOC01LjM5NzMzMy0xNi41MTItMTQuMDU4NjY2LTE2LjAyMTMzM3pNMzIzLjUzNjQyNyA3MDkuMDk4NjY3Yy0yNi42NjY2NjcgMS4yNTg2NjctNTAuODE2IDI0LjUxMi01NC4yOTMzMzQgNTIuNTY1MzMzLTMuNjI2NjY3IDI4LjIyNCAxNS4xNjggNTAuODU4NjY3IDQyLjAyNjY2NyA1MC4zODkzMzMgMjcuMjQyNjY3LTAuNDI2NjY3IDUyLjM1Mi0yNC4yOTg2NjcgNTUuNjgtNTMuMDk4NjY2IDIuOTg2NjY3LTI4Ljg2NC0xNi4zNjI2NjctNTAuOTg2NjY3LTQzLjQxMzMzMy00OS44NTZ6IiBmaWxsPSIjRkZGRkZGIiAvPjxwYXRoIGQ9Ik03NjYuNDU5MDkzIDY3My42ODUzMzNjLTEyLjIwMjY2Ny0xMjcuNTk0NjY3LTE4My44NTA2NjctMjE1LjUzMDY2Ny0zODMuNDAyNjY2LTE5Ni40MzczMzMtMTk5LjU1MiAxOS4wOTMzMzMtMzUxLjQyNCAxMzcuOTg0LTMzOS4yMjEzMzQgMjY1LjYgMTIuMjI0IDEyNy41OTQ2NjcgMTgzLjg3MiAyMTUuNTUyIDM4My40MjQgMTk2LjQ1ODY2NyAxOTkuNTUyLTE5LjExNDY2NyAzNTEuNDI0LTEzOC4wMDUzMzMgMzM5LjItMjY1LjYyMTMzNHogbS0yNTEuMTM2IDQ5LjQ1MDY2N2MtOS4wNjY2NjcgODMuMDI5MzMzLTg5LjIzNzMzMyAxNTEuMzM4NjY3LTE3NS44NTA2NjYgMTUwLjk3Ni04My42MDUzMzMtMC4zMi0xMzkuNTYyNjY3LTY0Ljk4MTMzMy0xMjcuODA4LTE0Mi45OTczMzMgMTEuNTQxMzMzLTc2LjUyMjY2NyA4NC40OC0xNDAuODg1MzMzIDE2NS43MTczMzMtMTQ1LjIzNzMzNCA4NC4wNTMzMzMtNC42OTMzMzMgMTQ3LjAwOCA1NS45Nzg2NjcgMTM3Ljk0MTMzMyAxMzcuMjU4NjY3eiIgZmlsbD0iI0ZGRkZGRiIgLz48cGF0aCBkPSJNMTAyMi4wOTY0MjcgMzEzLjg3NzMzM2MtMzMuNjg1MzMzLTE4OC4yMjQtMTgzLjMzODY2Ny0yNjMuNzg2NjY3LTI4Ny4wNC0yNzAuOTk3MzMzLTE5LjQ5ODY2Ny0xLjg3NzMzMy0zNy42MTA2NjcgOS44NzczMzMtNDAuMjk4NjY3IDI4LjcxNDY2Ny0yLjU4MTMzMyAxOC4zMjUzMzMgMTAuNTM4NjY3IDM2LjU2NTMzMyAyOC43MTQ2NjcgNDAuMjk4NjY2IDY3Ljg0IDE0Ljk3NiAxOTYuMjAyNjY3IDM0LjczMDY2NyAyMzAuMTY1MzMzIDIyNS43NDkzMzQgMi45NjUzMzMgMTkuMzcwNjY3IDE4LjkyMjY2NyA0MC4wMjEzMzMgNDMuMDUwNjY3IDM0Ljc3MzMzMyAxNy42NjQtMy45MDQgMzMuNDUwNjY3LTEzLjcxNzMzMyAyNS40MDgtNTguNTM4NjY3ek03MjAuMzc5MDkzIDI2MS4yOTA2NjdhMjQuMzYyNjY3IDI0LjM2MjY2NyAwIDAgMC0yNy40OTg2NjYgMTcuNDUwNjY2Yy0zLjk0NjY2NyAxMy4xNDEzMzMgMy4zMjggMjguMTgxMzMzIDE2LjY4MjY2NiAzMC45NzYgMjguMzczMzMzIDUuOTMwNjY3IDQyLjI2MTMzMyAyNS40OTMzMzMgNDYuMzc4NjY3IDQ2LjM1NzMzNCAwIDAgMy42MjY2NjcgMTQuMTQ0IDE3LjI1ODY2NyAxOC4wNDggMTMuMzMzMzMzIDMuODE4NjY3IDM3LjQxODY2Ny02LjAzNzMzMyAzMC40ODUzMzMtMzIuMjk4NjY3LTYuODkwNjY3LTM1LjczMzMzMy00Mi40MTA2NjctNzQuMTEyLTgzLjMwNjY2Ny04MC41MzMzMzN6IiBmaWxsPSIjRTc5MDE0IiAvPjxwYXRoIGQ9Ik03MzcuNjM3NzYgMTYwLjQyNjY2N2MtMjkuNzgxMzMzLTUuMTQxMzMzLTQzLjQxMzMzMyAxNi4yMTMzMzMtNDMuNDEzMzMzIDMzLjI1ODY2NiAwIDE3LjAyNCAxMi4xNiAyOS4zMTIgMzQuNjAyNjY2IDM1LjU2MjY2NyA1OS42MDUzMzMgMTYuNTMzMzMzIDk3Ljg3NzMzMyA0Mi42NjY2NjcgMTA4LjM3MzMzNCAxMTEuNjggMy4wNTA2NjcgMjAuMDMyIDIxLjM1NDY2NyAzMC43MiAzNC42NDUzMzMgMzAuNzIgMTcuOTQxMzMzIDAgMzIuNDY5MzMzLTE0LjU0OTMzMyAzMi40NjkzMzMtMzIuNDY5MzMzIDAtMC42NjEzMzMtMC4wNjQtMS4zMjI2NjctMC4xMDY2NjYtMS45NjI2NjdsMC4xNzA2NjYtMC4wNDI2NjdjLTExLjM0OTMzMy04OC41MzMzMzMtNzcuNjk2LTE2MS4zNjUzMzMtMTY2Ljc0MTMzMy0xNzYuNzQ2NjY2eiIgZmlsbD0iI0U3OTAxNCIgLz48cGF0aCBkPSJNNzMxLjYwMDQyNyA2OTcuNDcyYy0xMS45NjggMTI0LjA1MzMzMy0xODguODQyNjY3IDIyMy4zODEzMzMtMzgwLjY1MDY2NyAyMTguNDk2LTE3Ny43NDkzMzMtNC4zOTQ2NjctMjk2LjE5Mi05Ny45ODQtMjc2LjU2NTMzMy0yMDYuNTcwNjY3IDE5LjEzNi0xMDUuNDcyIDE2NC40MTYtMTk2LjYyOTMzMyAzMzUuMjk2LTIwNi43MiAxODMuNTUyLTEwLjgxNiAzMzMuNTg5MzMzIDc0LjU4MTMzMyAzMjEuOTIgMTk0Ljc5NDY2N3ogbS0yNy45NjgtMTk4LjgwNTMzM2MtNy4wODI2NjcgMC4xOTItMTAuMDY5MzMzIDEuMDI0LTExLjEzNi0xLjUxNDY2Ny0wLjg3NDY2Ny0yLjA2OTMzMyAwLjE3MDY2Ny00LjMzMDY2NyAzLjk4OTMzMy0xMy45NzMzMzMgMTAuNjQ1MzMzLTI2Ljg1ODY2NyAyNy41NjI2NjctODIuMDY5MzMzLTcuMjMyLTExMi44NzQ2NjctMjIuOTU0NjY3LTIwLjMzMDY2Ny0xMjAuMTQ5MzMzLTM1Ljg0LTIyMi41NzA2NjcgMzUuMi01LjA5ODY2NyAzLjU0MTMzMy0xMy4zNzYgMTEuMDkzMzMzLTE3LjU1NzMzMyA5LjcwNjY2Ny00LjYwOC0xLjU1NzMzMy01LjU4OTMzMy02LjUyOC02LjIwOC0xNS45MTQ2NjctMy4zNDkzMzMtNTAuNjAyNjY3IDM5LjIxMDY2Ny0xOTEuMjMyLTcwLjU3MDY2Ny0xNzkuNTYyNjY3LTExNi42OTMzMzMgMTkuNzU0NjY3LTI3NC4xMzMzMzMgMjA0LjE2LTMxOS4xMjUzMzMgMjkzLjM1NDY2Ny0xNTkuNjggMzE2LjQ1ODY2NyA3MS4yMzIgNDQ1LjM5NzMzMyAyOTcuMTA5MzMzIDQ1Mi4xMzg2NjcgMjQ1LjA1NiA3LjIzMiA0OTMuMzEyLTEzMS45MDQgNTI1Ljk1Mi0zMTguMDM3MzM0IDIxLjc4MTMzMy0xMjQuMjQ1MzMzLTEyNC40OC0xNDkuNTg5MzMzLTE3Mi42NTA2NjYtMTQ4LjUyMjY2NnoiIGZpbGw9IiNENjI2MjkiIC8+PHBhdGggZD0iTTM3Ny4zODE3NiA1ODUuODc3MzMzYy04MS4yMzczMzMgNC4zNzMzMzMtMTU0LjE3NiA2OC43MTQ2NjctMTY1LjcxNzMzMyAxNDUuMjM3MzM0LTExLjczMzMzMyA3OC4wMTYgNDQuMjAyNjY3IDE0Mi42NzczMzMgMTI3LjgwOCAxNDIuOTk3MzMzIDg2LjYxMzMzMyAwLjM2MjY2NyAxNjYuNzg0LTY3Ljk0NjY2NyAxNzUuODUwNjY2LTE1MC45NzYgOS4wNjY2NjctODEuMjgtNTMuODg4LTE0MS45NTItMTM3Ljk0MTMzMy0xMzcuMjU4NjY3eiBtLTEwLjQzMiAxNzMuMDc3MzM0Yy0zLjMyOCAyOC44LTI4LjQzNzMzMyA1Mi42NTA2NjctNTUuNjggNTMuMDk4NjY2LTI2Ljg4IDAuNDY5MzMzLTQ1LjY3NDY2Ny0yMi4xNjUzMzMtNDIuMDI2NjY3LTUwLjM4OTMzMyAzLjQ3NzMzMy0yOC4wNTMzMzMgMjcuNjI2NjY3LTUxLjMwNjY2NyA1NC4yOTMzMzQtNTIuNTY1MzMzIDI3LjA1MDY2Ny0xLjEzMDY2NyA0Ni40IDIwLjk5MiA0My40MTMzMzMgNDkuODU2eiBtMTEuNTYyNjY3LTI3LjA5MzMzNGMtOC43MDQgMC4xMjgtMTQuNjEzMzMzLTcuMTY4LTEzLjU0NjY2Ny0xNi4yNTYgMS4xNzMzMzMtOS4xMzA2NjcgOC44NTMzMzMtMTYuNjYxMzMzIDE3LjUxNDY2Ny0xNi45Mzg2NjYgOC42NC0wLjQ5MDY2NyAxNC45NzYgNi43NDEzMzMgMTQuMDU4NjY2IDE2LTEuMTMwNjY3IDkuMzIyNjY3LTkuMTUyIDE3LjA0NTMzMy0xOC4wMjY2NjYgMTcuMTk0NjY2eiIgZmlsbD0iIzAzMDAwMCIgLz48L3N2Zz4=",
                alt: "logo"
              }
            })
          ]);
        },
        function() {
          var t = this,
            s = t.$createElement,
            e = t._self._c || s;
          return e("div", { staticClass: "tr" }, [
            e("div", { staticClass: "td" }, [t._v("默认配置")])
          ]);
        },
        function() {
          var t = this,
            s = t.$createElement,
            e = t._self._c || s;
          return e("div", { staticClass: "tr" }, [
            e("div", { staticClass: "td" }, [t._v("姓名")]),
            e("div", { staticClass: "td" }, [t._v("系数")]),
            e("div", { staticClass: "td" }, [t._v("80%奖金")]),
            e("div", { staticClass: "td" }, [t._v("调整")]),
            e("div", { staticClass: "td" }, [t._v("手术提成")]),
            e("div", { staticClass: "td" }, [t._v("绩效")]),
            e("div", { staticClass: "td" }, [t._v("缺勤费")]),
            e("div", { staticClass: "td" }, [t._v("分娩病房")]),
            e("div", { staticClass: "td" }, [t._v("分娩产房")]),
            e("div", { staticClass: "td" }, [t._v("20%奖金")]),
            e("div", { staticClass: "td" }, [t._v("增加项")]),
            e("div", { staticClass: "td" }, [t._v("扣钱项")]),
            e("div", { staticClass: "td" }, [t._v("总数")])
          ]);
        }
      ],
      p = (e("7f7f"), e("ac6a"), e("f499")),
      m = e.n(p),
      L = e("75fc"),
      D = e("951f"),
      C = e.n(D),
      I = {
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
              { name: "增加项(正)", set: "qt" },
              { name: "扣钱项(负)", set: "kqx" },
              { name: "全勤？", set: "qqts" }
            ],
            list: [],
            file1: null,
            ok: 0,
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
              xs: 0,
              kqx: 0,
              total_all: 0
            },
            days: 30,
            step: 0,
            totalNumber: 0
          };
        },
        methods: {
          add: function(t) {
            var s = this,
              e = {};
            z()(e, this.addItem);
            for (var i = 0; i < this.config.length; i++)
              e[this.config[i].set] = this.config[i].default;
            if (0 === t) {
              var a = [];
              z()(a, this.list), (this.list = [e].concat(a));
            } else if (t) {
              var M = [];
              z()(M, this.list),
                (this.list = [].concat(
                  Object(L["a"])(M.slice(0, t)),
                  [e],
                  Object(L["a"])(M.slice(t))
                ));
            } else this.list.push(e);
            setTimeout(function() {
              s.clearAddItem();
            });
          },
          clearAddItem: function() {
            for (var t in this.addItem) this.addItem[t] = "";
          },
          exportData: function() {
            var t = prompt("请输入配置文件名称");
            t && this.downloadData(t, m()(this.list));
          },
          downloadData: function(t, s) {
            function e(t, s) {
              var e = document.createElement("a");
              e.setAttribute(
                "href",
                "data:text/plain;charset=utf-8," + encodeURIComponent(s)
              ),
                e.setAttribute("download", t),
                (e.style.display = "none"),
                document.body.appendChild(e),
                e.click(),
                document.body.removeChild(e);
            }
            e(t, s);
          },
          change: function() {
            var t = this.$refs.file.files[0];
            if (!/text/.test(t.type)) return alert("格式有误"), !1;
            var s = this,
              e = new FileReader();
            e.readAsText(t),
              (e.onload = function() {
                if (
                  confirm("确定导入文件么？导入文件会导致原来的输入内容被覆盖")
                )
                  try {
                    s.list = JSON.parse(this.result);
                  } catch (t) {
                    alert("导入失败！文件内容不匹配");
                  }
              });
          },
          tupian: function() {
            var t = this.$refs.table;
            C()(t).then(function(t) {
              var s = t.toDataURL("image/png"),
                e = new Image();
              (e.src = s),
                document.body.appendChild(e),
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
            var s = this,
              e = [
                "姓名",
                "系数",
                "80%奖金",
                "调整",
                "手术提成",
                "绩效",
                "缺勤费",
                "分娩病房",
                "分娩产房",
                "20%奖金",
                "增加项",
                "扣钱项",
                "总数"
              ],
              i = e.join("\t") + "\n";
            this.list.forEach(function(t) {
              var e = [];
              e.push(t.name),
                e.push(s.so2(t.xs)),
                e.push(s.so2(t.jj)),
                e.push(s.so2(t.tz)),
                e.push(s.so2(t.sstc)),
                e.push(s.so2(t.jx)),
                e.push(s.so2(t.qqJJ)),
                e.push(s.so2(t.fmbf)),
                e.push(s.so2(t.fmcf)),
                e.push(s.so2(t.jj2)),
                e.push(s.so2(t.qt)),
                e.push(s.so2(t.kqx)),
                e.push(s.so2(t.total_all)),
                (i += e.join("\t") + "\n");
            });
            var a = [
              "总计",
              this.so2(this.totalObj.xs),
              this.so2(this.totalObj.jj),
              this.so2(this.totalObj.tz),
              this.so2(this.totalObj.sstc),
              this.so2(this.totalObj.jx),
              this.so2(this.totalObj.qqJJ),
              this.so2(this.totalObj.fmbf),
              this.so2(this.totalObj.fmcf),
              this.so2(this.totalObj.jj2),
              this.so2(this.totalObj.qt),
              this.so2(this.totalObj.kqx),
              this.so2(this.totalObj.total_all)
            ];
            i += a.join("\t") + "\n";
            var M = prompt("请输入导出文件名称");
            M || alert("未输入文件名"),
              1 === t
                ? this.downloadData(M + ".xls", i)
                : this.downloadData(M, i);
          },
          so2: function(t) {
            return Math.round(1e6 * +t) / 1e6 || 0;
          },
          jsZs: function() {
            if (
              confirm(
                '本网站仅供学习，请勿用于商业用途！ \n 由本网站计算造成的后果，网站作者和提供网站者不承担任何责任！ \n 点击下方的"确定"即代表已阅读并同意 \n 您确认进行计算么？'
              )
            ) {
              for (var t = 0, s = 0, e = 0; e < this.list.length; e++) {
                var i = this.list[e];
                (i.total =
                  c(i.jj) +
                  c(i.tz) +
                  c(i.sstc) +
                  c(i.jx) +
                  c(i.fmbf) +
                  c(i.fmcf) +
                  c(i.jj2) +
                  c(i.qt)),
                  (this.totalObj.jj += c(i.jj)),
                  (this.totalObj.tz += c(i.tz)),
                  (this.totalObj.sstc += c(i.sstc)),
                  (this.totalObj.jx += c(i.jx)),
                  (this.totalObj.fmbf += c(i.fmbf)),
                  (this.totalObj.fmcf += c(i.fmcf)),
                  (this.totalObj.jj2 += c(i.jj2)),
                  (this.totalObj.qt += c(i.qt)),
                  (this.totalObj.xs += c(i.xs)),
                  (t += i.total),
                  (i.isQq = 0 === +i.qqts),
                  i.isQq || (s += c(i.xs));
              }
              for (
                var a = this.totalNumber - t, M = 0;
                M < this.list.length;
                M++
              ) {
                var n = this.list[M];
                n.isQq
                  ? (n.qqJJ = 0)
                  : ((n.qqJJ = a * c(n.xs) / s),
                    (n.qqJJ = Math.round(100 * n.qqJJ) / 100)),
                  (n.total_all = n.total + n.qqJJ + +n.kqx),
                  (n.total_all = Math.round(100 * n.total_all) / 100),
                  (this.totalObj.qqJJ += c(n.qqJJ)),
                  (this.totalObj.total_all += c(n.total_all)),
                  (this.totalObj.kqx += c(n.kqx));
              }
              this.step = 1;
            }
            function c(t) {
              return t ? +t : 0;
            }
          }
        },
        created: function() {
          "dengziyang" === prompt("请输入密码")
            ? (this.ok = 1)
            : alert("密码输入错误");
          var t = window.localStorage.getItem("member");
          t && (this.list = JSON.parse(t));
          for (var s = 0; s < this.config.length; s++)
            this.addItem[this.config[s].set] = "";
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
          },
          step: function() {
            0 === this.step &&
              (this.totalObj = {
                jj: 0,
                xs: 0,
                tz: 0,
                qqJJ: 0,
                sstc: 0,
                jx: 0,
                fmbf: 0,
                fmcf: 0,
                jj2: 0,
                qt: 0,
                kqx: 0,
                total_all: 0
              });
          }
        }
      },
      x = I,
      Y = Object(o["a"])(x, y, T, !1, null, null, null),
      _ = Y.exports,
      b = function() {
        var t = this,
          s = t.$createElement,
          e = t._self._c || s;
        return e(
          "div",
          [
            e("h1", [t._v("213123123123123123123123123")]),
            e("h1", [t._v("213123123123123123123123123")]),
            e("slider", { attrs: { value: "50" } }),
            e("h1", [t._v("213123123123123123123123123")]),
            e("h1", [t._v("213123123123123123123123123")]),
            e("h1", [t._v("213123123123123123123123123")]),
            e("h1", [t._v("213123123123123123123123123")]),
            e("slider", { attrs: { value: "80" } }),
            e("h1", [t._v("213123123123123123123123123")]),
            e("h1", [t._v("213123123123123123123123123")]),
            e("h1", [t._v("213123123123123123123123123")]),
            e("h1", [t._v("213123123123123123123123123")])
          ],
          1
        );
      },
      O = [],
      A = function() {
        var t = this,
          s = t.$createElement,
          e = t._self._c || s;
        return e("div", { staticClass: "slider-content" }, [
          e(
            "div",
            {
              staticClass: "slider-container",
              on: {
                click: t.changePc,
                mousemove: function(s) {
                  return s.stopPropagation(), t.onDrag(s);
                },
                mouseleave: t.stopDrag,
                mouseup: t.stopDrag
              }
            },
            [
              e(
                "div",
                {
                  ref: "rail",
                  staticClass: "slider-rail",
                  style: [{ backgroundColor: t.backgroundColor }]
                },
                [
                  e(
                    "div",
                    {
                      ref: "process",
                      staticClass: "slider-process",
                      style: [
                        { backgroundColor: t.activeColor },
                        { width: 100 * t.percent_show + "%" }
                      ]
                    },
                    [
                      e("i", {
                        ref: "ctrl",
                        staticClass: "slider-controller",
                        style: [
                          { backgroundColor: t.blockColor },
                          { width: t.blockSize + "px" },
                          { height: t.blockSize + "px" }
                        ],
                        on: {
                          touchstart: t.startDrag,
                          mousedown: t.startDrag,
                          mouseup: t.stopDrag,
                          touchmove: t.onDrag,
                          touchend: t.stopDrag,
                          click: function(t) {
                            t.stopPropagation();
                          }
                        }
                      })
                    ]
                  )
                ]
              )
            ]
          ),
          t.showValue
            ? e("div", { staticClass: "slider-number" }, [t._v(t._s(t.output))])
            : t._e()
        ]);
      },
      w = [],
      k = e("0a0d"),
      E = e.n(k),
      S = (e("c5f6"),
      {
        name: "slider",
        data: function() {
          return {
            percent: 0,
            percent_record: 0,
            percent_show: 0,
            dragging: !1,
            change_record: "",
            changing_record: "",
            startX: 0,
            ts: 0,
            disablePageScroll: !1,
            listener: !1,
            canmove: !0
          };
        },
        computed: {
          output: function() {
            return (
              +this.min +
              Math.round(this.percent_show * (+this.max - +this.min) * 1e4) /
                1e4
            );
          }
        },
        props: {
          min: { type: [Number, String], default: 0, required: !1 },
          max: { type: [Number, String], default: 100 },
          step: { type: [Number, String], default: 1 },
          disabled: { type: [Boolean, String], default: !1 },
          value: { type: [Number, String], default: 0 },
          activeColor: { type: String, default: "#1aad19" },
          backgroundColor: { type: String, default: "#e9e9e9" },
          blockSize: { type: [Number, String], default: 28 },
          blockColor: { type: String, default: "#ffffff" },
          showValue: { type: [Boolean, String], default: !0 }
        },
        methods: {
          startDrag: function(t) {
            if (!this.disabled) {
              var s = t.changedTouches ? t.changedTouches[0] : t;
              (this.startX = s.pageX), (this.dragging = !0);
            }
          },
          onDrag: function(t) {
            if (!this.disabled && this.canmove) {
              var s = t.changedTouches ? t.changedTouches[0] : t,
                e = s.pageX - this.startX;
              E()() - this.ts < 100 ||
                (Math.abs(e) > 10 && (this.disablePageScroll = !0),
                this.disablePageScroll &&
                  (t.preventDefault(),
                  this.dragging &&
                    ((this.percent =
                      e / this.$refs.rail.offsetWidth + this.percent_record),
                    this.setWatch_percent(),
                    this.emitChange())));
            }
          },
          stopDrag: function() {
            (this.disablePageScroll = !1),
              this.disabled ||
                (this.dragging &&
                  ((this.dragging = !1),
                  (this.percent_record = this.percent),
                  this.emitChange(!0)));
          },
          setWatch_percent: function() {
            if (
              ((this.percent = this.percent > 1 ? 1 : this.percent),
              (this.percent = this.percent < 0 ? 0 : this.percent),
              this.step)
            ) {
              var t = +this.step / (+this.max - +this.min);
              (this.percent_show = Math.floor(this.percent / t) * t),
                (1 !== this.percent && 0 !== this.percent) ||
                  (this.percent_show = this.percent);
            } else this.percent_show = this.percent;
          },
          changePc: function(t) {
            this.disabled ||
              ((this.percent = t.offsetX / this.$refs.rail.offsetWidth),
              this.setWatch_percent(),
              (this.percent_record = this.percent),
              this.emitChange(!0));
          },
          emitChange: function(t) {
            t
              ? this.change_record !== this.output &&
                (this.$emit("change", { detail: { value: this.output } }),
                (this.change_record = this.output))
              : this.changing_record !== this.output &&
                (this.$emit("changing", { detail: { value: this.output } }),
                (this.changing_record = this.output));
          }
        },
        created: function() {
          var t = this;
          window.onscroll = function() {
            (t.ts = E()()), (t.canmove = !1);
            var s = function s() {
              (t.canmove = !0),
                document.body.removeEventListener("touchend", s);
            };
            document.body.addEventListener("touchend", s);
          };
          var s = +this.value;
          s || (s = this.min),
            (this.percent = (+s - +this.min) / (+this.max - +this.min)),
            (this.percent_record = this.percent),
            (this.percent_show = this.percent);
        }
      }),
      Q = S,
      U = (e("80fc"), Object(o["a"])(Q, A, w, !1, null, "107d57d0", null)),
      q = U.exports,
      J = {
        name: "app",
        data: function() {
          return {};
        },
        methods: {},
        created: function() {},
        components: { slider: q },
        watch: {}
      },
      P = J,
      B = (e("9379"), Object(o["a"])(P, b, O, !1, null, "13ff963c", null)),
      Z = B.exports;
    i["a"].use(u["a"]);
    var $ = [
      { path: "/", name: "index", meta: { title: "中彩票！！" }, component: f },
      {
        path: "/mom",
        name: "shot",
        meta: { title: "奖金计算系统" },
        component: _
      },
      { path: "/test", name: "test", meta: { title: "test" }, component: Z }
    ];
    function G(t, s, e) {
      return e || { x: 0, y: 0 };
    }
    var R = new u["a"]({ scrollBehavior: G, routes: $ });
    R.beforeEach(function(t, s, e) {
      t.meta.title && (document.title = t.meta.title), e();
    });
    var F = R;
    $.map(function(t) {
      return t.path.split("/:")[0];
    }),
      e("8594");
    (i["a"].config.productionTip = !1),
      new i["a"]({
        render: function(t) {
          return t(r);
        },
        router: F
      }).$mount("#app");
  },
  "6ccc": function(t, s, e) {},
  "80fc": function(t, s, e) {
    "use strict";
    var i = e("6ccc"),
      a = e.n(i);
    a.a;
  },
  8594: function(t, s, e) {},
  "8fc1": function(t, s, e) {
    "use strict";
    var i = e("3e3f"),
      a = e.n(i);
    a.a;
  },
  9379: function(t, s, e) {
    "use strict";
    var i = e("b918"),
      a = e.n(i);
    a.a;
  },
  b918: function(t, s, e) {}
});
//# sourceMappingURL=app.dc8010c3.js.map
