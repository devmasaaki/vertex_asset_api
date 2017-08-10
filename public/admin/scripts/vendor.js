!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = "1.11.3", m = function(a, b) {
        return new m.fn.init(a, b);
    }, n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, o = /^-ms-/, p = /-([\da-z])/gi, q = function(a, b) {
        return b.toUpperCase();
    };
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this);
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
        },
        pushStack: function(a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function(a, b) {
            return m.each(this, a, b);
        },
        map: function(a) {
            return this.pushStack(m.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [ this[c] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, m.extend = m.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), 
        h === i && (g = this, h--); i > h; h++) if (null != (e = arguments[h])) for (d in e) a = g[d], 
        c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, 
        f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g;
    }, m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === m.type(a);
        },
        isArray: Array.isArray || function(a) {
            return "array" === m.type(a);
        },
        isWindow: function(a) {
            return null != a && a == a.window;
        },
        isNumeric: function(a) {
            return !m.isArray(a) && a - parseFloat(a) + 1 >= 0;
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (c) {
                return !1;
            }
            if (k.ownLast) for (b in a) return j.call(a, b);
            for (b in a) ;
            return void 0 === b || j.call(a, b);
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a;
        },
        globalEval: function(b) {
            b && m.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b);
            })(b);
        },
        camelCase: function(a) {
            return a.replace(o, "ms-").replace(p, q);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b, c) {
            var d, e = 0, f = a.length, g = r(a);
            if (c) {
                if (g) {
                    for (;f > e; e++) if (d = b.apply(a[e], c), d === !1) break;
                } else for (e in a) if (d = b.apply(a[e], c), d === !1) break;
            } else if (g) {
                for (;f > e; e++) if (d = b.call(a[e], e, a[e]), d === !1) break;
            } else for (e in a) if (d = b.call(a[e], e, a[e]), d === !1) break;
            return a;
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(n, "");
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [ a ] : a) : f.call(c, a)), 
            c;
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g) return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) if (c in b && b[c] === a) return c;
            }
            return -1;
        },
        merge: function(a, b) {
            var c = +b.length, d = 0, e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e;
        },
        map: function(a, b, c) {
            var d, f = 0, g = a.length, h = r(a), i = [];
            if (h) for (;g > f; f++) d = b(a[f], f, c), null != d && i.push(d); else for (f in a) d = b(a[f], f, c), 
            null != d && i.push(d);
            return e.apply([], i);
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), 
            e = function() {
                return a.apply(b || this, c.concat(d.call(arguments)));
            }, e.guid = a.guid = a.guid || m.guid++, e) : void 0;
        },
        now: function() {
            return +new Date();
        },
        support: k
    }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase();
    });
    function r(a) {
        var b = "length" in a && a.length, c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }
    var s = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date(), v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function(a, b) {
            return a === b && (l = !0), 0;
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
            return -1;
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+", "g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + O),
            PSEUDO: new RegExp("^" + P),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g, ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), da = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        }, ea = function() {
            m();
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
        } catch (fa) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b));
                } : function(a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]) ;
                    a.length = c - 1;
                }
            };
        }
        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, 
            "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
                    if (9 === k) {
                        if (h = b.getElementById(j), !h || !h.parentNode) return d;
                        if (h.id === j) return d.push(h), d;
                    } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), 
                    d;
                } else {
                    if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                    if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), 
                    d;
                }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), 
                        s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + ra(o[l]);
                        w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",");
                    }
                    if (x) try {
                        return H.apply(d, w.querySelectorAll(x)), d;
                    } catch (y) {} finally {
                        r || b.removeAttribute("id");
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e);
        }
        function ha() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
            }
            return b;
        }
        function ia(a) {
            return a[u] = !0, a;
        }
        function ja(a) {
            var b = n.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function ka(a, b) {
            var c = a.split("|"), e = a.length;
            while (e--) d.attrHandle[c[e]] = b;
        }
        function la(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c) while (c = c.nextSibling) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function oa(a) {
            return ia(function(b) {
                return b = +b, ia(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        c = ga.support = {}, f = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
        }, m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, 
            e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), 
            p = !f(g), c.attributes = ja(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), c.getElementsByTagName = ja(function(a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length;
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function(a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length;
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [ c ] : [];
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return p ? b.getElementsByClassName(a) : void 0;
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", 
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), 
                a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), 
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), 
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
            }), ja(function(a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), 
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), 
                q.push(",.*:");
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P);
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), 
            b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) while (b = b.parentNode) if (b === a) return !0;
                return !1;
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, h = [ a ], i = [ b ];
                if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
            }, g) : n;
        }, ga.matches = function(a, b) {
            return ga(a, null, null, b);
        }, ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return ga(b, n, null, [ a ]).length > 0;
        }, ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, ga.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1);
            }
            return k = null, a;
        }, e = ga.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
                } else if (3 === f || 4 === f) return a.nodeValue;
            } else while (b = a[d++]) c += e(b);
            return c;
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), 
                    a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], 
                                l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [ w, n, m ];
                                    break;
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [ w, m ]), 
                            l === b)) break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [ a, a, "", b ], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]);
                    }) : function(a) {
                        return e(a, 0, c);
                    }) : e;
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
                    };
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0;
                    };
                }),
                contains: ia(function(a) {
                    return a = a.replace(ca, da), function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    };
                }),
                lang: ia(function(a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), 
                    function(b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), 
                        c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === o;
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function(a) {
                    return a.disabled === !1;
                },
                disabled: function(a) {
                    return a.disabled === !0;
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !d.pseudos.empty(a);
                },
                header: function(a) {
                    return Z.test(a.nodeName);
                },
                input: function(a) {
                    return Y.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                },
                first: oa(function() {
                    return [ 0 ];
                }),
                last: oa(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: oa(function(a, b, c) {
                    return [ 0 > c ? c + b : c ];
                }),
                even: oa(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a;
                }),
                odd: oa(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a;
                }),
                lt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                    return a;
                }),
                gt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                    return a;
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[b] = ma(b);
        for (b in {
            submit: !0,
            reset: !0
        }) d.pseudos[b] = na(b);
        function qa() {}
        qa.prototype = d.filters = d.pseudos, d.setFilters = new qa(), g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), 
                f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break;
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
        };
        function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function sa(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f);
            } : function(b, c, g) {
                var h, i, j = [ w, f ];
                if (g) {
                    while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                } else while (b = b[d]) if (1 === b.nodeType || e) {
                    if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g)) return !0;
                }
            };
        }
        function ta(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
            return c;
        }
        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), 
            j && b.push(h));
            return g;
        }
        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ua(b || "*", h.nodeType ? [ h ] : h, []), q = !a || !f && b ? p : va(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = va(r, n), d(j, [], h, i), k = j.length;
                    while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i);
                        }
                        k = r.length;
                        while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                    }
                } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
            });
        }
        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function(a) {
                return a === b;
            }, h, !0), l = sa(function(a) {
                return J(b, a) > -1;
            }, h, !0), m = [ function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e;
            } ]; f > i; i++) if (c = d.relative[a[i].type]) m = [ sa(ta(m), c) ]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
                    return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
                        value: " " === a[i - 2].type ? "*" : ""
                    })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a));
                }
                m.push(c);
            }
            return ta(m);
        }
        function ya(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function(f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++]) if (o(l, g, h)) {
                            i.push(l);
                            break;
                        }
                        k && (w = v);
                    }
                    c && ((l = !o && l) && p--, f && r.push(l));
                }
                if (p += q, c && q !== p) {
                    m = 0;
                    while (o = b[m++]) o(r, s, g, h);
                    if (f) {
                        if (p > 0) while (q--) r[q] || s[q] || (s[q] = F.call(i));
                        s = va(s);
                    }
                    H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
                }
                return k && (w = v, j = t), r;
            };
            return c ? ia(f) : f;
        }
        return h = ga.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)), f.selector = a;
            }
            return f;
        }, i = ga.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length);
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
                        break;
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e;
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, 
        m(), c.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"));
        }), ja(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || ka("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), c.attributes && ja(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || ka("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), ja(function(a) {
            return null == a.getAttribute("disabled");
        }) || ka(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), ga;
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, 
    m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext, u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, v = /^.[^:#\[\.,]*$/;
    function w(a, b, c) {
        if (m.isFunction(b)) return m.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c;
        });
        if (b.nodeType) return m.grep(a, function(a) {
            return a === b !== c;
        });
        if ("string" == typeof b) {
            if (v.test(b)) return m.filter(b, a, c);
            b = m.filter(b, a);
        }
        return m.grep(a, function(a) {
            return m.inArray(a, b) >= 0 !== c;
        });
    }
    m.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [ d ] : [] : m.find.matches(a, m.grep(b, function(a) {
            return 1 === a.nodeType;
        }));
    }, m.fn.extend({
        find: function(a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a) return this.pushStack(m(a).filter(function() {
                for (b = 0; e > b; b++) if (m.contains(d[b], this)) return !0;
            }));
            for (b = 0; e > b; b++) m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, 
            c;
        },
        filter: function(a) {
            return this.pushStack(w(this, a || [], !1));
        },
        not: function(a) {
            return this.pushStack(w(this, a || [], !0));
        },
        is: function(a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length;
        }
    });
    var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function(a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [ null, a, null ] : z.exec(a), 
            !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), 
                u.test(c[1]) && m.isPlainObject(b)) for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this;
            }
            if (d = y.getElementById(c[2]), d && d.parentNode) {
                if (d.id !== c[2]) return x.find(a);
                this.length = 1, this[0] = d;
            }
            return this.context = y, this.selector = a, this;
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, 
        this.context = a.context), m.makeArray(a, this));
    };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/, C = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    m.extend({
        dir: function(a, b, c) {
            var d = [], e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType && d.push(e), 
            e = e[b];
            return d;
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c;
        }
    }), m.fn.extend({
        has: function(a) {
            var b, c = m(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++) if (m.contains(this, c[b])) return !0;
            });
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                f.push(c);
                break;
            }
            return this.pushStack(f.length > 1 ? m.unique(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    });
    function D(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a;
    }
    m.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return m.dir(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return m.dir(a, "parentNode", c);
        },
        next: function(a) {
            return D(a, "nextSibling");
        },
        prev: function(a) {
            return D(a, "previousSibling");
        },
        nextAll: function(a) {
            return m.dir(a, "nextSibling");
        },
        prevAll: function(a) {
            return m.dir(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return m.dir(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return m.dir(a, "previousSibling", c);
        },
        siblings: function(a) {
            return m.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return m.sibling(a.firstChild);
        },
        contents: function(a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes);
        }
    }, function(a, b) {
        m.fn[a] = function(c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), 
            this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), 
            this.pushStack(e);
        };
    });
    var E = /\S+/g, F = {};
    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    m.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function(l) {
            for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++) if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                c = !1;
                break;
            }
            b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable());
        }, k = {
            add: function() {
                if (h) {
                    var d = h.length;
                    !function f(b) {
                        m.each(b, function(b, c) {
                            var d = m.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c);
                        });
                    }(arguments), b ? e = h.length : c && (g = d, j(c));
                }
                return this;
            },
            remove: function() {
                return h && m.each(arguments, function(a, c) {
                    var d;
                    while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--);
                }), this;
            },
            has: function(a) {
                return a ? m.inArray(a, h) > -1 : !(!h || !h.length);
            },
            empty: function() {
                return h = [], e = 0, this;
            },
            disable: function() {
                return h = i = c = void 0, this;
            },
            disabled: function() {
                return !h;
            },
            lock: function() {
                return i = void 0, c || k.disable(), this;
            },
            locked: function() {
                return !i;
            },
            fireWith: function(a, c) {
                return !h || d && !i || (c = c || [], c = [ a, c.slice ? c.slice() : c ], b ? i.push(c) : j(c)), 
                this;
            },
            fire: function() {
                return k.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!d;
            }
        };
        return k;
    }, m.extend({
        Deferred: function(a) {
            var b = [ [ "resolve", "done", m.Callbacks("once memory"), "resolved" ], [ "reject", "fail", m.Callbacks("once memory"), "rejected" ], [ "notify", "progress", m.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var a = arguments;
                    return m.Deferred(function(c) {
                        m.each(b, function(b, f) {
                            var g = m.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? m.extend(a, d) : d;
                }
            }, e = {};
            return d.pipe = d.then, m.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function(a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ? e : 0, g = 1 === f ? a : m.Deferred(), h = function(a, b, c) {
                return function(e) {
                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
                };
            }, i, j, k;
            if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise();
        }
    });
    var H;
    m.fn.ready = function(a) {
        return m.ready.promise().done(a), this;
    }, m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? m.readyWait++ : m.ready(!0);
        },
        ready: function(a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body) return setTimeout(m.ready);
                m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [ m ]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), 
                m(y).off("ready")));
            }
        }
    });
    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), 
        a.detachEvent("onload", J));
    }
    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), 
        m.ready());
    }
    m.ready.promise = function(b) {
        if (!H) if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready); else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), 
        a.addEventListener("load", J, !1); else {
            y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
            var c = !1;
            try {
                c = null == a.frameElement && y.documentElement;
            } catch (d) {}
            c && c.doScroll && !function e() {
                if (!m.isReady) {
                    try {
                        c.doScroll("left");
                    } catch (a) {
                        return setTimeout(e, 50);
                    }
                    I(), m.ready();
                }
            }();
        }
        return H.promise(b);
    };
    var K = "undefined", L;
    for (L in m(k)) break;
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function() {
        var a, b, c, d;
        c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), 
        d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
        c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", 
        k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d));
    }), function() {
        var a = y.createElement("div");
        if (null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete a.test;
            } catch (b) {
                k.deleteExpando = !1;
            }
        }
        a = null;
    }(), m.acceptData = function(a) {
        var b = m.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b;
    };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, N = /([A-Z])/g;
    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c;
                } catch (e) {}
                m.data(a, b, c);
            } else c = void 0;
        }
        return c;
    }
    function P(a) {
        var b;
        for (b in a) if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0;
    }
    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache : a, k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), 
            j[k] || (j[k] = i ? {} : {
                toJSON: m.noop
            }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), 
            g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), 
            "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, 
            f;
        }
    }
    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? m.cache : a, h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [ b ] : (b = m.camelCase(b), 
                    b = b in d ? [ b ] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d)) return;
                }
                (c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([ a ], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null);
            }
        }
    }
    m.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a);
        },
        data: function(a, b, c) {
            return Q(a, b, c);
        },
        removeData: function(a, b) {
            return R(a, b);
        },
        _data: function(a, b, c) {
            return Q(a, b, c, !0);
        },
        _removeData: function(a, b) {
            return R(a, b, !0);
        }
    }), m.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), 
                    O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0);
                }
                return e;
            }
            return "object" == typeof a ? this.each(function() {
                m.data(this, a);
            }) : arguments.length > 1 ? this.each(function() {
                m.data(this, a, b);
            }) : f ? O(f, a, m.data(f, a)) : void 0;
        },
        removeData: function(a) {
            return this.each(function() {
                m.removeData(this, a);
            });
        }
    }), m.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), 
            d || []) : void 0;
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = m.queue(a, b), d = c.length, e = c.shift(), f = m._queueHooks(a, b), g = function() {
                m.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
            delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                empty: m.Callbacks("once memory").add(function() {
                    m._removeData(a, b + "queue"), m._removeData(a, c);
                })
            });
        }
    }), m.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                m.dequeue(this, a);
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, b) {
            var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [ f ]);
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = [ "Top", "Right", "Bottom", "Left" ], U = function(a, b) {
        return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a);
    }, V = m.access = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === m.type(c)) {
            e = !0;
            for (h in c) m.access(a, b, h, c[h], !0, f, g);
        } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), 
        b = null) : (j = b, b = function(a, b, c) {
            return j.call(m(a), c);
        })), b)) for (;i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    }, W = /^(?:checkbox|radio)$/i;
    !function() {
        var a = y.createElement("input"), b = y.createElement("div"), c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, 
        k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, 
        a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, 
        b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, 
        c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", 
        k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, 
        b.attachEvent && (b.attachEvent("onclick", function() {
            k.noCloneEvent = !1;
        }), b.cloneNode(!0).click()), null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test;
            } catch (d) {
                k.deleteExpando = !1;
            }
        }
    }(), function() {
        var b, c, d = y.createElement("div");
        for (b in {
            submit: !0,
            change: !0,
            focusin: !0
        }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null;
    }();
    var X = /^(?:input|select|textarea)$/i, Y = /^key/, Z = /^(?:mouse|pointer|contextmenu)|click/, $ = /^(?:focusinfocus|focusoutblur)$/, _ = /^([^.]*)(?:\.(.+)|)$/;
    function aa() {
        return !0;
    }
    function ba() {
        return !1;
    }
    function ca() {
        try {
            return y.activeElement;
        } catch (a) {}
    }
    m.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), 
                (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments);
                }, k.elem = a), b = (b || "").match(E) || [ "" ], h = b.length;
                while (h--) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), 
                o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, 
                j = m.event.special[o] || {}, l = m.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && m.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), 
                j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), 
                m.event.global[o] = !0);
                a = null;
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [ "" ], j = b.length;
                while (j--) if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), 
                o) {
                    l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], 
                    h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                    while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), 
                    g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                    i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), 
                    delete k[o]);
                } else for (o in k) m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"));
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, n, o = [ d || y ], p = j.call(b, "type") ? b.type : b, q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), 
            p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), 
            b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            b.result = void 0, b.target || (b.target = d), c = null == c ? [ b ] : m.makeArray(c, [ b ]), 
            k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), 
                    l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a);
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, 
                f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), 
                f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;
                    try {
                        d[p]();
                    } catch (r) {}
                    m.event.triggered = void 0, l && (d[g] = l);
                }
                return b.result;
            }
        },
        dispatch: function(a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (m._data(this, "events") || {})[a.type] || [], k = m.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, 
                    a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), 
                    void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) for (;i != this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [ i ]).length), 
                e[c] && e.push(d);
                e.length && g.push({
                    elem: i,
                    handlers: e
                });
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g;
        },
        fix: function(a) {
            if (a[m.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), 
            d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), 
            a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), 
                a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button, g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, 
                e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), 
                a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), 
                !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), 
                a;
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ca() && this.focus) try {
                        return this.focus(), !1;
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ca() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(a) {
                    return m.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = m.extend(new m.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        }
    }, m.removeEvent = y.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c));
    }, m.Event = function(a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? aa : ba) : this.type = a, 
        b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void (this[m.expando] = !0)) : new m.Event(a, b);
    }, m.Event.prototype = {
        isDefaultPrevented: ba,
        isPropagationStopped: ba,
        isImmediatePropagationStopped: ba,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = aa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = aa, a && (a.stopPropagation && a.stopPropagation(), 
            a.cancelBubble = !0);
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = aa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), k.submitBubbles || (m.event.special.submit = {
        setup: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target, c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) {
                    a._submit_bubble = !0;
                }), m._data(c, "submitBubbles", !0));
            });
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0));
        },
        teardown: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit");
        }
    }), k.changeBubbles || (m.event.special.change = {
        setup: function() {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0);
            }), m.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0);
            })), !1) : void m.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0);
                }), m._data(b, "changeBubbles", !0));
            });
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0;
        },
        teardown: function() {
            return m.event.remove(this, "._change"), !X.test(this.nodeName);
        }
    }), k.focusinBubbles || m.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0);
        };
        m.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this, e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1);
            },
            teardown: function() {
                var d = this.ownerDocument || this, e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b));
            }
        };
    }), m.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this;
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, 
            c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = ba; else if (!d) return this;
            return 1 === e && (g = d, d = function(a) {
                return m().off(a), g.apply(this, arguments);
            }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function() {
                m.event.add(this, a, d, c, b);
            });
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1);
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), 
            this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this;
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = ba), 
            this.each(function() {
                m.event.remove(this, a, c, b);
            });
        },
        trigger: function(a, b) {
            return this.each(function() {
                m.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0;
        }
    });
    function da(a) {
        var b = ea.split("|"), c = a.createDocumentFragment();
        if (c.createElement) while (b.length) c.createElement(b.pop());
        return c;
    }
    var ea = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", fa = / jQuery\d+="(?:null|\d+)"/g, ga = new RegExp("<(?:" + ea + ")[\\s/>]", "i"), ha = /^\s+/, ia = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ja = /<([\w:]+)/, ka = /<tbody/i, la = /<|&#?\w+;/, ma = /<(?:script|style|link)/i, na = /checked\s*(?:[^=]|=\s*.checked.)/i, oa = /^$|\/(?:java|ecma)script/i, pa = /^true\/(.*)/, qa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ra = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: k.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    }, sa = da(y), ta = sa.appendChild(y.createElement("div"));
    ra.optgroup = ra.option, ra.tbody = ra.tfoot = ra.colgroup = ra.caption = ra.thead, 
    ra.th = ra.td;
    function ua(a, b) {
        var c, d, e = 0, f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ua(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([ a ], f) : f;
    }
    function va(a) {
        W.test(a.type) && (a.defaultChecked = a.checked);
    }
    function wa(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function xa(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a;
    }
    function ya(a) {
        var b = pa.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function za(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) m._data(c, "globalEval", !b || m._data(b[d], "globalEval"));
    }
    function Aa(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h) for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d]);
            }
            g.data && (g.data = m.extend({}, g.data));
        }
    }
    function Ba(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events) m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando);
            }
            "script" === c && b.text !== a.text ? (xa(b).text = a.text, ya(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), 
            k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, 
            b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
        }
    }
    m.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !ga.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ta.innerHTML = a.outerHTML, 
            ta.removeChild(f = ta.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a))) for (d = ua(f), 
            h = ua(a), g = 0; null != (e = h[g]); ++g) d[g] && Ba(e, d[g]);
            if (b) if (c) for (h = h || ua(a), d = d || ua(f), g = 0; null != (e = h[g]); g++) Aa(e, d[g]); else Aa(a, f);
            return d = ua(f, "script"), d.length > 0 && za(d, !i && ua(a, "script")), d = h = e = null, 
            f;
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = da(b), p = [], q = 0; n > q; q++) if (f = a[q], 
            f || 0 === f) if ("object" === m.type(f)) m.merge(p, f.nodeType ? [ f ] : f); else if (la.test(f)) {
                h = h || o.appendChild(b.createElement("div")), i = (ja.exec(f) || [ "", "" ])[1].toLowerCase(), 
                l = ra[i] || ra._default, h.innerHTML = l[1] + f.replace(ia, "<$1></$2>") + l[2], 
                e = l[0];
                while (e--) h = h.lastChild;
                if (!k.leadingWhitespace && ha.test(f) && p.push(b.createTextNode(ha.exec(f)[0])), 
                !k.tbody) {
                    f = "table" !== i || ka.test(f) ? "<table>" !== l[1] || ka.test(f) ? 0 : h : h.firstChild, 
                    e = f && f.childNodes.length;
                    while (e--) m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                }
                m.merge(p, h.childNodes), h.textContent = "";
                while (h.firstChild) h.removeChild(h.firstChild);
                h = o.lastChild;
            } else p.push(b.createTextNode(f));
            h && o.removeChild(h), k.appendChecked || m.grep(ua(p, "input"), va), q = 0;
            while (f = p[q++]) if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), 
            h = ua(o.appendChild(f), "script"), g && za(h), c)) {
                e = 0;
                while (f = h[e++]) oa.test(f.type || "") && c.push(f);
            }
            return h = null, o;
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++) if ((b || m.acceptData(d)) && (f = d[i], 
            g = f && j[f])) {
                if (g.events) for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, 
                c.push(f));
            }
        }
    }), m.fn.extend({
        text: function(a) {
            return V(this, function(a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a));
            }, null, a, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wa(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wa(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        remove: function(a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || m.cleanData(ua(c)), 
            c.parentNode && (b && m.contains(c.ownerDocument, c) && za(ua(c, "script")), c.parentNode.removeChild(c));
            return this;
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ua(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0);
            }
            return this;
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return m.clone(this, a, b);
            });
        },
        html: function(a) {
            return V(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fa, "") : void 0;
                if (!("string" != typeof a || ma.test(a) || !k.htmlSerialize && ga.test(a) || !k.leadingWhitespace && ha.test(a) || ra[(ja.exec(a) || [ "", "" ])[1].toLowerCase()])) {
                    a = a.replace(ia, "<$1></$2>");
                    try {
                        for (;d > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ua(b, !1)), 
                        b.innerHTML = a);
                        b = 0;
                    } catch (e) {}
                }
                b && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, m.cleanData(ua(this)), a && a.replaceChild(b, this);
            }), a && (a.length || a.nodeType) ? this : this.remove();
        },
        detach: function(a) {
            return this.remove(a, !0);
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l - 1, p = a[0], q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && na.test(p)) return this.each(function(c) {
                var d = n.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
            });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 
            1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ua(i, "script"), xa), f = g.length; l > j; j++) d = i, j !== o && (d = m.clone(d, !0, !0), 
                f && m.merge(g, ua(d, "script"))), b.call(this[j], d, j);
                if (f) for (h = g[g.length - 1].ownerDocument, m.map(g, ya), j = 0; f > j; j++) d = g[j], 
                oa.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qa, "")));
                i = c = null;
            }
            return this;
        }
    }), m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        m.fn[a] = function(a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), 
            m(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e);
        };
    });
    var Ca, Da = {};
    function Ea(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(), f;
    }
    function Fa(a) {
        var b = y, c = Da[a];
        return c || (c = Ea(a, b), "none" !== c && c || (Ca = (Ca || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), 
        b = (Ca[0].contentWindow || Ca[0].contentDocument).document, b.write(), b.close(), 
        c = Ea(a, b), Ca.detach()), Da[a] = c), c;
    }
    !function() {
        var a;
        k.shrinkWrapBlocks = function() {
            if (null != a) return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), 
            d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
            c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", 
            b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), 
            c.removeChild(d), a) : void 0;
        };
    }();
    var Ga = /^margin/, Ha = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"), Ia, Ja, Ka = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ia = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
    }, Ja = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ia(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), 
        Ha.test(g) && Ga.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, 
        g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + "";
    }) : y.documentElement.currentStyle && (Ia = function(a) {
        return a.currentStyle;
    }, Ja = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ia(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), 
        Ha.test(g) && !Ka.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), 
        h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), 
        void 0 === g ? g : g + "" || "auto";
    });
    function La(a, b) {
        return {
            get: function() {
                var c = a();
                if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments);
            }
        };
    }
    !function() {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        d = b.getElementsByTagName("a")[0], c = d && d.style) {
            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, 
            b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", 
            k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, 
            m.extend(k, {
                reliableHiddenOffsets: function() {
                    return null == g && i(), g;
                },
                boxSizingReliable: function() {
                    return null == f && i(), f;
                },
                pixelPosition: function() {
                    return null == e && i(), e;
                },
                reliableMarginRight: function() {
                    return null == h && i(), h;
                }
            });
            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), 
                d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", 
                c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", 
                e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, 
                f = "4px" === (a.getComputedStyle(b, null) || {
                    width: "4px"
                }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight), 
                b.removeChild(i)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", 
                i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", 
                g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", 
                g = 0 === i[0].offsetHeight), c.removeChild(d));
            }
        }
    }(), m.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e;
    };
    var Ma = /alpha\([^)]*\)/i, Na = /opacity\s*=\s*([^)]*)/, Oa = /^(none|table(?!-c[ea]).+)/, Pa = new RegExp("^(" + S + ")(.*)$", "i"), Qa = new RegExp("^([+-])=(" + S + ")", "i"), Ra = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Sa = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Ta = [ "Webkit", "O", "Moz", "ms" ];
    function Ua(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Ta.length;
        while (e--) if (b = Ta[e] + c, b in a) return b;
        return d;
    }
    function Va(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), 
        c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fa(d.nodeName)))) : (e = U(d), 
        (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    function Wa(a, b, c) {
        var d = Pa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function Xa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += m.css(a, c + T[f], !0, e)), 
        d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), 
        "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        return g;
    }
    function Ya(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ia(a), g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Ja(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ha.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
        }
        return e + Xa(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    m.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Ja(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": k.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b), i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ua(i, h)), g = m.cssHooks[b] || m.cssHooks[h], 
                void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Qa.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), 
                f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), 
                k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), 
                !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c;
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ua(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], 
            g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Ja(a, b, d)), "normal" === f && b in Sa && (f = Sa[b]), 
            "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f;
        }
    }), m.each([ "height", "width" ], function(a, b) {
        m.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Oa.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Ra, function() {
                    return Ya(a, b, d);
                }) : Ya(a, b, d) : void 0;
            },
            set: function(a, c, d) {
                var e = d && Ia(a);
                return Wa(a, c, d ? Xa(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0);
            }
        };
    }), k.opacity || (m.cssHooks.opacity = {
        get: function(a, b) {
            return Na.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
        },
        set: function(a, b) {
            var c = a.style, d = a.currentStyle, e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Ma, "")) && c.removeAttribute && (c.removeAttribute("filter"), 
            "" === b || d && !d.filter) || (c.filter = Ma.test(f) ? f.replace(Ma, e) : f + " " + e);
        }
    }), m.cssHooks.marginRight = La(k.reliableMarginRight, function(a, b) {
        return b ? m.swap(a, {
            display: "inline-block"
        }, Ja, [ a, "marginRight" ]) : void 0;
    }), m.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        m.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; 4 > d; d++) e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, Ga.test(a) || (m.cssHooks[a + b].set = Wa);
    }), m.fn.extend({
        css: function(a, b) {
            return V(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (m.isArray(b)) {
                    for (d = Ia(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b);
            }, a, b, arguments.length > 1);
        },
        show: function() {
            return Va(this, !0);
        },
        hide: function() {
            return Va(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                U(this) ? m(this).show() : m(this).hide();
            });
        }
    });
    function Za(a, b, c, d, e) {
        return new Za.prototype.init(a, b, c, d, e);
    }
    m.Tween = Za, Za.prototype = {
        constructor: Za,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), 
            this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = Za.propHooks[this.prop];
            return a && a.get ? a.get(this) : Za.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = Za.propHooks[this.prop];
            return this.options.duration ? this.pos = b = m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : Za.propHooks._default.set(this), this;
        }
    }, Za.prototype.init.prototype = Za.prototype, Za.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), 
                b && "auto" !== b ? b : 0) : a.elem[a.prop];
            },
            set: function(a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            }
        }
    }, Za.propHooks.scrollTop = Za.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, m.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }
    }, m.fx = Za.prototype.init, m.fx.step = {};
    var $a, _a, ab = /^(?:toggle|show|hide)$/, bb = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"), cb = /queueHooks$/, db = [ ib ], eb = {
        "*": [ function(a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = bb.exec(b), f = e && e[3] || (m.cssNumber[a] ? "" : "px"), g = (m.cssNumber[a] || "px" !== f && +d) && bb.exec(m.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), 
            c;
        } ]
    };
    function fb() {
        return setTimeout(function() {
            $a = void 0;
        }), $a = m.now();
    }
    function gb(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = T[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d;
    }
    function hb(a, b, c) {
        for (var d, e = (eb[b] || []).concat(eb["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
    }
    function ib(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this, o = {}, p = a.style, q = a.nodeType && U(a), r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, 
        h.empty.fire = function() {
            h.unqueued || i();
        }), h.unqueued++, n.always(function() {
            n.always(function() {
                h.unqueued--, m.queue(a, "fx").length || h.empty.fire();
            });
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [ p.overflow, p.overflowX, p.overflowY ], 
        j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fa(a.nodeName) : j, 
        "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fa(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), 
        c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2];
        }));
        for (d in b) if (e = b[d], ab.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                if ("show" !== e || !r || void 0 === r[d]) continue;
                q = !0;
            }
            o[d] = r && r[d] || m.style(a, d);
        } else j = void 0;
        if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fa(a.nodeName) : j) && (p.display = j); else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), 
            q ? m(a).show() : n.done(function() {
                m(a).hide();
            }), n.done(function() {
                var b;
                m._removeData(a, "fxshow");
                for (b in o) m.style(a, b, o[b]);
            });
            for (d in o) g = hb(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, 
            g.start = "width" === d || "height" === d ? 1 : 0));
        }
    }
    function jb(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], 
        f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function kb(a, b, c) {
        var d, e, f = 0, g = db.length, h = m.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = $a || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), 1 > f && i ? c : (h.resolveWith(a, [ j ]), 
            !1);
        }, j = h.promise({
            elem: a,
            props: m.extend({}, b),
            opts: m.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: $a || fb(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [ j, b ]) : h.rejectWith(a, [ j, b ]), this;
            }
        }), k = j.props;
        for (jb(k, j.opts.specialEasing); g > f; f++) if (d = db[f].call(j, a, k, j.opts)) return d;
        return m.map(k, hb, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    m.Animation = m.extend(kb, {
        tweener: function(a, b) {
            m.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], eb[c] = eb[c] || [], eb[c].unshift(b);
        },
        prefilter: function(a, b) {
            b ? db.unshift(a) : db.push(a);
        }
    }), m.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? m.extend({}, a) : {
            complete: c || !c && b || m.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !m.isFunction(b) && b
        };
        return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, 
        (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue);
        }, d;
    }, m.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(U).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = m.isEmptyObject(a), f = m.speed(b, c, d), g = function() {
                var b = kb(this, m.extend({}, a), f);
                (e || m._data(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c);
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, e = null != a && a + "queueHooks", f = m.timers, g = m._data(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && cb.test(e) && d(g[e]);
                for (e = f.length; e--; ) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), 
                b = !1, f.splice(e, 1));
                (b || !c) && m.dequeue(this, a);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = m._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = m.timers, g = d ? d.length : 0;
                for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), m.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = m.fn[b];
        m.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e);
        };
    }), m.each({
        slideDown: gb("show"),
        slideUp: gb("hide"),
        slideToggle: gb("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        m.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), m.timers = [], m.fx.tick = function() {
        var a, b = m.timers, c = 0;
        for ($a = m.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || m.fx.stop(), $a = void 0;
    }, m.fx.timer = function(a) {
        m.timers.push(a), a() ? m.fx.start() : m.timers.pop();
    }, m.fx.interval = 13, m.fx.start = function() {
        _a || (_a = setInterval(m.fx.tick, m.fx.interval));
    }, m.fx.stop = function() {
        clearInterval(_a), _a = null;
    }, m.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, m.fn.delay = function(a, b) {
        return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d);
            };
        });
    }, function() {
        var a, b, c, d, e;
        b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), 
        a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, 
        k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), 
        k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, 
        c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), 
        k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), 
        k.radioValue = "t" === a.value;
    }();
    var lb = /\r/g;
    m.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length) return d = m.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) {
                        return null == a ? "" : a + "";
                    })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
                });
                if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, 
                "string" == typeof c ? c.replace(lb, "") : null == c ? "" : c);
            }
        }
    }), m.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a));
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], 
                    !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                        if (b = m(c).val(), f) return b;
                        g.push(b);
                    }
                    return g;
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = m.makeArray(b), g = e.length;
                    while (g--) if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try {
                        d.selected = c = !0;
                    } catch (h) {
                        d.scrollHeight;
                    } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e;
                }
            }
        }
    }), m.each([ "radio", "checkbox" ], function() {
        m.valHooks[this] = {
            set: function(a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0;
            }
        }, k.checkOn || (m.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    });
    var mb, nb, ob = m.expr.attrHandle, pb = /^(?:checked|selected)$/i, qb = k.getSetAttribute, rb = k.input;
    m.fn.extend({
        attr: function(a, b) {
            return V(this, m.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                m.removeAttr(this, a);
            });
        }
    }), m.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), 
            d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nb : mb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), 
            null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), 
            c) : void m.removeAttr(a, b));
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType) while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rb && qb || !pb.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), 
            a.removeAttribute(qb ? c : d);
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        }
    }), nb = {
        set: function(a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rb && qb || !pb.test(c) ? a.setAttribute(!qb && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, 
            c;
        }
    }, m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = ob[b] || m.find.attr;
        ob[b] = rb && qb || !pb.test(b) ? function(a, b, d) {
            var e, f;
            return d || (f = ob[b], ob[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, 
            ob[b] = f), e;
        } : function(a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null;
        };
    }), rb && qb || (m.attrHooks.value = {
        set: function(a, b, c) {
            return m.nodeName(a, "input") ? void (a.defaultValue = b) : mb && mb.set(a, b, c);
        }
    }), qb || (mb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", 
            "value" === c || b === a.getAttribute(c) ? b : void 0;
        }
    }, ob.id = ob.name = ob.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null;
    }, m.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0;
        },
        set: mb.set
    }, m.attrHooks.contenteditable = {
        set: function(a, b, c) {
            mb.set(a, "" === b ? !1 : b, c);
        }
    }, m.each([ "width", "height" ], function(a, b) {
        m.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0;
            }
        };
    })), k.style || (m.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0;
        },
        set: function(a, b) {
            return a.style.cssText = b + "";
        }
    });
    var sb = /^(?:input|select|textarea|button|object)$/i, tb = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function(a, b) {
            return V(this, m.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return a = m.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a];
                } catch (b) {}
            });
        }
    }), m.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, 
            e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sb.test(a.nodeName) || tb.test(a.nodeName) && a.href ? 0 : -1;
                }
            }
        }
    }), k.hrefNormalized || m.each([ "href", "src" ], function(a, b) {
        m.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4);
            }
        };
    }), k.optSelected || (m.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
        }
    }), m.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        m.propFix[this.toLowerCase()] = this;
    }), k.enctype || (m.propFix.enctype = "encoding");
    var ub = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).addClass(a.call(this, b, this.className));
            });
            if (j) for (b = (a || "").match(E) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : " ")) {
                f = 0;
                while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = m.trim(d), c.className !== g && (c.className = g);
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).removeClass(a.call(this, b, this.className));
            });
            if (j) for (b = (a || "").match(E) || []; i > h; h++) if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : "")) {
                f = 0;
                while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                g = a ? m.trim(d) : "", c.className !== g && (c.className = g);
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b);
            } : function() {
                if ("string" === c) {
                    var b, d = 0, e = m(this), f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                } else (c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), 
                this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "");
            });
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ub, " ").indexOf(b) >= 0) return !0;
            return !1;
        }
    }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        m.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), m.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    });
    var vb = m.now(), wb = /\?/, xb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null, e = m.trim(b + "");
        return e && !m.trim(e.replace(xb, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "");
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b);
    }, m.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new DOMParser(), c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), 
            c.async = "false", c.loadXML(b));
        } catch (e) {
            c = void 0;
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), 
        c;
    };
    var yb, zb, Ab = /#.*$/, Bb = /([?&])_=[^&]*/, Cb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Db = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Eb = /^(?:GET|HEAD)$/, Fb = /^\/\//, Gb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hb = {}, Ib = {}, Jb = "*/".concat("*");
    try {
        zb = location.href;
    } catch (Kb) {
        zb = y.createElement("a"), zb.href = "", zb = zb.href;
    }
    yb = Gb.exec(zb.toLowerCase()) || [];
    function Lb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c)) while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", 
            (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function Mb(a, b, c, d) {
        var e = {}, f = a === Ib;
        function g(h) {
            var i;
            return e[h] = !0, m.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), 
                g(j), !1);
            }), i;
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*");
    }
    function Nb(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c), a;
    }
    function Ob(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e) for (g in h) if (h[g] && h[g].test(e)) {
            i.unshift(g);
            break;
        }
        if (i[0] in c) f = i[0]; else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break;
                }
                d || (d = g);
            }
            f = f || d;
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function Pb(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), 
        i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b);
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                };
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zb,
            type: "GET",
            isLocal: Db.test(yb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": m.parseJSON,
                "text xml": m.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Nb(Nb(a, m.ajaxSettings), b) : Nb(m.ajaxSettings, a);
        },
        ajaxPrefilter: Lb(Hb),
        ajaxTransport: Lb(Ib),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b), l = k.context || k, n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event, o = m.Deferred(), p = m.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!j) {
                            j = {};
                            while (b = Cb.exec(f)) j[b[1].toLowerCase()] = b[2];
                        }
                        b = j[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? f : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this;
                },
                overrideMimeType: function(a) {
                    return t || (k.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > t) for (b in a) q[b] = [ q[b], a[b] ]; else v.always(a[v.status]);
                    return this;
                },
                abort: function(a) {
                    var b = a || u;
                    return i && i.abort(b), x(0, b), this;
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zb) + "").replace(Ab, "").replace(Fb, yb[1] + "//"), 
            k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [ "" ], 
            null == k.crossDomain && (c = Gb.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yb[1] && c[2] === yb[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yb[3] || ("http:" === yb[1] ? "80" : "443")))), 
            k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), 
            Mb(Hb, k, b, v), 2 === t) return v;
            h = m.event && k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), 
            k.type = k.type.toUpperCase(), k.hasContent = !Eb.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wb.test(e) ? "&" : "?") + k.data, 
            delete k.data), k.cache === !1 && (k.url = Bb.test(e) ? e.replace(Bb, "$1_=" + vb++) : e + (wb.test(e) ? "&" : "?") + "_=" + vb++)), 
            k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), 
            m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), 
            v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jb + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (d in {
                success: 1,
                error: 1,
                complete: 1
            }) v[d](k[d]);
            if (i = Mb(Ib, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [ v, k ]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout");
                }, k.timeout));
                try {
                    t = 1, i.send(r, x);
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w);
                }
            } else x(-1, "No Transport");
            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, 
                j = a >= 200 && 300 > a || 304 === a, c && (u = Ob(k, v, c)), u = Pb(k, u, v, j), 
                j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), 
                w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, 
                r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), 
                v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [ r, x, v ]) : o.rejectWith(l, [ v, x, s ]), 
                v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [ v, k, j ? r : s ]), 
                p.fireWith(l, [ v, x ]), h && (n.trigger("ajaxComplete", [ v, k ]), --m.active || m.event.trigger("ajaxStop")));
            }
            return v;
        },
        getJSON: function(a, b, c) {
            return m.get(a, b, c, "json");
        },
        getScript: function(a, b) {
            return m.get(a, void 0, b, "script");
        }
    }), m.each([ "get", "post" ], function(a, b) {
        m[b] = function(a, c, d, e) {
            return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            });
        };
    }), m._evalUrl = function(a) {
        return m.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        });
    }, m.fn.extend({
        wrapAll: function(a) {
            if (m.isFunction(a)) return this.each(function(b) {
                m(this).wrapAll(a.call(this, b));
            });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(a) {
            return this.each(m.isFunction(a) ? function(b) {
                m(this).wrapInner(a.call(this, b));
            } : function() {
                var b = m(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = m.isFunction(a);
            return this.each(function(c) {
                m(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes);
            }).end();
        }
    }), m.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"));
    }, m.expr.filters.visible = function(a) {
        return !m.expr.filters.hidden(a);
    };
    var Qb = /%20/g, Rb = /\[\]$/, Sb = /\r?\n/g, Tb = /^(?:submit|button|image|reset|file)$/i, Ub = /^(?:input|select|textarea|keygen)/i;
    function Vb(a, b, c, d) {
        var e;
        if (m.isArray(b)) m.each(b, function(b, e) {
            c || Rb.test(a) ? d(a, e) : Vb(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== m.type(b)) d(a, b); else for (e in b) Vb(a + "[" + e + "]", b[e], c, d);
    }
    m.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function() {
            e(this.name, this.value);
        }); else for (c in a) Vb(c, a[c], b, e);
        return d.join("&").replace(Qb, "+");
    }, m.fn.extend({
        serialize: function() {
            return m.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Ub.test(this.nodeName) && !Tb.test(a) && (this.checked || !W.test(a));
            }).map(function(a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Sb, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(Sb, "\r\n")
                };
            }).get();
        }
    }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zb() || $b();
    } : Zb;
    var Wb = 0, Xb = {}, Yb = m.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Xb) Xb[a](void 0, !0);
    }), k.cors = !!Yb && "withCredentials" in Yb, Yb = k.ajax = !!Yb, Yb && m.ajaxTransport(function(a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(), g = ++Wb;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState)) if (delete Xb[g], b = void 0, f.onreadystatechange = m.noop, 
                        e) 4 !== f.readyState && f.abort(); else {
                            j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                            try {
                                i = f.statusText;
                            } catch (k) {
                                i = "";
                            }
                            h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404;
                        }
                        j && d(h, i, j, f.getAllResponseHeaders());
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xb[g] = b : b();
                },
                abort: function() {
                    b && b(void 0, !0);
                }
            };
        }
    });
    function Zb() {
        try {
            return new a.XMLHttpRequest();
        } catch (b) {}
    }
    function $b() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP");
        } catch (b) {}
    }
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return m.globalEval(a), a;
            }
        }
    }), m.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1);
    }), m.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function(d, e) {
                    b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), 
                    b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, 
                        b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"));
                    }, c.insertBefore(b, c.firstChild);
                },
                abort: function() {
                    b && b.onload(void 0, !0);
                }
            };
        }
    });
    var _b = [], ac = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = _b.pop() || m.expando + "_" + vb++;
            return this[a] = !0, a;
        }
    }), m.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ac.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ac.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, 
        h ? b[h] = b[h].replace(ac, "$1" + e) : b.jsonp !== !1 && (b.url += (wb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), 
        b.converters["script json"] = function() {
            return g || m.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments;
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _b.push(e)), g && m.isFunction(f) && f(g[0]), 
            g = f = void 0;
        }), "script") : void 0;
    }), m.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a), e = !c && [];
        return d ? [ b.createElement(d[1]) ] : (d = m.buildFragment([ a ], b, e), e && e.length && m(e).remove(), 
        m.merge([], d.childNodes));
    };
    var bc = m.fn.load;
    m.fn.load = function(a, b, c) {
        if ("string" != typeof a && bc) return bc.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, 
        b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function(a) {
            e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a);
        }).complete(c && function(a, b) {
            g.each(c, e || [ a.responseText, b, a ]);
        }), this;
    }, m.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        m.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), m.expr.filters.animated = function(a) {
        return m.grep(m.timers, function(b) {
            return a === b.elem;
        }).length;
    };
    var cc = a.document.documentElement;
    function dc(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
    }
    m.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"), l = m(a), n = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), 
            i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [ f, i ]) > -1, 
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), 
            m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), 
            null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n);
        }
    }, m.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                m.offset.setOffset(this, a, b);
            });
            var b, c, d = {
                top: 0,
                left: 0
            }, e = this[0], f = e && e.ownerDocument;
            if (f) return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), 
            c = dc(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d;
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                }, d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), 
                c.left += m.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || cc;
                while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) a = a.offsetParent;
                return a || cc;
            });
        }
    }), m.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function(d) {
            return V(this, function(a, d, e) {
                var f = dc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e);
            }, a, d, arguments.length, null);
        };
    }), m.each([ "top", "left" ], function(a, b) {
        m.cssHooks[b] = La(k.pixelPosition, function(a, c) {
            return c ? (c = Ja(a, b), Ha.test(c) ? m(a).position()[b] + "px" : c) : void 0;
        });
    }), m.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        m.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            m.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function(b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, 
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g);
                }, b, f ? d : void 0, f, null);
            };
        });
    }), m.fn.size = function() {
        return this.length;
    }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return m;
    });
    var ec = a.jQuery, fc = a.$;
    return m.noConflict = function(b) {
        return a.$ === m && (a.$ = fc), b && a.jQuery === m && (a.jQuery = ec), m;
    }, typeof b === K && (a.jQuery = a.$ = m), m;
});

(function(factory) {
    if (typeof define === "function" && define.amd) {
        define([ "jquery" ], factory);
    } else {
        factory(jQuery);
    }
})(function($) {
    $.ui = $.ui || {};
    var version = $.ui.version = "1.12.1";
    var widgetUuid = 0;
    var widgetSlice = Array.prototype.slice;
    $.cleanData = function(orig) {
        return function(elems) {
            var events, elem, i;
            for (i = 0; (elem = elems[i]) != null; i++) {
                try {
                    events = $._data(elem, "events");
                    if (events && events.remove) {
                        $(elem).triggerHandler("remove");
                    }
                } catch (e) {}
            }
            orig(elems);
        };
    }($.cleanData);
    $.widget = function(name, base, prototype) {
        var existingConstructor, constructor, basePrototype;
        var proxiedPrototype = {};
        var namespace = name.split(".")[0];
        name = name.split(".")[1];
        var fullName = namespace + "-" + name;
        if (!prototype) {
            prototype = base;
            base = $.Widget;
        }
        if ($.isArray(prototype)) {
            prototype = $.extend.apply(null, [ {} ].concat(prototype));
        }
        $.expr[":"][fullName.toLowerCase()] = function(elem) {
            return !!$.data(elem, fullName);
        };
        $[namespace] = $[namespace] || {};
        existingConstructor = $[namespace][name];
        constructor = $[namespace][name] = function(options, element) {
            if (!this._createWidget) {
                return new constructor(options, element);
            }
            if (arguments.length) {
                this._createWidget(options, element);
            }
        };
        $.extend(constructor, existingConstructor, {
            version: prototype.version,
            _proto: $.extend({}, prototype),
            _childConstructors: []
        });
        basePrototype = new base();
        basePrototype.options = $.widget.extend({}, basePrototype.options);
        $.each(prototype, function(prop, value) {
            if (!$.isFunction(value)) {
                proxiedPrototype[prop] = value;
                return;
            }
            proxiedPrototype[prop] = function() {
                function _super() {
                    return base.prototype[prop].apply(this, arguments);
                }
                function _superApply(args) {
                    return base.prototype[prop].apply(this, args);
                }
                return function() {
                    var __super = this._super;
                    var __superApply = this._superApply;
                    var returnValue;
                    this._super = _super;
                    this._superApply = _superApply;
                    returnValue = value.apply(this, arguments);
                    this._super = __super;
                    this._superApply = __superApply;
                    return returnValue;
                };
            }();
        });
        constructor.prototype = $.widget.extend(basePrototype, {
            widgetEventPrefix: existingConstructor ? basePrototype.widgetEventPrefix || name : name
        }, proxiedPrototype, {
            constructor: constructor,
            namespace: namespace,
            widgetName: name,
            widgetFullName: fullName
        });
        if (existingConstructor) {
            $.each(existingConstructor._childConstructors, function(i, child) {
                var childPrototype = child.prototype;
                $.widget(childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto);
            });
            delete existingConstructor._childConstructors;
        } else {
            base._childConstructors.push(constructor);
        }
        $.widget.bridge(name, constructor);
        return constructor;
    };
    $.widget.extend = function(target) {
        var input = widgetSlice.call(arguments, 1);
        var inputIndex = 0;
        var inputLength = input.length;
        var key;
        var value;
        for (;inputIndex < inputLength; inputIndex++) {
            for (key in input[inputIndex]) {
                value = input[inputIndex][key];
                if (input[inputIndex].hasOwnProperty(key) && value !== undefined) {
                    if ($.isPlainObject(value)) {
                        target[key] = $.isPlainObject(target[key]) ? $.widget.extend({}, target[key], value) : $.widget.extend({}, value);
                    } else {
                        target[key] = value;
                    }
                }
            }
        }
        return target;
    };
    $.widget.bridge = function(name, object) {
        var fullName = object.prototype.widgetFullName || name;
        $.fn[name] = function(options) {
            var isMethodCall = typeof options === "string";
            var args = widgetSlice.call(arguments, 1);
            var returnValue = this;
            if (isMethodCall) {
                if (!this.length && options === "instance") {
                    returnValue = undefined;
                } else {
                    this.each(function() {
                        var methodValue;
                        var instance = $.data(this, fullName);
                        if (options === "instance") {
                            returnValue = instance;
                            return false;
                        }
                        if (!instance) {
                            return $.error("cannot call methods on " + name + " prior to initialization; " + "attempted to call method '" + options + "'");
                        }
                        if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                            return $.error("no such method '" + options + "' for " + name + " widget instance");
                        }
                        methodValue = instance[options].apply(instance, args);
                        if (methodValue !== instance && methodValue !== undefined) {
                            returnValue = methodValue && methodValue.jquery ? returnValue.pushStack(methodValue.get()) : methodValue;
                            return false;
                        }
                    });
                }
            } else {
                if (args.length) {
                    options = $.widget.extend.apply(null, [ options ].concat(args));
                }
                this.each(function() {
                    var instance = $.data(this, fullName);
                    if (instance) {
                        instance.option(options || {});
                        if (instance._init) {
                            instance._init();
                        }
                    } else {
                        $.data(this, fullName, new object(options, this));
                    }
                });
            }
            return returnValue;
        };
    };
    $.Widget = function() {};
    $.Widget._childConstructors = [];
    $.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: false,
            create: null
        },
        _createWidget: function(options, element) {
            element = $(element || this.defaultElement || this)[0];
            this.element = $(element);
            this.uuid = widgetUuid++;
            this.eventNamespace = "." + this.widgetName + this.uuid;
            this.bindings = $();
            this.hoverable = $();
            this.focusable = $();
            this.classesElementLookup = {};
            if (element !== this) {
                $.data(element, this.widgetFullName, this);
                this._on(true, this.element, {
                    remove: function(event) {
                        if (event.target === element) {
                            this.destroy();
                        }
                    }
                });
                this.document = $(element.style ? element.ownerDocument : element.document || element);
                this.window = $(this.document[0].defaultView || this.document[0].parentWindow);
            }
            this.options = $.widget.extend({}, this.options, this._getCreateOptions(), options);
            this._create();
            if (this.options.disabled) {
                this._setOptionDisabled(this.options.disabled);
            }
            this._trigger("create", null, this._getCreateEventData());
            this._init();
        },
        _getCreateOptions: function() {
            return {};
        },
        _getCreateEventData: $.noop,
        _create: $.noop,
        _init: $.noop,
        destroy: function() {
            var that = this;
            this._destroy();
            $.each(this.classesElementLookup, function(key, value) {
                that._removeClass(value, key);
            });
            this.element.off(this.eventNamespace).removeData(this.widgetFullName);
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled");
            this.bindings.off(this.eventNamespace);
        },
        _destroy: $.noop,
        widget: function() {
            return this.element;
        },
        option: function(key, value) {
            var options = key;
            var parts;
            var curOption;
            var i;
            if (arguments.length === 0) {
                return $.widget.extend({}, this.options);
            }
            if (typeof key === "string") {
                options = {};
                parts = key.split(".");
                key = parts.shift();
                if (parts.length) {
                    curOption = options[key] = $.widget.extend({}, this.options[key]);
                    for (i = 0; i < parts.length - 1; i++) {
                        curOption[parts[i]] = curOption[parts[i]] || {};
                        curOption = curOption[parts[i]];
                    }
                    key = parts.pop();
                    if (arguments.length === 1) {
                        return curOption[key] === undefined ? null : curOption[key];
                    }
                    curOption[key] = value;
                } else {
                    if (arguments.length === 1) {
                        return this.options[key] === undefined ? null : this.options[key];
                    }
                    options[key] = value;
                }
            }
            this._setOptions(options);
            return this;
        },
        _setOptions: function(options) {
            var key;
            for (key in options) {
                this._setOption(key, options[key]);
            }
            return this;
        },
        _setOption: function(key, value) {
            if (key === "classes") {
                this._setOptionClasses(value);
            }
            this.options[key] = value;
            if (key === "disabled") {
                this._setOptionDisabled(value);
            }
            return this;
        },
        _setOptionClasses: function(value) {
            var classKey, elements, currentElements;
            for (classKey in value) {
                currentElements = this.classesElementLookup[classKey];
                if (value[classKey] === this.options.classes[classKey] || !currentElements || !currentElements.length) {
                    continue;
                }
                elements = $(currentElements.get());
                this._removeClass(currentElements, classKey);
                elements.addClass(this._classes({
                    element: elements,
                    keys: classKey,
                    classes: value,
                    add: true
                }));
            }
        },
        _setOptionDisabled: function(value) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!value);
            if (value) {
                this._removeClass(this.hoverable, null, "ui-state-hover");
                this._removeClass(this.focusable, null, "ui-state-focus");
            }
        },
        enable: function() {
            return this._setOptions({
                disabled: false
            });
        },
        disable: function() {
            return this._setOptions({
                disabled: true
            });
        },
        _classes: function(options) {
            var full = [];
            var that = this;
            options = $.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, options);
            function processClassString(classes, checkOption) {
                var current, i;
                for (i = 0; i < classes.length; i++) {
                    current = that.classesElementLookup[classes[i]] || $();
                    if (options.add) {
                        current = $($.unique(current.get().concat(options.element.get())));
                    } else {
                        current = $(current.not(options.element).get());
                    }
                    that.classesElementLookup[classes[i]] = current;
                    full.push(classes[i]);
                    if (checkOption && options.classes[classes[i]]) {
                        full.push(options.classes[classes[i]]);
                    }
                }
            }
            this._on(options.element, {
                remove: "_untrackClassesElement"
            });
            if (options.keys) {
                processClassString(options.keys.match(/\S+/g) || [], true);
            }
            if (options.extra) {
                processClassString(options.extra.match(/\S+/g) || []);
            }
            return full.join(" ");
        },
        _untrackClassesElement: function(event) {
            var that = this;
            $.each(that.classesElementLookup, function(key, value) {
                if ($.inArray(event.target, value) !== -1) {
                    that.classesElementLookup[key] = $(value.not(event.target).get());
                }
            });
        },
        _removeClass: function(element, keys, extra) {
            return this._toggleClass(element, keys, extra, false);
        },
        _addClass: function(element, keys, extra) {
            return this._toggleClass(element, keys, extra, true);
        },
        _toggleClass: function(element, keys, extra, add) {
            add = typeof add === "boolean" ? add : extra;
            var shift = typeof element === "string" || element === null, options = {
                extra: shift ? keys : extra,
                keys: shift ? element : keys,
                element: shift ? this.element : element,
                add: add
            };
            options.element.toggleClass(this._classes(options), add);
            return this;
        },
        _on: function(suppressDisabledCheck, element, handlers) {
            var delegateElement;
            var instance = this;
            if (typeof suppressDisabledCheck !== "boolean") {
                handlers = element;
                element = suppressDisabledCheck;
                suppressDisabledCheck = false;
            }
            if (!handlers) {
                handlers = element;
                element = this.element;
                delegateElement = this.widget();
            } else {
                element = delegateElement = $(element);
                this.bindings = this.bindings.add(element);
            }
            $.each(handlers, function(event, handler) {
                function handlerProxy() {
                    if (!suppressDisabledCheck && (instance.options.disabled === true || $(this).hasClass("ui-state-disabled"))) {
                        return;
                    }
                    return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments);
                }
                if (typeof handler !== "string") {
                    handlerProxy.guid = handler.guid = handler.guid || handlerProxy.guid || $.guid++;
                }
                var match = event.match(/^([\w:-]*)\s*(.*)$/);
                var eventName = match[1] + instance.eventNamespace;
                var selector = match[2];
                if (selector) {
                    delegateElement.on(eventName, selector, handlerProxy);
                } else {
                    element.on(eventName, handlerProxy);
                }
            });
        },
        _off: function(element, eventName) {
            eventName = (eventName || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
            element.off(eventName).off(eventName);
            this.bindings = $(this.bindings.not(element).get());
            this.focusable = $(this.focusable.not(element).get());
            this.hoverable = $(this.hoverable.not(element).get());
        },
        _delay: function(handler, delay) {
            function handlerProxy() {
                return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments);
            }
            var instance = this;
            return setTimeout(handlerProxy, delay || 0);
        },
        _hoverable: function(element) {
            this.hoverable = this.hoverable.add(element);
            this._on(element, {
                mouseenter: function(event) {
                    this._addClass($(event.currentTarget), null, "ui-state-hover");
                },
                mouseleave: function(event) {
                    this._removeClass($(event.currentTarget), null, "ui-state-hover");
                }
            });
        },
        _focusable: function(element) {
            this.focusable = this.focusable.add(element);
            this._on(element, {
                focusin: function(event) {
                    this._addClass($(event.currentTarget), null, "ui-state-focus");
                },
                focusout: function(event) {
                    this._removeClass($(event.currentTarget), null, "ui-state-focus");
                }
            });
        },
        _trigger: function(type, event, data) {
            var prop, orig;
            var callback = this.options[type];
            data = data || {};
            event = $.Event(event);
            event.type = (type === this.widgetEventPrefix ? type : this.widgetEventPrefix + type).toLowerCase();
            event.target = this.element[0];
            orig = event.originalEvent;
            if (orig) {
                for (prop in orig) {
                    if (!(prop in event)) {
                        event[prop] = orig[prop];
                    }
                }
            }
            this.element.trigger(event, data);
            return !($.isFunction(callback) && callback.apply(this.element[0], [ event ].concat(data)) === false || event.isDefaultPrevented());
        }
    };
    $.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(method, defaultEffect) {
        $.Widget.prototype["_" + method] = function(element, options, callback) {
            if (typeof options === "string") {
                options = {
                    effect: options
                };
            }
            var hasOptions;
            var effectName = !options ? method : options === true || typeof options === "number" ? defaultEffect : options.effect || defaultEffect;
            options = options || {};
            if (typeof options === "number") {
                options = {
                    duration: options
                };
            }
            hasOptions = !$.isEmptyObject(options);
            options.complete = callback;
            if (options.delay) {
                element.delay(options.delay);
            }
            if (hasOptions && $.effects && $.effects.effect[effectName]) {
                element[method](options);
            } else if (effectName !== method && element[effectName]) {
                element[effectName](options.duration, options.easing, callback);
            } else {
                element.queue(function(next) {
                    $(this)[method]();
                    if (callback) {
                        callback.call(element[0]);
                    }
                    next();
                });
            }
        };
    });
    var widget = $.widget;
    (function() {
        var cachedScrollbarWidth, max = Math.max, abs = Math.abs, rhorizontal = /left|center|right/, rvertical = /top|center|bottom/, roffset = /[\+\-]\d+(\.[\d]+)?%?/, rposition = /^\w+/, rpercent = /%$/, _position = $.fn.position;
        function getOffsets(offsets, width, height) {
            return [ parseFloat(offsets[0]) * (rpercent.test(offsets[0]) ? width / 100 : 1), parseFloat(offsets[1]) * (rpercent.test(offsets[1]) ? height / 100 : 1) ];
        }
        function parseCss(element, property) {
            return parseInt($.css(element, property), 10) || 0;
        }
        function getDimensions(elem) {
            var raw = elem[0];
            if (raw.nodeType === 9) {
                return {
                    width: elem.width(),
                    height: elem.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                };
            }
            if ($.isWindow(raw)) {
                return {
                    width: elem.width(),
                    height: elem.height(),
                    offset: {
                        top: elem.scrollTop(),
                        left: elem.scrollLeft()
                    }
                };
            }
            if (raw.preventDefault) {
                return {
                    width: 0,
                    height: 0,
                    offset: {
                        top: raw.pageY,
                        left: raw.pageX
                    }
                };
            }
            return {
                width: elem.outerWidth(),
                height: elem.outerHeight(),
                offset: elem.offset()
            };
        }
        $.position = {
            scrollbarWidth: function() {
                if (cachedScrollbarWidth !== undefined) {
                    return cachedScrollbarWidth;
                }
                var w1, w2, div = $("<div " + "style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'>" + "<div style='height:100px;width:auto;'></div></div>"), innerDiv = div.children()[0];
                $("body").append(div);
                w1 = innerDiv.offsetWidth;
                div.css("overflow", "scroll");
                w2 = innerDiv.offsetWidth;
                if (w1 === w2) {
                    w2 = div[0].clientWidth;
                }
                div.remove();
                return cachedScrollbarWidth = w1 - w2;
            },
            getScrollInfo: function(within) {
                var overflowX = within.isWindow || within.isDocument ? "" : within.element.css("overflow-x"), overflowY = within.isWindow || within.isDocument ? "" : within.element.css("overflow-y"), hasOverflowX = overflowX === "scroll" || overflowX === "auto" && within.width < within.element[0].scrollWidth, hasOverflowY = overflowY === "scroll" || overflowY === "auto" && within.height < within.element[0].scrollHeight;
                return {
                    width: hasOverflowY ? $.position.scrollbarWidth() : 0,
                    height: hasOverflowX ? $.position.scrollbarWidth() : 0
                };
            },
            getWithinInfo: function(element) {
                var withinElement = $(element || window), isWindow = $.isWindow(withinElement[0]), isDocument = !!withinElement[0] && withinElement[0].nodeType === 9, hasOffset = !isWindow && !isDocument;
                return {
                    element: withinElement,
                    isWindow: isWindow,
                    isDocument: isDocument,
                    offset: hasOffset ? $(element).offset() : {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: withinElement.scrollLeft(),
                    scrollTop: withinElement.scrollTop(),
                    width: withinElement.outerWidth(),
                    height: withinElement.outerHeight()
                };
            }
        };
        $.fn.position = function(options) {
            if (!options || !options.of) {
                return _position.apply(this, arguments);
            }
            options = $.extend({}, options);
            var atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions, target = $(options.of), within = $.position.getWithinInfo(options.within), scrollInfo = $.position.getScrollInfo(within), collision = (options.collision || "flip").split(" "), offsets = {};
            dimensions = getDimensions(target);
            if (target[0].preventDefault) {
                options.at = "left top";
            }
            targetWidth = dimensions.width;
            targetHeight = dimensions.height;
            targetOffset = dimensions.offset;
            basePosition = $.extend({}, targetOffset);
            $.each([ "my", "at" ], function() {
                var pos = (options[this] || "").split(" "), horizontalOffset, verticalOffset;
                if (pos.length === 1) {
                    pos = rhorizontal.test(pos[0]) ? pos.concat([ "center" ]) : rvertical.test(pos[0]) ? [ "center" ].concat(pos) : [ "center", "center" ];
                }
                pos[0] = rhorizontal.test(pos[0]) ? pos[0] : "center";
                pos[1] = rvertical.test(pos[1]) ? pos[1] : "center";
                horizontalOffset = roffset.exec(pos[0]);
                verticalOffset = roffset.exec(pos[1]);
                offsets[this] = [ horizontalOffset ? horizontalOffset[0] : 0, verticalOffset ? verticalOffset[0] : 0 ];
                options[this] = [ rposition.exec(pos[0])[0], rposition.exec(pos[1])[0] ];
            });
            if (collision.length === 1) {
                collision[1] = collision[0];
            }
            if (options.at[0] === "right") {
                basePosition.left += targetWidth;
            } else if (options.at[0] === "center") {
                basePosition.left += targetWidth / 2;
            }
            if (options.at[1] === "bottom") {
                basePosition.top += targetHeight;
            } else if (options.at[1] === "center") {
                basePosition.top += targetHeight / 2;
            }
            atOffset = getOffsets(offsets.at, targetWidth, targetHeight);
            basePosition.left += atOffset[0];
            basePosition.top += atOffset[1];
            return this.each(function() {
                var collisionPosition, using, elem = $(this), elemWidth = elem.outerWidth(), elemHeight = elem.outerHeight(), marginLeft = parseCss(this, "marginLeft"), marginTop = parseCss(this, "marginTop"), collisionWidth = elemWidth + marginLeft + parseCss(this, "marginRight") + scrollInfo.width, collisionHeight = elemHeight + marginTop + parseCss(this, "marginBottom") + scrollInfo.height, position = $.extend({}, basePosition), myOffset = getOffsets(offsets.my, elem.outerWidth(), elem.outerHeight());
                if (options.my[0] === "right") {
                    position.left -= elemWidth;
                } else if (options.my[0] === "center") {
                    position.left -= elemWidth / 2;
                }
                if (options.my[1] === "bottom") {
                    position.top -= elemHeight;
                } else if (options.my[1] === "center") {
                    position.top -= elemHeight / 2;
                }
                position.left += myOffset[0];
                position.top += myOffset[1];
                collisionPosition = {
                    marginLeft: marginLeft,
                    marginTop: marginTop
                };
                $.each([ "left", "top" ], function(i, dir) {
                    if ($.ui.position[collision[i]]) {
                        $.ui.position[collision[i]][dir](position, {
                            targetWidth: targetWidth,
                            targetHeight: targetHeight,
                            elemWidth: elemWidth,
                            elemHeight: elemHeight,
                            collisionPosition: collisionPosition,
                            collisionWidth: collisionWidth,
                            collisionHeight: collisionHeight,
                            offset: [ atOffset[0] + myOffset[0], atOffset[1] + myOffset[1] ],
                            my: options.my,
                            at: options.at,
                            within: within,
                            elem: elem
                        });
                    }
                });
                if (options.using) {
                    using = function(props) {
                        var left = targetOffset.left - position.left, right = left + targetWidth - elemWidth, top = targetOffset.top - position.top, bottom = top + targetHeight - elemHeight, feedback = {
                            target: {
                                element: target,
                                left: targetOffset.left,
                                top: targetOffset.top,
                                width: targetWidth,
                                height: targetHeight
                            },
                            element: {
                                element: elem,
                                left: position.left,
                                top: position.top,
                                width: elemWidth,
                                height: elemHeight
                            },
                            horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
                            vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle"
                        };
                        if (targetWidth < elemWidth && abs(left + right) < targetWidth) {
                            feedback.horizontal = "center";
                        }
                        if (targetHeight < elemHeight && abs(top + bottom) < targetHeight) {
                            feedback.vertical = "middle";
                        }
                        if (max(abs(left), abs(right)) > max(abs(top), abs(bottom))) {
                            feedback.important = "horizontal";
                        } else {
                            feedback.important = "vertical";
                        }
                        options.using.call(this, props, feedback);
                    };
                }
                elem.offset($.extend(position, {
                    using: using
                }));
            });
        };
        $.ui.position = {
            fit: {
                left: function(position, data) {
                    var within = data.within, withinOffset = within.isWindow ? within.scrollLeft : within.offset.left, outerWidth = within.width, collisionPosLeft = position.left - data.collisionPosition.marginLeft, overLeft = withinOffset - collisionPosLeft, overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset, newOverRight;
                    if (data.collisionWidth > outerWidth) {
                        if (overLeft > 0 && overRight <= 0) {
                            newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
                            position.left += overLeft - newOverRight;
                        } else if (overRight > 0 && overLeft <= 0) {
                            position.left = withinOffset;
                        } else {
                            if (overLeft > overRight) {
                                position.left = withinOffset + outerWidth - data.collisionWidth;
                            } else {
                                position.left = withinOffset;
                            }
                        }
                    } else if (overLeft > 0) {
                        position.left += overLeft;
                    } else if (overRight > 0) {
                        position.left -= overRight;
                    } else {
                        position.left = max(position.left - collisionPosLeft, position.left);
                    }
                },
                top: function(position, data) {
                    var within = data.within, withinOffset = within.isWindow ? within.scrollTop : within.offset.top, outerHeight = data.within.height, collisionPosTop = position.top - data.collisionPosition.marginTop, overTop = withinOffset - collisionPosTop, overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset, newOverBottom;
                    if (data.collisionHeight > outerHeight) {
                        if (overTop > 0 && overBottom <= 0) {
                            newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
                            position.top += overTop - newOverBottom;
                        } else if (overBottom > 0 && overTop <= 0) {
                            position.top = withinOffset;
                        } else {
                            if (overTop > overBottom) {
                                position.top = withinOffset + outerHeight - data.collisionHeight;
                            } else {
                                position.top = withinOffset;
                            }
                        }
                    } else if (overTop > 0) {
                        position.top += overTop;
                    } else if (overBottom > 0) {
                        position.top -= overBottom;
                    } else {
                        position.top = max(position.top - collisionPosTop, position.top);
                    }
                }
            },
            flip: {
                left: function(position, data) {
                    var within = data.within, withinOffset = within.offset.left + within.scrollLeft, outerWidth = within.width, offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left, collisionPosLeft = position.left - data.collisionPosition.marginLeft, overLeft = collisionPosLeft - offsetLeft, overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft, myOffset = data.my[0] === "left" ? -data.elemWidth : data.my[0] === "right" ? data.elemWidth : 0, atOffset = data.at[0] === "left" ? data.targetWidth : data.at[0] === "right" ? -data.targetWidth : 0, offset = -2 * data.offset[0], newOverRight, newOverLeft;
                    if (overLeft < 0) {
                        newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;
                        if (newOverRight < 0 || newOverRight < abs(overLeft)) {
                            position.left += myOffset + atOffset + offset;
                        }
                    } else if (overRight > 0) {
                        newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;
                        if (newOverLeft > 0 || abs(newOverLeft) < overRight) {
                            position.left += myOffset + atOffset + offset;
                        }
                    }
                },
                top: function(position, data) {
                    var within = data.within, withinOffset = within.offset.top + within.scrollTop, outerHeight = within.height, offsetTop = within.isWindow ? within.scrollTop : within.offset.top, collisionPosTop = position.top - data.collisionPosition.marginTop, overTop = collisionPosTop - offsetTop, overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop, top = data.my[1] === "top", myOffset = top ? -data.elemHeight : data.my[1] === "bottom" ? data.elemHeight : 0, atOffset = data.at[1] === "top" ? data.targetHeight : data.at[1] === "bottom" ? -data.targetHeight : 0, offset = -2 * data.offset[1], newOverTop, newOverBottom;
                    if (overTop < 0) {
                        newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;
                        if (newOverBottom < 0 || newOverBottom < abs(overTop)) {
                            position.top += myOffset + atOffset + offset;
                        }
                    } else if (overBottom > 0) {
                        newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;
                        if (newOverTop > 0 || abs(newOverTop) < overBottom) {
                            position.top += myOffset + atOffset + offset;
                        }
                    }
                }
            },
            flipfit: {
                left: function() {
                    $.ui.position.flip.left.apply(this, arguments);
                    $.ui.position.fit.left.apply(this, arguments);
                },
                top: function() {
                    $.ui.position.flip.top.apply(this, arguments);
                    $.ui.position.fit.top.apply(this, arguments);
                }
            }
        };
    })();
    var position = $.ui.position;
    var data = $.extend($.expr[":"], {
        data: $.expr.createPseudo ? $.expr.createPseudo(function(dataName) {
            return function(elem) {
                return !!$.data(elem, dataName);
            };
        }) : function(elem, i, match) {
            return !!$.data(elem, match[3]);
        }
    });
    var disableSelection = $.fn.extend({
        disableSelection: function() {
            var eventType = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.on(eventType + ".ui-disableSelection", function(event) {
                    event.preventDefault();
                });
            };
        }(),
        enableSelection: function() {
            return this.off(".ui-disableSelection");
        }
    });
    var dataSpace = "ui-effects-", dataSpaceStyle = "ui-effects-style", dataSpaceAnimated = "ui-effects-animated", jQuery = $;
    $.effects = {
        effect: {}
    };
    (function(jQuery, undefined) {
        var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor " + "borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", rplusequals = /^([\-+])=\s*(\d+\.?\d*)/, stringParsers = [ {
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(execResult) {
                return [ execResult[1], execResult[2], execResult[3], execResult[4] ];
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(execResult) {
                return [ execResult[1] * 2.55, execResult[2] * 2.55, execResult[3] * 2.55, execResult[4] ];
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(execResult) {
                return [ parseInt(execResult[1], 16), parseInt(execResult[2], 16), parseInt(execResult[3], 16) ];
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(execResult) {
                return [ parseInt(execResult[1] + execResult[1], 16), parseInt(execResult[2] + execResult[2], 16), parseInt(execResult[3] + execResult[3], 16) ];
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(execResult) {
                return [ execResult[1], execResult[2] / 100, execResult[3] / 100, execResult[4] ];
            }
        } ], color = jQuery.Color = function(color, green, blue, alpha) {
            return new jQuery.Color.fn.parse(color, green, blue, alpha);
        }, spaces = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, propTypes = {
            "byte": {
                floor: true,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: true
            }
        }, support = color.support = {}, supportElem = jQuery("<p>")[0], colors, each = jQuery.each;
        supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
        support.rgba = supportElem.style.backgroundColor.indexOf("rgba") > -1;
        each(spaces, function(spaceName, space) {
            space.cache = "_" + spaceName;
            space.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            };
        });
        function clamp(value, prop, allowEmpty) {
            var type = propTypes[prop.type] || {};
            if (value == null) {
                return allowEmpty || !prop.def ? null : prop.def;
            }
            value = type.floor ? ~~value : parseFloat(value);
            if (isNaN(value)) {
                return prop.def;
            }
            if (type.mod) {
                return (value + type.mod) % type.mod;
            }
            return 0 > value ? 0 : type.max < value ? type.max : value;
        }
        function stringParse(string) {
            var inst = color(), rgba = inst._rgba = [];
            string = string.toLowerCase();
            each(stringParsers, function(i, parser) {
                var parsed, match = parser.re.exec(string), values = match && parser.parse(match), spaceName = parser.space || "rgba";
                if (values) {
                    parsed = inst[spaceName](values);
                    inst[spaces[spaceName].cache] = parsed[spaces[spaceName].cache];
                    rgba = inst._rgba = parsed._rgba;
                    return false;
                }
            });
            if (rgba.length) {
                if (rgba.join() === "0,0,0,0") {
                    jQuery.extend(rgba, colors.transparent);
                }
                return inst;
            }
            return colors[string];
        }
        color.fn = jQuery.extend(color.prototype, {
            parse: function(red, green, blue, alpha) {
                if (red === undefined) {
                    this._rgba = [ null, null, null, null ];
                    return this;
                }
                if (red.jquery || red.nodeType) {
                    red = jQuery(red).css(green);
                    green = undefined;
                }
                var inst = this, type = jQuery.type(red), rgba = this._rgba = [];
                if (green !== undefined) {
                    red = [ red, green, blue, alpha ];
                    type = "array";
                }
                if (type === "string") {
                    return this.parse(stringParse(red) || colors._default);
                }
                if (type === "array") {
                    each(spaces.rgba.props, function(key, prop) {
                        rgba[prop.idx] = clamp(red[prop.idx], prop);
                    });
                    return this;
                }
                if (type === "object") {
                    if (red instanceof color) {
                        each(spaces, function(spaceName, space) {
                            if (red[space.cache]) {
                                inst[space.cache] = red[space.cache].slice();
                            }
                        });
                    } else {
                        each(spaces, function(spaceName, space) {
                            var cache = space.cache;
                            each(space.props, function(key, prop) {
                                if (!inst[cache] && space.to) {
                                    if (key === "alpha" || red[key] == null) {
                                        return;
                                    }
                                    inst[cache] = space.to(inst._rgba);
                                }
                                inst[cache][prop.idx] = clamp(red[key], prop, true);
                            });
                            if (inst[cache] && jQuery.inArray(null, inst[cache].slice(0, 3)) < 0) {
                                inst[cache][3] = 1;
                                if (space.from) {
                                    inst._rgba = space.from(inst[cache]);
                                }
                            }
                        });
                    }
                    return this;
                }
            },
            is: function(compare) {
                var is = color(compare), same = true, inst = this;
                each(spaces, function(_, space) {
                    var localCache, isCache = is[space.cache];
                    if (isCache) {
                        localCache = inst[space.cache] || space.to && space.to(inst._rgba) || [];
                        each(space.props, function(_, prop) {
                            if (isCache[prop.idx] != null) {
                                same = isCache[prop.idx] === localCache[prop.idx];
                                return same;
                            }
                        });
                    }
                    return same;
                });
                return same;
            },
            _space: function() {
                var used = [], inst = this;
                each(spaces, function(spaceName, space) {
                    if (inst[space.cache]) {
                        used.push(spaceName);
                    }
                });
                return used.pop();
            },
            transition: function(other, distance) {
                var end = color(other), spaceName = end._space(), space = spaces[spaceName], startColor = this.alpha() === 0 ? color("transparent") : this, start = startColor[space.cache] || space.to(startColor._rgba), result = start.slice();
                end = end[space.cache];
                each(space.props, function(key, prop) {
                    var index = prop.idx, startValue = start[index], endValue = end[index], type = propTypes[prop.type] || {};
                    if (endValue === null) {
                        return;
                    }
                    if (startValue === null) {
                        result[index] = endValue;
                    } else {
                        if (type.mod) {
                            if (endValue - startValue > type.mod / 2) {
                                startValue += type.mod;
                            } else if (startValue - endValue > type.mod / 2) {
                                startValue -= type.mod;
                            }
                        }
                        result[index] = clamp((endValue - startValue) * distance + startValue, prop);
                    }
                });
                return this[spaceName](result);
            },
            blend: function(opaque) {
                if (this._rgba[3] === 1) {
                    return this;
                }
                var rgb = this._rgba.slice(), a = rgb.pop(), blend = color(opaque)._rgba;
                return color(jQuery.map(rgb, function(v, i) {
                    return (1 - a) * blend[i] + a * v;
                }));
            },
            toRgbaString: function() {
                var prefix = "rgba(", rgba = jQuery.map(this._rgba, function(v, i) {
                    return v == null ? i > 2 ? 1 : 0 : v;
                });
                if (rgba[3] === 1) {
                    rgba.pop();
                    prefix = "rgb(";
                }
                return prefix + rgba.join() + ")";
            },
            toHslaString: function() {
                var prefix = "hsla(", hsla = jQuery.map(this.hsla(), function(v, i) {
                    if (v == null) {
                        v = i > 2 ? 1 : 0;
                    }
                    if (i && i < 3) {
                        v = Math.round(v * 100) + "%";
                    }
                    return v;
                });
                if (hsla[3] === 1) {
                    hsla.pop();
                    prefix = "hsl(";
                }
                return prefix + hsla.join() + ")";
            },
            toHexString: function(includeAlpha) {
                var rgba = this._rgba.slice(), alpha = rgba.pop();
                if (includeAlpha) {
                    rgba.push(~~(alpha * 255));
                }
                return "#" + jQuery.map(rgba, function(v) {
                    v = (v || 0).toString(16);
                    return v.length === 1 ? "0" + v : v;
                }).join("");
            },
            toString: function() {
                return this._rgba[3] === 0 ? "transparent" : this.toRgbaString();
            }
        });
        color.fn.parse.prototype = color.fn;
        function hue2rgb(p, q, h) {
            h = (h + 1) % 1;
            if (h * 6 < 1) {
                return p + (q - p) * h * 6;
            }
            if (h * 2 < 1) {
                return q;
            }
            if (h * 3 < 2) {
                return p + (q - p) * (2 / 3 - h) * 6;
            }
            return p;
        }
        spaces.hsla.to = function(rgba) {
            if (rgba[0] == null || rgba[1] == null || rgba[2] == null) {
                return [ null, null, null, rgba[3] ];
            }
            var r = rgba[0] / 255, g = rgba[1] / 255, b = rgba[2] / 255, a = rgba[3], max = Math.max(r, g, b), min = Math.min(r, g, b), diff = max - min, add = max + min, l = add * .5, h, s;
            if (min === max) {
                h = 0;
            } else if (r === max) {
                h = 60 * (g - b) / diff + 360;
            } else if (g === max) {
                h = 60 * (b - r) / diff + 120;
            } else {
                h = 60 * (r - g) / diff + 240;
            }
            if (diff === 0) {
                s = 0;
            } else if (l <= .5) {
                s = diff / add;
            } else {
                s = diff / (2 - add);
            }
            return [ Math.round(h) % 360, s, l, a == null ? 1 : a ];
        };
        spaces.hsla.from = function(hsla) {
            if (hsla[0] == null || hsla[1] == null || hsla[2] == null) {
                return [ null, null, null, hsla[3] ];
            }
            var h = hsla[0] / 360, s = hsla[1], l = hsla[2], a = hsla[3], q = l <= .5 ? l * (1 + s) : l + s - l * s, p = 2 * l - q;
            return [ Math.round(hue2rgb(p, q, h + 1 / 3) * 255), Math.round(hue2rgb(p, q, h) * 255), Math.round(hue2rgb(p, q, h - 1 / 3) * 255), a ];
        };
        each(spaces, function(spaceName, space) {
            var props = space.props, cache = space.cache, to = space.to, from = space.from;
            color.fn[spaceName] = function(value) {
                if (to && !this[cache]) {
                    this[cache] = to(this._rgba);
                }
                if (value === undefined) {
                    return this[cache].slice();
                }
                var ret, type = jQuery.type(value), arr = type === "array" || type === "object" ? value : arguments, local = this[cache].slice();
                each(props, function(key, prop) {
                    var val = arr[type === "object" ? key : prop.idx];
                    if (val == null) {
                        val = local[prop.idx];
                    }
                    local[prop.idx] = clamp(val, prop);
                });
                if (from) {
                    ret = color(from(local));
                    ret[cache] = local;
                    return ret;
                } else {
                    return color(local);
                }
            };
            each(props, function(key, prop) {
                if (color.fn[key]) {
                    return;
                }
                color.fn[key] = function(value) {
                    var vtype = jQuery.type(value), fn = key === "alpha" ? this._hsla ? "hsla" : "rgba" : spaceName, local = this[fn](), cur = local[prop.idx], match;
                    if (vtype === "undefined") {
                        return cur;
                    }
                    if (vtype === "function") {
                        value = value.call(this, cur);
                        vtype = jQuery.type(value);
                    }
                    if (value == null && prop.empty) {
                        return this;
                    }
                    if (vtype === "string") {
                        match = rplusequals.exec(value);
                        if (match) {
                            value = cur + parseFloat(match[2]) * (match[1] === "+" ? 1 : -1);
                        }
                    }
                    local[prop.idx] = value;
                    return this[fn](local);
                };
            });
        });
        color.hook = function(hook) {
            var hooks = hook.split(" ");
            each(hooks, function(i, hook) {
                jQuery.cssHooks[hook] = {
                    set: function(elem, value) {
                        var parsed, curElem, backgroundColor = "";
                        if (value !== "transparent" && (jQuery.type(value) !== "string" || (parsed = stringParse(value)))) {
                            value = color(parsed || value);
                            if (!support.rgba && value._rgba[3] !== 1) {
                                curElem = hook === "backgroundColor" ? elem.parentNode : elem;
                                while ((backgroundColor === "" || backgroundColor === "transparent") && curElem && curElem.style) {
                                    try {
                                        backgroundColor = jQuery.css(curElem, "backgroundColor");
                                        curElem = curElem.parentNode;
                                    } catch (e) {}
                                }
                                value = value.blend(backgroundColor && backgroundColor !== "transparent" ? backgroundColor : "_default");
                            }
                            value = value.toRgbaString();
                        }
                        try {
                            elem.style[hook] = value;
                        } catch (e) {}
                    }
                };
                jQuery.fx.step[hook] = function(fx) {
                    if (!fx.colorInit) {
                        fx.start = color(fx.elem, hook);
                        fx.end = color(fx.end);
                        fx.colorInit = true;
                    }
                    jQuery.cssHooks[hook].set(fx.elem, fx.start.transition(fx.end, fx.pos));
                };
            });
        };
        color.hook(stepHooks);
        jQuery.cssHooks.borderColor = {
            expand: function(value) {
                var expanded = {};
                each([ "Top", "Right", "Bottom", "Left" ], function(i, part) {
                    expanded["border" + part + "Color"] = value;
                });
                return expanded;
            }
        };
        colors = jQuery.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [ null, null, null, 0 ],
            _default: "#ffffff"
        };
    })(jQuery);
    (function() {
        var classAnimationActions = [ "add", "remove", "toggle" ], shorthandStyles = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        $.each([ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ], function(_, prop) {
            $.fx.step[prop] = function(fx) {
                if (fx.end !== "none" && !fx.setAttr || fx.pos === 1 && !fx.setAttr) {
                    jQuery.style(fx.elem, prop, fx.end);
                    fx.setAttr = true;
                }
            };
        });
        function getElementStyles(elem) {
            var key, len, style = elem.ownerDocument.defaultView ? elem.ownerDocument.defaultView.getComputedStyle(elem, null) : elem.currentStyle, styles = {};
            if (style && style.length && style[0] && style[style[0]]) {
                len = style.length;
                while (len--) {
                    key = style[len];
                    if (typeof style[key] === "string") {
                        styles[$.camelCase(key)] = style[key];
                    }
                }
            } else {
                for (key in style) {
                    if (typeof style[key] === "string") {
                        styles[key] = style[key];
                    }
                }
            }
            return styles;
        }
        function styleDifference(oldStyle, newStyle) {
            var diff = {}, name, value;
            for (name in newStyle) {
                value = newStyle[name];
                if (oldStyle[name] !== value) {
                    if (!shorthandStyles[name]) {
                        if ($.fx.step[name] || !isNaN(parseFloat(value))) {
                            diff[name] = value;
                        }
                    }
                }
            }
            return diff;
        }
        if (!$.fn.addBack) {
            $.fn.addBack = function(selector) {
                return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
            };
        }
        $.effects.animateClass = function(value, duration, easing, callback) {
            var o = $.speed(duration, easing, callback);
            return this.queue(function() {
                var animated = $(this), baseClass = animated.attr("class") || "", applyClassChange, allAnimations = o.children ? animated.find("*").addBack() : animated;
                allAnimations = allAnimations.map(function() {
                    var el = $(this);
                    return {
                        el: el,
                        start: getElementStyles(this)
                    };
                });
                applyClassChange = function() {
                    $.each(classAnimationActions, function(i, action) {
                        if (value[action]) {
                            animated[action + "Class"](value[action]);
                        }
                    });
                };
                applyClassChange();
                allAnimations = allAnimations.map(function() {
                    this.end = getElementStyles(this.el[0]);
                    this.diff = styleDifference(this.start, this.end);
                    return this;
                });
                animated.attr("class", baseClass);
                allAnimations = allAnimations.map(function() {
                    var styleInfo = this, dfd = $.Deferred(), opts = $.extend({}, o, {
                        queue: false,
                        complete: function() {
                            dfd.resolve(styleInfo);
                        }
                    });
                    this.el.animate(this.diff, opts);
                    return dfd.promise();
                });
                $.when.apply($, allAnimations.get()).done(function() {
                    applyClassChange();
                    $.each(arguments, function() {
                        var el = this.el;
                        $.each(this.diff, function(key) {
                            el.css(key, "");
                        });
                    });
                    o.complete.call(animated[0]);
                });
            });
        };
        $.fn.extend({
            addClass: function(orig) {
                return function(classNames, speed, easing, callback) {
                    return speed ? $.effects.animateClass.call(this, {
                        add: classNames
                    }, speed, easing, callback) : orig.apply(this, arguments);
                };
            }($.fn.addClass),
            removeClass: function(orig) {
                return function(classNames, speed, easing, callback) {
                    return arguments.length > 1 ? $.effects.animateClass.call(this, {
                        remove: classNames
                    }, speed, easing, callback) : orig.apply(this, arguments);
                };
            }($.fn.removeClass),
            toggleClass: function(orig) {
                return function(classNames, force, speed, easing, callback) {
                    if (typeof force === "boolean" || force === undefined) {
                        if (!speed) {
                            return orig.apply(this, arguments);
                        } else {
                            return $.effects.animateClass.call(this, force ? {
                                add: classNames
                            } : {
                                remove: classNames
                            }, speed, easing, callback);
                        }
                    } else {
                        return $.effects.animateClass.call(this, {
                            toggle: classNames
                        }, force, speed, easing);
                    }
                };
            }($.fn.toggleClass),
            switchClass: function(remove, add, speed, easing, callback) {
                return $.effects.animateClass.call(this, {
                    add: add,
                    remove: remove
                }, speed, easing, callback);
            }
        });
    })();
    (function() {
        if ($.expr && $.expr.filters && $.expr.filters.animated) {
            $.expr.filters.animated = function(orig) {
                return function(elem) {
                    return !!$(elem).data(dataSpaceAnimated) || orig(elem);
                };
            }($.expr.filters.animated);
        }
        if ($.uiBackCompat !== false) {
            $.extend($.effects, {
                save: function(element, set) {
                    var i = 0, length = set.length;
                    for (;i < length; i++) {
                        if (set[i] !== null) {
                            element.data(dataSpace + set[i], element[0].style[set[i]]);
                        }
                    }
                },
                restore: function(element, set) {
                    var val, i = 0, length = set.length;
                    for (;i < length; i++) {
                        if (set[i] !== null) {
                            val = element.data(dataSpace + set[i]);
                            element.css(set[i], val);
                        }
                    }
                },
                setMode: function(el, mode) {
                    if (mode === "toggle") {
                        mode = el.is(":hidden") ? "show" : "hide";
                    }
                    return mode;
                },
                createWrapper: function(element) {
                    if (element.parent().is(".ui-effects-wrapper")) {
                        return element.parent();
                    }
                    var props = {
                        width: element.outerWidth(true),
                        height: element.outerHeight(true),
                        "float": element.css("float")
                    }, wrapper = $("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }), size = {
                        width: element.width(),
                        height: element.height()
                    }, active = document.activeElement;
                    try {
                        active.id;
                    } catch (e) {
                        active = document.body;
                    }
                    element.wrap(wrapper);
                    if (element[0] === active || $.contains(element[0], active)) {
                        $(active).trigger("focus");
                    }
                    wrapper = element.parent();
                    if (element.css("position") === "static") {
                        wrapper.css({
                            position: "relative"
                        });
                        element.css({
                            position: "relative"
                        });
                    } else {
                        $.extend(props, {
                            position: element.css("position"),
                            zIndex: element.css("z-index")
                        });
                        $.each([ "top", "left", "bottom", "right" ], function(i, pos) {
                            props[pos] = element.css(pos);
                            if (isNaN(parseInt(props[pos], 10))) {
                                props[pos] = "auto";
                            }
                        });
                        element.css({
                            position: "relative",
                            top: 0,
                            left: 0,
                            right: "auto",
                            bottom: "auto"
                        });
                    }
                    element.css(size);
                    return wrapper.css(props).show();
                },
                removeWrapper: function(element) {
                    var active = document.activeElement;
                    if (element.parent().is(".ui-effects-wrapper")) {
                        element.parent().replaceWith(element);
                        if (element[0] === active || $.contains(element[0], active)) {
                            $(active).trigger("focus");
                        }
                    }
                    return element;
                }
            });
        }
        $.extend($.effects, {
            version: "1.12.1",
            define: function(name, mode, effect) {
                if (!effect) {
                    effect = mode;
                    mode = "effect";
                }
                $.effects.effect[name] = effect;
                $.effects.effect[name].mode = mode;
                return effect;
            },
            scaledDimensions: function(element, percent, direction) {
                if (percent === 0) {
                    return {
                        height: 0,
                        width: 0,
                        outerHeight: 0,
                        outerWidth: 0
                    };
                }
                var x = direction !== "horizontal" ? (percent || 100) / 100 : 1, y = direction !== "vertical" ? (percent || 100) / 100 : 1;
                return {
                    height: element.height() * y,
                    width: element.width() * x,
                    outerHeight: element.outerHeight() * y,
                    outerWidth: element.outerWidth() * x
                };
            },
            clipToBox: function(animation) {
                return {
                    width: animation.clip.right - animation.clip.left,
                    height: animation.clip.bottom - animation.clip.top,
                    left: animation.clip.left,
                    top: animation.clip.top
                };
            },
            unshift: function(element, queueLength, count) {
                var queue = element.queue();
                if (queueLength > 1) {
                    queue.splice.apply(queue, [ 1, 0 ].concat(queue.splice(queueLength, count)));
                }
                element.dequeue();
            },
            saveStyle: function(element) {
                element.data(dataSpaceStyle, element[0].style.cssText);
            },
            restoreStyle: function(element) {
                element[0].style.cssText = element.data(dataSpaceStyle) || "";
                element.removeData(dataSpaceStyle);
            },
            mode: function(element, mode) {
                var hidden = element.is(":hidden");
                if (mode === "toggle") {
                    mode = hidden ? "show" : "hide";
                }
                if (hidden ? mode === "hide" : mode === "show") {
                    mode = "none";
                }
                return mode;
            },
            getBaseline: function(origin, original) {
                var y, x;
                switch (origin[0]) {
                  case "top":
                    y = 0;
                    break;

                  case "middle":
                    y = .5;
                    break;

                  case "bottom":
                    y = 1;
                    break;

                  default:
                    y = origin[0] / original.height;
                }
                switch (origin[1]) {
                  case "left":
                    x = 0;
                    break;

                  case "center":
                    x = .5;
                    break;

                  case "right":
                    x = 1;
                    break;

                  default:
                    x = origin[1] / original.width;
                }
                return {
                    x: x,
                    y: y
                };
            },
            createPlaceholder: function(element) {
                var placeholder, cssPosition = element.css("position"), position = element.position();
                element.css({
                    marginTop: element.css("marginTop"),
                    marginBottom: element.css("marginBottom"),
                    marginLeft: element.css("marginLeft"),
                    marginRight: element.css("marginRight")
                }).outerWidth(element.outerWidth()).outerHeight(element.outerHeight());
                if (/^(static|relative)/.test(cssPosition)) {
                    cssPosition = "absolute";
                    placeholder = $("<" + element[0].nodeName + ">").insertAfter(element).css({
                        display: /^(inline|ruby)/.test(element.css("display")) ? "inline-block" : "block",
                        visibility: "hidden",
                        marginTop: element.css("marginTop"),
                        marginBottom: element.css("marginBottom"),
                        marginLeft: element.css("marginLeft"),
                        marginRight: element.css("marginRight"),
                        "float": element.css("float")
                    }).outerWidth(element.outerWidth()).outerHeight(element.outerHeight()).addClass("ui-effects-placeholder");
                    element.data(dataSpace + "placeholder", placeholder);
                }
                element.css({
                    position: cssPosition,
                    left: position.left,
                    top: position.top
                });
                return placeholder;
            },
            removePlaceholder: function(element) {
                var dataKey = dataSpace + "placeholder", placeholder = element.data(dataKey);
                if (placeholder) {
                    placeholder.remove();
                    element.removeData(dataKey);
                }
            },
            cleanUp: function(element) {
                $.effects.restoreStyle(element);
                $.effects.removePlaceholder(element);
            },
            setTransition: function(element, list, factor, value) {
                value = value || {};
                $.each(list, function(i, x) {
                    var unit = element.cssUnit(x);
                    if (unit[0] > 0) {
                        value[x] = unit[0] * factor + unit[1];
                    }
                });
                return value;
            }
        });
        function _normalizeArguments(effect, options, speed, callback) {
            if ($.isPlainObject(effect)) {
                options = effect;
                effect = effect.effect;
            }
            effect = {
                effect: effect
            };
            if (options == null) {
                options = {};
            }
            if ($.isFunction(options)) {
                callback = options;
                speed = null;
                options = {};
            }
            if (typeof options === "number" || $.fx.speeds[options]) {
                callback = speed;
                speed = options;
                options = {};
            }
            if ($.isFunction(speed)) {
                callback = speed;
                speed = null;
            }
            if (options) {
                $.extend(effect, options);
            }
            speed = speed || options.duration;
            effect.duration = $.fx.off ? 0 : typeof speed === "number" ? speed : speed in $.fx.speeds ? $.fx.speeds[speed] : $.fx.speeds._default;
            effect.complete = callback || options.complete;
            return effect;
        }
        function standardAnimationOption(option) {
            if (!option || typeof option === "number" || $.fx.speeds[option]) {
                return true;
            }
            if (typeof option === "string" && !$.effects.effect[option]) {
                return true;
            }
            if ($.isFunction(option)) {
                return true;
            }
            if (typeof option === "object" && !option.effect) {
                return true;
            }
            return false;
        }
        $.fn.extend({
            effect: function() {
                var args = _normalizeArguments.apply(this, arguments), effectMethod = $.effects.effect[args.effect], defaultMode = effectMethod.mode, queue = args.queue, queueName = queue || "fx", complete = args.complete, mode = args.mode, modes = [], prefilter = function(next) {
                    var el = $(this), normalizedMode = $.effects.mode(el, mode) || defaultMode;
                    el.data(dataSpaceAnimated, true);
                    modes.push(normalizedMode);
                    if (defaultMode && (normalizedMode === "show" || normalizedMode === defaultMode && normalizedMode === "hide")) {
                        el.show();
                    }
                    if (!defaultMode || normalizedMode !== "none") {
                        $.effects.saveStyle(el);
                    }
                    if ($.isFunction(next)) {
                        next();
                    }
                };
                if ($.fx.off || !effectMethod) {
                    if (mode) {
                        return this[mode](args.duration, complete);
                    } else {
                        return this.each(function() {
                            if (complete) {
                                complete.call(this);
                            }
                        });
                    }
                }
                function run(next) {
                    var elem = $(this);
                    function cleanup() {
                        elem.removeData(dataSpaceAnimated);
                        $.effects.cleanUp(elem);
                        if (args.mode === "hide") {
                            elem.hide();
                        }
                        done();
                    }
                    function done() {
                        if ($.isFunction(complete)) {
                            complete.call(elem[0]);
                        }
                        if ($.isFunction(next)) {
                            next();
                        }
                    }
                    args.mode = modes.shift();
                    if ($.uiBackCompat !== false && !defaultMode) {
                        if (elem.is(":hidden") ? mode === "hide" : mode === "show") {
                            elem[mode]();
                            done();
                        } else {
                            effectMethod.call(elem[0], args, done);
                        }
                    } else {
                        if (args.mode === "none") {
                            elem[mode]();
                            done();
                        } else {
                            effectMethod.call(elem[0], args, cleanup);
                        }
                    }
                }
                return queue === false ? this.each(prefilter).each(run) : this.queue(queueName, prefilter).queue(queueName, run);
            },
            show: function(orig) {
                return function(option) {
                    if (standardAnimationOption(option)) {
                        return orig.apply(this, arguments);
                    } else {
                        var args = _normalizeArguments.apply(this, arguments);
                        args.mode = "show";
                        return this.effect.call(this, args);
                    }
                };
            }($.fn.show),
            hide: function(orig) {
                return function(option) {
                    if (standardAnimationOption(option)) {
                        return orig.apply(this, arguments);
                    } else {
                        var args = _normalizeArguments.apply(this, arguments);
                        args.mode = "hide";
                        return this.effect.call(this, args);
                    }
                };
            }($.fn.hide),
            toggle: function(orig) {
                return function(option) {
                    if (standardAnimationOption(option) || typeof option === "boolean") {
                        return orig.apply(this, arguments);
                    } else {
                        var args = _normalizeArguments.apply(this, arguments);
                        args.mode = "toggle";
                        return this.effect.call(this, args);
                    }
                };
            }($.fn.toggle),
            cssUnit: function(key) {
                var style = this.css(key), val = [];
                $.each([ "em", "px", "%", "pt" ], function(i, unit) {
                    if (style.indexOf(unit) > 0) {
                        val = [ parseFloat(style), unit ];
                    }
                });
                return val;
            },
            cssClip: function(clipObj) {
                if (clipObj) {
                    return this.css("clip", "rect(" + clipObj.top + "px " + clipObj.right + "px " + clipObj.bottom + "px " + clipObj.left + "px)");
                }
                return parseClip(this.css("clip"), this);
            },
            transfer: function(options, done) {
                var element = $(this), target = $(options.to), targetFixed = target.css("position") === "fixed", body = $("body"), fixTop = targetFixed ? body.scrollTop() : 0, fixLeft = targetFixed ? body.scrollLeft() : 0, endPosition = target.offset(), animation = {
                    top: endPosition.top - fixTop,
                    left: endPosition.left - fixLeft,
                    height: target.innerHeight(),
                    width: target.innerWidth()
                }, startPosition = element.offset(), transfer = $("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(options.className).css({
                    top: startPosition.top - fixTop,
                    left: startPosition.left - fixLeft,
                    height: element.innerHeight(),
                    width: element.innerWidth(),
                    position: targetFixed ? "fixed" : "absolute"
                }).animate(animation, options.duration, options.easing, function() {
                    transfer.remove();
                    if ($.isFunction(done)) {
                        done();
                    }
                });
            }
        });
        function parseClip(str, element) {
            var outerWidth = element.outerWidth(), outerHeight = element.outerHeight(), clipRegex = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/, values = clipRegex.exec(str) || [ "", 0, outerWidth, outerHeight, 0 ];
            return {
                top: parseFloat(values[1]) || 0,
                right: values[2] === "auto" ? outerWidth : parseFloat(values[2]),
                bottom: values[3] === "auto" ? outerHeight : parseFloat(values[3]),
                left: parseFloat(values[4]) || 0
            };
        }
        $.fx.step.clip = function(fx) {
            if (!fx.clipInit) {
                fx.start = $(fx.elem).cssClip();
                if (typeof fx.end === "string") {
                    fx.end = parseClip(fx.end, fx.elem);
                }
                fx.clipInit = true;
            }
            $(fx.elem).cssClip({
                top: fx.pos * (fx.end.top - fx.start.top) + fx.start.top,
                right: fx.pos * (fx.end.right - fx.start.right) + fx.start.right,
                bottom: fx.pos * (fx.end.bottom - fx.start.bottom) + fx.start.bottom,
                left: fx.pos * (fx.end.left - fx.start.left) + fx.start.left
            });
        };
    })();
    (function() {
        var baseEasings = {};
        $.each([ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function(i, name) {
            baseEasings[name] = function(p) {
                return Math.pow(p, i + 2);
            };
        });
        $.extend(baseEasings, {
            Sine: function(p) {
                return 1 - Math.cos(p * Math.PI / 2);
            },
            Circ: function(p) {
                return 1 - Math.sqrt(1 - p * p);
            },
            Elastic: function(p) {
                return p === 0 || p === 1 ? p : -Math.pow(2, 8 * (p - 1)) * Math.sin(((p - 1) * 80 - 7.5) * Math.PI / 15);
            },
            Back: function(p) {
                return p * p * (3 * p - 2);
            },
            Bounce: function(p) {
                var pow2, bounce = 4;
                while (p < ((pow2 = Math.pow(2, --bounce)) - 1) / 11) {}
                return 1 / Math.pow(4, 3 - bounce) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - p, 2);
            }
        });
        $.each(baseEasings, function(name, easeIn) {
            $.easing["easeIn" + name] = easeIn;
            $.easing["easeOut" + name] = function(p) {
                return 1 - easeIn(1 - p);
            };
            $.easing["easeInOut" + name] = function(p) {
                return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn(p * -2 + 2) / 2;
            };
        });
    })();
    var effect = $.effects;
    var effectsEffectBlind = $.effects.define("blind", "hide", function(options, done) {
        var map = {
            up: [ "bottom", "top" ],
            vertical: [ "bottom", "top" ],
            down: [ "top", "bottom" ],
            left: [ "right", "left" ],
            horizontal: [ "right", "left" ],
            right: [ "left", "right" ]
        }, element = $(this), direction = options.direction || "up", start = element.cssClip(), animate = {
            clip: $.extend({}, start)
        }, placeholder = $.effects.createPlaceholder(element);
        animate.clip[map[direction][0]] = animate.clip[map[direction][1]];
        if (options.mode === "show") {
            element.cssClip(animate.clip);
            if (placeholder) {
                placeholder.css($.effects.clipToBox(animate));
            }
            animate.clip = start;
        }
        if (placeholder) {
            placeholder.animate($.effects.clipToBox(animate), options.duration, options.easing);
        }
        element.animate(animate, {
            queue: false,
            duration: options.duration,
            easing: options.easing,
            complete: done
        });
    });
    var effectsEffectBounce = $.effects.define("bounce", function(options, done) {
        var upAnim, downAnim, refValue, element = $(this), mode = options.mode, hide = mode === "hide", show = mode === "show", direction = options.direction || "up", distance = options.distance, times = options.times || 5, anims = times * 2 + (show || hide ? 1 : 0), speed = options.duration / anims, easing = options.easing, ref = direction === "up" || direction === "down" ? "top" : "left", motion = direction === "up" || direction === "left", i = 0, queuelen = element.queue().length;
        $.effects.createPlaceholder(element);
        refValue = element.css(ref);
        if (!distance) {
            distance = element[ref === "top" ? "outerHeight" : "outerWidth"]() / 3;
        }
        if (show) {
            downAnim = {
                opacity: 1
            };
            downAnim[ref] = refValue;
            element.css("opacity", 0).css(ref, motion ? -distance * 2 : distance * 2).animate(downAnim, speed, easing);
        }
        if (hide) {
            distance = distance / Math.pow(2, times - 1);
        }
        downAnim = {};
        downAnim[ref] = refValue;
        for (;i < times; i++) {
            upAnim = {};
            upAnim[ref] = (motion ? "-=" : "+=") + distance;
            element.animate(upAnim, speed, easing).animate(downAnim, speed, easing);
            distance = hide ? distance * 2 : distance / 2;
        }
        if (hide) {
            upAnim = {
                opacity: 0
            };
            upAnim[ref] = (motion ? "-=" : "+=") + distance;
            element.animate(upAnim, speed, easing);
        }
        element.queue(done);
        $.effects.unshift(element, queuelen, anims + 1);
    });
    var effectsEffectClip = $.effects.define("clip", "hide", function(options, done) {
        var start, animate = {}, element = $(this), direction = options.direction || "vertical", both = direction === "both", horizontal = both || direction === "horizontal", vertical = both || direction === "vertical";
        start = element.cssClip();
        animate.clip = {
            top: vertical ? (start.bottom - start.top) / 2 : start.top,
            right: horizontal ? (start.right - start.left) / 2 : start.right,
            bottom: vertical ? (start.bottom - start.top) / 2 : start.bottom,
            left: horizontal ? (start.right - start.left) / 2 : start.left
        };
        $.effects.createPlaceholder(element);
        if (options.mode === "show") {
            element.cssClip(animate.clip);
            animate.clip = start;
        }
        element.animate(animate, {
            queue: false,
            duration: options.duration,
            easing: options.easing,
            complete: done
        });
    });
    var effectsEffectDrop = $.effects.define("drop", "hide", function(options, done) {
        var distance, element = $(this), mode = options.mode, show = mode === "show", direction = options.direction || "left", ref = direction === "up" || direction === "down" ? "top" : "left", motion = direction === "up" || direction === "left" ? "-=" : "+=", oppositeMotion = motion === "+=" ? "-=" : "+=", animation = {
            opacity: 0
        };
        $.effects.createPlaceholder(element);
        distance = options.distance || element[ref === "top" ? "outerHeight" : "outerWidth"](true) / 2;
        animation[ref] = motion + distance;
        if (show) {
            element.css(animation);
            animation[ref] = oppositeMotion + distance;
            animation.opacity = 1;
        }
        element.animate(animation, {
            queue: false,
            duration: options.duration,
            easing: options.easing,
            complete: done
        });
    });
    var effectsEffectExplode = $.effects.define("explode", "hide", function(options, done) {
        var i, j, left, top, mx, my, rows = options.pieces ? Math.round(Math.sqrt(options.pieces)) : 3, cells = rows, element = $(this), mode = options.mode, show = mode === "show", offset = element.show().css("visibility", "hidden").offset(), width = Math.ceil(element.outerWidth() / cells), height = Math.ceil(element.outerHeight() / rows), pieces = [];
        function childComplete() {
            pieces.push(this);
            if (pieces.length === rows * cells) {
                animComplete();
            }
        }
        for (i = 0; i < rows; i++) {
            top = offset.top + i * height;
            my = i - (rows - 1) / 2;
            for (j = 0; j < cells; j++) {
                left = offset.left + j * width;
                mx = j - (cells - 1) / 2;
                element.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -j * width,
                    top: -i * height
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: width,
                    height: height,
                    left: left + (show ? mx * width : 0),
                    top: top + (show ? my * height : 0),
                    opacity: show ? 0 : 1
                }).animate({
                    left: left + (show ? 0 : mx * width),
                    top: top + (show ? 0 : my * height),
                    opacity: show ? 1 : 0
                }, options.duration || 500, options.easing, childComplete);
            }
        }
        function animComplete() {
            element.css({
                visibility: "visible"
            });
            $(pieces).remove();
            done();
        }
    });
    var effectsEffectFade = $.effects.define("fade", "toggle", function(options, done) {
        var show = options.mode === "show";
        $(this).css("opacity", show ? 0 : 1).animate({
            opacity: show ? 1 : 0
        }, {
            queue: false,
            duration: options.duration,
            easing: options.easing,
            complete: done
        });
    });
    var effectsEffectFold = $.effects.define("fold", "hide", function(options, done) {
        var element = $(this), mode = options.mode, show = mode === "show", hide = mode === "hide", size = options.size || 15, percent = /([0-9]+)%/.exec(size), horizFirst = !!options.horizFirst, ref = horizFirst ? [ "right", "bottom" ] : [ "bottom", "right" ], duration = options.duration / 2, placeholder = $.effects.createPlaceholder(element), start = element.cssClip(), animation1 = {
            clip: $.extend({}, start)
        }, animation2 = {
            clip: $.extend({}, start)
        }, distance = [ start[ref[0]], start[ref[1]] ], queuelen = element.queue().length;
        if (percent) {
            size = parseInt(percent[1], 10) / 100 * distance[hide ? 0 : 1];
        }
        animation1.clip[ref[0]] = size;
        animation2.clip[ref[0]] = size;
        animation2.clip[ref[1]] = 0;
        if (show) {
            element.cssClip(animation2.clip);
            if (placeholder) {
                placeholder.css($.effects.clipToBox(animation2));
            }
            animation2.clip = start;
        }
        element.queue(function(next) {
            if (placeholder) {
                placeholder.animate($.effects.clipToBox(animation1), duration, options.easing).animate($.effects.clipToBox(animation2), duration, options.easing);
            }
            next();
        }).animate(animation1, duration, options.easing).animate(animation2, duration, options.easing).queue(done);
        $.effects.unshift(element, queuelen, 4);
    });
    var effectsEffectHighlight = $.effects.define("highlight", "show", function(options, done) {
        var element = $(this), animation = {
            backgroundColor: element.css("backgroundColor")
        };
        if (options.mode === "hide") {
            animation.opacity = 0;
        }
        $.effects.saveStyle(element);
        element.css({
            backgroundImage: "none",
            backgroundColor: options.color || "#ffff99"
        }).animate(animation, {
            queue: false,
            duration: options.duration,
            easing: options.easing,
            complete: done
        });
    });
    var effectsEffectSize = $.effects.define("size", function(options, done) {
        var baseline, factor, temp, element = $(this), cProps = [ "fontSize" ], vProps = [ "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom" ], hProps = [ "borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight" ], mode = options.mode, restore = mode !== "effect", scale = options.scale || "both", origin = options.origin || [ "middle", "center" ], position = element.css("position"), pos = element.position(), original = $.effects.scaledDimensions(element), from = options.from || original, to = options.to || $.effects.scaledDimensions(element, 0);
        $.effects.createPlaceholder(element);
        if (mode === "show") {
            temp = from;
            from = to;
            to = temp;
        }
        factor = {
            from: {
                y: from.height / original.height,
                x: from.width / original.width
            },
            to: {
                y: to.height / original.height,
                x: to.width / original.width
            }
        };
        if (scale === "box" || scale === "both") {
            if (factor.from.y !== factor.to.y) {
                from = $.effects.setTransition(element, vProps, factor.from.y, from);
                to = $.effects.setTransition(element, vProps, factor.to.y, to);
            }
            if (factor.from.x !== factor.to.x) {
                from = $.effects.setTransition(element, hProps, factor.from.x, from);
                to = $.effects.setTransition(element, hProps, factor.to.x, to);
            }
        }
        if (scale === "content" || scale === "both") {
            if (factor.from.y !== factor.to.y) {
                from = $.effects.setTransition(element, cProps, factor.from.y, from);
                to = $.effects.setTransition(element, cProps, factor.to.y, to);
            }
        }
        if (origin) {
            baseline = $.effects.getBaseline(origin, original);
            from.top = (original.outerHeight - from.outerHeight) * baseline.y + pos.top;
            from.left = (original.outerWidth - from.outerWidth) * baseline.x + pos.left;
            to.top = (original.outerHeight - to.outerHeight) * baseline.y + pos.top;
            to.left = (original.outerWidth - to.outerWidth) * baseline.x + pos.left;
        }
        element.css(from);
        if (scale === "content" || scale === "both") {
            vProps = vProps.concat([ "marginTop", "marginBottom" ]).concat(cProps);
            hProps = hProps.concat([ "marginLeft", "marginRight" ]);
            element.find("*[width]").each(function() {
                var child = $(this), childOriginal = $.effects.scaledDimensions(child), childFrom = {
                    height: childOriginal.height * factor.from.y,
                    width: childOriginal.width * factor.from.x,
                    outerHeight: childOriginal.outerHeight * factor.from.y,
                    outerWidth: childOriginal.outerWidth * factor.from.x
                }, childTo = {
                    height: childOriginal.height * factor.to.y,
                    width: childOriginal.width * factor.to.x,
                    outerHeight: childOriginal.height * factor.to.y,
                    outerWidth: childOriginal.width * factor.to.x
                };
                if (factor.from.y !== factor.to.y) {
                    childFrom = $.effects.setTransition(child, vProps, factor.from.y, childFrom);
                    childTo = $.effects.setTransition(child, vProps, factor.to.y, childTo);
                }
                if (factor.from.x !== factor.to.x) {
                    childFrom = $.effects.setTransition(child, hProps, factor.from.x, childFrom);
                    childTo = $.effects.setTransition(child, hProps, factor.to.x, childTo);
                }
                if (restore) {
                    $.effects.saveStyle(child);
                }
                child.css(childFrom);
                child.animate(childTo, options.duration, options.easing, function() {
                    if (restore) {
                        $.effects.restoreStyle(child);
                    }
                });
            });
        }
        element.animate(to, {
            queue: false,
            duration: options.duration,
            easing: options.easing,
            complete: function() {
                var offset = element.offset();
                if (to.opacity === 0) {
                    element.css("opacity", from.opacity);
                }
                if (!restore) {
                    element.css("position", position === "static" ? "relative" : position).offset(offset);
                    $.effects.saveStyle(element);
                }
                done();
            }
        });
    });
    var effectsEffectScale = $.effects.define("scale", function(options, done) {
        var el = $(this), mode = options.mode, percent = parseInt(options.percent, 10) || (parseInt(options.percent, 10) === 0 ? 0 : mode !== "effect" ? 0 : 100), newOptions = $.extend(true, {
            from: $.effects.scaledDimensions(el),
            to: $.effects.scaledDimensions(el, percent, options.direction || "both"),
            origin: options.origin || [ "middle", "center" ]
        }, options);
        if (options.fade) {
            newOptions.from.opacity = 1;
            newOptions.to.opacity = 0;
        }
        $.effects.effect.size.call(this, newOptions, done);
    });
    var effectsEffectPuff = $.effects.define("puff", "hide", function(options, done) {
        var newOptions = $.extend(true, {}, options, {
            fade: true,
            percent: parseInt(options.percent, 10) || 150
        });
        $.effects.effect.scale.call(this, newOptions, done);
    });
    var effectsEffectPulsate = $.effects.define("pulsate", "show", function(options, done) {
        var element = $(this), mode = options.mode, show = mode === "show", hide = mode === "hide", showhide = show || hide, anims = (options.times || 5) * 2 + (showhide ? 1 : 0), duration = options.duration / anims, animateTo = 0, i = 1, queuelen = element.queue().length;
        if (show || !element.is(":visible")) {
            element.css("opacity", 0).show();
            animateTo = 1;
        }
        for (;i < anims; i++) {
            element.animate({
                opacity: animateTo
            }, duration, options.easing);
            animateTo = 1 - animateTo;
        }
        element.animate({
            opacity: animateTo
        }, duration, options.easing);
        element.queue(done);
        $.effects.unshift(element, queuelen, anims + 1);
    });
    var effectsEffectShake = $.effects.define("shake", function(options, done) {
        var i = 1, element = $(this), direction = options.direction || "left", distance = options.distance || 20, times = options.times || 3, anims = times * 2 + 1, speed = Math.round(options.duration / anims), ref = direction === "up" || direction === "down" ? "top" : "left", positiveMotion = direction === "up" || direction === "left", animation = {}, animation1 = {}, animation2 = {}, queuelen = element.queue().length;
        $.effects.createPlaceholder(element);
        animation[ref] = (positiveMotion ? "-=" : "+=") + distance;
        animation1[ref] = (positiveMotion ? "+=" : "-=") + distance * 2;
        animation2[ref] = (positiveMotion ? "-=" : "+=") + distance * 2;
        element.animate(animation, speed, options.easing);
        for (;i < times; i++) {
            element.animate(animation1, speed, options.easing).animate(animation2, speed, options.easing);
        }
        element.animate(animation1, speed, options.easing).animate(animation, speed / 2, options.easing).queue(done);
        $.effects.unshift(element, queuelen, anims + 1);
    });
    var effectsEffectSlide = $.effects.define("slide", "show", function(options, done) {
        var startClip, startRef, element = $(this), map = {
            up: [ "bottom", "top" ],
            down: [ "top", "bottom" ],
            left: [ "right", "left" ],
            right: [ "left", "right" ]
        }, mode = options.mode, direction = options.direction || "left", ref = direction === "up" || direction === "down" ? "top" : "left", positiveMotion = direction === "up" || direction === "left", distance = options.distance || element[ref === "top" ? "outerHeight" : "outerWidth"](true), animation = {};
        $.effects.createPlaceholder(element);
        startClip = element.cssClip();
        startRef = element.position()[ref];
        animation[ref] = (positiveMotion ? -1 : 1) * distance + startRef;
        animation.clip = element.cssClip();
        animation.clip[map[direction][1]] = animation.clip[map[direction][0]];
        if (mode === "show") {
            element.cssClip(animation.clip);
            element.css(ref, animation[ref]);
            animation.clip = startClip;
            animation[ref] = startRef;
        }
        element.animate(animation, {
            queue: false,
            duration: options.duration,
            easing: options.easing,
            complete: done
        });
    });
    var effect;
    if ($.uiBackCompat !== false) {
        effect = $.effects.define("transfer", function(options, done) {
            $(this).transfer(options, done);
        });
    }
    var effectsEffectTransfer = effect;
    $.ui.focusable = function(element, hasTabindex) {
        var map, mapName, img, focusableIfVisible, fieldset, nodeName = element.nodeName.toLowerCase();
        if ("area" === nodeName) {
            map = element.parentNode;
            mapName = map.name;
            if (!element.href || !mapName || map.nodeName.toLowerCase() !== "map") {
                return false;
            }
            img = $("img[usemap='#" + mapName + "']");
            return img.length > 0 && img.is(":visible");
        }
        if (/^(input|select|textarea|button|object)$/.test(nodeName)) {
            focusableIfVisible = !element.disabled;
            if (focusableIfVisible) {
                fieldset = $(element).closest("fieldset")[0];
                if (fieldset) {
                    focusableIfVisible = !fieldset.disabled;
                }
            }
        } else if ("a" === nodeName) {
            focusableIfVisible = element.href || hasTabindex;
        } else {
            focusableIfVisible = hasTabindex;
        }
        return focusableIfVisible && $(element).is(":visible") && visible($(element));
    };
    function visible(element) {
        var visibility = element.css("visibility");
        while (visibility === "inherit") {
            element = element.parent();
            visibility = element.css("visibility");
        }
        return visibility !== "hidden";
    }
    $.extend($.expr[":"], {
        focusable: function(element) {
            return $.ui.focusable(element, $.attr(element, "tabindex") != null);
        }
    });
    var focusable = $.ui.focusable;
    var form = $.fn.form = function() {
        return typeof this[0].form === "string" ? this.closest("form") : $(this[0].form);
    };
    var formResetMixin = $.ui.formResetMixin = {
        _formResetHandler: function() {
            var form = $(this);
            setTimeout(function() {
                var instances = form.data("ui-form-reset-instances");
                $.each(instances, function() {
                    this.refresh();
                });
            });
        },
        _bindFormResetHandler: function() {
            this.form = this.element.form();
            if (!this.form.length) {
                return;
            }
            var instances = this.form.data("ui-form-reset-instances") || [];
            if (!instances.length) {
                this.form.on("reset.ui-form-reset", this._formResetHandler);
            }
            instances.push(this);
            this.form.data("ui-form-reset-instances", instances);
        },
        _unbindFormResetHandler: function() {
            if (!this.form.length) {
                return;
            }
            var instances = this.form.data("ui-form-reset-instances");
            instances.splice($.inArray(this, instances), 1);
            if (instances.length) {
                this.form.data("ui-form-reset-instances", instances);
            } else {
                this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset");
            }
        }
    };
    if ($.fn.jquery.substring(0, 3) === "1.7") {
        $.each([ "Width", "Height" ], function(i, name) {
            var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ], type = name.toLowerCase(), orig = {
                innerWidth: $.fn.innerWidth,
                innerHeight: $.fn.innerHeight,
                outerWidth: $.fn.outerWidth,
                outerHeight: $.fn.outerHeight
            };
            function reduce(elem, size, border, margin) {
                $.each(side, function() {
                    size -= parseFloat($.css(elem, "padding" + this)) || 0;
                    if (border) {
                        size -= parseFloat($.css(elem, "border" + this + "Width")) || 0;
                    }
                    if (margin) {
                        size -= parseFloat($.css(elem, "margin" + this)) || 0;
                    }
                });
                return size;
            }
            $.fn["inner" + name] = function(size) {
                if (size === undefined) {
                    return orig["inner" + name].call(this);
                }
                return this.each(function() {
                    $(this).css(type, reduce(this, size) + "px");
                });
            };
            $.fn["outer" + name] = function(size, margin) {
                if (typeof size !== "number") {
                    return orig["outer" + name].call(this, size);
                }
                return this.each(function() {
                    $(this).css(type, reduce(this, size, true, margin) + "px");
                });
            };
        });
        $.fn.addBack = function(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        };
    }
    var keycode = $.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    };
    var escapeSelector = $.ui.escapeSelector = function() {
        var selectorEscape = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
        return function(selector) {
            return selector.replace(selectorEscape, "\\$1");
        };
    }();
    var labels = $.fn.labels = function() {
        var ancestor, selector, id, labels, ancestors;
        if (this[0].labels && this[0].labels.length) {
            return this.pushStack(this[0].labels);
        }
        labels = this.eq(0).parents("label");
        id = this.attr("id");
        if (id) {
            ancestor = this.eq(0).parents().last();
            ancestors = ancestor.add(ancestor.length ? ancestor.siblings() : this.siblings());
            selector = "label[for='" + $.ui.escapeSelector(id) + "']";
            labels = labels.add(ancestors.find(selector).addBack(selector));
        }
        return this.pushStack(labels);
    };
    var scrollParent = $.fn.scrollParent = function(includeHidden) {
        var position = this.css("position"), excludeStaticParent = position === "absolute", overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/, scrollParent = this.parents().filter(function() {
            var parent = $(this);
            if (excludeStaticParent && parent.css("position") === "static") {
                return false;
            }
            return overflowRegex.test(parent.css("overflow") + parent.css("overflow-y") + parent.css("overflow-x"));
        }).eq(0);
        return position === "fixed" || !scrollParent.length ? $(this[0].ownerDocument || document) : scrollParent;
    };
    var tabbable = $.extend($.expr[":"], {
        tabbable: function(element) {
            var tabIndex = $.attr(element, "tabindex"), hasTabindex = tabIndex != null;
            return (!hasTabindex || tabIndex >= 0) && $.ui.focusable(element, hasTabindex);
        }
    });
    var uniqueId = $.fn.extend({
        uniqueId: function() {
            var uuid = 0;
            return function() {
                return this.each(function() {
                    if (!this.id) {
                        this.id = "ui-id-" + ++uuid;
                    }
                });
            };
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                if (/^ui-id-\d+$/.test(this.id)) {
                    $(this).removeAttr("id");
                }
            });
        }
    });
    var widgetsAccordion = $.widget("ui.accordion", {
        version: "1.12.1",
        options: {
            active: 0,
            animate: {},
            classes: {
                "ui-accordion-header": "ui-corner-top",
                "ui-accordion-header-collapsed": "ui-corner-all",
                "ui-accordion-content": "ui-corner-bottom"
            },
            collapsible: false,
            event: "click",
            header: "> li > :first-child, > :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function() {
            var options = this.options;
            this.prevShow = this.prevHide = $();
            this._addClass("ui-accordion", "ui-widget ui-helper-reset");
            this.element.attr("role", "tablist");
            if (!options.collapsible && (options.active === false || options.active == null)) {
                options.active = 0;
            }
            this._processPanels();
            if (options.active < 0) {
                options.active += this.headers.length;
            }
            this._refresh();
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: !this.active.length ? $() : this.active.next()
            };
        },
        _createIcons: function() {
            var icon, children, icons = this.options.icons;
            if (icons) {
                icon = $("<span>");
                this._addClass(icon, "ui-accordion-header-icon", "ui-icon " + icons.header);
                icon.prependTo(this.headers);
                children = this.active.children(".ui-accordion-header-icon");
                this._removeClass(children, icons.header)._addClass(children, null, icons.activeHeader)._addClass(this.headers, "ui-accordion-icons");
            }
        },
        _destroyIcons: function() {
            this._removeClass(this.headers, "ui-accordion-icons");
            this.headers.children(".ui-accordion-header-icon").remove();
        },
        _destroy: function() {
            var contents;
            this.element.removeAttr("role");
            this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId();
            this._destroyIcons();
            contents = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId();
            if (this.options.heightStyle !== "content") {
                contents.css("height", "");
            }
        },
        _setOption: function(key, value) {
            if (key === "active") {
                this._activate(value);
                return;
            }
            if (key === "event") {
                if (this.options.event) {
                    this._off(this.headers, this.options.event);
                }
                this._setupEvents(value);
            }
            this._super(key, value);
            if (key === "collapsible" && !value && this.options.active === false) {
                this._activate(0);
            }
            if (key === "icons") {
                this._destroyIcons();
                if (value) {
                    this._createIcons();
                }
            }
        },
        _setOptionDisabled: function(value) {
            this._super(value);
            this.element.attr("aria-disabled", value);
            this._toggleClass(null, "ui-state-disabled", !!value);
            this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!value);
        },
        _keydown: function(event) {
            if (event.altKey || event.ctrlKey) {
                return;
            }
            var keyCode = $.ui.keyCode, length = this.headers.length, currentIndex = this.headers.index(event.target), toFocus = false;
            switch (event.keyCode) {
              case keyCode.RIGHT:
              case keyCode.DOWN:
                toFocus = this.headers[(currentIndex + 1) % length];
                break;

              case keyCode.LEFT:
              case keyCode.UP:
                toFocus = this.headers[(currentIndex - 1 + length) % length];
                break;

              case keyCode.SPACE:
              case keyCode.ENTER:
                this._eventHandler(event);
                break;

              case keyCode.HOME:
                toFocus = this.headers[0];
                break;

              case keyCode.END:
                toFocus = this.headers[length - 1];
                break;
            }
            if (toFocus) {
                $(event.target).attr("tabIndex", -1);
                $(toFocus).attr("tabIndex", 0);
                $(toFocus).trigger("focus");
                event.preventDefault();
            }
        },
        _panelKeyDown: function(event) {
            if (event.keyCode === $.ui.keyCode.UP && event.ctrlKey) {
                $(event.currentTarget).prev().trigger("focus");
            }
        },
        refresh: function() {
            var options = this.options;
            this._processPanels();
            if (options.active === false && options.collapsible === true || !this.headers.length) {
                options.active = false;
                this.active = $();
            } else if (options.active === false) {
                this._activate(0);
            } else if (this.active.length && !$.contains(this.element[0], this.active[0])) {
                if (this.headers.length === this.headers.find(".ui-state-disabled").length) {
                    options.active = false;
                    this.active = $();
                } else {
                    this._activate(Math.max(0, options.active - 1));
                }
            } else {
                options.active = this.headers.index(this.active);
            }
            this._destroyIcons();
            this._refresh();
        },
        _processPanels: function() {
            var prevHeaders = this.headers, prevPanels = this.panels;
            this.headers = this.element.find(this.options.header);
            this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default");
            this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide();
            this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content");
            if (prevPanels) {
                this._off(prevHeaders.not(this.headers));
                this._off(prevPanels.not(this.panels));
            }
        },
        _refresh: function() {
            var maxHeight, options = this.options, heightStyle = options.heightStyle, parent = this.element.parent();
            this.active = this._findActive(options.active);
            this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed");
            this._addClass(this.active.next(), "ui-accordion-content-active");
            this.active.next().show();
            this.headers.attr("role", "tab").each(function() {
                var header = $(this), headerId = header.uniqueId().attr("id"), panel = header.next(), panelId = panel.uniqueId().attr("id");
                header.attr("aria-controls", panelId);
                panel.attr("aria-labelledby", headerId);
            }).next().attr("role", "tabpanel");
            this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide();
            if (!this.active.length) {
                this.headers.eq(0).attr("tabIndex", 0);
            } else {
                this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }).next().attr({
                    "aria-hidden": "false"
                });
            }
            this._createIcons();
            this._setupEvents(options.event);
            if (heightStyle === "fill") {
                maxHeight = parent.height();
                this.element.siblings(":visible").each(function() {
                    var elem = $(this), position = elem.css("position");
                    if (position === "absolute" || position === "fixed") {
                        return;
                    }
                    maxHeight -= elem.outerHeight(true);
                });
                this.headers.each(function() {
                    maxHeight -= $(this).outerHeight(true);
                });
                this.headers.next().each(function() {
                    $(this).height(Math.max(0, maxHeight - $(this).innerHeight() + $(this).height()));
                }).css("overflow", "auto");
            } else if (heightStyle === "auto") {
                maxHeight = 0;
                this.headers.next().each(function() {
                    var isVisible = $(this).is(":visible");
                    if (!isVisible) {
                        $(this).show();
                    }
                    maxHeight = Math.max(maxHeight, $(this).css("height", "").height());
                    if (!isVisible) {
                        $(this).hide();
                    }
                }).height(maxHeight);
            }
        },
        _activate: function(index) {
            var active = this._findActive(index)[0];
            if (active === this.active[0]) {
                return;
            }
            active = active || this.active[0];
            this._eventHandler({
                target: active,
                currentTarget: active,
                preventDefault: $.noop
            });
        },
        _findActive: function(selector) {
            return typeof selector === "number" ? this.headers.eq(selector) : $();
        },
        _setupEvents: function(event) {
            var events = {
                keydown: "_keydown"
            };
            if (event) {
                $.each(event.split(" "), function(index, eventName) {
                    events[eventName] = "_eventHandler";
                });
            }
            this._off(this.headers.add(this.headers.next()));
            this._on(this.headers, events);
            this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            });
            this._hoverable(this.headers);
            this._focusable(this.headers);
        },
        _eventHandler: function(event) {
            var activeChildren, clickedChildren, options = this.options, active = this.active, clicked = $(event.currentTarget), clickedIsActive = clicked[0] === active[0], collapsing = clickedIsActive && options.collapsible, toShow = collapsing ? $() : clicked.next(), toHide = active.next(), eventData = {
                oldHeader: active,
                oldPanel: toHide,
                newHeader: collapsing ? $() : clicked,
                newPanel: toShow
            };
            event.preventDefault();
            if (clickedIsActive && !options.collapsible || this._trigger("beforeActivate", event, eventData) === false) {
                return;
            }
            options.active = collapsing ? false : this.headers.index(clicked);
            this.active = clickedIsActive ? $() : clicked;
            this._toggle(eventData);
            this._removeClass(active, "ui-accordion-header-active", "ui-state-active");
            if (options.icons) {
                activeChildren = active.children(".ui-accordion-header-icon");
                this._removeClass(activeChildren, null, options.icons.activeHeader)._addClass(activeChildren, null, options.icons.header);
            }
            if (!clickedIsActive) {
                this._removeClass(clicked, "ui-accordion-header-collapsed")._addClass(clicked, "ui-accordion-header-active", "ui-state-active");
                if (options.icons) {
                    clickedChildren = clicked.children(".ui-accordion-header-icon");
                    this._removeClass(clickedChildren, null, options.icons.header)._addClass(clickedChildren, null, options.icons.activeHeader);
                }
                this._addClass(clicked.next(), "ui-accordion-content-active");
            }
        },
        _toggle: function(data) {
            var toShow = data.newPanel, toHide = this.prevShow.length ? this.prevShow : data.oldPanel;
            this.prevShow.add(this.prevHide).stop(true, true);
            this.prevShow = toShow;
            this.prevHide = toHide;
            if (this.options.animate) {
                this._animate(toShow, toHide, data);
            } else {
                toHide.hide();
                toShow.show();
                this._toggleComplete(data);
            }
            toHide.attr({
                "aria-hidden": "true"
            });
            toHide.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            });
            if (toShow.length && toHide.length) {
                toHide.prev().attr({
                    tabIndex: -1,
                    "aria-expanded": "false"
                });
            } else if (toShow.length) {
                this.headers.filter(function() {
                    return parseInt($(this).attr("tabIndex"), 10) === 0;
                }).attr("tabIndex", -1);
            }
            toShow.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            });
        },
        _animate: function(toShow, toHide, data) {
            var total, easing, duration, that = this, adjust = 0, boxSizing = toShow.css("box-sizing"), down = toShow.length && (!toHide.length || toShow.index() < toHide.index()), animate = this.options.animate || {}, options = down && animate.down || animate, complete = function() {
                that._toggleComplete(data);
            };
            if (typeof options === "number") {
                duration = options;
            }
            if (typeof options === "string") {
                easing = options;
            }
            easing = easing || options.easing || animate.easing;
            duration = duration || options.duration || animate.duration;
            if (!toHide.length) {
                return toShow.animate(this.showProps, duration, easing, complete);
            }
            if (!toShow.length) {
                return toHide.animate(this.hideProps, duration, easing, complete);
            }
            total = toShow.show().outerHeight();
            toHide.animate(this.hideProps, {
                duration: duration,
                easing: easing,
                step: function(now, fx) {
                    fx.now = Math.round(now);
                }
            });
            toShow.hide().animate(this.showProps, {
                duration: duration,
                easing: easing,
                complete: complete,
                step: function(now, fx) {
                    fx.now = Math.round(now);
                    if (fx.prop !== "height") {
                        if (boxSizing === "content-box") {
                            adjust += fx.now;
                        }
                    } else if (that.options.heightStyle !== "content") {
                        fx.now = Math.round(total - toHide.outerHeight() - adjust);
                        adjust = 0;
                    }
                }
            });
        },
        _toggleComplete: function(data) {
            var toHide = data.oldPanel, prev = toHide.prev();
            this._removeClass(toHide, "ui-accordion-content-active");
            this._removeClass(prev, "ui-accordion-header-active")._addClass(prev, "ui-accordion-header-collapsed");
            if (toHide.length) {
                toHide.parent()[0].className = toHide.parent()[0].className;
            }
            this._trigger("activate", null, data);
        }
    });
    var safeActiveElement = $.ui.safeActiveElement = function(document) {
        var activeElement;
        try {
            activeElement = document.activeElement;
        } catch (error) {
            activeElement = document.body;
        }
        if (!activeElement) {
            activeElement = document.body;
        }
        if (!activeElement.nodeName) {
            activeElement = document.body;
        }
        return activeElement;
    };
    var widgetsMenu = $.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-caret-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element;
            this.mouseHandled = false;
            this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            });
            this._addClass("ui-menu", "ui-widget ui-widget-content");
            this._on({
                "mousedown .ui-menu-item": function(event) {
                    event.preventDefault();
                },
                "click .ui-menu-item": function(event) {
                    var target = $(event.target);
                    var active = $($.ui.safeActiveElement(this.document[0]));
                    if (!this.mouseHandled && target.not(".ui-state-disabled").length) {
                        this.select(event);
                        if (!event.isPropagationStopped()) {
                            this.mouseHandled = true;
                        }
                        if (target.has(".ui-menu").length) {
                            this.expand(event);
                        } else if (!this.element.is(":focus") && active.closest(".ui-menu").length) {
                            this.element.trigger("focus", [ true ]);
                            if (this.active && this.active.parents(".ui-menu").length === 1) {
                                clearTimeout(this.timer);
                            }
                        }
                    }
                },
                "mouseenter .ui-menu-item": function(event) {
                    if (this.previousFilter) {
                        return;
                    }
                    var actualTarget = $(event.target).closest(".ui-menu-item"), target = $(event.currentTarget);
                    if (actualTarget[0] !== target[0]) {
                        return;
                    }
                    this._removeClass(target.siblings().children(".ui-state-active"), null, "ui-state-active");
                    this.focus(event, target);
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(event, keepActiveItem) {
                    var item = this.active || this.element.find(this.options.items).eq(0);
                    if (!keepActiveItem) {
                        this.focus(event, item);
                    }
                },
                blur: function(event) {
                    this._delay(function() {
                        var notContained = !$.contains(this.element[0], $.ui.safeActiveElement(this.document[0]));
                        if (notContained) {
                            this.collapseAll(event);
                        }
                    });
                },
                keydown: "_keydown"
            });
            this.refresh();
            this._on(this.document, {
                click: function(event) {
                    if (this._closeOnDocumentClick(event)) {
                        this.collapseAll(event);
                    }
                    this.mouseHandled = false;
                }
            });
        },
        _destroy: function() {
            var items = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"), submenus = items.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled " + "tabIndex").removeUniqueId().show();
            submenus.children().each(function() {
                var elem = $(this);
                if (elem.data("ui-menu-submenu-caret")) {
                    elem.remove();
                }
            });
        },
        _keydown: function(event) {
            var match, prev, character, skip, preventDefault = true;
            switch (event.keyCode) {
              case $.ui.keyCode.PAGE_UP:
                this.previousPage(event);
                break;

              case $.ui.keyCode.PAGE_DOWN:
                this.nextPage(event);
                break;

              case $.ui.keyCode.HOME:
                this._move("first", "first", event);
                break;

              case $.ui.keyCode.END:
                this._move("last", "last", event);
                break;

              case $.ui.keyCode.UP:
                this.previous(event);
                break;

              case $.ui.keyCode.DOWN:
                this.next(event);
                break;

              case $.ui.keyCode.LEFT:
                this.collapse(event);
                break;

              case $.ui.keyCode.RIGHT:
                if (this.active && !this.active.is(".ui-state-disabled")) {
                    this.expand(event);
                }
                break;

              case $.ui.keyCode.ENTER:
              case $.ui.keyCode.SPACE:
                this._activate(event);
                break;

              case $.ui.keyCode.ESCAPE:
                this.collapse(event);
                break;

              default:
                preventDefault = false;
                prev = this.previousFilter || "";
                skip = false;
                character = event.keyCode >= 96 && event.keyCode <= 105 ? (event.keyCode - 96).toString() : String.fromCharCode(event.keyCode);
                clearTimeout(this.filterTimer);
                if (character === prev) {
                    skip = true;
                } else {
                    character = prev + character;
                }
                match = this._filterMenuItems(character);
                match = skip && match.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : match;
                if (!match.length) {
                    character = String.fromCharCode(event.keyCode);
                    match = this._filterMenuItems(character);
                }
                if (match.length) {
                    this.focus(event, match);
                    this.previousFilter = character;
                    this.filterTimer = this._delay(function() {
                        delete this.previousFilter;
                    }, 1e3);
                } else {
                    delete this.previousFilter;
                }
            }
            if (preventDefault) {
                event.preventDefault();
            }
        },
        _activate: function(event) {
            if (this.active && !this.active.is(".ui-state-disabled")) {
                if (this.active.children("[aria-haspopup='true']").length) {
                    this.expand(event);
                } else {
                    this.select(event);
                }
            }
        },
        refresh: function() {
            var menus, items, newSubmenus, newItems, newWrappers, that = this, icon = this.options.icons.submenu, submenus = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length);
            newSubmenus = submenus.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var menu = $(this), item = menu.prev(), submenuCaret = $("<span>").data("ui-menu-submenu-caret", true);
                that._addClass(submenuCaret, "ui-menu-icon", "ui-icon " + icon);
                item.attr("aria-haspopup", "true").prepend(submenuCaret);
                menu.attr("aria-labelledby", item.attr("id"));
            });
            this._addClass(newSubmenus, "ui-menu", "ui-widget ui-widget-content ui-front");
            menus = submenus.add(this.element);
            items = menus.find(this.options.items);
            items.not(".ui-menu-item").each(function() {
                var item = $(this);
                if (that._isDivider(item)) {
                    that._addClass(item, "ui-menu-divider", "ui-widget-content");
                }
            });
            newItems = items.not(".ui-menu-item, .ui-menu-divider");
            newWrappers = newItems.children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            });
            this._addClass(newItems, "ui-menu-item")._addClass(newWrappers, "ui-menu-item-wrapper");
            items.filter(".ui-state-disabled").attr("aria-disabled", "true");
            if (this.active && !$.contains(this.element[0], this.active[0])) {
                this.blur();
            }
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role];
        },
        _setOption: function(key, value) {
            if (key === "icons") {
                var icons = this.element.find(".ui-menu-icon");
                this._removeClass(icons, null, this.options.icons.submenu)._addClass(icons, null, value.submenu);
            }
            this._super(key, value);
        },
        _setOptionDisabled: function(value) {
            this._super(value);
            this.element.attr("aria-disabled", String(value));
            this._toggleClass(null, "ui-state-disabled", !!value);
        },
        focus: function(event, item) {
            var nested, focused, activeParent;
            this.blur(event, event && event.type === "focus");
            this._scrollIntoView(item);
            this.active = item.first();
            focused = this.active.children(".ui-menu-item-wrapper");
            this._addClass(focused, null, "ui-state-active");
            if (this.options.role) {
                this.element.attr("aria-activedescendant", focused.attr("id"));
            }
            activeParent = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper");
            this._addClass(activeParent, null, "ui-state-active");
            if (event && event.type === "keydown") {
                this._close();
            } else {
                this.timer = this._delay(function() {
                    this._close();
                }, this.delay);
            }
            nested = item.children(".ui-menu");
            if (nested.length && event && /^mouse/.test(event.type)) {
                this._startOpening(nested);
            }
            this.activeMenu = item.parent();
            this._trigger("focus", event, {
                item: item
            });
        },
        _scrollIntoView: function(item) {
            var borderTop, paddingTop, offset, scroll, elementHeight, itemHeight;
            if (this._hasScroll()) {
                borderTop = parseFloat($.css(this.activeMenu[0], "borderTopWidth")) || 0;
                paddingTop = parseFloat($.css(this.activeMenu[0], "paddingTop")) || 0;
                offset = item.offset().top - this.activeMenu.offset().top - borderTop - paddingTop;
                scroll = this.activeMenu.scrollTop();
                elementHeight = this.activeMenu.height();
                itemHeight = item.outerHeight();
                if (offset < 0) {
                    this.activeMenu.scrollTop(scroll + offset);
                } else if (offset + itemHeight > elementHeight) {
                    this.activeMenu.scrollTop(scroll + offset - elementHeight + itemHeight);
                }
            }
        },
        blur: function(event, fromFocus) {
            if (!fromFocus) {
                clearTimeout(this.timer);
            }
            if (!this.active) {
                return;
            }
            this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active");
            this._trigger("blur", event, {
                item: this.active
            });
            this.active = null;
        },
        _startOpening: function(submenu) {
            clearTimeout(this.timer);
            if (submenu.attr("aria-hidden") !== "true") {
                return;
            }
            this.timer = this._delay(function() {
                this._close();
                this._open(submenu);
            }, this.delay);
        },
        _open: function(submenu) {
            var position = $.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer);
            this.element.find(".ui-menu").not(submenu.parents(".ui-menu")).hide().attr("aria-hidden", "true");
            submenu.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(position);
        },
        collapseAll: function(event, all) {
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                var currentMenu = all ? this.element : $(event && event.target).closest(this.element.find(".ui-menu"));
                if (!currentMenu.length) {
                    currentMenu = this.element;
                }
                this._close(currentMenu);
                this.blur(event);
                this._removeClass(currentMenu.find(".ui-state-active"), null, "ui-state-active");
                this.activeMenu = currentMenu;
            }, this.delay);
        },
        _close: function(startMenu) {
            if (!startMenu) {
                startMenu = this.active ? this.active.parent() : this.element;
            }
            startMenu.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false");
        },
        _closeOnDocumentClick: function(event) {
            return !$(event.target).closest(".ui-menu").length;
        },
        _isDivider: function(item) {
            return !/[^\-\u2014\u2013\s]/.test(item.text());
        },
        collapse: function(event) {
            var newItem = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            if (newItem && newItem.length) {
                this._close();
                this.focus(event, newItem);
            }
        },
        expand: function(event) {
            var newItem = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            if (newItem && newItem.length) {
                this._open(newItem.parent());
                this._delay(function() {
                    this.focus(event, newItem);
                });
            }
        },
        next: function(event) {
            this._move("next", "first", event);
        },
        previous: function(event) {
            this._move("prev", "last", event);
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length;
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length;
        },
        _move: function(direction, filter, event) {
            var next;
            if (this.active) {
                if (direction === "first" || direction === "last") {
                    next = this.active[direction === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1);
                } else {
                    next = this.active[direction + "All"](".ui-menu-item").eq(0);
                }
            }
            if (!next || !next.length || !this.active) {
                next = this.activeMenu.find(this.options.items)[filter]();
            }
            this.focus(event, next);
        },
        nextPage: function(event) {
            var item, base, height;
            if (!this.active) {
                this.next(event);
                return;
            }
            if (this.isLastItem()) {
                return;
            }
            if (this._hasScroll()) {
                base = this.active.offset().top;
                height = this.element.height();
                this.active.nextAll(".ui-menu-item").each(function() {
                    item = $(this);
                    return item.offset().top - base - height < 0;
                });
                this.focus(event, item);
            } else {
                this.focus(event, this.activeMenu.find(this.options.items)[!this.active ? "first" : "last"]());
            }
        },
        previousPage: function(event) {
            var item, base, height;
            if (!this.active) {
                this.next(event);
                return;
            }
            if (this.isFirstItem()) {
                return;
            }
            if (this._hasScroll()) {
                base = this.active.offset().top;
                height = this.element.height();
                this.active.prevAll(".ui-menu-item").each(function() {
                    item = $(this);
                    return item.offset().top - base + height > 0;
                });
                this.focus(event, item);
            } else {
                this.focus(event, this.activeMenu.find(this.options.items).first());
            }
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight");
        },
        select: function(event) {
            this.active = this.active || $(event.target).closest(".ui-menu-item");
            var ui = {
                item: this.active
            };
            if (!this.active.has(".ui-menu").length) {
                this.collapseAll(event, true);
            }
            this._trigger("select", event, ui);
        },
        _filterMenuItems: function(character) {
            var escapedCharacter = character.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), regex = new RegExp("^" + escapedCharacter, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return regex.test($.trim($(this).children(".ui-menu-item-wrapper").text()));
            });
        }
    });
    $.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: false,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var suppressKeyPress, suppressKeyPressRepeat, suppressInput, nodeName = this.element[0].nodeName.toLowerCase(), isTextarea = nodeName === "textarea", isInput = nodeName === "input";
            this.isMultiLine = isTextarea || !isInput && this._isContentEditable(this.element);
            this.valueMethod = this.element[isTextarea || isInput ? "val" : "text"];
            this.isNewMenu = true;
            this._addClass("ui-autocomplete-input");
            this.element.attr("autocomplete", "off");
            this._on(this.element, {
                keydown: function(event) {
                    if (this.element.prop("readOnly")) {
                        suppressKeyPress = true;
                        suppressInput = true;
                        suppressKeyPressRepeat = true;
                        return;
                    }
                    suppressKeyPress = false;
                    suppressInput = false;
                    suppressKeyPressRepeat = false;
                    var keyCode = $.ui.keyCode;
                    switch (event.keyCode) {
                      case keyCode.PAGE_UP:
                        suppressKeyPress = true;
                        this._move("previousPage", event);
                        break;

                      case keyCode.PAGE_DOWN:
                        suppressKeyPress = true;
                        this._move("nextPage", event);
                        break;

                      case keyCode.UP:
                        suppressKeyPress = true;
                        this._keyEvent("previous", event);
                        break;

                      case keyCode.DOWN:
                        suppressKeyPress = true;
                        this._keyEvent("next", event);
                        break;

                      case keyCode.ENTER:
                        if (this.menu.active) {
                            suppressKeyPress = true;
                            event.preventDefault();
                            this.menu.select(event);
                        }
                        break;

                      case keyCode.TAB:
                        if (this.menu.active) {
                            this.menu.select(event);
                        }
                        break;

                      case keyCode.ESCAPE:
                        if (this.menu.element.is(":visible")) {
                            if (!this.isMultiLine) {
                                this._value(this.term);
                            }
                            this.close(event);
                            event.preventDefault();
                        }
                        break;

                      default:
                        suppressKeyPressRepeat = true;
                        this._searchTimeout(event);
                        break;
                    }
                },
                keypress: function(event) {
                    if (suppressKeyPress) {
                        suppressKeyPress = false;
                        if (!this.isMultiLine || this.menu.element.is(":visible")) {
                            event.preventDefault();
                        }
                        return;
                    }
                    if (suppressKeyPressRepeat) {
                        return;
                    }
                    var keyCode = $.ui.keyCode;
                    switch (event.keyCode) {
                      case keyCode.PAGE_UP:
                        this._move("previousPage", event);
                        break;

                      case keyCode.PAGE_DOWN:
                        this._move("nextPage", event);
                        break;

                      case keyCode.UP:
                        this._keyEvent("previous", event);
                        break;

                      case keyCode.DOWN:
                        this._keyEvent("next", event);
                        break;
                    }
                },
                input: function(event) {
                    if (suppressInput) {
                        suppressInput = false;
                        event.preventDefault();
                        return;
                    }
                    this._searchTimeout(event);
                },
                focus: function() {
                    this.selectedItem = null;
                    this.previous = this._value();
                },
                blur: function(event) {
                    if (this.cancelBlur) {
                        delete this.cancelBlur;
                        return;
                    }
                    clearTimeout(this.searching);
                    this.close(event);
                    this._change(event);
                }
            });
            this._initSource();
            this.menu = $("<ul>").appendTo(this._appendTo()).menu({
                role: null
            }).hide().menu("instance");
            this._addClass(this.menu.element, "ui-autocomplete", "ui-front");
            this._on(this.menu.element, {
                mousedown: function(event) {
                    event.preventDefault();
                    this.cancelBlur = true;
                    this._delay(function() {
                        delete this.cancelBlur;
                        if (this.element[0] !== $.ui.safeActiveElement(this.document[0])) {
                            this.element.trigger("focus");
                        }
                    });
                },
                menufocus: function(event, ui) {
                    var label, item;
                    if (this.isNewMenu) {
                        this.isNewMenu = false;
                        if (event.originalEvent && /^mouse/.test(event.originalEvent.type)) {
                            this.menu.blur();
                            this.document.one("mousemove", function() {
                                $(event.target).trigger(event.originalEvent);
                            });
                            return;
                        }
                    }
                    item = ui.item.data("ui-autocomplete-item");
                    if (false !== this._trigger("focus", event, {
                        item: item
                    })) {
                        if (event.originalEvent && /^key/.test(event.originalEvent.type)) {
                            this._value(item.value);
                        }
                    }
                    label = ui.item.attr("aria-label") || item.value;
                    if (label && $.trim(label).length) {
                        this.liveRegion.children().hide();
                        $("<div>").text(label).appendTo(this.liveRegion);
                    }
                },
                menuselect: function(event, ui) {
                    var item = ui.item.data("ui-autocomplete-item"), previous = this.previous;
                    if (this.element[0] !== $.ui.safeActiveElement(this.document[0])) {
                        this.element.trigger("focus");
                        this.previous = previous;
                        this._delay(function() {
                            this.previous = previous;
                            this.selectedItem = item;
                        });
                    }
                    if (false !== this._trigger("select", event, {
                        item: item
                    })) {
                        this._value(item.value);
                    }
                    this.term = this._value();
                    this.close(event);
                    this.selectedItem = item;
                }
            });
            this.liveRegion = $("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body);
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible");
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete");
                }
            });
        },
        _destroy: function() {
            clearTimeout(this.searching);
            this.element.removeAttr("autocomplete");
            this.menu.element.remove();
            this.liveRegion.remove();
        },
        _setOption: function(key, value) {
            this._super(key, value);
            if (key === "source") {
                this._initSource();
            }
            if (key === "appendTo") {
                this.menu.element.appendTo(this._appendTo());
            }
            if (key === "disabled" && value && this.xhr) {
                this.xhr.abort();
            }
        },
        _isEventTargetInWidget: function(event) {
            var menuElement = this.menu.element[0];
            return event.target === this.element[0] || event.target === menuElement || $.contains(menuElement, event.target);
        },
        _closeOnClickOutside: function(event) {
            if (!this._isEventTargetInWidget(event)) {
                this.close();
            }
        },
        _appendTo: function() {
            var element = this.options.appendTo;
            if (element) {
                element = element.jquery || element.nodeType ? $(element) : this.document.find(element).eq(0);
            }
            if (!element || !element[0]) {
                element = this.element.closest(".ui-front, dialog");
            }
            if (!element.length) {
                element = this.document[0].body;
            }
            return element;
        },
        _initSource: function() {
            var array, url, that = this;
            if ($.isArray(this.options.source)) {
                array = this.options.source;
                this.source = function(request, response) {
                    response($.ui.autocomplete.filter(array, request.term));
                };
            } else if (typeof this.options.source === "string") {
                url = this.options.source;
                this.source = function(request, response) {
                    if (that.xhr) {
                        that.xhr.abort();
                    }
                    that.xhr = $.ajax({
                        url: url,
                        data: request,
                        dataType: "json",
                        success: function(data) {
                            response(data);
                        },
                        error: function() {
                            response([]);
                        }
                    });
                };
            } else {
                this.source = this.options.source;
            }
        },
        _searchTimeout: function(event) {
            clearTimeout(this.searching);
            this.searching = this._delay(function() {
                var equalValues = this.term === this._value(), menuVisible = this.menu.element.is(":visible"), modifierKey = event.altKey || event.ctrlKey || event.metaKey || event.shiftKey;
                if (!equalValues || equalValues && !menuVisible && !modifierKey) {
                    this.selectedItem = null;
                    this.search(null, event);
                }
            }, this.options.delay);
        },
        search: function(value, event) {
            value = value != null ? value : this._value();
            this.term = this._value();
            if (value.length < this.options.minLength) {
                return this.close(event);
            }
            if (this._trigger("search", event) === false) {
                return;
            }
            return this._search(value);
        },
        _search: function(value) {
            this.pending++;
            this._addClass("ui-autocomplete-loading");
            this.cancelSearch = false;
            this.source({
                term: value
            }, this._response());
        },
        _response: function() {
            var index = ++this.requestIndex;
            return $.proxy(function(content) {
                if (index === this.requestIndex) {
                    this.__response(content);
                }
                this.pending--;
                if (!this.pending) {
                    this._removeClass("ui-autocomplete-loading");
                }
            }, this);
        },
        __response: function(content) {
            if (content) {
                content = this._normalize(content);
            }
            this._trigger("response", null, {
                content: content
            });
            if (!this.options.disabled && content && content.length && !this.cancelSearch) {
                this._suggest(content);
                this._trigger("open");
            } else {
                this._close();
            }
        },
        close: function(event) {
            this.cancelSearch = true;
            this._close(event);
        },
        _close: function(event) {
            this._off(this.document, "mousedown");
            if (this.menu.element.is(":visible")) {
                this.menu.element.hide();
                this.menu.blur();
                this.isNewMenu = true;
                this._trigger("close", event);
            }
        },
        _change: function(event) {
            if (this.previous !== this._value()) {
                this._trigger("change", event, {
                    item: this.selectedItem
                });
            }
        },
        _normalize: function(items) {
            if (items.length && items[0].label && items[0].value) {
                return items;
            }
            return $.map(items, function(item) {
                if (typeof item === "string") {
                    return {
                        label: item,
                        value: item
                    };
                }
                return $.extend({}, item, {
                    label: item.label || item.value,
                    value: item.value || item.label
                });
            });
        },
        _suggest: function(items) {
            var ul = this.menu.element.empty();
            this._renderMenu(ul, items);
            this.isNewMenu = true;
            this.menu.refresh();
            ul.show();
            this._resizeMenu();
            ul.position($.extend({
                of: this.element
            }, this.options.position));
            if (this.options.autoFocus) {
                this.menu.next();
            }
            this._on(this.document, {
                mousedown: "_closeOnClickOutside"
            });
        },
        _resizeMenu: function() {
            var ul = this.menu.element;
            ul.outerWidth(Math.max(ul.width("").outerWidth() + 1, this.element.outerWidth()));
        },
        _renderMenu: function(ul, items) {
            var that = this;
            $.each(items, function(index, item) {
                that._renderItemData(ul, item);
            });
        },
        _renderItemData: function(ul, item) {
            return this._renderItem(ul, item).data("ui-autocomplete-item", item);
        },
        _renderItem: function(ul, item) {
            return $("<li>").append($("<div>").text(item.label)).appendTo(ul);
        },
        _move: function(direction, event) {
            if (!this.menu.element.is(":visible")) {
                this.search(null, event);
                return;
            }
            if (this.menu.isFirstItem() && /^previous/.test(direction) || this.menu.isLastItem() && /^next/.test(direction)) {
                if (!this.isMultiLine) {
                    this._value(this.term);
                }
                this.menu.blur();
                return;
            }
            this.menu[direction](event);
        },
        widget: function() {
            return this.menu.element;
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments);
        },
        _keyEvent: function(keyEvent, event) {
            if (!this.isMultiLine || this.menu.element.is(":visible")) {
                this._move(keyEvent, event);
                event.preventDefault();
            }
        },
        _isContentEditable: function(element) {
            if (!element.length) {
                return false;
            }
            var editable = element.prop("contentEditable");
            if (editable === "inherit") {
                return this._isContentEditable(element.parent());
            }
            return editable === "true";
        }
    });
    $.extend($.ui.autocomplete, {
        escapeRegex: function(value) {
            return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        },
        filter: function(array, term) {
            var matcher = new RegExp($.ui.autocomplete.escapeRegex(term), "i");
            return $.grep(array, function(value) {
                return matcher.test(value.label || value.value || value);
            });
        }
    });
    $.widget("ui.autocomplete", $.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(amount) {
                    return amount + (amount > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
                }
            }
        },
        __response: function(content) {
            var message;
            this._superApply(arguments);
            if (this.options.disabled || this.cancelSearch) {
                return;
            }
            if (content && content.length) {
                message = this.options.messages.results(content.length);
            } else {
                message = this.options.messages.noResults;
            }
            this.liveRegion.children().hide();
            $("<div>").text(message).appendTo(this.liveRegion);
        }
    });
    var widgetsAutocomplete = $.ui.autocomplete;
    var controlgroupCornerRegex = /ui-corner-([a-z]){2,6}/g;
    var widgetsControlgroup = $.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: {
            direction: "horizontal",
            disabled: null,
            onlyVisible: true,
            items: {
                button: "input[type=button], input[type=submit], input[type=reset], button, a",
                controlgroupLabel: ".ui-controlgroup-label",
                checkboxradio: "input[type='checkbox'], input[type='radio']",
                selectmenu: "select",
                spinner: ".ui-spinner-input"
            }
        },
        _create: function() {
            this._enhance();
        },
        _enhance: function() {
            this.element.attr("role", "toolbar");
            this.refresh();
        },
        _destroy: function() {
            this._callChildMethod("destroy");
            this.childWidgets.removeData("ui-controlgroup-data");
            this.element.removeAttr("role");
            if (this.options.items.controlgroupLabel) {
                this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap();
            }
        },
        _initWidgets: function() {
            var that = this, childWidgets = [];
            $.each(this.options.items, function(widget, selector) {
                var labels;
                var options = {};
                if (!selector) {
                    return;
                }
                if (widget === "controlgroupLabel") {
                    labels = that.element.find(selector);
                    labels.each(function() {
                        var element = $(this);
                        if (element.children(".ui-controlgroup-label-contents").length) {
                            return;
                        }
                        element.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>");
                    });
                    that._addClass(labels, null, "ui-widget ui-widget-content ui-state-default");
                    childWidgets = childWidgets.concat(labels.get());
                    return;
                }
                if (!$.fn[widget]) {
                    return;
                }
                if (that["_" + widget + "Options"]) {
                    options = that["_" + widget + "Options"]("middle");
                } else {
                    options = {
                        classes: {}
                    };
                }
                that.element.find(selector).each(function() {
                    var element = $(this);
                    var instance = element[widget]("instance");
                    var instanceOptions = $.widget.extend({}, options);
                    if (widget === "button" && element.parent(".ui-spinner").length) {
                        return;
                    }
                    if (!instance) {
                        instance = element[widget]()[widget]("instance");
                    }
                    if (instance) {
                        instanceOptions.classes = that._resolveClassesValues(instanceOptions.classes, instance);
                    }
                    element[widget](instanceOptions);
                    var widgetElement = element[widget]("widget");
                    $.data(widgetElement[0], "ui-controlgroup-data", instance ? instance : element[widget]("instance"));
                    childWidgets.push(widgetElement[0]);
                });
            });
            this.childWidgets = $($.unique(childWidgets));
            this._addClass(this.childWidgets, "ui-controlgroup-item");
        },
        _callChildMethod: function(method) {
            this.childWidgets.each(function() {
                var element = $(this), data = element.data("ui-controlgroup-data");
                if (data && data[method]) {
                    data[method]();
                }
            });
        },
        _updateCornerClass: function(element, position) {
            var remove = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all";
            var add = this._buildSimpleOptions(position, "label").classes.label;
            this._removeClass(element, null, remove);
            this._addClass(element, null, add);
        },
        _buildSimpleOptions: function(position, key) {
            var direction = this.options.direction === "vertical";
            var result = {
                classes: {}
            };
            result.classes[key] = {
                middle: "",
                first: "ui-corner-" + (direction ? "top" : "left"),
                last: "ui-corner-" + (direction ? "bottom" : "right"),
                only: "ui-corner-all"
            }[position];
            return result;
        },
        _spinnerOptions: function(position) {
            var options = this._buildSimpleOptions(position, "ui-spinner");
            options.classes["ui-spinner-up"] = "";
            options.classes["ui-spinner-down"] = "";
            return options;
        },
        _buttonOptions: function(position) {
            return this._buildSimpleOptions(position, "ui-button");
        },
        _checkboxradioOptions: function(position) {
            return this._buildSimpleOptions(position, "ui-checkboxradio-label");
        },
        _selectmenuOptions: function(position) {
            var direction = this.options.direction === "vertical";
            return {
                width: direction ? "auto" : false,
                classes: {
                    middle: {
                        "ui-selectmenu-button-open": "",
                        "ui-selectmenu-button-closed": ""
                    },
                    first: {
                        "ui-selectmenu-button-open": "ui-corner-" + (direction ? "top" : "tl"),
                        "ui-selectmenu-button-closed": "ui-corner-" + (direction ? "top" : "left")
                    },
                    last: {
                        "ui-selectmenu-button-open": direction ? "" : "ui-corner-tr",
                        "ui-selectmenu-button-closed": "ui-corner-" + (direction ? "bottom" : "right")
                    },
                    only: {
                        "ui-selectmenu-button-open": "ui-corner-top",
                        "ui-selectmenu-button-closed": "ui-corner-all"
                    }
                }[position]
            };
        },
        _resolveClassesValues: function(classes, instance) {
            var result = {};
            $.each(classes, function(key) {
                var current = instance.options.classes[key] || "";
                current = $.trim(current.replace(controlgroupCornerRegex, ""));
                result[key] = (current + " " + classes[key]).replace(/\s+/g, " ");
            });
            return result;
        },
        _setOption: function(key, value) {
            if (key === "direction") {
                this._removeClass("ui-controlgroup-" + this.options.direction);
            }
            this._super(key, value);
            if (key === "disabled") {
                this._callChildMethod(value ? "disable" : "enable");
                return;
            }
            this.refresh();
        },
        refresh: function() {
            var children, that = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction);
            if (this.options.direction === "horizontal") {
                this._addClass(null, "ui-helper-clearfix");
            }
            this._initWidgets();
            children = this.childWidgets;
            if (this.options.onlyVisible) {
                children = children.filter(":visible");
            }
            if (children.length) {
                $.each([ "first", "last" ], function(index, value) {
                    var instance = children[value]().data("ui-controlgroup-data");
                    if (instance && that["_" + instance.widgetName + "Options"]) {
                        var options = that["_" + instance.widgetName + "Options"](children.length === 1 ? "only" : value);
                        options.classes = that._resolveClassesValues(options.classes, instance);
                        instance.element[instance.widgetName](options);
                    } else {
                        that._updateCornerClass(children[value](), value);
                    }
                });
                this._callChildMethod("refresh");
            }
        }
    });
    $.widget("ui.checkboxradio", [ $.ui.formResetMixin, {
        version: "1.12.1",
        options: {
            disabled: null,
            label: null,
            icon: true,
            classes: {
                "ui-checkboxradio-label": "ui-corner-all",
                "ui-checkboxradio-icon": "ui-corner-all"
            }
        },
        _getCreateOptions: function() {
            var disabled, labels;
            var that = this;
            var options = this._super() || {};
            this._readType();
            labels = this.element.labels();
            this.label = $(labels[labels.length - 1]);
            if (!this.label.length) {
                $.error("No label found for checkboxradio widget");
            }
            this.originalLabel = "";
            this.label.contents().not(this.element[0]).each(function() {
                that.originalLabel += this.nodeType === 3 ? $(this).text() : this.outerHTML;
            });
            if (this.originalLabel) {
                options.label = this.originalLabel;
            }
            disabled = this.element[0].disabled;
            if (disabled != null) {
                options.disabled = disabled;
            }
            return options;
        },
        _create: function() {
            var checked = this.element[0].checked;
            this._bindFormResetHandler();
            if (this.options.disabled == null) {
                this.options.disabled = this.element[0].disabled;
            }
            this._setOption("disabled", this.options.disabled);
            this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible");
            this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget");
            if (this.type === "radio") {
                this._addClass(this.label, "ui-checkboxradio-radio-label");
            }
            if (this.options.label && this.options.label !== this.originalLabel) {
                this._updateLabel();
            } else if (this.originalLabel) {
                this.options.label = this.originalLabel;
            }
            this._enhance();
            if (checked) {
                this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active");
                if (this.icon) {
                    this._addClass(this.icon, null, "ui-state-hover");
                }
            }
            this._on({
                change: "_toggleClasses",
                focus: function() {
                    this._addClass(this.label, null, "ui-state-focus ui-visual-focus");
                },
                blur: function() {
                    this._removeClass(this.label, null, "ui-state-focus ui-visual-focus");
                }
            });
        },
        _readType: function() {
            var nodeName = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type;
            if (nodeName !== "input" || !/radio|checkbox/.test(this.type)) {
                $.error("Can't create checkboxradio on element.nodeName=" + nodeName + " and element.type=" + this.type);
            }
        },
        _enhance: function() {
            this._updateIcon(this.element[0].checked);
        },
        widget: function() {
            return this.label;
        },
        _getRadioGroup: function() {
            var group;
            var name = this.element[0].name;
            var nameSelector = "input[name='" + $.ui.escapeSelector(name) + "']";
            if (!name) {
                return $([]);
            }
            if (this.form.length) {
                group = $(this.form[0].elements).filter(nameSelector);
            } else {
                group = $(nameSelector).filter(function() {
                    return $(this).form().length === 0;
                });
            }
            return group.not(this.element);
        },
        _toggleClasses: function() {
            var checked = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", checked);
            if (this.options.icon && this.type === "checkbox") {
                this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", checked)._toggleClass(this.icon, null, "ui-icon-blank", !checked);
            }
            if (this.type === "radio") {
                this._getRadioGroup().each(function() {
                    var instance = $(this).checkboxradio("instance");
                    if (instance) {
                        instance._removeClass(instance.label, "ui-checkboxradio-checked", "ui-state-active");
                    }
                });
            }
        },
        _destroy: function() {
            this._unbindFormResetHandler();
            if (this.icon) {
                this.icon.remove();
                this.iconSpace.remove();
            }
        },
        _setOption: function(key, value) {
            if (key === "label" && !value) {
                return;
            }
            this._super(key, value);
            if (key === "disabled") {
                this._toggleClass(this.label, null, "ui-state-disabled", value);
                this.element[0].disabled = value;
                return;
            }
            this.refresh();
        },
        _updateIcon: function(checked) {
            var toAdd = "ui-icon ui-icon-background ";
            if (this.options.icon) {
                if (!this.icon) {
                    this.icon = $("<span>");
                    this.iconSpace = $("<span> </span>");
                    this._addClass(this.iconSpace, "ui-checkboxradio-icon-space");
                }
                if (this.type === "checkbox") {
                    toAdd += checked ? "ui-icon-check ui-state-checked" : "ui-icon-blank";
                    this._removeClass(this.icon, null, checked ? "ui-icon-blank" : "ui-icon-check");
                } else {
                    toAdd += "ui-icon-blank";
                }
                this._addClass(this.icon, "ui-checkboxradio-icon", toAdd);
                if (!checked) {
                    this._removeClass(this.icon, null, "ui-icon-check ui-state-checked");
                }
                this.icon.prependTo(this.label).after(this.iconSpace);
            } else if (this.icon !== undefined) {
                this.icon.remove();
                this.iconSpace.remove();
                delete this.icon;
            }
        },
        _updateLabel: function() {
            var contents = this.label.contents().not(this.element[0]);
            if (this.icon) {
                contents = contents.not(this.icon[0]);
            }
            if (this.iconSpace) {
                contents = contents.not(this.iconSpace[0]);
            }
            contents.remove();
            this.label.append(this.options.label);
        },
        refresh: function() {
            var checked = this.element[0].checked, isDisabled = this.element[0].disabled;
            this._updateIcon(checked);
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", checked);
            if (this.options.label !== null) {
                this._updateLabel();
            }
            if (isDisabled !== this.options.disabled) {
                this._setOptions({
                    disabled: isDisabled
                });
            }
        }
    } ]);
    var widgetsCheckboxradio = $.ui.checkboxradio;
    $.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: {
            classes: {
                "ui-button": "ui-corner-all"
            },
            disabled: null,
            icon: null,
            iconPosition: "beginning",
            label: null,
            showLabel: true
        },
        _getCreateOptions: function() {
            var disabled, options = this._super() || {};
            this.isInput = this.element.is("input");
            disabled = this.element[0].disabled;
            if (disabled != null) {
                options.disabled = disabled;
            }
            this.originalLabel = this.isInput ? this.element.val() : this.element.html();
            if (this.originalLabel) {
                options.label = this.originalLabel;
            }
            return options;
        },
        _create: function() {
            if (!this.option.showLabel & !this.options.icon) {
                this.options.showLabel = true;
            }
            if (this.options.disabled == null) {
                this.options.disabled = this.element[0].disabled || false;
            }
            this.hasTitle = !!this.element.attr("title");
            if (this.options.label && this.options.label !== this.originalLabel) {
                if (this.isInput) {
                    this.element.val(this.options.label);
                } else {
                    this.element.html(this.options.label);
                }
            }
            this._addClass("ui-button", "ui-widget");
            this._setOption("disabled", this.options.disabled);
            this._enhance();
            if (this.element.is("a")) {
                this._on({
                    keyup: function(event) {
                        if (event.keyCode === $.ui.keyCode.SPACE) {
                            event.preventDefault();
                            if (this.element[0].click) {
                                this.element[0].click();
                            } else {
                                this.element.trigger("click");
                            }
                        }
                    }
                });
            }
        },
        _enhance: function() {
            if (!this.element.is("button")) {
                this.element.attr("role", "button");
            }
            if (this.options.icon) {
                this._updateIcon("icon", this.options.icon);
                this._updateTooltip();
            }
        },
        _updateTooltip: function() {
            this.title = this.element.attr("title");
            if (!this.options.showLabel && !this.title) {
                this.element.attr("title", this.options.label);
            }
        },
        _updateIcon: function(option, value) {
            var icon = option !== "iconPosition", position = icon ? this.options.iconPosition : value, displayBlock = position === "top" || position === "bottom";
            if (!this.icon) {
                this.icon = $("<span>");
                this._addClass(this.icon, "ui-button-icon", "ui-icon");
                if (!this.options.showLabel) {
                    this._addClass("ui-button-icon-only");
                }
            } else if (icon) {
                this._removeClass(this.icon, null, this.options.icon);
            }
            if (icon) {
                this._addClass(this.icon, null, value);
            }
            this._attachIcon(position);
            if (displayBlock) {
                this._addClass(this.icon, null, "ui-widget-icon-block");
                if (this.iconSpace) {
                    this.iconSpace.remove();
                }
            } else {
                if (!this.iconSpace) {
                    this.iconSpace = $("<span> </span>");
                    this._addClass(this.iconSpace, "ui-button-icon-space");
                }
                this._removeClass(this.icon, null, "ui-wiget-icon-block");
                this._attachIconSpace(position);
            }
        },
        _destroy: function() {
            this.element.removeAttr("role");
            if (this.icon) {
                this.icon.remove();
            }
            if (this.iconSpace) {
                this.iconSpace.remove();
            }
            if (!this.hasTitle) {
                this.element.removeAttr("title");
            }
        },
        _attachIconSpace: function(iconPosition) {
            this.icon[/^(?:end|bottom)/.test(iconPosition) ? "before" : "after"](this.iconSpace);
        },
        _attachIcon: function(iconPosition) {
            this.element[/^(?:end|bottom)/.test(iconPosition) ? "append" : "prepend"](this.icon);
        },
        _setOptions: function(options) {
            var newShowLabel = options.showLabel === undefined ? this.options.showLabel : options.showLabel, newIcon = options.icon === undefined ? this.options.icon : options.icon;
            if (!newShowLabel && !newIcon) {
                options.showLabel = true;
            }
            this._super(options);
        },
        _setOption: function(key, value) {
            if (key === "icon") {
                if (value) {
                    this._updateIcon(key, value);
                } else if (this.icon) {
                    this.icon.remove();
                    if (this.iconSpace) {
                        this.iconSpace.remove();
                    }
                }
            }
            if (key === "iconPosition") {
                this._updateIcon(key, value);
            }
            if (key === "showLabel") {
                this._toggleClass("ui-button-icon-only", null, !value);
                this._updateTooltip();
            }
            if (key === "label") {
                if (this.isInput) {
                    this.element.val(value);
                } else {
                    this.element.html(value);
                    if (this.icon) {
                        this._attachIcon(this.options.iconPosition);
                        this._attachIconSpace(this.options.iconPosition);
                    }
                }
            }
            this._super(key, value);
            if (key === "disabled") {
                this._toggleClass(null, "ui-state-disabled", value);
                this.element[0].disabled = value;
                if (value) {
                    this.element.blur();
                }
            }
        },
        refresh: function() {
            var isDisabled = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            if (isDisabled !== this.options.disabled) {
                this._setOptions({
                    disabled: isDisabled
                });
            }
            this._updateTooltip();
        }
    });
    if ($.uiBackCompat !== false) {
        $.widget("ui.button", $.ui.button, {
            options: {
                text: true,
                icons: {
                    primary: null,
                    secondary: null
                }
            },
            _create: function() {
                if (this.options.showLabel && !this.options.text) {
                    this.options.showLabel = this.options.text;
                }
                if (!this.options.showLabel && this.options.text) {
                    this.options.text = this.options.showLabel;
                }
                if (!this.options.icon && (this.options.icons.primary || this.options.icons.secondary)) {
                    if (this.options.icons.primary) {
                        this.options.icon = this.options.icons.primary;
                    } else {
                        this.options.icon = this.options.icons.secondary;
                        this.options.iconPosition = "end";
                    }
                } else if (this.options.icon) {
                    this.options.icons.primary = this.options.icon;
                }
                this._super();
            },
            _setOption: function(key, value) {
                if (key === "text") {
                    this._super("showLabel", value);
                    return;
                }
                if (key === "showLabel") {
                    this.options.text = value;
                }
                if (key === "icon") {
                    this.options.icons.primary = value;
                }
                if (key === "icons") {
                    if (value.primary) {
                        this._super("icon", value.primary);
                        this._super("iconPosition", "beginning");
                    } else if (value.secondary) {
                        this._super("icon", value.secondary);
                        this._super("iconPosition", "end");
                    }
                }
                this._superApply(arguments);
            }
        });
        $.fn.button = function(orig) {
            return function() {
                if (!this.length || this.length && this[0].tagName !== "INPUT" || this.length && this[0].tagName === "INPUT" && (this.attr("type") !== "checkbox" && this.attr("type") !== "radio")) {
                    return orig.apply(this, arguments);
                }
                if (!$.ui.checkboxradio) {
                    $.error("Checkboxradio widget missing");
                }
                if (arguments.length === 0) {
                    return this.checkboxradio({
                        icon: false
                    });
                }
                return this.checkboxradio.apply(this, arguments);
            };
        }($.fn.button);
        $.fn.buttonset = function() {
            if (!$.ui.controlgroup) {
                $.error("Controlgroup widget missing");
            }
            if (arguments[0] === "option" && arguments[1] === "items" && arguments[2]) {
                return this.controlgroup.apply(this, [ arguments[0], "items.button", arguments[2] ]);
            }
            if (arguments[0] === "option" && arguments[1] === "items") {
                return this.controlgroup.apply(this, [ arguments[0], "items.button" ]);
            }
            if (typeof arguments[0] === "object" && arguments[0].items) {
                arguments[0].items = {
                    button: arguments[0].items
                };
            }
            return this.controlgroup.apply(this, arguments);
        };
    }
    var widgetsButton = $.ui.button;
    $.extend($.ui, {
        datepicker: {
            version: "1.12.1"
        }
    });
    var datepicker_instActive;
    function datepicker_getZindex(elem) {
        var position, value;
        while (elem.length && elem[0] !== document) {
            position = elem.css("position");
            if (position === "absolute" || position === "relative" || position === "fixed") {
                value = parseInt(elem.css("zIndex"), 10);
                if (!isNaN(value) && value !== 0) {
                    return value;
                }
            }
            elem = elem.parent();
        }
        return 0;
    }
    function Datepicker() {
        this._curInst = null;
        this._keyEvent = false;
        this._disabledInputs = [];
        this._datepickerShowing = false;
        this._inDialog = false;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
            monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
            dayNames: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
            dayNamesShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
            dayNamesMin: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ""
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: false,
            hideIfNoPrevNext: false,
            navigationAsDateFormat: false,
            gotoCurrent: false,
            changeMonth: false,
            changeYear: false,
            yearRange: "c-10:c+10",
            showOtherMonths: false,
            selectOtherMonths: false,
            showWeek: false,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: true,
            showButtonPanel: false,
            autoSize: false,
            disabled: false
        };
        $.extend(this._defaults, this.regional[""]);
        this.regional.en = $.extend(true, {}, this.regional[""]);
        this.regional["en-US"] = $.extend(true, {}, this.regional.en);
        this.dpDiv = datepicker_bindHover($("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
    }
    $.extend(Datepicker.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv;
        },
        setDefaults: function(settings) {
            datepicker_extendRemove(this._defaults, settings || {});
            return this;
        },
        _attachDatepicker: function(target, settings) {
            var nodeName, inline, inst;
            nodeName = target.nodeName.toLowerCase();
            inline = nodeName === "div" || nodeName === "span";
            if (!target.id) {
                this.uuid += 1;
                target.id = "dp" + this.uuid;
            }
            inst = this._newInst($(target), inline);
            inst.settings = $.extend({}, settings || {});
            if (nodeName === "input") {
                this._connectDatepicker(target, inst);
            } else if (inline) {
                this._inlineDatepicker(target, inst);
            }
        },
        _newInst: function(target, inline) {
            var id = target[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: id,
                input: target,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: inline,
                dpDiv: !inline ? this.dpDiv : datepicker_bindHover($("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
            };
        },
        _connectDatepicker: function(target, inst) {
            var input = $(target);
            inst.append = $([]);
            inst.trigger = $([]);
            if (input.hasClass(this.markerClassName)) {
                return;
            }
            this._attachments(input, inst);
            input.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp);
            this._autoSize(inst);
            $.data(target, "datepicker", inst);
            if (inst.settings.disabled) {
                this._disableDatepicker(target);
            }
        },
        _attachments: function(input, inst) {
            var showOn, buttonText, buttonImage, appendText = this._get(inst, "appendText"), isRTL = this._get(inst, "isRTL");
            if (inst.append) {
                inst.append.remove();
            }
            if (appendText) {
                inst.append = $("<span class='" + this._appendClass + "'>" + appendText + "</span>");
                input[isRTL ? "before" : "after"](inst.append);
            }
            input.off("focus", this._showDatepicker);
            if (inst.trigger) {
                inst.trigger.remove();
            }
            showOn = this._get(inst, "showOn");
            if (showOn === "focus" || showOn === "both") {
                input.on("focus", this._showDatepicker);
            }
            if (showOn === "button" || showOn === "both") {
                buttonText = this._get(inst, "buttonText");
                buttonImage = this._get(inst, "buttonImage");
                inst.trigger = $(this._get(inst, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({
                    src: buttonImage,
                    alt: buttonText,
                    title: buttonText
                }) : $("<button type='button'></button>").addClass(this._triggerClass).html(!buttonImage ? buttonText : $("<img/>").attr({
                    src: buttonImage,
                    alt: buttonText,
                    title: buttonText
                })));
                input[isRTL ? "before" : "after"](inst.trigger);
                inst.trigger.on("click", function() {
                    if ($.datepicker._datepickerShowing && $.datepicker._lastInput === input[0]) {
                        $.datepicker._hideDatepicker();
                    } else if ($.datepicker._datepickerShowing && $.datepicker._lastInput !== input[0]) {
                        $.datepicker._hideDatepicker();
                        $.datepicker._showDatepicker(input[0]);
                    } else {
                        $.datepicker._showDatepicker(input[0]);
                    }
                    return false;
                });
            }
        },
        _autoSize: function(inst) {
            if (this._get(inst, "autoSize") && !inst.inline) {
                var findMax, max, maxI, i, date = new Date(2009, 12 - 1, 20), dateFormat = this._get(inst, "dateFormat");
                if (dateFormat.match(/[DM]/)) {
                    findMax = function(names) {
                        max = 0;
                        maxI = 0;
                        for (i = 0; i < names.length; i++) {
                            if (names[i].length > max) {
                                max = names[i].length;
                                maxI = i;
                            }
                        }
                        return maxI;
                    };
                    date.setMonth(findMax(this._get(inst, dateFormat.match(/MM/) ? "monthNames" : "monthNamesShort")));
                    date.setDate(findMax(this._get(inst, dateFormat.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - date.getDay());
                }
                inst.input.attr("size", this._formatDate(inst, date).length);
            }
        },
        _inlineDatepicker: function(target, inst) {
            var divSpan = $(target);
            if (divSpan.hasClass(this.markerClassName)) {
                return;
            }
            divSpan.addClass(this.markerClassName).append(inst.dpDiv);
            $.data(target, "datepicker", inst);
            this._setDate(inst, this._getDefaultDate(inst), true);
            this._updateDatepicker(inst);
            this._updateAlternate(inst);
            if (inst.settings.disabled) {
                this._disableDatepicker(target);
            }
            inst.dpDiv.css("display", "block");
        },
        _dialogDatepicker: function(input, date, onSelect, settings, pos) {
            var id, browserWidth, browserHeight, scrollX, scrollY, inst = this._dialogInst;
            if (!inst) {
                this.uuid += 1;
                id = "dp" + this.uuid;
                this._dialogInput = $("<input type='text' id='" + id + "' style='position: absolute; top: -100px; width: 0px;'/>");
                this._dialogInput.on("keydown", this._doKeyDown);
                $("body").append(this._dialogInput);
                inst = this._dialogInst = this._newInst(this._dialogInput, false);
                inst.settings = {};
                $.data(this._dialogInput[0], "datepicker", inst);
            }
            datepicker_extendRemove(inst.settings, settings || {});
            date = date && date.constructor === Date ? this._formatDate(inst, date) : date;
            this._dialogInput.val(date);
            this._pos = pos ? pos.length ? pos : [ pos.pageX, pos.pageY ] : null;
            if (!this._pos) {
                browserWidth = document.documentElement.clientWidth;
                browserHeight = document.documentElement.clientHeight;
                scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
                scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                this._pos = [ browserWidth / 2 - 100 + scrollX, browserHeight / 2 - 150 + scrollY ];
            }
            this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px");
            inst.settings.onSelect = onSelect;
            this._inDialog = true;
            this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]);
            if ($.blockUI) {
                $.blockUI(this.dpDiv);
            }
            $.data(this._dialogInput[0], "datepicker", inst);
            return this;
        },
        _destroyDatepicker: function(target) {
            var nodeName, $target = $(target), inst = $.data(target, "datepicker");
            if (!$target.hasClass(this.markerClassName)) {
                return;
            }
            nodeName = target.nodeName.toLowerCase();
            $.removeData(target, "datepicker");
            if (nodeName === "input") {
                inst.append.remove();
                inst.trigger.remove();
                $target.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp);
            } else if (nodeName === "div" || nodeName === "span") {
                $target.removeClass(this.markerClassName).empty();
            }
            if (datepicker_instActive === inst) {
                datepicker_instActive = null;
            }
        },
        _enableDatepicker: function(target) {
            var nodeName, inline, $target = $(target), inst = $.data(target, "datepicker");
            if (!$target.hasClass(this.markerClassName)) {
                return;
            }
            nodeName = target.nodeName.toLowerCase();
            if (nodeName === "input") {
                target.disabled = false;
                inst.trigger.filter("button").each(function() {
                    this.disabled = false;
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                });
            } else if (nodeName === "div" || nodeName === "span") {
                inline = $target.children("." + this._inlineClass);
                inline.children().removeClass("ui-state-disabled");
                inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", false);
            }
            this._disabledInputs = $.map(this._disabledInputs, function(value) {
                return value === target ? null : value;
            });
        },
        _disableDatepicker: function(target) {
            var nodeName, inline, $target = $(target), inst = $.data(target, "datepicker");
            if (!$target.hasClass(this.markerClassName)) {
                return;
            }
            nodeName = target.nodeName.toLowerCase();
            if (nodeName === "input") {
                target.disabled = true;
                inst.trigger.filter("button").each(function() {
                    this.disabled = true;
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                });
            } else if (nodeName === "div" || nodeName === "span") {
                inline = $target.children("." + this._inlineClass);
                inline.children().addClass("ui-state-disabled");
                inline.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", true);
            }
            this._disabledInputs = $.map(this._disabledInputs, function(value) {
                return value === target ? null : value;
            });
            this._disabledInputs[this._disabledInputs.length] = target;
        },
        _isDisabledDatepicker: function(target) {
            if (!target) {
                return false;
            }
            for (var i = 0; i < this._disabledInputs.length; i++) {
                if (this._disabledInputs[i] === target) {
                    return true;
                }
            }
            return false;
        },
        _getInst: function(target) {
            try {
                return $.data(target, "datepicker");
            } catch (err) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function(target, name, value) {
            var settings, date, minDate, maxDate, inst = this._getInst(target);
            if (arguments.length === 2 && typeof name === "string") {
                return name === "defaults" ? $.extend({}, $.datepicker._defaults) : inst ? name === "all" ? $.extend({}, inst.settings) : this._get(inst, name) : null;
            }
            settings = name || {};
            if (typeof name === "string") {
                settings = {};
                settings[name] = value;
            }
            if (inst) {
                if (this._curInst === inst) {
                    this._hideDatepicker();
                }
                date = this._getDateDatepicker(target, true);
                minDate = this._getMinMaxDate(inst, "min");
                maxDate = this._getMinMaxDate(inst, "max");
                datepicker_extendRemove(inst.settings, settings);
                if (minDate !== null && settings.dateFormat !== undefined && settings.minDate === undefined) {
                    inst.settings.minDate = this._formatDate(inst, minDate);
                }
                if (maxDate !== null && settings.dateFormat !== undefined && settings.maxDate === undefined) {
                    inst.settings.maxDate = this._formatDate(inst, maxDate);
                }
                if ("disabled" in settings) {
                    if (settings.disabled) {
                        this._disableDatepicker(target);
                    } else {
                        this._enableDatepicker(target);
                    }
                }
                this._attachments($(target), inst);
                this._autoSize(inst);
                this._setDate(inst, date);
                this._updateAlternate(inst);
                this._updateDatepicker(inst);
            }
        },
        _changeDatepicker: function(target, name, value) {
            this._optionDatepicker(target, name, value);
        },
        _refreshDatepicker: function(target) {
            var inst = this._getInst(target);
            if (inst) {
                this._updateDatepicker(inst);
            }
        },
        _setDateDatepicker: function(target, date) {
            var inst = this._getInst(target);
            if (inst) {
                this._setDate(inst, date);
                this._updateDatepicker(inst);
                this._updateAlternate(inst);
            }
        },
        _getDateDatepicker: function(target, noDefault) {
            var inst = this._getInst(target);
            if (inst && !inst.inline) {
                this._setDateFromField(inst, noDefault);
            }
            return inst ? this._getDate(inst) : null;
        },
        _doKeyDown: function(event) {
            var onSelect, dateStr, sel, inst = $.datepicker._getInst(event.target), handled = true, isRTL = inst.dpDiv.is(".ui-datepicker-rtl");
            inst._keyEvent = true;
            if ($.datepicker._datepickerShowing) {
                switch (event.keyCode) {
                  case 9:
                    $.datepicker._hideDatepicker();
                    handled = false;
                    break;

                  case 13:
                    sel = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", inst.dpDiv);
                    if (sel[0]) {
                        $.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[0]);
                    }
                    onSelect = $.datepicker._get(inst, "onSelect");
                    if (onSelect) {
                        dateStr = $.datepicker._formatDate(inst);
                        onSelect.apply(inst.input ? inst.input[0] : null, [ dateStr, inst ]);
                    } else {
                        $.datepicker._hideDatepicker();
                    }
                    return false;

                  case 27:
                    $.datepicker._hideDatepicker();
                    break;

                  case 33:
                    $.datepicker._adjustDate(event.target, event.ctrlKey ? -$.datepicker._get(inst, "stepBigMonths") : -$.datepicker._get(inst, "stepMonths"), "M");
                    break;

                  case 34:
                    $.datepicker._adjustDate(event.target, event.ctrlKey ? +$.datepicker._get(inst, "stepBigMonths") : +$.datepicker._get(inst, "stepMonths"), "M");
                    break;

                  case 35:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._clearDate(event.target);
                    }
                    handled = event.ctrlKey || event.metaKey;
                    break;

                  case 36:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._gotoToday(event.target);
                    }
                    handled = event.ctrlKey || event.metaKey;
                    break;

                  case 37:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, isRTL ? +1 : -1, "D");
                    }
                    handled = event.ctrlKey || event.metaKey;
                    if (event.originalEvent.altKey) {
                        $.datepicker._adjustDate(event.target, event.ctrlKey ? -$.datepicker._get(inst, "stepBigMonths") : -$.datepicker._get(inst, "stepMonths"), "M");
                    }
                    break;

                  case 38:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, -7, "D");
                    }
                    handled = event.ctrlKey || event.metaKey;
                    break;

                  case 39:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, isRTL ? -1 : +1, "D");
                    }
                    handled = event.ctrlKey || event.metaKey;
                    if (event.originalEvent.altKey) {
                        $.datepicker._adjustDate(event.target, event.ctrlKey ? +$.datepicker._get(inst, "stepBigMonths") : +$.datepicker._get(inst, "stepMonths"), "M");
                    }
                    break;

                  case 40:
                    if (event.ctrlKey || event.metaKey) {
                        $.datepicker._adjustDate(event.target, +7, "D");
                    }
                    handled = event.ctrlKey || event.metaKey;
                    break;

                  default:
                    handled = false;
                }
            } else if (event.keyCode === 36 && event.ctrlKey) {
                $.datepicker._showDatepicker(this);
            } else {
                handled = false;
            }
            if (handled) {
                event.preventDefault();
                event.stopPropagation();
            }
        },
        _doKeyPress: function(event) {
            var chars, chr, inst = $.datepicker._getInst(event.target);
            if ($.datepicker._get(inst, "constrainInput")) {
                chars = $.datepicker._possibleChars($.datepicker._get(inst, "dateFormat"));
                chr = String.fromCharCode(event.charCode == null ? event.keyCode : event.charCode);
                return event.ctrlKey || event.metaKey || (chr < " " || !chars || chars.indexOf(chr) > -1);
            }
        },
        _doKeyUp: function(event) {
            var date, inst = $.datepicker._getInst(event.target);
            if (inst.input.val() !== inst.lastVal) {
                try {
                    date = $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"), inst.input ? inst.input.val() : null, $.datepicker._getFormatConfig(inst));
                    if (date) {
                        $.datepicker._setDateFromField(inst);
                        $.datepicker._updateAlternate(inst);
                        $.datepicker._updateDatepicker(inst);
                    }
                } catch (err) {}
            }
            return true;
        },
        _showDatepicker: function(input) {
            input = input.target || input;
            if (input.nodeName.toLowerCase() !== "input") {
                input = $("input", input.parentNode)[0];
            }
            if ($.datepicker._isDisabledDatepicker(input) || $.datepicker._lastInput === input) {
                return;
            }
            var inst, beforeShow, beforeShowSettings, isFixed, offset, showAnim, duration;
            inst = $.datepicker._getInst(input);
            if ($.datepicker._curInst && $.datepicker._curInst !== inst) {
                $.datepicker._curInst.dpDiv.stop(true, true);
                if (inst && $.datepicker._datepickerShowing) {
                    $.datepicker._hideDatepicker($.datepicker._curInst.input[0]);
                }
            }
            beforeShow = $.datepicker._get(inst, "beforeShow");
            beforeShowSettings = beforeShow ? beforeShow.apply(input, [ input, inst ]) : {};
            if (beforeShowSettings === false) {
                return;
            }
            datepicker_extendRemove(inst.settings, beforeShowSettings);
            inst.lastVal = null;
            $.datepicker._lastInput = input;
            $.datepicker._setDateFromField(inst);
            if ($.datepicker._inDialog) {
                input.value = "";
            }
            if (!$.datepicker._pos) {
                $.datepicker._pos = $.datepicker._findPos(input);
                $.datepicker._pos[1] += input.offsetHeight;
            }
            isFixed = false;
            $(input).parents().each(function() {
                isFixed |= $(this).css("position") === "fixed";
                return !isFixed;
            });
            offset = {
                left: $.datepicker._pos[0],
                top: $.datepicker._pos[1]
            };
            $.datepicker._pos = null;
            inst.dpDiv.empty();
            inst.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            });
            $.datepicker._updateDatepicker(inst);
            offset = $.datepicker._checkOffset(inst, offset, isFixed);
            inst.dpDiv.css({
                position: $.datepicker._inDialog && $.blockUI ? "static" : isFixed ? "fixed" : "absolute",
                display: "none",
                left: offset.left + "px",
                top: offset.top + "px"
            });
            if (!inst.inline) {
                showAnim = $.datepicker._get(inst, "showAnim");
                duration = $.datepicker._get(inst, "duration");
                inst.dpDiv.css("z-index", datepicker_getZindex($(input)) + 1);
                $.datepicker._datepickerShowing = true;
                if ($.effects && $.effects.effect[showAnim]) {
                    inst.dpDiv.show(showAnim, $.datepicker._get(inst, "showOptions"), duration);
                } else {
                    inst.dpDiv[showAnim || "show"](showAnim ? duration : null);
                }
                if ($.datepicker._shouldFocusInput(inst)) {
                    inst.input.trigger("focus");
                }
                $.datepicker._curInst = inst;
            }
        },
        _updateDatepicker: function(inst) {
            this.maxRows = 4;
            datepicker_instActive = inst;
            inst.dpDiv.empty().append(this._generateHTML(inst));
            this._attachHandlers(inst);
            var origyearshtml, numMonths = this._getNumberOfMonths(inst), cols = numMonths[1], width = 17, activeCell = inst.dpDiv.find("." + this._dayOverClass + " a");
            if (activeCell.length > 0) {
                datepicker_handleMouseover.apply(activeCell.get(0));
            }
            inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            if (cols > 1) {
                inst.dpDiv.addClass("ui-datepicker-multi-" + cols).css("width", width * cols + "em");
            }
            inst.dpDiv[(numMonths[0] !== 1 || numMonths[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            inst.dpDiv[(this._get(inst, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
            if (inst === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput(inst)) {
                inst.input.trigger("focus");
            }
            if (inst.yearshtml) {
                origyearshtml = inst.yearshtml;
                setTimeout(function() {
                    if (origyearshtml === inst.yearshtml && inst.yearshtml) {
                        inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml);
                    }
                    origyearshtml = inst.yearshtml = null;
                }, 0);
            }
        },
        _shouldFocusInput: function(inst) {
            return inst.input && inst.input.is(":visible") && !inst.input.is(":disabled") && !inst.input.is(":focus");
        },
        _checkOffset: function(inst, offset, isFixed) {
            var dpWidth = inst.dpDiv.outerWidth(), dpHeight = inst.dpDiv.outerHeight(), inputWidth = inst.input ? inst.input.outerWidth() : 0, inputHeight = inst.input ? inst.input.outerHeight() : 0, viewWidth = document.documentElement.clientWidth + (isFixed ? 0 : $(document).scrollLeft()), viewHeight = document.documentElement.clientHeight + (isFixed ? 0 : $(document).scrollTop());
            offset.left -= this._get(inst, "isRTL") ? dpWidth - inputWidth : 0;
            offset.left -= isFixed && offset.left === inst.input.offset().left ? $(document).scrollLeft() : 0;
            offset.top -= isFixed && offset.top === inst.input.offset().top + inputHeight ? $(document).scrollTop() : 0;
            offset.left -= Math.min(offset.left, offset.left + dpWidth > viewWidth && viewWidth > dpWidth ? Math.abs(offset.left + dpWidth - viewWidth) : 0);
            offset.top -= Math.min(offset.top, offset.top + dpHeight > viewHeight && viewHeight > dpHeight ? Math.abs(dpHeight + inputHeight) : 0);
            return offset;
        },
        _findPos: function(obj) {
            var position, inst = this._getInst(obj), isRTL = this._get(inst, "isRTL");
            while (obj && (obj.type === "hidden" || obj.nodeType !== 1 || $.expr.filters.hidden(obj))) {
                obj = obj[isRTL ? "previousSibling" : "nextSibling"];
            }
            position = $(obj).offset();
            return [ position.left, position.top ];
        },
        _hideDatepicker: function(input) {
            var showAnim, duration, postProcess, onClose, inst = this._curInst;
            if (!inst || input && inst !== $.data(input, "datepicker")) {
                return;
            }
            if (this._datepickerShowing) {
                showAnim = this._get(inst, "showAnim");
                duration = this._get(inst, "duration");
                postProcess = function() {
                    $.datepicker._tidyDialog(inst);
                };
                if ($.effects && ($.effects.effect[showAnim] || $.effects[showAnim])) {
                    inst.dpDiv.hide(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess);
                } else {
                    inst.dpDiv[showAnim === "slideDown" ? "slideUp" : showAnim === "fadeIn" ? "fadeOut" : "hide"](showAnim ? duration : null, postProcess);
                }
                if (!showAnim) {
                    postProcess();
                }
                this._datepickerShowing = false;
                onClose = this._get(inst, "onClose");
                if (onClose) {
                    onClose.apply(inst.input ? inst.input[0] : null, [ inst.input ? inst.input.val() : "", inst ]);
                }
                this._lastInput = null;
                if (this._inDialog) {
                    this._dialogInput.css({
                        position: "absolute",
                        left: "0",
                        top: "-100px"
                    });
                    if ($.blockUI) {
                        $.unblockUI();
                        $("body").append(this.dpDiv);
                    }
                }
                this._inDialog = false;
            }
        },
        _tidyDialog: function(inst) {
            inst.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
        },
        _checkExternalClick: function(event) {
            if (!$.datepicker._curInst) {
                return;
            }
            var $target = $(event.target), inst = $.datepicker._getInst($target[0]);
            if ($target[0].id !== $.datepicker._mainDivId && $target.parents("#" + $.datepicker._mainDivId).length === 0 && !$target.hasClass($.datepicker.markerClassName) && !$target.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && !($.datepicker._inDialog && $.blockUI) || $target.hasClass($.datepicker.markerClassName) && $.datepicker._curInst !== inst) {
                $.datepicker._hideDatepicker();
            }
        },
        _adjustDate: function(id, offset, period) {
            var target = $(id), inst = this._getInst(target[0]);
            if (this._isDisabledDatepicker(target[0])) {
                return;
            }
            this._adjustInstDate(inst, offset + (period === "M" ? this._get(inst, "showCurrentAtPos") : 0), period);
            this._updateDatepicker(inst);
        },
        _gotoToday: function(id) {
            var date, target = $(id), inst = this._getInst(target[0]);
            if (this._get(inst, "gotoCurrent") && inst.currentDay) {
                inst.selectedDay = inst.currentDay;
                inst.drawMonth = inst.selectedMonth = inst.currentMonth;
                inst.drawYear = inst.selectedYear = inst.currentYear;
            } else {
                date = new Date();
                inst.selectedDay = date.getDate();
                inst.drawMonth = inst.selectedMonth = date.getMonth();
                inst.drawYear = inst.selectedYear = date.getFullYear();
            }
            this._notifyChange(inst);
            this._adjustDate(target);
        },
        _selectMonthYear: function(id, select, period) {
            var target = $(id), inst = this._getInst(target[0]);
            inst["selected" + (period === "M" ? "Month" : "Year")] = inst["draw" + (period === "M" ? "Month" : "Year")] = parseInt(select.options[select.selectedIndex].value, 10);
            this._notifyChange(inst);
            this._adjustDate(target);
        },
        _selectDay: function(id, month, year, td) {
            var inst, target = $(id);
            if ($(td).hasClass(this._unselectableClass) || this._isDisabledDatepicker(target[0])) {
                return;
            }
            inst = this._getInst(target[0]);
            inst.selectedDay = inst.currentDay = $("a", td).html();
            inst.selectedMonth = inst.currentMonth = month;
            inst.selectedYear = inst.currentYear = year;
            this._selectDate(id, this._formatDate(inst, inst.currentDay, inst.currentMonth, inst.currentYear));
        },
        _clearDate: function(id) {
            var target = $(id);
            this._selectDate(target, "");
        },
        _selectDate: function(id, dateStr) {
            var onSelect, target = $(id), inst = this._getInst(target[0]);
            dateStr = dateStr != null ? dateStr : this._formatDate(inst);
            if (inst.input) {
                inst.input.val(dateStr);
            }
            this._updateAlternate(inst);
            onSelect = this._get(inst, "onSelect");
            if (onSelect) {
                onSelect.apply(inst.input ? inst.input[0] : null, [ dateStr, inst ]);
            } else if (inst.input) {
                inst.input.trigger("change");
            }
            if (inst.inline) {
                this._updateDatepicker(inst);
            } else {
                this._hideDatepicker();
                this._lastInput = inst.input[0];
                if (typeof inst.input[0] !== "object") {
                    inst.input.trigger("focus");
                }
                this._lastInput = null;
            }
        },
        _updateAlternate: function(inst) {
            var altFormat, date, dateStr, altField = this._get(inst, "altField");
            if (altField) {
                altFormat = this._get(inst, "altFormat") || this._get(inst, "dateFormat");
                date = this._getDate(inst);
                dateStr = this.formatDate(altFormat, date, this._getFormatConfig(inst));
                $(altField).val(dateStr);
            }
        },
        noWeekends: function(date) {
            var day = date.getDay();
            return [ day > 0 && day < 6, "" ];
        },
        iso8601Week: function(date) {
            var time, checkDate = new Date(date.getTime());
            checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
            time = checkDate.getTime();
            checkDate.setMonth(0);
            checkDate.setDate(1);
            return Math.floor(Math.round((time - checkDate) / 864e5) / 7) + 1;
        },
        parseDate: function(format, value, settings) {
            if (format == null || value == null) {
                throw "Invalid arguments";
            }
            value = typeof value === "object" ? value.toString() : value + "";
            if (value === "") {
                return null;
            }
            var iFormat, dim, extra, iValue = 0, shortYearCutoffTemp = (settings ? settings.shortYearCutoff : null) || this._defaults.shortYearCutoff, shortYearCutoff = typeof shortYearCutoffTemp !== "string" ? shortYearCutoffTemp : new Date().getFullYear() % 100 + parseInt(shortYearCutoffTemp, 10), dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort, dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames, monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort, monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames, year = -1, month = -1, day = -1, doy = -1, literal = false, date, lookAhead = function(match) {
                var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
                if (matches) {
                    iFormat++;
                }
                return matches;
            }, getNumber = function(match) {
                var isDoubled = lookAhead(match), size = match === "@" ? 14 : match === "!" ? 20 : match === "y" && isDoubled ? 4 : match === "o" ? 3 : 2, minSize = match === "y" ? size : 1, digits = new RegExp("^\\d{" + minSize + "," + size + "}"), num = value.substring(iValue).match(digits);
                if (!num) {
                    throw "Missing number at position " + iValue;
                }
                iValue += num[0].length;
                return parseInt(num[0], 10);
            }, getName = function(match, shortNames, longNames) {
                var index = -1, names = $.map(lookAhead(match) ? longNames : shortNames, function(v, k) {
                    return [ [ k, v ] ];
                }).sort(function(a, b) {
                    return -(a[1].length - b[1].length);
                });
                $.each(names, function(i, pair) {
                    var name = pair[1];
                    if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
                        index = pair[0];
                        iValue += name.length;
                        return false;
                    }
                });
                if (index !== -1) {
                    return index + 1;
                } else {
                    throw "Unknown name at position " + iValue;
                }
            }, checkLiteral = function() {
                if (value.charAt(iValue) !== format.charAt(iFormat)) {
                    throw "Unexpected literal at position " + iValue;
                }
                iValue++;
            };
            for (iFormat = 0; iFormat < format.length; iFormat++) {
                if (literal) {
                    if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
                        literal = false;
                    } else {
                        checkLiteral();
                    }
                } else {
                    switch (format.charAt(iFormat)) {
                      case "d":
                        day = getNumber("d");
                        break;

                      case "D":
                        getName("D", dayNamesShort, dayNames);
                        break;

                      case "o":
                        doy = getNumber("o");
                        break;

                      case "m":
                        month = getNumber("m");
                        break;

                      case "M":
                        month = getName("M", monthNamesShort, monthNames);
                        break;

                      case "y":
                        year = getNumber("y");
                        break;

                      case "@":
                        date = new Date(getNumber("@"));
                        year = date.getFullYear();
                        month = date.getMonth() + 1;
                        day = date.getDate();
                        break;

                      case "!":
                        date = new Date((getNumber("!") - this._ticksTo1970) / 1e4);
                        year = date.getFullYear();
                        month = date.getMonth() + 1;
                        day = date.getDate();
                        break;

                      case "'":
                        if (lookAhead("'")) {
                            checkLiteral();
                        } else {
                            literal = true;
                        }
                        break;

                      default:
                        checkLiteral();
                    }
                }
            }
            if (iValue < value.length) {
                extra = value.substr(iValue);
                if (!/^\s+/.test(extra)) {
                    throw "Extra/unparsed characters found in date: " + extra;
                }
            }
            if (year === -1) {
                year = new Date().getFullYear();
            } else if (year < 100) {
                year += new Date().getFullYear() - new Date().getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100);
            }
            if (doy > -1) {
                month = 1;
                day = doy;
                do {
                    dim = this._getDaysInMonth(year, month - 1);
                    if (day <= dim) {
                        break;
                    }
                    month++;
                    day -= dim;
                } while (true);
            }
            date = this._daylightSavingAdjust(new Date(year, month - 1, day));
            if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
                throw "Invalid date";
            }
            return date;
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: ((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 1e7,
        formatDate: function(format, date, settings) {
            if (!date) {
                return "";
            }
            var iFormat, dayNamesShort = (settings ? settings.dayNamesShort : null) || this._defaults.dayNamesShort, dayNames = (settings ? settings.dayNames : null) || this._defaults.dayNames, monthNamesShort = (settings ? settings.monthNamesShort : null) || this._defaults.monthNamesShort, monthNames = (settings ? settings.monthNames : null) || this._defaults.monthNames, lookAhead = function(match) {
                var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
                if (matches) {
                    iFormat++;
                }
                return matches;
            }, formatNumber = function(match, value, len) {
                var num = "" + value;
                if (lookAhead(match)) {
                    while (num.length < len) {
                        num = "0" + num;
                    }
                }
                return num;
            }, formatName = function(match, value, shortNames, longNames) {
                return lookAhead(match) ? longNames[value] : shortNames[value];
            }, output = "", literal = false;
            if (date) {
                for (iFormat = 0; iFormat < format.length; iFormat++) {
                    if (literal) {
                        if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
                            literal = false;
                        } else {
                            output += format.charAt(iFormat);
                        }
                    } else {
                        switch (format.charAt(iFormat)) {
                          case "d":
                            output += formatNumber("d", date.getDate(), 2);
                            break;

                          case "D":
                            output += formatName("D", date.getDay(), dayNamesShort, dayNames);
                            break;

                          case "o":
                            output += formatNumber("o", Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;

                          case "m":
                            output += formatNumber("m", date.getMonth() + 1, 2);
                            break;

                          case "M":
                            output += formatName("M", date.getMonth(), monthNamesShort, monthNames);
                            break;

                          case "y":
                            output += lookAhead("y") ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? "0" : "") + date.getFullYear() % 100;
                            break;

                          case "@":
                            output += date.getTime();
                            break;

                          case "!":
                            output += date.getTime() * 1e4 + this._ticksTo1970;
                            break;

                          case "'":
                            if (lookAhead("'")) {
                                output += "'";
                            } else {
                                literal = true;
                            }
                            break;

                          default:
                            output += format.charAt(iFormat);
                        }
                    }
                }
            }
            return output;
        },
        _possibleChars: function(format) {
            var iFormat, chars = "", literal = false, lookAhead = function(match) {
                var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;
                if (matches) {
                    iFormat++;
                }
                return matches;
            };
            for (iFormat = 0; iFormat < format.length; iFormat++) {
                if (literal) {
                    if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
                        literal = false;
                    } else {
                        chars += format.charAt(iFormat);
                    }
                } else {
                    switch (format.charAt(iFormat)) {
                      case "d":
                      case "m":
                      case "y":
                      case "@":
                        chars += "0123456789";
                        break;

                      case "D":
                      case "M":
                        return null;

                      case "'":
                        if (lookAhead("'")) {
                            chars += "'";
                        } else {
                            literal = true;
                        }
                        break;

                      default:
                        chars += format.charAt(iFormat);
                    }
                }
            }
            return chars;
        },
        _get: function(inst, name) {
            return inst.settings[name] !== undefined ? inst.settings[name] : this._defaults[name];
        },
        _setDateFromField: function(inst, noDefault) {
            if (inst.input.val() === inst.lastVal) {
                return;
            }
            var dateFormat = this._get(inst, "dateFormat"), dates = inst.lastVal = inst.input ? inst.input.val() : null, defaultDate = this._getDefaultDate(inst), date = defaultDate, settings = this._getFormatConfig(inst);
            try {
                date = this.parseDate(dateFormat, dates, settings) || defaultDate;
            } catch (event) {
                dates = noDefault ? "" : dates;
            }
            inst.selectedDay = date.getDate();
            inst.drawMonth = inst.selectedMonth = date.getMonth();
            inst.drawYear = inst.selectedYear = date.getFullYear();
            inst.currentDay = dates ? date.getDate() : 0;
            inst.currentMonth = dates ? date.getMonth() : 0;
            inst.currentYear = dates ? date.getFullYear() : 0;
            this._adjustInstDate(inst);
        },
        _getDefaultDate: function(inst) {
            return this._restrictMinMax(inst, this._determineDate(inst, this._get(inst, "defaultDate"), new Date()));
        },
        _determineDate: function(inst, date, defaultDate) {
            var offsetNumeric = function(offset) {
                var date = new Date();
                date.setDate(date.getDate() + offset);
                return date;
            }, offsetString = function(offset) {
                try {
                    return $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"), offset, $.datepicker._getFormatConfig(inst));
                } catch (e) {}
                var date = (offset.toLowerCase().match(/^c/) ? $.datepicker._getDate(inst) : null) || new Date(), year = date.getFullYear(), month = date.getMonth(), day = date.getDate(), pattern = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, matches = pattern.exec(offset);
                while (matches) {
                    switch (matches[2] || "d") {
                      case "d":
                      case "D":
                        day += parseInt(matches[1], 10);
                        break;

                      case "w":
                      case "W":
                        day += parseInt(matches[1], 10) * 7;
                        break;

                      case "m":
                      case "M":
                        month += parseInt(matches[1], 10);
                        day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
                        break;

                      case "y":
                      case "Y":
                        year += parseInt(matches[1], 10);
                        day = Math.min(day, $.datepicker._getDaysInMonth(year, month));
                        break;
                    }
                    matches = pattern.exec(offset);
                }
                return new Date(year, month, day);
            }, newDate = date == null || date === "" ? defaultDate : typeof date === "string" ? offsetString(date) : typeof date === "number" ? isNaN(date) ? defaultDate : offsetNumeric(date) : new Date(date.getTime());
            newDate = newDate && newDate.toString() === "Invalid Date" ? defaultDate : newDate;
            if (newDate) {
                newDate.setHours(0);
                newDate.setMinutes(0);
                newDate.setSeconds(0);
                newDate.setMilliseconds(0);
            }
            return this._daylightSavingAdjust(newDate);
        },
        _daylightSavingAdjust: function(date) {
            if (!date) {
                return null;
            }
            date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
            return date;
        },
        _setDate: function(inst, date, noChange) {
            var clear = !date, origMonth = inst.selectedMonth, origYear = inst.selectedYear, newDate = this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));
            inst.selectedDay = inst.currentDay = newDate.getDate();
            inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
            inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
            if ((origMonth !== inst.selectedMonth || origYear !== inst.selectedYear) && !noChange) {
                this._notifyChange(inst);
            }
            this._adjustInstDate(inst);
            if (inst.input) {
                inst.input.val(clear ? "" : this._formatDate(inst));
            }
        },
        _getDate: function(inst) {
            var startDate = !inst.currentYear || inst.input && inst.input.val() === "" ? null : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay));
            return startDate;
        },
        _attachHandlers: function(inst) {
            var stepMonths = this._get(inst, "stepMonths"), id = "#" + inst.id.replace(/\\\\/g, "\\");
            inst.dpDiv.find("[data-handler]").map(function() {
                var handler = {
                    prev: function() {
                        $.datepicker._adjustDate(id, -stepMonths, "M");
                    },
                    next: function() {
                        $.datepicker._adjustDate(id, +stepMonths, "M");
                    },
                    hide: function() {
                        $.datepicker._hideDatepicker();
                    },
                    today: function() {
                        $.datepicker._gotoToday(id);
                    },
                    selectDay: function() {
                        $.datepicker._selectDay(id, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
                        return false;
                    },
                    selectMonth: function() {
                        $.datepicker._selectMonthYear(id, this, "M");
                        return false;
                    },
                    selectYear: function() {
                        $.datepicker._selectMonthYear(id, this, "Y");
                        return false;
                    }
                };
                $(this).on(this.getAttribute("data-event"), handler[this.getAttribute("data-handler")]);
            });
        },
        _generateHTML: function(inst) {
            var maxDraw, prevText, prev, nextText, next, currentText, gotoDate, controls, buttonPanel, firstDay, showWeek, dayNames, dayNamesMin, monthNames, monthNamesShort, beforeShowDay, showOtherMonths, selectOtherMonths, defaultDate, html, dow, row, group, col, selectedDate, cornerClass, calender, thead, day, daysInMonth, leadDays, curRows, numRows, printDate, dRow, tbody, daySettings, otherMonth, unselectable, tempDate = new Date(), today = this._daylightSavingAdjust(new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate())), isRTL = this._get(inst, "isRTL"), showButtonPanel = this._get(inst, "showButtonPanel"), hideIfNoPrevNext = this._get(inst, "hideIfNoPrevNext"), navigationAsDateFormat = this._get(inst, "navigationAsDateFormat"), numMonths = this._getNumberOfMonths(inst), showCurrentAtPos = this._get(inst, "showCurrentAtPos"), stepMonths = this._get(inst, "stepMonths"), isMultiMonth = numMonths[0] !== 1 || numMonths[1] !== 1, currentDate = this._daylightSavingAdjust(!inst.currentDay ? new Date(9999, 9, 9) : new Date(inst.currentYear, inst.currentMonth, inst.currentDay)), minDate = this._getMinMaxDate(inst, "min"), maxDate = this._getMinMaxDate(inst, "max"), drawMonth = inst.drawMonth - showCurrentAtPos, drawYear = inst.drawYear;
            if (drawMonth < 0) {
                drawMonth += 12;
                drawYear--;
            }
            if (maxDate) {
                maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(), maxDate.getMonth() - numMonths[0] * numMonths[1] + 1, maxDate.getDate()));
                maxDraw = minDate && maxDraw < minDate ? minDate : maxDraw;
                while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
                    drawMonth--;
                    if (drawMonth < 0) {
                        drawMonth = 11;
                        drawYear--;
                    }
                }
            }
            inst.drawMonth = drawMonth;
            inst.drawYear = drawYear;
            prevText = this._get(inst, "prevText");
            prevText = !navigationAsDateFormat ? prevText : this.formatDate(prevText, this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)), this._getFormatConfig(inst));
            prev = this._canAdjustMonth(inst, -1, drawYear, drawMonth) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'" + " title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "e" : "w") + "'>" + prevText + "</span></a>" : hideIfNoPrevNext ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "e" : "w") + "'>" + prevText + "</span></a>";
            nextText = this._get(inst, "nextText");
            nextText = !navigationAsDateFormat ? nextText : this.formatDate(nextText, this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)), this._getFormatConfig(inst));
            next = this._canAdjustMonth(inst, +1, drawYear, drawMonth) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'" + " title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "w" : "e") + "'>" + nextText + "</span></a>" : hideIfNoPrevNext ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + (isRTL ? "w" : "e") + "'>" + nextText + "</span></a>";
            currentText = this._get(inst, "currentText");
            gotoDate = this._get(inst, "gotoCurrent") && inst.currentDay ? currentDate : today;
            currentText = !navigationAsDateFormat ? currentText : this.formatDate(currentText, gotoDate, this._getFormatConfig(inst));
            controls = !inst.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(inst, "closeText") + "</button>" : "";
            buttonPanel = showButtonPanel ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (isRTL ? controls : "") + (this._isInRange(inst, gotoDate) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'" + ">" + currentText + "</button>" : "") + (isRTL ? "" : controls) + "</div>" : "";
            firstDay = parseInt(this._get(inst, "firstDay"), 10);
            firstDay = isNaN(firstDay) ? 0 : firstDay;
            showWeek = this._get(inst, "showWeek");
            dayNames = this._get(inst, "dayNames");
            dayNamesMin = this._get(inst, "dayNamesMin");
            monthNames = this._get(inst, "monthNames");
            monthNamesShort = this._get(inst, "monthNamesShort");
            beforeShowDay = this._get(inst, "beforeShowDay");
            showOtherMonths = this._get(inst, "showOtherMonths");
            selectOtherMonths = this._get(inst, "selectOtherMonths");
            defaultDate = this._getDefaultDate(inst);
            html = "";
            for (row = 0; row < numMonths[0]; row++) {
                group = "";
                this.maxRows = 4;
                for (col = 0; col < numMonths[1]; col++) {
                    selectedDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
                    cornerClass = " ui-corner-all";
                    calender = "";
                    if (isMultiMonth) {
                        calender += "<div class='ui-datepicker-group";
                        if (numMonths[1] > 1) {
                            switch (col) {
                              case 0:
                                calender += " ui-datepicker-group-first";
                                cornerClass = " ui-corner-" + (isRTL ? "right" : "left");
                                break;

                              case numMonths[1] - 1:
                                calender += " ui-datepicker-group-last";
                                cornerClass = " ui-corner-" + (isRTL ? "left" : "right");
                                break;

                              default:
                                calender += " ui-datepicker-group-middle";
                                cornerClass = "";
                                break;
                            }
                        }
                        calender += "'>";
                    }
                    calender += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + cornerClass + "'>" + (/all|left/.test(cornerClass) && row === 0 ? isRTL ? next : prev : "") + (/all|right/.test(cornerClass) && row === 0 ? isRTL ? prev : next : "") + this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate, row > 0 || col > 0, monthNames, monthNamesShort) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>";
                    thead = showWeek ? "<th class='ui-datepicker-week-col'>" + this._get(inst, "weekHeader") + "</th>" : "";
                    for (dow = 0; dow < 7; dow++) {
                        day = (dow + firstDay) % 7;
                        thead += "<th scope='col'" + ((dow + firstDay + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + dayNames[day] + "'>" + dayNamesMin[day] + "</span></th>";
                    }
                    calender += thead + "</tr></thead><tbody>";
                    daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
                    if (drawYear === inst.selectedYear && drawMonth === inst.selectedMonth) {
                        inst.selectedDay = Math.min(inst.selectedDay, daysInMonth);
                    }
                    leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
                    curRows = Math.ceil((leadDays + daysInMonth) / 7);
                    numRows = isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows;
                    this.maxRows = numRows;
                    printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
                    for (dRow = 0; dRow < numRows; dRow++) {
                        calender += "<tr>";
                        tbody = !showWeek ? "" : "<td class='ui-datepicker-week-col'>" + this._get(inst, "calculateWeek")(printDate) + "</td>";
                        for (dow = 0; dow < 7; dow++) {
                            daySettings = beforeShowDay ? beforeShowDay.apply(inst.input ? inst.input[0] : null, [ printDate ]) : [ true, "" ];
                            otherMonth = printDate.getMonth() !== drawMonth;
                            unselectable = otherMonth && !selectOtherMonths || !daySettings[0] || minDate && printDate < minDate || maxDate && printDate > maxDate;
                            tbody += "<td class='" + ((dow + firstDay + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (otherMonth ? " ui-datepicker-other-month" : "") + (printDate.getTime() === selectedDate.getTime() && drawMonth === inst.selectedMonth && inst._keyEvent || defaultDate.getTime() === printDate.getTime() && defaultDate.getTime() === selectedDate.getTime() ? " " + this._dayOverClass : "") + (unselectable ? " " + this._unselectableClass + " ui-state-disabled" : "") + (otherMonth && !showOtherMonths ? "" : " " + daySettings[1] + (printDate.getTime() === currentDate.getTime() ? " " + this._currentClass : "") + (printDate.getTime() === today.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!otherMonth || showOtherMonths) && daySettings[2] ? " title='" + daySettings[2].replace(/'/g, "&#39;") + "'" : "") + (unselectable ? "" : " data-handler='selectDay' data-event='click' data-month='" + printDate.getMonth() + "' data-year='" + printDate.getFullYear() + "'") + ">" + (otherMonth && !showOtherMonths ? "&#xa0;" : unselectable ? "<span class='ui-state-default'>" + printDate.getDate() + "</span>" : "<a class='ui-state-default" + (printDate.getTime() === today.getTime() ? " ui-state-highlight" : "") + (printDate.getTime() === currentDate.getTime() ? " ui-state-active" : "") + (otherMonth ? " ui-priority-secondary" : "") + "' href='#'>" + printDate.getDate() + "</a>") + "</td>";
                            printDate.setDate(printDate.getDate() + 1);
                            printDate = this._daylightSavingAdjust(printDate);
                        }
                        calender += tbody + "</tr>";
                    }
                    drawMonth++;
                    if (drawMonth > 11) {
                        drawMonth = 0;
                        drawYear++;
                    }
                    calender += "</tbody></table>" + (isMultiMonth ? "</div>" + (numMonths[0] > 0 && col === numMonths[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "");
                    group += calender;
                }
                html += group;
            }
            html += buttonPanel;
            inst._keyEvent = false;
            return html;
        },
        _generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate, secondary, monthNames, monthNamesShort) {
            var inMinYear, inMaxYear, month, years, thisYear, determineYear, year, endYear, changeMonth = this._get(inst, "changeMonth"), changeYear = this._get(inst, "changeYear"), showMonthAfterYear = this._get(inst, "showMonthAfterYear"), html = "<div class='ui-datepicker-title'>", monthHtml = "";
            if (secondary || !changeMonth) {
                monthHtml += "<span class='ui-datepicker-month'>" + monthNames[drawMonth] + "</span>";
            } else {
                inMinYear = minDate && minDate.getFullYear() === drawYear;
                inMaxYear = maxDate && maxDate.getFullYear() === drawYear;
                monthHtml += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
                for (month = 0; month < 12; month++) {
                    if ((!inMinYear || month >= minDate.getMonth()) && (!inMaxYear || month <= maxDate.getMonth())) {
                        monthHtml += "<option value='" + month + "'" + (month === drawMonth ? " selected='selected'" : "") + ">" + monthNamesShort[month] + "</option>";
                    }
                }
                monthHtml += "</select>";
            }
            if (!showMonthAfterYear) {
                html += monthHtml + (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "");
            }
            if (!inst.yearshtml) {
                inst.yearshtml = "";
                if (secondary || !changeYear) {
                    html += "<span class='ui-datepicker-year'>" + drawYear + "</span>";
                } else {
                    years = this._get(inst, "yearRange").split(":");
                    thisYear = new Date().getFullYear();
                    determineYear = function(value) {
                        var year = value.match(/c[+\-].*/) ? drawYear + parseInt(value.substring(1), 10) : value.match(/[+\-].*/) ? thisYear + parseInt(value, 10) : parseInt(value, 10);
                        return isNaN(year) ? thisYear : year;
                    };
                    year = determineYear(years[0]);
                    endYear = Math.max(year, determineYear(years[1] || ""));
                    year = minDate ? Math.max(year, minDate.getFullYear()) : year;
                    endYear = maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear;
                    inst.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
                    for (;year <= endYear; year++) {
                        inst.yearshtml += "<option value='" + year + "'" + (year === drawYear ? " selected='selected'" : "") + ">" + year + "</option>";
                    }
                    inst.yearshtml += "</select>";
                    html += inst.yearshtml;
                    inst.yearshtml = null;
                }
            }
            html += this._get(inst, "yearSuffix");
            if (showMonthAfterYear) {
                html += (secondary || !(changeMonth && changeYear) ? "&#xa0;" : "") + monthHtml;
            }
            html += "</div>";
            return html;
        },
        _adjustInstDate: function(inst, offset, period) {
            var year = inst.selectedYear + (period === "Y" ? offset : 0), month = inst.selectedMonth + (period === "M" ? offset : 0), day = Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) + (period === "D" ? offset : 0), date = this._restrictMinMax(inst, this._daylightSavingAdjust(new Date(year, month, day)));
            inst.selectedDay = date.getDate();
            inst.drawMonth = inst.selectedMonth = date.getMonth();
            inst.drawYear = inst.selectedYear = date.getFullYear();
            if (period === "M" || period === "Y") {
                this._notifyChange(inst);
            }
        },
        _restrictMinMax: function(inst, date) {
            var minDate = this._getMinMaxDate(inst, "min"), maxDate = this._getMinMaxDate(inst, "max"), newDate = minDate && date < minDate ? minDate : date;
            return maxDate && newDate > maxDate ? maxDate : newDate;
        },
        _notifyChange: function(inst) {
            var onChange = this._get(inst, "onChangeMonthYear");
            if (onChange) {
                onChange.apply(inst.input ? inst.input[0] : null, [ inst.selectedYear, inst.selectedMonth + 1, inst ]);
            }
        },
        _getNumberOfMonths: function(inst) {
            var numMonths = this._get(inst, "numberOfMonths");
            return numMonths == null ? [ 1, 1 ] : typeof numMonths === "number" ? [ 1, numMonths ] : numMonths;
        },
        _getMinMaxDate: function(inst, minMax) {
            return this._determineDate(inst, this._get(inst, minMax + "Date"), null);
        },
        _getDaysInMonth: function(year, month) {
            return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
        },
        _getFirstDayOfMonth: function(year, month) {
            return new Date(year, month, 1).getDay();
        },
        _canAdjustMonth: function(inst, offset, curYear, curMonth) {
            var numMonths = this._getNumberOfMonths(inst), date = this._daylightSavingAdjust(new Date(curYear, curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));
            if (offset < 0) {
                date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
            }
            return this._isInRange(inst, date);
        },
        _isInRange: function(inst, date) {
            var yearSplit, currentYear, minDate = this._getMinMaxDate(inst, "min"), maxDate = this._getMinMaxDate(inst, "max"), minYear = null, maxYear = null, years = this._get(inst, "yearRange");
            if (years) {
                yearSplit = years.split(":");
                currentYear = new Date().getFullYear();
                minYear = parseInt(yearSplit[0], 10);
                maxYear = parseInt(yearSplit[1], 10);
                if (yearSplit[0].match(/[+\-].*/)) {
                    minYear += currentYear;
                }
                if (yearSplit[1].match(/[+\-].*/)) {
                    maxYear += currentYear;
                }
            }
            return (!minDate || date.getTime() >= minDate.getTime()) && (!maxDate || date.getTime() <= maxDate.getTime()) && (!minYear || date.getFullYear() >= minYear) && (!maxYear || date.getFullYear() <= maxYear);
        },
        _getFormatConfig: function(inst) {
            var shortYearCutoff = this._get(inst, "shortYearCutoff");
            shortYearCutoff = typeof shortYearCutoff !== "string" ? shortYearCutoff : new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10);
            return {
                shortYearCutoff: shortYearCutoff,
                dayNamesShort: this._get(inst, "dayNamesShort"),
                dayNames: this._get(inst, "dayNames"),
                monthNamesShort: this._get(inst, "monthNamesShort"),
                monthNames: this._get(inst, "monthNames")
            };
        },
        _formatDate: function(inst, day, month, year) {
            if (!day) {
                inst.currentDay = inst.selectedDay;
                inst.currentMonth = inst.selectedMonth;
                inst.currentYear = inst.selectedYear;
            }
            var date = day ? typeof day === "object" ? day : this._daylightSavingAdjust(new Date(year, month, day)) : this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay));
            return this.formatDate(this._get(inst, "dateFormat"), date, this._getFormatConfig(inst));
        }
    });
    function datepicker_bindHover(dpDiv) {
        var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return dpDiv.on("mouseout", selector, function() {
            $(this).removeClass("ui-state-hover");
            if (this.className.indexOf("ui-datepicker-prev") !== -1) {
                $(this).removeClass("ui-datepicker-prev-hover");
            }
            if (this.className.indexOf("ui-datepicker-next") !== -1) {
                $(this).removeClass("ui-datepicker-next-hover");
            }
        }).on("mouseover", selector, datepicker_handleMouseover);
    }
    function datepicker_handleMouseover() {
        if (!$.datepicker._isDisabledDatepicker(datepicker_instActive.inline ? datepicker_instActive.dpDiv.parent()[0] : datepicker_instActive.input[0])) {
            $(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
            $(this).addClass("ui-state-hover");
            if (this.className.indexOf("ui-datepicker-prev") !== -1) {
                $(this).addClass("ui-datepicker-prev-hover");
            }
            if (this.className.indexOf("ui-datepicker-next") !== -1) {
                $(this).addClass("ui-datepicker-next-hover");
            }
        }
    }
    function datepicker_extendRemove(target, props) {
        $.extend(target, props);
        for (var name in props) {
            if (props[name] == null) {
                target[name] = props[name];
            }
        }
        return target;
    }
    $.fn.datepicker = function(options) {
        if (!this.length) {
            return this;
        }
        if (!$.datepicker.initialized) {
            $(document).on("mousedown", $.datepicker._checkExternalClick);
            $.datepicker.initialized = true;
        }
        if ($("#" + $.datepicker._mainDivId).length === 0) {
            $("body").append($.datepicker.dpDiv);
        }
        var otherArgs = Array.prototype.slice.call(arguments, 1);
        if (typeof options === "string" && (options === "isDisabled" || options === "getDate" || options === "widget")) {
            return $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [ this[0] ].concat(otherArgs));
        }
        if (options === "option" && arguments.length === 2 && typeof arguments[1] === "string") {
            return $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [ this[0] ].concat(otherArgs));
        }
        return this.each(function() {
            typeof options === "string" ? $.datepicker["_" + options + "Datepicker"].apply($.datepicker, [ this ].concat(otherArgs)) : $.datepicker._attachDatepicker(this, options);
        });
    };
    $.datepicker = new Datepicker();
    $.datepicker.initialized = false;
    $.datepicker.uuid = new Date().getTime();
    $.datepicker.version = "1.12.1";
    var widgetsDatepicker = $.datepicker;
    var ie = $.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var mouseHandled = false;
    $(document).on("mouseup", function() {
        mouseHandled = false;
    });
    var widgetsMouse = $.widget("ui.mouse", {
        version: "1.12.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var that = this;
            this.element.on("mousedown." + this.widgetName, function(event) {
                return that._mouseDown(event);
            }).on("click." + this.widgetName, function(event) {
                if (true === $.data(event.target, that.widgetName + ".preventClickEvent")) {
                    $.removeData(event.target, that.widgetName + ".preventClickEvent");
                    event.stopImmediatePropagation();
                    return false;
                }
            });
            this.started = false;
        },
        _mouseDestroy: function() {
            this.element.off("." + this.widgetName);
            if (this._mouseMoveDelegate) {
                this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
            }
        },
        _mouseDown: function(event) {
            if (mouseHandled) {
                return;
            }
            this._mouseMoved = false;
            this._mouseStarted && this._mouseUp(event);
            this._mouseDownEvent = event;
            var that = this, btnIsLeft = event.which === 1, elIsCancel = typeof this.options.cancel === "string" && event.target.nodeName ? $(event.target).closest(this.options.cancel).length : false;
            if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
                return true;
            }
            this.mouseDelayMet = !this.options.delay;
            if (!this.mouseDelayMet) {
                this._mouseDelayTimer = setTimeout(function() {
                    that.mouseDelayMet = true;
                }, this.options.delay);
            }
            if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
                this._mouseStarted = this._mouseStart(event) !== false;
                if (!this._mouseStarted) {
                    event.preventDefault();
                    return true;
                }
            }
            if (true === $.data(event.target, this.widgetName + ".preventClickEvent")) {
                $.removeData(event.target, this.widgetName + ".preventClickEvent");
            }
            this._mouseMoveDelegate = function(event) {
                return that._mouseMove(event);
            };
            this._mouseUpDelegate = function(event) {
                return that._mouseUp(event);
            };
            this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate);
            event.preventDefault();
            mouseHandled = true;
            return true;
        },
        _mouseMove: function(event) {
            if (this._mouseMoved) {
                if ($.ui.ie && (!document.documentMode || document.documentMode < 9) && !event.button) {
                    return this._mouseUp(event);
                } else if (!event.which) {
                    if (event.originalEvent.altKey || event.originalEvent.ctrlKey || event.originalEvent.metaKey || event.originalEvent.shiftKey) {
                        this.ignoreMissingWhich = true;
                    } else if (!this.ignoreMissingWhich) {
                        return this._mouseUp(event);
                    }
                }
            }
            if (event.which || event.button) {
                this._mouseMoved = true;
            }
            if (this._mouseStarted) {
                this._mouseDrag(event);
                return event.preventDefault();
            }
            if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
                this._mouseStarted = this._mouseStart(this._mouseDownEvent, event) !== false;
                this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event);
            }
            return !this._mouseStarted;
        },
        _mouseUp: function(event) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
            if (this._mouseStarted) {
                this._mouseStarted = false;
                if (event.target === this._mouseDownEvent.target) {
                    $.data(event.target, this.widgetName + ".preventClickEvent", true);
                }
                this._mouseStop(event);
            }
            if (this._mouseDelayTimer) {
                clearTimeout(this._mouseDelayTimer);
                delete this._mouseDelayTimer;
            }
            this.ignoreMissingWhich = false;
            mouseHandled = false;
            event.preventDefault();
        },
        _mouseDistanceMet: function(event) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - event.pageX), Math.abs(this._mouseDownEvent.pageY - event.pageY)) >= this.options.distance;
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet;
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return true;
        }
    });
    var plugin = $.ui.plugin = {
        add: function(module, option, set) {
            var i, proto = $.ui[module].prototype;
            for (i in set) {
                proto.plugins[i] = proto.plugins[i] || [];
                proto.plugins[i].push([ option, set[i] ]);
            }
        },
        call: function(instance, name, args, allowDisconnected) {
            var i, set = instance.plugins[name];
            if (!set) {
                return;
            }
            if (!allowDisconnected && (!instance.element[0].parentNode || instance.element[0].parentNode.nodeType === 11)) {
                return;
            }
            for (i = 0; i < set.length; i++) {
                if (instance.options[set[i][0]]) {
                    set[i][1].apply(instance.element, args);
                }
            }
        }
    };
    var safeBlur = $.ui.safeBlur = function(element) {
        if (element && element.nodeName.toLowerCase() !== "body") {
            $(element).trigger("blur");
        }
    };
    $.widget("ui.draggable", $.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: true,
            appendTo: "parent",
            axis: false,
            connectToSortable: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            grid: false,
            handle: false,
            helper: "original",
            iframeFix: false,
            opacity: false,
            refreshPositions: false,
            revert: false,
            revertDuration: 500,
            scope: "default",
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: false,
            snapMode: "both",
            snapTolerance: 20,
            stack: false,
            zIndex: false,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            if (this.options.helper === "original") {
                this._setPositionRelative();
            }
            if (this.options.addClasses) {
                this._addClass("ui-draggable");
            }
            this._setHandleClassName();
            this._mouseInit();
        },
        _setOption: function(key, value) {
            this._super(key, value);
            if (key === "handle") {
                this._removeHandleClassName();
                this._setHandleClassName();
            }
        },
        _destroy: function() {
            if ((this.helper || this.element).is(".ui-draggable-dragging")) {
                this.destroyOnClear = true;
                return;
            }
            this._removeHandleClassName();
            this._mouseDestroy();
        },
        _mouseCapture: function(event) {
            var o = this.options;
            if (this.helper || o.disabled || $(event.target).closest(".ui-resizable-handle").length > 0) {
                return false;
            }
            this.handle = this._getHandle(event);
            if (!this.handle) {
                return false;
            }
            this._blurActiveElement(event);
            this._blockFrames(o.iframeFix === true ? "iframe" : o.iframeFix);
            return true;
        },
        _blockFrames: function(selector) {
            this.iframeBlocks = this.document.find(selector).map(function() {
                var iframe = $(this);
                return $("<div>").css("position", "absolute").appendTo(iframe.parent()).outerWidth(iframe.outerWidth()).outerHeight(iframe.outerHeight()).offset(iframe.offset())[0];
            });
        },
        _unblockFrames: function() {
            if (this.iframeBlocks) {
                this.iframeBlocks.remove();
                delete this.iframeBlocks;
            }
        },
        _blurActiveElement: function(event) {
            var activeElement = $.ui.safeActiveElement(this.document[0]), target = $(event.target);
            if (target.closest(activeElement).length) {
                return;
            }
            $.ui.safeBlur(activeElement);
        },
        _mouseStart: function(event) {
            var o = this.options;
            this.helper = this._createHelper(event);
            this._addClass(this.helper, "ui-draggable-dragging");
            this._cacheHelperProportions();
            if ($.ui.ddmanager) {
                $.ui.ddmanager.current = this;
            }
            this._cacheMargins();
            this.cssPosition = this.helper.css("position");
            this.scrollParent = this.helper.scrollParent(true);
            this.offsetParent = this.helper.offsetParent();
            this.hasFixedAncestor = this.helper.parents().filter(function() {
                return $(this).css("position") === "fixed";
            }).length > 0;
            this.positionAbs = this.element.offset();
            this._refreshOffsets(event);
            this.originalPosition = this.position = this._generatePosition(event, false);
            this.originalPageX = event.pageX;
            this.originalPageY = event.pageY;
            o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt);
            this._setContainment();
            if (this._trigger("start", event) === false) {
                this._clear();
                return false;
            }
            this._cacheHelperProportions();
            if ($.ui.ddmanager && !o.dropBehaviour) {
                $.ui.ddmanager.prepareOffsets(this, event);
            }
            this._mouseDrag(event, true);
            if ($.ui.ddmanager) {
                $.ui.ddmanager.dragStart(this, event);
            }
            return true;
        },
        _refreshOffsets: function(event) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: false,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            };
            this.offset.click = {
                left: event.pageX - this.offset.left,
                top: event.pageY - this.offset.top
            };
        },
        _mouseDrag: function(event, noPropagation) {
            if (this.hasFixedAncestor) {
                this.offset.parent = this._getParentOffset();
            }
            this.position = this._generatePosition(event, true);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!noPropagation) {
                var ui = this._uiHash();
                if (this._trigger("drag", event, ui) === false) {
                    this._mouseUp(new $.Event("mouseup", event));
                    return false;
                }
                this.position = ui.position;
            }
            this.helper[0].style.left = this.position.left + "px";
            this.helper[0].style.top = this.position.top + "px";
            if ($.ui.ddmanager) {
                $.ui.ddmanager.drag(this, event);
            }
            return false;
        },
        _mouseStop: function(event) {
            var that = this, dropped = false;
            if ($.ui.ddmanager && !this.options.dropBehaviour) {
                dropped = $.ui.ddmanager.drop(this, event);
            }
            if (this.dropped) {
                dropped = this.dropped;
                this.dropped = false;
            }
            if (this.options.revert === "invalid" && !dropped || this.options.revert === "valid" && dropped || this.options.revert === true || $.isFunction(this.options.revert) && this.options.revert.call(this.element, dropped)) {
                $(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    if (that._trigger("stop", event) !== false) {
                        that._clear();
                    }
                });
            } else {
                if (this._trigger("stop", event) !== false) {
                    this._clear();
                }
            }
            return false;
        },
        _mouseUp: function(event) {
            this._unblockFrames();
            if ($.ui.ddmanager) {
                $.ui.ddmanager.dragStop(this, event);
            }
            if (this.handleElement.is(event.target)) {
                this.element.trigger("focus");
            }
            return $.ui.mouse.prototype._mouseUp.call(this, event);
        },
        cancel: function() {
            if (this.helper.is(".ui-draggable-dragging")) {
                this._mouseUp(new $.Event("mouseup", {
                    target: this.element[0]
                }));
            } else {
                this._clear();
            }
            return this;
        },
        _getHandle: function(event) {
            return this.options.handle ? !!$(event.target).closest(this.element.find(this.options.handle)).length : true;
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element;
            this._addClass(this.handleElement, "ui-draggable-handle");
        },
        _removeHandleClassName: function() {
            this._removeClass(this.handleElement, "ui-draggable-handle");
        },
        _createHelper: function(event) {
            var o = this.options, helperIsFunction = $.isFunction(o.helper), helper = helperIsFunction ? $(o.helper.apply(this.element[0], [ event ])) : o.helper === "clone" ? this.element.clone().removeAttr("id") : this.element;
            if (!helper.parents("body").length) {
                helper.appendTo(o.appendTo === "parent" ? this.element[0].parentNode : o.appendTo);
            }
            if (helperIsFunction && helper[0] === this.element[0]) {
                this._setPositionRelative();
            }
            if (helper[0] !== this.element[0] && !/(fixed|absolute)/.test(helper.css("position"))) {
                helper.css("position", "absolute");
            }
            return helper;
        },
        _setPositionRelative: function() {
            if (!/^(?:r|a|f)/.test(this.element.css("position"))) {
                this.element[0].style.position = "relative";
            }
        },
        _adjustOffsetFromHelper: function(obj) {
            if (typeof obj === "string") {
                obj = obj.split(" ");
            }
            if ($.isArray(obj)) {
                obj = {
                    left: +obj[0],
                    top: +obj[1] || 0
                };
            }
            if ("left" in obj) {
                this.offset.click.left = obj.left + this.margins.left;
            }
            if ("right" in obj) {
                this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
            }
            if ("top" in obj) {
                this.offset.click.top = obj.top + this.margins.top;
            }
            if ("bottom" in obj) {
                this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
            }
        },
        _isRootNode: function(element) {
            return /(html|body)/i.test(element.tagName) || element === this.document[0];
        },
        _getParentOffset: function() {
            var po = this.offsetParent.offset(), document = this.document[0];
            if (this.cssPosition === "absolute" && this.scrollParent[0] !== document && $.contains(this.scrollParent[0], this.offsetParent[0])) {
                po.left += this.scrollParent.scrollLeft();
                po.top += this.scrollParent.scrollTop();
            }
            if (this._isRootNode(this.offsetParent[0])) {
                po = {
                    top: 0,
                    left: 0
                };
            }
            return {
                top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if (this.cssPosition !== "relative") {
                return {
                    top: 0,
                    left: 0
                };
            }
            var p = this.element.position(), scrollIsRootNode = this._isRootNode(this.scrollParent[0]);
            return {
                top: p.top - (parseInt(this.helper.css("top"), 10) || 0) + (!scrollIsRootNode ? this.scrollParent.scrollTop() : 0),
                left: p.left - (parseInt(this.helper.css("left"), 10) || 0) + (!scrollIsRootNode ? this.scrollParent.scrollLeft() : 0)
            };
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var isUserScrollable, c, ce, o = this.options, document = this.document[0];
            this.relativeContainer = null;
            if (!o.containment) {
                this.containment = null;
                return;
            }
            if (o.containment === "window") {
                this.containment = [ $(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, $(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, $(window).scrollLeft() + $(window).width() - this.helperProportions.width - this.margins.left, $(window).scrollTop() + ($(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ];
                return;
            }
            if (o.containment === "document") {
                this.containment = [ 0, 0, $(document).width() - this.helperProportions.width - this.margins.left, ($(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ];
                return;
            }
            if (o.containment.constructor === Array) {
                this.containment = o.containment;
                return;
            }
            if (o.containment === "parent") {
                o.containment = this.helper[0].parentNode;
            }
            c = $(o.containment);
            ce = c[0];
            if (!ce) {
                return;
            }
            isUserScrollable = /(scroll|auto)/.test(c.css("overflow"));
            this.containment = [ (parseInt(c.css("borderLeftWidth"), 10) || 0) + (parseInt(c.css("paddingLeft"), 10) || 0), (parseInt(c.css("borderTopWidth"), 10) || 0) + (parseInt(c.css("paddingTop"), 10) || 0), (isUserScrollable ? Math.max(ce.scrollWidth, ce.offsetWidth) : ce.offsetWidth) - (parseInt(c.css("borderRightWidth"), 10) || 0) - (parseInt(c.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (isUserScrollable ? Math.max(ce.scrollHeight, ce.offsetHeight) : ce.offsetHeight) - (parseInt(c.css("borderBottomWidth"), 10) || 0) - (parseInt(c.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom ];
            this.relativeContainer = c;
        },
        _convertPositionTo: function(d, pos) {
            if (!pos) {
                pos = this.position;
            }
            var mod = d === "absolute" ? 1 : -1, scrollIsRootNode = this._isRootNode(this.scrollParent[0]);
            return {
                top: pos.top + this.offset.relative.top * mod + this.offset.parent.top * mod - (this.cssPosition === "fixed" ? -this.offset.scroll.top : scrollIsRootNode ? 0 : this.offset.scroll.top) * mod,
                left: pos.left + this.offset.relative.left * mod + this.offset.parent.left * mod - (this.cssPosition === "fixed" ? -this.offset.scroll.left : scrollIsRootNode ? 0 : this.offset.scroll.left) * mod
            };
        },
        _generatePosition: function(event, constrainPosition) {
            var containment, co, top, left, o = this.options, scrollIsRootNode = this._isRootNode(this.scrollParent[0]), pageX = event.pageX, pageY = event.pageY;
            if (!scrollIsRootNode || !this.offset.scroll) {
                this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                };
            }
            if (constrainPosition) {
                if (this.containment) {
                    if (this.relativeContainer) {
                        co = this.relativeContainer.offset();
                        containment = [ this.containment[0] + co.left, this.containment[1] + co.top, this.containment[2] + co.left, this.containment[3] + co.top ];
                    } else {
                        containment = this.containment;
                    }
                    if (event.pageX - this.offset.click.left < containment[0]) {
                        pageX = containment[0] + this.offset.click.left;
                    }
                    if (event.pageY - this.offset.click.top < containment[1]) {
                        pageY = containment[1] + this.offset.click.top;
                    }
                    if (event.pageX - this.offset.click.left > containment[2]) {
                        pageX = containment[2] + this.offset.click.left;
                    }
                    if (event.pageY - this.offset.click.top > containment[3]) {
                        pageY = containment[3] + this.offset.click.top;
                    }
                }
                if (o.grid) {
                    top = o.grid[1] ? this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY;
                    pageY = containment ? top - this.offset.click.top >= containment[1] || top - this.offset.click.top > containment[3] ? top : top - this.offset.click.top >= containment[1] ? top - o.grid[1] : top + o.grid[1] : top;
                    left = o.grid[0] ? this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX;
                    pageX = containment ? left - this.offset.click.left >= containment[0] || left - this.offset.click.left > containment[2] ? left : left - this.offset.click.left >= containment[0] ? left - o.grid[0] : left + o.grid[0] : left;
                }
                if (o.axis === "y") {
                    pageX = this.originalPageX;
                }
                if (o.axis === "x") {
                    pageY = this.originalPageY;
                }
            }
            return {
                top: pageY - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.offset.scroll.top : scrollIsRootNode ? 0 : this.offset.scroll.top),
                left: pageX - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.offset.scroll.left : scrollIsRootNode ? 0 : this.offset.scroll.left)
            };
        },
        _clear: function() {
            this._removeClass(this.helper, "ui-draggable-dragging");
            if (this.helper[0] !== this.element[0] && !this.cancelHelperRemoval) {
                this.helper.remove();
            }
            this.helper = null;
            this.cancelHelperRemoval = false;
            if (this.destroyOnClear) {
                this.destroy();
            }
        },
        _trigger: function(type, event, ui) {
            ui = ui || this._uiHash();
            $.ui.plugin.call(this, type, [ event, ui, this ], true);
            if (/^(drag|start|stop)/.test(type)) {
                this.positionAbs = this._convertPositionTo("absolute");
                ui.offset = this.positionAbs;
            }
            return $.Widget.prototype._trigger.call(this, type, event, ui);
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            };
        }
    });
    $.ui.plugin.add("draggable", "connectToSortable", {
        start: function(event, ui, draggable) {
            var uiSortable = $.extend({}, ui, {
                item: draggable.element
            });
            draggable.sortables = [];
            $(draggable.options.connectToSortable).each(function() {
                var sortable = $(this).sortable("instance");
                if (sortable && !sortable.options.disabled) {
                    draggable.sortables.push(sortable);
                    sortable.refreshPositions();
                    sortable._trigger("activate", event, uiSortable);
                }
            });
        },
        stop: function(event, ui, draggable) {
            var uiSortable = $.extend({}, ui, {
                item: draggable.element
            });
            draggable.cancelHelperRemoval = false;
            $.each(draggable.sortables, function() {
                var sortable = this;
                if (sortable.isOver) {
                    sortable.isOver = 0;
                    draggable.cancelHelperRemoval = true;
                    sortable.cancelHelperRemoval = false;
                    sortable._storedCSS = {
                        position: sortable.placeholder.css("position"),
                        top: sortable.placeholder.css("top"),
                        left: sortable.placeholder.css("left")
                    };
                    sortable._mouseStop(event);
                    sortable.options.helper = sortable.options._helper;
                } else {
                    sortable.cancelHelperRemoval = true;
                    sortable._trigger("deactivate", event, uiSortable);
                }
            });
        },
        drag: function(event, ui, draggable) {
            $.each(draggable.sortables, function() {
                var innermostIntersecting = false, sortable = this;
                sortable.positionAbs = draggable.positionAbs;
                sortable.helperProportions = draggable.helperProportions;
                sortable.offset.click = draggable.offset.click;
                if (sortable._intersectsWith(sortable.containerCache)) {
                    innermostIntersecting = true;
                    $.each(draggable.sortables, function() {
                        this.positionAbs = draggable.positionAbs;
                        this.helperProportions = draggable.helperProportions;
                        this.offset.click = draggable.offset.click;
                        if (this !== sortable && this._intersectsWith(this.containerCache) && $.contains(sortable.element[0], this.element[0])) {
                            innermostIntersecting = false;
                        }
                        return innermostIntersecting;
                    });
                }
                if (innermostIntersecting) {
                    if (!sortable.isOver) {
                        sortable.isOver = 1;
                        draggable._parent = ui.helper.parent();
                        sortable.currentItem = ui.helper.appendTo(sortable.element).data("ui-sortable-item", true);
                        sortable.options._helper = sortable.options.helper;
                        sortable.options.helper = function() {
                            return ui.helper[0];
                        };
                        event.target = sortable.currentItem[0];
                        sortable._mouseCapture(event, true);
                        sortable._mouseStart(event, true, true);
                        sortable.offset.click.top = draggable.offset.click.top;
                        sortable.offset.click.left = draggable.offset.click.left;
                        sortable.offset.parent.left -= draggable.offset.parent.left - sortable.offset.parent.left;
                        sortable.offset.parent.top -= draggable.offset.parent.top - sortable.offset.parent.top;
                        draggable._trigger("toSortable", event);
                        draggable.dropped = sortable.element;
                        $.each(draggable.sortables, function() {
                            this.refreshPositions();
                        });
                        draggable.currentItem = draggable.element;
                        sortable.fromOutside = draggable;
                    }
                    if (sortable.currentItem) {
                        sortable._mouseDrag(event);
                        ui.position = sortable.position;
                    }
                } else {
                    if (sortable.isOver) {
                        sortable.isOver = 0;
                        sortable.cancelHelperRemoval = true;
                        sortable.options._revert = sortable.options.revert;
                        sortable.options.revert = false;
                        sortable._trigger("out", event, sortable._uiHash(sortable));
                        sortable._mouseStop(event, true);
                        sortable.options.revert = sortable.options._revert;
                        sortable.options.helper = sortable.options._helper;
                        if (sortable.placeholder) {
                            sortable.placeholder.remove();
                        }
                        ui.helper.appendTo(draggable._parent);
                        draggable._refreshOffsets(event);
                        ui.position = draggable._generatePosition(event, true);
                        draggable._trigger("fromSortable", event);
                        draggable.dropped = false;
                        $.each(draggable.sortables, function() {
                            this.refreshPositions();
                        });
                    }
                }
            });
        }
    });
    $.ui.plugin.add("draggable", "cursor", {
        start: function(event, ui, instance) {
            var t = $("body"), o = instance.options;
            if (t.css("cursor")) {
                o._cursor = t.css("cursor");
            }
            t.css("cursor", o.cursor);
        },
        stop: function(event, ui, instance) {
            var o = instance.options;
            if (o._cursor) {
                $("body").css("cursor", o._cursor);
            }
        }
    });
    $.ui.plugin.add("draggable", "opacity", {
        start: function(event, ui, instance) {
            var t = $(ui.helper), o = instance.options;
            if (t.css("opacity")) {
                o._opacity = t.css("opacity");
            }
            t.css("opacity", o.opacity);
        },
        stop: function(event, ui, instance) {
            var o = instance.options;
            if (o._opacity) {
                $(ui.helper).css("opacity", o._opacity);
            }
        }
    });
    $.ui.plugin.add("draggable", "scroll", {
        start: function(event, ui, i) {
            if (!i.scrollParentNotHidden) {
                i.scrollParentNotHidden = i.helper.scrollParent(false);
            }
            if (i.scrollParentNotHidden[0] !== i.document[0] && i.scrollParentNotHidden[0].tagName !== "HTML") {
                i.overflowOffset = i.scrollParentNotHidden.offset();
            }
        },
        drag: function(event, ui, i) {
            var o = i.options, scrolled = false, scrollParent = i.scrollParentNotHidden[0], document = i.document[0];
            if (scrollParent !== document && scrollParent.tagName !== "HTML") {
                if (!o.axis || o.axis !== "x") {
                    if (i.overflowOffset.top + scrollParent.offsetHeight - event.pageY < o.scrollSensitivity) {
                        scrollParent.scrollTop = scrolled = scrollParent.scrollTop + o.scrollSpeed;
                    } else if (event.pageY - i.overflowOffset.top < o.scrollSensitivity) {
                        scrollParent.scrollTop = scrolled = scrollParent.scrollTop - o.scrollSpeed;
                    }
                }
                if (!o.axis || o.axis !== "y") {
                    if (i.overflowOffset.left + scrollParent.offsetWidth - event.pageX < o.scrollSensitivity) {
                        scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft + o.scrollSpeed;
                    } else if (event.pageX - i.overflowOffset.left < o.scrollSensitivity) {
                        scrollParent.scrollLeft = scrolled = scrollParent.scrollLeft - o.scrollSpeed;
                    }
                }
            } else {
                if (!o.axis || o.axis !== "x") {
                    if (event.pageY - $(document).scrollTop() < o.scrollSensitivity) {
                        scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed);
                    } else if ($(window).height() - (event.pageY - $(document).scrollTop()) < o.scrollSensitivity) {
                        scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed);
                    }
                }
                if (!o.axis || o.axis !== "y") {
                    if (event.pageX - $(document).scrollLeft() < o.scrollSensitivity) {
                        scrolled = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed);
                    } else if ($(window).width() - (event.pageX - $(document).scrollLeft()) < o.scrollSensitivity) {
                        scrolled = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed);
                    }
                }
            }
            if (scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
                $.ui.ddmanager.prepareOffsets(i, event);
            }
        }
    });
    $.ui.plugin.add("draggable", "snap", {
        start: function(event, ui, i) {
            var o = i.options;
            i.snapElements = [];
            $(o.snap.constructor !== String ? o.snap.items || ":data(ui-draggable)" : o.snap).each(function() {
                var $t = $(this), $o = $t.offset();
                if (this !== i.element[0]) {
                    i.snapElements.push({
                        item: this,
                        width: $t.outerWidth(),
                        height: $t.outerHeight(),
                        top: $o.top,
                        left: $o.left
                    });
                }
            });
        },
        drag: function(event, ui, inst) {
            var ts, bs, ls, rs, l, r, t, b, i, first, o = inst.options, d = o.snapTolerance, x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width, y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height;
            for (i = inst.snapElements.length - 1; i >= 0; i--) {
                l = inst.snapElements[i].left - inst.margins.left;
                r = l + inst.snapElements[i].width;
                t = inst.snapElements[i].top - inst.margins.top;
                b = t + inst.snapElements[i].height;
                if (x2 < l - d || x1 > r + d || y2 < t - d || y1 > b + d || !$.contains(inst.snapElements[i].item.ownerDocument, inst.snapElements[i].item)) {
                    if (inst.snapElements[i].snapping) {
                        inst.options.snap.release && inst.options.snap.release.call(inst.element, event, $.extend(inst._uiHash(), {
                            snapItem: inst.snapElements[i].item
                        }));
                    }
                    inst.snapElements[i].snapping = false;
                    continue;
                }
                if (o.snapMode !== "inner") {
                    ts = Math.abs(t - y2) <= d;
                    bs = Math.abs(b - y1) <= d;
                    ls = Math.abs(l - x2) <= d;
                    rs = Math.abs(r - x1) <= d;
                    if (ts) {
                        ui.position.top = inst._convertPositionTo("relative", {
                            top: t - inst.helperProportions.height,
                            left: 0
                        }).top;
                    }
                    if (bs) {
                        ui.position.top = inst._convertPositionTo("relative", {
                            top: b,
                            left: 0
                        }).top;
                    }
                    if (ls) {
                        ui.position.left = inst._convertPositionTo("relative", {
                            top: 0,
                            left: l - inst.helperProportions.width
                        }).left;
                    }
                    if (rs) {
                        ui.position.left = inst._convertPositionTo("relative", {
                            top: 0,
                            left: r
                        }).left;
                    }
                }
                first = ts || bs || ls || rs;
                if (o.snapMode !== "outer") {
                    ts = Math.abs(t - y1) <= d;
                    bs = Math.abs(b - y2) <= d;
                    ls = Math.abs(l - x1) <= d;
                    rs = Math.abs(r - x2) <= d;
                    if (ts) {
                        ui.position.top = inst._convertPositionTo("relative", {
                            top: t,
                            left: 0
                        }).top;
                    }
                    if (bs) {
                        ui.position.top = inst._convertPositionTo("relative", {
                            top: b - inst.helperProportions.height,
                            left: 0
                        }).top;
                    }
                    if (ls) {
                        ui.position.left = inst._convertPositionTo("relative", {
                            top: 0,
                            left: l
                        }).left;
                    }
                    if (rs) {
                        ui.position.left = inst._convertPositionTo("relative", {
                            top: 0,
                            left: r - inst.helperProportions.width
                        }).left;
                    }
                }
                if (!inst.snapElements[i].snapping && (ts || bs || ls || rs || first)) {
                    inst.options.snap.snap && inst.options.snap.snap.call(inst.element, event, $.extend(inst._uiHash(), {
                        snapItem: inst.snapElements[i].item
                    }));
                }
                inst.snapElements[i].snapping = ts || bs || ls || rs || first;
            }
        }
    });
    $.ui.plugin.add("draggable", "stack", {
        start: function(event, ui, instance) {
            var min, o = instance.options, group = $.makeArray($(o.stack)).sort(function(a, b) {
                return (parseInt($(a).css("zIndex"), 10) || 0) - (parseInt($(b).css("zIndex"), 10) || 0);
            });
            if (!group.length) {
                return;
            }
            min = parseInt($(group[0]).css("zIndex"), 10) || 0;
            $(group).each(function(i) {
                $(this).css("zIndex", min + i);
            });
            this.css("zIndex", min + group.length);
        }
    });
    $.ui.plugin.add("draggable", "zIndex", {
        start: function(event, ui, instance) {
            var t = $(ui.helper), o = instance.options;
            if (t.css("zIndex")) {
                o._zIndex = t.css("zIndex");
            }
            t.css("zIndex", o.zIndex);
        },
        stop: function(event, ui, instance) {
            var o = instance.options;
            if (o._zIndex) {
                $(ui.helper).css("zIndex", o._zIndex);
            }
        }
    });
    var widgetsDraggable = $.ui.draggable;
    $.widget("ui.resizable", $.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: false,
            animate: false,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: false,
            autoHide: false,
            classes: {
                "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
            },
            containment: false,
            ghost: false,
            grid: false,
            handles: "e,s,se",
            helper: false,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(value) {
            return parseFloat(value) || 0;
        },
        _isNumber: function(value) {
            return !isNaN(parseFloat(value));
        },
        _hasScroll: function(el, a) {
            if ($(el).css("overflow") === "hidden") {
                return false;
            }
            var scroll = a && a === "left" ? "scrollLeft" : "scrollTop", has = false;
            if (el[scroll] > 0) {
                return true;
            }
            el[scroll] = 1;
            has = el[scroll] > 0;
            el[scroll] = 0;
            return has;
        },
        _create: function() {
            var margins, o = this.options, that = this;
            this._addClass("ui-resizable");
            $.extend(this, {
                _aspectRatio: !!o.aspectRatio,
                aspectRatio: o.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: o.helper || o.ghost || o.animate ? o.helper || "ui-resizable-helper" : null
            });
            if (this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)) {
                this.element.wrap($("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                }));
                this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance"));
                this.elementIsWrapper = true;
                margins = {
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom"),
                    marginLeft: this.originalElement.css("marginLeft")
                };
                this.element.css(margins);
                this.originalElement.css("margin", 0);
                this.originalResizeStyle = this.originalElement.css("resize");
                this.originalElement.css("resize", "none");
                this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                }));
                this.originalElement.css(margins);
                this._proportionallyResize();
            }
            this._setupHandles();
            if (o.autoHide) {
                $(this.element).on("mouseenter", function() {
                    if (o.disabled) {
                        return;
                    }
                    that._removeClass("ui-resizable-autohide");
                    that._handles.show();
                }).on("mouseleave", function() {
                    if (o.disabled) {
                        return;
                    }
                    if (!that.resizing) {
                        that._addClass("ui-resizable-autohide");
                        that._handles.hide();
                    }
                });
            }
            this._mouseInit();
        },
        _destroy: function() {
            this._mouseDestroy();
            var wrapper, _destroy = function(exp) {
                $(exp).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove();
            };
            if (this.elementIsWrapper) {
                _destroy(this.element);
                wrapper = this.element;
                this.originalElement.css({
                    position: wrapper.css("position"),
                    width: wrapper.outerWidth(),
                    height: wrapper.outerHeight(),
                    top: wrapper.css("top"),
                    left: wrapper.css("left")
                }).insertAfter(wrapper);
                wrapper.remove();
            }
            this.originalElement.css("resize", this.originalResizeStyle);
            _destroy(this.originalElement);
            return this;
        },
        _setOption: function(key, value) {
            this._super(key, value);
            switch (key) {
              case "handles":
                this._removeHandles();
                this._setupHandles();
                break;

              default:
                break;
            }
        },
        _setupHandles: function() {
            var o = this.options, handle, i, n, hname, axis, that = this;
            this.handles = o.handles || (!$(".ui-resizable-handle", this.element).length ? "e,s,se" : {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            });
            this._handles = $();
            if (this.handles.constructor === String) {
                if (this.handles === "all") {
                    this.handles = "n,e,s,w,se,sw,ne,nw";
                }
                n = this.handles.split(",");
                this.handles = {};
                for (i = 0; i < n.length; i++) {
                    handle = $.trim(n[i]);
                    hname = "ui-resizable-" + handle;
                    axis = $("<div>");
                    this._addClass(axis, "ui-resizable-handle " + hname);
                    axis.css({
                        zIndex: o.zIndex
                    });
                    this.handles[handle] = ".ui-resizable-" + handle;
                    this.element.append(axis);
                }
            }
            this._renderAxis = function(target) {
                var i, axis, padPos, padWrapper;
                target = target || this.element;
                for (i in this.handles) {
                    if (this.handles[i].constructor === String) {
                        this.handles[i] = this.element.children(this.handles[i]).first().show();
                    } else if (this.handles[i].jquery || this.handles[i].nodeType) {
                        this.handles[i] = $(this.handles[i]);
                        this._on(this.handles[i], {
                            mousedown: that._mouseDown
                        });
                    }
                    if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)) {
                        axis = $(this.handles[i], this.element);
                        padWrapper = /sw|ne|nw|se|n|s/.test(i) ? axis.outerHeight() : axis.outerWidth();
                        padPos = [ "padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left" ].join("");
                        target.css(padPos, padWrapper);
                        this._proportionallyResize();
                    }
                    this._handles = this._handles.add(this.handles[i]);
                }
            };
            this._renderAxis(this.element);
            this._handles = this._handles.add(this.element.find(".ui-resizable-handle"));
            this._handles.disableSelection();
            this._handles.on("mouseover", function() {
                if (!that.resizing) {
                    if (this.className) {
                        axis = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                    }
                    that.axis = axis && axis[1] ? axis[1] : "se";
                }
            });
            if (o.autoHide) {
                this._handles.hide();
                this._addClass("ui-resizable-autohide");
            }
        },
        _removeHandles: function() {
            this._handles.remove();
        },
        _mouseCapture: function(event) {
            var i, handle, capture = false;
            for (i in this.handles) {
                handle = $(this.handles[i])[0];
                if (handle === event.target || $.contains(handle, event.target)) {
                    capture = true;
                }
            }
            return !this.options.disabled && capture;
        },
        _mouseStart: function(event) {
            var curleft, curtop, cursor, o = this.options, el = this.element;
            this.resizing = true;
            this._renderProxy();
            curleft = this._num(this.helper.css("left"));
            curtop = this._num(this.helper.css("top"));
            if (o.containment) {
                curleft += $(o.containment).scrollLeft() || 0;
                curtop += $(o.containment).scrollTop() || 0;
            }
            this.offset = this.helper.offset();
            this.position = {
                left: curleft,
                top: curtop
            };
            this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: el.width(),
                height: el.height()
            };
            this.originalSize = this._helper ? {
                width: el.outerWidth(),
                height: el.outerHeight()
            } : {
                width: el.width(),
                height: el.height()
            };
            this.sizeDiff = {
                width: el.outerWidth() - el.width(),
                height: el.outerHeight() - el.height()
            };
            this.originalPosition = {
                left: curleft,
                top: curtop
            };
            this.originalMousePosition = {
                left: event.pageX,
                top: event.pageY
            };
            this.aspectRatio = typeof o.aspectRatio === "number" ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
            cursor = $(".ui-resizable-" + this.axis).css("cursor");
            $("body").css("cursor", cursor === "auto" ? this.axis + "-resize" : cursor);
            this._addClass("ui-resizable-resizing");
            this._propagate("start", event);
            return true;
        },
        _mouseDrag: function(event) {
            var data, props, smp = this.originalMousePosition, a = this.axis, dx = event.pageX - smp.left || 0, dy = event.pageY - smp.top || 0, trigger = this._change[a];
            this._updatePrevProperties();
            if (!trigger) {
                return false;
            }
            data = trigger.apply(this, [ event, dx, dy ]);
            this._updateVirtualBoundaries(event.shiftKey);
            if (this._aspectRatio || event.shiftKey) {
                data = this._updateRatio(data, event);
            }
            data = this._respectSize(data, event);
            this._updateCache(data);
            this._propagate("resize", event);
            props = this._applyChanges();
            if (!this._helper && this._proportionallyResizeElements.length) {
                this._proportionallyResize();
            }
            if (!$.isEmptyObject(props)) {
                this._updatePrevProperties();
                this._trigger("resize", event, this.ui());
                this._applyChanges();
            }
            return false;
        },
        _mouseStop: function(event) {
            this.resizing = false;
            var pr, ista, soffseth, soffsetw, s, left, top, o = this.options, that = this;
            if (this._helper) {
                pr = this._proportionallyResizeElements;
                ista = pr.length && /textarea/i.test(pr[0].nodeName);
                soffseth = ista && this._hasScroll(pr[0], "left") ? 0 : that.sizeDiff.height;
                soffsetw = ista ? 0 : that.sizeDiff.width;
                s = {
                    width: that.helper.width() - soffsetw,
                    height: that.helper.height() - soffseth
                };
                left = parseFloat(that.element.css("left")) + (that.position.left - that.originalPosition.left) || null;
                top = parseFloat(that.element.css("top")) + (that.position.top - that.originalPosition.top) || null;
                if (!o.animate) {
                    this.element.css($.extend(s, {
                        top: top,
                        left: left
                    }));
                }
                that.helper.height(that.size.height);
                that.helper.width(that.size.width);
                if (this._helper && !o.animate) {
                    this._proportionallyResize();
                }
            }
            $("body").css("cursor", "auto");
            this._removeClass("ui-resizable-resizing");
            this._propagate("stop", event);
            if (this._helper) {
                this.helper.remove();
            }
            return false;
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            };
            this.prevSize = {
                width: this.size.width,
                height: this.size.height
            };
        },
        _applyChanges: function() {
            var props = {};
            if (this.position.top !== this.prevPosition.top) {
                props.top = this.position.top + "px";
            }
            if (this.position.left !== this.prevPosition.left) {
                props.left = this.position.left + "px";
            }
            if (this.size.width !== this.prevSize.width) {
                props.width = this.size.width + "px";
            }
            if (this.size.height !== this.prevSize.height) {
                props.height = this.size.height + "px";
            }
            this.helper.css(props);
            return props;
        },
        _updateVirtualBoundaries: function(forceAspectRatio) {
            var pMinWidth, pMaxWidth, pMinHeight, pMaxHeight, b, o = this.options;
            b = {
                minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
                maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : Infinity,
                minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
                maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : Infinity
            };
            if (this._aspectRatio || forceAspectRatio) {
                pMinWidth = b.minHeight * this.aspectRatio;
                pMinHeight = b.minWidth / this.aspectRatio;
                pMaxWidth = b.maxHeight * this.aspectRatio;
                pMaxHeight = b.maxWidth / this.aspectRatio;
                if (pMinWidth > b.minWidth) {
                    b.minWidth = pMinWidth;
                }
                if (pMinHeight > b.minHeight) {
                    b.minHeight = pMinHeight;
                }
                if (pMaxWidth < b.maxWidth) {
                    b.maxWidth = pMaxWidth;
                }
                if (pMaxHeight < b.maxHeight) {
                    b.maxHeight = pMaxHeight;
                }
            }
            this._vBoundaries = b;
        },
        _updateCache: function(data) {
            this.offset = this.helper.offset();
            if (this._isNumber(data.left)) {
                this.position.left = data.left;
            }
            if (this._isNumber(data.top)) {
                this.position.top = data.top;
            }
            if (this._isNumber(data.height)) {
                this.size.height = data.height;
            }
            if (this._isNumber(data.width)) {
                this.size.width = data.width;
            }
        },
        _updateRatio: function(data) {
            var cpos = this.position, csize = this.size, a = this.axis;
            if (this._isNumber(data.height)) {
                data.width = data.height * this.aspectRatio;
            } else if (this._isNumber(data.width)) {
                data.height = data.width / this.aspectRatio;
            }
            if (a === "sw") {
                data.left = cpos.left + (csize.width - data.width);
                data.top = null;
            }
            if (a === "nw") {
                data.top = cpos.top + (csize.height - data.height);
                data.left = cpos.left + (csize.width - data.width);
            }
            return data;
        },
        _respectSize: function(data) {
            var o = this._vBoundaries, a = this.axis, ismaxw = this._isNumber(data.width) && o.maxWidth && o.maxWidth < data.width, ismaxh = this._isNumber(data.height) && o.maxHeight && o.maxHeight < data.height, isminw = this._isNumber(data.width) && o.minWidth && o.minWidth > data.width, isminh = this._isNumber(data.height) && o.minHeight && o.minHeight > data.height, dw = this.originalPosition.left + this.originalSize.width, dh = this.originalPosition.top + this.originalSize.height, cw = /sw|nw|w/.test(a), ch = /nw|ne|n/.test(a);
            if (isminw) {
                data.width = o.minWidth;
            }
            if (isminh) {
                data.height = o.minHeight;
            }
            if (ismaxw) {
                data.width = o.maxWidth;
            }
            if (ismaxh) {
                data.height = o.maxHeight;
            }
            if (isminw && cw) {
                data.left = dw - o.minWidth;
            }
            if (ismaxw && cw) {
                data.left = dw - o.maxWidth;
            }
            if (isminh && ch) {
                data.top = dh - o.minHeight;
            }
            if (ismaxh && ch) {
                data.top = dh - o.maxHeight;
            }
            if (!data.width && !data.height && !data.left && data.top) {
                data.top = null;
            } else if (!data.width && !data.height && !data.top && data.left) {
                data.left = null;
            }
            return data;
        },
        _getPaddingPlusBorderDimensions: function(element) {
            var i = 0, widths = [], borders = [ element.css("borderTopWidth"), element.css("borderRightWidth"), element.css("borderBottomWidth"), element.css("borderLeftWidth") ], paddings = [ element.css("paddingTop"), element.css("paddingRight"), element.css("paddingBottom"), element.css("paddingLeft") ];
            for (;i < 4; i++) {
                widths[i] = parseFloat(borders[i]) || 0;
                widths[i] += parseFloat(paddings[i]) || 0;
            }
            return {
                height: widths[0] + widths[2],
                width: widths[1] + widths[3]
            };
        },
        _proportionallyResize: function() {
            if (!this._proportionallyResizeElements.length) {
                return;
            }
            var prel, i = 0, element = this.helper || this.element;
            for (;i < this._proportionallyResizeElements.length; i++) {
                prel = this._proportionallyResizeElements[i];
                if (!this.outerDimensions) {
                    this.outerDimensions = this._getPaddingPlusBorderDimensions(prel);
                }
                prel.css({
                    height: element.height() - this.outerDimensions.height || 0,
                    width: element.width() - this.outerDimensions.width || 0
                });
            }
        },
        _renderProxy: function() {
            var el = this.element, o = this.options;
            this.elementOffset = el.offset();
            if (this._helper) {
                this.helper = this.helper || $("<div style='overflow:hidden;'></div>");
                this._addClass(this.helper, this._helper);
                this.helper.css({
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++o.zIndex
                });
                this.helper.appendTo("body").disableSelection();
            } else {
                this.helper = this.element;
            }
        },
        _change: {
            e: function(event, dx) {
                return {
                    width: this.originalSize.width + dx
                };
            },
            w: function(event, dx) {
                var cs = this.originalSize, sp = this.originalPosition;
                return {
                    left: sp.left + dx,
                    width: cs.width - dx
                };
            },
            n: function(event, dx, dy) {
                var cs = this.originalSize, sp = this.originalPosition;
                return {
                    top: sp.top + dy,
                    height: cs.height - dy
                };
            },
            s: function(event, dx, dy) {
                return {
                    height: this.originalSize.height + dy
                };
            },
            se: function(event, dx, dy) {
                return $.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [ event, dx, dy ]));
            },
            sw: function(event, dx, dy) {
                return $.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [ event, dx, dy ]));
            },
            ne: function(event, dx, dy) {
                return $.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [ event, dx, dy ]));
            },
            nw: function(event, dx, dy) {
                return $.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [ event, dx, dy ]));
            }
        },
        _propagate: function(n, event) {
            $.ui.plugin.call(this, n, [ event, this.ui() ]);
            n !== "resize" && this._trigger(n, event, this.ui());
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            };
        }
    });
    $.ui.plugin.add("resizable", "animate", {
        stop: function(event) {
            var that = $(this).resizable("instance"), o = that.options, pr = that._proportionallyResizeElements, ista = pr.length && /textarea/i.test(pr[0].nodeName), soffseth = ista && that._hasScroll(pr[0], "left") ? 0 : that.sizeDiff.height, soffsetw = ista ? 0 : that.sizeDiff.width, style = {
                width: that.size.width - soffsetw,
                height: that.size.height - soffseth
            }, left = parseFloat(that.element.css("left")) + (that.position.left - that.originalPosition.left) || null, top = parseFloat(that.element.css("top")) + (that.position.top - that.originalPosition.top) || null;
            that.element.animate($.extend(style, top && left ? {
                top: top,
                left: left
            } : {}), {
                duration: o.animateDuration,
                easing: o.animateEasing,
                step: function() {
                    var data = {
                        width: parseFloat(that.element.css("width")),
                        height: parseFloat(that.element.css("height")),
                        top: parseFloat(that.element.css("top")),
                        left: parseFloat(that.element.css("left"))
                    };
                    if (pr && pr.length) {
                        $(pr[0]).css({
                            width: data.width,
                            height: data.height
                        });
                    }
                    that._updateCache(data);
                    that._propagate("resize", event);
                }
            });
        }
    });
    $.ui.plugin.add("resizable", "containment", {
        start: function() {
            var element, p, co, ch, cw, width, height, that = $(this).resizable("instance"), o = that.options, el = that.element, oc = o.containment, ce = oc instanceof $ ? oc.get(0) : /parent/.test(oc) ? el.parent().get(0) : oc;
            if (!ce) {
                return;
            }
            that.containerElement = $(ce);
            if (/document/.test(oc) || oc === document) {
                that.containerOffset = {
                    left: 0,
                    top: 0
                };
                that.containerPosition = {
                    left: 0,
                    top: 0
                };
                that.parentData = {
                    element: $(document),
                    left: 0,
                    top: 0,
                    width: $(document).width(),
                    height: $(document).height() || document.body.parentNode.scrollHeight
                };
            } else {
                element = $(ce);
                p = [];
                $([ "Top", "Right", "Left", "Bottom" ]).each(function(i, name) {
                    p[i] = that._num(element.css("padding" + name));
                });
                that.containerOffset = element.offset();
                that.containerPosition = element.position();
                that.containerSize = {
                    height: element.innerHeight() - p[3],
                    width: element.innerWidth() - p[1]
                };
                co = that.containerOffset;
                ch = that.containerSize.height;
                cw = that.containerSize.width;
                width = that._hasScroll(ce, "left") ? ce.scrollWidth : cw;
                height = that._hasScroll(ce) ? ce.scrollHeight : ch;
                that.parentData = {
                    element: ce,
                    left: co.left,
                    top: co.top,
                    width: width,
                    height: height
                };
            }
        },
        resize: function(event) {
            var woset, hoset, isParent, isOffsetRelative, that = $(this).resizable("instance"), o = that.options, co = that.containerOffset, cp = that.position, pRatio = that._aspectRatio || event.shiftKey, cop = {
                top: 0,
                left: 0
            }, ce = that.containerElement, continueResize = true;
            if (ce[0] !== document && /static/.test(ce.css("position"))) {
                cop = co;
            }
            if (cp.left < (that._helper ? co.left : 0)) {
                that.size.width = that.size.width + (that._helper ? that.position.left - co.left : that.position.left - cop.left);
                if (pRatio) {
                    that.size.height = that.size.width / that.aspectRatio;
                    continueResize = false;
                }
                that.position.left = o.helper ? co.left : 0;
            }
            if (cp.top < (that._helper ? co.top : 0)) {
                that.size.height = that.size.height + (that._helper ? that.position.top - co.top : that.position.top);
                if (pRatio) {
                    that.size.width = that.size.height * that.aspectRatio;
                    continueResize = false;
                }
                that.position.top = that._helper ? co.top : 0;
            }
            isParent = that.containerElement.get(0) === that.element.parent().get(0);
            isOffsetRelative = /relative|absolute/.test(that.containerElement.css("position"));
            if (isParent && isOffsetRelative) {
                that.offset.left = that.parentData.left + that.position.left;
                that.offset.top = that.parentData.top + that.position.top;
            } else {
                that.offset.left = that.element.offset().left;
                that.offset.top = that.element.offset().top;
            }
            woset = Math.abs(that.sizeDiff.width + (that._helper ? that.offset.left - cop.left : that.offset.left - co.left));
            hoset = Math.abs(that.sizeDiff.height + (that._helper ? that.offset.top - cop.top : that.offset.top - co.top));
            if (woset + that.size.width >= that.parentData.width) {
                that.size.width = that.parentData.width - woset;
                if (pRatio) {
                    that.size.height = that.size.width / that.aspectRatio;
                    continueResize = false;
                }
            }
            if (hoset + that.size.height >= that.parentData.height) {
                that.size.height = that.parentData.height - hoset;
                if (pRatio) {
                    that.size.width = that.size.height * that.aspectRatio;
                    continueResize = false;
                }
            }
            if (!continueResize) {
                that.position.left = that.prevPosition.left;
                that.position.top = that.prevPosition.top;
                that.size.width = that.prevSize.width;
                that.size.height = that.prevSize.height;
            }
        },
        stop: function() {
            var that = $(this).resizable("instance"), o = that.options, co = that.containerOffset, cop = that.containerPosition, ce = that.containerElement, helper = $(that.helper), ho = helper.offset(), w = helper.outerWidth() - that.sizeDiff.width, h = helper.outerHeight() - that.sizeDiff.height;
            if (that._helper && !o.animate && /relative/.test(ce.css("position"))) {
                $(this).css({
                    left: ho.left - cop.left - co.left,
                    width: w,
                    height: h
                });
            }
            if (that._helper && !o.animate && /static/.test(ce.css("position"))) {
                $(this).css({
                    left: ho.left - cop.left - co.left,
                    width: w,
                    height: h
                });
            }
        }
    });
    $.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var that = $(this).resizable("instance"), o = that.options;
            $(o.alsoResize).each(function() {
                var el = $(this);
                el.data("ui-resizable-alsoresize", {
                    width: parseFloat(el.width()),
                    height: parseFloat(el.height()),
                    left: parseFloat(el.css("left")),
                    top: parseFloat(el.css("top"))
                });
            });
        },
        resize: function(event, ui) {
            var that = $(this).resizable("instance"), o = that.options, os = that.originalSize, op = that.originalPosition, delta = {
                height: that.size.height - os.height || 0,
                width: that.size.width - os.width || 0,
                top: that.position.top - op.top || 0,
                left: that.position.left - op.left || 0
            };
            $(o.alsoResize).each(function() {
                var el = $(this), start = $(this).data("ui-resizable-alsoresize"), style = {}, css = el.parents(ui.originalElement[0]).length ? [ "width", "height" ] : [ "width", "height", "top", "left" ];
                $.each(css, function(i, prop) {
                    var sum = (start[prop] || 0) + (delta[prop] || 0);
                    if (sum && sum >= 0) {
                        style[prop] = sum || null;
                    }
                });
                el.css(style);
            });
        },
        stop: function() {
            $(this).removeData("ui-resizable-alsoresize");
        }
    });
    $.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var that = $(this).resizable("instance"), cs = that.size;
            that.ghost = that.originalElement.clone();
            that.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: cs.height,
                width: cs.width,
                margin: 0,
                left: 0,
                top: 0
            });
            that._addClass(that.ghost, "ui-resizable-ghost");
            if ($.uiBackCompat !== false && typeof that.options.ghost === "string") {
                that.ghost.addClass(this.options.ghost);
            }
            that.ghost.appendTo(that.helper);
        },
        resize: function() {
            var that = $(this).resizable("instance");
            if (that.ghost) {
                that.ghost.css({
                    position: "relative",
                    height: that.size.height,
                    width: that.size.width
                });
            }
        },
        stop: function() {
            var that = $(this).resizable("instance");
            if (that.ghost && that.helper) {
                that.helper.get(0).removeChild(that.ghost.get(0));
            }
        }
    });
    $.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var outerDimensions, that = $(this).resizable("instance"), o = that.options, cs = that.size, os = that.originalSize, op = that.originalPosition, a = that.axis, grid = typeof o.grid === "number" ? [ o.grid, o.grid ] : o.grid, gridX = grid[0] || 1, gridY = grid[1] || 1, ox = Math.round((cs.width - os.width) / gridX) * gridX, oy = Math.round((cs.height - os.height) / gridY) * gridY, newWidth = os.width + ox, newHeight = os.height + oy, isMaxWidth = o.maxWidth && o.maxWidth < newWidth, isMaxHeight = o.maxHeight && o.maxHeight < newHeight, isMinWidth = o.minWidth && o.minWidth > newWidth, isMinHeight = o.minHeight && o.minHeight > newHeight;
            o.grid = grid;
            if (isMinWidth) {
                newWidth += gridX;
            }
            if (isMinHeight) {
                newHeight += gridY;
            }
            if (isMaxWidth) {
                newWidth -= gridX;
            }
            if (isMaxHeight) {
                newHeight -= gridY;
            }
            if (/^(se|s|e)$/.test(a)) {
                that.size.width = newWidth;
                that.size.height = newHeight;
            } else if (/^(ne)$/.test(a)) {
                that.size.width = newWidth;
                that.size.height = newHeight;
                that.position.top = op.top - oy;
            } else if (/^(sw)$/.test(a)) {
                that.size.width = newWidth;
                that.size.height = newHeight;
                that.position.left = op.left - ox;
            } else {
                if (newHeight - gridY <= 0 || newWidth - gridX <= 0) {
                    outerDimensions = that._getPaddingPlusBorderDimensions(this);
                }
                if (newHeight - gridY > 0) {
                    that.size.height = newHeight;
                    that.position.top = op.top - oy;
                } else {
                    newHeight = gridY - outerDimensions.height;
                    that.size.height = newHeight;
                    that.position.top = op.top + os.height - newHeight;
                }
                if (newWidth - gridX > 0) {
                    that.size.width = newWidth;
                    that.position.left = op.left - ox;
                } else {
                    newWidth = gridX - outerDimensions.width;
                    that.size.width = newWidth;
                    that.position.left = op.left + os.width - newWidth;
                }
            }
        }
    });
    var widgetsResizable = $.ui.resizable;
    $.widget("ui.dialog", {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoOpen: true,
            buttons: [],
            classes: {
                "ui-dialog": "ui-corner-all",
                "ui-dialog-titlebar": "ui-corner-all"
            },
            closeOnEscape: true,
            closeText: "Close",
            draggable: true,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: false,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(pos) {
                    var topOffset = $(this).css(pos).offset().top;
                    if (topOffset < 0) {
                        $(this).css("top", pos.top - topOffset);
                    }
                }
            },
            resizable: true,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: true,
            height: true,
            maxHeight: true,
            maxWidth: true,
            minHeight: true,
            minWidth: true,
            width: true
        },
        resizableRelatedOptions: {
            maxHeight: true,
            maxWidth: true,
            minHeight: true,
            minWidth: true
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            };
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            };
            this.originalTitle = this.element.attr("title");
            if (this.options.title == null && this.originalTitle != null) {
                this.options.title = this.originalTitle;
            }
            if (this.options.disabled) {
                this.options.disabled = false;
            }
            this._createWrapper();
            this.element.show().removeAttr("title").appendTo(this.uiDialog);
            this._addClass("ui-dialog-content", "ui-widget-content");
            this._createTitlebar();
            this._createButtonPane();
            if (this.options.draggable && $.fn.draggable) {
                this._makeDraggable();
            }
            if (this.options.resizable && $.fn.resizable) {
                this._makeResizable();
            }
            this._isOpen = false;
            this._trackFocus();
        },
        _init: function() {
            if (this.options.autoOpen) {
                this.open();
            }
        },
        _appendTo: function() {
            var element = this.options.appendTo;
            if (element && (element.jquery || element.nodeType)) {
                return $(element);
            }
            return this.document.find(element || "body").eq(0);
        },
        _destroy: function() {
            var next, originalPosition = this.originalPosition;
            this._untrackInstance();
            this._destroyOverlay();
            this.element.removeUniqueId().css(this.originalCss).detach();
            this.uiDialog.remove();
            if (this.originalTitle) {
                this.element.attr("title", this.originalTitle);
            }
            next = originalPosition.parent.children().eq(originalPosition.index);
            if (next.length && next[0] !== this.element[0]) {
                next.before(this.element);
            } else {
                originalPosition.parent.append(this.element);
            }
        },
        widget: function() {
            return this.uiDialog;
        },
        disable: $.noop,
        enable: $.noop,
        close: function(event) {
            var that = this;
            if (!this._isOpen || this._trigger("beforeClose", event) === false) {
                return;
            }
            this._isOpen = false;
            this._focusedElement = null;
            this._destroyOverlay();
            this._untrackInstance();
            if (!this.opener.filter(":focusable").trigger("focus").length) {
                $.ui.safeBlur($.ui.safeActiveElement(this.document[0]));
            }
            this._hide(this.uiDialog, this.options.hide, function() {
                that._trigger("close", event);
            });
        },
        isOpen: function() {
            return this._isOpen;
        },
        moveToTop: function() {
            this._moveToTop();
        },
        _moveToTop: function(event, silent) {
            var moved = false, zIndices = this.uiDialog.siblings(".ui-front:visible").map(function() {
                return +$(this).css("z-index");
            }).get(), zIndexMax = Math.max.apply(null, zIndices);
            if (zIndexMax >= +this.uiDialog.css("z-index")) {
                this.uiDialog.css("z-index", zIndexMax + 1);
                moved = true;
            }
            if (moved && !silent) {
                this._trigger("focus", event);
            }
            return moved;
        },
        open: function() {
            var that = this;
            if (this._isOpen) {
                if (this._moveToTop()) {
                    this._focusTabbable();
                }
                return;
            }
            this._isOpen = true;
            this.opener = $($.ui.safeActiveElement(this.document[0]));
            this._size();
            this._position();
            this._createOverlay();
            this._moveToTop(null, true);
            if (this.overlay) {
                this.overlay.css("z-index", this.uiDialog.css("z-index") - 1);
            }
            this._show(this.uiDialog, this.options.show, function() {
                that._focusTabbable();
                that._trigger("focus");
            });
            this._makeFocusTarget();
            this._trigger("open");
        },
        _focusTabbable: function() {
            var hasFocus = this._focusedElement;
            if (!hasFocus) {
                hasFocus = this.element.find("[autofocus]");
            }
            if (!hasFocus.length) {
                hasFocus = this.element.find(":tabbable");
            }
            if (!hasFocus.length) {
                hasFocus = this.uiDialogButtonPane.find(":tabbable");
            }
            if (!hasFocus.length) {
                hasFocus = this.uiDialogTitlebarClose.filter(":tabbable");
            }
            if (!hasFocus.length) {
                hasFocus = this.uiDialog;
            }
            hasFocus.eq(0).trigger("focus");
        },
        _keepFocus: function(event) {
            function checkFocus() {
                var activeElement = $.ui.safeActiveElement(this.document[0]), isActive = this.uiDialog[0] === activeElement || $.contains(this.uiDialog[0], activeElement);
                if (!isActive) {
                    this._focusTabbable();
                }
            }
            event.preventDefault();
            checkFocus.call(this);
            this._delay(checkFocus);
        },
        _createWrapper: function() {
            this.uiDialog = $("<div>").hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo());
            this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front");
            this._on(this.uiDialog, {
                keydown: function(event) {
                    if (this.options.closeOnEscape && !event.isDefaultPrevented() && event.keyCode && event.keyCode === $.ui.keyCode.ESCAPE) {
                        event.preventDefault();
                        this.close(event);
                        return;
                    }
                    if (event.keyCode !== $.ui.keyCode.TAB || event.isDefaultPrevented()) {
                        return;
                    }
                    var tabbables = this.uiDialog.find(":tabbable"), first = tabbables.filter(":first"), last = tabbables.filter(":last");
                    if ((event.target === last[0] || event.target === this.uiDialog[0]) && !event.shiftKey) {
                        this._delay(function() {
                            first.trigger("focus");
                        });
                        event.preventDefault();
                    } else if ((event.target === first[0] || event.target === this.uiDialog[0]) && event.shiftKey) {
                        this._delay(function() {
                            last.trigger("focus");
                        });
                        event.preventDefault();
                    }
                },
                mousedown: function(event) {
                    if (this._moveToTop(event)) {
                        this._focusTabbable();
                    }
                }
            });
            if (!this.element.find("[aria-describedby]").length) {
                this.uiDialog.attr({
                    "aria-describedby": this.element.uniqueId().attr("id")
                });
            }
        },
        _createTitlebar: function() {
            var uiDialogTitle;
            this.uiDialogTitlebar = $("<div>");
            this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix");
            this._on(this.uiDialogTitlebar, {
                mousedown: function(event) {
                    if (!$(event.target).closest(".ui-dialog-titlebar-close")) {
                        this.uiDialog.trigger("focus");
                    }
                }
            });
            this.uiDialogTitlebarClose = $("<button type='button'></button>").button({
                label: $("<a>").text(this.options.closeText).html(),
                icon: "ui-icon-closethick",
                showLabel: false
            }).appendTo(this.uiDialogTitlebar);
            this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close");
            this._on(this.uiDialogTitlebarClose, {
                click: function(event) {
                    event.preventDefault();
                    this.close(event);
                }
            });
            uiDialogTitle = $("<span>").uniqueId().prependTo(this.uiDialogTitlebar);
            this._addClass(uiDialogTitle, "ui-dialog-title");
            this._title(uiDialogTitle);
            this.uiDialogTitlebar.prependTo(this.uiDialog);
            this.uiDialog.attr({
                "aria-labelledby": uiDialogTitle.attr("id")
            });
        },
        _title: function(title) {
            if (this.options.title) {
                title.text(this.options.title);
            } else {
                title.html("&#160;");
            }
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = $("<div>");
            this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix");
            this.uiButtonSet = $("<div>").appendTo(this.uiDialogButtonPane);
            this._addClass(this.uiButtonSet, "ui-dialog-buttonset");
            this._createButtons();
        },
        _createButtons: function() {
            var that = this, buttons = this.options.buttons;
            this.uiDialogButtonPane.remove();
            this.uiButtonSet.empty();
            if ($.isEmptyObject(buttons) || $.isArray(buttons) && !buttons.length) {
                this._removeClass(this.uiDialog, "ui-dialog-buttons");
                return;
            }
            $.each(buttons, function(name, props) {
                var click, buttonOptions;
                props = $.isFunction(props) ? {
                    click: props,
                    text: name
                } : props;
                props = $.extend({
                    type: "button"
                }, props);
                click = props.click;
                buttonOptions = {
                    icon: props.icon,
                    iconPosition: props.iconPosition,
                    showLabel: props.showLabel,
                    icons: props.icons,
                    text: props.text
                };
                delete props.click;
                delete props.icon;
                delete props.iconPosition;
                delete props.showLabel;
                delete props.icons;
                if (typeof props.text === "boolean") {
                    delete props.text;
                }
                $("<button></button>", props).button(buttonOptions).appendTo(that.uiButtonSet).on("click", function() {
                    click.apply(that.element[0], arguments);
                });
            });
            this._addClass(this.uiDialog, "ui-dialog-buttons");
            this.uiDialogButtonPane.appendTo(this.uiDialog);
        },
        _makeDraggable: function() {
            var that = this, options = this.options;
            function filteredUi(ui) {
                return {
                    position: ui.position,
                    offset: ui.offset
                };
            }
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(event, ui) {
                    that._addClass($(this), "ui-dialog-dragging");
                    that._blockFrames();
                    that._trigger("dragStart", event, filteredUi(ui));
                },
                drag: function(event, ui) {
                    that._trigger("drag", event, filteredUi(ui));
                },
                stop: function(event, ui) {
                    var left = ui.offset.left - that.document.scrollLeft(), top = ui.offset.top - that.document.scrollTop();
                    options.position = {
                        my: "left top",
                        at: "left" + (left >= 0 ? "+" : "") + left + " " + "top" + (top >= 0 ? "+" : "") + top,
                        of: that.window
                    };
                    that._removeClass($(this), "ui-dialog-dragging");
                    that._unblockFrames();
                    that._trigger("dragStop", event, filteredUi(ui));
                }
            });
        },
        _makeResizable: function() {
            var that = this, options = this.options, handles = options.resizable, position = this.uiDialog.css("position"), resizeHandles = typeof handles === "string" ? handles : "n,e,s,w,se,sw,ne,nw";
            function filteredUi(ui) {
                return {
                    originalPosition: ui.originalPosition,
                    originalSize: ui.originalSize,
                    position: ui.position,
                    size: ui.size
                };
            }
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: options.maxWidth,
                maxHeight: options.maxHeight,
                minWidth: options.minWidth,
                minHeight: this._minHeight(),
                handles: resizeHandles,
                start: function(event, ui) {
                    that._addClass($(this), "ui-dialog-resizing");
                    that._blockFrames();
                    that._trigger("resizeStart", event, filteredUi(ui));
                },
                resize: function(event, ui) {
                    that._trigger("resize", event, filteredUi(ui));
                },
                stop: function(event, ui) {
                    var offset = that.uiDialog.offset(), left = offset.left - that.document.scrollLeft(), top = offset.top - that.document.scrollTop();
                    options.height = that.uiDialog.height();
                    options.width = that.uiDialog.width();
                    options.position = {
                        my: "left top",
                        at: "left" + (left >= 0 ? "+" : "") + left + " " + "top" + (top >= 0 ? "+" : "") + top,
                        of: that.window
                    };
                    that._removeClass($(this), "ui-dialog-resizing");
                    that._unblockFrames();
                    that._trigger("resizeStop", event, filteredUi(ui));
                }
            }).css("position", position);
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(event) {
                    this._makeFocusTarget();
                    this._focusedElement = $(event.target);
                }
            });
        },
        _makeFocusTarget: function() {
            this._untrackInstance();
            this._trackingInstances().unshift(this);
        },
        _untrackInstance: function() {
            var instances = this._trackingInstances(), exists = $.inArray(this, instances);
            if (exists !== -1) {
                instances.splice(exists, 1);
            }
        },
        _trackingInstances: function() {
            var instances = this.document.data("ui-dialog-instances");
            if (!instances) {
                instances = [];
                this.document.data("ui-dialog-instances", instances);
            }
            return instances;
        },
        _minHeight: function() {
            var options = this.options;
            return options.height === "auto" ? options.minHeight : Math.min(options.minHeight, options.height);
        },
        _position: function() {
            var isVisible = this.uiDialog.is(":visible");
            if (!isVisible) {
                this.uiDialog.show();
            }
            this.uiDialog.position(this.options.position);
            if (!isVisible) {
                this.uiDialog.hide();
            }
        },
        _setOptions: function(options) {
            var that = this, resize = false, resizableOptions = {};
            $.each(options, function(key, value) {
                that._setOption(key, value);
                if (key in that.sizeRelatedOptions) {
                    resize = true;
                }
                if (key in that.resizableRelatedOptions) {
                    resizableOptions[key] = value;
                }
            });
            if (resize) {
                this._size();
                this._position();
            }
            if (this.uiDialog.is(":data(ui-resizable)")) {
                this.uiDialog.resizable("option", resizableOptions);
            }
        },
        _setOption: function(key, value) {
            var isDraggable, isResizable, uiDialog = this.uiDialog;
            if (key === "disabled") {
                return;
            }
            this._super(key, value);
            if (key === "appendTo") {
                this.uiDialog.appendTo(this._appendTo());
            }
            if (key === "buttons") {
                this._createButtons();
            }
            if (key === "closeText") {
                this.uiDialogTitlebarClose.button({
                    label: $("<a>").text("" + this.options.closeText).html()
                });
            }
            if (key === "draggable") {
                isDraggable = uiDialog.is(":data(ui-draggable)");
                if (isDraggable && !value) {
                    uiDialog.draggable("destroy");
                }
                if (!isDraggable && value) {
                    this._makeDraggable();
                }
            }
            if (key === "position") {
                this._position();
            }
            if (key === "resizable") {
                isResizable = uiDialog.is(":data(ui-resizable)");
                if (isResizable && !value) {
                    uiDialog.resizable("destroy");
                }
                if (isResizable && typeof value === "string") {
                    uiDialog.resizable("option", "handles", value);
                }
                if (!isResizable && value !== false) {
                    this._makeResizable();
                }
            }
            if (key === "title") {
                this._title(this.uiDialogTitlebar.find(".ui-dialog-title"));
            }
        },
        _size: function() {
            var nonContentHeight, minContentHeight, maxContentHeight, options = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            });
            if (options.minWidth > options.width) {
                options.width = options.minWidth;
            }
            nonContentHeight = this.uiDialog.css({
                height: "auto",
                width: options.width
            }).outerHeight();
            minContentHeight = Math.max(0, options.minHeight - nonContentHeight);
            maxContentHeight = typeof options.maxHeight === "number" ? Math.max(0, options.maxHeight - nonContentHeight) : "none";
            if (options.height === "auto") {
                this.element.css({
                    minHeight: minContentHeight,
                    maxHeight: maxContentHeight,
                    height: "auto"
                });
            } else {
                this.element.height(Math.max(0, options.height - nonContentHeight));
            }
            if (this.uiDialog.is(":data(ui-resizable)")) {
                this.uiDialog.resizable("option", "minHeight", this._minHeight());
            }
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var iframe = $(this);
                return $("<div>").css({
                    position: "absolute",
                    width: iframe.outerWidth(),
                    height: iframe.outerHeight()
                }).appendTo(iframe.parent()).offset(iframe.offset())[0];
            });
        },
        _unblockFrames: function() {
            if (this.iframeBlocks) {
                this.iframeBlocks.remove();
                delete this.iframeBlocks;
            }
        },
        _allowInteraction: function(event) {
            if ($(event.target).closest(".ui-dialog").length) {
                return true;
            }
            return !!$(event.target).closest(".ui-datepicker").length;
        },
        _createOverlay: function() {
            if (!this.options.modal) {
                return;
            }
            var isOpening = true;
            this._delay(function() {
                isOpening = false;
            });
            if (!this.document.data("ui-dialog-overlays")) {
                this._on(this.document, {
                    focusin: function(event) {
                        if (isOpening) {
                            return;
                        }
                        if (!this._allowInteraction(event)) {
                            event.preventDefault();
                            this._trackingInstances()[0]._focusTabbable();
                        }
                    }
                });
            }
            this.overlay = $("<div>").appendTo(this._appendTo());
            this._addClass(this.overlay, null, "ui-widget-overlay ui-front");
            this._on(this.overlay, {
                mousedown: "_keepFocus"
            });
            this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1);
        },
        _destroyOverlay: function() {
            if (!this.options.modal) {
                return;
            }
            if (this.overlay) {
                var overlays = this.document.data("ui-dialog-overlays") - 1;
                if (!overlays) {
                    this._off(this.document, "focusin");
                    this.document.removeData("ui-dialog-overlays");
                } else {
                    this.document.data("ui-dialog-overlays", overlays);
                }
                this.overlay.remove();
                this.overlay = null;
            }
        }
    });
    if ($.uiBackCompat !== false) {
        $.widget("ui.dialog", $.ui.dialog, {
            options: {
                dialogClass: ""
            },
            _createWrapper: function() {
                this._super();
                this.uiDialog.addClass(this.options.dialogClass);
            },
            _setOption: function(key, value) {
                if (key === "dialogClass") {
                    this.uiDialog.removeClass(this.options.dialogClass).addClass(value);
                }
                this._superApply(arguments);
            }
        });
    }
    var widgetsDialog = $.ui.dialog;
    $.widget("ui.droppable", {
        version: "1.12.1",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            addClasses: true,
            greedy: false,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function() {
            var proportions, o = this.options, accept = o.accept;
            this.isover = false;
            this.isout = true;
            this.accept = $.isFunction(accept) ? accept : function(d) {
                return d.is(accept);
            };
            this.proportions = function() {
                if (arguments.length) {
                    proportions = arguments[0];
                } else {
                    return proportions ? proportions : proportions = {
                        width: this.element[0].offsetWidth,
                        height: this.element[0].offsetHeight
                    };
                }
            };
            this._addToManager(o.scope);
            o.addClasses && this._addClass("ui-droppable");
        },
        _addToManager: function(scope) {
            $.ui.ddmanager.droppables[scope] = $.ui.ddmanager.droppables[scope] || [];
            $.ui.ddmanager.droppables[scope].push(this);
        },
        _splice: function(drop) {
            var i = 0;
            for (;i < drop.length; i++) {
                if (drop[i] === this) {
                    drop.splice(i, 1);
                }
            }
        },
        _destroy: function() {
            var drop = $.ui.ddmanager.droppables[this.options.scope];
            this._splice(drop);
        },
        _setOption: function(key, value) {
            if (key === "accept") {
                this.accept = $.isFunction(value) ? value : function(d) {
                    return d.is(value);
                };
            } else if (key === "scope") {
                var drop = $.ui.ddmanager.droppables[this.options.scope];
                this._splice(drop);
                this._addToManager(value);
            }
            this._super(key, value);
        },
        _activate: function(event) {
            var draggable = $.ui.ddmanager.current;
            this._addActiveClass();
            if (draggable) {
                this._trigger("activate", event, this.ui(draggable));
            }
        },
        _deactivate: function(event) {
            var draggable = $.ui.ddmanager.current;
            this._removeActiveClass();
            if (draggable) {
                this._trigger("deactivate", event, this.ui(draggable));
            }
        },
        _over: function(event) {
            var draggable = $.ui.ddmanager.current;
            if (!draggable || (draggable.currentItem || draggable.element)[0] === this.element[0]) {
                return;
            }
            if (this.accept.call(this.element[0], draggable.currentItem || draggable.element)) {
                this._addHoverClass();
                this._trigger("over", event, this.ui(draggable));
            }
        },
        _out: function(event) {
            var draggable = $.ui.ddmanager.current;
            if (!draggable || (draggable.currentItem || draggable.element)[0] === this.element[0]) {
                return;
            }
            if (this.accept.call(this.element[0], draggable.currentItem || draggable.element)) {
                this._removeHoverClass();
                this._trigger("out", event, this.ui(draggable));
            }
        },
        _drop: function(event, custom) {
            var draggable = custom || $.ui.ddmanager.current, childrenIntersection = false;
            if (!draggable || (draggable.currentItem || draggable.element)[0] === this.element[0]) {
                return false;
            }
            this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                var inst = $(this).droppable("instance");
                if (inst.options.greedy && !inst.options.disabled && inst.options.scope === draggable.options.scope && inst.accept.call(inst.element[0], draggable.currentItem || draggable.element) && intersect(draggable, $.extend(inst, {
                    offset: inst.element.offset()
                }), inst.options.tolerance, event)) {
                    childrenIntersection = true;
                    return false;
                }
            });
            if (childrenIntersection) {
                return false;
            }
            if (this.accept.call(this.element[0], draggable.currentItem || draggable.element)) {
                this._removeActiveClass();
                this._removeHoverClass();
                this._trigger("drop", event, this.ui(draggable));
                return this.element;
            }
            return false;
        },
        ui: function(c) {
            return {
                draggable: c.currentItem || c.element,
                helper: c.helper,
                position: c.position,
                offset: c.positionAbs
            };
        },
        _addHoverClass: function() {
            this._addClass("ui-droppable-hover");
        },
        _removeHoverClass: function() {
            this._removeClass("ui-droppable-hover");
        },
        _addActiveClass: function() {
            this._addClass("ui-droppable-active");
        },
        _removeActiveClass: function() {
            this._removeClass("ui-droppable-active");
        }
    });
    var intersect = $.ui.intersect = function() {
        function isOverAxis(x, reference, size) {
            return x >= reference && x < reference + size;
        }
        return function(draggable, droppable, toleranceMode, event) {
            if (!droppable.offset) {
                return false;
            }
            var x1 = (draggable.positionAbs || draggable.position.absolute).left + draggable.margins.left, y1 = (draggable.positionAbs || draggable.position.absolute).top + draggable.margins.top, x2 = x1 + draggable.helperProportions.width, y2 = y1 + draggable.helperProportions.height, l = droppable.offset.left, t = droppable.offset.top, r = l + droppable.proportions().width, b = t + droppable.proportions().height;
            switch (toleranceMode) {
              case "fit":
                return l <= x1 && x2 <= r && t <= y1 && y2 <= b;

              case "intersect":
                return l < x1 + draggable.helperProportions.width / 2 && x2 - draggable.helperProportions.width / 2 < r && t < y1 + draggable.helperProportions.height / 2 && y2 - draggable.helperProportions.height / 2 < b;

              case "pointer":
                return isOverAxis(event.pageY, t, droppable.proportions().height) && isOverAxis(event.pageX, l, droppable.proportions().width);

              case "touch":
                return (y1 >= t && y1 <= b || y2 >= t && y2 <= b || y1 < t && y2 > b) && (x1 >= l && x1 <= r || x2 >= l && x2 <= r || x1 < l && x2 > r);

              default:
                return false;
            }
        };
    }();
    $.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function(t, event) {
            var i, j, m = $.ui.ddmanager.droppables[t.options.scope] || [], type = event ? event.type : null, list = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            droppablesLoop: for (i = 0; i < m.length; i++) {
                if (m[i].options.disabled || t && !m[i].accept.call(m[i].element[0], t.currentItem || t.element)) {
                    continue;
                }
                for (j = 0; j < list.length; j++) {
                    if (list[j] === m[i].element[0]) {
                        m[i].proportions().height = 0;
                        continue droppablesLoop;
                    }
                }
                m[i].visible = m[i].element.css("display") !== "none";
                if (!m[i].visible) {
                    continue;
                }
                if (type === "mousedown") {
                    m[i]._activate.call(m[i], event);
                }
                m[i].offset = m[i].element.offset();
                m[i].proportions({
                    width: m[i].element[0].offsetWidth,
                    height: m[i].element[0].offsetHeight
                });
            }
        },
        drop: function(draggable, event) {
            var dropped = false;
            $.each(($.ui.ddmanager.droppables[draggable.options.scope] || []).slice(), function() {
                if (!this.options) {
                    return;
                }
                if (!this.options.disabled && this.visible && intersect(draggable, this, this.options.tolerance, event)) {
                    dropped = this._drop.call(this, event) || dropped;
                }
                if (!this.options.disabled && this.visible && this.accept.call(this.element[0], draggable.currentItem || draggable.element)) {
                    this.isout = true;
                    this.isover = false;
                    this._deactivate.call(this, event);
                }
            });
            return dropped;
        },
        dragStart: function(draggable, event) {
            draggable.element.parentsUntil("body").on("scroll.droppable", function() {
                if (!draggable.options.refreshPositions) {
                    $.ui.ddmanager.prepareOffsets(draggable, event);
                }
            });
        },
        drag: function(draggable, event) {
            if (draggable.options.refreshPositions) {
                $.ui.ddmanager.prepareOffsets(draggable, event);
            }
            $.each($.ui.ddmanager.droppables[draggable.options.scope] || [], function() {
                if (this.options.disabled || this.greedyChild || !this.visible) {
                    return;
                }
                var parentInstance, scope, parent, intersects = intersect(draggable, this, this.options.tolerance, event), c = !intersects && this.isover ? "isout" : intersects && !this.isover ? "isover" : null;
                if (!c) {
                    return;
                }
                if (this.options.greedy) {
                    scope = this.options.scope;
                    parent = this.element.parents(":data(ui-droppable)").filter(function() {
                        return $(this).droppable("instance").options.scope === scope;
                    });
                    if (parent.length) {
                        parentInstance = $(parent[0]).droppable("instance");
                        parentInstance.greedyChild = c === "isover";
                    }
                }
                if (parentInstance && c === "isover") {
                    parentInstance.isover = false;
                    parentInstance.isout = true;
                    parentInstance._out.call(parentInstance, event);
                }
                this[c] = true;
                this[c === "isout" ? "isover" : "isout"] = false;
                this[c === "isover" ? "_over" : "_out"].call(this, event);
                if (parentInstance && c === "isout") {
                    parentInstance.isout = false;
                    parentInstance.isover = true;
                    parentInstance._over.call(parentInstance, event);
                }
            });
        },
        dragStop: function(draggable, event) {
            draggable.element.parentsUntil("body").off("scroll.droppable");
            if (!draggable.options.refreshPositions) {
                $.ui.ddmanager.prepareOffsets(draggable, event);
            }
        }
    };
    if ($.uiBackCompat !== false) {
        $.widget("ui.droppable", $.ui.droppable, {
            options: {
                hoverClass: false,
                activeClass: false
            },
            _addActiveClass: function() {
                this._super();
                if (this.options.activeClass) {
                    this.element.addClass(this.options.activeClass);
                }
            },
            _removeActiveClass: function() {
                this._super();
                if (this.options.activeClass) {
                    this.element.removeClass(this.options.activeClass);
                }
            },
            _addHoverClass: function() {
                this._super();
                if (this.options.hoverClass) {
                    this.element.addClass(this.options.hoverClass);
                }
            },
            _removeHoverClass: function() {
                this._super();
                if (this.options.hoverClass) {
                    this.element.removeClass(this.options.hoverClass);
                }
            }
        });
    }
    var widgetsDroppable = $.ui.droppable;
    var widgetsProgressbar = $.widget("ui.progressbar", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-progressbar": "ui-corner-all",
                "ui-progressbar-value": "ui-corner-left",
                "ui-progressbar-complete": "ui-corner-right"
            },
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue();
            this.element.attr({
                role: "progressbar",
                "aria-valuemin": this.min
            });
            this._addClass("ui-progressbar", "ui-widget ui-widget-content");
            this.valueDiv = $("<div>").appendTo(this.element);
            this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header");
            this._refreshValue();
        },
        _destroy: function() {
            this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow");
            this.valueDiv.remove();
        },
        value: function(newValue) {
            if (newValue === undefined) {
                return this.options.value;
            }
            this.options.value = this._constrainedValue(newValue);
            this._refreshValue();
        },
        _constrainedValue: function(newValue) {
            if (newValue === undefined) {
                newValue = this.options.value;
            }
            this.indeterminate = newValue === false;
            if (typeof newValue !== "number") {
                newValue = 0;
            }
            return this.indeterminate ? false : Math.min(this.options.max, Math.max(this.min, newValue));
        },
        _setOptions: function(options) {
            var value = options.value;
            delete options.value;
            this._super(options);
            this.options.value = this._constrainedValue(value);
            this._refreshValue();
        },
        _setOption: function(key, value) {
            if (key === "max") {
                value = Math.max(this.min, value);
            }
            this._super(key, value);
        },
        _setOptionDisabled: function(value) {
            this._super(value);
            this.element.attr("aria-disabled", value);
            this._toggleClass(null, "ui-state-disabled", !!value);
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
        },
        _refreshValue: function() {
            var value = this.options.value, percentage = this._percentage();
            this.valueDiv.toggle(this.indeterminate || value > this.min).width(percentage.toFixed(0) + "%");
            this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, value === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate);
            if (this.indeterminate) {
                this.element.removeAttr("aria-valuenow");
                if (!this.overlayDiv) {
                    this.overlayDiv = $("<div>").appendTo(this.valueDiv);
                    this._addClass(this.overlayDiv, "ui-progressbar-overlay");
                }
            } else {
                this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": value
                });
                if (this.overlayDiv) {
                    this.overlayDiv.remove();
                    this.overlayDiv = null;
                }
            }
            if (this.oldValue !== value) {
                this.oldValue = value;
                this._trigger("change");
            }
            if (value === this.options.max) {
                this._trigger("complete");
            }
        }
    });
    var widgetsSelectable = $.widget("ui.selectable", $.ui.mouse, {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoRefresh: true,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var that = this;
            this._addClass("ui-selectable");
            this.dragged = false;
            this.refresh = function() {
                that.elementPos = $(that.element[0]).offset();
                that.selectees = $(that.options.filter, that.element[0]);
                that._addClass(that.selectees, "ui-selectee");
                that.selectees.each(function() {
                    var $this = $(this), selecteeOffset = $this.offset(), pos = {
                        left: selecteeOffset.left - that.elementPos.left,
                        top: selecteeOffset.top - that.elementPos.top
                    };
                    $.data(this, "selectable-item", {
                        element: this,
                        $element: $this,
                        left: pos.left,
                        top: pos.top,
                        right: pos.left + $this.outerWidth(),
                        bottom: pos.top + $this.outerHeight(),
                        startselected: false,
                        selected: $this.hasClass("ui-selected"),
                        selecting: $this.hasClass("ui-selecting"),
                        unselecting: $this.hasClass("ui-unselecting")
                    });
                });
            };
            this.refresh();
            this._mouseInit();
            this.helper = $("<div>");
            this._addClass(this.helper, "ui-selectable-helper");
        },
        _destroy: function() {
            this.selectees.removeData("selectable-item");
            this._mouseDestroy();
        },
        _mouseStart: function(event) {
            var that = this, options = this.options;
            this.opos = [ event.pageX, event.pageY ];
            this.elementPos = $(this.element[0]).offset();
            if (this.options.disabled) {
                return;
            }
            this.selectees = $(options.filter, this.element[0]);
            this._trigger("start", event);
            $(options.appendTo).append(this.helper);
            this.helper.css({
                left: event.pageX,
                top: event.pageY,
                width: 0,
                height: 0
            });
            if (options.autoRefresh) {
                this.refresh();
            }
            this.selectees.filter(".ui-selected").each(function() {
                var selectee = $.data(this, "selectable-item");
                selectee.startselected = true;
                if (!event.metaKey && !event.ctrlKey) {
                    that._removeClass(selectee.$element, "ui-selected");
                    selectee.selected = false;
                    that._addClass(selectee.$element, "ui-unselecting");
                    selectee.unselecting = true;
                    that._trigger("unselecting", event, {
                        unselecting: selectee.element
                    });
                }
            });
            $(event.target).parents().addBack().each(function() {
                var doSelect, selectee = $.data(this, "selectable-item");
                if (selectee) {
                    doSelect = !event.metaKey && !event.ctrlKey || !selectee.$element.hasClass("ui-selected");
                    that._removeClass(selectee.$element, doSelect ? "ui-unselecting" : "ui-selected")._addClass(selectee.$element, doSelect ? "ui-selecting" : "ui-unselecting");
                    selectee.unselecting = !doSelect;
                    selectee.selecting = doSelect;
                    selectee.selected = doSelect;
                    if (doSelect) {
                        that._trigger("selecting", event, {
                            selecting: selectee.element
                        });
                    } else {
                        that._trigger("unselecting", event, {
                            unselecting: selectee.element
                        });
                    }
                    return false;
                }
            });
        },
        _mouseDrag: function(event) {
            this.dragged = true;
            if (this.options.disabled) {
                return;
            }
            var tmp, that = this, options = this.options, x1 = this.opos[0], y1 = this.opos[1], x2 = event.pageX, y2 = event.pageY;
            if (x1 > x2) {
                tmp = x2;
                x2 = x1;
                x1 = tmp;
            }
            if (y1 > y2) {
                tmp = y2;
                y2 = y1;
                y1 = tmp;
            }
            this.helper.css({
                left: x1,
                top: y1,
                width: x2 - x1,
                height: y2 - y1
            });
            this.selectees.each(function() {
                var selectee = $.data(this, "selectable-item"), hit = false, offset = {};
                if (!selectee || selectee.element === that.element[0]) {
                    return;
                }
                offset.left = selectee.left + that.elementPos.left;
                offset.right = selectee.right + that.elementPos.left;
                offset.top = selectee.top + that.elementPos.top;
                offset.bottom = selectee.bottom + that.elementPos.top;
                if (options.tolerance === "touch") {
                    hit = !(offset.left > x2 || offset.right < x1 || offset.top > y2 || offset.bottom < y1);
                } else if (options.tolerance === "fit") {
                    hit = offset.left > x1 && offset.right < x2 && offset.top > y1 && offset.bottom < y2;
                }
                if (hit) {
                    if (selectee.selected) {
                        that._removeClass(selectee.$element, "ui-selected");
                        selectee.selected = false;
                    }
                    if (selectee.unselecting) {
                        that._removeClass(selectee.$element, "ui-unselecting");
                        selectee.unselecting = false;
                    }
                    if (!selectee.selecting) {
                        that._addClass(selectee.$element, "ui-selecting");
                        selectee.selecting = true;
                        that._trigger("selecting", event, {
                            selecting: selectee.element
                        });
                    }
                } else {
                    if (selectee.selecting) {
                        if ((event.metaKey || event.ctrlKey) && selectee.startselected) {
                            that._removeClass(selectee.$element, "ui-selecting");
                            selectee.selecting = false;
                            that._addClass(selectee.$element, "ui-selected");
                            selectee.selected = true;
                        } else {
                            that._removeClass(selectee.$element, "ui-selecting");
                            selectee.selecting = false;
                            if (selectee.startselected) {
                                that._addClass(selectee.$element, "ui-unselecting");
                                selectee.unselecting = true;
                            }
                            that._trigger("unselecting", event, {
                                unselecting: selectee.element
                            });
                        }
                    }
                    if (selectee.selected) {
                        if (!event.metaKey && !event.ctrlKey && !selectee.startselected) {
                            that._removeClass(selectee.$element, "ui-selected");
                            selectee.selected = false;
                            that._addClass(selectee.$element, "ui-unselecting");
                            selectee.unselecting = true;
                            that._trigger("unselecting", event, {
                                unselecting: selectee.element
                            });
                        }
                    }
                }
            });
            return false;
        },
        _mouseStop: function(event) {
            var that = this;
            this.dragged = false;
            $(".ui-unselecting", this.element[0]).each(function() {
                var selectee = $.data(this, "selectable-item");
                that._removeClass(selectee.$element, "ui-unselecting");
                selectee.unselecting = false;
                selectee.startselected = false;
                that._trigger("unselected", event, {
                    unselected: selectee.element
                });
            });
            $(".ui-selecting", this.element[0]).each(function() {
                var selectee = $.data(this, "selectable-item");
                that._removeClass(selectee.$element, "ui-selecting")._addClass(selectee.$element, "ui-selected");
                selectee.selecting = false;
                selectee.selected = true;
                selectee.startselected = true;
                that._trigger("selected", event, {
                    selected: selectee.element
                });
            });
            this._trigger("stop", event);
            this.helper.remove();
            return false;
        }
    });
    var widgetsSelectmenu = $.widget("ui.selectmenu", [ $.ui.formResetMixin, {
        version: "1.12.1",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            classes: {
                "ui-selectmenu-button-open": "ui-corner-top",
                "ui-selectmenu-button-closed": "ui-corner-all"
            },
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: false,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function() {
            var selectmenuId = this.element.uniqueId().attr("id");
            this.ids = {
                element: selectmenuId,
                button: selectmenuId + "-button",
                menu: selectmenuId + "-menu"
            };
            this._drawButton();
            this._drawMenu();
            this._bindFormResetHandler();
            this._rendered = false;
            this.menuItems = $();
        },
        _drawButton: function() {
            var icon, that = this, item = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button);
            this._on(this.labels, {
                click: function(event) {
                    this.button.focus();
                    event.preventDefault();
                }
            });
            this.element.hide();
            this.button = $("<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr("title")
            }).insertAfter(this.element);
            this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget");
            icon = $("<span>").appendTo(this.button);
            this._addClass(icon, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button);
            this.buttonItem = this._renderButtonItem(item).appendTo(this.button);
            if (this.options.width !== false) {
                this._resizeButton();
            }
            this._on(this.button, this._buttonEvents);
            this.button.one("focusin", function() {
                if (!that._rendered) {
                    that._refreshMenu();
                }
            });
        },
        _drawMenu: function() {
            var that = this;
            this.menu = $("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            });
            this.menuWrap = $("<div>").append(this.menu);
            this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front");
            this.menuWrap.appendTo(this._appendTo());
            this.menuInstance = this.menu.menu({
                classes: {
                    "ui-menu": "ui-corner-bottom"
                },
                role: "listbox",
                select: function(event, ui) {
                    event.preventDefault();
                    that._setSelection();
                    that._select(ui.item.data("ui-selectmenu-item"), event);
                },
                focus: function(event, ui) {
                    var item = ui.item.data("ui-selectmenu-item");
                    if (that.focusIndex != null && item.index !== that.focusIndex) {
                        that._trigger("focus", event, {
                            item: item
                        });
                        if (!that.isOpen) {
                            that._select(item, event);
                        }
                    }
                    that.focusIndex = item.index;
                    that.button.attr("aria-activedescendant", that.menuItems.eq(item.index).attr("id"));
                }
            }).menu("instance");
            this.menuInstance._off(this.menu, "mouseleave");
            this.menuInstance._closeOnDocumentClick = function() {
                return false;
            };
            this.menuInstance._isDivider = function() {
                return false;
            };
        },
        refresh: function() {
            this._refreshMenu();
            this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {}));
            if (this.options.width === null) {
                this._resizeButton();
            }
        },
        _refreshMenu: function() {
            var item, options = this.element.find("option");
            this.menu.empty();
            this._parseOptions(options);
            this._renderMenu(this.menu, this.items);
            this.menuInstance.refresh();
            this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper");
            this._rendered = true;
            if (!options.length) {
                return;
            }
            item = this._getSelectedItem();
            this.menuInstance.focus(null, item);
            this._setAria(item.data("ui-selectmenu-item"));
            this._setOption("disabled", this.element.prop("disabled"));
        },
        open: function(event) {
            if (this.options.disabled) {
                return;
            }
            if (!this._rendered) {
                this._refreshMenu();
            } else {
                this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active");
                this.menuInstance.focus(null, this._getSelectedItem());
            }
            if (!this.menuItems.length) {
                return;
            }
            this.isOpen = true;
            this._toggleAttr();
            this._resizeMenu();
            this._position();
            this._on(this.document, this._documentClick);
            this._trigger("open", event);
        },
        _position: function() {
            this.menuWrap.position($.extend({
                of: this.button
            }, this.options.position));
        },
        close: function(event) {
            if (!this.isOpen) {
                return;
            }
            this.isOpen = false;
            this._toggleAttr();
            this.range = null;
            this._off(this.document);
            this._trigger("close", event);
        },
        widget: function() {
            return this.button;
        },
        menuWidget: function() {
            return this.menu;
        },
        _renderButtonItem: function(item) {
            var buttonItem = $("<span>");
            this._setText(buttonItem, item.label);
            this._addClass(buttonItem, "ui-selectmenu-text");
            return buttonItem;
        },
        _renderMenu: function(ul, items) {
            var that = this, currentOptgroup = "";
            $.each(items, function(index, item) {
                var li;
                if (item.optgroup !== currentOptgroup) {
                    li = $("<li>", {
                        text: item.optgroup
                    });
                    that._addClass(li, "ui-selectmenu-optgroup", "ui-menu-divider" + (item.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""));
                    li.appendTo(ul);
                    currentOptgroup = item.optgroup;
                }
                that._renderItemData(ul, item);
            });
        },
        _renderItemData: function(ul, item) {
            return this._renderItem(ul, item).data("ui-selectmenu-item", item);
        },
        _renderItem: function(ul, item) {
            var li = $("<li>"), wrapper = $("<div>", {
                title: item.element.attr("title")
            });
            if (item.disabled) {
                this._addClass(li, null, "ui-state-disabled");
            }
            this._setText(wrapper, item.label);
            return li.append(wrapper).appendTo(ul);
        },
        _setText: function(element, value) {
            if (value) {
                element.text(value);
            } else {
                element.html("&#160;");
            }
        },
        _move: function(direction, event) {
            var item, next, filter = ".ui-menu-item";
            if (this.isOpen) {
                item = this.menuItems.eq(this.focusIndex).parent("li");
            } else {
                item = this.menuItems.eq(this.element[0].selectedIndex).parent("li");
                filter += ":not(.ui-state-disabled)";
            }
            if (direction === "first" || direction === "last") {
                next = item[direction === "first" ? "prevAll" : "nextAll"](filter).eq(-1);
            } else {
                next = item[direction + "All"](filter).eq(0);
            }
            if (next.length) {
                this.menuInstance.focus(event, next);
            }
        },
        _getSelectedItem: function() {
            return this.menuItems.eq(this.element[0].selectedIndex).parent("li");
        },
        _toggle: function(event) {
            this[this.isOpen ? "close" : "open"](event);
        },
        _setSelection: function() {
            var selection;
            if (!this.range) {
                return;
            }
            if (window.getSelection) {
                selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(this.range);
            } else {
                this.range.select();
            }
            this.button.focus();
        },
        _documentClick: {
            mousedown: function(event) {
                if (!this.isOpen) {
                    return;
                }
                if (!$(event.target).closest(".ui-selectmenu-menu, #" + $.ui.escapeSelector(this.ids.button)).length) {
                    this.close(event);
                }
            }
        },
        _buttonEvents: {
            mousedown: function() {
                var selection;
                if (window.getSelection) {
                    selection = window.getSelection();
                    if (selection.rangeCount) {
                        this.range = selection.getRangeAt(0);
                    }
                } else {
                    this.range = document.selection.createRange();
                }
            },
            click: function(event) {
                this._setSelection();
                this._toggle(event);
            },
            keydown: function(event) {
                var preventDefault = true;
                switch (event.keyCode) {
                  case $.ui.keyCode.TAB:
                  case $.ui.keyCode.ESCAPE:
                    this.close(event);
                    preventDefault = false;
                    break;

                  case $.ui.keyCode.ENTER:
                    if (this.isOpen) {
                        this._selectFocusedItem(event);
                    }
                    break;

                  case $.ui.keyCode.UP:
                    if (event.altKey) {
                        this._toggle(event);
                    } else {
                        this._move("prev", event);
                    }
                    break;

                  case $.ui.keyCode.DOWN:
                    if (event.altKey) {
                        this._toggle(event);
                    } else {
                        this._move("next", event);
                    }
                    break;

                  case $.ui.keyCode.SPACE:
                    if (this.isOpen) {
                        this._selectFocusedItem(event);
                    } else {
                        this._toggle(event);
                    }
                    break;

                  case $.ui.keyCode.LEFT:
                    this._move("prev", event);
                    break;

                  case $.ui.keyCode.RIGHT:
                    this._move("next", event);
                    break;

                  case $.ui.keyCode.HOME:
                  case $.ui.keyCode.PAGE_UP:
                    this._move("first", event);
                    break;

                  case $.ui.keyCode.END:
                  case $.ui.keyCode.PAGE_DOWN:
                    this._move("last", event);
                    break;

                  default:
                    this.menu.trigger(event);
                    preventDefault = false;
                }
                if (preventDefault) {
                    event.preventDefault();
                }
            }
        },
        _selectFocusedItem: function(event) {
            var item = this.menuItems.eq(this.focusIndex).parent("li");
            if (!item.hasClass("ui-state-disabled")) {
                this._select(item.data("ui-selectmenu-item"), event);
            }
        },
        _select: function(item, event) {
            var oldIndex = this.element[0].selectedIndex;
            this.element[0].selectedIndex = item.index;
            this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(item));
            this._setAria(item);
            this._trigger("select", event, {
                item: item
            });
            if (item.index !== oldIndex) {
                this._trigger("change", event, {
                    item: item
                });
            }
            this.close(event);
        },
        _setAria: function(item) {
            var id = this.menuItems.eq(item.index).attr("id");
            this.button.attr({
                "aria-labelledby": id,
                "aria-activedescendant": id
            });
            this.menu.attr("aria-activedescendant", id);
        },
        _setOption: function(key, value) {
            if (key === "icons") {
                var icon = this.button.find("span.ui-icon");
                this._removeClass(icon, null, this.options.icons.button)._addClass(icon, null, value.button);
            }
            this._super(key, value);
            if (key === "appendTo") {
                this.menuWrap.appendTo(this._appendTo());
            }
            if (key === "width") {
                this._resizeButton();
            }
        },
        _setOptionDisabled: function(value) {
            this._super(value);
            this.menuInstance.option("disabled", value);
            this.button.attr("aria-disabled", value);
            this._toggleClass(this.button, null, "ui-state-disabled", value);
            this.element.prop("disabled", value);
            if (value) {
                this.button.attr("tabindex", -1);
                this.close();
            } else {
                this.button.attr("tabindex", 0);
            }
        },
        _appendTo: function() {
            var element = this.options.appendTo;
            if (element) {
                element = element.jquery || element.nodeType ? $(element) : this.document.find(element).eq(0);
            }
            if (!element || !element[0]) {
                element = this.element.closest(".ui-front, dialog");
            }
            if (!element.length) {
                element = this.document[0].body;
            }
            return element;
        },
        _toggleAttr: function() {
            this.button.attr("aria-expanded", this.isOpen);
            this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen);
            this.menu.attr("aria-hidden", !this.isOpen);
        },
        _resizeButton: function() {
            var width = this.options.width;
            if (width === false) {
                this.button.css("width", "");
                return;
            }
            if (width === null) {
                width = this.element.show().outerWidth();
                this.element.hide();
            }
            this.button.outerWidth(width);
        },
        _resizeMenu: function() {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1));
        },
        _getCreateOptions: function() {
            var options = this._super();
            options.disabled = this.element.prop("disabled");
            return options;
        },
        _parseOptions: function(options) {
            var that = this, data = [];
            options.each(function(index, item) {
                data.push(that._parseOption($(item), index));
            });
            this.items = data;
        },
        _parseOption: function(option, index) {
            var optgroup = option.parent("optgroup");
            return {
                element: option,
                index: index,
                value: option.val(),
                label: option.text(),
                optgroup: optgroup.attr("label") || "",
                disabled: optgroup.prop("disabled") || option.prop("disabled")
            };
        },
        _destroy: function() {
            this._unbindFormResetHandler();
            this.menuWrap.remove();
            this.button.remove();
            this.element.show();
            this.element.removeUniqueId();
            this.labels.attr("for", this.ids.element);
        }
    } ]);
    var widgetsSlider = $.widget("ui.slider", $.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
            animate: false,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: false,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = false;
            this._mouseSliding = false;
            this._animateOff = true;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this._calculateNewMax();
            this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content");
            this._refresh();
            this._animateOff = false;
        },
        _refresh: function() {
            this._createRange();
            this._createHandles();
            this._setupEvents();
            this._refreshValue();
        },
        _createHandles: function() {
            var i, handleCount, options = this.options, existingHandles = this.element.find(".ui-slider-handle"), handle = "<span tabindex='0'></span>", handles = [];
            handleCount = options.values && options.values.length || 1;
            if (existingHandles.length > handleCount) {
                existingHandles.slice(handleCount).remove();
                existingHandles = existingHandles.slice(0, handleCount);
            }
            for (i = existingHandles.length; i < handleCount; i++) {
                handles.push(handle);
            }
            this.handles = existingHandles.add($(handles.join("")).appendTo(this.element));
            this._addClass(this.handles, "ui-slider-handle", "ui-state-default");
            this.handle = this.handles.eq(0);
            this.handles.each(function(i) {
                $(this).data("ui-slider-handle-index", i).attr("tabIndex", 0);
            });
        },
        _createRange: function() {
            var options = this.options;
            if (options.range) {
                if (options.range === true) {
                    if (!options.values) {
                        options.values = [ this._valueMin(), this._valueMin() ];
                    } else if (options.values.length && options.values.length !== 2) {
                        options.values = [ options.values[0], options.values[0] ];
                    } else if ($.isArray(options.values)) {
                        options.values = options.values.slice(0);
                    }
                }
                if (!this.range || !this.range.length) {
                    this.range = $("<div>").appendTo(this.element);
                    this._addClass(this.range, "ui-slider-range");
                } else {
                    this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max");
                    this.range.css({
                        left: "",
                        bottom: ""
                    });
                }
                if (options.range === "min" || options.range === "max") {
                    this._addClass(this.range, "ui-slider-range-" + options.range);
                }
            } else {
                if (this.range) {
                    this.range.remove();
                }
                this.range = null;
            }
        },
        _setupEvents: function() {
            this._off(this.handles);
            this._on(this.handles, this._handleEvents);
            this._hoverable(this.handles);
            this._focusable(this.handles);
        },
        _destroy: function() {
            this.handles.remove();
            if (this.range) {
                this.range.remove();
            }
            this._mouseDestroy();
        },
        _mouseCapture: function(event) {
            var position, normValue, distance, closestHandle, index, allowed, offset, mouseOverHandle, that = this, o = this.options;
            if (o.disabled) {
                return false;
            }
            this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            };
            this.elementOffset = this.element.offset();
            position = {
                x: event.pageX,
                y: event.pageY
            };
            normValue = this._normValueFromMouse(position);
            distance = this._valueMax() - this._valueMin() + 1;
            this.handles.each(function(i) {
                var thisDistance = Math.abs(normValue - that.values(i));
                if (distance > thisDistance || distance === thisDistance && (i === that._lastChangedValue || that.values(i) === o.min)) {
                    distance = thisDistance;
                    closestHandle = $(this);
                    index = i;
                }
            });
            allowed = this._start(event, index);
            if (allowed === false) {
                return false;
            }
            this._mouseSliding = true;
            this._handleIndex = index;
            this._addClass(closestHandle, null, "ui-state-active");
            closestHandle.trigger("focus");
            offset = closestHandle.offset();
            mouseOverHandle = !$(event.target).parents().addBack().is(".ui-slider-handle");
            this._clickOffset = mouseOverHandle ? {
                left: 0,
                top: 0
            } : {
                left: event.pageX - offset.left - closestHandle.width() / 2,
                top: event.pageY - offset.top - closestHandle.height() / 2 - (parseInt(closestHandle.css("borderTopWidth"), 10) || 0) - (parseInt(closestHandle.css("borderBottomWidth"), 10) || 0) + (parseInt(closestHandle.css("marginTop"), 10) || 0)
            };
            if (!this.handles.hasClass("ui-state-hover")) {
                this._slide(event, index, normValue);
            }
            this._animateOff = true;
            return true;
        },
        _mouseStart: function() {
            return true;
        },
        _mouseDrag: function(event) {
            var position = {
                x: event.pageX,
                y: event.pageY
            }, normValue = this._normValueFromMouse(position);
            this._slide(event, this._handleIndex, normValue);
            return false;
        },
        _mouseStop: function(event) {
            this._removeClass(this.handles, null, "ui-state-active");
            this._mouseSliding = false;
            this._stop(event, this._handleIndex);
            this._change(event, this._handleIndex);
            this._handleIndex = null;
            this._clickOffset = null;
            this._animateOff = false;
            return false;
        },
        _detectOrientation: function() {
            this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal";
        },
        _normValueFromMouse: function(position) {
            var pixelTotal, pixelMouse, percentMouse, valueTotal, valueMouse;
            if (this.orientation === "horizontal") {
                pixelTotal = this.elementSize.width;
                pixelMouse = position.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0);
            } else {
                pixelTotal = this.elementSize.height;
                pixelMouse = position.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0);
            }
            percentMouse = pixelMouse / pixelTotal;
            if (percentMouse > 1) {
                percentMouse = 1;
            }
            if (percentMouse < 0) {
                percentMouse = 0;
            }
            if (this.orientation === "vertical") {
                percentMouse = 1 - percentMouse;
            }
            valueTotal = this._valueMax() - this._valueMin();
            valueMouse = this._valueMin() + percentMouse * valueTotal;
            return this._trimAlignValue(valueMouse);
        },
        _uiHash: function(index, value, values) {
            var uiHash = {
                handle: this.handles[index],
                handleIndex: index,
                value: value !== undefined ? value : this.value()
            };
            if (this._hasMultipleValues()) {
                uiHash.value = value !== undefined ? value : this.values(index);
                uiHash.values = values || this.values();
            }
            return uiHash;
        },
        _hasMultipleValues: function() {
            return this.options.values && this.options.values.length;
        },
        _start: function(event, index) {
            return this._trigger("start", event, this._uiHash(index));
        },
        _slide: function(event, index, newVal) {
            var allowed, otherVal, currentValue = this.value(), newValues = this.values();
            if (this._hasMultipleValues()) {
                otherVal = this.values(index ? 0 : 1);
                currentValue = this.values(index);
                if (this.options.values.length === 2 && this.options.range === true) {
                    newVal = index === 0 ? Math.min(otherVal, newVal) : Math.max(otherVal, newVal);
                }
                newValues[index] = newVal;
            }
            if (newVal === currentValue) {
                return;
            }
            allowed = this._trigger("slide", event, this._uiHash(index, newVal, newValues));
            if (allowed === false) {
                return;
            }
            if (this._hasMultipleValues()) {
                this.values(index, newVal);
            } else {
                this.value(newVal);
            }
        },
        _stop: function(event, index) {
            this._trigger("stop", event, this._uiHash(index));
        },
        _change: function(event, index) {
            if (!this._keySliding && !this._mouseSliding) {
                this._lastChangedValue = index;
                this._trigger("change", event, this._uiHash(index));
            }
        },
        value: function(newValue) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(newValue);
                this._refreshValue();
                this._change(null, 0);
                return;
            }
            return this._value();
        },
        values: function(index, newValue) {
            var vals, newValues, i;
            if (arguments.length > 1) {
                this.options.values[index] = this._trimAlignValue(newValue);
                this._refreshValue();
                this._change(null, index);
                return;
            }
            if (arguments.length) {
                if ($.isArray(arguments[0])) {
                    vals = this.options.values;
                    newValues = arguments[0];
                    for (i = 0; i < vals.length; i += 1) {
                        vals[i] = this._trimAlignValue(newValues[i]);
                        this._change(null, i);
                    }
                    this._refreshValue();
                } else {
                    if (this._hasMultipleValues()) {
                        return this._values(index);
                    } else {
                        return this.value();
                    }
                }
            } else {
                return this._values();
            }
        },
        _setOption: function(key, value) {
            var i, valsLength = 0;
            if (key === "range" && this.options.range === true) {
                if (value === "min") {
                    this.options.value = this._values(0);
                    this.options.values = null;
                } else if (value === "max") {
                    this.options.value = this._values(this.options.values.length - 1);
                    this.options.values = null;
                }
            }
            if ($.isArray(this.options.values)) {
                valsLength = this.options.values.length;
            }
            this._super(key, value);
            switch (key) {
              case "orientation":
                this._detectOrientation();
                this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation);
                this._refreshValue();
                if (this.options.range) {
                    this._refreshRange(value);
                }
                this.handles.css(value === "horizontal" ? "bottom" : "left", "");
                break;

              case "value":
                this._animateOff = true;
                this._refreshValue();
                this._change(null, 0);
                this._animateOff = false;
                break;

              case "values":
                this._animateOff = true;
                this._refreshValue();
                for (i = valsLength - 1; i >= 0; i--) {
                    this._change(null, i);
                }
                this._animateOff = false;
                break;

              case "step":
              case "min":
              case "max":
                this._animateOff = true;
                this._calculateNewMax();
                this._refreshValue();
                this._animateOff = false;
                break;

              case "range":
                this._animateOff = true;
                this._refresh();
                this._animateOff = false;
                break;
            }
        },
        _setOptionDisabled: function(value) {
            this._super(value);
            this._toggleClass(null, "ui-state-disabled", !!value);
        },
        _value: function() {
            var val = this.options.value;
            val = this._trimAlignValue(val);
            return val;
        },
        _values: function(index) {
            var val, vals, i;
            if (arguments.length) {
                val = this.options.values[index];
                val = this._trimAlignValue(val);
                return val;
            } else if (this._hasMultipleValues()) {
                vals = this.options.values.slice();
                for (i = 0; i < vals.length; i += 1) {
                    vals[i] = this._trimAlignValue(vals[i]);
                }
                return vals;
            } else {
                return [];
            }
        },
        _trimAlignValue: function(val) {
            if (val <= this._valueMin()) {
                return this._valueMin();
            }
            if (val >= this._valueMax()) {
                return this._valueMax();
            }
            var step = this.options.step > 0 ? this.options.step : 1, valModStep = (val - this._valueMin()) % step, alignValue = val - valModStep;
            if (Math.abs(valModStep) * 2 >= step) {
                alignValue += valModStep > 0 ? step : -step;
            }
            return parseFloat(alignValue.toFixed(5));
        },
        _calculateNewMax: function() {
            var max = this.options.max, min = this._valueMin(), step = this.options.step, aboveMin = Math.round((max - min) / step) * step;
            max = aboveMin + min;
            if (max > this.options.max) {
                max -= step;
            }
            this.max = parseFloat(max.toFixed(this._precision()));
        },
        _precision: function() {
            var precision = this._precisionOf(this.options.step);
            if (this.options.min !== null) {
                precision = Math.max(precision, this._precisionOf(this.options.min));
            }
            return precision;
        },
        _precisionOf: function(num) {
            var str = num.toString(), decimal = str.indexOf(".");
            return decimal === -1 ? 0 : str.length - decimal - 1;
        },
        _valueMin: function() {
            return this.options.min;
        },
        _valueMax: function() {
            return this.max;
        },
        _refreshRange: function(orientation) {
            if (orientation === "vertical") {
                this.range.css({
                    width: "",
                    left: ""
                });
            }
            if (orientation === "horizontal") {
                this.range.css({
                    height: "",
                    bottom: ""
                });
            }
        },
        _refreshValue: function() {
            var lastValPercent, valPercent, value, valueMin, valueMax, oRange = this.options.range, o = this.options, that = this, animate = !this._animateOff ? o.animate : false, _set = {};
            if (this._hasMultipleValues()) {
                this.handles.each(function(i) {
                    valPercent = (that.values(i) - that._valueMin()) / (that._valueMax() - that._valueMin()) * 100;
                    _set[that.orientation === "horizontal" ? "left" : "bottom"] = valPercent + "%";
                    $(this).stop(1, 1)[animate ? "animate" : "css"](_set, o.animate);
                    if (that.options.range === true) {
                        if (that.orientation === "horizontal") {
                            if (i === 0) {
                                that.range.stop(1, 1)[animate ? "animate" : "css"]({
                                    left: valPercent + "%"
                                }, o.animate);
                            }
                            if (i === 1) {
                                that.range[animate ? "animate" : "css"]({
                                    width: valPercent - lastValPercent + "%"
                                }, {
                                    queue: false,
                                    duration: o.animate
                                });
                            }
                        } else {
                            if (i === 0) {
                                that.range.stop(1, 1)[animate ? "animate" : "css"]({
                                    bottom: valPercent + "%"
                                }, o.animate);
                            }
                            if (i === 1) {
                                that.range[animate ? "animate" : "css"]({
                                    height: valPercent - lastValPercent + "%"
                                }, {
                                    queue: false,
                                    duration: o.animate
                                });
                            }
                        }
                    }
                    lastValPercent = valPercent;
                });
            } else {
                value = this.value();
                valueMin = this._valueMin();
                valueMax = this._valueMax();
                valPercent = valueMax !== valueMin ? (value - valueMin) / (valueMax - valueMin) * 100 : 0;
                _set[this.orientation === "horizontal" ? "left" : "bottom"] = valPercent + "%";
                this.handle.stop(1, 1)[animate ? "animate" : "css"](_set, o.animate);
                if (oRange === "min" && this.orientation === "horizontal") {
                    this.range.stop(1, 1)[animate ? "animate" : "css"]({
                        width: valPercent + "%"
                    }, o.animate);
                }
                if (oRange === "max" && this.orientation === "horizontal") {
                    this.range.stop(1, 1)[animate ? "animate" : "css"]({
                        width: 100 - valPercent + "%"
                    }, o.animate);
                }
                if (oRange === "min" && this.orientation === "vertical") {
                    this.range.stop(1, 1)[animate ? "animate" : "css"]({
                        height: valPercent + "%"
                    }, o.animate);
                }
                if (oRange === "max" && this.orientation === "vertical") {
                    this.range.stop(1, 1)[animate ? "animate" : "css"]({
                        height: 100 - valPercent + "%"
                    }, o.animate);
                }
            }
        },
        _handleEvents: {
            keydown: function(event) {
                var allowed, curVal, newVal, step, index = $(event.target).data("ui-slider-handle-index");
                switch (event.keyCode) {
                  case $.ui.keyCode.HOME:
                  case $.ui.keyCode.END:
                  case $.ui.keyCode.PAGE_UP:
                  case $.ui.keyCode.PAGE_DOWN:
                  case $.ui.keyCode.UP:
                  case $.ui.keyCode.RIGHT:
                  case $.ui.keyCode.DOWN:
                  case $.ui.keyCode.LEFT:
                    event.preventDefault();
                    if (!this._keySliding) {
                        this._keySliding = true;
                        this._addClass($(event.target), null, "ui-state-active");
                        allowed = this._start(event, index);
                        if (allowed === false) {
                            return;
                        }
                    }
                    break;
                }
                step = this.options.step;
                if (this._hasMultipleValues()) {
                    curVal = newVal = this.values(index);
                } else {
                    curVal = newVal = this.value();
                }
                switch (event.keyCode) {
                  case $.ui.keyCode.HOME:
                    newVal = this._valueMin();
                    break;

                  case $.ui.keyCode.END:
                    newVal = this._valueMax();
                    break;

                  case $.ui.keyCode.PAGE_UP:
                    newVal = this._trimAlignValue(curVal + (this._valueMax() - this._valueMin()) / this.numPages);
                    break;

                  case $.ui.keyCode.PAGE_DOWN:
                    newVal = this._trimAlignValue(curVal - (this._valueMax() - this._valueMin()) / this.numPages);
                    break;

                  case $.ui.keyCode.UP:
                  case $.ui.keyCode.RIGHT:
                    if (curVal === this._valueMax()) {
                        return;
                    }
                    newVal = this._trimAlignValue(curVal + step);
                    break;

                  case $.ui.keyCode.DOWN:
                  case $.ui.keyCode.LEFT:
                    if (curVal === this._valueMin()) {
                        return;
                    }
                    newVal = this._trimAlignValue(curVal - step);
                    break;
                }
                this._slide(event, index, newVal);
            },
            keyup: function(event) {
                var index = $(event.target).data("ui-slider-handle-index");
                if (this._keySliding) {
                    this._keySliding = false;
                    this._stop(event, index);
                    this._change(event, index);
                    this._removeClass($(event.target), null, "ui-state-active");
                }
            }
        }
    });
    var widgetsSortable = $.widget("ui.sortable", $.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: false,
        options: {
            appendTo: "parent",
            axis: false,
            connectWith: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            dropOnEmpty: true,
            forcePlaceholderSize: false,
            forceHelperSize: false,
            grid: false,
            handle: false,
            helper: "original",
            items: "> *",
            opacity: false,
            placeholder: false,
            revert: false,
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(x, reference, size) {
            return x >= reference && x < reference + size;
        },
        _isFloating: function(item) {
            return /left|right/.test(item.css("float")) || /inline|table-cell/.test(item.css("display"));
        },
        _create: function() {
            this.containerCache = {};
            this._addClass("ui-sortable");
            this.refresh();
            this.offset = this.element.offset();
            this._mouseInit();
            this._setHandleClassName();
            this.ready = true;
        },
        _setOption: function(key, value) {
            this._super(key, value);
            if (key === "handle") {
                this._setHandleClassName();
            }
        },
        _setHandleClassName: function() {
            var that = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle");
            $.each(this.items, function() {
                that._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle");
            });
        },
        _destroy: function() {
            this._mouseDestroy();
            for (var i = this.items.length - 1; i >= 0; i--) {
                this.items[i].item.removeData(this.widgetName + "-item");
            }
            return this;
        },
        _mouseCapture: function(event, overrideHandle) {
            var currentItem = null, validHandle = false, that = this;
            if (this.reverting) {
                return false;
            }
            if (this.options.disabled || this.options.type === "static") {
                return false;
            }
            this._refreshItems(event);
            $(event.target).parents().each(function() {
                if ($.data(this, that.widgetName + "-item") === that) {
                    currentItem = $(this);
                    return false;
                }
            });
            if ($.data(event.target, that.widgetName + "-item") === that) {
                currentItem = $(event.target);
            }
            if (!currentItem) {
                return false;
            }
            if (this.options.handle && !overrideHandle) {
                $(this.options.handle, currentItem).find("*").addBack().each(function() {
                    if (this === event.target) {
                        validHandle = true;
                    }
                });
                if (!validHandle) {
                    return false;
                }
            }
            this.currentItem = currentItem;
            this._removeCurrentsFromItems();
            return true;
        },
        _mouseStart: function(event, overrideHandle, noActivation) {
            var i, body, o = this.options;
            this.currentContainer = this;
            this.refreshPositions();
            this.helper = this._createHelper(event);
            this._cacheHelperProportions();
            this._cacheMargins();
            this.scrollParent = this.helper.scrollParent();
            this.offset = this.currentItem.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };
            $.extend(this.offset, {
                click: {
                    left: event.pageX - this.offset.left,
                    top: event.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            });
            this.helper.css("position", "absolute");
            this.cssPosition = this.helper.css("position");
            this.originalPosition = this._generatePosition(event);
            this.originalPageX = event.pageX;
            this.originalPageY = event.pageY;
            o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt);
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            };
            if (this.helper[0] !== this.currentItem[0]) {
                this.currentItem.hide();
            }
            this._createPlaceholder();
            if (o.containment) {
                this._setContainment();
            }
            if (o.cursor && o.cursor !== "auto") {
                body = this.document.find("body");
                this.storedCursor = body.css("cursor");
                body.css("cursor", o.cursor);
                this.storedStylesheet = $("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(body);
            }
            if (o.opacity) {
                if (this.helper.css("opacity")) {
                    this._storedOpacity = this.helper.css("opacity");
                }
                this.helper.css("opacity", o.opacity);
            }
            if (o.zIndex) {
                if (this.helper.css("zIndex")) {
                    this._storedZIndex = this.helper.css("zIndex");
                }
                this.helper.css("zIndex", o.zIndex);
            }
            if (this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") {
                this.overflowOffset = this.scrollParent.offset();
            }
            this._trigger("start", event, this._uiHash());
            if (!this._preserveHelperProportions) {
                this._cacheHelperProportions();
            }
            if (!noActivation) {
                for (i = this.containers.length - 1; i >= 0; i--) {
                    this.containers[i]._trigger("activate", event, this._uiHash(this));
                }
            }
            if ($.ui.ddmanager) {
                $.ui.ddmanager.current = this;
            }
            if ($.ui.ddmanager && !o.dropBehaviour) {
                $.ui.ddmanager.prepareOffsets(this, event);
            }
            this.dragging = true;
            this._addClass(this.helper, "ui-sortable-helper");
            this._mouseDrag(event);
            return true;
        },
        _mouseDrag: function(event) {
            var i, item, itemElement, intersection, o = this.options, scrolled = false;
            this.position = this._generatePosition(event);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.lastPositionAbs) {
                this.lastPositionAbs = this.positionAbs;
            }
            if (this.options.scroll) {
                if (this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML") {
                    if (this.overflowOffset.top + this.scrollParent[0].offsetHeight - event.pageY < o.scrollSensitivity) {
                        this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop + o.scrollSpeed;
                    } else if (event.pageY - this.overflowOffset.top < o.scrollSensitivity) {
                        this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop - o.scrollSpeed;
                    }
                    if (this.overflowOffset.left + this.scrollParent[0].offsetWidth - event.pageX < o.scrollSensitivity) {
                        this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft + o.scrollSpeed;
                    } else if (event.pageX - this.overflowOffset.left < o.scrollSensitivity) {
                        this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft - o.scrollSpeed;
                    }
                } else {
                    if (event.pageY - this.document.scrollTop() < o.scrollSensitivity) {
                        scrolled = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed);
                    } else if (this.window.height() - (event.pageY - this.document.scrollTop()) < o.scrollSensitivity) {
                        scrolled = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed);
                    }
                    if (event.pageX - this.document.scrollLeft() < o.scrollSensitivity) {
                        scrolled = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed);
                    } else if (this.window.width() - (event.pageX - this.document.scrollLeft()) < o.scrollSensitivity) {
                        scrolled = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed);
                    }
                }
                if (scrolled !== false && $.ui.ddmanager && !o.dropBehaviour) {
                    $.ui.ddmanager.prepareOffsets(this, event);
                }
            }
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.options.axis || this.options.axis !== "y") {
                this.helper[0].style.left = this.position.left + "px";
            }
            if (!this.options.axis || this.options.axis !== "x") {
                this.helper[0].style.top = this.position.top + "px";
            }
            for (i = this.items.length - 1; i >= 0; i--) {
                item = this.items[i];
                itemElement = item.item[0];
                intersection = this._intersectsWithPointer(item);
                if (!intersection) {
                    continue;
                }
                if (item.instance !== this.currentContainer) {
                    continue;
                }
                if (itemElement !== this.currentItem[0] && this.placeholder[intersection === 1 ? "next" : "prev"]()[0] !== itemElement && !$.contains(this.placeholder[0], itemElement) && (this.options.type === "semi-dynamic" ? !$.contains(this.element[0], itemElement) : true)) {
                    this.direction = intersection === 1 ? "down" : "up";
                    if (this.options.tolerance === "pointer" || this._intersectsWithSides(item)) {
                        this._rearrange(event, item);
                    } else {
                        break;
                    }
                    this._trigger("change", event, this._uiHash());
                    break;
                }
            }
            this._contactContainers(event);
            if ($.ui.ddmanager) {
                $.ui.ddmanager.drag(this, event);
            }
            this._trigger("sort", event, this._uiHash());
            this.lastPositionAbs = this.positionAbs;
            return false;
        },
        _mouseStop: function(event, noPropagation) {
            if (!event) {
                return;
            }
            if ($.ui.ddmanager && !this.options.dropBehaviour) {
                $.ui.ddmanager.drop(this, event);
            }
            if (this.options.revert) {
                var that = this, cur = this.placeholder.offset(), axis = this.options.axis, animation = {};
                if (!axis || axis === "x") {
                    animation.left = cur.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft);
                }
                if (!axis || axis === "y") {
                    animation.top = cur.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop);
                }
                this.reverting = true;
                $(this.helper).animate(animation, parseInt(this.options.revert, 10) || 500, function() {
                    that._clear(event);
                });
            } else {
                this._clear(event, noPropagation);
            }
            return false;
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp(new $.Event("mouseup", {
                    target: null
                }));
                if (this.options.helper === "original") {
                    this.currentItem.css(this._storedCSS);
                    this._removeClass(this.currentItem, "ui-sortable-helper");
                } else {
                    this.currentItem.show();
                }
                for (var i = this.containers.length - 1; i >= 0; i--) {
                    this.containers[i]._trigger("deactivate", null, this._uiHash(this));
                    if (this.containers[i].containerCache.over) {
                        this.containers[i]._trigger("out", null, this._uiHash(this));
                        this.containers[i].containerCache.over = 0;
                    }
                }
            }
            if (this.placeholder) {
                if (this.placeholder[0].parentNode) {
                    this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
                }
                if (this.options.helper !== "original" && this.helper && this.helper[0].parentNode) {
                    this.helper.remove();
                }
                $.extend(this, {
                    helper: null,
                    dragging: false,
                    reverting: false,
                    _noFinalSort: null
                });
                if (this.domPosition.prev) {
                    $(this.domPosition.prev).after(this.currentItem);
                } else {
                    $(this.domPosition.parent).prepend(this.currentItem);
                }
            }
            return this;
        },
        serialize: function(o) {
            var items = this._getItemsAsjQuery(o && o.connected), str = [];
            o = o || {};
            $(items).each(function() {
                var res = ($(o.item || this).attr(o.attribute || "id") || "").match(o.expression || /(.+)[\-=_](.+)/);
                if (res) {
                    str.push((o.key || res[1] + "[]") + "=" + (o.key && o.expression ? res[1] : res[2]));
                }
            });
            if (!str.length && o.key) {
                str.push(o.key + "=");
            }
            return str.join("&");
        },
        toArray: function(o) {
            var items = this._getItemsAsjQuery(o && o.connected), ret = [];
            o = o || {};
            items.each(function() {
                ret.push($(o.item || this).attr(o.attribute || "id") || "");
            });
            return ret;
        },
        _intersectsWith: function(item) {
            var x1 = this.positionAbs.left, x2 = x1 + this.helperProportions.width, y1 = this.positionAbs.top, y2 = y1 + this.helperProportions.height, l = item.left, r = l + item.width, t = item.top, b = t + item.height, dyClick = this.offset.click.top, dxClick = this.offset.click.left, isOverElementHeight = this.options.axis === "x" || y1 + dyClick > t && y1 + dyClick < b, isOverElementWidth = this.options.axis === "y" || x1 + dxClick > l && x1 + dxClick < r, isOverElement = isOverElementHeight && isOverElementWidth;
            if (this.options.tolerance === "pointer" || this.options.forcePointerForContainers || this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > item[this.floating ? "width" : "height"]) {
                return isOverElement;
            } else {
                return l < x1 + this.helperProportions.width / 2 && x2 - this.helperProportions.width / 2 < r && t < y1 + this.helperProportions.height / 2 && y2 - this.helperProportions.height / 2 < b;
            }
        },
        _intersectsWithPointer: function(item) {
            var verticalDirection, horizontalDirection, isOverElementHeight = this.options.axis === "x" || this._isOverAxis(this.positionAbs.top + this.offset.click.top, item.top, item.height), isOverElementWidth = this.options.axis === "y" || this._isOverAxis(this.positionAbs.left + this.offset.click.left, item.left, item.width), isOverElement = isOverElementHeight && isOverElementWidth;
            if (!isOverElement) {
                return false;
            }
            verticalDirection = this._getDragVerticalDirection();
            horizontalDirection = this._getDragHorizontalDirection();
            return this.floating ? horizontalDirection === "right" || verticalDirection === "down" ? 2 : 1 : verticalDirection && (verticalDirection === "down" ? 2 : 1);
        },
        _intersectsWithSides: function(item) {
            var isOverBottomHalf = this._isOverAxis(this.positionAbs.top + this.offset.click.top, item.top + item.height / 2, item.height), isOverRightHalf = this._isOverAxis(this.positionAbs.left + this.offset.click.left, item.left + item.width / 2, item.width), verticalDirection = this._getDragVerticalDirection(), horizontalDirection = this._getDragHorizontalDirection();
            if (this.floating && horizontalDirection) {
                return horizontalDirection === "right" && isOverRightHalf || horizontalDirection === "left" && !isOverRightHalf;
            } else {
                return verticalDirection && (verticalDirection === "down" && isOverBottomHalf || verticalDirection === "up" && !isOverBottomHalf);
            }
        },
        _getDragVerticalDirection: function() {
            var delta = this.positionAbs.top - this.lastPositionAbs.top;
            return delta !== 0 && (delta > 0 ? "down" : "up");
        },
        _getDragHorizontalDirection: function() {
            var delta = this.positionAbs.left - this.lastPositionAbs.left;
            return delta !== 0 && (delta > 0 ? "right" : "left");
        },
        refresh: function(event) {
            this._refreshItems(event);
            this._setHandleClassName();
            this.refreshPositions();
            return this;
        },
        _connectWith: function() {
            var options = this.options;
            return options.connectWith.constructor === String ? [ options.connectWith ] : options.connectWith;
        },
        _getItemsAsjQuery: function(connected) {
            var i, j, cur, inst, items = [], queries = [], connectWith = this._connectWith();
            if (connectWith && connected) {
                for (i = connectWith.length - 1; i >= 0; i--) {
                    cur = $(connectWith[i], this.document[0]);
                    for (j = cur.length - 1; j >= 0; j--) {
                        inst = $.data(cur[j], this.widgetFullName);
                        if (inst && inst !== this && !inst.options.disabled) {
                            queries.push([ $.isFunction(inst.options.items) ? inst.options.items.call(inst.element) : $(inst.options.items, inst.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), inst ]);
                        }
                    }
                }
            }
            queries.push([ $.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : $(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this ]);
            function addItems() {
                items.push(this);
            }
            for (i = queries.length - 1; i >= 0; i--) {
                queries[i][0].each(addItems);
            }
            return $(items);
        },
        _removeCurrentsFromItems: function() {
            var list = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = $.grep(this.items, function(item) {
                for (var j = 0; j < list.length; j++) {
                    if (list[j] === item.item[0]) {
                        return false;
                    }
                }
                return true;
            });
        },
        _refreshItems: function(event) {
            this.items = [];
            this.containers = [ this ];
            var i, j, cur, inst, targetData, _queries, item, queriesLength, items = this.items, queries = [ [ $.isFunction(this.options.items) ? this.options.items.call(this.element[0], event, {
                item: this.currentItem
            }) : $(this.options.items, this.element), this ] ], connectWith = this._connectWith();
            if (connectWith && this.ready) {
                for (i = connectWith.length - 1; i >= 0; i--) {
                    cur = $(connectWith[i], this.document[0]);
                    for (j = cur.length - 1; j >= 0; j--) {
                        inst = $.data(cur[j], this.widgetFullName);
                        if (inst && inst !== this && !inst.options.disabled) {
                            queries.push([ $.isFunction(inst.options.items) ? inst.options.items.call(inst.element[0], event, {
                                item: this.currentItem
                            }) : $(inst.options.items, inst.element), inst ]);
                            this.containers.push(inst);
                        }
                    }
                }
            }
            for (i = queries.length - 1; i >= 0; i--) {
                targetData = queries[i][1];
                _queries = queries[i][0];
                for (j = 0, queriesLength = _queries.length; j < queriesLength; j++) {
                    item = $(_queries[j]);
                    item.data(this.widgetName + "-item", targetData);
                    items.push({
                        item: item,
                        instance: targetData,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    });
                }
            }
        },
        refreshPositions: function(fast) {
            this.floating = this.items.length ? this.options.axis === "x" || this._isFloating(this.items[0].item) : false;
            if (this.offsetParent && this.helper) {
                this.offset.parent = this._getParentOffset();
            }
            var i, item, t, p;
            for (i = this.items.length - 1; i >= 0; i--) {
                item = this.items[i];
                if (item.instance !== this.currentContainer && this.currentContainer && item.item[0] !== this.currentItem[0]) {
                    continue;
                }
                t = this.options.toleranceElement ? $(this.options.toleranceElement, item.item) : item.item;
                if (!fast) {
                    item.width = t.outerWidth();
                    item.height = t.outerHeight();
                }
                p = t.offset();
                item.left = p.left;
                item.top = p.top;
            }
            if (this.options.custom && this.options.custom.refreshContainers) {
                this.options.custom.refreshContainers.call(this);
            } else {
                for (i = this.containers.length - 1; i >= 0; i--) {
                    p = this.containers[i].element.offset();
                    this.containers[i].containerCache.left = p.left;
                    this.containers[i].containerCache.top = p.top;
                    this.containers[i].containerCache.width = this.containers[i].element.outerWidth();
                    this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                }
            }
            return this;
        },
        _createPlaceholder: function(that) {
            that = that || this;
            var className, o = that.options;
            if (!o.placeholder || o.placeholder.constructor === String) {
                className = o.placeholder;
                o.placeholder = {
                    element: function() {
                        var nodeName = that.currentItem[0].nodeName.toLowerCase(), element = $("<" + nodeName + ">", that.document[0]);
                        that._addClass(element, "ui-sortable-placeholder", className || that.currentItem[0].className)._removeClass(element, "ui-sortable-helper");
                        if (nodeName === "tbody") {
                            that._createTrPlaceholder(that.currentItem.find("tr").eq(0), $("<tr>", that.document[0]).appendTo(element));
                        } else if (nodeName === "tr") {
                            that._createTrPlaceholder(that.currentItem, element);
                        } else if (nodeName === "img") {
                            element.attr("src", that.currentItem.attr("src"));
                        }
                        if (!className) {
                            element.css("visibility", "hidden");
                        }
                        return element;
                    },
                    update: function(container, p) {
                        if (className && !o.forcePlaceholderSize) {
                            return;
                        }
                        if (!p.height()) {
                            p.height(that.currentItem.innerHeight() - parseInt(that.currentItem.css("paddingTop") || 0, 10) - parseInt(that.currentItem.css("paddingBottom") || 0, 10));
                        }
                        if (!p.width()) {
                            p.width(that.currentItem.innerWidth() - parseInt(that.currentItem.css("paddingLeft") || 0, 10) - parseInt(that.currentItem.css("paddingRight") || 0, 10));
                        }
                    }
                };
            }
            that.placeholder = $(o.placeholder.element.call(that.element, that.currentItem));
            that.currentItem.after(that.placeholder);
            o.placeholder.update(that, that.placeholder);
        },
        _createTrPlaceholder: function(sourceTr, targetTr) {
            var that = this;
            sourceTr.children().each(function() {
                $("<td>&#160;</td>", that.document[0]).attr("colspan", $(this).attr("colspan") || 1).appendTo(targetTr);
            });
        },
        _contactContainers: function(event) {
            var i, j, dist, itemWithLeastDistance, posProperty, sizeProperty, cur, nearBottom, floating, axis, innermostContainer = null, innermostIndex = null;
            for (i = this.containers.length - 1; i >= 0; i--) {
                if ($.contains(this.currentItem[0], this.containers[i].element[0])) {
                    continue;
                }
                if (this._intersectsWith(this.containers[i].containerCache)) {
                    if (innermostContainer && $.contains(this.containers[i].element[0], innermostContainer.element[0])) {
                        continue;
                    }
                    innermostContainer = this.containers[i];
                    innermostIndex = i;
                } else {
                    if (this.containers[i].containerCache.over) {
                        this.containers[i]._trigger("out", event, this._uiHash(this));
                        this.containers[i].containerCache.over = 0;
                    }
                }
            }
            if (!innermostContainer) {
                return;
            }
            if (this.containers.length === 1) {
                if (!this.containers[innermostIndex].containerCache.over) {
                    this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
                    this.containers[innermostIndex].containerCache.over = 1;
                }
            } else {
                dist = 1e4;
                itemWithLeastDistance = null;
                floating = innermostContainer.floating || this._isFloating(this.currentItem);
                posProperty = floating ? "left" : "top";
                sizeProperty = floating ? "width" : "height";
                axis = floating ? "pageX" : "pageY";
                for (j = this.items.length - 1; j >= 0; j--) {
                    if (!$.contains(this.containers[innermostIndex].element[0], this.items[j].item[0])) {
                        continue;
                    }
                    if (this.items[j].item[0] === this.currentItem[0]) {
                        continue;
                    }
                    cur = this.items[j].item.offset()[posProperty];
                    nearBottom = false;
                    if (event[axis] - cur > this.items[j][sizeProperty] / 2) {
                        nearBottom = true;
                    }
                    if (Math.abs(event[axis] - cur) < dist) {
                        dist = Math.abs(event[axis] - cur);
                        itemWithLeastDistance = this.items[j];
                        this.direction = nearBottom ? "up" : "down";
                    }
                }
                if (!itemWithLeastDistance && !this.options.dropOnEmpty) {
                    return;
                }
                if (this.currentContainer === this.containers[innermostIndex]) {
                    if (!this.currentContainer.containerCache.over) {
                        this.containers[innermostIndex]._trigger("over", event, this._uiHash());
                        this.currentContainer.containerCache.over = 1;
                    }
                    return;
                }
                itemWithLeastDistance ? this._rearrange(event, itemWithLeastDistance, null, true) : this._rearrange(event, null, this.containers[innermostIndex].element, true);
                this._trigger("change", event, this._uiHash());
                this.containers[innermostIndex]._trigger("change", event, this._uiHash(this));
                this.currentContainer = this.containers[innermostIndex];
                this.options.placeholder.update(this.currentContainer, this.placeholder);
                this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
                this.containers[innermostIndex].containerCache.over = 1;
            }
        },
        _createHelper: function(event) {
            var o = this.options, helper = $.isFunction(o.helper) ? $(o.helper.apply(this.element[0], [ event, this.currentItem ])) : o.helper === "clone" ? this.currentItem.clone() : this.currentItem;
            if (!helper.parents("body").length) {
                $(o.appendTo !== "parent" ? o.appendTo : this.currentItem[0].parentNode)[0].appendChild(helper[0]);
            }
            if (helper[0] === this.currentItem[0]) {
                this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                };
            }
            if (!helper[0].style.width || o.forceHelperSize) {
                helper.width(this.currentItem.width());
            }
            if (!helper[0].style.height || o.forceHelperSize) {
                helper.height(this.currentItem.height());
            }
            return helper;
        },
        _adjustOffsetFromHelper: function(obj) {
            if (typeof obj === "string") {
                obj = obj.split(" ");
            }
            if ($.isArray(obj)) {
                obj = {
                    left: +obj[0],
                    top: +obj[1] || 0
                };
            }
            if ("left" in obj) {
                this.offset.click.left = obj.left + this.margins.left;
            }
            if ("right" in obj) {
                this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
            }
            if ("top" in obj) {
                this.offset.click.top = obj.top + this.margins.top;
            }
            if ("bottom" in obj) {
                this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
            }
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var po = this.offsetParent.offset();
            if (this.cssPosition === "absolute" && this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) {
                po.left += this.scrollParent.scrollLeft();
                po.top += this.scrollParent.scrollTop();
            }
            if (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && $.ui.ie) {
                po = {
                    top: 0,
                    left: 0
                };
            }
            return {
                top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if (this.cssPosition === "relative") {
                var p = this.currentItem.position();
                return {
                    top: p.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: p.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                };
            } else {
                return {
                    top: 0,
                    left: 0
                };
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var ce, co, over, o = this.options;
            if (o.containment === "parent") {
                o.containment = this.helper[0].parentNode;
            }
            if (o.containment === "document" || o.containment === "window") {
                this.containment = [ 0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, o.containment === "document" ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, (o.containment === "document" ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ];
            }
            if (!/^(document|window|parent)$/.test(o.containment)) {
                ce = $(o.containment)[0];
                co = $(o.containment).offset();
                over = $(ce).css("overflow") !== "hidden";
                this.containment = [ co.left + (parseInt($(ce).css("borderLeftWidth"), 10) || 0) + (parseInt($(ce).css("paddingLeft"), 10) || 0) - this.margins.left, co.top + (parseInt($(ce).css("borderTopWidth"), 10) || 0) + (parseInt($(ce).css("paddingTop"), 10) || 0) - this.margins.top, co.left + (over ? Math.max(ce.scrollWidth, ce.offsetWidth) : ce.offsetWidth) - (parseInt($(ce).css("borderLeftWidth"), 10) || 0) - (parseInt($(ce).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, co.top + (over ? Math.max(ce.scrollHeight, ce.offsetHeight) : ce.offsetHeight) - (parseInt($(ce).css("borderTopWidth"), 10) || 0) - (parseInt($(ce).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top ];
            }
        },
        _convertPositionTo: function(d, pos) {
            if (!pos) {
                pos = this.position;
            }
            var mod = d === "absolute" ? 1 : -1, scroll = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = /(html|body)/i.test(scroll[0].tagName);
            return {
                top: pos.top + this.offset.relative.top * mod + this.offset.parent.top * mod - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : scrollIsRootNode ? 0 : scroll.scrollTop()) * mod,
                left: pos.left + this.offset.relative.left * mod + this.offset.parent.left * mod - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft()) * mod
            };
        },
        _generatePosition: function(event) {
            var top, left, o = this.options, pageX = event.pageX, pageY = event.pageY, scroll = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && $.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = /(html|body)/i.test(scroll[0].tagName);
            if (this.cssPosition === "relative" && !(this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0])) {
                this.offset.relative = this._getRelativeOffset();
            }
            if (this.originalPosition) {
                if (this.containment) {
                    if (event.pageX - this.offset.click.left < this.containment[0]) {
                        pageX = this.containment[0] + this.offset.click.left;
                    }
                    if (event.pageY - this.offset.click.top < this.containment[1]) {
                        pageY = this.containment[1] + this.offset.click.top;
                    }
                    if (event.pageX - this.offset.click.left > this.containment[2]) {
                        pageX = this.containment[2] + this.offset.click.left;
                    }
                    if (event.pageY - this.offset.click.top > this.containment[3]) {
                        pageY = this.containment[3] + this.offset.click.top;
                    }
                }
                if (o.grid) {
                    top = this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1];
                    pageY = this.containment ? top - this.offset.click.top >= this.containment[1] && top - this.offset.click.top <= this.containment[3] ? top : top - this.offset.click.top >= this.containment[1] ? top - o.grid[1] : top + o.grid[1] : top;
                    left = this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0];
                    pageX = this.containment ? left - this.offset.click.left >= this.containment[0] && left - this.offset.click.left <= this.containment[2] ? left : left - this.offset.click.left >= this.containment[0] ? left - o.grid[0] : left + o.grid[0] : left;
                }
            }
            return {
                top: pageY - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : scrollIsRootNode ? 0 : scroll.scrollTop()),
                left: pageX - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft())
            };
        },
        _rearrange: function(event, i, a, hardRefresh) {
            a ? a[0].appendChild(this.placeholder[0]) : i.item[0].parentNode.insertBefore(this.placeholder[0], this.direction === "down" ? i.item[0] : i.item[0].nextSibling);
            this.counter = this.counter ? ++this.counter : 1;
            var counter = this.counter;
            this._delay(function() {
                if (counter === this.counter) {
                    this.refreshPositions(!hardRefresh);
                }
            });
        },
        _clear: function(event, noPropagation) {
            this.reverting = false;
            var i, delayedTriggers = [];
            if (!this._noFinalSort && this.currentItem.parent().length) {
                this.placeholder.before(this.currentItem);
            }
            this._noFinalSort = null;
            if (this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS) {
                    if (this._storedCSS[i] === "auto" || this._storedCSS[i] === "static") {
                        this._storedCSS[i] = "";
                    }
                }
                this.currentItem.css(this._storedCSS);
                this._removeClass(this.currentItem, "ui-sortable-helper");
            } else {
                this.currentItem.show();
            }
            if (this.fromOutside && !noPropagation) {
                delayedTriggers.push(function(event) {
                    this._trigger("receive", event, this._uiHash(this.fromOutside));
                });
            }
            if ((this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !noPropagation) {
                delayedTriggers.push(function(event) {
                    this._trigger("update", event, this._uiHash());
                });
            }
            if (this !== this.currentContainer) {
                if (!noPropagation) {
                    delayedTriggers.push(function(event) {
                        this._trigger("remove", event, this._uiHash());
                    });
                    delayedTriggers.push(function(c) {
                        return function(event) {
                            c._trigger("receive", event, this._uiHash(this));
                        };
                    }.call(this, this.currentContainer));
                    delayedTriggers.push(function(c) {
                        return function(event) {
                            c._trigger("update", event, this._uiHash(this));
                        };
                    }.call(this, this.currentContainer));
                }
            }
            function delayEvent(type, instance, container) {
                return function(event) {
                    container._trigger(type, event, instance._uiHash(instance));
                };
            }
            for (i = this.containers.length - 1; i >= 0; i--) {
                if (!noPropagation) {
                    delayedTriggers.push(delayEvent("deactivate", this, this.containers[i]));
                }
                if (this.containers[i].containerCache.over) {
                    delayedTriggers.push(delayEvent("out", this, this.containers[i]));
                    this.containers[i].containerCache.over = 0;
                }
            }
            if (this.storedCursor) {
                this.document.find("body").css("cursor", this.storedCursor);
                this.storedStylesheet.remove();
            }
            if (this._storedOpacity) {
                this.helper.css("opacity", this._storedOpacity);
            }
            if (this._storedZIndex) {
                this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex);
            }
            this.dragging = false;
            if (!noPropagation) {
                this._trigger("beforeStop", event, this._uiHash());
            }
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
            if (!this.cancelHelperRemoval) {
                if (this.helper[0] !== this.currentItem[0]) {
                    this.helper.remove();
                }
                this.helper = null;
            }
            if (!noPropagation) {
                for (i = 0; i < delayedTriggers.length; i++) {
                    delayedTriggers[i].call(this, event);
                }
                this._trigger("stop", event, this._uiHash());
            }
            this.fromOutside = false;
            return !this.cancelHelperRemoval;
        },
        _trigger: function() {
            if ($.Widget.prototype._trigger.apply(this, arguments) === false) {
                this.cancel();
            }
        },
        _uiHash: function(_inst) {
            var inst = _inst || this;
            return {
                helper: inst.helper,
                placeholder: inst.placeholder || $([]),
                position: inst.position,
                originalPosition: inst.originalPosition,
                offset: inst.positionAbs,
                item: inst.currentItem,
                sender: _inst ? _inst.element : null
            };
        }
    });
    function spinnerModifer(fn) {
        return function() {
            var previous = this.element.val();
            fn.apply(this, arguments);
            this._refresh();
            if (previous !== this.element.val()) {
                this._trigger("change");
            }
        };
    }
    $.widget("ui.spinner", {
        version: "1.12.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            classes: {
                "ui-spinner": "ui-corner-all",
                "ui-spinner-down": "ui-corner-br",
                "ui-spinner-up": "ui-corner-tr"
            },
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: true,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max);
            this._setOption("min", this.options.min);
            this._setOption("step", this.options.step);
            if (this.value() !== "") {
                this._value(this.element.val(), true);
            }
            this._draw();
            this._on(this._events);
            this._refresh();
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete");
                }
            });
        },
        _getCreateOptions: function() {
            var options = this._super();
            var element = this.element;
            $.each([ "min", "max", "step" ], function(i, option) {
                var value = element.attr(option);
                if (value != null && value.length) {
                    options[option] = value;
                }
            });
            return options;
        },
        _events: {
            keydown: function(event) {
                if (this._start(event) && this._keydown(event)) {
                    event.preventDefault();
                }
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val();
            },
            blur: function(event) {
                if (this.cancelBlur) {
                    delete this.cancelBlur;
                    return;
                }
                this._stop();
                this._refresh();
                if (this.previous !== this.element.val()) {
                    this._trigger("change", event);
                }
            },
            mousewheel: function(event, delta) {
                if (!delta) {
                    return;
                }
                if (!this.spinning && !this._start(event)) {
                    return false;
                }
                this._spin((delta > 0 ? 1 : -1) * this.options.step, event);
                clearTimeout(this.mousewheelTimer);
                this.mousewheelTimer = this._delay(function() {
                    if (this.spinning) {
                        this._stop(event);
                    }
                }, 100);
                event.preventDefault();
            },
            "mousedown .ui-spinner-button": function(event) {
                var previous;
                previous = this.element[0] === $.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val();
                function checkFocus() {
                    var isActive = this.element[0] === $.ui.safeActiveElement(this.document[0]);
                    if (!isActive) {
                        this.element.trigger("focus");
                        this.previous = previous;
                        this._delay(function() {
                            this.previous = previous;
                        });
                    }
                }
                event.preventDefault();
                checkFocus.call(this);
                this.cancelBlur = true;
                this._delay(function() {
                    delete this.cancelBlur;
                    checkFocus.call(this);
                });
                if (this._start(event) === false) {
                    return;
                }
                this._repeat(null, $(event.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, event);
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(event) {
                if (!$(event.currentTarget).hasClass("ui-state-active")) {
                    return;
                }
                if (this._start(event) === false) {
                    return false;
                }
                this._repeat(null, $(event.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, event);
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _enhance: function() {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>");
        },
        _draw: function() {
            this._enhance();
            this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content");
            this._addClass("ui-spinner-input");
            this.element.attr("role", "spinbutton");
            this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", true).button({
                classes: {
                    "ui-button": ""
                }
            });
            this._removeClass(this.buttons, "ui-corner-all");
            this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up");
            this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down");
            this.buttons.first().button({
                icon: this.options.icons.up,
                showLabel: false
            });
            this.buttons.last().button({
                icon: this.options.icons.down,
                showLabel: false
            });
            if (this.buttons.height() > Math.ceil(this.uiSpinner.height() * .5) && this.uiSpinner.height() > 0) {
                this.uiSpinner.height(this.uiSpinner.height());
            }
        },
        _keydown: function(event) {
            var options = this.options, keyCode = $.ui.keyCode;
            switch (event.keyCode) {
              case keyCode.UP:
                this._repeat(null, 1, event);
                return true;

              case keyCode.DOWN:
                this._repeat(null, -1, event);
                return true;

              case keyCode.PAGE_UP:
                this._repeat(null, options.page, event);
                return true;

              case keyCode.PAGE_DOWN:
                this._repeat(null, -options.page, event);
                return true;
            }
            return false;
        },
        _start: function(event) {
            if (!this.spinning && this._trigger("start", event) === false) {
                return false;
            }
            if (!this.counter) {
                this.counter = 1;
            }
            this.spinning = true;
            return true;
        },
        _repeat: function(i, steps, event) {
            i = i || 500;
            clearTimeout(this.timer);
            this.timer = this._delay(function() {
                this._repeat(40, steps, event);
            }, i);
            this._spin(steps * this.options.step, event);
        },
        _spin: function(step, event) {
            var value = this.value() || 0;
            if (!this.counter) {
                this.counter = 1;
            }
            value = this._adjustValue(value + step * this._increment(this.counter));
            if (!this.spinning || this._trigger("spin", event, {
                value: value
            }) !== false) {
                this._value(value);
                this.counter++;
            }
        },
        _increment: function(i) {
            var incremental = this.options.incremental;
            if (incremental) {
                return $.isFunction(incremental) ? incremental(i) : Math.floor(i * i * i / 5e4 - i * i / 500 + 17 * i / 200 + 1);
            }
            return 1;
        },
        _precision: function() {
            var precision = this._precisionOf(this.options.step);
            if (this.options.min !== null) {
                precision = Math.max(precision, this._precisionOf(this.options.min));
            }
            return precision;
        },
        _precisionOf: function(num) {
            var str = num.toString(), decimal = str.indexOf(".");
            return decimal === -1 ? 0 : str.length - decimal - 1;
        },
        _adjustValue: function(value) {
            var base, aboveMin, options = this.options;
            base = options.min !== null ? options.min : 0;
            aboveMin = value - base;
            aboveMin = Math.round(aboveMin / options.step) * options.step;
            value = base + aboveMin;
            value = parseFloat(value.toFixed(this._precision()));
            if (options.max !== null && value > options.max) {
                return options.max;
            }
            if (options.min !== null && value < options.min) {
                return options.min;
            }
            return value;
        },
        _stop: function(event) {
            if (!this.spinning) {
                return;
            }
            clearTimeout(this.timer);
            clearTimeout(this.mousewheelTimer);
            this.counter = 0;
            this.spinning = false;
            this._trigger("stop", event);
        },
        _setOption: function(key, value) {
            var prevValue, first, last;
            if (key === "culture" || key === "numberFormat") {
                prevValue = this._parse(this.element.val());
                this.options[key] = value;
                this.element.val(this._format(prevValue));
                return;
            }
            if (key === "max" || key === "min" || key === "step") {
                if (typeof value === "string") {
                    value = this._parse(value);
                }
            }
            if (key === "icons") {
                first = this.buttons.first().find(".ui-icon");
                this._removeClass(first, null, this.options.icons.up);
                this._addClass(first, null, value.up);
                last = this.buttons.last().find(".ui-icon");
                this._removeClass(last, null, this.options.icons.down);
                this._addClass(last, null, value.down);
            }
            this._super(key, value);
        },
        _setOptionDisabled: function(value) {
            this._super(value);
            this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!value);
            this.element.prop("disabled", !!value);
            this.buttons.button(value ? "disable" : "enable");
        },
        _setOptions: spinnerModifer(function(options) {
            this._super(options);
        }),
        _parse: function(val) {
            if (typeof val === "string" && val !== "") {
                val = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(val, 10, this.options.culture) : +val;
            }
            return val === "" || isNaN(val) ? null : val;
        },
        _format: function(value) {
            if (value === "") {
                return "";
            }
            return window.Globalize && this.options.numberFormat ? Globalize.format(value, this.options.numberFormat, this.options.culture) : value;
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            });
        },
        isValid: function() {
            var value = this.value();
            if (value === null) {
                return false;
            }
            return value === this._adjustValue(value);
        },
        _value: function(value, allowAny) {
            var parsed;
            if (value !== "") {
                parsed = this._parse(value);
                if (parsed !== null) {
                    if (!allowAny) {
                        parsed = this._adjustValue(parsed);
                    }
                    value = this._format(parsed);
                }
            }
            this.element.val(value);
            this._refresh();
        },
        _destroy: function() {
            this.element.prop("disabled", false).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow");
            this.uiSpinner.replaceWith(this.element);
        },
        stepUp: spinnerModifer(function(steps) {
            this._stepUp(steps);
        }),
        _stepUp: function(steps) {
            if (this._start()) {
                this._spin((steps || 1) * this.options.step);
                this._stop();
            }
        },
        stepDown: spinnerModifer(function(steps) {
            this._stepDown(steps);
        }),
        _stepDown: function(steps) {
            if (this._start()) {
                this._spin((steps || 1) * -this.options.step);
                this._stop();
            }
        },
        pageUp: spinnerModifer(function(pages) {
            this._stepUp((pages || 1) * this.options.page);
        }),
        pageDown: spinnerModifer(function(pages) {
            this._stepDown((pages || 1) * this.options.page);
        }),
        value: function(newVal) {
            if (!arguments.length) {
                return this._parse(this.element.val());
            }
            spinnerModifer(this._value).call(this, newVal);
        },
        widget: function() {
            return this.uiSpinner;
        }
    });
    if ($.uiBackCompat !== false) {
        $.widget("ui.spinner", $.ui.spinner, {
            _enhance: function() {
                this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            },
            _uiSpinnerHtml: function() {
                return "<span>";
            },
            _buttonHtml: function() {
                return "<a></a><a></a>";
            }
        });
    }
    var widgetsSpinner = $.ui.spinner;
    $.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: false,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function() {
            var rhash = /#.*$/;
            return function(anchor) {
                var anchorUrl, locationUrl;
                anchorUrl = anchor.href.replace(rhash, "");
                locationUrl = location.href.replace(rhash, "");
                try {
                    anchorUrl = decodeURIComponent(anchorUrl);
                } catch (error) {}
                try {
                    locationUrl = decodeURIComponent(locationUrl);
                } catch (error) {}
                return anchor.hash.length > 1 && anchorUrl === locationUrl;
            };
        }(),
        _create: function() {
            var that = this, options = this.options;
            this.running = false;
            this._addClass("ui-tabs", "ui-widget ui-widget-content");
            this._toggleClass("ui-tabs-collapsible", null, options.collapsible);
            this._processTabs();
            options.active = this._initialActive();
            if ($.isArray(options.disabled)) {
                options.disabled = $.unique(options.disabled.concat($.map(this.tabs.filter(".ui-state-disabled"), function(li) {
                    return that.tabs.index(li);
                }))).sort();
            }
            if (this.options.active !== false && this.anchors.length) {
                this.active = this._findActive(options.active);
            } else {
                this.active = $();
            }
            this._refresh();
            if (this.active.length) {
                this.load(options.active);
            }
        },
        _initialActive: function() {
            var active = this.options.active, collapsible = this.options.collapsible, locationHash = location.hash.substring(1);
            if (active === null) {
                if (locationHash) {
                    this.tabs.each(function(i, tab) {
                        if ($(tab).attr("aria-controls") === locationHash) {
                            active = i;
                            return false;
                        }
                    });
                }
                if (active === null) {
                    active = this.tabs.index(this.tabs.filter(".ui-tabs-active"));
                }
                if (active === null || active === -1) {
                    active = this.tabs.length ? 0 : false;
                }
            }
            if (active !== false) {
                active = this.tabs.index(this.tabs.eq(active));
                if (active === -1) {
                    active = collapsible ? false : 0;
                }
            }
            if (!collapsible && active === false && this.anchors.length) {
                active = 0;
            }
            return active;
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: !this.active.length ? $() : this._getPanelForTab(this.active)
            };
        },
        _tabKeydown: function(event) {
            var focusedTab = $($.ui.safeActiveElement(this.document[0])).closest("li"), selectedIndex = this.tabs.index(focusedTab), goingForward = true;
            if (this._handlePageNav(event)) {
                return;
            }
            switch (event.keyCode) {
              case $.ui.keyCode.RIGHT:
              case $.ui.keyCode.DOWN:
                selectedIndex++;
                break;

              case $.ui.keyCode.UP:
              case $.ui.keyCode.LEFT:
                goingForward = false;
                selectedIndex--;
                break;

              case $.ui.keyCode.END:
                selectedIndex = this.anchors.length - 1;
                break;

              case $.ui.keyCode.HOME:
                selectedIndex = 0;
                break;

              case $.ui.keyCode.SPACE:
                event.preventDefault();
                clearTimeout(this.activating);
                this._activate(selectedIndex);
                return;

              case $.ui.keyCode.ENTER:
                event.preventDefault();
                clearTimeout(this.activating);
                this._activate(selectedIndex === this.options.active ? false : selectedIndex);
                return;

              default:
                return;
            }
            event.preventDefault();
            clearTimeout(this.activating);
            selectedIndex = this._focusNextTab(selectedIndex, goingForward);
            if (!event.ctrlKey && !event.metaKey) {
                focusedTab.attr("aria-selected", "false");
                this.tabs.eq(selectedIndex).attr("aria-selected", "true");
                this.activating = this._delay(function() {
                    this.option("active", selectedIndex);
                }, this.delay);
            }
        },
        _panelKeydown: function(event) {
            if (this._handlePageNav(event)) {
                return;
            }
            if (event.ctrlKey && event.keyCode === $.ui.keyCode.UP) {
                event.preventDefault();
                this.active.trigger("focus");
            }
        },
        _handlePageNav: function(event) {
            if (event.altKey && event.keyCode === $.ui.keyCode.PAGE_UP) {
                this._activate(this._focusNextTab(this.options.active - 1, false));
                return true;
            }
            if (event.altKey && event.keyCode === $.ui.keyCode.PAGE_DOWN) {
                this._activate(this._focusNextTab(this.options.active + 1, true));
                return true;
            }
        },
        _findNextTab: function(index, goingForward) {
            var lastTabIndex = this.tabs.length - 1;
            function constrain() {
                if (index > lastTabIndex) {
                    index = 0;
                }
                if (index < 0) {
                    index = lastTabIndex;
                }
                return index;
            }
            while ($.inArray(constrain(), this.options.disabled) !== -1) {
                index = goingForward ? index + 1 : index - 1;
            }
            return index;
        },
        _focusNextTab: function(index, goingForward) {
            index = this._findNextTab(index, goingForward);
            this.tabs.eq(index).trigger("focus");
            return index;
        },
        _setOption: function(key, value) {
            if (key === "active") {
                this._activate(value);
                return;
            }
            this._super(key, value);
            if (key === "collapsible") {
                this._toggleClass("ui-tabs-collapsible", null, value);
                if (!value && this.options.active === false) {
                    this._activate(0);
                }
            }
            if (key === "event") {
                this._setupEvents(value);
            }
            if (key === "heightStyle") {
                this._setupHeightStyle(value);
            }
        },
        _sanitizeSelector: function(hash) {
            return hash ? hash.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
        },
        refresh: function() {
            var options = this.options, lis = this.tablist.children(":has(a[href])");
            options.disabled = $.map(lis.filter(".ui-state-disabled"), function(tab) {
                return lis.index(tab);
            });
            this._processTabs();
            if (options.active === false || !this.anchors.length) {
                options.active = false;
                this.active = $();
            } else if (this.active.length && !$.contains(this.tablist[0], this.active[0])) {
                if (this.tabs.length === options.disabled.length) {
                    options.active = false;
                    this.active = $();
                } else {
                    this._activate(this._findNextTab(Math.max(0, options.active - 1), false));
                }
            } else {
                options.active = this.tabs.index(this.active);
            }
            this._refresh();
        },
        _refresh: function() {
            this._setOptionDisabled(this.options.disabled);
            this._setupEvents(this.options.event);
            this._setupHeightStyle(this.options.heightStyle);
            this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            });
            this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            });
            if (!this.active.length) {
                this.tabs.eq(0).attr("tabIndex", 0);
            } else {
                this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                });
                this._addClass(this.active, "ui-tabs-active", "ui-state-active");
                this._getPanelForTab(this.active).show().attr({
                    "aria-hidden": "false"
                });
            }
        },
        _processTabs: function() {
            var that = this, prevTabs = this.tabs, prevAnchors = this.anchors, prevPanels = this.panels;
            this.tablist = this._getList().attr("role", "tablist");
            this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header");
            this.tablist.on("mousedown" + this.eventNamespace, "> li", function(event) {
                if ($(this).is(".ui-state-disabled")) {
                    event.preventDefault();
                }
            }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
                if ($(this).closest("li").is(".ui-state-disabled")) {
                    this.blur();
                }
            });
            this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            });
            this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default");
            this.anchors = this.tabs.map(function() {
                return $("a", this)[0];
            }).attr({
                role: "presentation",
                tabIndex: -1
            });
            this._addClass(this.anchors, "ui-tabs-anchor");
            this.panels = $();
            this.anchors.each(function(i, anchor) {
                var selector, panel, panelId, anchorId = $(anchor).uniqueId().attr("id"), tab = $(anchor).closest("li"), originalAriaControls = tab.attr("aria-controls");
                if (that._isLocal(anchor)) {
                    selector = anchor.hash;
                    panelId = selector.substring(1);
                    panel = that.element.find(that._sanitizeSelector(selector));
                } else {
                    panelId = tab.attr("aria-controls") || $({}).uniqueId()[0].id;
                    selector = "#" + panelId;
                    panel = that.element.find(selector);
                    if (!panel.length) {
                        panel = that._createPanel(panelId);
                        panel.insertAfter(that.panels[i - 1] || that.tablist);
                    }
                    panel.attr("aria-live", "polite");
                }
                if (panel.length) {
                    that.panels = that.panels.add(panel);
                }
                if (originalAriaControls) {
                    tab.data("ui-tabs-aria-controls", originalAriaControls);
                }
                tab.attr({
                    "aria-controls": panelId,
                    "aria-labelledby": anchorId
                });
                panel.attr("aria-labelledby", anchorId);
            });
            this.panels.attr("role", "tabpanel");
            this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content");
            if (prevTabs) {
                this._off(prevTabs.not(this.tabs));
                this._off(prevAnchors.not(this.anchors));
                this._off(prevPanels.not(this.panels));
            }
        },
        _getList: function() {
            return this.tablist || this.element.find("ol, ul").eq(0);
        },
        _createPanel: function(id) {
            return $("<div>").attr("id", id).data("ui-tabs-destroy", true);
        },
        _setOptionDisabled: function(disabled) {
            var currentItem, li, i;
            if ($.isArray(disabled)) {
                if (!disabled.length) {
                    disabled = false;
                } else if (disabled.length === this.anchors.length) {
                    disabled = true;
                }
            }
            for (i = 0; li = this.tabs[i]; i++) {
                currentItem = $(li);
                if (disabled === true || $.inArray(i, disabled) !== -1) {
                    currentItem.attr("aria-disabled", "true");
                    this._addClass(currentItem, null, "ui-state-disabled");
                } else {
                    currentItem.removeAttr("aria-disabled");
                    this._removeClass(currentItem, null, "ui-state-disabled");
                }
            }
            this.options.disabled = disabled;
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, disabled === true);
        },
        _setupEvents: function(event) {
            var events = {};
            if (event) {
                $.each(event.split(" "), function(index, eventName) {
                    events[eventName] = "_eventHandler";
                });
            }
            this._off(this.anchors.add(this.tabs).add(this.panels));
            this._on(true, this.anchors, {
                click: function(event) {
                    event.preventDefault();
                }
            });
            this._on(this.anchors, events);
            this._on(this.tabs, {
                keydown: "_tabKeydown"
            });
            this._on(this.panels, {
                keydown: "_panelKeydown"
            });
            this._focusable(this.tabs);
            this._hoverable(this.tabs);
        },
        _setupHeightStyle: function(heightStyle) {
            var maxHeight, parent = this.element.parent();
            if (heightStyle === "fill") {
                maxHeight = parent.height();
                maxHeight -= this.element.outerHeight() - this.element.height();
                this.element.siblings(":visible").each(function() {
                    var elem = $(this), position = elem.css("position");
                    if (position === "absolute" || position === "fixed") {
                        return;
                    }
                    maxHeight -= elem.outerHeight(true);
                });
                this.element.children().not(this.panels).each(function() {
                    maxHeight -= $(this).outerHeight(true);
                });
                this.panels.each(function() {
                    $(this).height(Math.max(0, maxHeight - $(this).innerHeight() + $(this).height()));
                }).css("overflow", "auto");
            } else if (heightStyle === "auto") {
                maxHeight = 0;
                this.panels.each(function() {
                    maxHeight = Math.max(maxHeight, $(this).height("").height());
                }).height(maxHeight);
            }
        },
        _eventHandler: function(event) {
            var options = this.options, active = this.active, anchor = $(event.currentTarget), tab = anchor.closest("li"), clickedIsActive = tab[0] === active[0], collapsing = clickedIsActive && options.collapsible, toShow = collapsing ? $() : this._getPanelForTab(tab), toHide = !active.length ? $() : this._getPanelForTab(active), eventData = {
                oldTab: active,
                oldPanel: toHide,
                newTab: collapsing ? $() : tab,
                newPanel: toShow
            };
            event.preventDefault();
            if (tab.hasClass("ui-state-disabled") || tab.hasClass("ui-tabs-loading") || this.running || clickedIsActive && !options.collapsible || this._trigger("beforeActivate", event, eventData) === false) {
                return;
            }
            options.active = collapsing ? false : this.tabs.index(tab);
            this.active = clickedIsActive ? $() : tab;
            if (this.xhr) {
                this.xhr.abort();
            }
            if (!toHide.length && !toShow.length) {
                $.error("jQuery UI Tabs: Mismatching fragment identifier.");
            }
            if (toShow.length) {
                this.load(this.tabs.index(tab), event);
            }
            this._toggle(event, eventData);
        },
        _toggle: function(event, eventData) {
            var that = this, toShow = eventData.newPanel, toHide = eventData.oldPanel;
            this.running = true;
            function complete() {
                that.running = false;
                that._trigger("activate", event, eventData);
            }
            function show() {
                that._addClass(eventData.newTab.closest("li"), "ui-tabs-active", "ui-state-active");
                if (toShow.length && that.options.show) {
                    that._show(toShow, that.options.show, complete);
                } else {
                    toShow.show();
                    complete();
                }
            }
            if (toHide.length && this.options.hide) {
                this._hide(toHide, this.options.hide, function() {
                    that._removeClass(eventData.oldTab.closest("li"), "ui-tabs-active", "ui-state-active");
                    show();
                });
            } else {
                this._removeClass(eventData.oldTab.closest("li"), "ui-tabs-active", "ui-state-active");
                toHide.hide();
                show();
            }
            toHide.attr("aria-hidden", "true");
            eventData.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            });
            if (toShow.length && toHide.length) {
                eventData.oldTab.attr("tabIndex", -1);
            } else if (toShow.length) {
                this.tabs.filter(function() {
                    return $(this).attr("tabIndex") === 0;
                }).attr("tabIndex", -1);
            }
            toShow.attr("aria-hidden", "false");
            eventData.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            });
        },
        _activate: function(index) {
            var anchor, active = this._findActive(index);
            if (active[0] === this.active[0]) {
                return;
            }
            if (!active.length) {
                active = this.active;
            }
            anchor = active.find(".ui-tabs-anchor")[0];
            this._eventHandler({
                target: anchor,
                currentTarget: anchor,
                preventDefault: $.noop
            });
        },
        _findActive: function(index) {
            return index === false ? $() : this.tabs.eq(index);
        },
        _getIndex: function(index) {
            if (typeof index === "string") {
                index = this.anchors.index(this.anchors.filter("[href$='" + $.ui.escapeSelector(index) + "']"));
            }
            return index;
        },
        _destroy: function() {
            if (this.xhr) {
                this.xhr.abort();
            }
            this.tablist.removeAttr("role").off(this.eventNamespace);
            this.anchors.removeAttr("role tabIndex").removeUniqueId();
            this.tabs.add(this.panels).each(function() {
                if ($.data(this, "ui-tabs-destroy")) {
                    $(this).remove();
                } else {
                    $(this).removeAttr("role tabIndex " + "aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");
                }
            });
            this.tabs.each(function() {
                var li = $(this), prev = li.data("ui-tabs-aria-controls");
                if (prev) {
                    li.attr("aria-controls", prev).removeData("ui-tabs-aria-controls");
                } else {
                    li.removeAttr("aria-controls");
                }
            });
            this.panels.show();
            if (this.options.heightStyle !== "content") {
                this.panels.css("height", "");
            }
        },
        enable: function(index) {
            var disabled = this.options.disabled;
            if (disabled === false) {
                return;
            }
            if (index === undefined) {
                disabled = false;
            } else {
                index = this._getIndex(index);
                if ($.isArray(disabled)) {
                    disabled = $.map(disabled, function(num) {
                        return num !== index ? num : null;
                    });
                } else {
                    disabled = $.map(this.tabs, function(li, num) {
                        return num !== index ? num : null;
                    });
                }
            }
            this._setOptionDisabled(disabled);
        },
        disable: function(index) {
            var disabled = this.options.disabled;
            if (disabled === true) {
                return;
            }
            if (index === undefined) {
                disabled = true;
            } else {
                index = this._getIndex(index);
                if ($.inArray(index, disabled) !== -1) {
                    return;
                }
                if ($.isArray(disabled)) {
                    disabled = $.merge([ index ], disabled).sort();
                } else {
                    disabled = [ index ];
                }
            }
            this._setOptionDisabled(disabled);
        },
        load: function(index, event) {
            index = this._getIndex(index);
            var that = this, tab = this.tabs.eq(index), anchor = tab.find(".ui-tabs-anchor"), panel = this._getPanelForTab(tab), eventData = {
                tab: tab,
                panel: panel
            }, complete = function(jqXHR, status) {
                if (status === "abort") {
                    that.panels.stop(false, true);
                }
                that._removeClass(tab, "ui-tabs-loading");
                panel.removeAttr("aria-busy");
                if (jqXHR === that.xhr) {
                    delete that.xhr;
                }
            };
            if (this._isLocal(anchor[0])) {
                return;
            }
            this.xhr = $.ajax(this._ajaxSettings(anchor, event, eventData));
            if (this.xhr && this.xhr.statusText !== "canceled") {
                this._addClass(tab, "ui-tabs-loading");
                panel.attr("aria-busy", "true");
                this.xhr.done(function(response, status, jqXHR) {
                    setTimeout(function() {
                        panel.html(response);
                        that._trigger("load", event, eventData);
                        complete(jqXHR, status);
                    }, 1);
                }).fail(function(jqXHR, status) {
                    setTimeout(function() {
                        complete(jqXHR, status);
                    }, 1);
                });
            }
        },
        _ajaxSettings: function(anchor, event, eventData) {
            var that = this;
            return {
                url: anchor.attr("href").replace(/#.*$/, ""),
                beforeSend: function(jqXHR, settings) {
                    return that._trigger("beforeLoad", event, $.extend({
                        jqXHR: jqXHR,
                        ajaxSettings: settings
                    }, eventData));
                }
            };
        },
        _getPanelForTab: function(tab) {
            var id = $(tab).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + id));
        }
    });
    if ($.uiBackCompat !== false) {
        $.widget("ui.tabs", $.ui.tabs, {
            _processTabs: function() {
                this._superApply(arguments);
                this._addClass(this.tabs, "ui-tab");
            }
        });
    }
    var widgetsTabs = $.ui.tabs;
    $.widget("ui.tooltip", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-tooltip": "ui-corner-all ui-widget-shadow"
            },
            content: function() {
                var title = $(this).attr("title") || "";
                return $("<a>").text(title).html();
            },
            hide: true,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: true,
            track: false,
            close: null,
            open: null
        },
        _addDescribedBy: function(elem, id) {
            var describedby = (elem.attr("aria-describedby") || "").split(/\s+/);
            describedby.push(id);
            elem.data("ui-tooltip-id", id).attr("aria-describedby", $.trim(describedby.join(" ")));
        },
        _removeDescribedBy: function(elem) {
            var id = elem.data("ui-tooltip-id"), describedby = (elem.attr("aria-describedby") || "").split(/\s+/), index = $.inArray(id, describedby);
            if (index !== -1) {
                describedby.splice(index, 1);
            }
            elem.removeData("ui-tooltip-id");
            describedby = $.trim(describedby.join(" "));
            if (describedby) {
                elem.attr("aria-describedby", describedby);
            } else {
                elem.removeAttr("aria-describedby");
            }
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            });
            this.tooltips = {};
            this.parents = {};
            this.liveRegion = $("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body);
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible");
            this.disabledTitles = $([]);
        },
        _setOption: function(key, value) {
            var that = this;
            this._super(key, value);
            if (key === "content") {
                $.each(this.tooltips, function(id, tooltipData) {
                    that._updateContent(tooltipData.element);
                });
            }
        },
        _setOptionDisabled: function(value) {
            this[value ? "_disable" : "_enable"]();
        },
        _disable: function() {
            var that = this;
            $.each(this.tooltips, function(id, tooltipData) {
                var event = $.Event("blur");
                event.target = event.currentTarget = tooltipData.element[0];
                that.close(event, true);
            });
            this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
                var element = $(this);
                if (element.is("[title]")) {
                    return element.data("ui-tooltip-title", element.attr("title")).removeAttr("title");
                }
            }));
        },
        _enable: function() {
            this.disabledTitles.each(function() {
                var element = $(this);
                if (element.data("ui-tooltip-title")) {
                    element.attr("title", element.data("ui-tooltip-title"));
                }
            });
            this.disabledTitles = $([]);
        },
        open: function(event) {
            var that = this, target = $(event ? event.target : this.element).closest(this.options.items);
            if (!target.length || target.data("ui-tooltip-id")) {
                return;
            }
            if (target.attr("title")) {
                target.data("ui-tooltip-title", target.attr("title"));
            }
            target.data("ui-tooltip-open", true);
            if (event && event.type === "mouseover") {
                target.parents().each(function() {
                    var parent = $(this), blurEvent;
                    if (parent.data("ui-tooltip-open")) {
                        blurEvent = $.Event("blur");
                        blurEvent.target = blurEvent.currentTarget = this;
                        that.close(blurEvent, true);
                    }
                    if (parent.attr("title")) {
                        parent.uniqueId();
                        that.parents[this.id] = {
                            element: this,
                            title: parent.attr("title")
                        };
                        parent.attr("title", "");
                    }
                });
            }
            this._registerCloseHandlers(event, target);
            this._updateContent(target, event);
        },
        _updateContent: function(target, event) {
            var content, contentOption = this.options.content, that = this, eventType = event ? event.type : null;
            if (typeof contentOption === "string" || contentOption.nodeType || contentOption.jquery) {
                return this._open(event, target, contentOption);
            }
            content = contentOption.call(target[0], function(response) {
                that._delay(function() {
                    if (!target.data("ui-tooltip-open")) {
                        return;
                    }
                    if (event) {
                        event.type = eventType;
                    }
                    this._open(event, target, response);
                });
            });
            if (content) {
                this._open(event, target, content);
            }
        },
        _open: function(event, target, content) {
            var tooltipData, tooltip, delayedShow, a11yContent, positionOption = $.extend({}, this.options.position);
            if (!content) {
                return;
            }
            tooltipData = this._find(target);
            if (tooltipData) {
                tooltipData.tooltip.find(".ui-tooltip-content").html(content);
                return;
            }
            if (target.is("[title]")) {
                if (event && event.type === "mouseover") {
                    target.attr("title", "");
                } else {
                    target.removeAttr("title");
                }
            }
            tooltipData = this._tooltip(target);
            tooltip = tooltipData.tooltip;
            this._addDescribedBy(target, tooltip.attr("id"));
            tooltip.find(".ui-tooltip-content").html(content);
            this.liveRegion.children().hide();
            a11yContent = $("<div>").html(tooltip.find(".ui-tooltip-content").html());
            a11yContent.removeAttr("name").find("[name]").removeAttr("name");
            a11yContent.removeAttr("id").find("[id]").removeAttr("id");
            a11yContent.appendTo(this.liveRegion);
            function position(event) {
                positionOption.of = event;
                if (tooltip.is(":hidden")) {
                    return;
                }
                tooltip.position(positionOption);
            }
            if (this.options.track && event && /^mouse/.test(event.type)) {
                this._on(this.document, {
                    mousemove: position
                });
                position(event);
            } else {
                tooltip.position($.extend({
                    of: target
                }, this.options.position));
            }
            tooltip.hide();
            this._show(tooltip, this.options.show);
            if (this.options.track && this.options.show && this.options.show.delay) {
                delayedShow = this.delayedShow = setInterval(function() {
                    if (tooltip.is(":visible")) {
                        position(positionOption.of);
                        clearInterval(delayedShow);
                    }
                }, $.fx.interval);
            }
            this._trigger("open", event, {
                tooltip: tooltip
            });
        },
        _registerCloseHandlers: function(event, target) {
            var events = {
                keyup: function(event) {
                    if (event.keyCode === $.ui.keyCode.ESCAPE) {
                        var fakeEvent = $.Event(event);
                        fakeEvent.currentTarget = target[0];
                        this.close(fakeEvent, true);
                    }
                }
            };
            if (target[0] !== this.element[0]) {
                events.remove = function() {
                    this._removeTooltip(this._find(target).tooltip);
                };
            }
            if (!event || event.type === "mouseover") {
                events.mouseleave = "close";
            }
            if (!event || event.type === "focusin") {
                events.focusout = "close";
            }
            this._on(true, target, events);
        },
        close: function(event) {
            var tooltip, that = this, target = $(event ? event.currentTarget : this.element), tooltipData = this._find(target);
            if (!tooltipData) {
                target.removeData("ui-tooltip-open");
                return;
            }
            tooltip = tooltipData.tooltip;
            if (tooltipData.closing) {
                return;
            }
            clearInterval(this.delayedShow);
            if (target.data("ui-tooltip-title") && !target.attr("title")) {
                target.attr("title", target.data("ui-tooltip-title"));
            }
            this._removeDescribedBy(target);
            tooltipData.hiding = true;
            tooltip.stop(true);
            this._hide(tooltip, this.options.hide, function() {
                that._removeTooltip($(this));
            });
            target.removeData("ui-tooltip-open");
            this._off(target, "mouseleave focusout keyup");
            if (target[0] !== this.element[0]) {
                this._off(target, "remove");
            }
            this._off(this.document, "mousemove");
            if (event && event.type === "mouseleave") {
                $.each(this.parents, function(id, parent) {
                    $(parent.element).attr("title", parent.title);
                    delete that.parents[id];
                });
            }
            tooltipData.closing = true;
            this._trigger("close", event, {
                tooltip: tooltip
            });
            if (!tooltipData.hiding) {
                tooltipData.closing = false;
            }
        },
        _tooltip: function(element) {
            var tooltip = $("<div>").attr("role", "tooltip"), content = $("<div>").appendTo(tooltip), id = tooltip.uniqueId().attr("id");
            this._addClass(content, "ui-tooltip-content");
            this._addClass(tooltip, "ui-tooltip", "ui-widget ui-widget-content");
            tooltip.appendTo(this._appendTo(element));
            return this.tooltips[id] = {
                element: element,
                tooltip: tooltip
            };
        },
        _find: function(target) {
            var id = target.data("ui-tooltip-id");
            return id ? this.tooltips[id] : null;
        },
        _removeTooltip: function(tooltip) {
            tooltip.remove();
            delete this.tooltips[tooltip.attr("id")];
        },
        _appendTo: function(target) {
            var element = target.closest(".ui-front, dialog");
            if (!element.length) {
                element = this.document[0].body;
            }
            return element;
        },
        _destroy: function() {
            var that = this;
            $.each(this.tooltips, function(id, tooltipData) {
                var event = $.Event("blur"), element = tooltipData.element;
                event.target = event.currentTarget = element[0];
                that.close(event, true);
                $("#" + id).remove();
                if (element.data("ui-tooltip-title")) {
                    if (!element.attr("title")) {
                        element.attr("title", element.data("ui-tooltip-title"));
                    }
                    element.removeData("ui-tooltip-title");
                }
            });
            this.liveRegion.remove();
        }
    });
    if ($.uiBackCompat !== false) {
        $.widget("ui.tooltip", $.ui.tooltip, {
            options: {
                tooltipClass: null
            },
            _tooltip: function() {
                var tooltipData = this._superApply(arguments);
                if (this.options.tooltipClass) {
                    tooltipData.tooltip.addClass(this.options.tooltipClass);
                }
                return tooltipData;
            }
        });
    }
    var widgetsTooltip = $.ui.tooltip;
});