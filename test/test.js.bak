const JSEncrypt = require('node-jsencrypt');
const encrypt = new JSEncrypt(); // 创建加密对象实例
const decrypt = new JSEncrypt(); // 创建加密对象实例
const {
    encryptData,
    decryptData
} = require('../src/index.js');

const arguments = process.argv.splice(2);
if (arguments.length === 0) {
    console.log('Please enter the content to be encrypted. eg:npm test "There is password"');
    return false;
}
// rsa_public_key
const pubKey = "-----BEGIN PUBLIC KEY-----\n" +
    "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC4gFOiRiCkUSXOI0ZltyQNqmLK\n" +
    "q81HmsMLZ4OXQ6+nDe3FB0EgEB9oHPRwDgc39aB7T8cvhp3/kH0qmhVz304EULAV\n" +
    "Fui4Ox1FUY7cNGwugrNGu6xe5o+qJIBKz24ibTgudkh/yiF86EYsks+vkkt/Kz3f\n" +
    "+cxKHYSh1CCFyouKRQIDAQAB\n" +
    "-----END PUBLIC KEY-----\n";
// rsa_private_key
const privateKey = "-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIICXQIBAAKBgQC4gFOiRiCkUSXOI0ZltyQNqmLKq81HmsMLZ4OXQ6+nDe3FB0Eg\n" +
    "EB9oHPRwDgc39aB7T8cvhp3/kH0qmhVz304EULAVFui4Ox1FUY7cNGwugrNGu6xe\n" +
    "5o+qJIBKz24ibTgudkh/yiF86EYsks+vkkt/Kz3f+cxKHYSh1CCFyouKRQIDAQAB\n" +
    "AoGBALR0r1h0htCwne11CxHJgvXqxR2909ZJRKQO5uI4TcFzGjAv3D7kBhPq3hoL\n" +
    "XnwZPpHdgdC2NisUw5e7hWgD7WUYLfLFYGtgAmxe6Tirc3xfqERIp47YAigAsJT2\n" +
    "ny25736Nn2dvfDyWyaYSip+TL2Mn99WiQyY4XunQB3DSWHkBAkEA7hl/icGPiXRt\n" +
    "kjFfYCgtdhs2OqxKx1oAd1SsSPoxrRJJuZ1GblPN5MzRetts6ajQKAaXYHnhb7Mv\n" +
    "FTKE2cjcUQJBAMZfRE4WNNlqCxoY2DQlryYKKI8C1Aw6LwZTIoe239xKic13fh6e\n" +
    "0AWbE2GAHQfBSE/FugNotUf9HYHaJK97NbUCQHoZiVXTdRBALJBz0T02XVnbyot8\n" +
    "Hzzr4qFPQqqJ4z+lyTjudlfNkiBrCGHAdLG+aECeYLKQzhLCCLsOFSK55oECQQCA\n" +
    "jSAQkmdxNT04jj0dngYg2phqBOUxf0sWCC3qUOJFObCPjA4Y/cXEvDgVCRbG/cRE\n" +
    "ndfreaFwo2DJ03nOlkO5AkBc7tvF7JMAudwbo2Pzmjm7oaFOTZQzD4cnMlAqDFVv\n" +
    "QA6cKB2dzIQaOSGehceMUmciefyGLUY5bTdCNHYydvWM\n" +
    "-----END RSA PRIVATE KEY-----\n";

encrypt.setPublicKey(pubKey); //设置公钥
decrypt.setPrivateKey(privateKey); // 设置私钥


console.log(`Input:\r\n"${arguments[0]}"\r\n`);
console.log(`Decrypt:\r\n${decryptData(decrypt, encryptData(encrypt, arguments[0]))}\r\n`);
console.log(`Encrypt:\r\n${encryptData(encrypt, arguments[0])}\r\n`);


if (`"${arguments[0]}"` === decryptData(decrypt, encryptData(encrypt, arguments[0]))) {
    console.log('Test success!');
    return true;
} else {
    console.log('Test fail!');
    return false;
}