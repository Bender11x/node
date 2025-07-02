let nome: String = "Rodrigo" //tipo string
let numeto: number = 10 //tipo number
let numeroDecimal: number = 100.50
let booleano: boolean = true

let tipoArray: number[] = [1,2,3]
let arrayString: String[] = ["A", "B", "C"]

//tuplas - arrays com quantidade e tipos fixos no elemento
let tupla1 : [String, number] = ["Rodrigo", 18]

//enum - conjunto de valores nomeados
enum Status{
    Ativo,
    Inativo,
    Pendente
}

let s: Status = Status.Ativo

enum Pedido{
    Pendente = 1,
    Recebido = 2,
    Cancelado = 9,
}

let valor:any = "string" //desativa a verificação de tipo

let outroValor: unknown = "mensagem" //tipo de segurança que precisa ser validado anres de usar 
if(typeof outroValor === 'string'){
    console.log(outroValor.toUpperCase());
}

//tipo void para funções 
function log(): void {
    console.log("Olá mundo");
}

let arrowFunction = ():void => {

}

//Funções com tipos definidos 
let soma = (v1:number, v2:number): number => {
    return v1 + v2
}

soma(10, 10)

//objetos tipados
let pessoa: { nome: string; idade: number } = {
  nome: "Rodrigo",
  idade: 18
};

//intersaction types - permite unir tipos diferentes a um mesmo elemento
function imprimir(valor: number | String){
    console.log(valor);
}

//intersaction types - permite combinar tipos diferentes
type Individuo = {nome: String}
type Funcionario = {salario: number}

type Empregado = Individuo & Funcionario

let emp: Empregado = {
    nome: "Rodrigo",
    salario : 4000
}

//generic types - permite criar funções, classes ou interfaces genéricas que funcionam com diferentees tipos

function identidade <T>(valor: T): T {
    return valor;
}

let chamandoString = identidade<String>("teste de chamada")
let chamandoNumerico = identidade<number>(100)

//classes com tipagem
class Carro{
    modelo:String

    constructor(modelo:String){
        this.modelo = modelo
    }

    businar():void{
        console.log("bi bi");
    }
}

//instanciado o objeto
let fusca = new Carro("fusca")
fusca.businar()