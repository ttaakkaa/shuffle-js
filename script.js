   var name= prompt("your name?")
        document.write("<h1>"+shuffle(name)+"</h1>");
        
        function getRandomInt(n){
            return Math.floor(Math.random()*n);
        }
        
        function shuffle(s) {
            var arr = s.split('');          
            var n = arr.length;              
            for(var i=0 ; i<n ; i++) {
                var j = getRandomInt(n);       
                var temp = arr[i];             
                arr[i] = arr[j];
                arr[j] = temp;
                }
            s = arr.join('');              
            return s;                        
        }
