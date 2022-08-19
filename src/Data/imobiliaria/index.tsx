import { ape } from "./ape";
import { casa } from "./casa";
import { financiamento } from "./financiamento";
import { institucional } from "./institucional";
import { lote } from "./lote";

const totalImobiliaria = [...financiamento, ...institucional, ...lote, ...casa, ...ape, ...financiamento, ...institucional, ...lote, ...casa, ...ape]

export {
    ape,
    casa,
    financiamento,
    institucional,
    lote,
    totalImobiliaria
}