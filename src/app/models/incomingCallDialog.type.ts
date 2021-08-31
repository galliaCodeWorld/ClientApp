import {
	CallType,
	IncomingCallResponseEnum
} from './index';

export class IncomingCallDialogType {
	constructor() {
		//let injector = ReflectiveInjector.resolveAndCreate([ConfigService]);
		//let config: ConfigService = injector.get(ConfigService);
		//this.avatarBaseUrl = config.avatarBaseUrl;
    this.avatarBaseUrl = null;
		this.call  = null;
		this.response = IncomingCallResponseEnum.deny;
	}
	avatarBaseUrl: string | null;
	call: CallType | null;
	response: IncomingCallResponseEnum
}
