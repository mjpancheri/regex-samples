export default function ehUmNome(campo) {
  const nome = campo.value
  // validar acentos
  // const regex = /^([A-Za-zÀ-ÖØ-öø-ÿ]+) ([A-Za-zÀ-ÖØ-öø-ÿ]+)$/
  // validar senhas com Maiúsculas, números e caracteres especiais
  // const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).*$/

  const patternNome = /^(?!(.)\1\1)[A-Za-zÀ-ÿ -]{3,30}$/i.test(nome)
  console.log(patternNome);

  if (!patternNome) {

      campo.setCustomValidity('Não é um nome válido');
      console.log(`"${nome}" não é um nome válido`)

  }

  return nome
}