var ans1 = document.querySelector(".a1");
var ans2 = document.querySelector(".a2");
var ans3 = document.querySelector(".a3"); 
var ans4 = document.querySelector(".a4");
var ans5 = document.querySelector(".a5");
var ans6 = document.querySelector(".a6");
var ans7 = document.querySelector(".a7");
var ans8 = document.querySelector(".a8");

var qus2 = document.querySelector(".q2");
var qus3 = document.querySelector(".q3"); 
var qus4 = document.querySelector(".q4");
var qus5 = document.querySelector(".q5"); 
var qus6 = document.querySelector(".q6"); 
var qus7 = document.querySelector(".q7"); 

var g1 = document.querySelector(".g1");
var g2 = document.querySelector(".g2");
var g3 = document.querySelector(".g3");
var g4 = document.querySelector(".g4"); 
var g5 = document.querySelector(".g5"); 


function Cq1(){
    if(ans1.style.display === 'none'){
        ans1.style.display = 'block';
    } else{
        ans1.style.display = 'block';
    }
    if(ans2.style.display === 'block'){
        ans2.style.display = 'none';
    } else{
        ans2.style.display = 'none';
    }
    if(ans3.style.display === 'block'){
        ans3.style.display = 'none';
    } else{
        ans3.style.display = 'none';
    }
}

function Cq2(){
    if(ans2.style.display === 'none'){
        ans2.style.display = 'block';
    } else{
        ans2.style.display = 'block';
    }
    
    if(ans2.style.display === 'block'){
        ans3.style.display = 'block';
    } else{
        ans3.style.display = 'none';
    }

    if(ans1.style.display === 'block'){
        ans1.style.display = 'none';
    } else{
        ans1.style.display = 'none'
    }
}


function Cg1(){ //alex
    if(qus3.style.display === 'none'){
        qus3.style.display = 'block';
    } else{
        qus3.style.display = 'block';
    }
    
    if(qus3.style.display === 'block'){
        g1.style.display = 'block';
    } else{
        g1.style.display = 'none';
    }
    
    ans4.style.display = 'block';
    
    //aswan hidden
    if(qus4.style.display === 'block'){
        qus4.style.display = 'none';
    } 
    if(g2.style.display === 'block'){
        g2.style.display = 'none';
    } if(ans5.style.display === 'block'){
        ans5.style.display = 'none';
    }
    //giza hidden
    if(qus5.style.display === 'block'){
        qus5.style.display = 'none';
    } 
    if(g3.style.display === 'block'){
        g3.style.display = 'none';
    } if(ans6.style.display === 'block'){
        ans6.style.display = 'none';
    }
    // new-vally hidden
    if(qus6.style.display === 'block'){
        qus6.style.display = 'none';
    } 
    if(g4.style.display === 'block'){
        g4.style.display = 'none';
    } if(ans7.style.display === 'block'){
        ans7.style.display = 'none';
    }
    // fayoum hidden
    if(qus7.style.display === 'block'){
        qus7.style.display = 'none';
    } 
    if(g5.style.display === 'block'){
        g5.style.display = 'none';
    } if(ans8.style.display === 'block'){
        ans8.style.display = 'none';
    }
}

function Cg2(){ //aswan
    if(qus4.style.display === 'none'){
        qus4.style.display = 'block';
    } else{
        qus4.style.display = 'block';
    }
    
    if(qus4.style.display === 'block'){
        g2.style.display = 'block';
    } else{
        g2.style.display = 'none';
    }
    
    ans5.style.display = 'block';

    //alex hidden
    if(qus3.style.display === 'block'){
        qus3.style.display = 'none';
    } 
    if(g1.style.display === 'block'){
        g1.style.display = 'none';
    } if(ans4.style.display === 'block'){
        ans4.style.display = 'none';
    }
    //giza hidden
    if(qus5.style.display === 'block'){
        qus5.style.display = 'none';
    } 
    if(g3.style.display === 'block'){
        g3.style.display = 'none';
    } if(ans6.style.display === 'block'){
        ans6.style.display = 'none';
    }
    // new-vally hidden
    if(qus6.style.display === 'block'){
        qus6.style.display = 'none';
    } 
    if(g4.style.display === 'block'){
        g4.style.display = 'none';
    } if(ans7.style.display === 'block'){
        ans7.style.display = 'none';
    }
    // fayoum hidden
    if(qus7.style.display === 'block'){
        qus7.style.display = 'none';
    } 
    if(g5.style.display === 'block'){
        g5.style.display = 'none';
    } if(ans8.style.display === 'block'){
        ans8.style.display = 'none';
    }
}

