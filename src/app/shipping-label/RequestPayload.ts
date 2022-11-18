export class RequestPayload{

    public sellingParty: SellingParty = new SellingParty;
    public shippingParty: ShipFromParty = new ShipFromParty;
}

export class SellingParty{
    public partyId!:string
}
export class ShipFromParty{
    public partyId!:string
}