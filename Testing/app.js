console.log('-------------------------shift()----------------------------');
let technologies=['html','css','js','jquery','bootstrap'];
console.log(technologies);
technologies.shift();
setTimeout(console.log(technologies),1000);

//unshift()
console.log('-------------------------unshift()----------------------------');
technologies=['html','css','js','jquery','bootstrap'];
console.log(technologies);
technologies.unshift('nodejs');
console.log(technologies);

//push()
console.log('-------------------------push()----------------------------');
technologies=['html','css','js','jquery','bootstrap'];
console.log(technologies);
technologies.push('nodejs');
console.log(technologies)


//pop()
console.log('-------------------------pop()----------------------------');
technologies=['html','css','js','jquery','bootstrap'];
console.log(technologies);
technologies.pop();
console.log(technologies);


//sort()
console.log('-------------------------sort()----------------------------');
technologies=['html','css','js','jquery','bootstrap'];
console.log(technologies);
technologies.sort();
console.log(technologies);

//reverse()
console.log('-------------------------reverse()---------------------------');
technologies=['html','css','js','jquery','bootstrap'];
console.log(technologies);
technologies.reverse();
console.log(technologies);

//sorted reverse order
console.log('-------------------------reverse sort---------------------------');
technologies=['html','css','js','jquery','bootstrap'];
console.log(technologies);
technologies.sort().reverse();
console.log(technologies);

//splice(index)
console.log('-------------------------splice(index)--------------------------');
technologies=['html','css','js','jquery','bootstrap'];
console.log(technologies);
technologies.splice(2);
console.log(technologies);
//splice(index,no-of-elements)
console.log('-------------------------splice(index,no-of-elements)--------------------------');
technologies=['html','css','js','jquery','bootstrap'];
console.log(technologies);
technologies.splice(2,2);
console.log(technologies);
//splice(index,1,replace element)
console.log('-------------------------splice(index,1,replace element)--------------------------');
technologies=['html','css','js','jquery','bootstrap'];
console.log(technologies);
technologies.splice(2,1,'nodejs');
console.log(technologies);
console.log('-------------------------------slice------------------------------------');
technologies=['html','css','js','jquery','bootstrap'];
let l=technologies.slice(1,4);
console.log(l);
//join()
console.log('-------------------------join()----------------------------');
technologies=['html','css','js','jquery','bootstrap'];
console.log(technologies);
let techString=technologies.join('-');
console.log(technologies);
console.log(techString);

//split()
console.log('-------------------------split()----------------------------');
console.log(techString);
let newTech=techString.split('-');
console.log(newTech);

