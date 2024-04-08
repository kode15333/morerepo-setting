export const sum2 = (a: number, b: number) => a + b;


export const sum3 = (a: number, b: number) => a + b;


export const sum4 = (a: number, b: number) => a + b;


export const getBrowserVersion = () => {
    const userAgent = navigator.userAgent;
    const version = userAgent.match(/(MSIE |Trident\/|Edge\/)(\d+)/);
    if (version) {
        return parseInt(version[2]);
    }


    return -1;
}