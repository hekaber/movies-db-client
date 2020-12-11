export interface ICarouselItem {
    title: string,
    content: string,
    imagePath: string,
    itemLink: string
}
export interface IMovie {
    title: string,
    original_title: string,
    original_language: string,
    overview: string,
    poster_path: string,
    release_date: string,
    backdrop_path: string
}

export interface ILink {
    title: string,
    path: string,
    icon: any,
    cName: string
}
