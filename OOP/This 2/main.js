// const szarik = {
//     children:['fafik','żaba'],
//     showChildren:function(){
//         this.children.forEach(function(child,index){
//             console.log(this.children[index]);
//         })
//     }
// }

// szarik.showChildren();

// 1) Rozwiązanie that/self=this

// const szarik = {
//     children:['fafik','żaba'],
//     showChildren:function(){
//         const that =this;
//         this.children.forEach(function(child,index){
//             console.log(that.children[index]);
//         })
//     }
// }

// szarik.showChildren();

// 2) Rozwiązanie Bez funkcji za pomocą pętli for of

// const szarik = {
//     children:['fafik','żaba'],
//     showChildren:function(){
//         for(child of this.children){
//             console.log(child);
//         }
//     }
// }

// szarik.showChildren();

// 3) Rozwiązanie Arrow function

const szarik = {
    children:['fafik','żaba'],
    showChildren:function(){
        this.children.forEach((child,index)=>{
            console.log(this.children[index]);
        })
    }
}

szarik.showChildren();

// 4) Rozwiązanie Bind

const szarik = {
    children:['fafik','żaba'],
    showChildren:function(){
        this.children.forEach(function(child,index){
            console.log(this.children[index]);
        }.bind(this))
    }
}

szarik.showChildren();