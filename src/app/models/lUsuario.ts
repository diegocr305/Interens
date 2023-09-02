export class LUsuario {

    constructor(
        public rut: string,
        public nombre: string,
        public apellidoPaterno: string,
        public apellidoMaterno: string,
        public email: string,
        public birthday: Date | undefined,
        public tipo: string,
        public username: string,
        public password: string,
    ) {
    }
}
