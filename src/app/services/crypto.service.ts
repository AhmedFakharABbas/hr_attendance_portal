import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})

export class CryptoService {
  token: string = "123456$#@$^@$&*@1ERF";
  constructor() {
  }

  encrypt(encryptValue) {
    let _key = CryptoJS.enc.Utf8.parse(this.token);
    let _iv = CryptoJS.enc.Utf8.parse(this.token);
    let encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(encryptValue), _key, {
        keySize: 128 / 8,
        iv: _iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });
    return encrypted.toString();
  }

  decrypt(decryptValue) {
    let _key = CryptoJS.enc.Utf8.parse(this.token);
    let _iv = CryptoJS.enc.Utf8.parse(this.token);

    let decrypted = CryptoJS.AES.decrypt(
      decryptValue, _key, {
        keySize: 128 / 8,
        iv: _iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });
    return decrypted.toString(CryptoJS.enc.Utf8)
  }

}
