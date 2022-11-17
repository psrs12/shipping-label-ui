import { SellingParty } from "./SellingParty";
import { ShipFromParty } from "./ShipFromParty";
import { ShippingLabelData } from "./ShippingLabelData";
import { Error } from "./Error";

export class ShippingLabelResponse{
    labelData: ShippingLabelData[] = [];
    sellingParty: SellingParty = new SellingParty;
    labelFormat!:string;
    purchaseOrderNumber!:string;
    shipFromParty: ShipFromParty = new ShipFromParty;
    errors: Error[] = [];
}