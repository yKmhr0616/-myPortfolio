export class Pokemon{
    name:string;
    type:string;
    h:number;
    a:number;
    b:number;
    c:number;
    d:number;
    s:number;

    constructor(name:string, type:string, h:number, a:number, b:number, c:number, d:number, s:number){
        this.name = name;
        this.type = type;
        this.h = h;
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.s = s;
    }
}

export class Move{
    name:string;
    move_type:string;
    acc:number;
    effects:any;

    constructor(name:string,move_type:string, acc:number, effects:any){
        this.name = name;
        this.move_type = move_type;
        this.acc = acc;
        this.effects = effects;
    }
}

export class Ability{
    
}