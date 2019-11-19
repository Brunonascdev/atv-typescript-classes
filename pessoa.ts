namespace empresa{
    export abstract class Pessoa{
        private _nome:string;
        private _idade:number;
        private _cpf:string;

        public getNome(){
            return this._nome;
        }

        public setNome(nome:string){
            this._nome = nome;
        }

        public getIdade(){
            return this._idade;
        }

        public setIdade(idade:number){
            this._idade = idade;
        }

        public getCpf(){
            return this._cpf;
        }

        public setCpf(cpf:string){
            this._cpf = cpf;
        }
    }
}