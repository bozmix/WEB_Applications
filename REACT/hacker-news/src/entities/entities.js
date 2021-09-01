
export const getShortUrl = (url) => {
    if (!url){
        return 'no web address provided'
    }
    let indexStart = url.indexOf('//') + 2;
    let startSliced = url.slice(indexStart, url.length-1);
    let offset = url.length - startSliced.length - 1;
    let indexEnd = startSliced.indexOf('/') + offset;
    let shortUrl = url.slice(indexStart, indexEnd);
    return shortUrl
}


export const getTime = (t) => {
    let now = new Date();
    let postTime = new Date(t * 1000);
    let diff = now - postTime;
    let passedTime = new Date(diff);

    if (passedTime.getHours() >= 2) {
        return `${passedTime.getHours()} hours ago`
    } else {
        return `an hour ago`
    }
    
}

export const numOfComments = (arr) => {
    if (arr) {
        return arr.length
    } else {
        return 0
    }
}
