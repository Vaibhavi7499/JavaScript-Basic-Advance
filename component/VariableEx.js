function Outer(){
    var a = 20;

    let c = 30;
    
    function Inner(){
        let b = 10;
        console.log(b);
        console.log(c);

    }
    console.log(a);

    Inner();
}

Outer();