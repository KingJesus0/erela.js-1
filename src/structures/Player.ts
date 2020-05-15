import { Manager } from "./Manager";
import { Extendable } from "./Utils";

export interface PlayerOptions {
    guild: string;
    voiceChannel: string;
    textChannel: string;
    node?: string;
    volume?: number;
    selfMute?: boolean;
    selfDeafen?: boolean;
}

export class Player extends Extendable {
    public static manager: Manager | null;

    public static init(manager: Manager): void {
        this.manager = manager;
    }

    constructor(protected options: PlayerOptions) {
        super();
    }
}
