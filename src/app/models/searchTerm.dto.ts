import { PagingDto, OrderByDto } from './index';

export class SearchTermDto {
	constructor() {
		this.term = "";
		this.paging  = null;
		this.orderBy  = null;
	}
	term: string; // required, max 300
	paging?: PagingDto | null; // nullable
	orderBy?: OrderByDto[] | null; // nullable
}
