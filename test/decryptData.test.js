const JSEncrypt = require('node-jsencrypt');
const encrypt = new JSEncrypt(); // 创建加密对象实例
const decrypt = new JSEncrypt(); // 创建加密对象实例
const { encryptData, decryptData } = require('../src/index.js');

// rsa_public_key
const pubKey =
    '-----BEGIN PUBLIC KEY-----\n' +
    'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC4gFOiRiCkUSXOI0ZltyQNqmLK\n' +
    'q81HmsMLZ4OXQ6+nDe3FB0EgEB9oHPRwDgc39aB7T8cvhp3/kH0qmhVz304EULAV\n' +
    'Fui4Ox1FUY7cNGwugrNGu6xe5o+qJIBKz24ibTgudkh/yiF86EYsks+vkkt/Kz3f\n' +
    '+cxKHYSh1CCFyouKRQIDAQAB\n' +
    '-----END PUBLIC KEY-----\n';
// rsa_private_key
const privateKey =
    '-----BEGIN RSA PRIVATE KEY-----\n' +
    'MIICXQIBAAKBgQC4gFOiRiCkUSXOI0ZltyQNqmLKq81HmsMLZ4OXQ6+nDe3FB0Eg\n' +
    'EB9oHPRwDgc39aB7T8cvhp3/kH0qmhVz304EULAVFui4Ox1FUY7cNGwugrNGu6xe\n' +
    '5o+qJIBKz24ibTgudkh/yiF86EYsks+vkkt/Kz3f+cxKHYSh1CCFyouKRQIDAQAB\n' +
    'AoGBALR0r1h0htCwne11CxHJgvXqxR2909ZJRKQO5uI4TcFzGjAv3D7kBhPq3hoL\n' +
    'XnwZPpHdgdC2NisUw5e7hWgD7WUYLfLFYGtgAmxe6Tirc3xfqERIp47YAigAsJT2\n' +
    'ny25736Nn2dvfDyWyaYSip+TL2Mn99WiQyY4XunQB3DSWHkBAkEA7hl/icGPiXRt\n' +
    'kjFfYCgtdhs2OqxKx1oAd1SsSPoxrRJJuZ1GblPN5MzRetts6ajQKAaXYHnhb7Mv\n' +
    'FTKE2cjcUQJBAMZfRE4WNNlqCxoY2DQlryYKKI8C1Aw6LwZTIoe239xKic13fh6e\n' +
    '0AWbE2GAHQfBSE/FugNotUf9HYHaJK97NbUCQHoZiVXTdRBALJBz0T02XVnbyot8\n' +
    'Hzzr4qFPQqqJ4z+lyTjudlfNkiBrCGHAdLG+aECeYLKQzhLCCLsOFSK55oECQQCA\n' +
    'jSAQkmdxNT04jj0dngYg2phqBOUxf0sWCC3qUOJFObCPjA4Y/cXEvDgVCRbG/cRE\n' +
    'ndfreaFwo2DJ03nOlkO5AkBc7tvF7JMAudwbo2Pzmjm7oaFOTZQzD4cnMlAqDFVv\n' +
    'QA6cKB2dzIQaOSGehceMUmciefyGLUY5bTdCNHYydvWM\n' +
    '-----END RSA PRIVATE KEY-----\n';

encrypt.setPublicKey(pubKey); //设置公钥
decrypt.setPrivateKey(privateKey); // 设置私钥

const str =
    'Jest 在测试中针对 import 使用自定义解析器， 这让模拟测试范围之外的任何对象都变得容易。 你可以将模拟的 import 和丰富的 Mock 函数 API 一起使用，用于监视函数调用并获得可读的测试语法。';
const encryptStr = encryptData(encrypt, str);

test('加密字符串', () => {
    expect((() => typeof encryptStr)()).toBe('string');
});

test('解密字符串', () => {
    expect(decryptData(decrypt, encryptStr)).toBe(str);
    expect(decryptData(decrypt, 'ErrorCrypt')).toBe('');
});