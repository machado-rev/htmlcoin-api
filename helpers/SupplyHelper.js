var BigNumber = require('bignumber.js');

module.exports = {
    /**
     *
     * @param {Number} height
     * @return {BigNumber}
     */
    getTotalSupplyByHeight: function (height) {
        var newHeightSinceGenesis = height - 798;
        var newCoinSinceGenesis = newHeightSinceGenesis * 1250;
        var supply = newCoinSinceGenesis + 79800000000;
        return (new BigNumber(supply));
    },

    /**
     *
     * @param {Number} height
     * @return {BigNumber}
     */
    getPOSTotalSupplyByHeight: function (height) {
        // Aprox to half. TODO: Calculate number of PoS blocks at this height
        var newHeightSinceGenesis = height - 798;
        var newCoinSinceGenesis = newHeightSinceGenesis * 1250;
        var supply = newCoinSinceGenesis / 2;
        return new BigNumber(supply);
    }
};
