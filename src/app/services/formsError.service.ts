import { Injectable } from '@angular/core';
import { FormsErrorMessageType, FormErrorTypeEnum } from "../models/index";

@Injectable()
export class FormsErrorService {
	//errorMessages = {
	//	'email': (paramValue) => 'A valid email is required',
	//	'required': (paramValue) => 'This field is required',
	//	'minlength': (paramValue) => 'The min number of characters is ' + paramValue.requiredLength,
	//	'maxlength': (paramValue) => 'The max allowed number of characters is ' + paramValue.requiredLength,
	//	'pattern': (paramValue) => 'The required pattern is: ' + paramValue.requiredPattern,
	//	'years': (paramValue) => paramValue.message,
	//	'countryCity': (paramValue) => paramValue.message,
	//	'uniqueName': (paramValue) => paramValue.message,
	//	'telephoneNumbers': (paramValue) => paramValue.message,
	//	'telephoneNumber': (paramValue) => paramValue.message
	//};
	errorMessages = {
    [FormErrorTypeEnum.matDatepickerParse]: () => 'Invalid date format. Please enter mm/dd/yyyy',
    [FormErrorTypeEnum.invalidDateFormat]: () => 'Invalid date format. Please enter mm/dd/yyyy',
    [FormErrorTypeEnum.invalidOptionalEmail]: () => 'A valid email is required',
		[FormErrorTypeEnum.max]: (paramValue: any) => 'The value can not be greater than ' + paramValue,
		[FormErrorTypeEnum.min]: (paramValue: any) => 'The value can not be less than ' + paramValue,
    [FormErrorTypeEnum.email]: () => 'A valid email is required',
    [FormErrorTypeEnum.required]: () => 'This field is required',
		[FormErrorTypeEnum.minlength]: (paramValue: any) => 'The min number of characters is ' + paramValue,
		[FormErrorTypeEnum.maxlength]: (paramValue: any) => 'The max allowed number of characters is ' + paramValue,
    [FormErrorTypeEnum.pattern]: () => 'Please enter the recommended value.',
		[FormErrorTypeEnum.years]: (paramValue: any) => paramValue,
		[FormErrorTypeEnum.countryCity]: (paramValue: any) => paramValue,
		[FormErrorTypeEnum.uniqueName]: (paramValue: any) => paramValue,
		[FormErrorTypeEnum.telephoneNumbers]: (paramValue: any) => paramValue,
		[FormErrorTypeEnum.telephoneNumber]: (paramValue: any) => paramValue
	};

  getErrorMessage(errorType: string, paramValue: string, formErrorMessage?: FormsErrorMessageType): string {
		// NOTE: to display a custom error message, pass in the third optional parameter for getErrorMessage()
    if (typeof formErrorMessage !== "undefined" && formErrorMessage != null && formErrorMessage.errorTypeName === errorType) {
      return formErrorMessage.displayValue;
		}
    let err: string = "";
    switch (errorType) {
      case 'max':
      case 'min':
      case 'maxlength':
      case 'minlength':
      case 'years':
      case 'countryCity':
      case 'uniqueName':
      case 'telephoneNumbers':
      case 'telephoneNumber':
        err = this.errorMessages[errorType](paramValue);
      break;
    }
    return err;
	}

	getErrorMessages(errors: Array<FormsErrorMessageType>): Array<string> {
		//console.log("errors: ", errors);
		let errorMessages: Array<string> = new Array<string>();
    for (let i in errors) {
      let err = errors[i].errorTypeName
      if (err) errorMessages.push(this.getErrorMessage(err, errors[i].displayValue));
    }
		return errorMessages;
	}

	mapErrors(param: any): string {
		let displayValue = "";
		if (param) {
			//console.log("param:", param);
			let props = new Array('requiredLength', 'requiredPattern', 'message', 'max', 'min');
			for (let i in props) {
				if (param.hasOwnProperty(props[i])) {
					displayValue = param[props[i]];
					break;
				}
			}
		}
		//console.log("displayValue: ", displayValue);
		return displayValue;
	}
}
