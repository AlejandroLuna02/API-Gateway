export class Shipping {
    constructor(
        public id: string,
        public orderId: string,
        public address: string,
        public status: string
    ) {}
}
