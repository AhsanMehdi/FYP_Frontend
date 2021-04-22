import { ChatAdapter, IChatGroupAdapter, Group, Message, ChatParticipantStatus, ParticipantResponse, ChatParticipantType, IChatParticipant, MessageType } from 'ng-chat';
import { Observable, of } from 'rxjs';
import { delay } from "rxjs/operators";
import { BackendService } from '../../services/backend.service';

export class DemoAdapter extends ChatAdapter implements IChatGroupAdapter
{


    constructor(private ngos: any,private backendService: BackendService) {

        super();
        

        ngos.forEach(ngo => {
    
            let participant : IChatParticipant = {
                participantType: ChatParticipantType.User,
                id: ngo.userId,
                displayName: ngo.nickName,
                avatar: ngo.imageUrl,
                status: ChatParticipantStatus.Online
            }
        
            
            DemoAdapter.mockedParticipants.push(participant)

        });
    }

    public static mockedParticipants: IChatParticipant[] = [
    ];

    listFriends(): Observable<ParticipantResponse[]> {

      

        return of(DemoAdapter.mockedParticipants.map(user => {
            let participantResponse = new ParticipantResponse();

            participantResponse.participant = user;
            participantResponse.metadata = {
                totalUnreadMessages: Math.floor(Math.random() * 10)
            }

            return participantResponse;
        }));
    }

    
    getMessageHistory(destinataryId: any): Observable<Message[]> {

       return this.backendService.getMessages(destinataryId)

        
    }


    sendMessage(message: Message): void {


        let msg = {toId: message.toId,message: message.message}
        this.backendService.sendMessage(msg)
    .subscribe(
        data => {
      
         console.log(data)
      
        },
        error => {
           
        })


        setTimeout(() => {
            let replyMessage = new Message();

            console.log(message)
            replyMessage.message = "You have typed '" + message.message + "'";
            replyMessage.dateSent = new Date();
            if (isNaN(message.toId))
            {
                let group = DemoAdapter.mockedParticipants.find(x => x.id == message.toId) as Group;

                // Message to a group. Pick up any participant for this
                let randomParticipantIndex = Math.floor(Math.random() * group.chattingTo.length);
                replyMessage.fromId = group.chattingTo[randomParticipantIndex].id;

                replyMessage.toId = message.toId;

                this.onMessageReceived(group, replyMessage);
            }
            else
            {
                replyMessage.fromId = message.toId;
                replyMessage.toId = message.fromId;

                let user = DemoAdapter.mockedParticipants.find(x => x.id == replyMessage.fromId);

                this.onMessageReceived(user, replyMessage);
            }
        }, 1000);
    }

    groupCreated(group: Group): void {
        DemoAdapter.mockedParticipants.push(group);

        DemoAdapter.mockedParticipants = DemoAdapter.mockedParticipants.sort((first, second) =>
            second.displayName > first.displayName ? -1 : 1
        );

        // Trigger update of friends list
        this.listFriends().subscribe(response => {
            this.onFriendsListChanged(response);
        });
    }
}