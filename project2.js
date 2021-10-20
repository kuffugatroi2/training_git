function convertToRoman(num) {
    const LM = {
        1:'I',2:'II',3:'III',4:'IV',5:'V',6:'VI',7:'VII',8:'VIII',9:'IX',10:'X',
        10:'X',20:'XX',30:'XXX',40:'XL',50:'L',60:'LX',70:'LXX',80:'LXXX',90:'XC',
        100:'C',200:'CC',300:'CCC',400:'CD',500:'D',600:'DC',700:'DCC',800:'DCCC',900:'CM',
        1000:'M',2000:'MM',3000:'MMM',4000:'MMMM',0:''
    };
    var myNum = num;
    var KQ = '';
    myNum = myNum.toString()
    .split('');
    var dt = myNum.length;
    for(let i = 0; i < dt; i++) {
        var d = myNum.length;
        console.log(d);
         switch(d){
            case d=4:{
                var x = myNum.shift();
                x = parseInt(x + '000');
                KQ += LM[x];
                break;
            }
            case d=3:{
                var x = myNum.shift();
                x = parseInt(x + '00');
                KQ += LM[x];
                break;
            }
            case d=2:{
                var x = myNum.shift();
                x = parseInt(x + '0');
                KQ += LM[x];
                break;
            }
            case d=1:{
                var x = myNum.shift();
                x = parseInt(x);
                KQ += LM[x];
                break;
            }
         }
    }
    return KQ;
   }
   
  var a = convertToRoman(2173);
  console.log(a);