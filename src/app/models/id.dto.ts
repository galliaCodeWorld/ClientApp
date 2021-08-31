import { PagingDto, OrderByDto } from './index';

export class IdDto {
	constructor() {
		this.id = 0;
		this.paging  = null;
		this.orderBy  = null;
	}
	id: number; // integer
	paging?: PagingDto | null; // nullable
	orderBy?: OrderByDto[] | null; // nullable
}
