### Fastify

Fastify は、Node.js の web フレームワーク。Hapi[^1] と Express からインスピレーションを得た、最小限のオーバーヘッド[^2]と強力なプラグイン アーキテクチャで最高の開発者体験を提供することに重点が置かれている。

https://www.fastify.io/
https://github.com/fastify/fastify

[^1]:
    Hapi
    node.js のフレームワーク

[^2]:
    overhead
    コンピュータで何らかの処理を行う際に、その処理を行うために必要となる付加的、間接的な処理や手続きのこと。また、そのために機器やシステムへかかる負荷、余分に費やされる処理時間などのこと。

#### Fastify を使う理由

1. ###### 処理が速い

   Fastify は処理速度が速い。
   Express は主に ES6 以前の JavaScript で書かれているため、パフォーマンスの向上がなく遅い。

2. ###### 型を定められる

   Fastify は型定義がされているため、TypeScript を書く上でも困らない。
   Express は主に ES6[^3]以前の JavaScript で書かれており、TypeScript を使う際に any 型が生成されてしまい、うまく作動しない。

   [^3]:
       ES6
       ES6(ES2015)とは 2015 年 6 月に発行された、ECMASCript の 6th Edition のこと。 ES6(ES2015)から多くの機能や構文が追加され、JavaScript でのプログラムがより効率よく書きやすくなった。

3. ###### 構文を共有しているため、Express.js の知識のほとんどを適用できる。
   Express からの移行ではないため今回は考慮しない。
