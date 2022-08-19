import {
  ape,
  casa,
  financiamento,
  institucional,
  lote,
  totalImobiliaria
} from './imobiliaria'

import {
  odontologia, 
  psicologia, 
  totalSaude
} from './saude'

import { 
  marketingDigital, 
  totalMarketing
} from './marketing'

import {
  beleza, totalEstetica
} from './estetica'

import {
  revisao, totalAutomotiva
} from './automotiva'

import {
  interiores, 
  paisagismo, 
  projetos, 
  totalArquitetura
} from './arquitetura'

const filtros: { [key: string]: any } = {
  imobiliaria: [{
    label: 'total imobiliária',
    length: totalImobiliaria.length,
    quotes: totalImobiliaria.filter(i => i)
  },
  {
    label: 'financiamento',
    // length: financiamento.length,
    quotes: financiamento
  },
  {
    label: 'institucional',
    // // length: institucional.length,
    quotes: institucional
  },
  {
    label: 'lote',
    // // length: lote.length,
    quotes: lote
  },
  {
    label: 'casa',
    // // length: casa.length,
    quotes: casa
  },
  {
    label: 'ape',
    // // length: ape.length,
    quotes: ape
  }],

  marketing: [{
    label: 'total marketing',
    length: totalMarketing.length,
    quotes: totalMarketing
  },
  {
    label: 'marketing digital',
    // length: marketingDigital.length,
    quotes: marketingDigital
  }],
  arquitetura: [{
    label: 'todos',
    length: totalArquitetura.length,
    quotes: totalArquitetura
  },
  {
    label: 'paisagismo',
    length: paisagismo.length,
    quotes: paisagismo
  },
  {
    label: 'interiores',
    length: interiores.length,
    quotes: interiores
  }],
  saude: [{
    label: 'todos',
    length: totalSaude.length,
    quotes: totalSaude
  },
  {
    label: 'odontologia',
    length: odontologia.length,
    quotes: odontologia
  },
  {
    label: 'psicologia',
    length: psicologia.length,
    quotes: psicologia
  }],
  estetica: [{
    label: 'todos',
    length: totalEstetica.length,
    quotes: totalEstetica
  },
  {
    label: 'beleza',
    length: beleza.length,
    quotes: beleza
  }],
  automotiva: [{
    label: 'todos',
    length: totalAutomotiva.length,
    quotes: totalAutomotiva,
  },
  {
    label: 'revisão',
    length: revisao.length,
    quotes: revisao
  },
  ],
}

export {
  filtros
}