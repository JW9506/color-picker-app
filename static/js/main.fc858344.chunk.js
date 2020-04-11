(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{264:function(e,a,t){e.exports=t(506)},269:function(e,a,t){},273:function(e,a,t){},278:function(e,a,t){},505:function(e,a,t){},506:function(e,a,t){"use strict";t.r(a);var o=t(0),n=t.n(o),r=t(10),l=t.n(r),c=t(38),i=t(109),s=t(24),m=t(25),u=t(26),d=t(27),p=t(66),h=(t(269),t(236)),f=t.n(h),g=t(4),b=(t(273),t(67)),v=t.n(b),C=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={copied:!1},e.changeCopyState=function(){e.setState({copied:!0},(function(){setTimeout((function(){e.setState({copied:!1})}),1500)}))},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props,a=e.background,t=e.name,o=e.id,r=e.paletteId,l=this.state.copied,i=v()(a).luminance()<=.08,s=v()(a).luminance()>=.5;return n.a.createElement(f.a,{text:a,onCopy:this.changeCopyState},n.a.createElement("div",{className:"ColorBox",style:{background:a}},n.a.createElement("div",{className:Object(g.a)("copy-overlay",l&&"show"),style:{background:a}}),n.a.createElement("div",{className:Object(g.a)("copy-msg",l&&"show",i&&"light-text",s&&"dark-text")},n.a.createElement("h1",null,"copied!"),n.a.createElement("p",null,a)),n.a.createElement("div",{className:"copy-container"},n.a.createElement("div",{className:Object(g.a)("box-content",i&&"light-text")},n.a.createElement("span",null,t)),n.a.createElement("button",{className:Object(g.a)("copy-button",i&&"light-text",s&&"dark-text")},"Copy")),r&&n.a.createElement(c.b,{to:"/palette/".concat(r,"/").concat(o),onClick:function(e){return e.stopPropagation()}},n.a.createElement("span",{className:Object(g.a)("see-more",s&&"dark-text")},"More"))))}}]),t}(n.a.Component),E=(t(278),t(248)),y=(t(333),t(566)),w=t(569),j=t(567),N=t(241),S=t.n(N),O=t(554),k=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={format:"hex",open:!1},e.handleSelectChange=function(a){e.setState((function(e){return{format:a.target.value,open:!e.open}}),(function(){e.props.handleChange(e.state.format)}))},e.closeSnackbar=function(){e.setState((function(e){return{open:!e.open}}))},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props,a=e.level,t=e.changeLevel,o=this.state,r=o.format,l=o.open;return n.a.createElement("header",{className:"Navbar"},n.a.createElement("div",{className:"logo"},n.a.createElement(c.b,{to:"/"},"reactcolorpicker")),a&&t&&n.a.createElement("div",{className:"slider-container"},n.a.createElement("span",null,"Level: ",a),n.a.createElement("div",{className:"slider"},n.a.createElement(E.a,{defaultValue:a,min:100,max:900,step:100,onAfterChange:t}))),n.a.createElement("div",{className:"select-container"},n.a.createElement(y.a,{value:r,onChange:this.handleSelectChange},n.a.createElement(w.a,{value:"hex"},"HEX - #ffffff"),n.a.createElement(w.a,{value:"rgb"},"RGB - rgb(255,255,255)"),n.a.createElement(w.a,{value:"rgba"},"RGBA - rgba(255,255,255,1.0)"))),n.a.createElement(j.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:l,autoHideDuration:3e3,message:n.a.createElement("span",{id:"message-id"},"Format Changed to ",r.toUpperCase(),"!"),ContentProps:{"aria-describedby":"message-id"},onClose:this.closeSnackbar,action:[n.a.createElement(O.a,{onClick:this.closeSnackbar,color:"inherit",key:"close","aria-label":"close"},n.a.createElement(S.a,null))]}))}}]),t}(n.a.Component),P=function(e){var a=e.palette,t=e.emoji;return n.a.createElement("footer",{className:"pallette-footer"},a,n.a.createElement("span",{className:"emoji"},t))},B=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={level:500,format:"hex"},e.changeLevel=function(a){e.setState({level:a})},e.changeFormat=function(a){e.setState({format:a})},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props,a=e.colors,t=e.palette,o=e.emoji,r=e.id,l=this.state,c=l.level,i=l.format,s=a[c].map((function(e){return n.a.createElement(C,{key:e.id,background:e[i],name:e.name,id:e.id,paletteId:r})}));return n.a.createElement("div",{className:"Palette"},n.a.createElement(k,{level:c,changeLevel:this.changeLevel,handleChange:this.changeFormat}),n.a.createElement("div",{className:"Palette-colors"},s),n.a.createElement(P,{palette:t,emoji:o}))}}]),t}(n.a.Component),x=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"},{name:"hellokittypink",color:"#B01455"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],F=t(176),D=[50,100,200,300,400,500,600,700,800,900];function A(e){var a,t={palette:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},o=Object(F.a)(D);try{for(o.s();!(a=o.n()).done;){var n=a.value;t.colors[n]=[]}}catch(h){o.e(h)}finally{o.f()}var r,l,c,i=Object(F.a)(e.colors);try{for(i.s();!(r=i.n()).done;){var s=r.value,m=s.color,u=s.name,d=(l=m,c=10,v.a.scale(function(e){return[v()(e).darken(1.4).hex(),e,"#fff"]}(l)).mode("lab").colors(c)).reverse();for(var p in d)t.colors[D[p]].push({name:"".concat(u," ").concat(D[p]),id:u.toLowerCase().replace(/ /g,"-"),hex:d[p],rgb:v()(d[p]).css(),rgba:v()(d[p]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(h){i.e(h)}finally{i.f()}return t}var I=t(507),G=t(509),L=t(130),M=t.n(L),R=Object(I.a)({root:{backgroundColor:"white",border:"1px solid black",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg":{opacity:1}},colors:{backgroundColor:"white",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-3.5px"},deleteIcon:{color:"white",backgroundColor:"#eb3d30",width:20,height:20,position:"absolute",right:0,top:0,padding:1,zIndex:10,opacity:0,transition:"all 0.3s ease-in-out"}}),T=Object(G.a)(R)((function(e){var a=e.classes,t=e.name,o=e.emoji,r=e.colors,l=e.handleClick,c=e.deletePalette,i=r.map((function(e){return n.a.createElement("div",{key:e.name,className:a.miniColor,style:{backgroundColor:e.color}})}));return n.a.createElement("div",{className:a.root,onClick:l},n.a.createElement(M.a,{className:a.deleteIcon,onClick:function(e){e.stopPropagation(),c()}}),n.a.createElement("div",{className:a.colors},i),n.a.createElement("h5",{className:a.title},t," ",n.a.createElement("span",{className:a.emoji},o)))})),U=Object(I.a)({root:{backgroundColor:"blue",height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center"},container:{width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},nav:{display:"flex",width:"100%",justifyContent:"space-between",color:"white",alignItems:"center","& a":{color:"white",textDecoration:"none"}},palette:{boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",gridGap:"5%"}}),q=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).goToPalette=function(a){e.props.history.push("/palette/".concat(a))},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this,a=this.props,t=a.classes,o=a.palettes,r=a.deletePalette;return n.a.createElement("div",{className:t.root},n.a.createElement("div",{className:t.container},n.a.createElement("nav",{className:t.nav},n.a.createElement("h1",null,"React Colors"),n.a.createElement(c.b,{to:"/palette/new"},"Create Palette")),n.a.createElement("div",{className:t.palette},o.map((function(a){return n.a.createElement(T,{key:Math.random(),name:a.paletteName,emoji:a.emoji,colors:a.colors,deletePalette:function(){return r(a.id)},handleClick:function(){return e.goToPalette(a.id)}})})))))}}]),t}(n.a.Component),H=Object(G.a)(U)(q),V=t(250),z=function(e){var a=e.palette,t=e.id,r=e.colors,l=e.colorId,i=e.emoji,s=Object(o.useState)({format:"hex"}),m=Object(V.a)(s,2),u=m[0],d=m[1],p=function(e,a){var t=[];for(var o in e)t.push(e[o].filter((function(e){return e.id===a}))[0]);return t.slice(1)}(r,l).map((function(e){return n.a.createElement(C,{key:e.hex,background:e[u.format],name:e.name,id:e.id})}));return n.a.createElement("div",{className:"SingleColorPalette Palette"},n.a.createElement(k,{handleChange:function(e){d({format:e})}}),n.a.createElement("div",{className:"Palette-colors"},p,n.a.createElement("div",{className:"go-back ColorBox"},n.a.createElement(c.b,{className:"back-button",to:"/palette/".concat(t)},"Go Back"))),n.a.createElement(P,{palette:a,emoji:i}))};var W=t(55),J=t(78),Y=t(132),K=t(555),Q=t(5),X=Object(K.a)({root:{height:"20%",width:"25%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-6.5px","&:hover svg":{color:"white",transform:"scale(1.2)"}},boxContent:{position:"absolute",width:"100%",left:0,bottom:0,color:"rgba(0, 0, 0, 1)",letterSpacing:1,textTransform:"uppercase",fontSize:15,padding:10,display:"flex",justifyContent:"space-between"},deleteIcon:{color:"rgba(0,0,0,0.5)",transition:"all 0.3s ease-in-out"}}),$=Object(Q.a)(X)(Object(Y.b)((function(e){var a=e.color,t=e.classes,o=e.name,r=e.handleDelete;return n.a.createElement("div",{className:t.root,style:{backgroundColor:a}},n.a.createElement("div",{className:t.boxContent},n.a.createElement("span",null,o),n.a.createElement(M.a,{className:t.deleteIcon,onClick:r})))}))),Z=Object(Y.a)((function(e){var a=e.colors,t=e.handleDelete;return n.a.createElement("div",{style:{height:"100%"}},a.map((function(e,a){return n.a.createElement($,{index:a,key:Math.random(),name:e.name,color:e.color,handleDelete:function(){return t(e.name)}})})))})),_=t(562),ee=t(563),ae=t(564),te=t(253),oe=t(243),ne=t.n(oe),re=t(561),le=t(556),ce=t(560),ie=t(558),se=t(559),me=t(557),ue=t(59),de=(t(341),t(249)),pe=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={newPaletteName:"",stage:"paletteName"},e.handleChange=function(a){var t=a.target,o=t.name,n=t.value;e.setState((function(e){return Object(J.a)({},e,Object(W.a)({},o,n))}))},e.showEmojiPicker=function(a){a.preventDefault(),e.setState({stage:"emojiPicker"})},e.handleEmojiSelect=function(a){var t=e.state.newPaletteName;"native"in a?e.props.savePalette(t,a.native):e.props.savePalette(t,a.name)},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;ue.ValidatorForm.addValidationRule("paletteNameUnique",(function(a){return!!e.props.palettes.every((function(e){return e.paletteName.toLowerCase()!==a.toLowerCase()}))}))}},{key:"render",value:function(){var e=this.state,a=e.newPaletteName,t=e.stage,o=this.props.handlePaletteNameDialog;return n.a.createElement("div",null,n.a.createElement(le.a,{open:"emojiPicker"===t,onClose:o},n.a.createElement(me.a,{id:"form-dialog-title"},"Pick a Palette Emoji"),n.a.createElement(de.a,{onSelect:this.handleEmojiSelect,title:"",showPreview:!1,showSkinTones:!1})),n.a.createElement(le.a,{open:"paletteName"===t,"aria-labelledby":"form-dialog-title",onClose:o},n.a.createElement(me.a,{id:"form-dialog-title"},"Choose a Palette Name"),n.a.createElement(ue.ValidatorForm,{onSubmit:this.showEmojiPicker},n.a.createElement(ie.a,null,n.a.createElement(se.a,null,"Please enter a name for your new beautiful palette. Make sure it's unique"),n.a.createElement(ue.TextValidator,{name:"newPaletteName",value:a,label:"Palette Name",fullWidth:!0,margin:"normal",onChange:this.handleChange,validators:["required","paletteNameUnique"],errorMessages:["Palette name is required","This palette name has been used"]})),n.a.createElement(ce.a,null,n.a.createElement(re.a,{color:"primary",onClick:o},"Cancel"),n.a.createElement(re.a,{variant:"contained",color:"primary",type:"submit"},"Save Palette"))))," ")}}]),t}(n.a.Component),he=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={formShowing:!1},e.handlePaletteNameDialog=function(){e.setState((function(e){return{formShowing:!e.formShowing}}))},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.handleDrawerOpen,o=e.savePalette,r=e.open,l=e.palettes;return n.a.createElement("div",{className:a.root},n.a.createElement(_.a,null),n.a.createElement(ee.a,{position:"fixed",color:"default",className:Object(g.a)(a.appBar,Object(W.a)({},a.appBarShift,r))},n.a.createElement(ae.a,null,n.a.createElement(O.a,{color:"inherit","aria-label":"open drawer",onClick:t,edge:"start",className:Object(g.a)(a.menuButton,r&&a.hide)},n.a.createElement(ne.a,null)),n.a.createElement(te.a,{variant:"h6",noWrap:!0},"Create a Palette")),n.a.createElement("div",{className:a.navBtns},n.a.createElement(c.b,{to:"/",className:a.button},n.a.createElement(re.a,{variant:"contained",color:"secondary"},"Go Back")),n.a.createElement(re.a,{variant:"contained",color:"primary",onClick:this.handlePaletteNameDialog,className:a.button},"Save"))),this.state.formShowing&&n.a.createElement(pe,{palettes:l,savePalette:o,handlePaletteNameDialog:this.handlePaletteNameDialog}))}}]),t}(n.a.Component),fe=Object(Q.a)((function(e){return Object(K.a)({root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:64},appBarShift:{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},navBtns:{marginRight:"1rem","& a":{textDecoration:"none"}},button:{margin:"0 0.5rem"}})}),{withTheme:!0})(he),ge=t(244),be=t.n(ge),ve=t(568),Ce=t(565),Ee=t(246),ye=t.n(Ee),we=t(247),je=t.n(we),Ne=t(245),Se=Object(K.a)({root:{"& .chrome-picker":{width:"100% !important",marginTop:"2rem"}},addColor:{width:"100%",padding:"1rem",marginTop:"1rem",fontSize:"2rem"},colorNameInput:{width:"100%",height:70}}),Oe=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={currentColor:"teal",newColorName:""},e.updateCurrentColor=function(a){e.setState({currentColor:a.hex})},e.handleChange=function(a){var t=a.target,o=t.name,n=t.value;e.setState((function(e){return Object(J.a)({},e,Object(W.a)({},o,n))}))},e.addNewColor=function(a){var t=e.state,o=t.newColorName,n={color:t.currentColor,name:o};e.props.addNewColor(a,n),e.setState({newColorName:""})},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.colors;ue.ValidatorForm.addValidationRule("colorNameUnique",(function(e){return!!a.every((function(a){return a.name.toLowerCase()!==e.toLowerCase()}))})),ue.ValidatorForm.addValidationRule("colorUnique",(function(){return!!a.every((function(a){return a.color!==e.state.currentColor}))}))}},{key:"render",value:function(){var e=this.props,a=e.isFullColor,t=e.classes,o=this.state,r=o.currentColor,l=o.newColorName;return n.a.createElement("div",{className:t.root},n.a.createElement(Ne.ChromePicker,{color:r,onChangeComplete:this.updateCurrentColor}),n.a.createElement(ue.ValidatorForm,{onSubmit:this.addNewColor},n.a.createElement(ue.TextValidator,{name:"newColorName",className:t.colorNameInput,label:"Color Name",variant:"filled",margin:"normal",value:l,onChange:this.handleChange,validators:["required","colorNameUnique","colorUnique"],errorMessages:["This field is required","This color name has been used","This color has been used"]}),n.a.createElement(re.a,{variant:"contained",type:"submit",color:"primary",disabled:a,className:t.addColor,style:{backgroundColor:a?"rgba(0, 0, 0, 0.12)":r}},a?"Palette Full":"Add Color")))}}]),t}(n.a.Component),ke=Object(Q.a)(Se)(Oe),Pe=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={open:!1,currentColor:"teal",newColorName:"",colors:e.props.palettes[0].colors},e.handleDrawerOpen=function(){e.setState({open:!0})},e.handleDrawerClose=function(){e.setState({open:!1})},e.addNewColor=function(a,t){a.preventDefault(),e.setState((function(e){return{colors:[].concat(Object(i.a)(e.colors),[t])}}))},e.savePalette=function(a,t){var o={paletteName:a,id:a.toLowerCase().replace(/ /g,"-"),emoji:t,colors:e.state.colors};e.props.savePalette(o),e.props.history.push("/")},e.handleDelete=function(a){e.setState((function(t){return Object(J.a)({},t,{colors:e.state.colors.filter((function(e){return e.name!==a}))})}))},e.shouldCancelStart=function(e){return"tagName"in e.target&&("path"===e.target.tagName||"svg"===e.target.tagName)},e.onSortEnd=function(a){var t=a.oldIndex,o=a.newIndex;e.setState((function(e){var a=e.colors;return{colors:be()(a,t,o)}}))},e.clearColor=function(){return e.setState({colors:[]})},e.addRandomColor=function(){var a=e.props.palettes.flatMap((function(e){return e.colors})),t=Math.floor(Math.random()*a.length);e.setState((function(e){return{colors:[].concat(Object(i.a)(e.colors),[a[t]])}}))},e}return Object(m.a)(t,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.theme,o=e.maxColors,r=e.palettes,l=this.state,c=l.open,i=l.colors,s=o<=i.length;return n.a.createElement("div",{className:a.root},n.a.createElement(fe,{open:c,palettes:r,savePalette:this.savePalette,handleDrawerOpen:this.handleDrawerOpen}),n.a.createElement(ve.a,{className:a.drawer,variant:"persistent",anchor:"left",open:c,classes:{paper:a.drawerPaper}},n.a.createElement("div",{className:a.drawerHeader},n.a.createElement(O.a,{onClick:this.handleDrawerClose},"ltr"===t.direction?n.a.createElement(ye.a,null):n.a.createElement(je.a,null))),n.a.createElement(Ce.a,null),n.a.createElement("div",{className:a.container},n.a.createElement(te.a,{variant:"h4",gutterBottom:!0},"Design your palette"),n.a.createElement("div",{className:a.buttons},n.a.createElement(re.a,{variant:"contained",color:"secondary",onClick:this.clearColor,className:a.button},"Clear Palette"),n.a.createElement(re.a,{variant:"contained",color:"primary",disabled:s,onClick:this.addRandomColor,className:a.button},"Random Color")),n.a.createElement(ke,{colors:i,isFullColor:s,addNewColor:this.addNewColor}))),n.a.createElement("main",{className:Object(g.a)(a.content,Object(W.a)({},a.contentShift,c))},n.a.createElement("div",{className:a.drawerHeader}),n.a.createElement(Z,{colors:i,handleDelete:this.handleDelete,axis:"xy",shouldCancelStart:this.shouldCancelStart,onSortEnd:this.onSortEnd})))}}]),t}(n.a.Component);Pe.defaultProps={maxColors:20};var Be=Object(Q.a)((function(e){return Object(K.a)({root:{display:"flex"},drawer:{width:400,flexShrink:0},drawerPaper:{width:400,alignItems:"center"},drawerHeader:Object(J.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1),width:"100%"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,height:"calc(100vh - 64px)",transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},container:{width:"90%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},buttons:{width:"100%"},button:{width:"50%"}})}),{withTheme:!0})(Pe),xe=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var o,n;Object(s.a)(this,t),(o=a.call(this,e)).savePalette=function(e){o.setState((function(a){return{palettes:[].concat(Object(i.a)(a.palettes),[e])}}),o.syncLocalStorage)},o.deletePalette=function(e){o.setState((function(a){return{palettes:a.palettes.filter((function(a){return a.id!==e}))}}),o.syncLocalStorage)};var r=JSON.parse(localStorage.getItem("palettes")||"[]");return n=r.length>0?r:x,o.state={palettes:n},o}return Object(m.a)(t,[{key:"findPalette",value:function(e){return this.state.palettes.find((function(a){return a.id===e}))||this.state.palettes[0]}},{key:"syncLocalStorage",value:function(){localStorage.setItem("palettes",JSON.stringify(this.state.palettes))}},{key:"render",value:function(){var e=this,a=this.state.palettes;return n.a.createElement(p.c,null,n.a.createElement(p.a,{exact:!0,path:"/",render:function(t){return n.a.createElement(H,Object.assign({palettes:a,deletePalette:e.deletePalette},t))}}),n.a.createElement(p.a,{exact:!0,path:"/palette/new",render:function(t){return n.a.createElement(Be,Object.assign({},t,{savePalette:e.savePalette,palettes:a}))}}),n.a.createElement(p.a,{exact:!0,path:"/palette/:id",render:function(a){return n.a.createElement(B,A(e.findPalette(a.match.params.id)))}}),n.a.createElement(p.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(a){return n.a.createElement(z,Object.assign({colorId:a.match.params.colorId},A(e.findPalette(a.match.params.paletteId))))}}))}}]),t}(n.a.Component);t(505),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(c.a,null,n.a.createElement(xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[264,1,2]]]);
//# sourceMappingURL=main.fc858344.chunk.js.map