class Particles{
  constructor(x,y,radius)  {
var options{
    isStatic: true
}
this.body=Bodies.circle(x,y,this.radius,options)
this.color=color(random(0,255),random(0,255),random(0,255));
World.add(world,this.body);
  }

display() {
    this.color=color(random(0,225),random(0,215),random(0,205))
    var particles=[] 
    var plinkos=[]
    var divisions=[]
    for (var k=0; k<=100;k=k+80){
        divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
    }
}
}