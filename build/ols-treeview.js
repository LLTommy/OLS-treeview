require=function e(o,n,t){function i(l,c){if(!n[l]){if(!o[l]){var s="function"==typeof require&&require;if(!c&&s)return s(l,!0);if(r)return r(l,!0);var a=new Error("Cannot find module '"+l+"'");throw a.code="MODULE_NOT_FOUND",a}var d=n[l]={exports:{}};o[l][0].call(d.exports,function(e){var n=o[l][1][e];return i(n?n:e)},d,d.exports,e,o,n,t)}return n[l].exports}for(var r="function"==typeof require&&require,l=0;l<t.length;l++)i(t[l]);return i}({"ols-treeview":[function(e,o,n){o.exports=olstree=function(){function e(e){var o="terms";return"property"==e?o="properties":"individual"==e?o="individuals":"ontology"==e&&(o="ontology"),o}function o(e){window.location.href=e}function n(o,n,t,l,c,s){o.empty(),o.each(function(){var o=t,a=e(l),d=c,u=s?s:"";$.jstree.defaults.core.data=!0,$.jstree.defaults.core.expand_selected_onload=!0;var p=u+"/api/ontologies/"+o+"/"+a+"/roots?size=1000",f=u+"/api/ontologies/"+o+"/"+a+"/",g=f+encodeURIComponent(encodeURIComponent(d))+"/jstree";n&&(g+="?siblings=true");var v=$("<div></div>").jstree({core:{data:function(e,o){if("#"===e.id&&""!=d)$.getJSON(g,function(e){o(e)}).fail(function(){console.log("Could not connect to "+g)});else if("#"===e.id&&""===d)$.getJSON(p,function(e){var e=i(e,"#",a);o(e)}).fail(function(){console.log("Could not connect to "+g)});else{var n=e.original.iri,t=f+encodeURIComponent(encodeURIComponent(n))+"/jstree/children/"+e.id;$.getJSON(t,function(e){o(e)}).fail(function(){console.log("Could not connect to "+g)})}},themes:{dots:!0,icons:!1,name:"proton"}},plugins:["sort"]}).bind("select_node.jstree",function(e,o,n){r.onclick.call(this,e,o,u,d,a)});$(this).append(v)})}function t(n,t,i,r,l){var c=l;"individuals"==c&&r!=t.node.original.iri&&(c=e("terms"));var s=i+"ontologies/"+t.node.original.ontology_name+"/"+c+"?iri="+encodeURIComponent(t.node.original.iri);o(s)}function i(e,o,n){var t=[],i=1,r=[];return void 0!=e._embedded&&("properties"==n?r=e._embedded.properties:"individuals"==n?r=e._embedded.individuals:"terms"==n&&(r=e._embedded.terms)),$.each(r,function(e,n){var r=o+"_"+i,l=o;"#"===o&&(r=i,l=o),t.push({id:r,parent:l,iri:n.iri,ontology_name:n.ontology_name,text:n.label,leaf:!n.has_children,children:n.has_children}),i++}),t}var r={onclick:t};olstree.prototype.draw=function(e,o,t,i,l,c,s){r=jQuery.extend(!0,{},r,s),n(e,o,t,i,l,c)},olstree.prototype.drawWithSelectBox=function(e,o,n,t){$("#"+e).html('<select class="selectpicker"><option>Select your ontology</option></select>');var i=($("#selectpicker"),[]);$.getJSON(n+"/api/ontologies?size=1000",function(r){ontologies=r._embedded.ontologies;for(var l=0;l<ontologies.length;l++)i.push({id:ontologies[l].ontologyId,title:ontologies[l].config.title});$.each(i,function(o,n){$("#"+e+" .selectpicker").append("<option value='"+n.id+"'>"+n.id+" - "+n.title+"</option>")}),$("#"+e+" .selectpicker").on("change",function(){var i=$("#"+e+" .selectpicker option:selected").val();olstree.prototype.draw(o,!1,i,"terms","",n,t)})}).fail(function(){console.log("something went wrong with the webservice call")})},olstree.prototype.toggleSiblings=function(e){var o="true"==$(e).val();o?($(e).text("Hide siblings"),$(e).val(!1)):($(e).text("Show siblings"),$(e).val(!0)),n(o)}}},{}]},{},[]);