function Cg3(){ //giza

    if(qus5.style.display === 'none'){
        qus5.style.display = 'block';
    } else{
        qus5.style.display = 'block';
    }
    
    if(qus5.style.display === 'block'){
        g3.style.display = 'block';
    } else{
        g3.style.display = 'none';
    }
    
    ans6.style.display = 'block';

    //alex hidden
    if(qus3.style.display === 'block'){
        qus3.style.display = 'none';
    } 
    if(g1.style.display === 'block'){
        g1.style.display = 'none';
    } if(ans4.style.display === 'block'){
        ans4.style.display = 'none';
    }
    //aswan hidden
    if(qus4.style.display === 'block'){
        qus4.style.display = 'none';
    } 
    if(g2.style.display === 'block'){
        g2.style.display = 'none';
    } if(ans5.style.display === 'block'){
        ans5.style.display = 'none';
    }
    // new-vally hidden
    if(qus6.style.display === 'block'){
        qus6.style.display = 'none';
    } 
    if(g4.style.display === 'block'){
        g4.style.display = 'none';
    } if(ans7.style.display === 'block'){
        ans7.style.display = 'none';
    }
    // fayoum hidden
    if(qus7.style.display === 'block'){
        qus7.style.display = 'none';
    } 
    if(g5.style.display === 'block'){
        g5.style.display = 'none';
    } if(ans8.style.display === 'block'){
        ans8.style.display = 'none';
    }
}

function Cg4(){ //new-vally

    if(qus6.style.display === 'none'){
        qus6.style.display = 'block';
    } else{
        qus6.style.display = 'block';
    }
    
    if(qus6.style.display === 'block'){
        g4.style.display = 'block';
    } else{
        g4.style.display = 'none';
    }
    
    ans7.style.display = 'block';

    //alex hidden
    if(qus3.style.display === 'block'){
        qus3.style.display = 'none';
    } 
    if(g1.style.display === 'block'){
        g1.style.display = 'none';
    } if(ans4.style.display === 'block'){
        ans4.style.display = 'none';
    }
    //aswan hidden
    if(qus4.style.display === 'block'){
        qus4.style.display = 'none';
    } 
    if(g2.style.display === 'block'){
        g2.style.display = 'none';
    } if(ans5.style.display === 'block'){
        ans5.style.display = 'none';
    }
    //giza hidden
    if(qus5.style.display === 'block'){
        qus5.style.display = 'none';
    } 
    if(g3.style.display === 'block'){
        g3.style.display = 'none';
    } if(ans6.style.display === 'block'){
        ans6.style.display = 'none';
    }
    // fayoum hidden
    if(qus7.style.display === 'block'){
        qus7.style.display = 'none';
    } 
    if(g5.style.display === 'block'){
        g5.style.display = 'none';
    } if(ans8.style.display === 'block'){
        ans8.style.display = 'none';
    }
}

function Cg5(){ //fayoum

    if(qus7.style.display === 'none'){
        qus7.style.display = 'block';
    } else{
        qus7.style.display = 'block';
    }
    
    if(qus7.style.display === 'block'){
        g5.style.display = 'block';
    } else{
        g5.style.display = 'none';
    }
    
    ans8.style.display = 'block';

    //alex hidden
    if(qus3.style.display === 'block'){
        qus3.style.display = 'none';
    } 
    if(g1.style.display === 'block'){
        g1.style.display = 'none';
    } if(ans4.style.display === 'block'){
        ans4.style.display = 'none';
    }
    //aswan hidden
    if(qus4.style.display === 'block'){
        qus4.style.display = 'none';
    } 
    if(g2.style.display === 'block'){
        g2.style.display = 'none';
    } if(ans5.style.display === 'block'){
        ans5.style.display = 'none';
    }
    //giza hidden
    if(qus5.style.display === 'block'){
        qus5.style.display = 'none';
    } 
    if(g3.style.display === 'block'){
        g3.style.display = 'none';
    } if(ans6.style.display === 'block'){
        ans6.style.display = 'none';
    }
    // new-vally hidden
    if(qus6.style.display === 'block'){
        qus6.style.display = 'none';
    } 
    if(g4.style.display === 'block'){
        g4.style.display = 'none';
    } if(ans7.style.display === 'block'){
        ans7.style.display = 'none';
    }
}
