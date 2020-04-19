

export function calcularTotal(cantidad, plazo){
    //Cantidades 
/*
0-1000 = 25%
1001 - 5000 = 50%
5001 - 10000 = 15%
+10001 = 10%


*/ 

    let totalCantidad; 

    if(cantidad<=1000){
        totalCantidad = cantidad * .25;

    }else if(cantidad>1000 && cantidad<5001){
        totalCantidad = cantidad * .50;
    }else if(cantidad>5000 && cantidad<10001){
        totalCantidad = cantidad * .15;
    }else if(cantidad>10000 ){
        totalCantidad = cantidad * .10;
    };


    /*
    Calculo de plazo
    3 = 5%
    6 = 10%
    12 = 15%
    24 = 20%
    
    */  

    let totalPlazo;

    switch(plazo){
        case 3: 
            totalPlazo = cantidad * .05;
            break;
        case 6: 
            totalPlazo = cantidad * .1;
            break;
        case 12: 
            totalPlazo = cantidad * .15;
            break;
        case 24: 
            totalPlazo = cantidad * .2;
            break;
        default:
            break;
    }

    return cantidad + totalPlazo + totalCantidad;
    

}