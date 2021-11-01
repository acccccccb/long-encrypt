function encryptData(encrypt, data, len = 32) {
    try {
        const str = JSON.stringify(data);
        const result = [];
        const splitCount = Math.ceil(str.length / len);
        for (let i = 0; i < splitCount; i++) {
            const start = i * len;
            const end = (i + 1) * len < str.length ? (i + 1) * len : str.length;
            const substr = str.substring(start, end);
            result.push(substr);
        }
        return result.map((item) => {
            return encrypt.encrypt(item);
        }).join(',');
    } catch (e) {
        console.log(e);
    }
}
function decryptData(decrypt, encryptStr) {
    try {
        const encryptArr = encryptStr.split(',');
        let data = encryptArr.map((item) => {
            const decyptStr = decrypt.decrypt(item);
            return decyptStr ? decyptStr : '';
        });
        return data.join('');
    } catch (e) {
        console.log(e);
        return false;
    }
}
module.exports = {
    encryptData,
    decryptData
};