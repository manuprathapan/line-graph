(function(compId) {
        "use strict";
        var _ = null,
            y = true,
            n = false,
            x9 = 'break-word',
            x54 = 'Rectangle3Copy5',
            x66 = '-9px',
            x71 = '135px',
            x53 = '309px',
            x41 = 'rgb(0, 0, 0)',
            x42 = '142px',
            e33 = '${EllipseCopy}',
            cl = 'clip',
            x64 = 'Text2',
            e39 = '${Rectangle2Copy2}',
            x82 = '-2px',
            e26 = '${Group}',
            x59 = 'rgba(70,79,82,1.00)',
            e30 = '${Rectangle2Copy}',
            x17 = 'rgba(255,255,255,1.00)',
            e31 = '${line_2Copy2}',
            x4 = 'horizontal',
            i = 'none',
            x23 = 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)',
            x69 = 'Text2Copy2',
            e34 = '${EllipseCopy9}',
            e35 = '${EllipseCopy5}',
            x51 = '226px',
            e22 = '${Rectangle}',
            x40 = 'Rectangle3Copy',
            x5 = 'rgba(211,211,211,1.00)',
            x20 = 'rgba(255,255,255,1)',
            x15 = '400',
            x75 = 'Text2Copy3',
            xc = 'rgba(0,0,0,1)',
            zy = 'scaleY',
            x55 = '395px',
            e38 = '${baseline}',
            x1 = '5.0.0',
            x62 = '17px',
            e27 = '${line_4}',
            x83 = 'nowrap',
            x81 = '-18px',
            zx = 'scaleX',
            x3 = 'both',
            x63 = '21px',
            x79 = 'Text2Copy4',
            e25 = '${EllipseCopy8}',
            e24 = '${Rectangle2}',
            x67 = '185px',
            x77 = '38px',
            x47 = 'rgba(70,79,82,1)',
            x16 = 'none solid rgb(0, 0, 0)',
            x44 = '2px',
            x = 'text',
            x58 = '4px',
            x68 = '26px',
            x19 = 'solid',
            m = 'rect',
            e37 = '${Rectangle2Copy3}',
            x74 = '87px',
            h = 'height',
            lf = 'left',
            x7 = '16',
            x78 = '28px',
            p = 'px',
            o = 'opacity',
            x60 = '14px',
            e36 = '${XAXIS}',
            x61 = '229px',
            x57 = '455px',
            e21 = '${Text3}',
            x56 = 'Base_line',
            x52 = 'Rectangle3Copy4',
            x8 = 'Arial, Helvetica, sans-serif',
            x2 = '5.0.0.375',
            l = 'normal',
            x84 = 'Text4',
            x50 = 'Rectangle3Copy3',
            e29 = '${line_2}',
            x49 = '54px',
            x48 = 'Rectangle3Copy2',
            x43 = '0px',
            w = 'width',
            x46 = 'auto',
            x45 = '10px',
            x86 = '250px',
            x18 = 'rgba(230,80,151,1.00)',
            e28 = '${EllipseCopy7}',
            e32 = '${line_3}',
            x72 = 'Text2Copy';

        var s10 = "2014",
            s12 = "2016",
            s14 = "(mkr)",
            s85 = "100",
            s6 = "2013",
            s13 = "2017",
            s70 = "20",
            s76 = "60",
            s73 = "40",
            s65 = "0",
            s80 = "80",
            s11 = "2015";
        var im = 'images/',
            aud = 'media/',
            vid = 'media/',
            js = 'js/',
            fonts = {},
            opts = {
                'gAudioPreloadPreference': 'auto',
                'gVideoPreloadPreference': 'auto'
            },
            resources = [],
            scripts = [],
            symbols = {
                "stage": {
                    v: x1,
                    mv: x1,
                    b: x2,
                    stf: x3,
                    cg: x4,
                    rI: n,
                    cn: {
                        dom: [{
                                id: 'Rectangle',
                                t: m,
                                r: ['42px', '29px', '455px', '236px', 'auto', 'auto'],
                                cl: 'rect(638.181640625px 455px 236px 0px)',
                                cu: 'pointer',
                                f: [x5],
                                s: [1, xc, i]
                            }, {
                                id: 'baseline',
                                symbolName: 'baseline',
                                t: m,
                                r: ['42px', '255', '455', '14', 'auto', 'auto'],
                                cl: 'rect(15.45458984375px 455px 14px 0px)'
                            }, {
                                id: 'XAXIS',
                                symbolName: 'XAXIS',
                                t: m,
                                r: ['25px', '28', '17', '250', 'auto', 'auto'],
                                o: 0
                            }, {
                                id: 'Group',
                                t: 'group',
                                r: ['76px', '275px', '386', '22', 'auto', 'auto'],
                                o: 0,
                                c: [{
                                    id: 'Text',
                                    t: x,
                                    r: ['0px', '0px', '47px', '22px', 'auto', 'auto'],
                                    text: s6,
                                    n: [x8, [x7, p], xc, l, i, "", x9, l]
                                }, {
                                    id: 'TextCopy',
                                    t: x,
                                    r: ['88px', '0px', '47px', '22px', 'auto', 'auto'],
                                    text: s10,
                                    n: [x8, [x7, p], xc, l, i, "", x9, l]
                                }, {
                                    id: 'TextCopy2',
                                    t: x,
                                    r: ['171px', '0px', '47px', '22px', 'auto', 'auto'],
                                    text: s11,
                                    n: [x8, [x7, p], xc, l, i, "", x9, l]
                                }, {
                                    id: 'TextCopy3',
                                    t: x,
                                    r: ['255px', '0px', '47px', '22px', 'auto', 'auto'],
                                    text: s12,
                                    n: [x8, [x7, p], xc, l, i, "", x9, l]
                                }, {
                                    id: 'TextCopy4',
                                    t: x,
                                    r: ['339px', '0px', '47px', '22px', 'auto', 'auto'],
                                    text: s13,
                                    n: [x8, [x7, p], xc, l, i, "", x9, l]
                                }]
                            }, {
                                id: 'Text3',
                                t: x,
                                r: ['8px', '3px', '47px', '21px', 'auto', 'auto'],
                                o: 0,
                                text: s14,
                                align: "left",
                                n: [x8, [x7, p], xc, x15, x16, l, x9, l]
                            }, {
                                id: 'line_2',
                                t: m,
                                r: ['42px', '125px', '0px', '1px', 'auto', 'auto'],
                                cu: 'pointer',
                                f: [x17],
                                s: [1, "rgb(0, 0, 0)", i]
                            }, {
                                id: 'line_2Copy2',
                                t: m,
                                r: ['42px', '76px', '0px', '1px', 'auto', 'auto'],
                                cu: 'pointer',
                                f: [x17],
                                s: [1, "rgb(0, 0, 0)", i]
                            }, {
                                id: 'line_3',
                                t: m,
                                r: ['42px', '173px', '0px', '1px', 'auto', 'auto'],
                                cu: 'pointer',
                                f: [x17],
                                s: [1, "rgb(0, 0, 0)", i]
                            }, {
                                id: 'line_4',
                                t: m,
                                r: ['42px', '220px', '-5px', '1px', 'auto', 'auto'],
                                cu: 'pointer',
                                f: [x17],
                                s: [1, "rgb(0, 0, 0)", i]
                            }, {
                                id: 'EllipseCopy',
                                t: 'ellipse',
                                r: ['88px', '128px', '15px', '15px', 'auto', 'auto'],
                                br: ["50%", "50%", "50%", "50%"],
                                f: [x18],
                                s: [2, "rgba(255,255,255,1.00)", x19],
                                tf: [
                                    [],
                                    [],
                                    [],
                                    ['0', '0']
                                ]
                            } //['87px', '195px', '15px', '15px', 'auto', 'auto'] pink circle1
                            , {
                                id: 'EllipseCopy9',
                                t: 'ellipse',
                                r: ['430px', '20px', '15px', '15px', 'auto', 'auto'],
                                br: ["50%", "50%", "50%", "50%"],
                                f: [x18],
                                s: [2, "rgba(255,255,255,1.00)", x19],
                                tf: [
                                    [],
                                    [],
                                    [],
                                    ['0', '0']
                                ]
                            } //pink circle5
                            , {
                                id: 'Rectangle2',
                                t: m,
                                r: ['91px', '144px', '5px', '0px', 'auto', 'auto'],
                                br: ["10px", "10px", "10px", "10px 10px"],
                                f: [x18],
                                s: [2, "rgb(255, 255, 255)", i],
                                tf: [
                                    [],
                                    ['-135'],
                                    [],
                                    [],
                                    ['50%', '0%']
                                ]
                            } //pink line 1
                            , {
                                id: 'Rectangle2Copy',
                                t: m,
                                r: ['190px', '50px', '5px', '0px', 'auto', 'auto'],
                                br: ["10px", "10px", "10px", "10px 10px"],
                                f: [x18],
                                s: [2, "rgb(255, 255, 255)", i],
                                tf: [
                                    [],
                                    ['276'],
                                    [],
                                    [],
                                    ['50%', '0%']
                                ]
                            } //['183px', '183px', '5px', '0px', 'auto', 'auto'] //pink line 2
                            , {
                                id: 'Rectangle2Copy3',
                                t: m,
                                r: ['348px', '68px', '5px', '0px', 'auto', 'auto'],
                                br: ["10px", "10px", "10px", "10px 10px"],
                                f: [x18],
                                s: [2, "rgb(255, 255, 255)", i],
                                tf: [
                                    [],
                                    ['246'],
                                    [],
                                    [],
                                    ['50%', '0%']
                                ]
                            } //pink line 4
                            , {
                                id: 'Rectangle2Copy2',
                                t: m,
                                r: ['261px', '56px', '5px', '0px', 'auto', 'auto'],
                                br: ["10px", "10px", "10px", "10px 10px"],
                                f: [x18],
                                s: [2, "rgb(255, 255, 255)", i],
                                tf: [
                                    [],
                                    ['277'],
                                    [],
                                    [],
                                    ['50%', '0%']
                                ]
                            } //pink line 3
                            , {
                                id: 'EllipseCopy5',
                                t: 'ellipse',
                                r: ['262px', '48px', '15px', '15px', 'auto', 'auto'],
                                br: ["50%", "50%", "50%", "50%"],
                                f: [x18],
                                s: [2, "rgba(255,255,255,1.00)", x19],
                                tf: [
                                    [],
                                    [],
                                    [],
                                    ['0', '0']
                                ]
                            } //pink circle 3
                            , {
                                id: 'EllipseCopy7',
                                t: 'ellipse',
                                r: ['175px', '42px', '15px', '15px', 'auto', 'auto'],
                                br: ["50%", "50%", "50%", "50%"],
                                f: [x18],
                                s: [2, "rgba(255,255,255,1.00)", x19],
                                tf: [
                                    [],
                                    [],
                                    [],
                                    ['0', '0']
                                ]
                            } //pink circle 2
                            , {
                                id: 'EllipseCopy8',
                                t: 'ellipse',
                                r: ['340px', '56px', '15px', '15px', 'auto', 'auto'],
                                br: ["50%", "50%", "50%", "50%"],
                                f: [x18],
                                s: [2, "rgba(255,255,255,1.00)", x19],
                                tf: [
                                    [],
                                    [],
                                    [],
                                    ['0', '0']
                                ]
                            } //pink circle4
                        ],
                        style: {
                            '${Stage}': {
                                isStage: true,
                                r: ['null', 'null', '510px', '300px', 'auto', 'auto'],
                                overflow: 'visible',
                                f: [x20]
                            }
                        }
                    },
                    tt: {
                        d: 6250,
                        a: y,
                        l: {
                            "play": 2021
                        },
                        data: [
                            ["eid36", o, 1000, 500, "easeOutExpo", e21, '0', '1'],
                            ["eid23", cl, 500, 1000, "easeOutExpo", e22, [238.181640625, 455, 236, 0],
                                [0, 455, 236, 0], {
                                    vt: x23
                                }
                            ],
                            ["eid198", h, 2250, 750, "easeOutExpo", e24, '0px', '125px'],
                            ["eid214", zx, 4848, 402, "easeOutElastic", e25, '0', '1'],
                            ["eid19", o, 0, 500, "linear", e26, '0', '1'],
                            ["eid32", w, 1250, 750, "easeOutExpo", e27, '0px', '455px'],
                            ["eid200", zx, 2840, 410, "easeOutElastic", e28, '0', '1'],
                            ["eid34", w, 1250, 750, "easeOutExpo", e29, '0px', '455px'],
                            ["eid206", h, 3250, 750, "easeOutExpo", e30, '0px', '86px'],
                            ["eid173", w, 1250, 750, "easeOutExpo", e31, '0px', '455px'],
                            ["eid30", w, 1250, 750, "easeOutExpo", e32, '0px', '455px'],
                            ["eid192", zx, 2039, 250, "easeOutElastic", e33, '0', '1'],
                            ["eid216", zy, 4848, 402, "easeOutElastic", e25, '0', '1'],
                            ["eid222", zx, 5873, 377, "easeOutElastic", e34, '0', '1'],
                            ["eid202", zy, 2840, 410, "easeOutElastic", e28, '0', '1'],
                            ["eid208", zx, 3865, 385, "easeOutElastic", e35, '0', '1'],
                            ["eid194", zy, 2039, 250, "easeOutElastic", e33, '0', '1'],
                            ["eid28", o, 1000, 500, "easeOutExpo", e36, '0', '1'],
                            ["eid224", zy, 5873, 377, "easeOutElastic", e34, '0', '1'],
                            ["eid220", h, 5250, 750, "easeOutExpo", e37, '0px', '95px'],
                            ["eid21", cl, 500, 500, "linear", e38, [15.45458984375, 455, 14, 0],
                                [0, 455, 14, 0], {
                                    vt: x23
                                }
                            ],
                            ["eid210", zy, 3865, 385, "easeOutElastic", e35, '0', '1'],
                            ["eid212", h, 4250, 750, "easeOutExpo", e39, '0px', '85px']
                        ]
                    }
                },
                "baseline": {
                    v: x1,
                    mv: x1,
                    b: x2,
                    stf: i,
                    cg: i,
                    rI: n,
                    cn: {
                        dom: [{
                            t: m,
                            id: x40,
                            s: [0, x41, i],
                            r: [x42, x43, x44, x45, x46, x46],
                            f: [x47]
                        }, {
                            t: m,
                            id: x48,
                            s: [0, x41, i],
                            r: [x49, x43, x44, x45, x46, x46],
                            f: [x47]
                        }, {
                            t: m,
                            id: x50,
                            s: [0, x41, i],
                            r: [x51, x43, x44, x45, x46, x46],
                            f: [x47]
                        }, {
                            t: m,
                            id: x52,
                            s: [0, x41, i],
                            r: [x53, x43, x44, x45, x46, x46],
                            f: [x47]
                        }, {
                            t: m,
                            id: x54,
                            s: [0, x41, i],
                            r: [x55, x43, x44, x45, x46, x46],
                            f: [x47]
                        }, {
                            t: m,
                            id: x56,
                            s: [0, x41, i],
                            r: [x43, x45, x57, x58, x46, x46],
                            f: [x59]
                        }],
                        style: {
                            '${symbolSelector}': {
                                r: [_, _, x57, x60]
                            }
                        }
                    },
                    tt: {
                        d: 0,
                        a: y,
                        data: []
                    }
                },
                "XAXIS": {
                    v: x1,
                    mv: x1,
                    b: x2,
                    stf: i,
                    cg: i,
                    rI: n,
                    cn: {
                        dom: [{
                            r: [x43, x61, x62, x63, x46, x46],
                            n: [x8, [16, p], xc, x15, x16, l, x9, l],
                            id: x64,
                            text: s65,
                            align: lf,
                            t: x
                        }, {
                            r: [x66, x67, x68, x63, x46, x46],
                            n: [x8, [16, p], xc, x15, x16, l, x9, l],
                            id: x69,
                            text: s70,
                            align: lf,
                            t: x
                        }, {
                            r: [x66, x71, x68, x63, x46, x46],
                            n: [x8, [16, p], xc, x15, x16, l, x9, l],
                            id: x72,
                            text: s73,
                            align: lf,
                            t: x
                        }, {
                            r: [x66, x74, x68, x63, x46, x46],
                            n: [x8, [16, p], xc, x15, x16, l, x9, l],
                            id: x75,
                            text: s76,
                            align: lf,
                            t: x
                        }, {
                            r: [x66, x77, x68, x78, x46, x46],
                            n: [x8, [16, p], xc, x15, x16, l, x9, l],
                            id: x79,
                            text: s80,
                            align: lf,
                            t: x
                        }, {
                            r: [x81, x82, x46, x46, x46, x46],
                            n: [x8, [16, p], xc, x15, x16, l, x9, x83],
                            id: x84,
                            text: s85,
                            align: lf,
                            t: x
                        }, {
                            r: [x43, x61, x62, x63, x46, x46],
                            n: [x8, [16, p], xc, x15, x16, l, x9, l],
                            id: x64,
                            text: s65,
                            align: lf,
                            t: x
                        }],
                        style: {
                            '${symbolSelector}': {
                                r: [_, _, x62, x86]
                            }
                        }
                    },
                    tt: {
                        d: 0,
                        a: y,
                        data: []
                    }
                }
            };
        AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);
    }

)("EDGE-6614146");
(function($, Edge, compId) {
        var Composition = Edge.Composition,
            Symbol = Edge.Symbol;
        Edge.registerEventBinding(compId, function($) {
            //Edge symbol: 'stage'
            (function(symbolName) {
                Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
                    sym.play("play");
                });
                //Edge binding end
                Symbol.bindElementAction(compId, symbolName, "${Stage}", "", function(sym, e) {
                    sym.play("play");
                });
                //Edge binding end
            })("stage");
            //Edge symbol end:'stage'
            //=========================================================
            //Edge symbol: 'baseline'
            (function(symbolName) {})("baseline");
            //Edge symbol end:'baseline'
            //=========================================================
            //Edge symbol: 'XAXIS'
            (function(symbolName) {})("XAXIS");
            //Edge symbol end:'XAXIS'
        })
    }

)(AdobeEdge.$, AdobeEdge, "EDGE-6614146");