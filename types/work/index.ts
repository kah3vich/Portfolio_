export interface workList {
	map?: any;
	id: number;
	title: string;
	year: string | number;
	website: string;
	platform: string;
	stack: string;
	photo: string;
	description: string;
	art: string;
	star: number | string;
}

export interface workObj {
	work: workList;
}
