// import * as internal from "stream";

export class Room {
    RoomType:string;
    TotalRoom:number;
    AvailableRoom:number;

    constructor(   RoomType:string,
        TotalRoom:number,
        AvailableRoom:number,
    ){
        this.RoomType=RoomType;
        this.TotalRoom = TotalRoom;
        this.AvailableRoom = AvailableRoom;

    }

}
