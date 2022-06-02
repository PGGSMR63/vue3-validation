"use strict";
exports.__esModule = true;
// type Field = {
//   name: string;
//   value: string;
// };
// interface Validator {
//   rules: {
//     rule: Rule;
//   };
//   fields: {
//     field?: Field;
//   };
// }
// interface xxx {
//   [key: string]: string,
// }
// class Validator {
//   constructor( values ) {
//     this.values = values;
//   }
//   addField(name: string, rules: Rule[]) {
//     this.fields = {
//       ...this.fields,
//       field: {
//         name,
//         value,
//       },
//     };
//     // конфигурируем поля, которые надо провалидировать
//   }
//   validate(rule, string) {
//     return this.rules[rule](string);
//   }
//   validateAll(string) {
//     // тут будет видимо объект ключ - name поля, значение - value на данный момент
//     return Object.values(this.rules).every((rule) => rule(string));
//   }
// }
function ads() {
    return false;
}
function validate(value, rules) {
    var errors = [];
    rules.forEach(function (fun) {
        if (fun(value)) {
            return;
        }
        errors.push(fun.name);
    });
    return errors;
}
console.log(validate('sdfsf', [ads]));
exports["default"] = validate;
validate('lol@lo.lol', [requiredRule, validEmailRule]);
// НАЧАТЬ ПИСАТЬ без реактивности,
