module.exports = class DepthCalculator {

    calculateDepth(arr, level = 0, count = 0) {
        for (let key of arr) {
            if (typeof key === "object") {
                count = this.calculateDepth(key)
                if (count > level) {
                    level = count
                }
                if (typeof key !== "object") {
                    return 1
                }
            }

        }
        return level + 1
    }
}

