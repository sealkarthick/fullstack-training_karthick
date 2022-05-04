let input = prompt("what would you like to do?")
const todos=['collect chicken eg', 'collect shell'];
while(input !=='quit' && input !== 'q'){
   if (input=='lists'){
       console.log('xxxxxxxxxx')
       for (let i=0; i<todos.length;i++){
           console.log(`${i}:${todos[i]}`);
       }
       console.log('xxxxxxxxxxxxxxx')
   }else if(input==='new'){
       const newtodo=prompt('ok, what is new?');
       todos.push(newtodo);
       console.log(`${newtodod}added to the list`)
   }else if(input==='delete'){
       const index = parseInt(prompt('ok, enter an index to delete:'));
       if(!Number.isNaN(index)){
           const deleted=todos.splice(index,1);
           console.log(`ok, deleted ${deleted[0]}`);
       }else {
           console.log('unknown index')
       }
   }
   input=prompt('what would you like to do?')
}console.log('ok quit the app')