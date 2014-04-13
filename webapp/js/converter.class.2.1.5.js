/**
 * This file is part of TWCC.
 *
 * TWCC is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * TWCC is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with TWCC.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @copyright Copyright (c) 2010-2014 Clément Ronzon
 * @license http://www.gnu.org/licenses/agpl.txt
 */
 if(typeof removeAllChilds!="function"){function removeAllChilds(e){if(e.hasChildNodes()){while(e.childNodes.length>=1){e.removeChild(e.firstChild)}}}}if(typeof getEvent!="function"){function getEvent(e){if(!e&&window.event){e=window.event}return e}}if(typeof getTargetNode!="function"){function getTargetNode(e){var t;e=getEvent(e);if(e!=undefined){if(e.target){t=e.target}else if(e.srcElement){t=e.srcElement}if(t.nodeType==3){t=t.parentNode}}return t}}if(typeof getKeyCode!="function"){function getKeyCode(e){e=getEvent(e);if(e.keyCode){return e.keyCode}else{return e.which}}}$.fn.sort=function(){return this.pushStack([].sort.apply(this,arguments),[])};$.fn.sortOptions=function(e){jQuery("option",this).sort(e).appendTo(this);return this};$.fn.sortGroups=function(e){jQuery("optgroup",this).sort(e).appendTo(this);return this};$.fn.sortOptionsByText=function(){var e=function(e,t){var n=jQuery(e).text().toUpperCase();var r=jQuery(t).text().toUpperCase();return n<r?-1:n>r?1:0};return this.sortOptions(e)};$.fn.sortOptgroupsByLabel=function(){var e=function(e,t){var n=jQuery(e).prop("label").toUpperCase();var r=jQuery(t).prop("label").toUpperCase();return n<r?-1:n>r?1:0};return this.sortGroups(e)};$.fn.sortGrpsNOptionsByText=function(){var e=this;$("optgroup",this).each(function(t){$("optgroup:eq("+t+")",e).sortOptionsByText()});return this.sortOptgroupsByLabel()};$.fn.sortOptionsByValue=function(){var e=function(e,t){var n=jQuery(e).val();var r=jQuery(t).val();return n<r?-1:n>r?1:0};return this.sortOptions(e)};if(typeof transcodeCRSProj!="function"){function transcodeCRSProj(e){var t;switch(e){case"utm":t="zxy";break;case"lcc":case"tmerc":t="xy";break;case"longlat":t="dd";break;case"csv":t="textarea";break;case"W3wConnector":t="xx";break;default:t="xy";break}return t}}if(typeof is_array!="function"){function is_array(e){return typeof e=="object"&&e instanceof Array}}if(typeof removeOption!="function"){function removeOption(e,t){$("option[value='"+t.toString()+"']",e).remove()}}if(typeof removeEmptyOptgroups!="function"){function removeEmptyOptgroups(e){$("optgroup:empty",e).remove()}}if(typeof computeConvergence!="function"){function computeConvergence(e,t,n,r,i){var s=typeof surveyConvention==="undefined"?true:surveyConvention;var o=r?degToRad(r*6-183):n;var u=degToRad(i.y);var a=degToRad(i.x);var f=(e-t)/e;var l=f*Math.pow(Math.cos(u),2)/(1-f);var c=a-o;var h=Math.sin(u);var p=(1+3*l+2*Math.pow(l,2))*Math.sin(u)*Math.pow(Math.cos(u),2)/3;var d=(2-Math.pow(Math.tan(u),2))*Math.sin(u)*Math.pow(Math.cos(u),4)/15;var v=c*h+Math.pow(c,3)*p+Math.pow(c,5)*d;v*=s?-1:1;return radToDeg(v)}}if(typeof getUTMZone!="function"){function getUTMZone(e){return e>=0?Math.floor((e+180)/6)+1:Math.floor(e/6)+31}}if(typeof getEmisphere!="function"){function getEmisphere(e){return e>=0?"n":"s"}}if(typeof getNumber!="function"){function getNumber(e){if(isNaN(e)){return}else{return e}}}if(typeof xtdParseFloat!="function"){function xtdParseFloat(e){var e=e.toString().replace(/\,/gi,".");if(isNaN(e))e=0;return parseFloat(e)}}if(typeof xtdRound!="function"){function xtdRound(e,t){var n;t=t!=undefined?t:0;n=e.toString();if(n==""||n=="NaN"){return""}else{return Math.round(xtdParseFloat(e)*Math.pow(10,xtdParseFloat(t)))/Math.pow(10,xtdParseFloat(t))}}}if(typeof dmsToDd!="function"){function dmsToDd(e){var t,n;if(e==undefined){return}t=Math.abs(xtdParseFloat(e.D));t=t+Math.abs(xtdParseFloat(e.M))/60;t=t+Math.abs(xtdParseFloat(e.S))/3600;n=xtdParseFloat(e.D)>=0?1:-1;n=n*(e.C=="N"||e.C=="E"?1:-1);return n*t}}if(typeof degToRad!="function"){function degToRad(e){return e*Math.PI/180}}if(typeof radToDeg!="function"){function radToDeg(e){return e*180/Math.PI}}if(typeof ddToDms!="function"){function ddToDms(e,t){var n,r,i,s,o;if(e==""||e==undefined){n="";i="";s="";if(t){o=t.N?"N":"E"}}else{if(t){o=e>=0?t.N?"N":"E":t.S?"S":"W"}e=Math.abs(e);n=Math.floor(e);r=(e-n)*60;i=Math.floor(r);s=(r-i)*60}return{C:o,D:n.toString(),M:i.toString(),S:s.toString()}}}if(typeof getM!="function"){function getM(e,t){var n;n=t=="m"?1:1e3;return(xtdParseFloat(e)*n).toString()}}if(typeof setM!="function"){function setM(e,t){var n;n=t=="m"?1:1e3;return(xtdParseFloat(e)/n).toString()}}GeodesicConverter=function(e,t,n,r,i,s,o,u,a,f,l){var c;this.Units=n?n:{dms:{D:"°",M:"'",S:"''"},dd:{x:{DD:"°E"},y:{DD:"°N"}},xy:{XY:{m:"m",km:"km"}},zxy:{XY:{m:"m",km:"km"}},xx:{xx:" "},csv:{CSV:"",L:""}};this.Labels=r?r:{dms:{x:"Lng = ",y:"Lat = "},dd:{x:"Lng = ",y:"Lat = "},xy:{x:"X = ",y:"Y = ",convergence:"Conv. = "},zxy:{x:"X = ",y:"Y = ",z:"Fuseau = ",e:"Emisphère = ",convergence:"Conv. = "},xx:{xx:" "},csv:{csv:"CSV : ",l:"Format :"}};this.Wrapper=i?i:{converter:["div",{"class":"unit_div"}],title:["h3"],set:["table",{border:"0","class":"form_tbl spaced_1"}],fields:["td",{"class":"field"}],label:["td",{"class":"label"}],container:["tr"]};this.Options=s?s:{x:{E:"Est",W:"Ouest"},y:{N:"Nord",S:"Sud"},o:{_DMS:"Deg. min. sec. ",_DD:"Deg. décimaux"},e:{n:"Nord ",s:"Sud"},f:{c:"CSV",m:"Manu."},u:{_M:"Mètres ",_KM:"Kilomètres"}};this.Defs=o;this.Referer=u;this.idSource=e;this.idDest=t;this.Source=$("#xy"+e)[0];this.crsSource=$("#crs"+e)[0];this.Dest=t?$("#xy"+t)[0]:undefined;this.crsDest=t?$("#crs"+t)[0]:undefined;this.ProjHash={};this.converter=[];this.WGS84={0:{x:undefined,y:undefined}};this.callback=a;this.readOnly=f?f:false;this.isManual=true;this.errCallback=l;this.transform=function(e){var t,n,r,i,s,o,u,a,f,l,c,h,p,d;if(e==undefined)return;c=typeof e!="string"&&(e.x!=undefined||e[0].x!=undefined);this.WGS84=[];if(c){if(e.x!=undefined){s=e.x.toString()+","+e.y.toString();this.WGS84[0]=new Proj4js.Point(s)}else{s="";d=this;$.each(e,function(t){s=s+this.x.toString()+","+this.y.toString();d.WGS84[t]=new Proj4js.Point(this.x.toString()+","+this.y.toString());if(t<e.length-1)s=s+"\n"})}r=this.ProjHash["WGS84"];f="WGS84_Source";i=this.ProjHash[$(this.crsSource).val()];l=$(this.crsSource).val()+"_"+$(this.crsSource).prop("id").substr(3)}else{t=this.idSource==e?this.crsSource:this.crsDest;n=this.idSource==e?this.crsDest:this.crsSource;if(!t)return;f=$(t).val()+"_"+e;if(n)l=$(n).val()+"_"+$(n).prop("id").substr(3);r=undefined;if($(t).val()!=undefined){r=this.ProjHash[$(t).val()]}else{return}i=undefined;if(n){if($(n).val()!=undefined){i=this.ProjHash[$(n).val()]}else{return}}if(this.converter[f]){s=this.converter[f].getXY()}else{return}}if(s){s=s.split("\n");a="";for(h in s){p=s[h].split(",");if(s[h]==undefined||s[h]==""||this.converter[f].setOriginalProj!="xx"&&(isNaN(p[0])||isNaN(p[1]))||p[0]==""||p[1]==""||p.length>2){a=a+"INPUT ERROR ON LINE "+h;if(h<s.length-1){a=a+"\n"}continue}o=this.converter[f].setOriginalProj=="xx"?new Proj4js.Point(0,p[0],0):new Proj4js.Point(s[h]);if(!c){if(this.converter[f].setOriginalProj=="zxy"){r.zone=this.converter[f].getZ(h);r.utmSouth=this.converter[f].getE(h)=="s"?true:false;r.init()}if(r.readyToUse&&this.ProjHash["WGS84"].readyToUse){if(r.srsCode==this.ProjHash["WGS84"].srsCode){this.WGS84[h]=o.clone()}else{this.showLoadingSign(true);this.WGS84[h]=Proj4js.transform(r,this.ProjHash["WGS84"],o.clone());this.showLoadingSign(false)}if(isNaN(this.WGS84[h].x)||isNaN(this.WGS84[h].y)){a=a+"INPUT ERROR ON LINE "+h;this.WGS84[h].x=0;this.WGS84[h].y=0;if(h<s.length-1){a=a+"\n"}continue}}else{alert("Converter is not ready, please try again later.");return}}if(i){if(this.converter[l].setOriginalProj=="zxy"){i.zone=getUTMZone(this.WGS84[h].x);i.utmSouth=getEmisphere(this.WGS84[h].y)=="s"?true:false;i.init()}if(r.readyToUse&&i.readyToUse){if(r.srsCode==i.srsCode&&this.converter[f].setOriginalProj!="xx"){u=o.clone()}else{this.showLoadingSign(true);u=Proj4js.transform(r,i,o.clone());this.showLoadingSign(false);if(f!==undefined){if(this.converter[f].setProj!="dd"&&this.converter[f].setProj!="dms"&&this.converter[f].setProj!="csv"&&this.converter[f].setProj!="xx")this.converter[f].setConvergence(this.WGS84[0])}}a=a+u.x.toString()+","+u.y.toString()}else{alert("Converter is not ready, please try again later.");return}if(h<s.length-1){a=a+"\n"}}}if(i){this.converter[l].setXY(a,this.WGS84)}if(c){this.transform(this.idSource)}else{if(typeof this.callback=="function")this.callback(this.WGS84)}}else{return}};this.failSafe=function(e,t,n,r,i,s){if(typeof this.errCallback=="function")this.errCallback(e,t,n);this.Defs={"*World":{WGS84:{def:"+title=*GPS (WGS84) (deg) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees",isConnector:false}}};this.continueDefSource(this.Defs,r,i,s)};this.setDefSource=function(e,t){var n,r,i;this.Defs=e;n=$(this.crsSource).val();if(this.crsDest)r=$(this.crsDest).val();if(typeof this.Defs=="object"){if(this.Defs.WGS84!==undefined){this.Defs={"*World":this.Defs}}this.continueDefSource(this.Defs,n,r,t)}else if(typeof this.Defs=="string"){this.loadFailed=false;i=this;$.ajax({url:this.Defs,data:{u:"u"},type:"POST",cache:false,dataType:"json",error:function(e,s,o){i.failSafe(e,s,o,n,r,t)},success:function(e,s,o){if(e.error!==undefined){i.failSafe(o,s,e,n,r,t)}else{if(e.WGS84!==undefined)e={"*World":e};i.Defs=e;i.continueDefSource(i.Defs,n,r,t)}}})}else{return}};this.continueDefSource=function(e,t,n,r){var i,s,o,u,a;u=false;for(s in Proj4js.defs){o=false;for(i in e){if(e[i][s]!=undefined){o=true;break}}if(!o){this.unloadCRS(s.toString())}}removeEmptyOptgroups(this.crsSource);if(this.crsDest)removeEmptyOptgroups(this.crsDest);for(i in e){for(s in e[i]){if(Proj4js.defs[s]==undefined){a=e[i][s].def==undefined?e[i][s]:e[i][s].def;Proj4js.defs[s]=a;this.loadCRS(i,s,this.crsSource,this.crsDest);u=true}}}if(u){$(this.crsSource).sortGrpsNOptionsByText();t=t?t:$("option:first",this.crsSource).val();try{$(this.crsSource).val(t)}catch(f){}if(this.crsDest){$(this.crsDest).sortGrpsNOptionsByText();n=n?n:$("option:first",this.crsDest).val();try{$(this.crsDest).val(n)}catch(f){}}}if(typeof r=="function")r()};this.loadCRS=function(e,t,n,r){buildCRSList(e,t,n,r)};this.unloadCRS=function(e){var t,n,r;t=false;n=false;if($(this.crsSource).val()!=e){removeOption(this.crsSource,e);t=true}if(this.crsDest){if($(this.crsDest).val()!=e){removeOption(this.crsDest,e);n=true}}if(t&&n){delete Proj4js.defs[e];delete this.ProjHash[e];delete this.converter[e+"_"+this.idSource];delete this.converter[e+"_"+this.idDest];for(r in this.Defs){if(this.Defs[r][e]!=undefined){delete this.Defs[r][e];break}}}};this.showLoadingSign=function(e){if(e){$("#xy"+this.idSource).css("display","none");$("#loading"+this.idSource).css("display","block");if(this.Dest){$("#xy"+this.idDest).css("display","none");$("#loading"+this.idDest).css("display","block")}}else{$("#xy"+this.idSource).css("display","block");$("#loading"+this.idSource).css("display","none");if(this.Dest){$("#xy"+this.idDest).css("display","block");$("#loading"+this.idDest).css("display","none")}}};this.unload=function(){this.showLoadingSign(true);removeAllChilds(this.crsSource);removeAllChilds(this.Source);if(this.crsDest)removeAllChilds(this.crsDest);if(this.Dest)removeAllChilds(this.Dest);delete Proj4js.defs;Proj4js.defs={};delete this.ProjHash;this.ProjHash={};this.converter=[];this.showLoadingSign(false)};this.reload=function(e,t){var n;this.showLoadingSign(true);n=this;this.setDefSource(e,function(){n.updateCrs(n.crsSource);if(n.crsDest)n.updateCrs(n.crsDest);n.showLoadingSign(false);if(typeof t=="function")t()})};this.reset=function(){var e;for(e in this.converter){this.converter[e].reset()}};this.createProj=function(e,t){var n,r,i;n=this;i=e.substr(e.length-9)=="Connector"?"Connector":"Proj";r=new Proj4js[i](e,function(r){n.ProjHash[e]=r;if(typeof t=="function")t(r.srsCode)})};this.updateCrs=function(e,t){var n,r,i,s,o,u,a,f,l,c,h,p;t=t==undefined?false:t;l=$(e).prop("id").substr(3);if(this.idSource==l){n=this.Source;h=this.crsDest?this.idDest:this.WGS84[0]}else{n=this.Dest;h=this.idSource}s=$(e).val();if(s){r=this.ProjHash[s];if(r==undefined){p=this;this.createProj(s,function(){p.updateCrs(e,t)});return}i=r.title?r.title:s;u=r.units;if(!this.converter[s+"_"+l]){o=this.isManual?transcodeCRSProj(r.projName):"csv";this.setCRS(s,l,o)}removeAllChilds(n);c=new Tag(this.Wrapper.converter);a=c.JQObj;c=new Tag(this.Wrapper.title);f=c.JQObj;f.append(i);c=new Tag(["a",{name:"info",href:"#"}]);c.JQObj.append(" [?]");f.append(c.JQObj);a.append(f);a.append(this.converter[s+"_"+l].html);$(n).append(a)}if(t){this.transform(h)}};this.setCRS=function(e,t,n){var r;if(n=="csv"){r=transcodeCRSProj(this.ProjHash[e].projName);this.Units[n].L="";if(this.Labels[r].x!=undefined)this.Units[n].L=this.Labels[r].x.replace(" = ","")+(this.Units[r].x!=undefined?"("+this.Units[r].x.DD+")":"("+this.Units[r].XY["m"]+")");if(this.Labels[r].y!=undefined)this.Units[n].L=this.Units[n].L+","+this.Labels[r].y.replace(" = ","")+(this.Units[r].y!=undefined?"("+this.Units[r].y.DD+")":"("+this.Units[r].XY["m"]+")");if(this.Labels[r].z!=undefined)this.Units[n].L=this.Labels[r].z.replace(" = ","")+","+this.Units[n].L;if(this.Labels[r].e!=undefined)this.Units[n].L=this.Labels[r].e.replace(" = ","")+","+this.Units[n].L}this.converter[e+"_"+t]=new GeodesicFieldSet(e,undefined,n,this.Units[n],this.Labels[n],this.Wrapper,this.Options,t,this.Referer,this.readOnly)};this.updateDisplay=function(e){var t,n,r,i,s,o;if(typeof e=="string"){for(r in this.converter){r=r.split("_")[0];s=this.isManual?transcodeCRSProj(this.ProjHash[r].projName):"csv";this.setCRS(r,this.idSource,s);if(this.crsDest)this.setCRS(r,this.idDest,s);this.updateCrs(this.crsSource,true);if(this.crsDest)this.updateCrs(this.crsDest,true)}}else{t=getTargetNode(e);i=$(t).prop("name").split("_")[1];n=this.idSource==i?this.crsSource:this.crsDest;r=$(n).val();if(t.value=="dms"||t.value=="dd"){if(this.converter[r+"_"+i].setProj!=t.value){this.setCRS(r,i,t.value);this.updateCrs(n,true)}}else{if(this.converter[r+"_"+i].lengthUnit!=t.value){this.converter[r+"_"+i].setLengthUnit(t.value);this.updateCrs(n,true)}}}};this.setManualMode=function(e){if(this.isManual!=e){this.isManual=e;this.reset();this.updateDisplay(this.idSource)}};this.unload();this.reload(this.Defs,this.callback)};GeodesicFieldSet=function(name,values,proj,unit,labels,HTMLWrapper,options,target,referer,readOnly){var a,ENTER_KEY;ENTER_KEY=13;a=values?values.split(","):undefined;this.setName=name;this.setValues=values?{x:a[0],y:a[1],e:a[2],z:a[3],convergence:a[4]}:{x:undefined,y:undefined,e:undefined,z:undefined,convergence:undefined};this.setOriginalProj=proj=="csv"?transcodeCRSProj(eval(referer+".ProjHash[this.setName].projName")):proj;this.setLat0=eval(referer+".ProjHash[this.setName].lat0");this.setLng0=eval(referer+".ProjHash[this.setName].long0");this.setA=eval(referer+".ProjHash[this.setName].a");this.setB=eval(referer+".ProjHash[this.setName].b");this.setProj=proj;this.setUnit=unit.x?unit:{x:unit,y:unit};this.setLabels=labels;this.setId=name;this.setWrapper=HTMLWrapper?HTMLWrapper:{set:["table",{border:"0","class":"form_tbl spaced_1"}],fields:["td",{"class":"field"}],label:["td",{"class":"label"}],container:["tr"]};this.setOptions=options;this.setTarget=target;this.setReferer=referer;this.setReadOnly=readOnly;this.lengthUnit="m";this.initialize=function(){var HTMLTag,tempTag,me;tempTag=new Tag(this.setWrapper.set);if(this.setWrapper.set[0]=="table"){tempTag=new Tag(["tbody"])}HTMLTag=tempTag.JQObj;switch(this.setProj){case"dd":case"dms":this.set={x:new GeodesicField(this.setName+"_"+this.setTarget,this.setValues.x,this.setProj,this.setUnit.x,this.setLabels.x,this.setId+"_X",this.setWrapper,this.setOptions.x,this.setReferer,this.setReadOnly),y:new GeodesicField(this.setName+"_"+this.setTarget,this.setValues.y,this.setProj,this.setUnit.y,this.setLabels.y,this.setId+"_Y",this.setWrapper,this.setOptions.y,this.setReferer,this.setReadOnly),o:new GeodesicField(this.setName+"_"+this.setTarget,this.setProj,"dms_dd",this.setOptions.o,"",this.setId+"_DMS_DD",this.setWrapper,undefined,this.setReferer,this.setReadOnly)};HTMLTag.append(this.set.y.html);HTMLTag.append(this.set.x.html);HTMLTag.append(this.set.o.html);break;case"xy":this.set={x:new GeodesicField(this.setName+"_"+this.setTarget,this.setValues.x,this.setProj,this.setUnit.x,this.setLabels.x,this.setId+"_X",this.setWrapper,this.setOptions.x,this.setReferer,this.setReadOnly,this.lengthUnit),y:new GeodesicField(this.setName+"_"+this.setTarget,this.setValues.y,this.setProj,this.setUnit.y,this.setLabels.y,this.setId+"_Y",this.setWrapper,this.setOptions.y,this.setReferer,this.setReadOnly,this.lengthUnit),u:new GeodesicField(this.setName+"_"+this.setTarget,this.lengthUnit,"m_km",this.setOptions.u,"",this.setId+"_M_KM",this.setWrapper,undefined,this.setReferer,this.setReadOnly),convergence:new GeodesicField(this.setName+"_"+this.setTarget,this.setValues.Convergence,"convergence",{CONVERGENCE:"°"},this.setLabels.convergence,this.setId+"_CONVERGENCE",this.setWrapper,undefined,this.setReferer,this.setReadOnly)};HTMLTag.append(this.set.x.html);HTMLTag.append(this.set.y.html);$(this.set.convergence.html).find(".key-label").prepend('<img src="'+dir_ws_images+"GN_"+this.setTarget+'.png" alt="">');HTMLTag.append(this.set.convergence.html);HTMLTag.append(this.set.u.html);break;case"zxy":this.set={e:new GeodesicField(this.setName+"_"+this.setTarget,"n","e",this.setUnit.e,this.setLabels.e,this.setId+"_E",this.setWrapper,this.setOptions.e,this.setReferer,this.setReadOnly),z:new GeodesicField(this.setName+"_"+this.setTarget,31,"z",this.setUnit.z,this.setLabels.z,this.setId+"_Z",this.setWrapper,this.setOptions.z,this.setReferer,this.setReadOnly),x:new GeodesicField(this.setName+"_"+this.setTarget,this.setValues.x,this.setProj,this.setUnit.x,this.setLabels.x,this.setId+"_X",this.setWrapper,this.setOptions.x,this.setReferer,this.setReadOnly,this.lengthUnit),y:new GeodesicField(this.setName+"_"+this.setTarget,this.setValues.y,this.setProj,this.setUnit.y,this.setLabels.y,this.setId+"_Y",this.setWrapper,this.setOptions.y,this.setReferer,this.setReadOnly,this.lengthUnit),u:new GeodesicField(this.setName+"_"+this.setTarget,this.lengthUnit,"m_km",this.setOptions.u,"",this.setId+"_M_KM",this.setWrapper,undefined,this.setReferer,this.setReadOnly),convergence:new GeodesicField(this.setName+"_"+this.setTarget,this.setValues.Convergence,"convergence",{CONVERGENCE:"°"},this.setLabels.convergence,this.setId+"_CONVERGENCE",this.setWrapper,undefined,this.setReferer,this.setReadOnly)};HTMLTag.append(this.set.e.html);HTMLTag.append(this.set.z.html);HTMLTag.append(this.set.x.html);HTMLTag.append(this.set.y.html);$(this.set.convergence.html).find(".key-label").prepend('<img src="'+dir_ws_images+"GN_"+this.setTarget+'.png" alt="">');HTMLTag.append(this.set.convergence.html);HTMLTag.append(this.set.u.html);break;case"csv":this.setValues=values;this.set={csv:new GeodesicField(this.setName+"_"+this.setTarget,this.setValues,this.setProj,this.setUnit.x,this.setLabels.csv,this.setId+"_CSV",this.setWrapper,undefined,this.setReferer,this.setReadOnly),l:new GeodesicField(this.setName+"_"+this.setTarget,undefined,"l",this.setUnit.x,this.setLabels.l,this.setId+"_L",this.setWrapper,undefined,this.setReferer,this.setReadOnly)};HTMLTag.append(this.set.csv.html);HTMLTag.append(this.set.l.html);break;case"xx":this.set={x:new GeodesicField(this.setName+"_"+this.setTarget,this.setValues.x,this.setProj,this.setUnit.xx,this.setLabels.xx,this.setId+"_XX",this.setWrapper,this.setOptions.x,this.setReferer,this.setReadOnly,this.lengthUnit)};HTMLTag.append(this.set.x.html);break;default:return;break}if(this.setWrapper.set[0]=="table"){tempTag=new Tag(this.setWrapper.set);tempTag.JQObj.append(HTMLTag);HTMLTag=tempTag.JQObj}me=this;$("input,select",HTMLTag).keyup(function(e){if(getKeyCode(e)==ENTER_KEY){eval(me.setReferer).transform(me.setTarget)}});return HTMLTag[0]};this.setLengthUnit=function(e){this.lengthUnit=e?e:this.lengthUnit;switch(this.setProj){case"zxy":this.set.z.setLengthUnit(this.lengthUnit);case"xy":this.set.x.setLengthUnit(this.lengthUnit);this.set.y.setLengthUnit(this.lengthUnit);this.set.u.setLengthUnit(this.lengthUnit);break}};this.setX=function(e){this.setValues.x=e;this.set.x.setValue(this.setValues.x)};this.setY=function(e){this.setValues.y=e;this.set.y.setValue(this.setValues.y)};this.setConvergence=function(e){this.setValues.convergence=computeConvergence(this.setA,this.setB,this.setLng0?this.setLng0:0,this.setValues.z,e);this.set.convergence.setValue(this.setValues.convergence)};this.getConvergence=function(){return this.setValues.convergence};this.setZ=function(e){if(this.set.z){this.setValues.z=e;this.set.z.setValue(this.setValues.z)}};this.setE=function(e){if(this.set.e){this.setValues.e=e;this.set.e.setValue(this.setValues.e)}};this.setCSV=function(e){if(this.set.csv){this.setValues=e;this.set.csv.setValue(this.setValues)}};this.setXY=function(e,t){var n,r,i,s,o,u,a;if(this.setProj=="csv"){a=[];o=e.split("\n");for(u in o){n=o[u].split(",");r=n[0];i=n[1];if(n.length==2){s="";if(this.setOriginalProj=="zxy"){s=getEmisphere(t[u].y).toString()+","+getUTMZone(t[u].x).toString()+",";i=Math.abs(i)}a.push(s+r.toString()+","+i.toString())}else{a.push(r)}}this.setCSV(a.join("\n"))}else{n=e.split(",");r=n[0];i=n[1];if(this.setProj=="zxy"){this.setE(getEmisphere(t[0].y));this.setZ(getUTMZone(t[0].x));i=Math.abs(i)}this.setX(r);if(this.setProj!="xx")this.setY(i);if(this.setProj!="dd"&&this.setProj!="dms"&&this.setProj!="csv"&&this.setProj!="xx")this.setConvergence(t[0])}};this.getX=function(){return getNumber(this.set.x.getValue())};this.getStrX=function(){return this.set.x.getValue()};this.getY=function(){return getNumber(this.set.y.getValue())};this.getZ=function(e){if(this.setProj=="csv"){return this.getCSV().split("\n")[e].split(",")[1]}else{return getNumber(this.set.z.getValue())}};this.getE=function(e){if(this.setProj=="csv"){return this.getCSV().split("\n")[e].split(",")[0]}else{return this.set.e.getValue()}};this.getCSV=function(){return this.set.csv.getValue()};this.getXY=function(){var e,t,n,r,i,s;if(this.setProj=="csv"){if(this.setOriginalProj=="zxy"){n=this.getCSV().split("\n");for(i in n){r=n[i].split(",");r.shift();r.shift();n[i]=r.join(",")}s=n.join("\n")}else{s=this.getCSV()}return s}else{if(this.setProj=="xx"){return this.getStrX()}else{e=this.getX();t=this.getY();if(isNaN(e)||isNaN(t)){return}else{return e.toString()+","+t.toString()}}}};this.reset=function(){switch(this.setProj){case"csv":this.setCSV("");break;case"xx":this.setX("");break;default:this.setX("");this.setY("");this.setE("n");this.setZ(31);break}};this.html=this.initialize()};GeodesicField=function(name,value,proj,unit,label,id,HTMLWrapper,options,referer,readOnly,lengthUnit){this.geodesicName=name;this.geodesicValue=value;this.geodesicProj=proj;this.geodesicUnit=unit;this.geodesicLabel=label;this.geodesicId=id?id:name;this.geodesicWrapper=HTMLWrapper?HTMLWrapper:{fields:["td",{"class":"field"}],label:["td",{"class":"label"}],container:["tr"]};this.geodesicOptions=options;this.geodesicReferer=referer;this.geodesicReadOnly=readOnly;this.geodesicAttributes={C:{size:"1",disabled:this.geodesicReadOnly,readonly:this.geodesicReadOnly},D:{size:"4","class":"d_input",disabled:this.geodesicReadOnly,readonly:this.geodesicReadOnly},M:{size:"4","class":"m_input",disabled:this.geodesicReadOnly,readonly:this.geodesicReadOnly},S:{size:"6","class":"s_input",disabled:this.geodesicReadOnly,readonly:this.geodesicReadOnly},DD:{size:"20","class":"dd_input",disabled:this.geodesicReadOnly,readonly:this.geodesicReadOnly},XY:{size:"20","class":"xy_input",disabled:this.geodesicReadOnly,readonly:this.geodesicReadOnly},Z:{size:"5","class":"z_input",disabled:this.geodesicReadOnly,readonly:this.geodesicReadOnly},E:{size:"1",disabled:this.geodesicReadOnly,readonly:this.geodesicReadOnly},CSV:{rows:"5",wrap:"off",cols:"18",disabled:this.geodesicReadOnly,readonly:this.geodesicReadOnly},CONVERGENCE:{size:"10","class":"convergence_input",disabled:this.geodesicReadOnly,readonly:true}};this.geodesicLengthUnit=lengthUnit?lengthUnit:"m";this.initialize=function(){var HTMLTag,geoName,geoField,HTMLcell,HTMLfields,HTMLLabel,tempTag,tmpFunc;tempTag=new Tag(this.geodesicWrapper.container);HTMLTag=tempTag.JQObj;switch(this.geodesicProj){case"dms":this.geodesicValue=ddToDms(this.geodesicValue,this.geodesicOptions);this.geodesicFields={C:new Field(this.geodesicName+"_C","option",this.geodesicValue.C?this.geodesicValue.C:"",this.geodesicAttributes.C,this.geodesicOptions),D:new Field(this.geodesicName+"_D","text",isNaN(this.geodesicValue.D)?"":xtdRound(this.geodesicValue.D,0),this.geodesicAttributes.D),M:new Field(this.geodesicName+"_M","text",isNaN(this.geodesicValue.M)?"":xtdRound(this.geodesicValue.M,0),this.geodesicAttributes.M),S:new Field(this.geodesicName+"_S","text",isNaN(this.geodesicValue.S)?"":xtdRound(this.geodesicValue.S,12),this.geodesicAttributes.S)};break;case"dd":this.geodesicFields={DD:new Field(this.geodesicName+"_DD","text",isNaN(this.geodesicValue)?"":xtdRound(this.geodesicValue,15),this.geodesicAttributes.DD)};break;case"dms_dd":tmpFunc=this.geodesicReferer+".updateDisplay(e);";this.geodesicFields={_DMS:new Field(this.geodesicName+"_DMS_DD","radio","dms",{click:function(e){eval(tmpFunc)}}),_DD:new Field(this.geodesicName+"_DMS_DD","radio","dd",{click:function(e){eval(tmpFunc)}})};$(this.geodesicFields["_"+this.geodesicValue.toUpperCase()].html).prop("checked",true);$(this.geodesicFields["_"+this.geodesicValue.toUpperCase()].html).prop("defaultChecked",true);break;case"m_km":tmpFunc=this.geodesicReferer+".updateDisplay(e);";this.geodesicFields={_M:new Field(this.geodesicName+"_M_KM","radio","m",{click:function(e){eval(tmpFunc)}}),_KM:new Field(this.geodesicName+"_M_KM","radio","km",{click:function(e){eval(tmpFunc)}})};$(this.geodesicFields["_"+this.geodesicLengthUnit.toUpperCase()].html).prop("checked",true);$(this.geodesicFields["_"+this.geodesicLengthUnit.toUpperCase()].html).prop("defaultChecked",true);break;case"zxy":case"xy":this.geodesicFields={XY:new Field(this.geodesicName+"_XY","text",isNaN(this.geodesicValue)?"":xtdRound(setM(this.geodesicValue,this.geodesicLengthUnit),3),this.geodesicAttributes.XY)};break;case"z":this.geodesicFields={Z:new Field(this.geodesicName+"_Z","text",isNaN(this.geodesicValue)?"":xtdRound(this.geodesicValue,0),this.geodesicAttributes.Z)};break;case"e":this.geodesicFields={E:new Field(this.geodesicName+"_E","option",this.geodesicValue?this.geodesicValue:"",this.geodesicAttributes.E,this.geodesicOptions)};break;case"csv":this.geodesicFields={CSV:new Field(this.geodesicName+"_CSV","textarea",this.geodesicValue?this.geodesicValue:"",this.geodesicAttributes.CSV)};break;case"l":this.geodesicFields={L:new Tag(["span"])};break;case"convergence":this.geodesicFields={CONVERGENCE:new Field(this.geodesicName+"_CONVERGENCE","text",isNaN(this.geodesicValue)?0:xtdRound(this.geodesicValue,3),this.geodesicAttributes.CONVERGENCE)};break;case"xx":this.geodesicFields={XX:new Field(this.geodesicName+"_XX","text",isNaN(this.geodesicValue)?"":xtdRound(this.geodesicValue,0),this.geodesicAttributes.XX)};break;default:return;break}tempTag=new Tag(this.geodesicWrapper.label);HTMLLabel=tempTag.JQObj.append(this.geodesicLabel);HTMLTag.append(HTMLLabel);tempTag=new Tag(this.geodesicWrapper.fields);HTMLcell=tempTag.JQObj;for(geoName in this.geodesicFields){geoField=this.geodesicFields[geoName];tempTag=new Tag(["label",{"for":this.geodesicFields[geoName].fieldId}]);HTMLfields=tempTag.JQObj;HTMLfields.append(geoField.JQObj);if(this.geodesicUnit){if(this.geodesicUnit[geoName]){if(this.geodesicUnit[geoName][this.geodesicLengthUnit]){HTMLfields.append(this.geodesicUnit[geoName][this.geodesicLengthUnit])}else{HTMLfields.append(this.geodesicUnit[geoName])}}}HTMLfields.append("&nbsp;");HTMLcell.append(HTMLfields);HTMLTag.append(HTMLcell)}return HTMLTag[0]};this.setLengthUnit=function(e){this.geodesicLengthUnit=e?e:this.geodesicLengthUnit;switch(this.geodesicProj){case"m_km":var t=$("input[value="+this.geodesicLengthUnit+"]",this.html);var n=$("input:not([value="+this.geodesicLengthUnit+"])",this.html);var r=$("input",this.html);if(n.is(":checked")==true){n.prop("checked",false);n.prop("defaultChecked",false)}if(t.is(":checked")==false){t.prop("checked",true);t.prop("defaultChecked",true)}break;case"zxy":case"xy":$($("label",this.html).contents()[1]).replaceWith(this.geodesicUnit.XY[this.geodesicLengthUnit]);break}};this.setValue=function(e){this.geodesicValue=e;switch(this.geodesicProj){case"dms":this.geodesicValue=ddToDms(this.geodesicValue,this.geodesicOptions);this.geodesicFields.C.setValue(this.geodesicValue.C!=undefined?this.geodesicValue.C:"");this.geodesicFields.D.setValue(isNaN(this.geodesicValue.D)?"":xtdRound(this.geodesicValue.D,0));this.geodesicFields.M.setValue(isNaN(this.geodesicValue.M)?"":xtdRound(this.geodesicValue.M,0));this.geodesicFields.S.setValue(isNaN(this.geodesicValue.S)?"":xtdRound(this.geodesicValue.S,12));break;case"dd":this.geodesicFields.DD.setValue(isNaN(this.geodesicValue)?"":xtdRound(this.geodesicValue,15));break;case"zxy":case"xy":this.geodesicFields.XY.setValue(isNaN(this.geodesicValue)?"":xtdRound(setM(this.geodesicValue,this.geodesicLengthUnit),this.geodesicLengthUnit=="m"?2:5));break;case"e":this.geodesicFields.E.setValue(this.geodesicValue!=undefined?this.geodesicValue:"");break;case"z":this.geodesicFields.Z.setValue(isNaN(this.geodesicValue)?"":xtdRound(this.geodesicValue,0));break;case"xx":this.geodesicFields.XX.setValue(this.geodesicValue);break;case"csv":this.geodesicFields.CSV.setValue(this.geodesicValue);break;case"convergence":this.geodesicFields.CONVERGENCE.setValue(xtdRound(this.geodesicValue,4));break;default:return;break}};this.getValue=function(){var e;switch(this.geodesicProj){case"dms":this.geodesicValue={C:this.geodesicFields.C.getValue(),D:xtdParseFloat(this.geodesicFields.D.getValue()),M:xtdParseFloat(this.geodesicFields.M.getValue()),S:xtdParseFloat(this.geodesicFields.S.getValue())};e=dmsToDd(this.geodesicValue);break;case"dd":this.geodesicValue=xtdParseFloat(this.geodesicFields.DD.getValue());e=this.geodesicValue;break;case"zxy":case"xy":this.geodesicValue=xtdParseFloat(getM(this.geodesicFields.XY.getValue(),this.geodesicLengthUnit));e=this.geodesicValue;break;case"e":this.geodesicValue=this.geodesicFields.E.getValue();e=this.geodesicValue;break;case"z":this.geodesicValue=xtdParseFloat(this.geodesicFields.Z.getValue());e=this.geodesicValue;break;case"xx":this.geodesicValue=this.geodesicFields.XX.getValue();e=this.geodesicValue;break;case"csv":this.geodesicValue=this.geodesicFields.CSV.getValue();e=this.geodesicValue;break;default:return;break}return e};this.html=this.initialize()};Field=function(e,t,n,r,i){this.fieldId=e+"_id_"+Math.floor(Math.random()*10001);this.fieldType=t;this.fieldValue=n?n:"";this.fieldAttributes=r?r:{};this.fieldAttributes.name=e;this.fieldOptions=i;switch(this.fieldType){case"text":case"radio":this.fieldTagName="input";break;case"option":this.fieldTagName="select";break;case"textarea":this.fieldTagName="textarea";break;default:this.fieldTagName="input";break}this.initialize=function(){var e;switch(this.fieldType){case"option":this.fieldAttributes.val=this.fieldValue;e=new Tag([this.fieldTagName,this.fieldAttributes,this.fieldOptions]);break;case"textarea":this.fieldAttributes.val=this.fieldValue;this.fieldAttributes.id=this.fieldId;e=new Tag([this.fieldTagName,this.fieldAttributes]);break;default:this.fieldAttributes.type=this.fieldType;this.fieldAttributes.val=this.fieldValue;this.fieldAttributes.id=this.fieldId;e=new Tag([this.fieldTagName,this.fieldAttributes]);break}return e};this.getValue=function(){this.fieldValue=this.JQObj.val();return this.fieldValue};this.setValue=function(e){this.fieldValue=e;this.fieldAttributes.val=this.fieldValue;this.field.setValue(this.fieldValue);this.html=this.field.html;this.JQObj=this.field.JQObj};this.field=this.initialize();this.html=this.field.html;this.JQObj=this.field.JQObj};Tag=function(e){this.tagName=e[0];this.tagAttributes=e[1]?e[1]:{};this.tagOptions=e[2]?e[2]:[];this.initialize=function(){var e;if(this.tagName==""){return}if(this.tagAttributes.val){if(typeof this.tagAttributes.val=="number"&&this.tagAttributes.val.toString().split("e").length>1){this.tagAttributes.val=xtdRound(this.tagAttributes.val)}}e=$("<"+this.tagName+">",this.tagAttributes);if(this.tagName=="select"){$.each(this.tagOptions,function(t,n){e.append($("<option>",{val:t,text:n}))})}if(this.tagAttributes.type){if(this.tagAttributes.type=="radio"||this.tagAttributes.type=="checkbox"){e.css("border","0px none")}}return e};this.setValue=function(e){this.tagAttributes.val=e;if(typeof this.tagAttributes.val=="number"&&this.tagAttributes.val.toString().split("e").length>1){this.tagAttributes.val=xtdRound(this.tagAttributes.val)}$(this.html).val(this.tagAttributes.val);this.JQObj=$(this.html)};this.JQObj=this.initialize();this.html=this.JQObj[0]}