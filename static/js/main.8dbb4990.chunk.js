(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n(7),a=n.n(i),s=(n(13),n(2)),r=n(3),o=n(5),d=n(4),l=(n(14),n(0)),u=function(t){Object(o.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var t=this;return Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{children:Object(l.jsx)("a",{href:"/",onClick:function(e){e.preventDefault(),t.props.onChangePage()},children:this.props.title})}),this.props.sub]})}}]),n}(c.Component),j=function(t){Object(o.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"shouldComponentUpdate",value:function(t,e){return this.props.data!==t.data}},{key:"render",value:function(){for(var t=this,e=this.props.data,n=[],c=0;c<e.length;c++)n.push(Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"./content/+data[i].id","data-id":e[c].id,onClick:function(e){e.preventDefault(),t.props.onChangePage(e.target.dataset.id)},children:e[c].title})},e[c].id));return Object(l.jsx)("nav",{children:Object(l.jsx)("ul",{children:n})})}}]),n}(c.Component),h=function(t){Object(o.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("article",{children:[Object(l.jsx)("h2",{children:this.props.title}),this.props.desc]})}}]),n}(c.Component),p=function(t){Object(o.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var t=this;return Object(l.jsxs)("article",{children:[Object(l.jsx)("h2",{children:"Create"}),Object(l.jsxs)("form",{action:"/create_process",method:"POST",onSubmit:function(e){e.preventDefault(),t.props.onSubmit(e.target.title.value,e.target.desc.value)},children:[Object(l.jsx)("p",{children:Object(l.jsx)("input",{type:"text",name:"title",placeholder:"title"})}),Object(l.jsx)("p",{children:Object(l.jsx)("textarea",{name:"desc",placeholder:"description"})}),Object(l.jsx)("p",{children:Object(l.jsx)("button",{type:"submit",children:"submit"})})]})]})}}]),n}(c.Component),b=n(8),O=function(t){Object(o.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(s.a)(this,n),(c=e.call(this,t)).state={id:c.props.data.id,title:c.props.data.title,desc:c.props.data.desc},c}return Object(r.a)(n,[{key:"inputFormHandler",value:function(t){this.setState(Object(b.a)({},t.target.name,t.target.value))}},{key:"render",value:function(){var t=this;return Object(l.jsxs)("article",{children:[Object(l.jsx)("h2",{children:"Update"}),Object(l.jsxs)("form",{action:"/create_process",method:"POST",onSubmit:function(e){e.preventDefault(),t.props.onSubmit(t.state.id,t.state.title,t.state.desc)},children:[Object(l.jsx)("input",{type:"hidden",name:"id",value:this.state.id}),Object(l.jsx)("p",{children:Object(l.jsx)("input",{type:"text",name:"title",placeholder:"title",value:this.state.title,onChange:function(e){t.inputFormHandler(e)}})}),Object(l.jsx)("p",{children:Object(l.jsx)("textarea",{name:"desc",placeholder:"description",value:this.state.desc,onChange:function(e){t.inputFormHandler(e)}})}),Object(l.jsx)("p",{children:Object(l.jsx)("button",{type:"submit",children:"submit"})})]})]})}}]),n}(c.Component),f=function(t){Object(o.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var t=this;return Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"/create",onClick:function(e){e.preventDefault(),t.props.onChangeMode("create")},children:"create"})}),Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:"/update",onClick:function(e){e.preventDefault(),t.props.onChangeMode("update")},children:"update"})}),Object(l.jsx)("li",{children:Object(l.jsx)("button",{type:"button",onClick:function(e){e.preventDefault(),t.props.onChangeMode("delete")},children:"delete"})})]})}}]),n}(c.Component),m=function(t){Object(o.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(s.a)(this,n),(c=e.call(this,t)).max_content_id=3,c.state={mode:"welcome",selected_content_id:1,subject:{title:"WEB",sub:"World Wide Web!"},welcome:{title:"Welcome",desc:"Hello, React!"},contents:[{id:1,title:"HTML",desc:"HTML is for information"},{id:2,title:"CSS",desc:"CSS is for design"},{id:3,title:"JavaScript",desc:"Javascript is for interactive"}]},c}return Object(r.a)(n,[{key:"getReadContent",value:function(){for(var t=0;t<this.state.contents.length;t++){var e=this.state.contents[t];if(e.id===this.state.selected_content_id)return e}}},{key:"getContent",value:function(){var t,e,n,c=this,i=null;return"welcome"===this.state.mode?(t=this.state.welcome.title,e=this.state.welcome.desc,n=Object(l.jsx)(h,{title:t,desc:e})):"read"===this.state.mode?(i=this.getReadContent(),n=Object(l.jsx)(h,{title:i.title,desc:i.desc})):"create"===this.state.mode?n=Object(l.jsx)(p,{onSubmit:function(t,e){c.max_content_id=c.max_content_id+1;var n=c.state.contents.concat({id:c.max_content_id,title:t,desc:e});c.setState({mode:"read",selected_content_id:c.max_content_id,contents:n})}}):"update"===this.state.mode&&(i=this.getReadContent(),n=Object(l.jsx)(O,{data:i,onSubmit:function(t,e,n){for(var i=Array.from(c.state.contents),a=0;a<i.length;){if(i[a].id===t){i[a]={id:t,title:e,desc:n};break}a+=1}c.setState({mode:"read",contents:i})}})),n}},{key:"render",value:function(){var t=this;return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(u,{className:"Subject",title:this.state.subject.title,sub:this.state.subject.sub,onChangePage:function(){t.setState({mode:"welcome"})}}),Object(l.jsx)(j,{data:this.state.contents,onChangePage:function(e){t.setState({mode:"read",selected_content_id:Number(e)})}}),Object(l.jsx)(f,{onChangeMode:function(e){if("delete"===e){if(window.confirm("really?")){for(var n=Array.from(t.state.contents),c=0;c<n.length;){if(n[c].id===t.state.selected_content_id){n.splice(c,1);break}c+=1}t.setState({mode:"welcome",contents:n}),alert("deleted!")}}else t.setState({mode:e})}}),this.getContent()]})}}]),n}(c.Component),x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),a(t),s(t)}))};a.a.render(Object(l.jsx)(m,{}),document.querySelector("#root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.8dbb4990.chunk.js.map