(this.webpackJsonprecipeapp=this.webpackJsonprecipeapp||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),i=a.n(r),s=(a(12),a(1)),o=a(2),l=a(4),p=a(3),h=(a(13),a(14),function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.result.recipe.ingredients.map((function(e){return c.a.createElement("li",null,e.text)}));return c.a.createElement("div",{className:"recipe grow br2 ba dark-gray b--black-10 mw5 shadow-4"},c.a.createElement("img",{className:"food-image",src:this.props.result.recipe.image,alt:"food"}),c.a.createElement("h2",{className:"title f4"}," ",this.props.result.recipe.label," "),c.a.createElement("h3",{className:"ingredients f5 f5-ns mv0"}," Ingredients "),c.a.createElement("ul",null,e))}}]),a}(c.a.Component)),u=(a(15),function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"search"},c.a.createElement("input",{className:"search-input",type:"search",placeholder:"search recipe",onChange:this.props.searchChange}),c.a.createElement("button",{className:"submit-btn bg-green br3",onClick:this.props.searchBtnClick}," Search "))}}]),a}(c.a.Component)),m=(a(16),function(e){return c.a.createElement("div",{className:"scrollbar"},e.children)}),d=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.onSearchBtnClick=function(){var t="https://api.edamam.com/search?q=".concat(e.state.searchField,"&app_id=").concat(e.app_id,"&app_key=").concat(e.app_key);console.log(e.state.searchField),console.log(t),fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({recipes:t.hits})}))},e.app_id="c729177d",e.app_key="6333bde595e200c8d1468d47b38c589d",e.state={recipes:[],searchField:""},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="https://api.edamam.com/search?q=coffee&app_id=".concat(this.app_id,"&app_key=").concat(this.app_key);fetch(t).then((function(e){return e.json()})).then((function(t){e.setState({recipes:t.hits})}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(u,{searchChange:this.onSearchChange,searchBtnClick:this.onSearchBtnClick}),c.a.createElement(m,null,c.a.createElement("div",{className:"recipes_container"},this.state.recipes.map((function(e){return c.a.createElement(h,{result:e})})))))}}]),a}(c.a.Component);a(17),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.1a9f9354.chunk.js.map