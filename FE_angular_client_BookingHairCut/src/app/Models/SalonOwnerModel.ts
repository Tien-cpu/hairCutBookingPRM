// import { Store } from './Store';

export class SalonProfile {
                "id": number;
                "name": String;
                "phonenumber": String;
                "email": String;
                "Address": String;
                "opentime": String;
                "closetime": String;
                "workDay":
                    {
                    "date" : string , "id" : number, "status" : boolean
                  }[];
                ;
                "Description": String;
                "totalfeedback": String;
                "totalfinish": String;
                "ratingSalon": String;
                "imageAvatar": String;
                "imageBackground": String;
}
