function CheckField620619(t,e){if(e[t].length){for(var i=0,n=e[t].length;n>i;i++)if("select-one"==e[t].type){if(e[t][i].selected&&0==i&&""==e[t][i].value)return!1;if(e[t][i].selected)return!0}else if(e[t][i].checked)return!0;return!1}return"checkbox"==e[t].type?e[t].checked:"radio"==e[t].type?e[t].checked:(e[t].focus(),e[t].value.length>0)}function rmspaces(t){for(var e=0,i=t.length-1;" "==t.charAt(e);)e++;for(;" "==t.charAt(i);)--i;var n=t.substr(e,i-e+1);return e==t.length&&-1==i&&(n=""),n}function checkfield(t){return""!=rmspaces(t)}function isemail(t){var e=!1;if(-1==t.indexOf("@",0)||-1!=t.indexOf("\\",0)||-1!=t.indexOf("/",0)||!checkfield(t)||-1==t.indexOf(".",0)||0==t.indexOf("@")||t.lastIndexOf(".")<t.lastIndexOf("@")||t.lastIndexOf(".")==t.length-1||t.lastIndexOf("@")!=t.indexOf("@")||-1!=t.indexOf(",",0)||-1!=t.indexOf(":",0)||-1!=t.indexOf(";",0))return e;var i=rmspaces(t);-1!=i.indexOf(" ",0)&&(e=!0);var n=i.lastIndexOf(".")+4,s=(i.substring(0,n),i.length-i.lastIndexOf(".")-1),o=i.indexOf("@");return("."==i.charAt(o+1)||1>s)&&(e=!0),!e}function CheckFieldD620619(t,e,i,n,s,o){var r=!0,a=validDate620619(e,i,n,o),l=o[i].value+" "+o[e].value+" "+o[n].value;return null==a&&1==s?(l="",r=!1):""==o[e].value&&""==o[i].value&&""==o[n].value||null!=a||(r=!1,l=""),r&&(o[t].value=l),r}function validDate620619(t,e,i,n){var s=null;if(""!=n[t].value&&""!=n[e].value&&""!=n[i].value){var o=new Date(n[i].value-0,n[e].selectedIndex-1,n[t].value-0).getTime(),s=new Date;s.setTime(o),s.getFullYear()==n[i].value-0&&s.getMonth()==n[e].selectedIndex-1&&s.getDate()==n[t].value-0||(s=null)}return s}function _checkSubmit620619(t){return isemail(t.fldEmail.value)?CheckField620619("fldfirstname",t)?CheckField620619("fldlastname",t)?CheckField620619("fldfield21",t)?CheckField620619("fldfield4",t)?!0:(alert("Bitte geben Sie Ihre Postleitzahl an"),!1):(alert("Bitte wählen Sie Ihre Rolle"),!1):(alert("Bitte geben Sie Ihren Nachnamen an"),!1):(alert("Bitte geben Sie Ihren Vornamen an"),!1):($("#form-field .f-mail").addClass("mail-test"),$("#form-field .f-mail").addClass("mail-success"),!1)}$(window).scroll(function(){$(this).scrollTop()>1?$(".header-color").addClass("sticky"):$(".header-color").removeClass("sticky")});
//# sourceMappingURL=all.js.map