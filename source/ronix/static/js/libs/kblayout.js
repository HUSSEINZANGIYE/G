var keyboardLayout={},langCycle=[""];!function(){function c(a){for(var c="Language: ",e=0;e<langCycle.length;e++){var f=d(e)||"default";c+=(e==a?"["+f+"]":f)+" "}b&&clearTimeout(b),document.oldTitle=document.oldTitle||document.title,document.title=c,b=setTimeout(function(){document.title=document.oldTitle,document.oldTitle=void 0,b=null},1e3)}function d(a){return langCycle[a].lang?langCycle[a].lang:langCycle[a]}function e(a){return langCycle[a].direction?langCycle[a].direction:""}function f(a){for(var b=langCycle.length?0:-1,c=0;c<langCycle.length;c++)d(c)==a&&(b=c<langCycle.length-1?c+1:0);return b}function g(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):a["on"+b]=c}function h(a){return"TEXTAREA"==a.tagName||"INPUT"==a.tagName&&a.type&&"TEXT"==a.type.toUpperCase()}var a=null,b=null;g(document,"keydown",function(b){b&&(a=b.which)}),g(document,"keypress",function(b){var g=b.target||b.srcElement;if(h(g)){var i=b.which||b.charCode||b.keyCode,j=(g.getAttribute("lang")||"").match(/^[a-zA-Z]{2}/)||"";if(!j){if(!langCycle.length)return!0;j=d(0)}if(b.ctrlKey&&32==i&&langCycle&&langCycle.length>1){var k=f(j);return k>=0&&(c(k),g.setAttribute("lang",d(k)),g.style.direction=e(k)),b.preventDefault&&b.preventDefault(),b.returnValue=!1,!1}var l=keyboardLayout[j];if(!l||b.ctrlKey||b.altKey||b.metaKey||32!=a&&a<48||i<32||i>127)return!0;var m=32==i&&b.shiftKey&&l[95]||l[i-32];m="string"==typeof m?m:String.fromCharCode(m);var n=document.selection,o=g.selectionStart;if("number"==typeof o){var p=g.scrollLeft,q=g.scrollTop;g.value=g.value.substring(0,o)+m+g.value.substring(g.selectionEnd,g.value.length);var r=o+m.length;g.setSelectionRange(r,r),g.scrollLeft=p,g.scrollTop=q}else if(n){var s=n.createRange();s.text=m,s.setEndPoint("StartToEnd",s),s.select()}else g.value+=m;return b.preventDefault&&b.preventDefault(),b.returnValue=!1,!1}})}(),keyboardLayout.fa=[32,33,1563,1643,65020,1642,1548,1711,41,40,42,43,1608,45,46,47,1776,1777,1778,1779,1780,1781,1782,1783,1784,1785,58,1705,62,61,60,1567,1644,1572,8204,1688,1610,1613,1573,1571,1570,1617,1577,187,171,1569,1620,93,91,1618,1611,1574,1615,1614,1648,1612,1619,1616,1603,1580,92,1670,215,1600,8205,1588,1584,1586,1740,1579,1576,1604,1575,1607,1578,1606,1605,1662,1583,1582,1581,1590,1602,1587,1601,1593,1585,1589,1591,1594,1592,125,124,123,247,8204],langCycle.push({lang:"fa",direction:"rtl"});