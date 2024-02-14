import { INotificationService } from "../../application/services/INotificationService";
import ampqlib from "amqplib"


export class NotificationHelpers implements INotificationService {

    providerChannel : ampqlib.Channel | undefined;

    async inicializar () {
        try {
            const connection = await ampqlib.connect("amqps://elujeguw:mqOd03pR0GE6x6gaxFKu1luxjhJkO-BF@shrimp.rmq.cloudamqp.com/elujeguw")
            this.providerChannel = await connection.createChannel()
            this.providerChannel.assertQueue("channel1")
            console.log("Conexion exitosa");
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

    sendNotify(message: string): boolean {
        if(this.providerChannel === undefined) {
            return false
        }
        this.providerChannel.sendToQueue("channel1", Buffer.from(message))
        return true;
    }
}