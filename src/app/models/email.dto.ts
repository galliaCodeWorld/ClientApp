import { PagingDto, OrderByDto } from './index';

export class EmailDto {
	constructor() {
		this.email = "";
		this.paging  = null;
		this.orderBy  = null;
	}
	email: string; //required, must be email
	paging: PagingDto | null; // nullable
	orderBy: OrderByDto[] | null; // nullable
}
