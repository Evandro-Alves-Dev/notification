import { Module } from "@nestjs/common";
import { MailController } from "./mail.controller";
import { PrismaService } from "src/prisma.service";
import { MailService } from "./mail.service";

@Module({
    controllers: [MailController],
    providers: [PrismaService, MailService],
    exports: []
})
export class MailModule { }