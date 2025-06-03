
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Producer
 * 
 */
export type Producer = $Result.DefaultSelection<Prisma.$ProducerPayload>
/**
 * Model Farm
 * 
 */
export type Farm = $Result.DefaultSelection<Prisma.$FarmPayload>
/**
 * Model Crop
 * 
 */
export type Crop = $Result.DefaultSelection<Prisma.$CropPayload>
/**
 * Model FarmCrop
 * 
 */
export type FarmCrop = $Result.DefaultSelection<Prisma.$FarmCropPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Producers
 * const producers = await prisma.producer.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Producers
   * const producers = await prisma.producer.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.producer`: Exposes CRUD operations for the **Producer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Producers
    * const producers = await prisma.producer.findMany()
    * ```
    */
  get producer(): Prisma.ProducerDelegate<ExtArgs>;

  /**
   * `prisma.farm`: Exposes CRUD operations for the **Farm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Farms
    * const farms = await prisma.farm.findMany()
    * ```
    */
  get farm(): Prisma.FarmDelegate<ExtArgs>;

  /**
   * `prisma.crop`: Exposes CRUD operations for the **Crop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Crops
    * const crops = await prisma.crop.findMany()
    * ```
    */
  get crop(): Prisma.CropDelegate<ExtArgs>;

  /**
   * `prisma.farmCrop`: Exposes CRUD operations for the **FarmCrop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FarmCrops
    * const farmCrops = await prisma.farmCrop.findMany()
    * ```
    */
  get farmCrop(): Prisma.FarmCropDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Producer: 'Producer',
    Farm: 'Farm',
    Crop: 'Crop',
    FarmCrop: 'FarmCrop'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "producer" | "farm" | "crop" | "farmCrop"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Producer: {
        payload: Prisma.$ProducerPayload<ExtArgs>
        fields: Prisma.ProducerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProducerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProducerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducerPayload>
          }
          findFirst: {
            args: Prisma.ProducerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProducerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducerPayload>
          }
          findMany: {
            args: Prisma.ProducerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducerPayload>[]
          }
          create: {
            args: Prisma.ProducerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducerPayload>
          }
          createMany: {
            args: Prisma.ProducerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProducerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducerPayload>[]
          }
          delete: {
            args: Prisma.ProducerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducerPayload>
          }
          update: {
            args: Prisma.ProducerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducerPayload>
          }
          deleteMany: {
            args: Prisma.ProducerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProducerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProducerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProducerPayload>
          }
          aggregate: {
            args: Prisma.ProducerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducer>
          }
          groupBy: {
            args: Prisma.ProducerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProducerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProducerCountArgs<ExtArgs>
            result: $Utils.Optional<ProducerCountAggregateOutputType> | number
          }
        }
      }
      Farm: {
        payload: Prisma.$FarmPayload<ExtArgs>
        fields: Prisma.FarmFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FarmFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FarmFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          findFirst: {
            args: Prisma.FarmFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FarmFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          findMany: {
            args: Prisma.FarmFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>[]
          }
          create: {
            args: Prisma.FarmCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          createMany: {
            args: Prisma.FarmCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FarmCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>[]
          }
          delete: {
            args: Prisma.FarmDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          update: {
            args: Prisma.FarmUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          deleteMany: {
            args: Prisma.FarmDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FarmUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FarmUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          aggregate: {
            args: Prisma.FarmAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFarm>
          }
          groupBy: {
            args: Prisma.FarmGroupByArgs<ExtArgs>
            result: $Utils.Optional<FarmGroupByOutputType>[]
          }
          count: {
            args: Prisma.FarmCountArgs<ExtArgs>
            result: $Utils.Optional<FarmCountAggregateOutputType> | number
          }
        }
      }
      Crop: {
        payload: Prisma.$CropPayload<ExtArgs>
        fields: Prisma.CropFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CropFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CropFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>
          }
          findFirst: {
            args: Prisma.CropFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CropFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>
          }
          findMany: {
            args: Prisma.CropFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>[]
          }
          create: {
            args: Prisma.CropCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>
          }
          createMany: {
            args: Prisma.CropCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CropCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>[]
          }
          delete: {
            args: Prisma.CropDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>
          }
          update: {
            args: Prisma.CropUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>
          }
          deleteMany: {
            args: Prisma.CropDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CropUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CropUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CropPayload>
          }
          aggregate: {
            args: Prisma.CropAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCrop>
          }
          groupBy: {
            args: Prisma.CropGroupByArgs<ExtArgs>
            result: $Utils.Optional<CropGroupByOutputType>[]
          }
          count: {
            args: Prisma.CropCountArgs<ExtArgs>
            result: $Utils.Optional<CropCountAggregateOutputType> | number
          }
        }
      }
      FarmCrop: {
        payload: Prisma.$FarmCropPayload<ExtArgs>
        fields: Prisma.FarmCropFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FarmCropFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmCropPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FarmCropFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmCropPayload>
          }
          findFirst: {
            args: Prisma.FarmCropFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmCropPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FarmCropFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmCropPayload>
          }
          findMany: {
            args: Prisma.FarmCropFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmCropPayload>[]
          }
          create: {
            args: Prisma.FarmCropCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmCropPayload>
          }
          createMany: {
            args: Prisma.FarmCropCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FarmCropCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmCropPayload>[]
          }
          delete: {
            args: Prisma.FarmCropDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmCropPayload>
          }
          update: {
            args: Prisma.FarmCropUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmCropPayload>
          }
          deleteMany: {
            args: Prisma.FarmCropDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FarmCropUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FarmCropUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmCropPayload>
          }
          aggregate: {
            args: Prisma.FarmCropAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFarmCrop>
          }
          groupBy: {
            args: Prisma.FarmCropGroupByArgs<ExtArgs>
            result: $Utils.Optional<FarmCropGroupByOutputType>[]
          }
          count: {
            args: Prisma.FarmCropCountArgs<ExtArgs>
            result: $Utils.Optional<FarmCropCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProducerCountOutputType
   */

  export type ProducerCountOutputType = {
    farms: number
  }

  export type ProducerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farms?: boolean | ProducerCountOutputTypeCountFarmsArgs
  }

  // Custom InputTypes
  /**
   * ProducerCountOutputType without action
   */
  export type ProducerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProducerCountOutputType
     */
    select?: ProducerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProducerCountOutputType without action
   */
  export type ProducerCountOutputTypeCountFarmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmWhereInput
  }


  /**
   * Count Type FarmCountOutputType
   */

  export type FarmCountOutputType = {
    farmCrops: number
  }

  export type FarmCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmCrops?: boolean | FarmCountOutputTypeCountFarmCropsArgs
  }

  // Custom InputTypes
  /**
   * FarmCountOutputType without action
   */
  export type FarmCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmCountOutputType
     */
    select?: FarmCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FarmCountOutputType without action
   */
  export type FarmCountOutputTypeCountFarmCropsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmCropWhereInput
  }


  /**
   * Count Type CropCountOutputType
   */

  export type CropCountOutputType = {
    farmCrops: number
  }

  export type CropCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmCrops?: boolean | CropCountOutputTypeCountFarmCropsArgs
  }

  // Custom InputTypes
  /**
   * CropCountOutputType without action
   */
  export type CropCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CropCountOutputType
     */
    select?: CropCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CropCountOutputType without action
   */
  export type CropCountOutputTypeCountFarmCropsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmCropWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Producer
   */

  export type AggregateProducer = {
    _count: ProducerCountAggregateOutputType | null
    _avg: ProducerAvgAggregateOutputType | null
    _sum: ProducerSumAggregateOutputType | null
    _min: ProducerMinAggregateOutputType | null
    _max: ProducerMaxAggregateOutputType | null
  }

  export type ProducerAvgAggregateOutputType = {
    id: number | null
  }

  export type ProducerSumAggregateOutputType = {
    id: number | null
  }

  export type ProducerMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    cpf: string | null
    cnpj: string | null
    name: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProducerMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    cpf: string | null
    cnpj: string | null
    name: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProducerCountAggregateOutputType = {
    id: number
    uuid: number
    cpf: number
    cnpj: number
    name: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProducerAvgAggregateInputType = {
    id?: true
  }

  export type ProducerSumAggregateInputType = {
    id?: true
  }

  export type ProducerMinAggregateInputType = {
    id?: true
    uuid?: true
    cpf?: true
    cnpj?: true
    name?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProducerMaxAggregateInputType = {
    id?: true
    uuid?: true
    cpf?: true
    cnpj?: true
    name?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProducerCountAggregateInputType = {
    id?: true
    uuid?: true
    cpf?: true
    cnpj?: true
    name?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProducerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Producer to aggregate.
     */
    where?: ProducerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Producers to fetch.
     */
    orderBy?: ProducerOrderByWithRelationInput | ProducerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProducerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Producers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Producers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Producers
    **/
    _count?: true | ProducerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProducerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProducerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProducerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProducerMaxAggregateInputType
  }

  export type GetProducerAggregateType<T extends ProducerAggregateArgs> = {
        [P in keyof T & keyof AggregateProducer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducer[P]>
      : GetScalarType<T[P], AggregateProducer[P]>
  }




  export type ProducerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProducerWhereInput
    orderBy?: ProducerOrderByWithAggregationInput | ProducerOrderByWithAggregationInput[]
    by: ProducerScalarFieldEnum[] | ProducerScalarFieldEnum
    having?: ProducerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProducerCountAggregateInputType | true
    _avg?: ProducerAvgAggregateInputType
    _sum?: ProducerSumAggregateInputType
    _min?: ProducerMinAggregateInputType
    _max?: ProducerMaxAggregateInputType
  }

  export type ProducerGroupByOutputType = {
    id: number
    uuid: string
    cpf: string | null
    cnpj: string | null
    name: string
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProducerCountAggregateOutputType | null
    _avg: ProducerAvgAggregateOutputType | null
    _sum: ProducerSumAggregateOutputType | null
    _min: ProducerMinAggregateOutputType | null
    _max: ProducerMaxAggregateOutputType | null
  }

  type GetProducerGroupByPayload<T extends ProducerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProducerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProducerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProducerGroupByOutputType[P]>
            : GetScalarType<T[P], ProducerGroupByOutputType[P]>
        }
      >
    >


  export type ProducerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    cpf?: boolean
    cnpj?: boolean
    name?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    farms?: boolean | Producer$farmsArgs<ExtArgs>
    _count?: boolean | ProducerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producer"]>

  export type ProducerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    cpf?: boolean
    cnpj?: boolean
    name?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["producer"]>

  export type ProducerSelectScalar = {
    id?: boolean
    uuid?: boolean
    cpf?: boolean
    cnpj?: boolean
    name?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProducerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farms?: boolean | Producer$farmsArgs<ExtArgs>
    _count?: boolean | ProducerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProducerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProducerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Producer"
    objects: {
      farms: Prisma.$FarmPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      cpf: string | null
      cnpj: string | null
      name: string
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["producer"]>
    composites: {}
  }

  type ProducerGetPayload<S extends boolean | null | undefined | ProducerDefaultArgs> = $Result.GetResult<Prisma.$ProducerPayload, S>

  type ProducerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProducerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProducerCountAggregateInputType | true
    }

  export interface ProducerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Producer'], meta: { name: 'Producer' } }
    /**
     * Find zero or one Producer that matches the filter.
     * @param {ProducerFindUniqueArgs} args - Arguments to find a Producer
     * @example
     * // Get one Producer
     * const producer = await prisma.producer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProducerFindUniqueArgs>(args: SelectSubset<T, ProducerFindUniqueArgs<ExtArgs>>): Prisma__ProducerClient<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Producer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProducerFindUniqueOrThrowArgs} args - Arguments to find a Producer
     * @example
     * // Get one Producer
     * const producer = await prisma.producer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProducerFindUniqueOrThrowArgs>(args: SelectSubset<T, ProducerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProducerClient<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Producer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducerFindFirstArgs} args - Arguments to find a Producer
     * @example
     * // Get one Producer
     * const producer = await prisma.producer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProducerFindFirstArgs>(args?: SelectSubset<T, ProducerFindFirstArgs<ExtArgs>>): Prisma__ProducerClient<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Producer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducerFindFirstOrThrowArgs} args - Arguments to find a Producer
     * @example
     * // Get one Producer
     * const producer = await prisma.producer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProducerFindFirstOrThrowArgs>(args?: SelectSubset<T, ProducerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProducerClient<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Producers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Producers
     * const producers = await prisma.producer.findMany()
     * 
     * // Get first 10 Producers
     * const producers = await prisma.producer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const producerWithIdOnly = await prisma.producer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProducerFindManyArgs>(args?: SelectSubset<T, ProducerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Producer.
     * @param {ProducerCreateArgs} args - Arguments to create a Producer.
     * @example
     * // Create one Producer
     * const Producer = await prisma.producer.create({
     *   data: {
     *     // ... data to create a Producer
     *   }
     * })
     * 
     */
    create<T extends ProducerCreateArgs>(args: SelectSubset<T, ProducerCreateArgs<ExtArgs>>): Prisma__ProducerClient<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Producers.
     * @param {ProducerCreateManyArgs} args - Arguments to create many Producers.
     * @example
     * // Create many Producers
     * const producer = await prisma.producer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProducerCreateManyArgs>(args?: SelectSubset<T, ProducerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Producers and returns the data saved in the database.
     * @param {ProducerCreateManyAndReturnArgs} args - Arguments to create many Producers.
     * @example
     * // Create many Producers
     * const producer = await prisma.producer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Producers and only return the `id`
     * const producerWithIdOnly = await prisma.producer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProducerCreateManyAndReturnArgs>(args?: SelectSubset<T, ProducerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Producer.
     * @param {ProducerDeleteArgs} args - Arguments to delete one Producer.
     * @example
     * // Delete one Producer
     * const Producer = await prisma.producer.delete({
     *   where: {
     *     // ... filter to delete one Producer
     *   }
     * })
     * 
     */
    delete<T extends ProducerDeleteArgs>(args: SelectSubset<T, ProducerDeleteArgs<ExtArgs>>): Prisma__ProducerClient<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Producer.
     * @param {ProducerUpdateArgs} args - Arguments to update one Producer.
     * @example
     * // Update one Producer
     * const producer = await prisma.producer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProducerUpdateArgs>(args: SelectSubset<T, ProducerUpdateArgs<ExtArgs>>): Prisma__ProducerClient<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Producers.
     * @param {ProducerDeleteManyArgs} args - Arguments to filter Producers to delete.
     * @example
     * // Delete a few Producers
     * const { count } = await prisma.producer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProducerDeleteManyArgs>(args?: SelectSubset<T, ProducerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Producers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Producers
     * const producer = await prisma.producer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProducerUpdateManyArgs>(args: SelectSubset<T, ProducerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Producer.
     * @param {ProducerUpsertArgs} args - Arguments to update or create a Producer.
     * @example
     * // Update or create a Producer
     * const producer = await prisma.producer.upsert({
     *   create: {
     *     // ... data to create a Producer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producer we want to update
     *   }
     * })
     */
    upsert<T extends ProducerUpsertArgs>(args: SelectSubset<T, ProducerUpsertArgs<ExtArgs>>): Prisma__ProducerClient<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Producers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducerCountArgs} args - Arguments to filter Producers to count.
     * @example
     * // Count the number of Producers
     * const count = await prisma.producer.count({
     *   where: {
     *     // ... the filter for the Producers we want to count
     *   }
     * })
    **/
    count<T extends ProducerCountArgs>(
      args?: Subset<T, ProducerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProducerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProducerAggregateArgs>(args: Subset<T, ProducerAggregateArgs>): Prisma.PrismaPromise<GetProducerAggregateType<T>>

    /**
     * Group by Producer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProducerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProducerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProducerGroupByArgs['orderBy'] }
        : { orderBy?: ProducerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProducerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProducerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Producer model
   */
  readonly fields: ProducerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Producer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProducerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    farms<T extends Producer$farmsArgs<ExtArgs> = {}>(args?: Subset<T, Producer$farmsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Producer model
   */ 
  interface ProducerFieldRefs {
    readonly id: FieldRef<"Producer", 'Int'>
    readonly uuid: FieldRef<"Producer", 'String'>
    readonly cpf: FieldRef<"Producer", 'String'>
    readonly cnpj: FieldRef<"Producer", 'String'>
    readonly name: FieldRef<"Producer", 'String'>
    readonly isDeleted: FieldRef<"Producer", 'Boolean'>
    readonly createdAt: FieldRef<"Producer", 'DateTime'>
    readonly updatedAt: FieldRef<"Producer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Producer findUnique
   */
  export type ProducerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProducerInclude<ExtArgs> | null
    /**
     * Filter, which Producer to fetch.
     */
    where: ProducerWhereUniqueInput
  }

  /**
   * Producer findUniqueOrThrow
   */
  export type ProducerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProducerInclude<ExtArgs> | null
    /**
     * Filter, which Producer to fetch.
     */
    where: ProducerWhereUniqueInput
  }

  /**
   * Producer findFirst
   */
  export type ProducerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProducerInclude<ExtArgs> | null
    /**
     * Filter, which Producer to fetch.
     */
    where?: ProducerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Producers to fetch.
     */
    orderBy?: ProducerOrderByWithRelationInput | ProducerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Producers.
     */
    cursor?: ProducerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Producers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Producers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Producers.
     */
    distinct?: ProducerScalarFieldEnum | ProducerScalarFieldEnum[]
  }

  /**
   * Producer findFirstOrThrow
   */
  export type ProducerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProducerInclude<ExtArgs> | null
    /**
     * Filter, which Producer to fetch.
     */
    where?: ProducerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Producers to fetch.
     */
    orderBy?: ProducerOrderByWithRelationInput | ProducerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Producers.
     */
    cursor?: ProducerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Producers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Producers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Producers.
     */
    distinct?: ProducerScalarFieldEnum | ProducerScalarFieldEnum[]
  }

  /**
   * Producer findMany
   */
  export type ProducerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProducerInclude<ExtArgs> | null
    /**
     * Filter, which Producers to fetch.
     */
    where?: ProducerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Producers to fetch.
     */
    orderBy?: ProducerOrderByWithRelationInput | ProducerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Producers.
     */
    cursor?: ProducerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Producers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Producers.
     */
    skip?: number
    distinct?: ProducerScalarFieldEnum | ProducerScalarFieldEnum[]
  }

  /**
   * Producer create
   */
  export type ProducerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProducerInclude<ExtArgs> | null
    /**
     * The data needed to create a Producer.
     */
    data: XOR<ProducerCreateInput, ProducerUncheckedCreateInput>
  }

  /**
   * Producer createMany
   */
  export type ProducerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Producers.
     */
    data: ProducerCreateManyInput | ProducerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producer createManyAndReturn
   */
  export type ProducerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Producers.
     */
    data: ProducerCreateManyInput | ProducerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producer update
   */
  export type ProducerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProducerInclude<ExtArgs> | null
    /**
     * The data needed to update a Producer.
     */
    data: XOR<ProducerUpdateInput, ProducerUncheckedUpdateInput>
    /**
     * Choose, which Producer to update.
     */
    where: ProducerWhereUniqueInput
  }

  /**
   * Producer updateMany
   */
  export type ProducerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Producers.
     */
    data: XOR<ProducerUpdateManyMutationInput, ProducerUncheckedUpdateManyInput>
    /**
     * Filter which Producers to update
     */
    where?: ProducerWhereInput
  }

  /**
   * Producer upsert
   */
  export type ProducerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProducerInclude<ExtArgs> | null
    /**
     * The filter to search for the Producer to update in case it exists.
     */
    where: ProducerWhereUniqueInput
    /**
     * In case the Producer found by the `where` argument doesn't exist, create a new Producer with this data.
     */
    create: XOR<ProducerCreateInput, ProducerUncheckedCreateInput>
    /**
     * In case the Producer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProducerUpdateInput, ProducerUncheckedUpdateInput>
  }

  /**
   * Producer delete
   */
  export type ProducerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProducerInclude<ExtArgs> | null
    /**
     * Filter which Producer to delete.
     */
    where: ProducerWhereUniqueInput
  }

  /**
   * Producer deleteMany
   */
  export type ProducerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Producers to delete
     */
    where?: ProducerWhereInput
  }

  /**
   * Producer.farms
   */
  export type Producer$farmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    where?: FarmWhereInput
    orderBy?: FarmOrderByWithRelationInput | FarmOrderByWithRelationInput[]
    cursor?: FarmWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FarmScalarFieldEnum | FarmScalarFieldEnum[]
  }

  /**
   * Producer without action
   */
  export type ProducerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producer
     */
    select?: ProducerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProducerInclude<ExtArgs> | null
  }


  /**
   * Model Farm
   */

  export type AggregateFarm = {
    _count: FarmCountAggregateOutputType | null
    _avg: FarmAvgAggregateOutputType | null
    _sum: FarmSumAggregateOutputType | null
    _min: FarmMinAggregateOutputType | null
    _max: FarmMaxAggregateOutputType | null
  }

  export type FarmAvgAggregateOutputType = {
    id: number | null
    totalArea: number | null
    arableArea: number | null
    vegetationArea: number | null
  }

  export type FarmSumAggregateOutputType = {
    id: number | null
    totalArea: number | null
    arableArea: number | null
    vegetationArea: number | null
  }

  export type FarmMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    name: string | null
    city: string | null
    state: string | null
    totalArea: number | null
    arableArea: number | null
    vegetationArea: number | null
    isDeleted: boolean | null
    producerUUID: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FarmMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    name: string | null
    city: string | null
    state: string | null
    totalArea: number | null
    arableArea: number | null
    vegetationArea: number | null
    isDeleted: boolean | null
    producerUUID: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FarmCountAggregateOutputType = {
    id: number
    uuid: number
    name: number
    city: number
    state: number
    totalArea: number
    arableArea: number
    vegetationArea: number
    isDeleted: number
    producerUUID: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FarmAvgAggregateInputType = {
    id?: true
    totalArea?: true
    arableArea?: true
    vegetationArea?: true
  }

  export type FarmSumAggregateInputType = {
    id?: true
    totalArea?: true
    arableArea?: true
    vegetationArea?: true
  }

  export type FarmMinAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    city?: true
    state?: true
    totalArea?: true
    arableArea?: true
    vegetationArea?: true
    isDeleted?: true
    producerUUID?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FarmMaxAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    city?: true
    state?: true
    totalArea?: true
    arableArea?: true
    vegetationArea?: true
    isDeleted?: true
    producerUUID?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FarmCountAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    city?: true
    state?: true
    totalArea?: true
    arableArea?: true
    vegetationArea?: true
    isDeleted?: true
    producerUUID?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FarmAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Farm to aggregate.
     */
    where?: FarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farms to fetch.
     */
    orderBy?: FarmOrderByWithRelationInput | FarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Farms
    **/
    _count?: true | FarmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FarmAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FarmSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FarmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FarmMaxAggregateInputType
  }

  export type GetFarmAggregateType<T extends FarmAggregateArgs> = {
        [P in keyof T & keyof AggregateFarm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFarm[P]>
      : GetScalarType<T[P], AggregateFarm[P]>
  }




  export type FarmGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmWhereInput
    orderBy?: FarmOrderByWithAggregationInput | FarmOrderByWithAggregationInput[]
    by: FarmScalarFieldEnum[] | FarmScalarFieldEnum
    having?: FarmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FarmCountAggregateInputType | true
    _avg?: FarmAvgAggregateInputType
    _sum?: FarmSumAggregateInputType
    _min?: FarmMinAggregateInputType
    _max?: FarmMaxAggregateInputType
  }

  export type FarmGroupByOutputType = {
    id: number
    uuid: string
    name: string
    city: string
    state: string
    totalArea: number
    arableArea: number
    vegetationArea: number
    isDeleted: boolean
    producerUUID: string
    createdAt: Date
    updatedAt: Date
    _count: FarmCountAggregateOutputType | null
    _avg: FarmAvgAggregateOutputType | null
    _sum: FarmSumAggregateOutputType | null
    _min: FarmMinAggregateOutputType | null
    _max: FarmMaxAggregateOutputType | null
  }

  type GetFarmGroupByPayload<T extends FarmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FarmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FarmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FarmGroupByOutputType[P]>
            : GetScalarType<T[P], FarmGroupByOutputType[P]>
        }
      >
    >


  export type FarmSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    city?: boolean
    state?: boolean
    totalArea?: boolean
    arableArea?: boolean
    vegetationArea?: boolean
    isDeleted?: boolean
    producerUUID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    producer?: boolean | ProducerDefaultArgs<ExtArgs>
    farmCrops?: boolean | Farm$farmCropsArgs<ExtArgs>
    _count?: boolean | FarmCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farm"]>

  export type FarmSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    city?: boolean
    state?: boolean
    totalArea?: boolean
    arableArea?: boolean
    vegetationArea?: boolean
    isDeleted?: boolean
    producerUUID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    producer?: boolean | ProducerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farm"]>

  export type FarmSelectScalar = {
    id?: boolean
    uuid?: boolean
    name?: boolean
    city?: boolean
    state?: boolean
    totalArea?: boolean
    arableArea?: boolean
    vegetationArea?: boolean
    isDeleted?: boolean
    producerUUID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FarmInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producer?: boolean | ProducerDefaultArgs<ExtArgs>
    farmCrops?: boolean | Farm$farmCropsArgs<ExtArgs>
    _count?: boolean | FarmCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FarmIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    producer?: boolean | ProducerDefaultArgs<ExtArgs>
  }

  export type $FarmPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Farm"
    objects: {
      producer: Prisma.$ProducerPayload<ExtArgs>
      farmCrops: Prisma.$FarmCropPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      name: string
      city: string
      state: string
      totalArea: number
      arableArea: number
      vegetationArea: number
      isDeleted: boolean
      producerUUID: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["farm"]>
    composites: {}
  }

  type FarmGetPayload<S extends boolean | null | undefined | FarmDefaultArgs> = $Result.GetResult<Prisma.$FarmPayload, S>

  type FarmCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FarmFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FarmCountAggregateInputType | true
    }

  export interface FarmDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Farm'], meta: { name: 'Farm' } }
    /**
     * Find zero or one Farm that matches the filter.
     * @param {FarmFindUniqueArgs} args - Arguments to find a Farm
     * @example
     * // Get one Farm
     * const farm = await prisma.farm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FarmFindUniqueArgs>(args: SelectSubset<T, FarmFindUniqueArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Farm that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FarmFindUniqueOrThrowArgs} args - Arguments to find a Farm
     * @example
     * // Get one Farm
     * const farm = await prisma.farm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FarmFindUniqueOrThrowArgs>(args: SelectSubset<T, FarmFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Farm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmFindFirstArgs} args - Arguments to find a Farm
     * @example
     * // Get one Farm
     * const farm = await prisma.farm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FarmFindFirstArgs>(args?: SelectSubset<T, FarmFindFirstArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Farm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmFindFirstOrThrowArgs} args - Arguments to find a Farm
     * @example
     * // Get one Farm
     * const farm = await prisma.farm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FarmFindFirstOrThrowArgs>(args?: SelectSubset<T, FarmFindFirstOrThrowArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Farms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Farms
     * const farms = await prisma.farm.findMany()
     * 
     * // Get first 10 Farms
     * const farms = await prisma.farm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const farmWithIdOnly = await prisma.farm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FarmFindManyArgs>(args?: SelectSubset<T, FarmFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Farm.
     * @param {FarmCreateArgs} args - Arguments to create a Farm.
     * @example
     * // Create one Farm
     * const Farm = await prisma.farm.create({
     *   data: {
     *     // ... data to create a Farm
     *   }
     * })
     * 
     */
    create<T extends FarmCreateArgs>(args: SelectSubset<T, FarmCreateArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Farms.
     * @param {FarmCreateManyArgs} args - Arguments to create many Farms.
     * @example
     * // Create many Farms
     * const farm = await prisma.farm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FarmCreateManyArgs>(args?: SelectSubset<T, FarmCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Farms and returns the data saved in the database.
     * @param {FarmCreateManyAndReturnArgs} args - Arguments to create many Farms.
     * @example
     * // Create many Farms
     * const farm = await prisma.farm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Farms and only return the `id`
     * const farmWithIdOnly = await prisma.farm.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FarmCreateManyAndReturnArgs>(args?: SelectSubset<T, FarmCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Farm.
     * @param {FarmDeleteArgs} args - Arguments to delete one Farm.
     * @example
     * // Delete one Farm
     * const Farm = await prisma.farm.delete({
     *   where: {
     *     // ... filter to delete one Farm
     *   }
     * })
     * 
     */
    delete<T extends FarmDeleteArgs>(args: SelectSubset<T, FarmDeleteArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Farm.
     * @param {FarmUpdateArgs} args - Arguments to update one Farm.
     * @example
     * // Update one Farm
     * const farm = await prisma.farm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FarmUpdateArgs>(args: SelectSubset<T, FarmUpdateArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Farms.
     * @param {FarmDeleteManyArgs} args - Arguments to filter Farms to delete.
     * @example
     * // Delete a few Farms
     * const { count } = await prisma.farm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FarmDeleteManyArgs>(args?: SelectSubset<T, FarmDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Farms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Farms
     * const farm = await prisma.farm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FarmUpdateManyArgs>(args: SelectSubset<T, FarmUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Farm.
     * @param {FarmUpsertArgs} args - Arguments to update or create a Farm.
     * @example
     * // Update or create a Farm
     * const farm = await prisma.farm.upsert({
     *   create: {
     *     // ... data to create a Farm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Farm we want to update
     *   }
     * })
     */
    upsert<T extends FarmUpsertArgs>(args: SelectSubset<T, FarmUpsertArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Farms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmCountArgs} args - Arguments to filter Farms to count.
     * @example
     * // Count the number of Farms
     * const count = await prisma.farm.count({
     *   where: {
     *     // ... the filter for the Farms we want to count
     *   }
     * })
    **/
    count<T extends FarmCountArgs>(
      args?: Subset<T, FarmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FarmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Farm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FarmAggregateArgs>(args: Subset<T, FarmAggregateArgs>): Prisma.PrismaPromise<GetFarmAggregateType<T>>

    /**
     * Group by Farm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FarmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FarmGroupByArgs['orderBy'] }
        : { orderBy?: FarmGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FarmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFarmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Farm model
   */
  readonly fields: FarmFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Farm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FarmClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    producer<T extends ProducerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProducerDefaultArgs<ExtArgs>>): Prisma__ProducerClient<$Result.GetResult<Prisma.$ProducerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    farmCrops<T extends Farm$farmCropsArgs<ExtArgs> = {}>(args?: Subset<T, Farm$farmCropsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmCropPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Farm model
   */ 
  interface FarmFieldRefs {
    readonly id: FieldRef<"Farm", 'Int'>
    readonly uuid: FieldRef<"Farm", 'String'>
    readonly name: FieldRef<"Farm", 'String'>
    readonly city: FieldRef<"Farm", 'String'>
    readonly state: FieldRef<"Farm", 'String'>
    readonly totalArea: FieldRef<"Farm", 'Float'>
    readonly arableArea: FieldRef<"Farm", 'Float'>
    readonly vegetationArea: FieldRef<"Farm", 'Float'>
    readonly isDeleted: FieldRef<"Farm", 'Boolean'>
    readonly producerUUID: FieldRef<"Farm", 'String'>
    readonly createdAt: FieldRef<"Farm", 'DateTime'>
    readonly updatedAt: FieldRef<"Farm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Farm findUnique
   */
  export type FarmFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter, which Farm to fetch.
     */
    where: FarmWhereUniqueInput
  }

  /**
   * Farm findUniqueOrThrow
   */
  export type FarmFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter, which Farm to fetch.
     */
    where: FarmWhereUniqueInput
  }

  /**
   * Farm findFirst
   */
  export type FarmFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter, which Farm to fetch.
     */
    where?: FarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farms to fetch.
     */
    orderBy?: FarmOrderByWithRelationInput | FarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Farms.
     */
    cursor?: FarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Farms.
     */
    distinct?: FarmScalarFieldEnum | FarmScalarFieldEnum[]
  }

  /**
   * Farm findFirstOrThrow
   */
  export type FarmFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter, which Farm to fetch.
     */
    where?: FarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farms to fetch.
     */
    orderBy?: FarmOrderByWithRelationInput | FarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Farms.
     */
    cursor?: FarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Farms.
     */
    distinct?: FarmScalarFieldEnum | FarmScalarFieldEnum[]
  }

  /**
   * Farm findMany
   */
  export type FarmFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter, which Farms to fetch.
     */
    where?: FarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farms to fetch.
     */
    orderBy?: FarmOrderByWithRelationInput | FarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Farms.
     */
    cursor?: FarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farms.
     */
    skip?: number
    distinct?: FarmScalarFieldEnum | FarmScalarFieldEnum[]
  }

  /**
   * Farm create
   */
  export type FarmCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * The data needed to create a Farm.
     */
    data: XOR<FarmCreateInput, FarmUncheckedCreateInput>
  }

  /**
   * Farm createMany
   */
  export type FarmCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Farms.
     */
    data: FarmCreateManyInput | FarmCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Farm createManyAndReturn
   */
  export type FarmCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Farms.
     */
    data: FarmCreateManyInput | FarmCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Farm update
   */
  export type FarmUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * The data needed to update a Farm.
     */
    data: XOR<FarmUpdateInput, FarmUncheckedUpdateInput>
    /**
     * Choose, which Farm to update.
     */
    where: FarmWhereUniqueInput
  }

  /**
   * Farm updateMany
   */
  export type FarmUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Farms.
     */
    data: XOR<FarmUpdateManyMutationInput, FarmUncheckedUpdateManyInput>
    /**
     * Filter which Farms to update
     */
    where?: FarmWhereInput
  }

  /**
   * Farm upsert
   */
  export type FarmUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * The filter to search for the Farm to update in case it exists.
     */
    where: FarmWhereUniqueInput
    /**
     * In case the Farm found by the `where` argument doesn't exist, create a new Farm with this data.
     */
    create: XOR<FarmCreateInput, FarmUncheckedCreateInput>
    /**
     * In case the Farm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FarmUpdateInput, FarmUncheckedUpdateInput>
  }

  /**
   * Farm delete
   */
  export type FarmDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter which Farm to delete.
     */
    where: FarmWhereUniqueInput
  }

  /**
   * Farm deleteMany
   */
  export type FarmDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Farms to delete
     */
    where?: FarmWhereInput
  }

  /**
   * Farm.farmCrops
   */
  export type Farm$farmCropsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmCrop
     */
    select?: FarmCropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmCropInclude<ExtArgs> | null
    where?: FarmCropWhereInput
    orderBy?: FarmCropOrderByWithRelationInput | FarmCropOrderByWithRelationInput[]
    cursor?: FarmCropWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FarmCropScalarFieldEnum | FarmCropScalarFieldEnum[]
  }

  /**
   * Farm without action
   */
  export type FarmDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
  }


  /**
   * Model Crop
   */

  export type AggregateCrop = {
    _count: CropCountAggregateOutputType | null
    _avg: CropAvgAggregateOutputType | null
    _sum: CropSumAggregateOutputType | null
    _min: CropMinAggregateOutputType | null
    _max: CropMaxAggregateOutputType | null
  }

  export type CropAvgAggregateOutputType = {
    id: number | null
  }

  export type CropSumAggregateOutputType = {
    id: number | null
  }

  export type CropMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    name: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CropMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    name: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CropCountAggregateOutputType = {
    id: number
    uuid: number
    name: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CropAvgAggregateInputType = {
    id?: true
  }

  export type CropSumAggregateInputType = {
    id?: true
  }

  export type CropMinAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CropMaxAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CropCountAggregateInputType = {
    id?: true
    uuid?: true
    name?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CropAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Crop to aggregate.
     */
    where?: CropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crops to fetch.
     */
    orderBy?: CropOrderByWithRelationInput | CropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Crops
    **/
    _count?: true | CropCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CropAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CropSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CropMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CropMaxAggregateInputType
  }

  export type GetCropAggregateType<T extends CropAggregateArgs> = {
        [P in keyof T & keyof AggregateCrop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCrop[P]>
      : GetScalarType<T[P], AggregateCrop[P]>
  }




  export type CropGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CropWhereInput
    orderBy?: CropOrderByWithAggregationInput | CropOrderByWithAggregationInput[]
    by: CropScalarFieldEnum[] | CropScalarFieldEnum
    having?: CropScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CropCountAggregateInputType | true
    _avg?: CropAvgAggregateInputType
    _sum?: CropSumAggregateInputType
    _min?: CropMinAggregateInputType
    _max?: CropMaxAggregateInputType
  }

  export type CropGroupByOutputType = {
    id: number
    uuid: string
    name: string
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: CropCountAggregateOutputType | null
    _avg: CropAvgAggregateOutputType | null
    _sum: CropSumAggregateOutputType | null
    _min: CropMinAggregateOutputType | null
    _max: CropMaxAggregateOutputType | null
  }

  type GetCropGroupByPayload<T extends CropGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CropGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CropGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CropGroupByOutputType[P]>
            : GetScalarType<T[P], CropGroupByOutputType[P]>
        }
      >
    >


  export type CropSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    farmCrops?: boolean | Crop$farmCropsArgs<ExtArgs>
    _count?: boolean | CropCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["crop"]>

  export type CropSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    name?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["crop"]>

  export type CropSelectScalar = {
    id?: boolean
    uuid?: boolean
    name?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CropInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farmCrops?: boolean | Crop$farmCropsArgs<ExtArgs>
    _count?: boolean | CropCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CropIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CropPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Crop"
    objects: {
      farmCrops: Prisma.$FarmCropPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      name: string
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["crop"]>
    composites: {}
  }

  type CropGetPayload<S extends boolean | null | undefined | CropDefaultArgs> = $Result.GetResult<Prisma.$CropPayload, S>

  type CropCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CropFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CropCountAggregateInputType | true
    }

  export interface CropDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Crop'], meta: { name: 'Crop' } }
    /**
     * Find zero or one Crop that matches the filter.
     * @param {CropFindUniqueArgs} args - Arguments to find a Crop
     * @example
     * // Get one Crop
     * const crop = await prisma.crop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CropFindUniqueArgs>(args: SelectSubset<T, CropFindUniqueArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Crop that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CropFindUniqueOrThrowArgs} args - Arguments to find a Crop
     * @example
     * // Get one Crop
     * const crop = await prisma.crop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CropFindUniqueOrThrowArgs>(args: SelectSubset<T, CropFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Crop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropFindFirstArgs} args - Arguments to find a Crop
     * @example
     * // Get one Crop
     * const crop = await prisma.crop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CropFindFirstArgs>(args?: SelectSubset<T, CropFindFirstArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Crop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropFindFirstOrThrowArgs} args - Arguments to find a Crop
     * @example
     * // Get one Crop
     * const crop = await prisma.crop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CropFindFirstOrThrowArgs>(args?: SelectSubset<T, CropFindFirstOrThrowArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Crops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Crops
     * const crops = await prisma.crop.findMany()
     * 
     * // Get first 10 Crops
     * const crops = await prisma.crop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cropWithIdOnly = await prisma.crop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CropFindManyArgs>(args?: SelectSubset<T, CropFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Crop.
     * @param {CropCreateArgs} args - Arguments to create a Crop.
     * @example
     * // Create one Crop
     * const Crop = await prisma.crop.create({
     *   data: {
     *     // ... data to create a Crop
     *   }
     * })
     * 
     */
    create<T extends CropCreateArgs>(args: SelectSubset<T, CropCreateArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Crops.
     * @param {CropCreateManyArgs} args - Arguments to create many Crops.
     * @example
     * // Create many Crops
     * const crop = await prisma.crop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CropCreateManyArgs>(args?: SelectSubset<T, CropCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Crops and returns the data saved in the database.
     * @param {CropCreateManyAndReturnArgs} args - Arguments to create many Crops.
     * @example
     * // Create many Crops
     * const crop = await prisma.crop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Crops and only return the `id`
     * const cropWithIdOnly = await prisma.crop.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CropCreateManyAndReturnArgs>(args?: SelectSubset<T, CropCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Crop.
     * @param {CropDeleteArgs} args - Arguments to delete one Crop.
     * @example
     * // Delete one Crop
     * const Crop = await prisma.crop.delete({
     *   where: {
     *     // ... filter to delete one Crop
     *   }
     * })
     * 
     */
    delete<T extends CropDeleteArgs>(args: SelectSubset<T, CropDeleteArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Crop.
     * @param {CropUpdateArgs} args - Arguments to update one Crop.
     * @example
     * // Update one Crop
     * const crop = await prisma.crop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CropUpdateArgs>(args: SelectSubset<T, CropUpdateArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Crops.
     * @param {CropDeleteManyArgs} args - Arguments to filter Crops to delete.
     * @example
     * // Delete a few Crops
     * const { count } = await prisma.crop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CropDeleteManyArgs>(args?: SelectSubset<T, CropDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Crops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Crops
     * const crop = await prisma.crop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CropUpdateManyArgs>(args: SelectSubset<T, CropUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Crop.
     * @param {CropUpsertArgs} args - Arguments to update or create a Crop.
     * @example
     * // Update or create a Crop
     * const crop = await prisma.crop.upsert({
     *   create: {
     *     // ... data to create a Crop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Crop we want to update
     *   }
     * })
     */
    upsert<T extends CropUpsertArgs>(args: SelectSubset<T, CropUpsertArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Crops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropCountArgs} args - Arguments to filter Crops to count.
     * @example
     * // Count the number of Crops
     * const count = await prisma.crop.count({
     *   where: {
     *     // ... the filter for the Crops we want to count
     *   }
     * })
    **/
    count<T extends CropCountArgs>(
      args?: Subset<T, CropCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CropCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Crop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CropAggregateArgs>(args: Subset<T, CropAggregateArgs>): Prisma.PrismaPromise<GetCropAggregateType<T>>

    /**
     * Group by Crop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CropGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CropGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CropGroupByArgs['orderBy'] }
        : { orderBy?: CropGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CropGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCropGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Crop model
   */
  readonly fields: CropFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Crop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CropClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    farmCrops<T extends Crop$farmCropsArgs<ExtArgs> = {}>(args?: Subset<T, Crop$farmCropsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmCropPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Crop model
   */ 
  interface CropFieldRefs {
    readonly id: FieldRef<"Crop", 'Int'>
    readonly uuid: FieldRef<"Crop", 'String'>
    readonly name: FieldRef<"Crop", 'String'>
    readonly isDeleted: FieldRef<"Crop", 'Boolean'>
    readonly createdAt: FieldRef<"Crop", 'DateTime'>
    readonly updatedAt: FieldRef<"Crop", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Crop findUnique
   */
  export type CropFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * Filter, which Crop to fetch.
     */
    where: CropWhereUniqueInput
  }

  /**
   * Crop findUniqueOrThrow
   */
  export type CropFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * Filter, which Crop to fetch.
     */
    where: CropWhereUniqueInput
  }

  /**
   * Crop findFirst
   */
  export type CropFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * Filter, which Crop to fetch.
     */
    where?: CropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crops to fetch.
     */
    orderBy?: CropOrderByWithRelationInput | CropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Crops.
     */
    cursor?: CropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Crops.
     */
    distinct?: CropScalarFieldEnum | CropScalarFieldEnum[]
  }

  /**
   * Crop findFirstOrThrow
   */
  export type CropFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * Filter, which Crop to fetch.
     */
    where?: CropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crops to fetch.
     */
    orderBy?: CropOrderByWithRelationInput | CropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Crops.
     */
    cursor?: CropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Crops.
     */
    distinct?: CropScalarFieldEnum | CropScalarFieldEnum[]
  }

  /**
   * Crop findMany
   */
  export type CropFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * Filter, which Crops to fetch.
     */
    where?: CropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Crops to fetch.
     */
    orderBy?: CropOrderByWithRelationInput | CropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Crops.
     */
    cursor?: CropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Crops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Crops.
     */
    skip?: number
    distinct?: CropScalarFieldEnum | CropScalarFieldEnum[]
  }

  /**
   * Crop create
   */
  export type CropCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * The data needed to create a Crop.
     */
    data: XOR<CropCreateInput, CropUncheckedCreateInput>
  }

  /**
   * Crop createMany
   */
  export type CropCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Crops.
     */
    data: CropCreateManyInput | CropCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Crop createManyAndReturn
   */
  export type CropCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Crops.
     */
    data: CropCreateManyInput | CropCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Crop update
   */
  export type CropUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * The data needed to update a Crop.
     */
    data: XOR<CropUpdateInput, CropUncheckedUpdateInput>
    /**
     * Choose, which Crop to update.
     */
    where: CropWhereUniqueInput
  }

  /**
   * Crop updateMany
   */
  export type CropUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Crops.
     */
    data: XOR<CropUpdateManyMutationInput, CropUncheckedUpdateManyInput>
    /**
     * Filter which Crops to update
     */
    where?: CropWhereInput
  }

  /**
   * Crop upsert
   */
  export type CropUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * The filter to search for the Crop to update in case it exists.
     */
    where: CropWhereUniqueInput
    /**
     * In case the Crop found by the `where` argument doesn't exist, create a new Crop with this data.
     */
    create: XOR<CropCreateInput, CropUncheckedCreateInput>
    /**
     * In case the Crop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CropUpdateInput, CropUncheckedUpdateInput>
  }

  /**
   * Crop delete
   */
  export type CropDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
    /**
     * Filter which Crop to delete.
     */
    where: CropWhereUniqueInput
  }

  /**
   * Crop deleteMany
   */
  export type CropDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Crops to delete
     */
    where?: CropWhereInput
  }

  /**
   * Crop.farmCrops
   */
  export type Crop$farmCropsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmCrop
     */
    select?: FarmCropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmCropInclude<ExtArgs> | null
    where?: FarmCropWhereInput
    orderBy?: FarmCropOrderByWithRelationInput | FarmCropOrderByWithRelationInput[]
    cursor?: FarmCropWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FarmCropScalarFieldEnum | FarmCropScalarFieldEnum[]
  }

  /**
   * Crop without action
   */
  export type CropDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Crop
     */
    select?: CropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CropInclude<ExtArgs> | null
  }


  /**
   * Model FarmCrop
   */

  export type AggregateFarmCrop = {
    _count: FarmCropCountAggregateOutputType | null
    _avg: FarmCropAvgAggregateOutputType | null
    _sum: FarmCropSumAggregateOutputType | null
    _min: FarmCropMinAggregateOutputType | null
    _max: FarmCropMaxAggregateOutputType | null
  }

  export type FarmCropAvgAggregateOutputType = {
    id: number | null
  }

  export type FarmCropSumAggregateOutputType = {
    id: number | null
  }

  export type FarmCropMinAggregateOutputType = {
    id: number | null
    farmUuid: string | null
    cropUuid: string | null
    isDeleted: boolean | null
  }

  export type FarmCropMaxAggregateOutputType = {
    id: number | null
    farmUuid: string | null
    cropUuid: string | null
    isDeleted: boolean | null
  }

  export type FarmCropCountAggregateOutputType = {
    id: number
    farmUuid: number
    cropUuid: number
    isDeleted: number
    _all: number
  }


  export type FarmCropAvgAggregateInputType = {
    id?: true
  }

  export type FarmCropSumAggregateInputType = {
    id?: true
  }

  export type FarmCropMinAggregateInputType = {
    id?: true
    farmUuid?: true
    cropUuid?: true
    isDeleted?: true
  }

  export type FarmCropMaxAggregateInputType = {
    id?: true
    farmUuid?: true
    cropUuid?: true
    isDeleted?: true
  }

  export type FarmCropCountAggregateInputType = {
    id?: true
    farmUuid?: true
    cropUuid?: true
    isDeleted?: true
    _all?: true
  }

  export type FarmCropAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FarmCrop to aggregate.
     */
    where?: FarmCropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FarmCrops to fetch.
     */
    orderBy?: FarmCropOrderByWithRelationInput | FarmCropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FarmCropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FarmCrops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FarmCrops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FarmCrops
    **/
    _count?: true | FarmCropCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FarmCropAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FarmCropSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FarmCropMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FarmCropMaxAggregateInputType
  }

  export type GetFarmCropAggregateType<T extends FarmCropAggregateArgs> = {
        [P in keyof T & keyof AggregateFarmCrop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFarmCrop[P]>
      : GetScalarType<T[P], AggregateFarmCrop[P]>
  }




  export type FarmCropGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmCropWhereInput
    orderBy?: FarmCropOrderByWithAggregationInput | FarmCropOrderByWithAggregationInput[]
    by: FarmCropScalarFieldEnum[] | FarmCropScalarFieldEnum
    having?: FarmCropScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FarmCropCountAggregateInputType | true
    _avg?: FarmCropAvgAggregateInputType
    _sum?: FarmCropSumAggregateInputType
    _min?: FarmCropMinAggregateInputType
    _max?: FarmCropMaxAggregateInputType
  }

  export type FarmCropGroupByOutputType = {
    id: number
    farmUuid: string
    cropUuid: string
    isDeleted: boolean
    _count: FarmCropCountAggregateOutputType | null
    _avg: FarmCropAvgAggregateOutputType | null
    _sum: FarmCropSumAggregateOutputType | null
    _min: FarmCropMinAggregateOutputType | null
    _max: FarmCropMaxAggregateOutputType | null
  }

  type GetFarmCropGroupByPayload<T extends FarmCropGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FarmCropGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FarmCropGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FarmCropGroupByOutputType[P]>
            : GetScalarType<T[P], FarmCropGroupByOutputType[P]>
        }
      >
    >


  export type FarmCropSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    farmUuid?: boolean
    cropUuid?: boolean
    isDeleted?: boolean
    farm?: boolean | FarmDefaultArgs<ExtArgs>
    crop?: boolean | CropDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farmCrop"]>

  export type FarmCropSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    farmUuid?: boolean
    cropUuid?: boolean
    isDeleted?: boolean
    farm?: boolean | FarmDefaultArgs<ExtArgs>
    crop?: boolean | CropDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farmCrop"]>

  export type FarmCropSelectScalar = {
    id?: boolean
    farmUuid?: boolean
    cropUuid?: boolean
    isDeleted?: boolean
  }

  export type FarmCropInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farm?: boolean | FarmDefaultArgs<ExtArgs>
    crop?: boolean | CropDefaultArgs<ExtArgs>
  }
  export type FarmCropIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farm?: boolean | FarmDefaultArgs<ExtArgs>
    crop?: boolean | CropDefaultArgs<ExtArgs>
  }

  export type $FarmCropPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FarmCrop"
    objects: {
      farm: Prisma.$FarmPayload<ExtArgs>
      crop: Prisma.$CropPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      farmUuid: string
      cropUuid: string
      isDeleted: boolean
    }, ExtArgs["result"]["farmCrop"]>
    composites: {}
  }

  type FarmCropGetPayload<S extends boolean | null | undefined | FarmCropDefaultArgs> = $Result.GetResult<Prisma.$FarmCropPayload, S>

  type FarmCropCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FarmCropFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FarmCropCountAggregateInputType | true
    }

  export interface FarmCropDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FarmCrop'], meta: { name: 'FarmCrop' } }
    /**
     * Find zero or one FarmCrop that matches the filter.
     * @param {FarmCropFindUniqueArgs} args - Arguments to find a FarmCrop
     * @example
     * // Get one FarmCrop
     * const farmCrop = await prisma.farmCrop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FarmCropFindUniqueArgs>(args: SelectSubset<T, FarmCropFindUniqueArgs<ExtArgs>>): Prisma__FarmCropClient<$Result.GetResult<Prisma.$FarmCropPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FarmCrop that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FarmCropFindUniqueOrThrowArgs} args - Arguments to find a FarmCrop
     * @example
     * // Get one FarmCrop
     * const farmCrop = await prisma.farmCrop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FarmCropFindUniqueOrThrowArgs>(args: SelectSubset<T, FarmCropFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FarmCropClient<$Result.GetResult<Prisma.$FarmCropPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FarmCrop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmCropFindFirstArgs} args - Arguments to find a FarmCrop
     * @example
     * // Get one FarmCrop
     * const farmCrop = await prisma.farmCrop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FarmCropFindFirstArgs>(args?: SelectSubset<T, FarmCropFindFirstArgs<ExtArgs>>): Prisma__FarmCropClient<$Result.GetResult<Prisma.$FarmCropPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FarmCrop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmCropFindFirstOrThrowArgs} args - Arguments to find a FarmCrop
     * @example
     * // Get one FarmCrop
     * const farmCrop = await prisma.farmCrop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FarmCropFindFirstOrThrowArgs>(args?: SelectSubset<T, FarmCropFindFirstOrThrowArgs<ExtArgs>>): Prisma__FarmCropClient<$Result.GetResult<Prisma.$FarmCropPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FarmCrops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmCropFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FarmCrops
     * const farmCrops = await prisma.farmCrop.findMany()
     * 
     * // Get first 10 FarmCrops
     * const farmCrops = await prisma.farmCrop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const farmCropWithIdOnly = await prisma.farmCrop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FarmCropFindManyArgs>(args?: SelectSubset<T, FarmCropFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmCropPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FarmCrop.
     * @param {FarmCropCreateArgs} args - Arguments to create a FarmCrop.
     * @example
     * // Create one FarmCrop
     * const FarmCrop = await prisma.farmCrop.create({
     *   data: {
     *     // ... data to create a FarmCrop
     *   }
     * })
     * 
     */
    create<T extends FarmCropCreateArgs>(args: SelectSubset<T, FarmCropCreateArgs<ExtArgs>>): Prisma__FarmCropClient<$Result.GetResult<Prisma.$FarmCropPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FarmCrops.
     * @param {FarmCropCreateManyArgs} args - Arguments to create many FarmCrops.
     * @example
     * // Create many FarmCrops
     * const farmCrop = await prisma.farmCrop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FarmCropCreateManyArgs>(args?: SelectSubset<T, FarmCropCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FarmCrops and returns the data saved in the database.
     * @param {FarmCropCreateManyAndReturnArgs} args - Arguments to create many FarmCrops.
     * @example
     * // Create many FarmCrops
     * const farmCrop = await prisma.farmCrop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FarmCrops and only return the `id`
     * const farmCropWithIdOnly = await prisma.farmCrop.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FarmCropCreateManyAndReturnArgs>(args?: SelectSubset<T, FarmCropCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmCropPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FarmCrop.
     * @param {FarmCropDeleteArgs} args - Arguments to delete one FarmCrop.
     * @example
     * // Delete one FarmCrop
     * const FarmCrop = await prisma.farmCrop.delete({
     *   where: {
     *     // ... filter to delete one FarmCrop
     *   }
     * })
     * 
     */
    delete<T extends FarmCropDeleteArgs>(args: SelectSubset<T, FarmCropDeleteArgs<ExtArgs>>): Prisma__FarmCropClient<$Result.GetResult<Prisma.$FarmCropPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FarmCrop.
     * @param {FarmCropUpdateArgs} args - Arguments to update one FarmCrop.
     * @example
     * // Update one FarmCrop
     * const farmCrop = await prisma.farmCrop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FarmCropUpdateArgs>(args: SelectSubset<T, FarmCropUpdateArgs<ExtArgs>>): Prisma__FarmCropClient<$Result.GetResult<Prisma.$FarmCropPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FarmCrops.
     * @param {FarmCropDeleteManyArgs} args - Arguments to filter FarmCrops to delete.
     * @example
     * // Delete a few FarmCrops
     * const { count } = await prisma.farmCrop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FarmCropDeleteManyArgs>(args?: SelectSubset<T, FarmCropDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FarmCrops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmCropUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FarmCrops
     * const farmCrop = await prisma.farmCrop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FarmCropUpdateManyArgs>(args: SelectSubset<T, FarmCropUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FarmCrop.
     * @param {FarmCropUpsertArgs} args - Arguments to update or create a FarmCrop.
     * @example
     * // Update or create a FarmCrop
     * const farmCrop = await prisma.farmCrop.upsert({
     *   create: {
     *     // ... data to create a FarmCrop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FarmCrop we want to update
     *   }
     * })
     */
    upsert<T extends FarmCropUpsertArgs>(args: SelectSubset<T, FarmCropUpsertArgs<ExtArgs>>): Prisma__FarmCropClient<$Result.GetResult<Prisma.$FarmCropPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FarmCrops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmCropCountArgs} args - Arguments to filter FarmCrops to count.
     * @example
     * // Count the number of FarmCrops
     * const count = await prisma.farmCrop.count({
     *   where: {
     *     // ... the filter for the FarmCrops we want to count
     *   }
     * })
    **/
    count<T extends FarmCropCountArgs>(
      args?: Subset<T, FarmCropCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FarmCropCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FarmCrop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmCropAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FarmCropAggregateArgs>(args: Subset<T, FarmCropAggregateArgs>): Prisma.PrismaPromise<GetFarmCropAggregateType<T>>

    /**
     * Group by FarmCrop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmCropGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FarmCropGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FarmCropGroupByArgs['orderBy'] }
        : { orderBy?: FarmCropGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FarmCropGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFarmCropGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FarmCrop model
   */
  readonly fields: FarmCropFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FarmCrop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FarmCropClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    farm<T extends FarmDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FarmDefaultArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    crop<T extends CropDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CropDefaultArgs<ExtArgs>>): Prisma__CropClient<$Result.GetResult<Prisma.$CropPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FarmCrop model
   */ 
  interface FarmCropFieldRefs {
    readonly id: FieldRef<"FarmCrop", 'Int'>
    readonly farmUuid: FieldRef<"FarmCrop", 'String'>
    readonly cropUuid: FieldRef<"FarmCrop", 'String'>
    readonly isDeleted: FieldRef<"FarmCrop", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * FarmCrop findUnique
   */
  export type FarmCropFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmCrop
     */
    select?: FarmCropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmCropInclude<ExtArgs> | null
    /**
     * Filter, which FarmCrop to fetch.
     */
    where: FarmCropWhereUniqueInput
  }

  /**
   * FarmCrop findUniqueOrThrow
   */
  export type FarmCropFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmCrop
     */
    select?: FarmCropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmCropInclude<ExtArgs> | null
    /**
     * Filter, which FarmCrop to fetch.
     */
    where: FarmCropWhereUniqueInput
  }

  /**
   * FarmCrop findFirst
   */
  export type FarmCropFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmCrop
     */
    select?: FarmCropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmCropInclude<ExtArgs> | null
    /**
     * Filter, which FarmCrop to fetch.
     */
    where?: FarmCropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FarmCrops to fetch.
     */
    orderBy?: FarmCropOrderByWithRelationInput | FarmCropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FarmCrops.
     */
    cursor?: FarmCropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FarmCrops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FarmCrops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FarmCrops.
     */
    distinct?: FarmCropScalarFieldEnum | FarmCropScalarFieldEnum[]
  }

  /**
   * FarmCrop findFirstOrThrow
   */
  export type FarmCropFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmCrop
     */
    select?: FarmCropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmCropInclude<ExtArgs> | null
    /**
     * Filter, which FarmCrop to fetch.
     */
    where?: FarmCropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FarmCrops to fetch.
     */
    orderBy?: FarmCropOrderByWithRelationInput | FarmCropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FarmCrops.
     */
    cursor?: FarmCropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FarmCrops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FarmCrops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FarmCrops.
     */
    distinct?: FarmCropScalarFieldEnum | FarmCropScalarFieldEnum[]
  }

  /**
   * FarmCrop findMany
   */
  export type FarmCropFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmCrop
     */
    select?: FarmCropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmCropInclude<ExtArgs> | null
    /**
     * Filter, which FarmCrops to fetch.
     */
    where?: FarmCropWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FarmCrops to fetch.
     */
    orderBy?: FarmCropOrderByWithRelationInput | FarmCropOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FarmCrops.
     */
    cursor?: FarmCropWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FarmCrops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FarmCrops.
     */
    skip?: number
    distinct?: FarmCropScalarFieldEnum | FarmCropScalarFieldEnum[]
  }

  /**
   * FarmCrop create
   */
  export type FarmCropCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmCrop
     */
    select?: FarmCropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmCropInclude<ExtArgs> | null
    /**
     * The data needed to create a FarmCrop.
     */
    data: XOR<FarmCropCreateInput, FarmCropUncheckedCreateInput>
  }

  /**
   * FarmCrop createMany
   */
  export type FarmCropCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FarmCrops.
     */
    data: FarmCropCreateManyInput | FarmCropCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FarmCrop createManyAndReturn
   */
  export type FarmCropCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmCrop
     */
    select?: FarmCropSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FarmCrops.
     */
    data: FarmCropCreateManyInput | FarmCropCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmCropIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FarmCrop update
   */
  export type FarmCropUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmCrop
     */
    select?: FarmCropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmCropInclude<ExtArgs> | null
    /**
     * The data needed to update a FarmCrop.
     */
    data: XOR<FarmCropUpdateInput, FarmCropUncheckedUpdateInput>
    /**
     * Choose, which FarmCrop to update.
     */
    where: FarmCropWhereUniqueInput
  }

  /**
   * FarmCrop updateMany
   */
  export type FarmCropUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FarmCrops.
     */
    data: XOR<FarmCropUpdateManyMutationInput, FarmCropUncheckedUpdateManyInput>
    /**
     * Filter which FarmCrops to update
     */
    where?: FarmCropWhereInput
  }

  /**
   * FarmCrop upsert
   */
  export type FarmCropUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmCrop
     */
    select?: FarmCropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmCropInclude<ExtArgs> | null
    /**
     * The filter to search for the FarmCrop to update in case it exists.
     */
    where: FarmCropWhereUniqueInput
    /**
     * In case the FarmCrop found by the `where` argument doesn't exist, create a new FarmCrop with this data.
     */
    create: XOR<FarmCropCreateInput, FarmCropUncheckedCreateInput>
    /**
     * In case the FarmCrop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FarmCropUpdateInput, FarmCropUncheckedUpdateInput>
  }

  /**
   * FarmCrop delete
   */
  export type FarmCropDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmCrop
     */
    select?: FarmCropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmCropInclude<ExtArgs> | null
    /**
     * Filter which FarmCrop to delete.
     */
    where: FarmCropWhereUniqueInput
  }

  /**
   * FarmCrop deleteMany
   */
  export type FarmCropDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FarmCrops to delete
     */
    where?: FarmCropWhereInput
  }

  /**
   * FarmCrop without action
   */
  export type FarmCropDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmCrop
     */
    select?: FarmCropSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmCropInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProducerScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    cpf: 'cpf',
    cnpj: 'cnpj',
    name: 'name',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProducerScalarFieldEnum = (typeof ProducerScalarFieldEnum)[keyof typeof ProducerScalarFieldEnum]


  export const FarmScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    name: 'name',
    city: 'city',
    state: 'state',
    totalArea: 'totalArea',
    arableArea: 'arableArea',
    vegetationArea: 'vegetationArea',
    isDeleted: 'isDeleted',
    producerUUID: 'producerUUID',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FarmScalarFieldEnum = (typeof FarmScalarFieldEnum)[keyof typeof FarmScalarFieldEnum]


  export const CropScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    name: 'name',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CropScalarFieldEnum = (typeof CropScalarFieldEnum)[keyof typeof CropScalarFieldEnum]


  export const FarmCropScalarFieldEnum: {
    id: 'id',
    farmUuid: 'farmUuid',
    cropUuid: 'cropUuid',
    isDeleted: 'isDeleted'
  };

  export type FarmCropScalarFieldEnum = (typeof FarmCropScalarFieldEnum)[keyof typeof FarmCropScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProducerWhereInput = {
    AND?: ProducerWhereInput | ProducerWhereInput[]
    OR?: ProducerWhereInput[]
    NOT?: ProducerWhereInput | ProducerWhereInput[]
    id?: IntFilter<"Producer"> | number
    uuid?: StringFilter<"Producer"> | string
    cpf?: StringNullableFilter<"Producer"> | string | null
    cnpj?: StringNullableFilter<"Producer"> | string | null
    name?: StringFilter<"Producer"> | string
    isDeleted?: BoolFilter<"Producer"> | boolean
    createdAt?: DateTimeFilter<"Producer"> | Date | string
    updatedAt?: DateTimeFilter<"Producer"> | Date | string
    farms?: FarmListRelationFilter
  }

  export type ProducerOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    cpf?: SortOrderInput | SortOrder
    cnpj?: SortOrderInput | SortOrder
    name?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    farms?: FarmOrderByRelationAggregateInput
  }

  export type ProducerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    AND?: ProducerWhereInput | ProducerWhereInput[]
    OR?: ProducerWhereInput[]
    NOT?: ProducerWhereInput | ProducerWhereInput[]
    cpf?: StringNullableFilter<"Producer"> | string | null
    cnpj?: StringNullableFilter<"Producer"> | string | null
    name?: StringFilter<"Producer"> | string
    isDeleted?: BoolFilter<"Producer"> | boolean
    createdAt?: DateTimeFilter<"Producer"> | Date | string
    updatedAt?: DateTimeFilter<"Producer"> | Date | string
    farms?: FarmListRelationFilter
  }, "id" | "uuid">

  export type ProducerOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    cpf?: SortOrderInput | SortOrder
    cnpj?: SortOrderInput | SortOrder
    name?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProducerCountOrderByAggregateInput
    _avg?: ProducerAvgOrderByAggregateInput
    _max?: ProducerMaxOrderByAggregateInput
    _min?: ProducerMinOrderByAggregateInput
    _sum?: ProducerSumOrderByAggregateInput
  }

  export type ProducerScalarWhereWithAggregatesInput = {
    AND?: ProducerScalarWhereWithAggregatesInput | ProducerScalarWhereWithAggregatesInput[]
    OR?: ProducerScalarWhereWithAggregatesInput[]
    NOT?: ProducerScalarWhereWithAggregatesInput | ProducerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Producer"> | number
    uuid?: StringWithAggregatesFilter<"Producer"> | string
    cpf?: StringNullableWithAggregatesFilter<"Producer"> | string | null
    cnpj?: StringNullableWithAggregatesFilter<"Producer"> | string | null
    name?: StringWithAggregatesFilter<"Producer"> | string
    isDeleted?: BoolWithAggregatesFilter<"Producer"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Producer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Producer"> | Date | string
  }

  export type FarmWhereInput = {
    AND?: FarmWhereInput | FarmWhereInput[]
    OR?: FarmWhereInput[]
    NOT?: FarmWhereInput | FarmWhereInput[]
    id?: IntFilter<"Farm"> | number
    uuid?: StringFilter<"Farm"> | string
    name?: StringFilter<"Farm"> | string
    city?: StringFilter<"Farm"> | string
    state?: StringFilter<"Farm"> | string
    totalArea?: FloatFilter<"Farm"> | number
    arableArea?: FloatFilter<"Farm"> | number
    vegetationArea?: FloatFilter<"Farm"> | number
    isDeleted?: BoolFilter<"Farm"> | boolean
    producerUUID?: StringFilter<"Farm"> | string
    createdAt?: DateTimeFilter<"Farm"> | Date | string
    updatedAt?: DateTimeFilter<"Farm"> | Date | string
    producer?: XOR<ProducerRelationFilter, ProducerWhereInput>
    farmCrops?: FarmCropListRelationFilter
  }

  export type FarmOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    city?: SortOrder
    state?: SortOrder
    totalArea?: SortOrder
    arableArea?: SortOrder
    vegetationArea?: SortOrder
    isDeleted?: SortOrder
    producerUUID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    producer?: ProducerOrderByWithRelationInput
    farmCrops?: FarmCropOrderByRelationAggregateInput
  }

  export type FarmWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    AND?: FarmWhereInput | FarmWhereInput[]
    OR?: FarmWhereInput[]
    NOT?: FarmWhereInput | FarmWhereInput[]
    name?: StringFilter<"Farm"> | string
    city?: StringFilter<"Farm"> | string
    state?: StringFilter<"Farm"> | string
    totalArea?: FloatFilter<"Farm"> | number
    arableArea?: FloatFilter<"Farm"> | number
    vegetationArea?: FloatFilter<"Farm"> | number
    isDeleted?: BoolFilter<"Farm"> | boolean
    producerUUID?: StringFilter<"Farm"> | string
    createdAt?: DateTimeFilter<"Farm"> | Date | string
    updatedAt?: DateTimeFilter<"Farm"> | Date | string
    producer?: XOR<ProducerRelationFilter, ProducerWhereInput>
    farmCrops?: FarmCropListRelationFilter
  }, "id" | "uuid">

  export type FarmOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    city?: SortOrder
    state?: SortOrder
    totalArea?: SortOrder
    arableArea?: SortOrder
    vegetationArea?: SortOrder
    isDeleted?: SortOrder
    producerUUID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FarmCountOrderByAggregateInput
    _avg?: FarmAvgOrderByAggregateInput
    _max?: FarmMaxOrderByAggregateInput
    _min?: FarmMinOrderByAggregateInput
    _sum?: FarmSumOrderByAggregateInput
  }

  export type FarmScalarWhereWithAggregatesInput = {
    AND?: FarmScalarWhereWithAggregatesInput | FarmScalarWhereWithAggregatesInput[]
    OR?: FarmScalarWhereWithAggregatesInput[]
    NOT?: FarmScalarWhereWithAggregatesInput | FarmScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Farm"> | number
    uuid?: StringWithAggregatesFilter<"Farm"> | string
    name?: StringWithAggregatesFilter<"Farm"> | string
    city?: StringWithAggregatesFilter<"Farm"> | string
    state?: StringWithAggregatesFilter<"Farm"> | string
    totalArea?: FloatWithAggregatesFilter<"Farm"> | number
    arableArea?: FloatWithAggregatesFilter<"Farm"> | number
    vegetationArea?: FloatWithAggregatesFilter<"Farm"> | number
    isDeleted?: BoolWithAggregatesFilter<"Farm"> | boolean
    producerUUID?: StringWithAggregatesFilter<"Farm"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Farm"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Farm"> | Date | string
  }

  export type CropWhereInput = {
    AND?: CropWhereInput | CropWhereInput[]
    OR?: CropWhereInput[]
    NOT?: CropWhereInput | CropWhereInput[]
    id?: IntFilter<"Crop"> | number
    uuid?: StringFilter<"Crop"> | string
    name?: StringFilter<"Crop"> | string
    isDeleted?: BoolFilter<"Crop"> | boolean
    createdAt?: DateTimeFilter<"Crop"> | Date | string
    updatedAt?: DateTimeFilter<"Crop"> | Date | string
    farmCrops?: FarmCropListRelationFilter
  }

  export type CropOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    farmCrops?: FarmCropOrderByRelationAggregateInput
  }

  export type CropWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    name?: string
    AND?: CropWhereInput | CropWhereInput[]
    OR?: CropWhereInput[]
    NOT?: CropWhereInput | CropWhereInput[]
    isDeleted?: BoolFilter<"Crop"> | boolean
    createdAt?: DateTimeFilter<"Crop"> | Date | string
    updatedAt?: DateTimeFilter<"Crop"> | Date | string
    farmCrops?: FarmCropListRelationFilter
  }, "id" | "uuid" | "name">

  export type CropOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CropCountOrderByAggregateInput
    _avg?: CropAvgOrderByAggregateInput
    _max?: CropMaxOrderByAggregateInput
    _min?: CropMinOrderByAggregateInput
    _sum?: CropSumOrderByAggregateInput
  }

  export type CropScalarWhereWithAggregatesInput = {
    AND?: CropScalarWhereWithAggregatesInput | CropScalarWhereWithAggregatesInput[]
    OR?: CropScalarWhereWithAggregatesInput[]
    NOT?: CropScalarWhereWithAggregatesInput | CropScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Crop"> | number
    uuid?: StringWithAggregatesFilter<"Crop"> | string
    name?: StringWithAggregatesFilter<"Crop"> | string
    isDeleted?: BoolWithAggregatesFilter<"Crop"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Crop"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Crop"> | Date | string
  }

  export type FarmCropWhereInput = {
    AND?: FarmCropWhereInput | FarmCropWhereInput[]
    OR?: FarmCropWhereInput[]
    NOT?: FarmCropWhereInput | FarmCropWhereInput[]
    id?: IntFilter<"FarmCrop"> | number
    farmUuid?: StringFilter<"FarmCrop"> | string
    cropUuid?: StringFilter<"FarmCrop"> | string
    isDeleted?: BoolFilter<"FarmCrop"> | boolean
    farm?: XOR<FarmRelationFilter, FarmWhereInput>
    crop?: XOR<CropRelationFilter, CropWhereInput>
  }

  export type FarmCropOrderByWithRelationInput = {
    id?: SortOrder
    farmUuid?: SortOrder
    cropUuid?: SortOrder
    isDeleted?: SortOrder
    farm?: FarmOrderByWithRelationInput
    crop?: CropOrderByWithRelationInput
  }

  export type FarmCropWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FarmCropWhereInput | FarmCropWhereInput[]
    OR?: FarmCropWhereInput[]
    NOT?: FarmCropWhereInput | FarmCropWhereInput[]
    farmUuid?: StringFilter<"FarmCrop"> | string
    cropUuid?: StringFilter<"FarmCrop"> | string
    isDeleted?: BoolFilter<"FarmCrop"> | boolean
    farm?: XOR<FarmRelationFilter, FarmWhereInput>
    crop?: XOR<CropRelationFilter, CropWhereInput>
  }, "id">

  export type FarmCropOrderByWithAggregationInput = {
    id?: SortOrder
    farmUuid?: SortOrder
    cropUuid?: SortOrder
    isDeleted?: SortOrder
    _count?: FarmCropCountOrderByAggregateInput
    _avg?: FarmCropAvgOrderByAggregateInput
    _max?: FarmCropMaxOrderByAggregateInput
    _min?: FarmCropMinOrderByAggregateInput
    _sum?: FarmCropSumOrderByAggregateInput
  }

  export type FarmCropScalarWhereWithAggregatesInput = {
    AND?: FarmCropScalarWhereWithAggregatesInput | FarmCropScalarWhereWithAggregatesInput[]
    OR?: FarmCropScalarWhereWithAggregatesInput[]
    NOT?: FarmCropScalarWhereWithAggregatesInput | FarmCropScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FarmCrop"> | number
    farmUuid?: StringWithAggregatesFilter<"FarmCrop"> | string
    cropUuid?: StringWithAggregatesFilter<"FarmCrop"> | string
    isDeleted?: BoolWithAggregatesFilter<"FarmCrop"> | boolean
  }

  export type ProducerCreateInput = {
    uuid: string
    cpf?: string | null
    cnpj?: string | null
    name: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    farms?: FarmCreateNestedManyWithoutProducerInput
  }

  export type ProducerUncheckedCreateInput = {
    id?: number
    uuid: string
    cpf?: string | null
    cnpj?: string | null
    name: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    farms?: FarmUncheckedCreateNestedManyWithoutProducerInput
  }

  export type ProducerUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farms?: FarmUpdateManyWithoutProducerNestedInput
  }

  export type ProducerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farms?: FarmUncheckedUpdateManyWithoutProducerNestedInput
  }

  export type ProducerCreateManyInput = {
    id?: number
    uuid: string
    cpf?: string | null
    cnpj?: string | null
    name: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProducerUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProducerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmCreateInput = {
    uuid: string
    name: string
    city: string
    state: string
    totalArea: number
    arableArea: number
    vegetationArea: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    producer: ProducerCreateNestedOneWithoutFarmsInput
    farmCrops?: FarmCropCreateNestedManyWithoutFarmInput
  }

  export type FarmUncheckedCreateInput = {
    id?: number
    uuid: string
    name: string
    city: string
    state: string
    totalArea: number
    arableArea: number
    vegetationArea: number
    isDeleted?: boolean
    producerUUID: string
    createdAt?: Date | string
    updatedAt?: Date | string
    farmCrops?: FarmCropUncheckedCreateNestedManyWithoutFarmInput
  }

  export type FarmUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    totalArea?: FloatFieldUpdateOperationsInput | number
    arableArea?: FloatFieldUpdateOperationsInput | number
    vegetationArea?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producer?: ProducerUpdateOneRequiredWithoutFarmsNestedInput
    farmCrops?: FarmCropUpdateManyWithoutFarmNestedInput
  }

  export type FarmUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    totalArea?: FloatFieldUpdateOperationsInput | number
    arableArea?: FloatFieldUpdateOperationsInput | number
    vegetationArea?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    producerUUID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmCrops?: FarmCropUncheckedUpdateManyWithoutFarmNestedInput
  }

  export type FarmCreateManyInput = {
    id?: number
    uuid: string
    name: string
    city: string
    state: string
    totalArea: number
    arableArea: number
    vegetationArea: number
    isDeleted?: boolean
    producerUUID: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FarmUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    totalArea?: FloatFieldUpdateOperationsInput | number
    arableArea?: FloatFieldUpdateOperationsInput | number
    vegetationArea?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    totalArea?: FloatFieldUpdateOperationsInput | number
    arableArea?: FloatFieldUpdateOperationsInput | number
    vegetationArea?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    producerUUID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CropCreateInput = {
    uuid: string
    name: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    farmCrops?: FarmCropCreateNestedManyWithoutCropInput
  }

  export type CropUncheckedCreateInput = {
    id?: number
    uuid: string
    name: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    farmCrops?: FarmCropUncheckedCreateNestedManyWithoutCropInput
  }

  export type CropUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmCrops?: FarmCropUpdateManyWithoutCropNestedInput
  }

  export type CropUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmCrops?: FarmCropUncheckedUpdateManyWithoutCropNestedInput
  }

  export type CropCreateManyInput = {
    id?: number
    uuid: string
    name: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CropUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CropUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmCropCreateInput = {
    isDeleted?: boolean
    farm: FarmCreateNestedOneWithoutFarmCropsInput
    crop: CropCreateNestedOneWithoutFarmCropsInput
  }

  export type FarmCropUncheckedCreateInput = {
    id?: number
    farmUuid: string
    cropUuid: string
    isDeleted?: boolean
  }

  export type FarmCropUpdateInput = {
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    farm?: FarmUpdateOneRequiredWithoutFarmCropsNestedInput
    crop?: CropUpdateOneRequiredWithoutFarmCropsNestedInput
  }

  export type FarmCropUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    farmUuid?: StringFieldUpdateOperationsInput | string
    cropUuid?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FarmCropCreateManyInput = {
    id?: number
    farmUuid: string
    cropUuid: string
    isDeleted?: boolean
  }

  export type FarmCropUpdateManyMutationInput = {
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FarmCropUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    farmUuid?: StringFieldUpdateOperationsInput | string
    cropUuid?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FarmListRelationFilter = {
    every?: FarmWhereInput
    some?: FarmWhereInput
    none?: FarmWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FarmOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProducerCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    cpf?: SortOrder
    cnpj?: SortOrder
    name?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProducerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProducerMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    cpf?: SortOrder
    cnpj?: SortOrder
    name?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProducerMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    cpf?: SortOrder
    cnpj?: SortOrder
    name?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProducerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProducerRelationFilter = {
    is?: ProducerWhereInput
    isNot?: ProducerWhereInput
  }

  export type FarmCropListRelationFilter = {
    every?: FarmCropWhereInput
    some?: FarmCropWhereInput
    none?: FarmCropWhereInput
  }

  export type FarmCropOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FarmCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    city?: SortOrder
    state?: SortOrder
    totalArea?: SortOrder
    arableArea?: SortOrder
    vegetationArea?: SortOrder
    isDeleted?: SortOrder
    producerUUID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FarmAvgOrderByAggregateInput = {
    id?: SortOrder
    totalArea?: SortOrder
    arableArea?: SortOrder
    vegetationArea?: SortOrder
  }

  export type FarmMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    city?: SortOrder
    state?: SortOrder
    totalArea?: SortOrder
    arableArea?: SortOrder
    vegetationArea?: SortOrder
    isDeleted?: SortOrder
    producerUUID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FarmMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    city?: SortOrder
    state?: SortOrder
    totalArea?: SortOrder
    arableArea?: SortOrder
    vegetationArea?: SortOrder
    isDeleted?: SortOrder
    producerUUID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FarmSumOrderByAggregateInput = {
    id?: SortOrder
    totalArea?: SortOrder
    arableArea?: SortOrder
    vegetationArea?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CropCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CropAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CropMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CropMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    name?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CropSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FarmRelationFilter = {
    is?: FarmWhereInput
    isNot?: FarmWhereInput
  }

  export type CropRelationFilter = {
    is?: CropWhereInput
    isNot?: CropWhereInput
  }

  export type FarmCropCountOrderByAggregateInput = {
    id?: SortOrder
    farmUuid?: SortOrder
    cropUuid?: SortOrder
    isDeleted?: SortOrder
  }

  export type FarmCropAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FarmCropMaxOrderByAggregateInput = {
    id?: SortOrder
    farmUuid?: SortOrder
    cropUuid?: SortOrder
    isDeleted?: SortOrder
  }

  export type FarmCropMinOrderByAggregateInput = {
    id?: SortOrder
    farmUuid?: SortOrder
    cropUuid?: SortOrder
    isDeleted?: SortOrder
  }

  export type FarmCropSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FarmCreateNestedManyWithoutProducerInput = {
    create?: XOR<FarmCreateWithoutProducerInput, FarmUncheckedCreateWithoutProducerInput> | FarmCreateWithoutProducerInput[] | FarmUncheckedCreateWithoutProducerInput[]
    connectOrCreate?: FarmCreateOrConnectWithoutProducerInput | FarmCreateOrConnectWithoutProducerInput[]
    createMany?: FarmCreateManyProducerInputEnvelope
    connect?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
  }

  export type FarmUncheckedCreateNestedManyWithoutProducerInput = {
    create?: XOR<FarmCreateWithoutProducerInput, FarmUncheckedCreateWithoutProducerInput> | FarmCreateWithoutProducerInput[] | FarmUncheckedCreateWithoutProducerInput[]
    connectOrCreate?: FarmCreateOrConnectWithoutProducerInput | FarmCreateOrConnectWithoutProducerInput[]
    createMany?: FarmCreateManyProducerInputEnvelope
    connect?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FarmUpdateManyWithoutProducerNestedInput = {
    create?: XOR<FarmCreateWithoutProducerInput, FarmUncheckedCreateWithoutProducerInput> | FarmCreateWithoutProducerInput[] | FarmUncheckedCreateWithoutProducerInput[]
    connectOrCreate?: FarmCreateOrConnectWithoutProducerInput | FarmCreateOrConnectWithoutProducerInput[]
    upsert?: FarmUpsertWithWhereUniqueWithoutProducerInput | FarmUpsertWithWhereUniqueWithoutProducerInput[]
    createMany?: FarmCreateManyProducerInputEnvelope
    set?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    disconnect?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    delete?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    connect?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    update?: FarmUpdateWithWhereUniqueWithoutProducerInput | FarmUpdateWithWhereUniqueWithoutProducerInput[]
    updateMany?: FarmUpdateManyWithWhereWithoutProducerInput | FarmUpdateManyWithWhereWithoutProducerInput[]
    deleteMany?: FarmScalarWhereInput | FarmScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FarmUncheckedUpdateManyWithoutProducerNestedInput = {
    create?: XOR<FarmCreateWithoutProducerInput, FarmUncheckedCreateWithoutProducerInput> | FarmCreateWithoutProducerInput[] | FarmUncheckedCreateWithoutProducerInput[]
    connectOrCreate?: FarmCreateOrConnectWithoutProducerInput | FarmCreateOrConnectWithoutProducerInput[]
    upsert?: FarmUpsertWithWhereUniqueWithoutProducerInput | FarmUpsertWithWhereUniqueWithoutProducerInput[]
    createMany?: FarmCreateManyProducerInputEnvelope
    set?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    disconnect?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    delete?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    connect?: FarmWhereUniqueInput | FarmWhereUniqueInput[]
    update?: FarmUpdateWithWhereUniqueWithoutProducerInput | FarmUpdateWithWhereUniqueWithoutProducerInput[]
    updateMany?: FarmUpdateManyWithWhereWithoutProducerInput | FarmUpdateManyWithWhereWithoutProducerInput[]
    deleteMany?: FarmScalarWhereInput | FarmScalarWhereInput[]
  }

  export type ProducerCreateNestedOneWithoutFarmsInput = {
    create?: XOR<ProducerCreateWithoutFarmsInput, ProducerUncheckedCreateWithoutFarmsInput>
    connectOrCreate?: ProducerCreateOrConnectWithoutFarmsInput
    connect?: ProducerWhereUniqueInput
  }

  export type FarmCropCreateNestedManyWithoutFarmInput = {
    create?: XOR<FarmCropCreateWithoutFarmInput, FarmCropUncheckedCreateWithoutFarmInput> | FarmCropCreateWithoutFarmInput[] | FarmCropUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: FarmCropCreateOrConnectWithoutFarmInput | FarmCropCreateOrConnectWithoutFarmInput[]
    createMany?: FarmCropCreateManyFarmInputEnvelope
    connect?: FarmCropWhereUniqueInput | FarmCropWhereUniqueInput[]
  }

  export type FarmCropUncheckedCreateNestedManyWithoutFarmInput = {
    create?: XOR<FarmCropCreateWithoutFarmInput, FarmCropUncheckedCreateWithoutFarmInput> | FarmCropCreateWithoutFarmInput[] | FarmCropUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: FarmCropCreateOrConnectWithoutFarmInput | FarmCropCreateOrConnectWithoutFarmInput[]
    createMany?: FarmCropCreateManyFarmInputEnvelope
    connect?: FarmCropWhereUniqueInput | FarmCropWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProducerUpdateOneRequiredWithoutFarmsNestedInput = {
    create?: XOR<ProducerCreateWithoutFarmsInput, ProducerUncheckedCreateWithoutFarmsInput>
    connectOrCreate?: ProducerCreateOrConnectWithoutFarmsInput
    upsert?: ProducerUpsertWithoutFarmsInput
    connect?: ProducerWhereUniqueInput
    update?: XOR<XOR<ProducerUpdateToOneWithWhereWithoutFarmsInput, ProducerUpdateWithoutFarmsInput>, ProducerUncheckedUpdateWithoutFarmsInput>
  }

  export type FarmCropUpdateManyWithoutFarmNestedInput = {
    create?: XOR<FarmCropCreateWithoutFarmInput, FarmCropUncheckedCreateWithoutFarmInput> | FarmCropCreateWithoutFarmInput[] | FarmCropUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: FarmCropCreateOrConnectWithoutFarmInput | FarmCropCreateOrConnectWithoutFarmInput[]
    upsert?: FarmCropUpsertWithWhereUniqueWithoutFarmInput | FarmCropUpsertWithWhereUniqueWithoutFarmInput[]
    createMany?: FarmCropCreateManyFarmInputEnvelope
    set?: FarmCropWhereUniqueInput | FarmCropWhereUniqueInput[]
    disconnect?: FarmCropWhereUniqueInput | FarmCropWhereUniqueInput[]
    delete?: FarmCropWhereUniqueInput | FarmCropWhereUniqueInput[]
    connect?: FarmCropWhereUniqueInput | FarmCropWhereUniqueInput[]
    update?: FarmCropUpdateWithWhereUniqueWithoutFarmInput | FarmCropUpdateWithWhereUniqueWithoutFarmInput[]
    updateMany?: FarmCropUpdateManyWithWhereWithoutFarmInput | FarmCropUpdateManyWithWhereWithoutFarmInput[]
    deleteMany?: FarmCropScalarWhereInput | FarmCropScalarWhereInput[]
  }

  export type FarmCropUncheckedUpdateManyWithoutFarmNestedInput = {
    create?: XOR<FarmCropCreateWithoutFarmInput, FarmCropUncheckedCreateWithoutFarmInput> | FarmCropCreateWithoutFarmInput[] | FarmCropUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: FarmCropCreateOrConnectWithoutFarmInput | FarmCropCreateOrConnectWithoutFarmInput[]
    upsert?: FarmCropUpsertWithWhereUniqueWithoutFarmInput | FarmCropUpsertWithWhereUniqueWithoutFarmInput[]
    createMany?: FarmCropCreateManyFarmInputEnvelope
    set?: FarmCropWhereUniqueInput | FarmCropWhereUniqueInput[]
    disconnect?: FarmCropWhereUniqueInput | FarmCropWhereUniqueInput[]
    delete?: FarmCropWhereUniqueInput | FarmCropWhereUniqueInput[]
    connect?: FarmCropWhereUniqueInput | FarmCropWhereUniqueInput[]
    update?: FarmCropUpdateWithWhereUniqueWithoutFarmInput | FarmCropUpdateWithWhereUniqueWithoutFarmInput[]
    updateMany?: FarmCropUpdateManyWithWhereWithoutFarmInput | FarmCropUpdateManyWithWhereWithoutFarmInput[]
    deleteMany?: FarmCropScalarWhereInput | FarmCropScalarWhereInput[]
  }

  export type FarmCropCreateNestedManyWithoutCropInput = {
    create?: XOR<FarmCropCreateWithoutCropInput, FarmCropUncheckedCreateWithoutCropInput> | FarmCropCreateWithoutCropInput[] | FarmCropUncheckedCreateWithoutCropInput[]
    connectOrCreate?: FarmCropCreateOrConnectWithoutCropInput | FarmCropCreateOrConnectWithoutCropInput[]
    createMany?: FarmCropCreateManyCropInputEnvelope
    connect?: FarmCropWhereUniqueInput | FarmCropWhereUniqueInput[]
  }

  export type FarmCropUncheckedCreateNestedManyWithoutCropInput = {
    create?: XOR<FarmCropCreateWithoutCropInput, FarmCropUncheckedCreateWithoutCropInput> | FarmCropCreateWithoutCropInput[] | FarmCropUncheckedCreateWithoutCropInput[]
    connectOrCreate?: FarmCropCreateOrConnectWithoutCropInput | FarmCropCreateOrConnectWithoutCropInput[]
    createMany?: FarmCropCreateManyCropInputEnvelope
    connect?: FarmCropWhereUniqueInput | FarmCropWhereUniqueInput[]
  }

  export type FarmCropUpdateManyWithoutCropNestedInput = {
    create?: XOR<FarmCropCreateWithoutCropInput, FarmCropUncheckedCreateWithoutCropInput> | FarmCropCreateWithoutCropInput[] | FarmCropUncheckedCreateWithoutCropInput[]
    connectOrCreate?: FarmCropCreateOrConnectWithoutCropInput | FarmCropCreateOrConnectWithoutCropInput[]
    upsert?: FarmCropUpsertWithWhereUniqueWithoutCropInput | FarmCropUpsertWithWhereUniqueWithoutCropInput[]
    createMany?: FarmCropCreateManyCropInputEnvelope
    set?: FarmCropWhereUniqueInput | FarmCropWhereUniqueInput[]
    disconnect?: FarmCropWhereUniqueInput | FarmCropWhereUniqueInput[]
    delete?: FarmCropWhereUniqueInput | FarmCropWhereUniqueInput[]
    connect?: FarmCropWhereUniqueInput | FarmCropWhereUniqueInput[]
    update?: FarmCropUpdateWithWhereUniqueWithoutCropInput | FarmCropUpdateWithWhereUniqueWithoutCropInput[]
    updateMany?: FarmCropUpdateManyWithWhereWithoutCropInput | FarmCropUpdateManyWithWhereWithoutCropInput[]
    deleteMany?: FarmCropScalarWhereInput | FarmCropScalarWhereInput[]
  }

  export type FarmCropUncheckedUpdateManyWithoutCropNestedInput = {
    create?: XOR<FarmCropCreateWithoutCropInput, FarmCropUncheckedCreateWithoutCropInput> | FarmCropCreateWithoutCropInput[] | FarmCropUncheckedCreateWithoutCropInput[]
    connectOrCreate?: FarmCropCreateOrConnectWithoutCropInput | FarmCropCreateOrConnectWithoutCropInput[]
    upsert?: FarmCropUpsertWithWhereUniqueWithoutCropInput | FarmCropUpsertWithWhereUniqueWithoutCropInput[]
    createMany?: FarmCropCreateManyCropInputEnvelope
    set?: FarmCropWhereUniqueInput | FarmCropWhereUniqueInput[]
    disconnect?: FarmCropWhereUniqueInput | FarmCropWhereUniqueInput[]
    delete?: FarmCropWhereUniqueInput | FarmCropWhereUniqueInput[]
    connect?: FarmCropWhereUniqueInput | FarmCropWhereUniqueInput[]
    update?: FarmCropUpdateWithWhereUniqueWithoutCropInput | FarmCropUpdateWithWhereUniqueWithoutCropInput[]
    updateMany?: FarmCropUpdateManyWithWhereWithoutCropInput | FarmCropUpdateManyWithWhereWithoutCropInput[]
    deleteMany?: FarmCropScalarWhereInput | FarmCropScalarWhereInput[]
  }

  export type FarmCreateNestedOneWithoutFarmCropsInput = {
    create?: XOR<FarmCreateWithoutFarmCropsInput, FarmUncheckedCreateWithoutFarmCropsInput>
    connectOrCreate?: FarmCreateOrConnectWithoutFarmCropsInput
    connect?: FarmWhereUniqueInput
  }

  export type CropCreateNestedOneWithoutFarmCropsInput = {
    create?: XOR<CropCreateWithoutFarmCropsInput, CropUncheckedCreateWithoutFarmCropsInput>
    connectOrCreate?: CropCreateOrConnectWithoutFarmCropsInput
    connect?: CropWhereUniqueInput
  }

  export type FarmUpdateOneRequiredWithoutFarmCropsNestedInput = {
    create?: XOR<FarmCreateWithoutFarmCropsInput, FarmUncheckedCreateWithoutFarmCropsInput>
    connectOrCreate?: FarmCreateOrConnectWithoutFarmCropsInput
    upsert?: FarmUpsertWithoutFarmCropsInput
    connect?: FarmWhereUniqueInput
    update?: XOR<XOR<FarmUpdateToOneWithWhereWithoutFarmCropsInput, FarmUpdateWithoutFarmCropsInput>, FarmUncheckedUpdateWithoutFarmCropsInput>
  }

  export type CropUpdateOneRequiredWithoutFarmCropsNestedInput = {
    create?: XOR<CropCreateWithoutFarmCropsInput, CropUncheckedCreateWithoutFarmCropsInput>
    connectOrCreate?: CropCreateOrConnectWithoutFarmCropsInput
    upsert?: CropUpsertWithoutFarmCropsInput
    connect?: CropWhereUniqueInput
    update?: XOR<XOR<CropUpdateToOneWithWhereWithoutFarmCropsInput, CropUpdateWithoutFarmCropsInput>, CropUncheckedUpdateWithoutFarmCropsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FarmCreateWithoutProducerInput = {
    uuid: string
    name: string
    city: string
    state: string
    totalArea: number
    arableArea: number
    vegetationArea: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    farmCrops?: FarmCropCreateNestedManyWithoutFarmInput
  }

  export type FarmUncheckedCreateWithoutProducerInput = {
    id?: number
    uuid: string
    name: string
    city: string
    state: string
    totalArea: number
    arableArea: number
    vegetationArea: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    farmCrops?: FarmCropUncheckedCreateNestedManyWithoutFarmInput
  }

  export type FarmCreateOrConnectWithoutProducerInput = {
    where: FarmWhereUniqueInput
    create: XOR<FarmCreateWithoutProducerInput, FarmUncheckedCreateWithoutProducerInput>
  }

  export type FarmCreateManyProducerInputEnvelope = {
    data: FarmCreateManyProducerInput | FarmCreateManyProducerInput[]
    skipDuplicates?: boolean
  }

  export type FarmUpsertWithWhereUniqueWithoutProducerInput = {
    where: FarmWhereUniqueInput
    update: XOR<FarmUpdateWithoutProducerInput, FarmUncheckedUpdateWithoutProducerInput>
    create: XOR<FarmCreateWithoutProducerInput, FarmUncheckedCreateWithoutProducerInput>
  }

  export type FarmUpdateWithWhereUniqueWithoutProducerInput = {
    where: FarmWhereUniqueInput
    data: XOR<FarmUpdateWithoutProducerInput, FarmUncheckedUpdateWithoutProducerInput>
  }

  export type FarmUpdateManyWithWhereWithoutProducerInput = {
    where: FarmScalarWhereInput
    data: XOR<FarmUpdateManyMutationInput, FarmUncheckedUpdateManyWithoutProducerInput>
  }

  export type FarmScalarWhereInput = {
    AND?: FarmScalarWhereInput | FarmScalarWhereInput[]
    OR?: FarmScalarWhereInput[]
    NOT?: FarmScalarWhereInput | FarmScalarWhereInput[]
    id?: IntFilter<"Farm"> | number
    uuid?: StringFilter<"Farm"> | string
    name?: StringFilter<"Farm"> | string
    city?: StringFilter<"Farm"> | string
    state?: StringFilter<"Farm"> | string
    totalArea?: FloatFilter<"Farm"> | number
    arableArea?: FloatFilter<"Farm"> | number
    vegetationArea?: FloatFilter<"Farm"> | number
    isDeleted?: BoolFilter<"Farm"> | boolean
    producerUUID?: StringFilter<"Farm"> | string
    createdAt?: DateTimeFilter<"Farm"> | Date | string
    updatedAt?: DateTimeFilter<"Farm"> | Date | string
  }

  export type ProducerCreateWithoutFarmsInput = {
    uuid: string
    cpf?: string | null
    cnpj?: string | null
    name: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProducerUncheckedCreateWithoutFarmsInput = {
    id?: number
    uuid: string
    cpf?: string | null
    cnpj?: string | null
    name: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProducerCreateOrConnectWithoutFarmsInput = {
    where: ProducerWhereUniqueInput
    create: XOR<ProducerCreateWithoutFarmsInput, ProducerUncheckedCreateWithoutFarmsInput>
  }

  export type FarmCropCreateWithoutFarmInput = {
    isDeleted?: boolean
    crop: CropCreateNestedOneWithoutFarmCropsInput
  }

  export type FarmCropUncheckedCreateWithoutFarmInput = {
    id?: number
    cropUuid: string
    isDeleted?: boolean
  }

  export type FarmCropCreateOrConnectWithoutFarmInput = {
    where: FarmCropWhereUniqueInput
    create: XOR<FarmCropCreateWithoutFarmInput, FarmCropUncheckedCreateWithoutFarmInput>
  }

  export type FarmCropCreateManyFarmInputEnvelope = {
    data: FarmCropCreateManyFarmInput | FarmCropCreateManyFarmInput[]
    skipDuplicates?: boolean
  }

  export type ProducerUpsertWithoutFarmsInput = {
    update: XOR<ProducerUpdateWithoutFarmsInput, ProducerUncheckedUpdateWithoutFarmsInput>
    create: XOR<ProducerCreateWithoutFarmsInput, ProducerUncheckedCreateWithoutFarmsInput>
    where?: ProducerWhereInput
  }

  export type ProducerUpdateToOneWithWhereWithoutFarmsInput = {
    where?: ProducerWhereInput
    data: XOR<ProducerUpdateWithoutFarmsInput, ProducerUncheckedUpdateWithoutFarmsInput>
  }

  export type ProducerUpdateWithoutFarmsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProducerUncheckedUpdateWithoutFarmsInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmCropUpsertWithWhereUniqueWithoutFarmInput = {
    where: FarmCropWhereUniqueInput
    update: XOR<FarmCropUpdateWithoutFarmInput, FarmCropUncheckedUpdateWithoutFarmInput>
    create: XOR<FarmCropCreateWithoutFarmInput, FarmCropUncheckedCreateWithoutFarmInput>
  }

  export type FarmCropUpdateWithWhereUniqueWithoutFarmInput = {
    where: FarmCropWhereUniqueInput
    data: XOR<FarmCropUpdateWithoutFarmInput, FarmCropUncheckedUpdateWithoutFarmInput>
  }

  export type FarmCropUpdateManyWithWhereWithoutFarmInput = {
    where: FarmCropScalarWhereInput
    data: XOR<FarmCropUpdateManyMutationInput, FarmCropUncheckedUpdateManyWithoutFarmInput>
  }

  export type FarmCropScalarWhereInput = {
    AND?: FarmCropScalarWhereInput | FarmCropScalarWhereInput[]
    OR?: FarmCropScalarWhereInput[]
    NOT?: FarmCropScalarWhereInput | FarmCropScalarWhereInput[]
    id?: IntFilter<"FarmCrop"> | number
    farmUuid?: StringFilter<"FarmCrop"> | string
    cropUuid?: StringFilter<"FarmCrop"> | string
    isDeleted?: BoolFilter<"FarmCrop"> | boolean
  }

  export type FarmCropCreateWithoutCropInput = {
    isDeleted?: boolean
    farm: FarmCreateNestedOneWithoutFarmCropsInput
  }

  export type FarmCropUncheckedCreateWithoutCropInput = {
    id?: number
    farmUuid: string
    isDeleted?: boolean
  }

  export type FarmCropCreateOrConnectWithoutCropInput = {
    where: FarmCropWhereUniqueInput
    create: XOR<FarmCropCreateWithoutCropInput, FarmCropUncheckedCreateWithoutCropInput>
  }

  export type FarmCropCreateManyCropInputEnvelope = {
    data: FarmCropCreateManyCropInput | FarmCropCreateManyCropInput[]
    skipDuplicates?: boolean
  }

  export type FarmCropUpsertWithWhereUniqueWithoutCropInput = {
    where: FarmCropWhereUniqueInput
    update: XOR<FarmCropUpdateWithoutCropInput, FarmCropUncheckedUpdateWithoutCropInput>
    create: XOR<FarmCropCreateWithoutCropInput, FarmCropUncheckedCreateWithoutCropInput>
  }

  export type FarmCropUpdateWithWhereUniqueWithoutCropInput = {
    where: FarmCropWhereUniqueInput
    data: XOR<FarmCropUpdateWithoutCropInput, FarmCropUncheckedUpdateWithoutCropInput>
  }

  export type FarmCropUpdateManyWithWhereWithoutCropInput = {
    where: FarmCropScalarWhereInput
    data: XOR<FarmCropUpdateManyMutationInput, FarmCropUncheckedUpdateManyWithoutCropInput>
  }

  export type FarmCreateWithoutFarmCropsInput = {
    uuid: string
    name: string
    city: string
    state: string
    totalArea: number
    arableArea: number
    vegetationArea: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    producer: ProducerCreateNestedOneWithoutFarmsInput
  }

  export type FarmUncheckedCreateWithoutFarmCropsInput = {
    id?: number
    uuid: string
    name: string
    city: string
    state: string
    totalArea: number
    arableArea: number
    vegetationArea: number
    isDeleted?: boolean
    producerUUID: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FarmCreateOrConnectWithoutFarmCropsInput = {
    where: FarmWhereUniqueInput
    create: XOR<FarmCreateWithoutFarmCropsInput, FarmUncheckedCreateWithoutFarmCropsInput>
  }

  export type CropCreateWithoutFarmCropsInput = {
    uuid: string
    name: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CropUncheckedCreateWithoutFarmCropsInput = {
    id?: number
    uuid: string
    name: string
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CropCreateOrConnectWithoutFarmCropsInput = {
    where: CropWhereUniqueInput
    create: XOR<CropCreateWithoutFarmCropsInput, CropUncheckedCreateWithoutFarmCropsInput>
  }

  export type FarmUpsertWithoutFarmCropsInput = {
    update: XOR<FarmUpdateWithoutFarmCropsInput, FarmUncheckedUpdateWithoutFarmCropsInput>
    create: XOR<FarmCreateWithoutFarmCropsInput, FarmUncheckedCreateWithoutFarmCropsInput>
    where?: FarmWhereInput
  }

  export type FarmUpdateToOneWithWhereWithoutFarmCropsInput = {
    where?: FarmWhereInput
    data: XOR<FarmUpdateWithoutFarmCropsInput, FarmUncheckedUpdateWithoutFarmCropsInput>
  }

  export type FarmUpdateWithoutFarmCropsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    totalArea?: FloatFieldUpdateOperationsInput | number
    arableArea?: FloatFieldUpdateOperationsInput | number
    vegetationArea?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    producer?: ProducerUpdateOneRequiredWithoutFarmsNestedInput
  }

  export type FarmUncheckedUpdateWithoutFarmCropsInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    totalArea?: FloatFieldUpdateOperationsInput | number
    arableArea?: FloatFieldUpdateOperationsInput | number
    vegetationArea?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    producerUUID?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CropUpsertWithoutFarmCropsInput = {
    update: XOR<CropUpdateWithoutFarmCropsInput, CropUncheckedUpdateWithoutFarmCropsInput>
    create: XOR<CropCreateWithoutFarmCropsInput, CropUncheckedCreateWithoutFarmCropsInput>
    where?: CropWhereInput
  }

  export type CropUpdateToOneWithWhereWithoutFarmCropsInput = {
    where?: CropWhereInput
    data: XOR<CropUpdateWithoutFarmCropsInput, CropUncheckedUpdateWithoutFarmCropsInput>
  }

  export type CropUpdateWithoutFarmCropsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CropUncheckedUpdateWithoutFarmCropsInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmCreateManyProducerInput = {
    id?: number
    uuid: string
    name: string
    city: string
    state: string
    totalArea: number
    arableArea: number
    vegetationArea: number
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FarmUpdateWithoutProducerInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    totalArea?: FloatFieldUpdateOperationsInput | number
    arableArea?: FloatFieldUpdateOperationsInput | number
    vegetationArea?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmCrops?: FarmCropUpdateManyWithoutFarmNestedInput
  }

  export type FarmUncheckedUpdateWithoutProducerInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    totalArea?: FloatFieldUpdateOperationsInput | number
    arableArea?: FloatFieldUpdateOperationsInput | number
    vegetationArea?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farmCrops?: FarmCropUncheckedUpdateManyWithoutFarmNestedInput
  }

  export type FarmUncheckedUpdateManyWithoutProducerInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    totalArea?: FloatFieldUpdateOperationsInput | number
    arableArea?: FloatFieldUpdateOperationsInput | number
    vegetationArea?: FloatFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmCropCreateManyFarmInput = {
    id?: number
    cropUuid: string
    isDeleted?: boolean
  }

  export type FarmCropUpdateWithoutFarmInput = {
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    crop?: CropUpdateOneRequiredWithoutFarmCropsNestedInput
  }

  export type FarmCropUncheckedUpdateWithoutFarmInput = {
    id?: IntFieldUpdateOperationsInput | number
    cropUuid?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FarmCropUncheckedUpdateManyWithoutFarmInput = {
    id?: IntFieldUpdateOperationsInput | number
    cropUuid?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FarmCropCreateManyCropInput = {
    id?: number
    farmUuid: string
    isDeleted?: boolean
  }

  export type FarmCropUpdateWithoutCropInput = {
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    farm?: FarmUpdateOneRequiredWithoutFarmCropsNestedInput
  }

  export type FarmCropUncheckedUpdateWithoutCropInput = {
    id?: IntFieldUpdateOperationsInput | number
    farmUuid?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FarmCropUncheckedUpdateManyWithoutCropInput = {
    id?: IntFieldUpdateOperationsInput | number
    farmUuid?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ProducerCountOutputTypeDefaultArgs instead
     */
    export type ProducerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProducerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FarmCountOutputTypeDefaultArgs instead
     */
    export type FarmCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FarmCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CropCountOutputTypeDefaultArgs instead
     */
    export type CropCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CropCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProducerDefaultArgs instead
     */
    export type ProducerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProducerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FarmDefaultArgs instead
     */
    export type FarmArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FarmDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CropDefaultArgs instead
     */
    export type CropArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CropDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FarmCropDefaultArgs instead
     */
    export type FarmCropArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FarmCropDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}