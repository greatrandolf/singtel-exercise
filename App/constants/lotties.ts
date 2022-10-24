
const lotties = {
    refresh: () => {
        let myAnimationSource = require('../assets/lottie/icon-refresh.json')
        myAnimationSource.layers[0].shapes[0].it[1].c.k = [1,1,1,1]
        myAnimationSource.layers[1].shapes[0].it[1].c.k = [1,1,1,1]
        myAnimationSource.layers[2].shapes[0].it[1].c.k = [1,1,1,1]
        myAnimationSource.layers[3].shapes[0].it[1].c.k = [1,1,1,1]
        return myAnimationSource
    },
}

export default lotties