import { ChatAdapter, IChatGroupAdapter, Group, Message, ChatParticipantStatus, ParticipantResponse, ChatParticipantType, IChatParticipant, MessageType } from 'ng-chat';
import { Observable, of } from 'rxjs';
import { delay } from "rxjs/operators";
import { BackendService } from '../../services/backend.service';

export class DemoAdapter extends ChatAdapter implements IChatGroupAdapter
{

    constructor(private ngos: any) {

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
        let mockedHistory: Array<Message>;

        mockedHistory = [
            {
                fromId: MessageType.Text,
                toId: 999,
                message: "Hi there, here is a sample image type message:",
                dateSent: new Date()
            },
            {
              fromId: 1,
              toId: 999,
              type: MessageType.Image,
              message: "https://66.media.tumblr.com/avatar_9dd9bb497b75_128.pnj",
              dateSent: new Date()
            },
            {
                fromId: MessageType.Text,
                toId: 999,
                message: "Type any message bellow to test this Angular module.",
                dateSent: new Date()
            },
        ];

        return of(mockedHistory).pipe(delay(2000));
    }

    sendMessage(message: Message): void {
        setTimeout(() => {
            let replyMessage = new Message();

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