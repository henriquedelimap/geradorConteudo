import { interiores } from "./interiores";
import { paisagismo } from "./paisagismo";
import { projetos } from "./projetos";

const totalArquitetura = [...interiores, ...paisagismo, ...projetos]
export {
    interiores, paisagismo, projetos, totalArquitetura
}