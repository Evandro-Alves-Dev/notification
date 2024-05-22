import { Injectable } from "@nestjs/common";
import { Mail, MailType } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import DataMessage from "./types/message";

@Injectable()
export class MailService {
    constructor(private prisma: PrismaService) { }

    async getMailByIdUser(idUser: string): Promise<Mail[] | null> {
        return await this.prisma.mail.findMany({ where: { idUser } });
    }

    async sendMail(content: DataMessage, type: string) {
        console.log('Email Type => ${type}')
        //TODO: Implement the logic to send an email
    }

    async persistNotification(content: DataMessage, type: MailType) {
        const data = {
            idUser: content.idUser,
            mailDestination: "evandroacer3@gmail.com",
            mailContent: JSON.stringify("Order number: " + content.orderNumber + ", Order value: " + content.orderValue),
            mailType: type,
        };        

        await this.prisma.mail.create({ data: {...data} });
    }
}