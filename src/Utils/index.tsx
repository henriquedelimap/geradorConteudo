export const padronizaTexto = (text: string) => {
  const a = 'àáäâãèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;'
  const b = 'aaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------'
  const p = new RegExp(a.split('').join('|'), 'g')
  return text.toString().toLowerCase().trim()
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special chars
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[\s\W-]+/g, '-') // Replace spaces, non-word characters and dashes with a single dash (-)
}

export const Id = (a: string, b: string, c: string) => {
  console.log(a, b, c);

  const d = a[0] + a[1] + a[2] + a[3]
  const e = b[0] + b[1] + b[2] + b[3]
  const f = Math.floor(Math.random() * c.length)
  const g = [d, f, e, d, f, e].sort(() => Math.random() - .5).join('').toString()
  const id = `${d}/${e}-${c.length}-${g}`
  return id
}


// export const adiciona = () => {
//     // console.log(filtros.imobiliaria.map(item => item.quotes))
//     const filt = filtros.marketing.map(item => {
//         const newItems = item.quotes.map(frase => {
//             return createFrase({
//                 variables: {
//                     area: 'marketing',
//                     tema: item.label,
//                     quote: frase,
//                     myId: Id('marketing', item.label, frase)
//                 }
//             })
//         })
//     }
//     )
//     console.log(filt);
// }