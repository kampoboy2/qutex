import { CommandBase } from '../base';
import * as registrationCard from '../../cards/registration.json';
import { BOT } from '../../bot';
import { Auth } from '../../enum';

export class Card extends CommandBase implements ICommand {
    public readonly COMMAND_TYPE: CommandType = CommandType.CARD;
    public readonly COMMAND_BASE: string = '^registration(s?)$';
    public readonly DESCRIPTION: string = 'Shows the card relating to Qutex Registration for your room';
    public readonly AUTHORIZATION: Auth = Auth.NONE;
    public async relax (initiative: IInitiative): Promise<string> {
        await BOT.messages.create({ ...registrationCard, ...initiative.destination });
        return '';
    }
}