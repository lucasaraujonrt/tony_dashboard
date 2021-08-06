export async function getBase64(file: Blob) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
  });
}

export const cepMask = (value: string | null | undefined)  => {
  return value ? value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{3})\d+?$/, '$1') : '';
};

export const phoneMask = (value: string | null | undefined) => {
  return value ? value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5}|\d{4})\D*(\d{4})/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1') : '';
};

export function removeSpecialChars(str: string) {
  return str ? str.toString().replace(/[^A-Za-z0-9]/g, '').replace(/\/s/g, '') : '';
}