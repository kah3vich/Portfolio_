export interface IWorksPageMocks {
	title: string;
}

export interface IWorkItem {
	art: string;
	description: string;
	id: number;
	photo: string;
	platform: string;
	stack: string;
	star: number;
	title: string;
	website: string;
	year: string;
}

export interface IWorksProps {
	works: IWorkItem[];
}

export interface IWorkProps {
	work: IWorkItem;
}
