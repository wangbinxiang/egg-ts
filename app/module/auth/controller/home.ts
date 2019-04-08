import { Controller } from 'egg';
import "reflect-metadata";
import { route } from 'egg-controller'
import { aspect } from 'egg-aop'
import { Deserializer } from 'ts-jsonapi'


function logging(type: string) {
  return aspect({
    // before method running
    before: (_) => { /* log code */ 
      console.log('before')
      console.log(type)
    },
    // after method running
    after: (_) => { /* log code */ 
      console.log('after')
    },
    error: (context) => { 
      console.log(context)
      /* log code */ 
    }
    // when method throw error
  })
}


export default class HomeController extends Controller {

  @route('/log')
  @logging('create')
  public async index() {
    const { ctx } = this;
    const greeter = new Greeter("egg");
    console.log(greeter);
    console.log(greeter.greet());
    greeter.test('ddd')

    const point = new Point(1, 2);
    console.log(point.x)
    console.log(point.y)

    console.log(formatMetadataKey)
    test()



    // throw new Error('response status is not 200');

    ctx.body = await ctx.service.testClass.sayHi('egg1');
  }

  @route('/user')
  public async user() {

    const result = await this.app.curl('http://kong.zx.qixinyun.com/searchableResourceCatalogDatas?include=userGroup&filter[redBlackList]=2&filter[identify]=91360313MA37Q7KG84&apikey=JgBUzyGyQYPpBa00JeTWUwRUhPfZKWAN', {
      dataType: 'json',
    });
    
    console.log(new Deserializer({ keyForAttribute: 'camelCase', AN_ATTRIBUTE_TYPE: 'transform'}).deserialize(result.data))
    console.log(result.data)

    this.ctx.body = result.data
    // this.ctx.body = await this.ctx.service.test.sayHi('user');
  }
}


const sss = 'sss'

function test() {
  console.log(sss);
}

function classDecorator<T extends {new(...args:any[]):{}}>(constructor: T) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  }
}

const formatMetadataKey = Symbol("format");
// const requiredMetadataKey = Symbol("required");

@classDecorator
class Greeter {
  property = "property";
  hello: string;

  @format("Hello1, %s")
  greeting: string;

  constructor(m: string) {
    this.hello = m;
    this.greeting = m;
  }

  // @enumerable(false)
  greet() {
    let formatString = getFormat(this, "greeting");
    return formatString.replace("%s", this.greeting);
  }

  // @validate
  test( name : string) {
    console.log(name)
  }
}

// function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
//   // 获取目标元数据
//   const existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
//   console.log('existingRequiredParameters')
//   console.log(existingRequiredParameters)
//   existingRequiredParameters.push(parameterIndex);
//   Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
// }


// function validate(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
//   let method = descriptor.value;
//   descriptor.value = function () {
//     let requiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyName);
//     if (requiredParameters) {
//       for (let parameterIndex of requiredParameters) {
//         if (parameterIndex >= arguments.length || arguments[parameterIndex] === undefined) {
//           throw new Error("Missing required argument.")
//         }
//       }
//     }

//     return method.apply(this, arguments);
//   }
// }



console.log(formatMetadataKey)


// const { formatFun, getFormatFun} = function () {
//   const formatMetadataKey = Symbol("format");
//   return {
//     formatFun: (formatString: string) => {
//       return Reflect.metadata(formatMetadataKey, formatString);
//     },
//     getFormatFun: (target: any, propertyKey: string) => {
//       return Reflect.getMetadata(formatMetadataKey, target, propertyKey)
//     }
//   }
// }()


function format(formatString: string) {
  return Reflect.metadata(formatMetadataKey, formatString);
  // return formatFun(formatString);
}

function getFormat(target: any, propertyKey: string) {
  return Reflect.getMetadata(formatMetadataKey, target, propertyKey)
}


// function enumerable(value: boolean) {
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//       console.log(target)
//       console.log(propertyKey)
//       descriptor.enumerable = value;
//   }
// }




class Point {
  private _x: number;
  private _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  @configurable(false)
  get x() { return this._x }

  @configurable(false)
  get y() { return this._y }

}


function configurable(value: boolean) {
  
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target)
    console.log(propertyKey)
    console.log(formatMetadataKey)
    descriptor.configurable = value
  }
}



