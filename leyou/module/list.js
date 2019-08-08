define(function(){
    
        // 下拉菜单的效果
    class List{
        constructor(options){
            this.ali = options.aLi;
            this.adiv = options.aDiv;    
            this.addEvent()
        }
        addEvent(){
            for(var i=0;i<this.ali.length;i++){
                this.ali[i].index = i;
                // console.log(this.ali[i])
                let that =this.ali[i];
                this.ali[i].addEventListener("mouseenter",()=>{
                    for(var j=0;j<this.ali.length;j++){
                        this.adiv[j].style.display = "none";
                    }
                    // console.log(this.ali[i])
                    that.className = "active";
                    // console.log(this.index);
                    this.adiv[that.index].style.display ="block";
                })
                this.ali[i].addEventListener("mouseleave",()=>{
                    for(let j=0;j<this.ali.length;j++){
                        this.adiv[j].style.display ="none";
                        
                    }
                    that.className = "";
                })
            
            }
        }
    }


    return List;
    
})