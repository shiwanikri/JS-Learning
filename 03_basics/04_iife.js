// Immediately Invoked Function Expressions  IIFE(to reduce pollution from global scope declarations(variables) we use IIFE)

// named IIFE
(function chai(){
    console.log('DB Connected');
})();

((name) => {
    console.log(`DB TWO CONNECTED, ${name}`);
})('Shiwani')
