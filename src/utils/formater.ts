import moment from 'moment';

export function relativeDateFormatter(date: string){
    // USando lib: moment para lidar com tempo relativo ("há 2 semanas, etc..")
    return moment(date).fromNow();
}