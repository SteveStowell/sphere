"use strict";!function(e){e(document).ready(function(){places({container:document.querySelector("#form-address"),type:"address",templates:{value:function(e){return e.name}}}).on("change",function(e){document.querySelector("#form-address2").value=e.suggestion.administrative||"",document.querySelector("#form-city").value=e.suggestion.city||"",document.querySelector("#form-zip").value=e.suggestion.postcode||""});places({container:document.querySelector("#city"),type:"city",aroundLatLngViaIP:!1,templates:{value:function(e){return e.name}}}),places({container:document.querySelector("#country"),type:"country",templates:{suggestion:function(e){return'<i class="flag '+e.countryCode+'"></i> '+e.highlight.name}}})})}($);