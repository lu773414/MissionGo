const { createApp, ref } = Vue



createApp({
    setup() {
        const card = ref(false);
        const resultImage = ref({});

        const getCard = () => {
            card.value = true;
            // const result = Math.floor(Math.random() * 50) + 1;
            let result = weightedRandom(options);
            console.log(result);
            resultImage.value = {
                backgroundImage: `url("image/${result}")`
            };
        }

        const backToChoose = () => {
            card.value = false;
        }

        return {
            card,
            resultImage,
            getCard,
            backToChoose
        }
    }
}).mount('#app')


const weightedRandom = (options) => {
    let totalWeight = options.reduce((sum, option) => sum + option.weight, 0);
    let random = Math.random() * totalWeight;
    
    for (let option of options) {
        if (random < option.weight) {
            return option.value;
        }
        random -= option.weight;
    }
}


let options = [
    // SSR
    { value: 'SSR/01PRK.png', weight: 0.01 },
    { value: 'SSR/02SOM.png', weight: 0.01 },
    { value: 'SSR/03LBY.png', weight: 0.01 },
    // SR
    { value: 'SR/04ERI.png', weight: 0.0156 },
    { value: 'SR/05YE.png', weight: 0.0156 },
    { value: 'SR/06NGA.png', weight: 0.0156 },
    { value: 'SR/07PAK.png', weight: 0.0156 },
    { value: 'SR/08SDN.png', weight: 0.0156 },
    { value: 'SR/09IRN.png', weight: 0.0156 },
    { value: 'SR/10AFG.png', weight: 0.0156 },
    { value: 'SR/11IND.png', weight: 0.0156 },
    { value: 'SR/12SYR.png', weight: 0.0156 },
    { value: 'SR/13SAU.png', weight: 0.0156 },
    // R
    { value: 'R/14MLI.png', weight: 0.022 },
    { value: 'R/15DZA.png', weight: 0.022 },
    { value: 'R/16IRQ.png', weight: 0.022 },
    { value: 'R/17MMR.png', weight: 0.022 },
    { value: 'R/18MDV.png', weight: 0.022 },
    { value: 'R/19CHN.png', weight: 0.022 },
    { value: 'R/20BF.png', weight: 0.022 },
    { value: 'R/21LAO.png', weight: 0.022 },
    { value: 'R/22CUB.png', weight: 0.022 },
    { value: 'R/23MRT.png', weight: 0.022 },
    { value: 'R/24MAR.png', weight: 0.022 },
    { value: 'R/25UZB.png', weight: 0.022 },
    { value: 'R/26BGD.png', weight: 0.022 },
    { value: 'R/27NER.png', weight: 0.022 },
    { value: 'R/28CAF.png', weight: 0.022 },
    { value: 'R/29TKM.png', weight: 0.022 },
    { value: 'R/30NIC.png', weight: 0.022 },
    { value: 'R/31OMN.png', weight: 0.022 },
    { value: 'R/32ETH.png', weight: 0.022 },
    { value: 'R/33TUN.png', weight: 0.022 },
    { value: 'R/34COL.png', weight: 0.022 },
    { value: 'R/35VNM.png', weight: 0.022 },
    { value: 'R/36BTN.png', weight: 0.022 },
    { value: 'R/37MEX.png', weight: 0.022 },
    { value: 'R/38EGY.png', weight: 0.022 },
    { value: 'R/39MOZ.png', weight: 0.022 },
    { value: 'R/40QAT.png', weight: 0.022 },
    { value: 'R/41COD.png', weight: 0.022 },
    { value: 'R/42IDN.png', weight: 0.022 },
    { value: 'R/43CMR.png', weight: 0.022 },
    { value: 'R/44BRN.png', weight: 0.022 },
    { value: 'R/45COM.png', weight: 0.022 },
    { value: 'R/46TJK.png', weight: 0.022 },
    { value: 'R/47KAZ.png', weight: 0.022 },
    { value: 'R/48JOR.png', weight: 0.022 },
    { value: 'R/49MYS.png', weight: 0.022 },
    { value: 'R/50TUR.png', weight: 0.022 },
];