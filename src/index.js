module.exports = function check(str, bracketsConfig) {

  let c='';
  
  for (let i = 0; i < str.length; i++) {
    const e = str[i];

    for (let j = 0; j < bracketsConfig.length; j++) {
        let startBracket=bracketsConfig[j][0];
        let endBracket=bracketsConfig[j][1];

        if (e == endBracket)
        {
          if (c.length==0 && startBracket!= endBracket)
            return false;

          if (c.slice(-1)==startBracket)
          {
            c=c.substring(0, c.length-1);
            break;
          }
          if (startBracket!= endBracket)
            return false;
        }

        if (e == startBracket)
        {
          c=c+e;
          break;
        }
    }
  }

  if (c.length>0)
    return false;

  return true;
}
