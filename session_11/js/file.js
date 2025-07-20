function looping(start, end, breakNum, contNum){
    if(start!==undefined && end!==undefined && breakNum!==undefined &&contNum !==undefined){
        for(start; start<=end; start++){
            if(start===breakNum)break;
            else if(start==contNum)continue;
            else console.log(start)
        }
    }
    else console.log('Enter your full data')
}
looping(1)
looping(1,2)
looping(1,2,3)
looping(1,20,11,4)
looping(1,10,6,'hh')