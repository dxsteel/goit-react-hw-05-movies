"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[275],{275:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r=e(885),a=e(2791),c=e(6871),i=e(1407),s=e(3243),u="Cast_cast__m5y0R",o="Cast_castCard__m8Shz",f="Cast_castCardPosition__i9n6s",p="Cast_castCardPositionImage__p+mHn",h="Cast_castContent__3L5an",d=e(184),l=function(){var t=(0,a.useState)(null),n=(0,r.Z)(t,2),e=n[0],l=n[1],m=(0,c.UO)().movieId;return(0,a.useEffect)((function(){s.Z.fetchMoviesCast(m).then((function(t){return l(t.cast)}))}),[m]),(0,d.jsx)("div",{className:u,children:(0,d.jsxs)("ul",{className:o,children:[e&&e.map((function(t){return(0,d.jsxs)("li",{className:f,children:[(0,d.jsx)("img",{className:p,src:t.profile_path?"https://image.tmdb.org/t/p/w500".concat(t.profile_path):i,alt:t.name,width:"150"}),(0,d.jsx)("h3",{children:t.name}),(0,d.jsxs)("p",{children:["Character: ",t.character]})]},t.id)})),e&&0===e.length&&(0,d.jsx)("p",{className:h,children:"We don't have any casts for this movie!"})]})})}},3243:function(t,n,e){var r=e(5861),a=e(7757),c=e.n(a),i=e(4569),s=e.n(i),u="e8f0bf3ce38076183b976a0014844e32",o="https://api.themoviedb.org/3",f=function(){var t=(0,r.Z)(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",s()("".concat(o,"/trending/movie/day?api_key=").concat(u)).then((function(t){return t.data})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",s()("".concat(o,"/search/movie?api_key=").concat(u,"&query=").concat(n,"&language=en-US&page=1&include_adult=false")).then((function(t){return t.data})));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",s()("".concat(o,"/movie/").concat(n,"?api_key=").concat(u)).then((function(t){return t.data})));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",s()("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(u)).then((function(t){return t.data})));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(n){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",s()("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(u)).then((function(t){return t.data})));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),m={fetchTrendingMovies:f,fetchMoviesQuery:p,fetchMoviesDetails:h,fetchMoviesCast:d,fetchMoviesReviews:l};n.Z=m},1407:function(t,n,e){t.exports=e.p+"static/media/006-not-found.e4803bbf3b19afcfc078.png"}}]);
//# sourceMappingURL=275.ed260e15.chunk.js.map