const BanbuValues = [123,456,789]

let result = 0

const HandleValues = () => {
    BanbuValues.forEach((ele) => {
        result += ele
    })
    return result
}