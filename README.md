# 长字符串 rsa 加密解密方法

适用 jsencrypt、node-jsencrypt、wxmp-rsa 等包含 decrypt、encrypt 方法的加密库

## 安装

`npm i long-encrypt`

## 测试

`npm run test "Long string..."`

## 使用

### 引入

```
// nodejs
const {
    encryptData,
    decryptData
} = require('long-encrypt');
```

或者

```
// web
import {
    encryptData,
    decryptData
} from 'long-encrypt';
```

### 引入 jsencrypt

```
const JSEncrypt = require('jsencrypt');
```

或者

```
const JSEncrypt = require('node-jsencrypt');
```

### 创建实例

```
const encrypt = new JSEncrypt(); // 创建加密对象实例

const decrypt = new JSEncrypt(); // 创建解密对象实例
```

### 设置密钥

```
encrypt.setPublicKey(pubKey); //设置公钥
decrypt.setPrivateKey(privateKey); // 设置私钥
```

### 加密 encryptData(加密对象实例, "需要加密的字符串", [len=分段长度])

> 如果出现内容丢失，将 len 数字填大一些

```
encryptData(encrypt, "Long string", [len=32]);

=> "encryptStr1,encrypt2,..."
```

### 解密 decryptData(解密对象实例, "加密字符串");

```
decryptData(decrypt, "encryptStr1,encrypt2,...");

=> "Long string"
```
