export class Order {
    constructor(
        public id: string,
        public userId: string,
        public total: number,
        public status: string
    ) {}
}
