(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.sha1 = factory());
}(this, (function () { 'use strict';

  /**
   * @file This is a SHA-1 hash generator by JavaScript.
   * @author Hsun
   * @description For your convenience, the code comments have been translated by Google.
   ***/

  // 消息填充位，补足长度。
  // Message padding bits, complement the length.
  function fillString(str) {
    var blockAmount = ((str.length + 8) >> 6) + 1,
      blocks = [],
      i;

    for (i = 0; i < blockAmount * 16; i++) {
      blocks[i] = 0;
    }
    for (i = 0; i < str.length; i++) {
      blocks[i >> 2] |= str.charCodeAt(i) << (24 - (i & 3) * 8);
    }
    blocks[i >> 2] |= 0x80 << (24 - (i & 3) * 8);
    blocks[blockAmount * 16 - 1] = str.length * 8;

    return blocks;
  }

  // 将输入的二进制数组转化为十六进制的字符串。
  // Convert the input binary array to a hexadecimal string.
  function binToHex(binArray) {
    var hexString = "0123456789abcdef",
      str = "",
      i;

    for (i = 0; i < binArray.length * 4; i++) {
      str += hexString.charAt((binArray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) +
        hexString.charAt((binArray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);
    }

    return str;
  }

  // 核心函数，输出为长度为5的number数组，对应160位的消息摘要。
  // The core function, the output is a number array with a length of 5,
  // corresponding to a 160-bit message digest.
  function core(blockArray) {
    var w = [],
      a = 0x67452301,
      b = 0xEFCDAB89,
      c = 0x98BADCFE,
      d = 0x10325476,
      e = 0xC3D2E1F0,
      olda,
      oldb,
      oldc,
      oldd,
      olde,
      t,
      i,
      j;

    for (i = 0; i < blockArray.length; i += 16) {  //每次处理512位 16*32
      olda = a;
      oldb = b;
      oldc = c;
      oldd = d;
      olde = e;

      for (j = 0; j < 80; j++) {  //对每个512位进行80步操作
        if (j < 16) {
          w[j] = blockArray[i + j];
        } else {
          w[j] = cyclicShift(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
        }
        t = modPlus(modPlus(cyclicShift(a, 5), ft(j, b, c, d)), modPlus(modPlus(e, w[j]), kt(j)));
        e = d;
        d = c;
        c = cyclicShift(b, 30);
        b = a;
        a = t;
      }

      a = modPlus(a, olda);
      b = modPlus(b, oldb);
      c = modPlus(c, oldc);
      d = modPlus(d, oldd);
      e = modPlus(e, olde);
    }

    return [a, b, c, d, e];
  }

  // 根据t值返回相应得压缩函数中用到的f函数。
  // According to the t value, return the corresponding f function used in
  // the compression function.
  function ft(t, b, c, d) {
    if (t < 20) {
      return (b & c) | ((~b) & d);
    } else if (t < 40) {
      return b ^ c ^ d;
    } else if (t < 60) {
      return (b & c) | (b & d) | (c & d);
    } else {
      return b ^ c ^ d;
    }
  }

  // 根据t值返回相应得压缩函数中用到的K值。
  // According to the t value, return the corresponding K value used in
  // the compression function.
  function kt(t) {
    return (t < 20) ? 0x5A827999 :
      (t < 40) ? 0x6ED9EBA1 :
        (t < 60) ? 0x8F1BBCDC : 0xCA62C1D6;
  }

  // 模2的32次方加法，因为JavaScript的number是双精度浮点数表示，所以将32位数拆成高16位和低16位分别进行相加
  // Modulo 2 to the 32nd power addition, because JavaScript's number is a
  // double-precision floating-point number, so the 32-bit number is split
  // into the upper 16 bits and the lower 16 bits are added separately.
  function modPlus(x, y) {
    var low = (x & 0xFFFF) + (y & 0xFFFF),
      high = (x >> 16) + (y >> 16) + (low >> 16);

    return (high << 16) | (low & 0xFFFF);
  }

  // 对输入的32位的num二进制数进行循环左移 ,因为JavaScript的number是双精度浮点数表示，所以移位需需要注意
  // Rotate left of the input 32-bit num binary number, because JavaScript's
  // number is a double-precision floating-point number, so you need to pay
  //  attention to the shift.
  function cyclicShift(num, k) {
    return (num << k) | (num >>> (32 - k));
  }

  // 主函数根据输入的消息字符串计算消息摘要，返回十六进制表示的消息摘要
  // The main function calculates the message digest based on the input message
  // string and returns the message digest in hexadecimal.
  function sha1(s) {
    return binToHex(core(fillString(s)));
  }

  return sha1;

})));
