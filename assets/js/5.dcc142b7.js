(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{351:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"what-is-foolbox"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-foolbox"}},[t._v("#")]),t._v(" What is Foolbox?")]),t._v(" "),a("p",[a("strong",[t._v("Foolbox")]),t._v(" is a "),a("strong",[t._v("Python library")]),t._v(" that let's you easily run adversarial attacks against machine learning models like deep neural networks. It is built on top of "),a("a",{attrs:{href:"https://eagerpy.jonasrauber.de",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("EagerPy")]),a("OutboundLink")],1),t._v(" and works natively with models in "),a("a",{attrs:{href:"https://pytorch.org",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("PyTorch")]),a("OutboundLink")],1),t._v(", "),a("a",{attrs:{href:"https://www.tensorflow.org",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("TensorFlow")]),a("OutboundLink")],1),t._v(", "),a("a",{attrs:{href:"https://github.com/google/jax",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("JAX")]),a("OutboundLink")],1),t._v(", and "),a("a",{attrs:{href:"https://numpy.org",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("NumPy")]),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" foolbox "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" fb\n\nmodel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nfmodel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PyTorchModel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nattack "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("attacks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LinfPGD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nepsilons "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.03")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nadvs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" success "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" attack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fmodel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" images"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" labels"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" epsilons"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("epsilons"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);