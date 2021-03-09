(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{26:function(n,t,e){"use strict";e.r(t);var r=e(1),i=e(0),o=e(4),a=e.n(o),c=e(9),u=e(10),s=e(11),l=e(14),d=e(13),b=e(2),f=e(3);function j(){var n=Object(b.a)(["\n    font-size: 20px;\n  "]);return j=function(){return n},n}function p(){var n=Object(b.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 0;\n    margin: 0 auto;\n    width: 50%;\n    height: auto;\n    list-style: none;\n  "]);return p=function(){return n},n}var x={Sections:f.a.section(p()),Title:f.a.h2(j())},v=x.Sections,h=x.Title;function g(n){var t=n.title,e=n.children;return Object(r.jsxs)(v,{children:[Object(r.jsx)(h,{children:t}),e]})}g.defaultProps={title:"Homework"};var O=g;function k(){var n=Object(b.a)(["\n    display: flex;\n    justify-content: space-between;\n    flex-direction: row;\n    padding: 0;\n    margin: 0 auto;\n    width: 400px;\n    list-style: none;\n  "]);return k=function(){return n},n}function m(){var n=Object(b.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 16px;\n    width: 100%;\n    height: 50px;\n    border-radius: 10px;\n    margin: 20px 5px;\n    background-color: rgb(255, 255, 0);\n    text-transform: uppercase;\n    cursor: pointer;\n    &:hover {\n      background-color: rgb(155, 255, 155);\n      border-radius: 90px;\n    }\n    &:focus {\n      border-radius: 10px;\n      outline: none;\n    }\n  "]);return m=function(){return n},n}var y={Button:f.a.button(m()),Div:f.a.div(k())},w=y.Div,F=y.Button,L=function(n){var t=n.options,e=n.onLeaveFeedback;return Object(r.jsx)(w,{children:t.map((function(n){return Object(r.jsx)(F,{type:"button",onClick:function(){return e(n)},children:n},n)}))})};function P(){var n=Object(b.a)(["\n    display: flex;\n    align-items: center;\n    margin: 5px auto;\n    background-color: white;\n    text-align: center;\n  "]);return P=function(){return n},n}function S(){var n=Object(b.a)(["\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    padding: 0;\n    margin: 0 auto;\n    width: 400px;\n    list-style: none;\n  "]);return S=function(){return n},n}var T={ListUl:f.a.ul(S()),ListItem:f.a.li(P())},B=T.ListUl,z=T.ListItem,C=function(n){var t=n.good,e=n.bad,i=n.neutral,o=n.total,a=n.positive,c=o>0;return Object(r.jsxs)(r.Fragment,{children:[0===o&&Object(r.jsx)("h3",{children:"No feedback given"}),c&&Object(r.jsxs)(B,{children:[Object(r.jsxs)(z,{children:["Good:",t]}),Object(r.jsxs)(z,{children:["Neutral:",i]}),Object(r.jsxs)(z,{children:["Bad:",e]}),Object(r.jsxs)(z,{children:["Total:",o]}),Object(r.jsxs)(z,{children:["Positive Feedbacks:",a===1/0?100:a,"%"]})]})]})},D=function(n){Object(l.a)(e,n);var t=Object(d.a)(e);function e(){var n;Object(u.a)(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(n=t.call.apply(t,[this].concat(i))).state={listFeedback:["good","neutral","bad"],good:0,neutral:0,bad:0,total:0,positive:0},n.countTotalFeedback=function(){n.setState((function(n){return{total:n.good+n.bad+n.neutral}}))},n.countPositiveFeedbackPercentage=function(){n.setState((function(n){var t=n.good;return{positive:100/(n.total/t)}}))},n.onLeaveFeedback=function(t){n.setState((function(n){return Object(c.a)({},t,n[t]+1)})),n.countTotalFeedback(),n.countPositiveFeedbackPercentage()},n}return Object(s.a)(e,[{key:"render",value:function(){var n=this.state,t=n.good,e=n.bad,i=n.neutral,o=n.total,a=n.listFeedback,c=n.positive;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(L,{options:a,onLeaveFeedback:this.onLeaveFeedback}),Object(r.jsx)(C,{good:t,neutral:i,bad:e,total:o,positive:c.toFixed(2)})]})}}]),e}(i.Component);D.defaultProps={};var I=function(){return Object(r.jsx)(O,{title:"Leave feedback",children:Object(r.jsx)(D,{})})};a.a.render(Object(r.jsx)(I,{}),document.querySelector("#root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.baa3e644.chunk.js.map