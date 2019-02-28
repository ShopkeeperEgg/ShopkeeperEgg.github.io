(function(t) {
  function s(s) {
    for (
      var a, n, j = s[0], l = s[1], c = s[2], N = 0, z = [];
      N < j.length;
      N++
    )
      (n = j[N]), i[n] && z.push(i[n][0]), (i[n] = 0);
    for (a in l) Object.prototype.hasOwnProperty.call(l, a) && (t[a] = l[a]);
    o && o(s);
    while (z.length) z.shift()();
    return e.push.apply(e, c || []), M();
  }
  function M() {
    for (var t, s = 0; s < e.length; s++) {
      for (var M = e[s], a = !0, j = 1; j < M.length; j++) {
        var l = M[j];
        0 !== i[l] && (a = !1);
      }
      a && (e.splice(s--, 1), (t = n((n.s = M[0]))));
    }
    return t;
  }
  var a = {},
    i = { app: 0 },
    e = [];
  function n(s) {
    if (a[s]) return a[s].exports;
    var M = (a[s] = { i: s, l: !1, exports: {} });
    return t[s].call(M.exports, M, M.exports, n), (M.l = !0), M.exports;
  }
  (n.m = t),
    (n.c = a),
    (n.d = function(t, s, M) {
      n.o(t, s) || Object.defineProperty(t, s, { enumerable: !0, get: M });
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
      var M = Object.create(null);
      if (
        (n.r(M),
        Object.defineProperty(M, "default", { enumerable: !0, value: t }),
        2 & s && "string" != typeof t)
      )
        for (var a in t)
          n.d(
            M,
            a,
            function(s) {
              return t[s];
            }.bind(null, a)
          );
      return M;
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
  var j = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = j.push.bind(j);
  (j.push = s), (j = j.slice());
  for (var c = 0; c < j.length; c++) s(j[c]);
  var o = l;
  e.push([0, "chunk-vendors"]), M();
})({
  0: function(t, s, M) {
    t.exports = M("56d7");
  },
  "3e3f": function(t, s, M) {},
  "56d7": function(t, s, M) {
    "use strict";
    M.r(s);
    M("cadf"), M("551c"), M("097d");
    var a = M("2b0e"),
      i = function() {
        var t = this,
          s = t.$createElement,
          M = t._self._c || s;
        return M("div", { attrs: { id: "app" } }, [M("router-view")], 1);
      },
      e = [],
      n = { name: "app", components: {} },
      j = n,
      l = M("2877"),
      c = Object(l["a"])(j, i, e, !1, null, null, null),
      o = c.exports,
      N = (M("28a5"), M("8c4f")),
      z = function() {
        var t = this,
          s = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      u = [
        function() {
          var t = this,
            s = t.$createElement,
            M = t._self._c || s;
          return M("div", { staticClass: "main" }, [
            M("div", { staticClass: "ball-area" }, [
              M("div", [t._v("**")]),
              M("div", [t._v("**")]),
              M("div", [t._v("**")]),
              M("div", [t._v("**")]),
              M("div", [t._v("**")]),
              M("div", [t._v("**")]),
              M("div", { staticClass: "blue" }, [t._v("**")])
            ]),
            M("div", { attrs: { id: "btn" } }, [t._v("随机选号")])
          ]);
        }
      ],
      r = (M("55dd"), M("5176")),
      d = M.n(r),
      v = {
        name: "app",
        data: function() {
          return {};
        },
        mounted: function() {
          for (
            var t = document.getElementById("btn"),
              s = [],
              M = [],
              a = document.getElementsByClassName("ball-area")[0],
              i = 1;
            i <= 33;
            i++
          )
            s.push(i);
          for (var e = 1; e <= 16; e++) M.push(e);
          function n(t, s) {
            var M = [],
              a = [];
            d()(a, t);
            for (var i = 0; i < s; i++)
              M.push(a.splice(Math.floor(Math.random() * a.length), 1));
            return M;
          }
          t.addEventListener("click", function() {
            for (
              var t = n(s, 6).sort(function(t, s) {
                  return t - s;
                }),
                i = n(M, 1).sort(function(t, s) {
                  return t - s;
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
      T = (M("8fc1"), Object(l["a"])(y, z, u, !1, null, null, null)),
      g = T.exports,
      f = function() {
        var t = this,
          s = t.$createElement,
          M = t._self._c || s;
        return t.ok
          ? M("div", { staticClass: "m-main" }, [
              M("header", [
                t._m(0),
                M("div", { staticClass: "mmm" }, [
                  0 === t.step
                    ? M("h1", { staticStyle: { "font-size": "26px" } }, [
                        t._v("奖金计算系统(计算页)")
                      ])
                    : t._e(),
                  1 === t.step
                    ? M("h1", { staticStyle: { "font-size": "26px" } }, [
                        t._v("奖金计算系统(结果页)")
                      ])
                    : t._e()
                ]),
                M("div", { staticClass: "username" }, [
                  t._v("\n      苏红\n    ")
                ])
              ]),
              M(
                "section",
                { staticClass: "w960" },
                [
                  M("div", { staticClass: "tip" }, [
                    t._v(
                      "本网站仅供学习，请勿用于商业用途！由本网站计算造成的后果，网站作者和提供网站者不承担任何责任！"
                    )
                  ]),
                  0 === t.step
                    ? [
                        M(
                          "div",
                          {
                            staticClass: "table",
                            staticStyle: { "margin-bottom": "40px" }
                          },
                          [
                            t._m(1),
                            M("div", { staticClass: "tr" }, [
                              M("div", { staticClass: "td" }, [
                                t._v("版权使用者")
                              ]),
                              M("div", { staticClass: "td" }, [
                                t._v("\n          苏红\n        ")
                              ]),
                              M("div", { staticClass: "td" }, [
                                t._v("奖金总额")
                              ]),
                              M("div", { staticClass: "td" }, [
                                M("input", {
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
                        M("div", { staticClass: "table" }, [
                          M(
                            "div",
                            { staticClass: "table-header" },
                            [
                              M(
                                "div",
                                { staticClass: "tr" },
                                [
                                  t._l(t.config, function(s, a) {
                                    return M(
                                      "div",
                                      { key: a, staticClass: "td" },
                                      [t._v(t._s(s.name))]
                                    );
                                  }),
                                  M("div", { staticClass: "td" }, [
                                    t._v("操作")
                                  ])
                                ],
                                2
                              ),
                              t._l(t.list, function(s, a) {
                                return M(
                                  "div",
                                  { key: a, staticClass: "tr" },
                                  [
                                    t._l(t.config, function(a, i) {
                                      return M(
                                        "div",
                                        { key: i, staticClass: "td" },
                                        [
                                          M("label", [
                                            a.string
                                              ? M("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: s[a.set],
                                                      expression: "item[i.set]"
                                                    }
                                                  ],
                                                  attrs: {
                                                    type: "text",
                                                    placeholder: a.name
                                                  },
                                                  domProps: { value: s[a.set] },
                                                  on: {
                                                    input: function(M) {
                                                      M.target.composing ||
                                                        t.$set(
                                                          s,
                                                          a.set,
                                                          M.target.value
                                                        );
                                                    }
                                                  }
                                                })
                                              : M("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value: s[a.set],
                                                      expression: "item[i.set]"
                                                    }
                                                  ],
                                                  attrs: {
                                                    type: "number",
                                                    placeholder: a.name
                                                  },
                                                  domProps: { value: s[a.set] },
                                                  on: {
                                                    input: function(M) {
                                                      M.target.composing ||
                                                        t.$set(
                                                          s,
                                                          a.set,
                                                          M.target.value
                                                        );
                                                    }
                                                  }
                                                })
                                          ])
                                        ]
                                      );
                                    }),
                                    M("div", { staticClass: "td" }, [
                                      M(
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
                                              t.add(a);
                                            }
                                          }
                                        },
                                        [t._v("添加")]
                                      ),
                                      M(
                                        "a",
                                        {
                                          staticClass: "del",
                                          attrs: { href: "javascript:;" },
                                          on: {
                                            click: function(s) {
                                              t.deleteItem(a);
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
                              M(
                                "div",
                                {
                                  staticClass: "tr",
                                  staticStyle: { background: "#e8e8e8" }
                                },
                                [
                                  t._l(t.config, function(s, a) {
                                    return M(
                                      "div",
                                      { key: a, staticClass: "td" },
                                      [
                                        M("label", [
                                          "name" === s.set
                                            ? M("input", {
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
                                                  input: function(M) {
                                                    M.target.composing ||
                                                      t.$set(
                                                        s,
                                                        "default",
                                                        M.target.value
                                                      );
                                                  }
                                                }
                                              })
                                            : M("input", {
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
                                                  input: function(M) {
                                                    M.target.composing ||
                                                      t.$set(
                                                        s,
                                                        "default",
                                                        M.target.value
                                                      );
                                                  }
                                                }
                                              })
                                        ])
                                      ]
                                    );
                                  }),
                                  M(
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
                                      M(
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
                        M("div", { staticClass: "btn-area" }, [
                          M(
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
                          M("label", { attrs: { for: "file" } }, [
                            M("div", { staticClass: "btn m-btn-orange" }, [
                              t._v("导入数据")
                            ]),
                            M("input", {
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
                          M(
                            "a",
                            {
                              staticClass: "btn m-btn-blue",
                              attrs: { href: "javascript:;" },
                              on: { click: t.exportData }
                            },
                            [t._v("导出数据")]
                          ),
                          M(
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
                        M("div", { ref: "table", staticClass: "table" }, [
                          M(
                            "div",
                            { staticClass: "table-header" },
                            [
                              t._m(2),
                              t._l(t.list, function(s, a) {
                                return M(
                                  "div",
                                  {
                                    key: a,
                                    staticClass: "tr",
                                    staticStyle: { "background-color": "#fff" }
                                  },
                                  [
                                    M("div", { staticClass: "td" }, [
                                      t._v(t._s(s.name))
                                    ]),
                                    M("div", { staticClass: "td" }, [
                                      t._v(t._s(t.so2(s.xs)))
                                    ]),
                                    M("div", { staticClass: "td" }, [
                                      t._v(t._s(t.so2(s.jj)))
                                    ]),
                                    M("div", { staticClass: "td" }, [
                                      t._v(t._s(t.so2(s.tz)))
                                    ]),
                                    M("div", { staticClass: "td" }, [
                                      t._v(t._s(t.so2(s.sstc)))
                                    ]),
                                    M("div", { staticClass: "td" }, [
                                      t._v(t._s(t.so2(s.jx)))
                                    ]),
                                    M("div", { staticClass: "td" }, [
                                      t._v(t._s(t.so2(s.qqJJ)))
                                    ]),
                                    M("div", { staticClass: "td" }, [
                                      t._v(t._s(t.so2(s.fmbf)))
                                    ]),
                                    M("div", { staticClass: "td" }, [
                                      t._v(t._s(t.so2(s.fmcf)))
                                    ]),
                                    M("div", { staticClass: "td" }, [
                                      t._v(t._s(t.so2(s.jj2)))
                                    ]),
                                    M("div", { staticClass: "td" }, [
                                      t._v(t._s(t.so2(s.qt)))
                                    ]),
                                    M("div", { staticClass: "td" }, [
                                      t._v(t._s(t.so2(s.kqx)))
                                    ]),
                                    M("div", { staticClass: "td" }, [
                                      t._v(t._s(t.so2(s.total_all)))
                                    ])
                                  ]
                                );
                              }),
                              M("div", { staticClass: "tr" }, [
                                M("div", { staticClass: "td" }, [t._v("总计")]),
                                M("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(t.totalObj.xs)))
                                ]),
                                M("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(t.totalObj.jj)))
                                ]),
                                M("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(t.totalObj.tz)))
                                ]),
                                M("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(t.totalObj.sstc)))
                                ]),
                                M("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(t.totalObj.jx)))
                                ]),
                                M("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(t.totalObj.qqJJ)))
                                ]),
                                M("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(t.totalObj.fmbf)))
                                ]),
                                M("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(t.totalObj.fmcf)))
                                ]),
                                M("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(t.totalObj.jj2)))
                                ]),
                                M("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(t.totalObj.qt)))
                                ]),
                                M("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(t.totalObj.kqx)))
                                ]),
                                M("div", { staticClass: "td" }, [
                                  t._v(t._s(t.so2(t.totalObj.total_all)))
                                ])
                              ])
                            ],
                            2
                          )
                        ]),
                        M("div", { staticClass: "btn-area" }, [
                          M(
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
                          M(
                            "a",
                            {
                              staticClass: "btn m-btn-green",
                              attrs: { href: "javascript:;" },
                              on: { click: t.downloadFile }
                            },
                            [t._v("生成文本文档")]
                          ),
                          M(
                            "a",
                            {
                              staticClass: "btn m-btn-white",
                              staticStyle: { color: "#787878" },
                              attrs: { href: "javascript:;" },
                              on: { click: t.tupian }
                            },
                            [t._v("生成图片")]
                          ),
                          M(
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
                  M("a", { attrs: { id: "downlink" } })
                ],
                2
              )
            ])
          : t._e();
      },
      L = [
        function() {
          var t = this,
            s = t.$createElement,
            M = t._self._c || s;
          return M("div", { staticClass: "logo" }, [
            M("img", {
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
            M = t._self._c || s;
          return M("div", { staticClass: "tr" }, [
            M("div", { staticClass: "td" }, [t._v("默认配置")])
          ]);
        },
        function() {
          var t = this,
            s = t.$createElement,
            M = t._self._c || s;
          return M("div", { staticClass: "tr" }, [
            M("div", { staticClass: "td" }, [t._v("姓名")]),
            M("div", { staticClass: "td" }, [t._v("系数")]),
            M("div", { staticClass: "td" }, [t._v("80%奖金")]),
            M("div", { staticClass: "td" }, [t._v("调整")]),
            M("div", { staticClass: "td" }, [t._v("手术提成")]),
            M("div", { staticClass: "td" }, [t._v("绩效")]),
            M("div", { staticClass: "td" }, [t._v("缺勤费")]),
            M("div", { staticClass: "td" }, [t._v("分娩病房")]),
            M("div", { staticClass: "td" }, [t._v("分娩产房")]),
            M("div", { staticClass: "td" }, [t._v("20%奖金")]),
            M("div", { staticClass: "td" }, [t._v("增加项")]),
            M("div", { staticClass: "td" }, [t._v("扣钱项")]),
            M("div", { staticClass: "td" }, [t._v("总数")])
          ]);
        }
      ],
      D = (M("7f7f"), M("ac6a"), M("f499")),
      m = M.n(D),
      I = M("75fc"),
      h = M("951f"),
      Y = M.n(h),
      x = {
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
              M = {};
            d()(M, this.addItem);
            for (var a = 0; a < this.config.length; a++)
              M[this.config[a].set] = this.config[a].default;
            if (0 === t) {
              var i = [];
              d()(i, this.list), (this.list = [M].concat(i));
            } else if (t) {
              var e = [];
              d()(e, this.list),
                (this.list = [].concat(
                  Object(I["a"])(e.slice(0, t)),
                  [M],
                  Object(I["a"])(e.slice(t))
                ));
            } else this.list.push(M);
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
            function M(t, s) {
              var M = document.createElement("a");
              M.setAttribute(
                "href",
                "data:text/plain;charset=utf-8," + encodeURIComponent(s)
              ),
                M.setAttribute("download", t),
                (M.style.display = "none"),
                document.body.appendChild(M),
                M.click(),
                document.body.removeChild(M);
            }
            M(t, s);
          },
          change: function() {
            var t = this.$refs.file.files[0];
            if (!/text/.test(t.type)) return alert("格式有误"), !1;
            var s = this,
              M = new FileReader();
            M.readAsText(t),
              (M.onload = function() {
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
            Y()(t).then(function(t) {
              var s = t.toDataURL("image/png"),
                M = new Image();
              (M.src = s),
                document.body.appendChild(M),
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
              M = [
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
              a = M.join("\t") + "\n";
            this.list.forEach(function(t) {
              var M = [];
              M.push(t.name),
                M.push(s.so2(t.xs)),
                M.push(s.so2(t.jj)),
                M.push(s.so2(t.tz)),
                M.push(s.so2(t.sstc)),
                M.push(s.so2(t.jx)),
                M.push(s.so2(t.qqJJ)),
                M.push(s.so2(t.fmbf)),
                M.push(s.so2(t.fmcf)),
                M.push(s.so2(t.jj2)),
                M.push(s.so2(t.qt)),
                M.push(s.so2(t.kqx)),
                M.push(s.so2(t.total_all)),
                (a += M.join("\t") + "\n");
            });
            var i = [
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
            a += i.join("\t") + "\n";
            var e = prompt("请输入导出文件名称");
            e || alert("未输入文件名"),
              1 === t
                ? this.downloadData(e + ".xls", a)
                : this.downloadData(e, a);
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
              for (var t = 0, s = 0, M = 0; M < this.list.length; M++) {
                var a = this.list[M];
                (a.total =
                  j(a.jj) +
                  j(a.tz) +
                  j(a.sstc) +
                  j(a.jx) +
                  j(a.fmbf) +
                  j(a.fmcf) +
                  j(a.jj2) +
                  j(a.qt)),
                  (this.totalObj.jj += j(a.jj)),
                  (this.totalObj.tz += j(a.tz)),
                  (this.totalObj.sstc += j(a.sstc)),
                  (this.totalObj.jx += j(a.jx)),
                  (this.totalObj.fmbf += j(a.fmbf)),
                  (this.totalObj.fmcf += j(a.fmcf)),
                  (this.totalObj.jj2 += j(a.jj2)),
                  (this.totalObj.qt += j(a.qt)),
                  (this.totalObj.xs += j(a.xs)),
                  (t += a.total),
                  (a.isQq = 0 === +a.qqts),
                  a.isQq || (s += j(a.xs));
              }
              for (
                var i = this.totalNumber - t, e = 0;
                e < this.list.length;
                e++
              ) {
                var n = this.list[e];
                n.isQq
                  ? (n.qqJJ = 0)
                  : ((n.qqJJ = i * j(n.xs) / s),
                    (n.qqJJ = Math.round(100 * n.qqJJ) / 100)),
                  (n.total_all = n.total + n.qqJJ + +n.kqx),
                  (n.total_all = Math.round(100 * n.total_all) / 100),
                  (this.totalObj.qqJJ += j(n.qqJJ)),
                  (this.totalObj.total_all += j(n.total_all)),
                  (this.totalObj.kqx += j(n.kqx));
              }
              this.step = 1;
            }
            function j(t) {
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
      O = x,
      C = Object(l["a"])(O, f, L, !1, null, null, null),
      p = C.exports;
    a["a"].use(N["a"]);
    var A = [
      { path: "/", name: "index", meta: { title: "中彩票！！" }, component: g },
      {
        path: "/mom",
        name: "shot",
        meta: { title: "奖金计算系统" },
        component: p
      }
    ];
    function b(t, s, M) {
      return M || { x: 0, y: 0 };
    }
    var _ = new N["a"]({ scrollBehavior: b, routes: A });
    _.beforeEach(function(t, s, M) {
      t.meta.title && (document.title = t.meta.title), M();
    });
    var w = _;
    A.map(function(t) {
      return t.path.split("/:")[0];
    }),
      M("8594");
    (a["a"].config.productionTip = !1),
      new a["a"]({
        render: function(t) {
          return t(o);
        },
        router: w
      }).$mount("#app");
  },
  8594: function(t, s, M) {},
  "8fc1": function(t, s, M) {
    "use strict";
    var a = M("3e3f"),
      i = M.n(a);
    i.a;
  }
});
//# sourceMappingURL=app.502a57f5.js.map
