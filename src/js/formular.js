function CheckField620619(fldName, frm){ if ( frm[fldName].length ) { for ( var i = 0, l = frm[fldName].length; i < l; i++ ) {  if ( frm[fldName].type =='select-one' ) { if( frm[fldName][i].selected && i==0 && frm[fldName][i].value == '' ) { return false; }  if ( frm[fldName][i].selected ) { return true; } }  else { if ( frm[fldName][i].checked ) { return true; } }; } return false; } else { if ( frm[fldName].type == "checkbox" ) { return ( frm[fldName].checked ); } else if ( frm[fldName].type == "radio" ) { return ( frm[fldName].checked ); } else { frm[fldName].focus(); return (frm[fldName].value.length > 0); }} }
function rmspaces(x) {var leftx = 0;var rightx = x.length -1;while ( x.charAt(leftx) == ' ') { leftx++; }while ( x.charAt(rightx) == ' ') { --rightx; }var q = x.substr(leftx,rightx-leftx + 1);if ( (leftx == x.length) && (rightx == -1) ) { q =''; } return(q); }
function checkfield(data) {if (rmspaces(data) == ""){return false;}else {return true;}}
function isemail(data) {var flag = false;if (  data.indexOf("@",0)  == -1 || data.indexOf("\\",0)  != -1 ||data.indexOf("/",0)  != -1 ||!checkfield(data) ||  data.indexOf(".",0)  == -1  ||  data.indexOf("@")  == 0 ||data.lastIndexOf(".") < data.lastIndexOf("@") ||data.lastIndexOf(".") == (data.length - 1)   ||data.lastIndexOf("@") !=   data.indexOf("@") ||data.indexOf(",",0)  != -1 ||data.indexOf(":",0)  != -1 ||data.indexOf(";",0)  != -1  ) {return flag;} else {var temp = rmspaces(data);if (temp.indexOf(' ',0) != -1) { flag = true; }var d3 = temp.lastIndexOf('.') + 4;var d4 = temp.substring(0,d3);var e2 = temp.length  -  temp.lastIndexOf('.')  - 1;var i1 = temp.indexOf('@');if (  (temp.charAt(i1+1) == '.') || ( e2 < 1 ) ) { flag = true; }return !flag;}}
function CheckFieldD620619(fldH, chkDD, chkMM, chkYY, reqd, frm){ var retVal = true; var dt = validDate620619(chkDD, chkMM, chkYY, frm); var nDate = frm[chkMM].value  + " " + frm[chkDD].value + " " + frm[chkYY].value; if ( dt == null && reqd == 1 ) {	nDate = ""; retVal = false;	} else if ( (frm[chkDD].value != "" || frm[chkMM].value != "" || frm[chkYY].value != "") && dt == null) { retVal = false; nDate = "";} if ( retVal ) {frm[fldH].value = nDate;} return retVal; }
function validDate620619(chkDD, chkMM, chkYY, frm) {var objDate = null;	if ( frm[chkDD].value != "" && frm[chkMM].value != "" && frm[chkYY].value != "" ) {var mSeconds = (new Date(frm[chkYY].value - 0, frm[chkMM].selectedIndex - 1, frm[chkDD].value - 0)).getTime();var objDate = new Date();objDate.setTime(mSeconds);if (objDate.getFullYear() != frm[chkYY].value - 0 || objDate.getMonth()  != frm[chkMM].selectedIndex - 1  || objDate.getDate() != frm[chkDD].value - 0){objDate = null;}}return objDate;}
function _checkSubmit620619(frm){
if ( !isemail(frm["fldEmail"].value) ) { 
   // alert("Bitte geben Sie den Email");
   $('#form-field .f-mail').addClass("mail-test");
   $('#form-field .f-mail').addClass("mail-success");
   return false;
}
if ( !CheckField620619("fldfirstname", frm) ) { 
   alert("Bitte geben Sie Ihren Vornamen an");
   return false;
}
if ( !CheckField620619("fldlastname", frm) ) { 
   alert("Bitte geben Sie Ihren Nachnamen an");
   return false;
}
if ( !CheckField620619("fldfield21", frm) ) { 
   alert("Bitte wählen Sie Ihre Rolle");
   return false;
}
if ( !CheckField620619("fldfield4", frm) ) { 
   alert("Bitte geben Sie Ihre Postleitzahl an");
   return false;
}
 return true; }