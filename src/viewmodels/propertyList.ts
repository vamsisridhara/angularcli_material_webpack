export class PropertyList {
    id: number;
    img: string;
    address: string;
    gav: string;
    leased: string;
    revenue: string;
    type: string;
    productName: string;
    leaseExpired: string;
    constructor(_id: number, _address: string, _gav: string,
        _leased: string, _revenue: string, _type: string, _pname: string, _lexpired: string,
        _img?: string) {
        this.id = _id;
        this.img = _img;
        this.address = _address;
        this.gav = _gav;
        this.leased = _leased;
        this.revenue = _revenue;
        this.type = _type;
        this.productName = _pname;
        this.leaseExpired = _lexpired;
    }

}