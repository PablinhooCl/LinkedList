class Node{
    constructor(value){
        this.value= value;
        this.next= null;
    }
    };
class LinkedList {
    constructor(){
        this.start= null;
        this.length= 0;
    }
    append(value){
        const newNode = new Node(value);
        if (!this.start) {
            this.start = newNode;
        } else {
            let current = this.start;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    };
    prepend(value){
        const newNode= new Node(value);
        if (!this.start) {
            this.start = newNode;
        } else {
            let current= this.start;
            newNode.next= current;
            this.start= newNode;
    } 
    this.length++;  
    };
    size(){
        console.log(this.length);
        return this.length;
    };
    head(){
        console.log(this.start);
    };
    tail(){
        let current = this.start;
        if (!current.next) {
            console.log(current);
            return(current);
        } else {
            while (current.next) {
                current = current.next;
            }
            console.log(current);
            return(current);
        }
    };
    at(index){
        if (index < 0 || index >= this.length) {
            console.log("Índice fuera de rango");
            return null;
        };
        let current= this.start;
        let currentIndex = 0;

        while (currentIndex < index) {
            current = current.next;
            currentIndex++;
        };
        console.log(current);
        return current;
    };
    pop(){
        if (!this.start) {
            console.log("La lista está vacía, no se puede eliminar ningún elemento.");
            return;
        }
        
        if (!this.start.next) {
            // Caso especial: solo hay un elemento en la lista.
            this.start = null;
            this.length = 0;
            return;
        }
        let current = this.start;
        while (current.next.next) {
            current = current.next;
        }

        current.next = null;
        this.length--;
    };
    contains(value){
        let current = this.start;
    
        while (current) {
            if (current.value === value) {
                console.log('true');
                return true;
            }
            current = current.next;
        }
        
        console.log('false');
        return false;
    };
    find(value){
        let current = this.start;
        let currentIndex= 0;
        while (current) {
            if (current.value === value) {
                console.log(currentIndex);
                return currentIndex;
            }
            current = current.next;
            currentIndex++;
        }
        
        console.log(null);
        return null;
    };
    toString(){
        let current = this.start;
        let stringToPrint= '';
        while(current){
            let print= "( "+ current. value+" ) ->" ;
            stringToPrint= stringToPrint.concat(print);
            current= current.next;
        }
        stringToPrint= stringToPrint+' null';
        console.log(stringToPrint);
        return stringToPrint;
    };
    insertAt(value, index){
        if (index < 0 || index > this.length) {
            console.log("Índice fuera de rango");
            return;
        }
    
        const newNode = new Node(value);
    
        if (index === 0) {
            newNode.next = this.start;
            this.start = newNode;
        } else {
            let current = this.start;
            let currentIndex = 0;
            while (currentIndex < index - 1) {
                current = current.next;
                currentIndex++;
            }
    
            newNode.next = current.next;
            current.next = newNode;
        }
    
        this.length++;
    };
    removeAt(index){
        if (index < 0 || index > this.length) {
            console.log("Índice fuera de rango");
            return;
        }
        let current= this.start;
        let currentIndex= 0;
        while(currentIndex< index-1){
            current= current.next;
            currentIndex++;
        }
        current.next=current.next.next;
    }
}

 

const linkedList= new LinkedList();

linkedList.append(1);
console.log(linkedList);
linkedList.append(2);
linkedList.append('asd');
linkedList.append('qwe');
console.log(linkedList);
linkedList.prepend(0);
console.log(linkedList);
linkedList.size();
linkedList.pop();
console.log(linkedList);
linkedList.size();
linkedList.toString();