type Rule = (value: string) => boolean;

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
function validate(value: string, rules: Array<Rule>) {
  const errors: string[] = [];

  rules.forEach((fun) => {
    if (fun(value)) {
      return;
    }
    errors.push(fun.name);
  });

  return errors;
}

console.log( validate('sdfsf', [ads] ) );

export default validate;

const requiredRule = str => str.length;
const validEmailRule = email => true;

const emailErrors = validate('lol@lo.lol', [ requiredRule, validEmailRule ]);

if ( emailErrors.length ) {
  if (emailErrors.includes('requiredRule')) { /* this field is required */ }
  if (emailErrors.validEmailRule) { /* email is invalid */ }
};



// НАЧАТЬ ПИСАТЬ без реактивности,
