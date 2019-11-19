///<reference path="pessoa.ts" />
namespace empresa{
    export class Cliente extends Pessoa{
        private _codCliente:number;
        private _credito:number;

        public getCodCliente(){
            return this._codCliente;
        }

        public setCodCliente(codigo:number){
            this._codCliente - codigo;
        }

        public getCredito(){
            return this._credito;
        }

        public setCredito(credito:number){
            this._credito = credito;
        }
    }
}