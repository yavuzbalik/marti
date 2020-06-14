const arrayList = [
    {
        "sender": "BankA",
        "receiver": "BankB",
        "amount": "100"
    },
    {
        "sender": "BankB",
        "receiver": "BankC",
        "amount": "20"
    },
    {
        "sender": "BankB",
        "receiver": "BankC",
        "amount": "120"
    },
    {
        "sender": "BankA",
        "receiver": "BankB",
        "amount": "150"
    },
    {
        "sender": "BankC",
        "receiver": "BankB",
        "amount": "200"
    },
    {
        "sender": "BankC",
        "receiver": "BankA",
        "amount": "100"
    }
]

class Graph { 

    constructor() 
    {  
        this.List = new Map(); 
        
    } 
  



addVertex(vertex) {
    if (!this.List.has(vertex)) {
      this.List.set(vertex, []);
    } else {
      throw 'Already Exist!!!';
    }
  }

addEdge(v, w) 
{ 
    this.List.get(v).push(w); 
    
}

printGraph() 
{ 
    let get_keys = this.List.keys(); 
  
    for (let i of get_keys)  
{ 
    let get_values = this.List.get(i); 
    let concatinate = ""; 


//   for(let z = 0;z<get_values.length;z++){
//       for(let t=0;t<get_values.length;t++){
//           if(get_values[z][t]){
//             console.log(get_values[z][t])
//           }
//       }
//   }


        for (let j of get_values) {
            
            concatinate += j + " ";
        }
             
  
        console.log(i + " -> " + concatinate); 
    } 
    
}
}

const addVertices = (array) =>{
let vertices = []
let i =0
let j = array.length
for (i; i < j; i++) { 
    if (vertices.indexOf(array[i].sender) === -1){
        vertices.push(array[i].sender);
    } 
    if (vertices.indexOf(array[i].receiver) === -1){
        vertices.push(array[i].receiver);
    } 
} 
    
return vertices
};



let vertices = addVertices(arrayList);

let g = new Graph(vertices.length); 
 
  
for (let i = 0; i < vertices.length; i++) { 
    g.addVertex(vertices[i]); 
} 

for (let i = 0;i<arrayList.length;i++){
   
    g.addEdge(arrayList[i].receiver,[arrayList[i].sender,arrayList[i].amount])
   
}


g.printGraph();


