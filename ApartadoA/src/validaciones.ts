import { electronicFormatIBAN, isValidIBAN } from "ibantools";
import { limpiarIBAN } from "./util";

export const comprobarIban = (iban: string): boolean => {
  const ibanRegex = /^\w{4}\s?[-]?\d{4}\s?[-]?\d{4}\s?[-]?\d{2}\s?[-]?\d{10}$/;
  {
    if (ibanRegex.test(iban)) {
      return true;
    }
  }
  return false;
};

export const validarIban = (iban: string): boolean => {
  const ibanLimpio = limpiarIBAN(iban);
  const ibanValido = electronicFormatIBAN(ibanLimpio);
  if (ibanValido) {
    if (isValidIBAN(ibanValido)) {
      return true;
    }
  }
  return false;
};
