let output = [],
    screens = 0;

let reset = () => {
    output = []
    screens = 0
}

let datas = props => {
    if(props == 'avatars') {
        return [...document.getElementsByTagName('img')].filter(i => i.src.indexOf('profile_images') + 1).map(s => s.src)
    } else if(props == 'tweets') {
        return [...document.querySelectorAll('.rn-13yce4e, .rn-fnigne, .rn-ndvcnb, .rn-gxnn5r, .rn-deolkf, .rn-homxoj, .rn-1471scf, .rn-14xgk7a, .rn-7cikom, .rn-o11vmf, .rn-ebii48, .rn-gul640, .rn-ad9z0x, .rn-1mnahxq, .rn-61z16t, .rn-p1pxzi, .rn-11wrixw, .rn-bcqeeo, .rn-wk8lta, .rn-9aemit, .rn-1mdbw0j, .rn-gy4na3, .rn-bauka4, .rn-irrty, .rn-qvutc0')]
                    .map(l => {
                        if(l.tagName == 'SPAN') {
                            return l.textContent
                        }
                    })
                    .filter(n=>n)
                    .filter(s=>s.length>20)
    } else {
        [...document.getElementsByClassName('rn-1loqt21')]
            .map(t => {
                if(t.textContent.indexOf('@') + 1) {
                    return t.textContent
                }
            })
            .filter(n=>n)
            .map(s => {
                if(props == 'usernames') {
                    return s.split('@')[0]
                } else if(props == 'twitternames') {
                    return s.split('@')[1].split('Follow')[0]
                }
            })
    }
}

let scrape = (props, n) => {
    output.push(datas(props))
    window.scrollBy(0, window.innerHeight)
    
    if(screens < n) {
        screens++
        scrape(props, n)
    }
}
