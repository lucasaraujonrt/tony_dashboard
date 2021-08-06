export function getInitials(name: string) {
  let initials = name.match(/\b\w/g) || [];
  // @ts-ignore
  initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();

  if (initials && initials.length > 0 && initials.length > 2) {
    // @ts-ignore
    initials = initials.substr(0, 2);
  }

  return initials;
}

export function validateEmail(str: string) {
  // tslint:disable-next-line:tsr-detect-unsafe-regexp
  const exp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return exp.test(str);
}

export const validateCNPJ = (value: string) => {

  if (!value) {
    return false;
  }

  const match = value.toString().match(/\d/g);
  const numbers = Array.isArray(match) ? match.map(Number) : [];

  if (numbers.length !== 14) {
    return false;
  }

  const items = [...new Set(numbers)];
  if (items.length === 1) {
    return false;
  }

  const calc = (x: number) => {
    const slice = numbers.slice(0, x);
    let factor = x - 7;
    let sum = 0;

    for (let i = x; i >= 1; i--) {
      const n = slice[x - i];
      sum += n * factor--;
      if (factor < 2) { factor = 9; }
    }

    const result = 11 - (sum % 11);

    return result > 9 ? 0 : result;
  };

  const digits = numbers.slice(12);

  const digit0 = calc(12);
  if (digit0 !== digits[0]) { return false; }

  const digit1 = calc(13);

  return digit1 === digits[1];
};

export const validateCPF = (cpf: string) => {

  if (cpf.length !== 11 || cpf === '00000000000' || cpf === '11111111111' || cpf === '22222222222'
    || cpf === '33333333333' || cpf === '44444444444' || cpf === '55555555555' || cpf === '66666666666'
    || cpf === '77777777777' || cpf === '88888888888' || cpf === '99999999999') { return false; }
  let add = 0;
  for (let i = 0; i < 9; i += 1) { add += parseInt(cpf.charAt(i), 10) * (10 - i); }
  let rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) { rev = 0; }
  if (rev !== parseInt(cpf.charAt(9), 10)) { return false; }
  add = 0;
  for (let i = 0; i < 10; i += 1) { add += parseInt(cpf.charAt(i), 10) * (11 - i); }
  rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) { rev = 0; }

  return rev === parseInt(cpf.charAt(10), 10);
};
