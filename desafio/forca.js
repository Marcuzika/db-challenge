class Forca {
  constructor(palavraSecreta) {
    this.palavraSecreta = palavraSecreta;
    this.vidas = 6;
    this.letrasChutadas = [];
    this.palavra = [];
    this.letrasPalavra = palavraSecreta.split("");

    for (var i = 0; i < this.palavraSecreta.length; i++) {
      this.palavra.push("_");
    }
  }

  chutar(letra) {
    if (letra.length > 1) return;

    if (
      this.letrasChutadas.includes(letra) === false &&
      this.palavraSecreta.includes(letra) === false
    ) {
      this.letrasChutadas.push(letra);
      this.vidas = this.vidas - 1;
    } else if (
      this.palavraSecreta.includes(letra) === true &&
      this.palavra.includes(letra) === false
    ) {
      let pos = this.letrasPalavra.indexOf(letra);
      while (pos != -1) {
        this.palavra.splice(pos, 1, letra);
        pos = this.letrasPalavra.indexOf(letra, pos + 1);
      }
      this.letrasChutadas.push(letra);
    } else {
      return;
    }
  }

  buscarEstado() {
    if (this.vidas === 0) return "perdeu";
    if (this.palavra.includes("_") === false) return "ganhou";
    return "aguardando chute";
  }

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas,
      vidas: this.vidas,
      palavra: this.palavra,
    };
  }
}

module.exports = Forca;
