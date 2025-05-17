//any可以赋值给任何类型 不需要检查类型

let anys: any;
anys = true
anys = 1
anys = "vue"
anys = {}
anys = []
anys = null
anys = undefined
anys = Symbol("type ")


//不知道写什么类型 先写unknown 再写any
//unknown 比 any 更安全


let value: unknown;
value = true
value = 1
value = "vue"
value = {}
value = []
value = null
value = undefined
value = Symbol("type ")


let xiaoman: unknown = { a: true }
xiaoman.a

//弊端：如果使用any 就失去了ts类型检测的作用
//unknown 类型比any更严格 用any时可以尝试用unknown

let names: unknown = "123"
let names1: string = names //这样写会报错  unknowm类型只能作为父类型 any可父类型可子类型

let app: any = "132"
let app2: string = app //any类型就可以

//unknown 可赋值对象只有unknow 和 any
let bbb: unknown = "123"
let aaa: any = "134"
aaa = bbb

//区别二
//如果是any类型的对象 在没有这个属性的时候不会报错的
let obj: any = { b: 1 }
obj.a

//如果是unknown类型的对象 是不能调用属性和方法的
let obj: unknown = { b: 1, ccc: (): number => 123 }
obj.b
obj.ccc