"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[179],{5477:(e,t,r)=>{var i=r(9526),o=r(3961),a=r(9902),s=r(2406),n=r(5309),l=r(8995),c=r(890);const d={paper:"#fff",primaryLight:"#e3f2fd",primary200:"#90caf9",primaryMain:"#2196f3",primaryDark:"#1e88e5",primary800:"#1565c0",secondaryLight:"#ede7f6",secondary200:"#b39ddb",secondaryMain:"#673ab7",secondaryDark:"#5e35b1",secondary800:"#4527a0",successLight:"#b9f6ca",success200:"#69f0ae",successMain:"#00e676",successDark:"#00c853",errorLight:"#ef9a9a",errorMain:"#f44336",errorDark:"#c62828",orangeLight:"#fbe9e7",orangeMain:"#ffab91",orangeDark:"#d84315",warningLight:"#fff8e1",warningMain:"#ffe57f",warningDark:"#ffc107",grey50:"#fafafa",grey100:"#f5f5f5",grey200:"#eee",grey300:"#e0e0e0",grey500:"#9e9e9e",grey600:"#757575",grey700:"#616161",grey900:"#212121",darkPaper:"$darkPaper",darkBackground:"#1a223f",darkLevel1:"$darkLevel1",darkLevel2:"$darkLevel2",darkTextTitle:"$darkTextTitle",darkTextPrimary:"$darkTextPrimary",darkTextSecondary:"$darkTextSecondary",darkPrimaryLight:"$darkPrimaryLight",darkPrimaryMain:"$darkPrimaryMain",darkPrimaryDark:"$darkPrimaryDark",darkPrimary200:"$darkPrimary200",darkPrimary800:"$darkPrimary800",darkSecondaryLight:"$darkSecondaryLight",darkSecondaryMain:"$darkSecondaryMain",darkSecondaryDark:"$darkSecondaryDark",darkSecondary200:"$darkSecondary200",darkSecondary800:"$darkSecondary800"};function h(e){return{mode:e?.customization?.navType,common:{black:e.colors?.darkPaper},primary:{light:e.colors?.primaryLight,main:e.colors?.primaryMain,dark:e.colors?.primaryDark,200:e.colors?.primary200,800:e.colors?.primary800},secondary:{light:e.colors?.secondaryLight,main:e.colors?.secondaryMain,dark:e.colors?.secondaryDark,200:e.colors?.secondary200,800:e.colors?.secondary800},error:{light:e.colors?.errorLight,main:e.colors?.errorMain,dark:e.colors?.errorDark},orange:{light:e.colors?.orangeLight,main:e.colors?.orangeMain,dark:e.colors?.orangeDark},warning:{light:e.colors?.warningLight,main:e.colors?.warningMain,dark:e.colors?.warningDark},success:{light:e.colors?.successLight,200:e.colors?.success200,main:e.colors?.successMain,dark:e.colors?.successDark},grey:{50:e.colors?.grey50,100:e.colors?.grey100,500:e.darkTextSecondary,600:e.heading,700:e.darkTextPrimary,900:e.textDark},dark:{light:e.colors?.darkTextPrimary,main:e.colors?.darkLevel1,dark:e.colors?.darkLevel2,800:e.colors?.darkBackground,900:e.colors?.darkPaper},text:{primary:e.darkTextPrimary,secondary:e.darkTextSecondary,dark:e.textDark,hint:e.colors?.grey100},background:{paper:e.paper,default:e.backgroundDefault}}}function x(e){return{fontFamily:e?.customization?.fontFamily,h6:{fontWeight:500,color:e.heading,fontSize:"0.75rem"},h5:{fontSize:"0.875rem",color:e.heading,fontWeight:500},h4:{fontSize:"1rem",color:e.heading,fontWeight:600},h3:{fontSize:"1.25rem",color:e.heading,fontWeight:600},h2:{fontSize:"1.5rem",color:e.heading,fontWeight:700},h1:{fontSize:"2.125rem",color:e.heading,fontWeight:700},subtitle1:{fontSize:"0.875rem",fontWeight:500,color:e.textDark},subtitle2:{fontSize:"0.75rem",fontWeight:400,color:e.darkTextSecondary},caption:{fontSize:"0.75rem",color:e.darkTextSecondary,fontWeight:400},body1:{fontSize:"0.875rem",fontWeight:400,lineHeight:"1.334em"},body2:{letterSpacing:"0em",fontWeight:400,lineHeight:"1.5em",color:e.darkTextPrimary},button:{textTransform:"capitalize"},customInput:{marginTop:1,marginBottom:1,"& > label":{top:23,left:0,color:e.grey500,'&[data-shrink="false"]':{top:5}},"& > div > input":{padding:"30.5px 14px 11.5px !important"},"& legend":{display:"none"},"& fieldset":{top:0}},mainContent:{backgroundColor:e.background,width:"100%",minHeight:"calc(100vh - 88px)",flexGrow:1,padding:"20px",marginTop:"88px",marginRight:"20px",borderRadius:`${e?.customization?.borderRadius}px`},menuCaption:{fontSize:"0.875rem",fontWeight:500,color:e.heading,padding:"6px",textTransform:"capitalize",marginTop:"10px"},subMenuCaption:{fontSize:"0.6875rem",fontWeight:500,color:e.darkTextSecondary,textTransform:"capitalize"},commonAvatar:{cursor:"pointer",borderRadius:"8px"},smallAvatar:{width:"22px",height:"22px",fontSize:"1rem"},mediumAvatar:{width:"34px",height:"34px",fontSize:"1.2rem"},largeAvatar:{width:"44px",height:"44px",fontSize:"1.5rem"}}}const p=e=>{const t={colors:d,heading:d.grey900,paper:d.paper,backgroundDefault:d.paper,background:d.primaryLight,darkTextPrimary:d.grey700,darkTextSecondary:d.grey500,textDark:d.grey900,menuSelected:d.secondaryDark,menuSelectedBack:d.secondaryLight,divider:d.grey200,customization:e},r={direction:"ltr",palette:h(t),mixins:{toolbar:{minHeight:"48px",padding:"16px","@media (min-width: 600px)":{minHeight:"48px"}}},typography:x(t)},i=(0,c.Z)(r);return i.components=function(e){const t=e.colors?.grey50;return{MuiButton:{styleOverrides:{root:{fontWeight:500,borderRadius:"4px"}}},MuiPaper:{defaultProps:{elevation:0},styleOverrides:{root:{backgroundImage:"none"},rounded:{borderRadius:`${e?.customization?.borderRadius}px`}}},MuiCardHeader:{styleOverrides:{root:{color:e.colors?.textDark,padding:"24px"},title:{fontSize:"1.125rem"}}},MuiCardContent:{styleOverrides:{root:{padding:"24px"}}},MuiCardActions:{styleOverrides:{root:{padding:"24px"}}},MuiListItemButton:{styleOverrides:{root:{color:e.darkTextPrimary,paddingTop:"10px",paddingBottom:"10px","&.Mui-selected":{color:e.menuSelected,backgroundColor:e.menuSelectedBack,"&:hover":{backgroundColor:e.menuSelectedBack},"& .MuiListItemIcon-root":{color:e.menuSelected}},"&:hover":{backgroundColor:e.menuSelectedBack,color:e.menuSelected,"& .MuiListItemIcon-root":{color:e.menuSelected}}}}},MuiListItemIcon:{styleOverrides:{root:{color:e.darkTextPrimary,minWidth:"36px"}}},MuiListItemText:{styleOverrides:{primary:{color:e.textDark}}},MuiInputBase:{styleOverrides:{input:{color:e.textDark,"&::placeholder":{color:e.darkTextSecondary,fontSize:"0.875rem"}}}},MuiOutlinedInput:{styleOverrides:{root:{background:t,borderRadius:`${e?.customization?.borderRadius}px`,"& .MuiOutlinedInput-notchedOutline":{borderColor:e.colors?.grey400},"&:hover $notchedOutline":{borderColor:e.colors?.primaryLight},"&.MuiInputBase-multiline":{padding:1}},input:{fontWeight:500,background:t,padding:"15.5px 14px",borderRadius:`${e?.customization?.borderRadius}px`,"&.MuiInputBase-inputSizeSmall":{padding:"10px 14px","&.MuiInputBase-inputAdornedStart":{paddingLeft:0}}},inputAdornedStart:{paddingLeft:4},notchedOutline:{borderRadius:`${e?.customization?.borderRadius}px`}}},MuiSlider:{styleOverrides:{root:{"&.Mui-disabled":{color:e.colors?.grey300}},mark:{backgroundColor:e.paper,width:"4px"},valueLabel:{color:e?.colors?.primaryLight}}},MuiDivider:{styleOverrides:{root:{borderColor:e.divider,opacity:1}}},MuiAvatar:{styleOverrides:{root:{color:e.colors?.primaryDark,background:e.colors?.primary200}}},MuiChip:{styleOverrides:{root:{"&.MuiChip-deletable .MuiChip-deleteIcon":{color:"inherit"}}}},MuiTooltip:{styleOverrides:{tooltip:{color:e.paper,background:e.colors?.grey700}}}}}(t),i};var m=r(2652),g=r.n(m),u=r(1081);const f=({children:e})=>{const{pathname:t}=(0,u.TH)();return(0,i.useEffect)((()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})}),[t]),e||null};f.prototype={children:g().node};const j=f;var y=r(6675),b=r(3825),k=r(3574),v=r(4483),w=r(4972),Z=r(8864),C=r(3698),M=r(1495),S=r(2525),z=r(5494),P=r(8051);const L=({children:e,window:t})=>{(0,P.Z)();const r=(0,z.Z)({disableHysteresis:!0,threshold:0,target:t?t():void 0});return(0,i.cloneElement)(e,{elevation:r?4:0,sx:r?{backdropFilter:"blur(10px)",bgcolor:"rgba(255, 255, 255, 0.7)"}:null})};L.prototype={children:g().node.isRequired,window:g().func};const D=L;var T=r(1868),I=r(4583),B=r(8592),O=r(7479),A=r(8226),W=r(6800),R=r(9855),U=r(3394),F=r(8470),$=r(7557);const H=({theme:e,setProgress:t})=>{const[r,o]=(0,i.useState)(null),a=Boolean(r);return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(b.Z,{sx:{display:{xs:"block",sm:"none"}},children:(0,$.jsx)(M.Z,{title:"Menu",children:(0,$.jsx)(B.Z,{sx:{borderRadius:"12px",overflow:"hidden"},children:(0,$.jsx)(O.Z,{variant:"rounded",sx:{...e.typography.commonAvatar,...e.typography.mediumAvatar,transition:"all .2s ease-in-out",background:e.palette.primary.light,color:e.palette.primary.dark,"&:hover":{background:e.palette.primary.dark,color:e.palette.primary.light}},onClick:e=>{o(e.currentTarget)},color:"inherit",children:(0,$.jsx)(T._AG,{stroke:1.5,size:"1.3rem"})})})})}),(0,$.jsxs)(A.Z,{anchorEl:r,id:"menu-portfolio",open:a,onClose:()=>o(null),onClick:()=>{o(null),console.log("ok")},PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:[(0,$.jsx)(F.rU,{spy:!0,to:"home",smooth:"easeOutCubic",offset:-100,duration:1e3,onClick:()=>o(null),children:(0,$.jsxs)(W.Z,{sx:{width:250},children:[(0,$.jsx)(T.A2c,{color:e.palette.primary.main}),(0,$.jsx)(R.Z,{variant:"subtitle1",sx:{marginLeft:1},children:"Home"})]})}),(0,$.jsx)(U.Z,{variant:"middle"}),(0,$.jsx)(F.rU,{spy:!0,to:"aboutme",smooth:"easeOutCubic",offset:-100,duration:1e3,onClick:()=>o(null),children:(0,$.jsxs)(W.Z,{children:[(0,$.jsx)(T.f7T,{color:e.palette.primary.main}),(0,$.jsx)(R.Z,{variant:"subtitle1",sx:{marginLeft:1},children:"About Me"})]})}),(0,$.jsx)(U.Z,{variant:"middle"}),(0,$.jsx)(F.rU,{spy:!0,to:"services",smooth:"easeOutCubic",offset:-100,duration:1e3,onClick:()=>o(null),children:(0,$.jsxs)(W.Z,{children:[(0,$.jsx)(T.zbo,{color:e.palette.primary.main}),(0,$.jsx)(R.Z,{variant:"subtitle1",sx:{marginLeft:1},children:"Services"})]})}),(0,$.jsx)(U.Z,{variant:"middle"}),(0,$.jsx)(F.rU,{spy:!0,to:"contact",smooth:"easeOutCubic",offset:-100,duration:1e3,onClick:()=>o(null),children:(0,$.jsxs)(W.Z,{children:[(0,$.jsx)(T.MVl,{color:e.palette.primary.main}),(0,$.jsx)(R.Z,{variant:"subtitle1",sx:{marginLeft:1},children:"Contact"})]})})]})]})},E=(0,I.Z)("main")((({theme:e,sm:t})=>({...e.typography.mainContent,borderRadius:12,width:"100%",padding:0,marginRight:t,marginLeft:t,marginBottom:"20px",marginTop:"105px",overflow:"hidden"}))),J=e=>{const t=(0,P.Z)(),r=(0,y.Z)(t.breakpoints.down("sm")),[o,a]=(0,i.useState)(20),s={home:20,aboutme:48,services:73,contact:100};return(0,$.jsxs)(b.Z,{sx:{display:"flex"},children:[(0,$.jsx)(l.ZP,{}),(0,$.jsx)(D,{...e,children:(0,$.jsx)(k.Z,{color:"inherit",position:"fixed",children:(0,$.jsx)(v.Z,{maxWidth:"xl",children:(0,$.jsxs)(w.Z,{children:[(0,$.jsx)(T.seM,{size:50,color:t.palette.primary.main}),(0,$.jsx)(b.Z,{sx:{flexGrow:1}}),(0,$.jsxs)(b.Z,{sx:{display:{xs:"none",sm:"flex",flexDirection:"column"}},children:[(0,$.jsxs)(b.Z,{children:[(0,$.jsx)(F.rU,{spy:!0,to:"home",smooth:"easeOutCubic",offset:-100,duration:1e3,onSetActive:e=>a(s[e]),children:(0,$.jsx)(Z.Z,{sx:{mr:2},children:"Home"})}),(0,$.jsx)(F.rU,{spy:!0,to:"aboutme",smooth:"easeOutCubic",offset:-150,duration:1e3,onSetActive:e=>a(s[e]),children:(0,$.jsx)(Z.Z,{sx:{mr:2},children:"About Me"})}),(0,$.jsx)(F.rU,{spy:!0,to:"services",smooth:"easeOutCubic",offset:-200,duration:1e3,onSetActive:e=>a(s[e]),children:(0,$.jsx)(Z.Z,{sx:{mr:2},children:"Services"})}),(0,$.jsx)(F.rU,{spy:!0,to:"contact",smooth:"easeOutCubic",offset:-220,duration:1e3,onSetActive:e=>a(s[e]),children:(0,$.jsx)(Z.Z,{sx:{mr:2},children:"Contact"})})]}),(0,$.jsx)(C.Z,{variant:"determinate",value:o})]}),(0,$.jsx)(M.Z,{title:"GitHub",children:(0,$.jsx)(S.Z,{"aria-label":"github",color:"primary",sx:{ml:2},children:(0,$.jsx)(T.oBr,{})})}),(0,$.jsx)(H,{theme:t,setProgress:a})]})})})}),(0,$.jsx)(E,{theme:t,sm:r?"0":"20px",id:"container-main",children:(0,$.jsx)(u.j3,{})})]})};var N=r(871),G=r(9556),V=r(5069),_=r(4353),Q=r(4854),q=r(9391);const K=({image:e,icon:t,title:r,content:i})=>{const o=(0,P.Z)(),a=(0,y.Z)(o.breakpoints.down("sm"));return(0,$.jsxs)(V.Z,{sx:{width:"100%",position:"relative"},"data-aos":a?null:"fade-up","data-aos-duration":a?null:"1000",children:[(0,$.jsx)(_.Z,{component:"img",alt:"banner card service",height:"140",image:e}),(0,$.jsx)(b.Z,{style:{display:"flex",marginTop:-50,position:"absolute",width:"100%"},justifyContent:"center",children:(0,$.jsx)(O.Z,{sx:{width:100,height:100,backgroundColor:"#e3f2fd",border:"3px solid white"},children:t})}),(0,$.jsxs)(Q.Z,{sx:{mt:5},children:[(0,$.jsx)(R.Z,{gutterBottom:!0,variant:"h5",component:"div",align:"center",color:"primary",children:r}),(0,$.jsx)(R.Z,{gutterBottom:!0,variant:"subtitle1",component:"div",align:"center",children:i})]}),(0,$.jsx)(q.Z,{children:(0,$.jsx)(Z.Z,{size:"large",fullWidth:!0,variant:"outlined",children:"Get Service"})})]})},Y=({content:e,list:t})=>{const r=(0,P.Z)(),i=(0,y.Z)(r.breakpoints.down("sm"));return(0,$.jsxs)(R.Z,{variant:"subtitle1",sx:{ml:i?2:10,mr:i?2:10,mt:5},color:"gray",textAlign:i?"justify":"left",fontSize:20,"data-aos":i?null:"fade-up","data-aos-duration":i?null:"1000",children:[e,t&&(0,$.jsx)("ul",{children:t.map((e=>(0,$.jsx)("li",{children:e},e)))})]})};var X=r(2027);const ee=()=>(0,$.jsx)(N.ZP,{item:!0,color:"primary",xs:12,md:6,sm:12,xl:6,sx:{height:"100vh",display:"flex",alignItems:"center"},children:(0,$.jsx)(N.ZP,{container:!0,justifyContent:"center",alignItems:"center",children:(0,$.jsxs)(N.ZP,{item:!0,"data-aos":"fade-down","data-aos-duration":"2000",sx:{ml:2,mr:2},children:[(0,$.jsx)(R.Z,{variant:"h1",align:"center",textAlign:"center",color:"white",fontSize:80,children:"Hi!"}),(0,$.jsx)(R.Z,{variant:"h1",align:"center",textAlign:"center",color:"primary",fontSize:50,children:"I'm Alejandro Jerez"}),(0,$.jsx)(R.Z,{variant:"h3",align:"center",textAlign:"center",color:"white",fontSize:40,children:"Fullstack Developer"})]})})}),te=({children:e,timeout:t,aos:r,title:i})=>(0,$.jsx)(M.Z,{title:i,children:(0,$.jsx)("div",{className:"hexagono","data-aos":r,"data-aos-duration":t,children:(0,$.jsx)("div",{style:{position:"absolute",zIndex:"1000",display:"flex",justifyContent:"center",alignItems:"center",marginRight:-10,cursor:"pointer"},children:e})})}),re=({width:e,height:t})=>(0,$.jsx)("svg",{width:e,height:t,viewBox:"0 0 256 282",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMinYMin meet",children:(0,$.jsxs)("g",{fill:"#026e00",children:[(0,$.jsx)("path",{d:"M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z"}),(0,$.jsx)("path",{d:"M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z"})]})}),ie=({width:e,heigth:t})=>(0,$.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:e,height:t,children:[(0,$.jsx)("path",{fill:"#80deea",d:"M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16\tc-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"}),(0,$.jsx)("path",{fill:"#80deea",d:"M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5\tc2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4\tc-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9\tc2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"}),(0,$.jsx)("path",{fill:"#80deea",d:"M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19\tc3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2\tc6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"}),(0,$.jsx)("circle",{cx:"24",cy:"24",r:"4",fill:"#80deea"})]}),oe=({width:e,height:t})=>(0,$.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:e,height:t,children:[(0,$.jsxs)("linearGradient",{id:"gFTOxFpGMtrTwKmyJmDVma",x1:"34.31",x2:"21.223",y1:"47.31",y2:"34.223",gradientUnits:"userSpaceOnUse",children:[(0,$.jsx)("stop",{offset:"0",stopColor:"#0176d0"}),(0,$.jsx)("stop",{offset:".454",stopColor:"#0275ce"}),(0,$.jsx)("stop",{offset:".617",stopColor:"#0472c7"}),(0,$.jsx)("stop",{offset:".733",stopColor:"#076bbc"}),(0,$.jsx)("stop",{offset:".827",stopColor:"#0d63ab"}),(0,$.jsx)("stop",{offset:".907",stopColor:"#135895"}),(0,$.jsx)("stop",{offset:".933",stopColor:"#16538c"})]}),(0,$.jsx)("polygon",{fill:"url(#gFTOxFpGMtrTwKmyJmDVma)",points:"37,44 25,44 14,33 20,27"}),(0,$.jsx)("polygon",{fill:"#50e6ff",points:"5,24 25,4 37,4 11,30"}),(0,$.jsx)("polygon",{fill:"#50e6ff",points:"37,22 20,39 14,33 25,22"}),(0,$.jsx)("rect",{width:"8.485",height:"8.485",x:"15.757",y:"28.757",fill:"#35c1f1",transform:"rotate(-45.001 20 33)"})]}),ae=({widht:e,heigth:t})=>(0,$.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:e,height:t,children:[(0,$.jsx)("path",{fill:"#5d4037",d:"M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"}),(0,$.jsx)("path",{fill:"#4caf50",d:"M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"}),(0,$.jsx)("path",{fill:"#dcedc8",d:"M23 28H25V36H23z"}),(0,$.jsx)("path",{fill:"#4caf50",d:"M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"}),(0,$.jsx)("path",{fill:"#81c784",d:"M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"})]}),se=({width:e,heigth:t})=>(0,$.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:e,height:t,children:[(0,$.jsx)("path",{fill:"#1565c0",d:"M10,12l3,25l-8.019-8.019c-1.189-1.189-1.508-2.996-0.796-4.52L10,12z"}),(0,$.jsx)("path",{fill:"#42a5f5",d:"M27.319,6.319C26.474,5.474,25.329,5,24.135,5c-0.745,0-1.479,0.185-2.135,0.538L10,12v20.343 c0,1.061,0.421,2.078,1.172,2.828L13,37h22v-5l7-11L27.319,6.319z"}),(0,$.jsx)("path",{fill:"#1565c0",d:"M10,12h21.343c1.061,0,2.078,0.421,2.828,1.172L42,21v16h-7L10,12z"}),(0,$.jsx)("polygon",{fill:"#85cbf8",points:"35,37 13,37 19,43 35,43"})]}),ne=({width:e,heigth:t})=>(0,$.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:e,height:t,children:[(0,$.jsxs)("linearGradient",{id:"goqfu1ZNmEnUrQDJEQ1bUa",x1:"10.458",x2:"26.314",y1:"12.972",y2:"26.277",gradientUnits:"userSpaceOnUse",children:[(0,$.jsx)("stop",{offset:"0",stopColor:"#26abe7"}),(0,$.jsx)("stop",{offset:"1",stopColor:"#086dbf"})]}),(0,$.jsx)("path",{fill:"url(#goqfu1ZNmEnUrQDJEQ1bUa)",d:"M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2 H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104 c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672 C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498 c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"}),(0,$.jsxs)("linearGradient",{id:"goqfu1ZNmEnUrQDJEQ1bUb",x1:"35.334",x2:"23.517",y1:"37.911",y2:"21.034",gradientUnits:"userSpaceOnUse",children:[(0,$.jsx)("stop",{offset:"0",stopColor:"#feb705"}),(0,$.jsx)("stop",{offset:"1",stopColor:"#ffda1c"})]}),(0,$.jsx)("path",{fill:"url(#goqfu1ZNmEnUrQDJEQ1bUb)",d:"M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2 h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104 c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672 C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498 c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"})]}),le=({width:e,heigth:t})=>(0,$.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:e,height:t,children:[(0,$.jsx)("path",{fill:"#ffd600",d:"M6,42V6h36v36H6z"}),(0,$.jsx)("path",{fill:"#000001",d:"M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"})]}),ce=()=>{const e=(0,P.Z)(),t=(0,y.Z)(e.breakpoints.down("md"));return(0,$.jsx)(X.Z,{sx:{backgroundImage:"url(https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/11/reactjs-code.jpg)"},children:(0,$.jsx)(X.Z,{sx:{height:"90vh",bgcolor:"rgba(255,255,255,.2)",backdropFilter:"blur(5px)"},children:(0,$.jsxs)(N.ZP,{container:!0,spacing:2,children:[(0,$.jsx)(ee,{}),(0,$.jsx)(N.ZP,{item:!0,color:"primary",flexDirection:"column",justifyContent:"center",xs:12,md:6,xl:6,sx:{height:"100vh",display:t?"none":"flex"},children:(0,$.jsxs)(N.ZP,{container:!0,justifyContent:"center",children:[(0,$.jsxs)(N.ZP,{item:!0,sx:{display:"flex"},children:[(0,$.jsx)(te,{timeout:2e3,aos:"fade-down",title:"ReactJS",children:(0,$.jsx)(ie,{width:100,heigth:100})}),(0,$.jsx)(te,{timeout:2e3,aos:"fade-down",title:"Python",children:(0,$.jsx)(ne,{width:100,height:100})})]}),(0,$.jsxs)(N.ZP,{item:!0,sx:{display:"flex",mt:5,mb:5},children:[(0,$.jsx)(te,{timeout:2e3,aos:"fade-right",title:"NodeJS",children:(0,$.jsx)(re,{width:100,height:100})}),(0,$.jsx)(te,{timeout:2e3,aos:"zoom-in",title:"JavaScript",children:(0,$.jsx)(le,{width:100,height:100})}),(0,$.jsx)(te,{timeout:2e3,aos:"fade-left",title:"Flutter",children:(0,$.jsx)(oe,{width:100,height:100})})]}),(0,$.jsxs)(N.ZP,{item:!0,sx:{display:"flex"},children:[(0,$.jsx)(te,{timeout:2e3,aos:"fade-up",title:"MongoDB",children:(0,$.jsx)(ae,{widht:100,heigth:100})}),(0,$.jsx)(te,{timeout:2e3,aos:"fade-up",title:"Dart",children:(0,$.jsx)(se,{widht:100,heigth:100})})]})]})})]})})})},de=({subtitle:e})=>{const t=(0,P.Z)(),r=(0,y.Z)(t.breakpoints.down("sm"));return(0,$.jsx)(N.ZP,{item:!0,xl:12,md:12,xs:12,sx:{display:"flex",ml:r?2:10,mr:10,mt:5},"data-aos":r?null:"fade-up","data-aos-duration":r?null:"1000",children:(0,$.jsx)(R.Z,{variant:"caption",fontSize:40,align:"center",textAlign:"left",color:"primary",children:(0,$.jsx)("strong",{children:e})})})},he=({title:e,window:t})=>{const r=(0,P.Z)(),i=(0,y.Z)(r.breakpoints.down("sm"));return(0,$.jsx)(U.Z,{"data-aos":i?null:"fade-up","data-aos-duration":i?null:"1000",variant:"middle",sx:{mt:5,mb:5},children:(0,$.jsx)(R.Z,{variant:"h1",fontSize:50,color:"primary",children:e})})},xe=()=>{const e=(0,P.Z)(),t=(0,y.Z)(e.breakpoints.down("md"));return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(F.W_,{name:"home",children:(0,$.jsx)(ce,{})}),(0,$.jsxs)(F.W_,{name:"aboutme",children:[(0,$.jsx)(he,{title:"About Me"}),(0,$.jsxs)(N.ZP,{container:!0,spacing:0,sx:{display:"flex"},alignItems:"center",children:[(0,$.jsx)(de,{subtitle:"¿Who I am?"}),(0,$.jsxs)(N.ZP,{item:!0,xl:12,md:12,xs:12,children:[(0,$.jsx)(Y,{content:"Colombian, originally from Bogotá, D.C. I have worked in different projects as a Backend mainly, I also participate in some projects such as Frontend, although my great passion is the Backend since it is where I perform in a better way."}),(0,$.jsx)(Y,{content:"I have led developments of Mobile platforms based on technologies such as:",list:["Flutter (Mainly).","Ionic.","React Native."]})]}),(0,$.jsx)(de,{subtitle:"My Skills"}),(0,$.jsx)(N.ZP,{item:!0,xl:12,md:12,xs:12,children:(0,$.jsx)(Y,{list:["JavaScript.","Flutter.","React.","Node.","MongoDB.","GitHub."]})}),(0,$.jsx)(de,{subtitle:"My Trajectory"}),(0,$.jsxs)(N.ZP,{item:!0,xl:12,md:12,xs:12,children:[(0,$.jsx)(Y,{content:"Backend Developer with more than 4 years of experience, creating my first website in 2015, I worked for a period of three years leading projects based on technologies such as Flutter in the section of Mobile applications and NodeJS in the section of API'S or Backend this being its main ExpressJS Framework. All this working for a satellite tracking company."}),(0,$.jsx)(Y,{content:(0,$.jsxs)($.Fragment,{children:["Currently I am working as a Freelance developer, I have more than 20 certificates focused on web development and a full career on the platform"," ",(0,$.jsx)("a",{href:"https://platzi.com/p/DAJG/",style:{color:e.palette.primary.main},target:"_blank",children:"platzi.com"}),". I am currently working to hone my skills in the English language."]})})]}),(0,$.jsx)(de,{subtitle:"Recent Projects"}),(0,$.jsxs)(N.ZP,{item:!0,xl:12,md:12,xs:12,children:[(0,$.jsx)(Y,{content:"I am currently working on a Freelance project for a satellite tracking company."}),(0,$.jsx)(Y,{content:"My free time is spent on my own project which focuses on the Civil Engineering ruble. Based on technologies like ReactJS, Firebase and MaterialUI. This accompanied by 3 companions."})]})]})]}),(0,$.jsxs)(F.W_,{name:"services",children:[(0,$.jsx)(he,{title:"Services"}),(0,$.jsxs)(N.ZP,{container:!0,spacing:2,sx:{pl:2,pr:2},columns:9,children:[(0,$.jsx)(N.ZP,{item:!0,sx:{display:"flex"},justifyContent:"center",xs:12,md:3,children:(0,$.jsx)(K,{image:"https://img.freepik.com/free-vector/low-poly-abstract-white-golden-lines-background_1017-26507.jpg?size=626&ext=jpg",title:"Web Design",icon:(0,$.jsx)(T.Ud8,{size:50,color:e.palette.primary.dark,stroke:1}),content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, sapiente."})}),(0,$.jsx)(N.ZP,{item:!0,sx:{display:"flex"},justifyContent:"center",xs:12,md:3,children:(0,$.jsx)(K,{image:"https://image.freepik.com/vector-gratis/hermoso-fondo-blanco-formas-lineas-doradas_1017-27145.jpg",title:"API",icon:(0,$.jsx)(T.IJ_,{size:50,color:e.palette.primary.dark,stroke:1}),content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, sapiente."})}),(0,$.jsx)(N.ZP,{item:!0,sx:{display:"flex"},justifyContent:"center",xs:12,md:3,children:(0,$.jsx)(K,{image:"https://image.freepik.com/vector-gratis/fondo-blanco-formas-lineas-lujo-dorado_1017-27144.jpg",title:"Mobile Development",icon:(0,$.jsx)(T.BQS,{size:50,color:e.palette.primary.dark,stroke:1}),content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, sapiente."})})]})]}),(0,$.jsxs)(F.W_,{name:"contact",id:"contact",children:[(0,$.jsx)(he,{title:"Contact"}),(0,$.jsxs)(b.Z,{sx:{position:"relative",mb:5},children:[(0,$.jsxs)(N.ZP,{container:!0,spacing:0,children:[(0,$.jsx)(N.ZP,{item:!0,sm:6,md:6,sx:6,sx:{height:"500px",bgcolor:"white",borderTopRightRadius:"30px",borderBottomRightRadius:"30px",display:t?"none":"flex",alignItems:"center"},children:(0,$.jsx)("img",{src:"https://berrydashboard.io/static/media/img-groupmail.b23eba3a.png",className:"floating-animation"})}),(0,$.jsx)(N.ZP,{item:!0,sm:6,md:6,sx:6,sx:{height:"500px",bgcolor:e.palette.primary.light,display:t?"none":"block"}})]}),(0,$.jsx)(b.Z,{sx:t?{bgcolor:e.palette.primary.light,borderRadius:"12px",p:5}:{position:"absolute",width:"50%",top:"50%",left:"50%",transform:"translate(-30%, -50%)",bgcolor:e.palette.primary.light,borderRadius:"12px",boxShadow:"rgb(0 0 0 / 20%) 0px 0px 50px",p:5},children:(0,$.jsxs)(N.ZP,{container:!0,spacing:2,children:[(0,$.jsx)(N.ZP,{item:!0,xs:6,children:(0,$.jsx)(G.Z,{fullWidth:!0,id:"outlined-basic",label:"Name"})}),(0,$.jsx)(N.ZP,{item:!0,xs:6,children:(0,$.jsx)(G.Z,{fullWidth:!0,id:"outlined-basic",label:"Phone Number (optional)"})}),(0,$.jsx)(N.ZP,{item:!0,xs:6,children:(0,$.jsx)(G.Z,{fullWidth:!0,id:"outlined-basic",label:"Name"})}),(0,$.jsx)(N.ZP,{item:!0,xs:6,children:(0,$.jsx)(G.Z,{fullWidth:!0,id:"outlined-basic",label:"Subject"})}),(0,$.jsxs)(N.ZP,{item:!0,xs:12,children:[(0,$.jsx)(G.Z,{fullWidth:!0,id:"outlined-basic",multiline:!0,rows:4,label:"Message"}),(0,$.jsx)(Z.Z,{sx:{mt:2},variant:"outlined",fullWidth:!0,endIcon:(0,$.jsx)(T.h9l,{}),children:"Send Mail"})]})]})})]}),(0,$.jsx)(b.Z,{sx:{height:100}})]})]})},pe=()=>(0,$.jsx)(u.Z5,{children:(0,$.jsx)(u.AW,{path:"/",element:(0,$.jsx)(J,{}),children:(0,$.jsx)(u.AW,{index:!0,element:(0,$.jsx)(xe,{})})})});var me=r(1701),ge=r.n(me);const ue=()=>((0,i.useEffect)((()=>{ge().init()}),[]),(0,$.jsx)(n.Z,{injectFirst:!0,children:(0,$.jsxs)(s.Z,{theme:p({}),children:[(0,$.jsx)(l.ZP,{}),(0,$.jsx)(j,{children:(0,$.jsx)(pe,{})})]})}));(0,o.render)((0,$.jsx)(i.StrictMode,{children:(0,$.jsx)(a.VK,{children:(0,$.jsx)(ue,{})})}),document.getElementById("App"))}},e=>{var t=t=>e(e.s=t);e.O(0,[584],(()=>(t(8578),t(5477))));e.O()}]);