import { entidadesBancarias, limpiarIBAN } from "./util";

export const obtenerBanco = (iban: string): string => {
  const ibanLimpio = limpiarIBAN(iban);
  const codigoBanco = ibanLimpio.slice(4, 8);
  if (codigoBanco && codigoBanco.length === 4) {
    const bancoEncontrado = entidadesBancarias.find(
      (banco) => banco.codigo === codigoBanco
    );
    if (bancoEncontrado) {
      return bancoEncontrado.nombre;
    }
  }
  return "No encontrado";
};

export const obtenerSucursal = (iban: string): string => {
  const ibanLimpio = limpiarIBAN(iban);
  const codigoSucursal = ibanLimpio.slice(8, 12);
  return codigoSucursal;
};
export const obtenerDControl = (iban: string): string => {
  const ibanLimpio = limpiarIBAN(iban);
  const codigoDControl = ibanLimpio.slice(2, 4);
  return codigoDControl;
};
export const obtenerNCuenta = (iban: string): string => {
  const ibanLimpio = limpiarIBAN(iban);
  const codigoNCuenta = ibanLimpio.slice(14, 24);
  return codigoNCuenta;
};
