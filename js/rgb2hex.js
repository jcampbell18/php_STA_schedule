/* convert RGB to Hex
    Reference: https://www.sitepoint.com/jquery-convert-rgb-hex-color/
*/

function RGB2Color(r,g,b) {

  return '#' + this.byte2Hex(r) + this.byte2Hex(g) + this.byte2Hex(b);

}
function byte2Hex (n) {

  var nybHexString = "0123456789ABCDEF";
  return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);

}