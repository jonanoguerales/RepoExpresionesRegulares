import {
  obtenerBanco,
  obtenerDControl,
  obtenerNCuenta,
  obtenerSucursal,
} from "./obtenerDatos";
import "./styles.css";

import { comprobarIban, validarIban } from "./validaciones";

const iban = document.getElementById("iban");
const buscar = document.getElementById("boton-buscar");
const correcto = document.getElementById("correcto");
const valido = document.getElementById("valido");
const banco = document.getElementById("banco");
const sucursal = document.getElementById("sucursal");
const dcontrol = document.getElementById("d.control");
const ncuenta = document.getElementById("n.cuenta");

if (buscar instanceof HTMLButtonElement) {
  buscar.addEventListener("click", (event) => {
    if (
      event.target instanceof HTMLButtonElement &&
      event.target != null &&
      event.target != undefined
    ) {
      if (
        iban instanceof HTMLInputElement &&
        iban != null &&
        iban != undefined
      ) {
        añadirTextoParrafos(iban.value);
        obtenerBanco(iban.value);
        obtenerDControl(iban.value);
        obtenerSucursal(iban.value);
        obtenerNCuenta(iban.value);
        console.log("control", obtenerDControl(iban.value));
        console.log("sucursal", obtenerSucursal(iban.value));
        console.log("cuenta", obtenerNCuenta(iban.value));
      }
      console.log("Se a presionado el boton");
    }
  });
}

export const añadirTextoParrafos = (iban: string) => {
  if (
    correcto instanceof HTMLParagraphElement &&
    correcto != null &&
    correcto != undefined
  ) {
    if (comprobarIban(iban)) {
      correcto.innerHTML = "El IBAN está bien formado";
    } else {
      correcto.innerHTML = "El IBAN está mal formado";
    }
  }
  if (
    valido instanceof HTMLParagraphElement &&
    valido != null &&
    valido != undefined
  ) {
    if (validarIban(iban)) {
      valido.innerHTML = "El IBAN es valido";
    } else {
      valido.innerHTML = "El IBAN es incorrecto";
    }
  }
  if (
    banco instanceof HTMLParagraphElement &&
    banco != null &&
    banco != undefined
  ) {
    if (obtenerBanco(iban)) {
      banco.innerHTML = "Banco: " + obtenerBanco(iban);
    } else {
      banco.innerHTML = "Banco no existe";
    }
  }
  if (
    sucursal instanceof HTMLParagraphElement &&
    sucursal != null &&
    sucursal != undefined
  ) {
    if (obtenerSucursal(iban)) {
      sucursal.innerHTML = "Código Sucursal: " + obtenerSucursal(iban);
    } else {
      sucursal.innerHTML = "Código Sucursal no encontrado";
    }
  }
  if (
    dcontrol instanceof HTMLParagraphElement &&
    dcontrol != null &&
    dcontrol != undefined
  ) {
    if (obtenerDControl(iban)) {
      dcontrol.innerHTML = "Digito de control: " + obtenerDControl(iban);
    } else {
      dcontrol.innerHTML = "Digito de control no existe";
    }
  }
  if (
    ncuenta instanceof HTMLParagraphElement &&
    ncuenta != null &&
    ncuenta != undefined
  ) {
    if (obtenerNCuenta(iban)) {
      ncuenta.innerHTML = "Número de cuenta: " + obtenerNCuenta(iban);
    } else {
      ncuenta.innerHTML = "Número de cuenta incorrecto";
    }
  }
};
