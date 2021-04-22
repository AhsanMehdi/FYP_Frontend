export interface IChatBox {
    message: string;
    toId: string;
  }

  export interface IChatBoxMessage {
    _id: string; // for user authentication
    
    message: string;
    fromId:string;
    toId:string;

  }


  