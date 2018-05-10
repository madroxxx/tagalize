/**
* @Method: returns the localized form of words
* @Param: {string}
* @Retrun: {string}
*/
export namespace getTagalized {
    class getTagalized {
        word: string;
        constructor(public message: string) {
            this.word = message;
        }
    }
    
    interface Bigkas {
        message: string;
    }
    
    function localBatang(bigkas : Bigkas) {
        return bigkas.message + "-EY";
    }
    function localIlong(bigkas : Bigkas) {
        return bigkas.message + "-OY";
    }
    function localCeb(bigkas : Bigkas) {
        return bigkas.message + "-IY";
    }
    
    let user = new getTagalized("Cat");
    
    document.body.innerHTML = localBatang(user);
}
