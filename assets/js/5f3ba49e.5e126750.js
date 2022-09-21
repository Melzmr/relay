"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[97105],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>l,MDXProvider:()=>f,mdx:()=>h,useMDXComponents:()=>u,withMDXComponents:()=>d});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){return function(n){var t=u(n.components);return r.createElement(e,i({},n,{components:t}))}},u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},f=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,p=d["".concat(a,".").concat(f)]||d[f]||m[f]||i;return t?r.createElement(p,s(s({ref:n},l),{},{components:t})):r.createElement(p,s({ref:n},l))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},68629:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(39960),o=t(44256),i=t(67294);function a(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function s(e){var n=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),n)}var c=function(){var e=i.useState(!1),n=e[0],t=e[1],r=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return n?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return r(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},l=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:a},"Filing a task"))},d=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(r.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},u=function(){return i.createElement(s,null,i.createElement(l,null),i.createElement(c,null),i.createElement(d,null))},f=function(){return i.createElement(s,null,i.createElement(c,null),i.createElement(d,null))};const m=function(){return(0,o.fbContent)({internal:i.createElement(u,null),external:i.createElement(f,null)})}},94205:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>u,default:()=>y,frontMatter:()=>d,metadata:()=>f,toc:()=>p});var r,o=t(83117),i=t(80102),a=(t(67294),t(3905)),s=t(68629),c=t(44256),l=["components"],d={id:"refetching-connections",title:"Refetching Connections (Using and Changing Filters)",slug:"/guided-tour/list-data/refetching-connections/",description:"Relay guide to refetching connections",keywords:["pagination","refetching","connection","useRefetchableFragment"]},u=void 0,f={unversionedId:"guided-tour/list-data/refetching-connections",id:"version-v12.0.0/guided-tour/list-data/refetching-connections",title:"Refetching Connections (Using and Changing Filters)",description:"Relay guide to refetching connections",source:"@site/versioned_docs/version-v12.0.0/guided-tour/list-data/refetching-connections.md",sourceDirName:"guided-tour/list-data",slug:"/guided-tour/list-data/refetching-connections/",permalink:"/docs/v12.0.0/guided-tour/list-data/refetching-connections/",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v12.0.0/guided-tour/list-data/refetching-connections.md",tags:[],version:"v12.0.0",lastUpdatedBy:"Mathew Luo",lastUpdatedAt:1663775279,formattedLastUpdatedAt:"9/21/2022",frontMatter:{id:"refetching-connections",title:"Refetching Connections (Using and Changing Filters)",slug:"/guided-tour/list-data/refetching-connections/",description:"Relay guide to refetching connections",keywords:["pagination","refetching","connection","useRefetchableFragment"]},sidebar:"version-v12.0.0/docs",previous:{title:"Streaming Pagination",permalink:"/docs/v12.0.0/guided-tour/list-data/streaming-pagination/"},next:{title:"Updating Connections",permalink:"/docs/v12.0.0/guided-tour/list-data/updating-connections/"}},m={},p=[],h=(r="FbRefetchingConnectionsUsingUseTransition",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",e)}),g={toc:p};function y(e){var n=e.components,t=(0,i.Z)(e,l);return(0,a.mdx)("wrapper",(0,o.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Often times when querying for a list of data, you can provide different values in the query which serve as filters that change the result set, or sort it differently."),(0,a.mdx)("p",null,"Some examples of this are:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Building a search typeahead, where the list of results is a list filtered by the search term entered by the user."),(0,a.mdx)("li",{parentName:"ul"},"Changing the ordering mode of the list comments currently displayed for a post, which could produce a completely different set of comments from the server."),(0,a.mdx)("li",{parentName:"ul"},"Changing the way News Feed is ranked and sorted.")),(0,a.mdx)("p",null,"Specifically, in GraphQL, connection fields can accept arguments to sort or filter the set of queried results:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-graphql"},'fragment UserFragment on User {\n  name\n  friends(order_by: DATE_ADDED, search_term: "Alice", first: 10) {\n    edges {\n      node {\n        name\n        age\n      }\n    }\n  }\n}\n')),(0,a.mdx)("p",null,"In Relay, we can pass those arguments as usual using GraphQL ",(0,a.mdx)("a",{parentName:"p",href:"../../rendering/variables/"},"variables")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},'type Props = {\n  userRef: FriendsListComponent_user$key,\n};\n\nfunction FriendsListComponent(props: Props) {\n  const userRef = props.userRef;\n\n  const {data, ...} = usePaginationFragment(\n    graphql`\n      fragment FriendsListComponent_user on User {\n        name\n        friends(\n          order_by: $orderBy,\n          search_term: $searchTerm,\n          after: $cursor,\n          first: $count,\n        ) @connection(key: "FriendsListComponent_user_friends_connection") {\n          edges {\n            node {\n              name\n              age\n            }\n          }\n        }\n      }\n    `,\n    userRef,\n  );\n\n  return (...);\n}\n')),(0,a.mdx)("p",null,"When paginating, the original values for those filters will be preserved:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},'type Props = {\n  userRef: FriendsListComponent_user$key,\n};\n\nfunction FriendsListComponent(props: Props) {\n  const userRef = props.userRef;\n\n  const {data, loadNext} = usePaginationFragment(\n    graphql`\n      fragment FriendsListComponent_user on User {\n        name\n        friends(order_by: $orderBy, search_term: $searchTerm)\n          @connection(key: "FriendsListComponent_user_friends_connection") {\n          edges {\n            node {\n              name\n              age\n            }\n          }\n        }\n      }\n    `,\n    userRef,\n  );\n\n  return (\n    <>\n      <h1>Friends of {data.name}:</h1>\n      <List items={data.friends?.nodes}>{...}</List>\n\n      {/*\n       Loading the next items will use the original order_by and search_term\n       values used for the initial query\n      */ }\n      <Button onClick={() => loadNext(10)}>Load more friends</Button>\n    </>\n  );\n}\n')),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Note that calling ",(0,a.mdx)("inlineCode",{parentName:"li"},"loadNext")," will use the original ",(0,a.mdx)("inlineCode",{parentName:"li"},"order_by")," and ",(0,a.mdx)("inlineCode",{parentName:"li"},"search_term")," values used for the initial query. During pagination, these value won't (",(0,a.mdx)("em",{parentName:"li"},"and shouldn't"),") change.")),(0,a.mdx)("p",null,"If we want to refetch the connection with ",(0,a.mdx)("em",{parentName:"p"},"different")," variables, we can use the ",(0,a.mdx)("inlineCode",{parentName:"p"},"refetch")," function provided by ",(0,a.mdx)("inlineCode",{parentName:"p"},"usePaginationFragment"),", similarly to how we do so when ",(0,a.mdx)("a",{parentName:"p",href:"../../refetching/refetching-fragments-with-different-data/"},"Refetching Fragments with Different Data"),":"),(0,a.mdx)(c.FbInternalOnly,{mdxType:"FbInternalOnly"},(0,a.mdx)(h,{mdxType:"FbRefetchingConnectionsUsingUseTransition"})),(0,a.mdx)(c.OssOnly,{mdxType:"OssOnly"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"/**\n * FriendsListComponent.react.js\n */\nimport type {FriendsListComponent_user$ref} from 'FriendsListComponent_user.graphql';\n\nconst React = require('React');\nconst {useState, useEffect} = require('React');\n\nconst {graphql, usePaginationFragment} = require('react-relay');\n\n\ntype Props = {\n  searchTerm?: string,\n  user: FriendsListComponent_user$key,\n};\n\nfunction FriendsListComponent(props: Props) {\n  const searchTerm = props.searchTerm;\n  const {data, loadNext, refetch} = usePaginationFragment(\n    graphql`\n      fragment FriendsListComponent_user on User {\n        name\n        friends(\n          order_by: $orderBy,\n          search_term: $searchTerm,\n          after: $cursor,\n          first: $count,\n        ) @connection(key: \"FriendsListComponent_user_friends_connection\") {\n          edges {\n            node {\n              name\n              age\n            }\n          }\n        }\n      }\n    `,\n    props.user,\n  );\n\n  useEffect(() => {\n    // When the searchTerm provided via props changes, refetch the connection\n    // with the new searchTerm\n    refetch({first: 10, search_term: searchTerm}, {fetchPolicy: 'store-or-network'});\n  }, [searchTerm])\n\n  return (\n    <>\n      <h1>Friends of {data.name}:</h1>\n\n      {/* When the button is clicked, refetch the connection but sorted differently */}\n      <Button\n        onClick={() =>\n          refetch({first: 10, orderBy: 'DATE_ADDED'});\n        }>\n        Sort by date added\n      </Button>\n\n      <List items={data.friends?.nodes}>...</List>\n      <Button onClick={() => loadNext(10)}>Load more friends</Button>\n    </>\n  );\n}\n")),(0,a.mdx)("p",null,"Let's distill what's going on here:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Calling ",(0,a.mdx)("inlineCode",{parentName:"li"},"refetch")," and passing a new set of variables will fetch the fragment again ",(0,a.mdx)("em",{parentName:"li"},"with the newly provided variables"),". The variables you need to provide are a subset of the variables that the generated query expects; the generated query will require an ",(0,a.mdx)("inlineCode",{parentName:"li"},"id"),", if the type of the fragment has an ",(0,a.mdx)("inlineCode",{parentName:"li"},"id")," field, and any other variables that are transitively referenced in your fragment.",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"In our case, we need to pass the count we want to fetch as the ",(0,a.mdx)("inlineCode",{parentName:"li"},"first")," variable, and we can pass different values for our filters, like ",(0,a.mdx)("inlineCode",{parentName:"li"},"orderBy")," or ",(0,a.mdx)("inlineCode",{parentName:"li"},"searchTerm"),"."))),(0,a.mdx)("li",{parentName:"ul"},"This will re-render your component and may cause it to suspend (as explained in ",(0,a.mdx)("a",{parentName:"li",href:"../../rendering/loading-states/"},"Loading States with Suspense"),") if it needs to send and wait for a network request. If ",(0,a.mdx)("inlineCode",{parentName:"li"},"refetch")," causes the component to suspend, you'll need to make sure that there's a ",(0,a.mdx)("inlineCode",{parentName:"li"},"Suspense")," boundary wrapping this component from above."),(0,a.mdx)("li",{parentName:"ul"},"Conceptually, when we call refetch, we're fetching the connection ",(0,a.mdx)("em",{parentName:"li"},"from scratch"),". It other words, we're fetching it again from the ",(0,a.mdx)("em",{parentName:"li"},"beginning")," and ",(0,a.mdx)("em",{parentName:"li"},'"resetting"')," our pagination state. For example, if we fetch the connection with a different ",(0,a.mdx)("inlineCode",{parentName:"li"},"search_term"),", our pagination information for the previous ",(0,a.mdx)("inlineCode",{parentName:"li"},"search_term")," no longer makes sense, since we're essentially paginating over a new list of items."))),(0,a.mdx)(s.Z,{mdxType:"DocsRating"}))}y.isMDXComponent=!0},47596:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(n){i(n)}}function s(e){try{c(r.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getSpecInfo=void 0;const o=t(11737);n.getSpecInfo=function(e){return r(this,void 0,void 0,(function*(){return yield o.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},11737:function(e,n){var t=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(n){i(n)}}function s(e){try{c(r.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.call=void 0;let r=!1,o=0;const i={};n.call=function(e){return t(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const n=e.data.id;n in i||console.error(`Recieved response for id: ${n} with no matching receiver`),"response"in e.data?i[n].resolve(e.data.response):i[n].reject(new Error(e.data.error)),delete i[n]})));const n=o++,t=new Promise(((e,t)=>{i[n]={resolve:e,reject:t}})),a={event:"static-docs-bridge-call",id:n,module:e.module,api:e.api,args:e.args},s="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(a,s),t}))}},24855:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(n){i(n)}}function s(e){try{c(r.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.reportFeatureUsage=n.reportContentCopied=void 0;const o=t(11737);n.reportContentCopied=function(e){return r(this,void 0,void 0,(function*(){const{textContent:n}=e;try{yield o.call({module:"feedback",api:"reportContentCopied",args:{textContent:n}})}catch(t){}}))},n.reportFeatureUsage=function(e){return r(this,void 0,void 0,(function*(){const{featureName:n,id:t}=e;console.log("used feature");try{yield o.call({module:"feedback",api:"reportFeatureUsage",args:{featureName:n,id:t}})}catch(r){}}))}},44256:function(e,n,t){var r=this&&this.__createBinding||(Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]}),o=this&&this.__setModuleDefault||(Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&r(n,e,t);return o(n,e),n};Object.defineProperty(n,"__esModule",{value:!0}),n.OssOnly=n.FbInternalOnly=n.getEphemeralDiffNumber=n.hasEphemeralDiffNumber=n.isInternal=n.validateFbContentArgs=n.fbInternalOnly=n.fbContent=n.inpageeditor=n.feedback=n.uidocs=n.bloks=void 0,n.bloks=i(t(47596)),n.uidocs=i(t(17483)),n.feedback=i(t(24855)),n.inpageeditor=i(t(27312));const a=["internal","external"];function s(e){return l(e),d()?"internal"in e?c(e.internal):[]:"external"in e?c(e.external):[]}function c(e){return"function"==typeof e?e():e}function l(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${a}. Instead got ${e}`);if(!Object.keys(e).find((e=>a.find((n=>n===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${a}`);const n=Object.keys(e).filter((e=>!a.find((n=>n===e))));if(n.length>0)throw new Error(`Unexpected keys ${n} found in fbContent() args. Accepted keys: ${a}`)}function d(){try{return Boolean(!1)}catch(e){return console.log("process.env.FB_INTERNAL couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),!1}}function u(){try{return null}catch(e){return console.log("process.env.PHABRICATOR_DIFF_NUMBER couldn't be read, maybe you forgot to add the required webpack EnvironmentPlugin config?",e),null}}n.fbContent=s,n.fbInternalOnly=function(e){return s({internal:e})},n.validateFbContentArgs=l,n.isInternal=d,n.hasEphemeralDiffNumber=function(){return Boolean(u())},n.getEphemeralDiffNumber=u,n.FbInternalOnly=function(e){return d()?e.children:null},n.OssOnly=function(e){return d()?null:e.children}},27312:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(n){i(n)}}function s(e){try{c(r.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.submitDiff=void 0;const o=t(11737);n.submitDiff=function(e){return r(this,void 0,void 0,(function*(){const{file_path:n,new_content:t,project_name:r,diff_number:i}=e;try{return yield o.call({module:"inpageeditor",api:"createPhabricatorDiffApi",args:{file_path:n,new_content:t,project_name:r,diff_number:i}})}catch(a){throw new Error(`Error occurred while trying to submit diff. Stack trace: ${a}`)}}))}},17483:function(e,n,t){var r=this&&this.__awaiter||function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(n){i(n)}}function s(e){try{c(r.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}c((r=r.apply(e,n||[])).next())}))};Object.defineProperty(n,"__esModule",{value:!0}),n.getApi=n.docsets=void 0;const o=t(11737);n.docsets={BLOKS_CORE:"887372105406659"},n.getApi=function(e){return r(this,void 0,void 0,(function*(){const{name:n,framework:t,docset:r}=e;return yield o.call({module:"uidocs",api:"getApi",args:{name:n,framework:t,docset:r}})}))}}}]);