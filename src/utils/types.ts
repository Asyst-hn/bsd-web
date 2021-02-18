export interface User {
	userId: string;
	passwd: string;
	nomusr: string;
	bemail: string;
	centro: string;
}

export interface Ticket {
	lnkSol: number;
	tipReq: string;
	staReq: string;
	urgReq: string;
	priReq: string;
	fecemi: Date;
	horEmi: Date;
	codCli: string;
	nomSol: string;
	numTel: string;
	codGru: string;
	codTec: string;
	codCat: string;
	subJet: string;
	comens: string;
	nlogin: string;
	fecsis: Date;
}

export interface TicketTypeMap {
	tipReq: string;
	nomTip: string;
}

export interface ClientTypeMap {
	codCli: string;
	nomCli: string;
}

export interface StatusTypeMap {
	staReq: string;
	nomSta: string;
}
