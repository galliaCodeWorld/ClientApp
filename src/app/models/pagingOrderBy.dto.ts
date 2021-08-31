import { PagingDto, OrderByDto } from './index';

export class PagingOrderByDto {
	constructor() {
		this.paging  = null;
		this.orderBy  = null;
	}
	paging?: PagingDto | null; // nullable
	orderBy?: OrderByDto[] | null; // nullable
}
