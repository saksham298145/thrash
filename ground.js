class Ground{
    constructor(x,y,w,h){
        let go={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,w,h,go)
        this.w=w
        this.h=h
        World.add(world,this.body)
        
    }
    display(){
        var pos=this.body.position
        push()
        rectMode(CENTER)
        stroke(260)
        fill(120)
        rect(pos.x,pos.y,this.w,this.h)
        pop()
    }

}