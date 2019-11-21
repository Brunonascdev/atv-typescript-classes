var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
///<reference path="pessoa.ts" />
var empresa;
(function (empresa) {
    var Cliente = /** @class */ (function (_super) {
        __extends(Cliente, _super);
        function Cliente() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cliente.prototype.getCodCliente = function () {
            return this._codCliente;
        };
        Cliente.prototype.setCodCliente = function (codigo) {
            this._codCliente - codigo;
        };
        Cliente.prototype.getCredito = function () {
            return this._credito;
        };
        Cliente.prototype.setCredito = function (credito) {
            this._credito = credito;
        };
        Cliente.prototype.getBanco = function () {
            return this._banco;
        };
        Cliente.prototype.setBanco = function (banco) {
            this._banco = banco;
        };
        return Cliente;
    }(empresa.Pessoa));
    empresa.Cliente = Cliente;
})(empresa || (empresa = {}));
