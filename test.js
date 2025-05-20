/**
 *
 * @param {Array} arr
 * @returns {Number}
 */
function getMax(arr) {
  return Math.max.apply(null, arr)
}

const res = getMax([1, 2, 3, 4, 5])
console.log(res)
/**
 * @author bin <zyb1240017234@gmail.com>
 * 数组扁平化
 * @param {Array} arr 
 * @returns {Array}
 */
//数组扁平化
function flatten(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
  }, [])
}

console.log(flatten([1, [2, [3, 4]]]));
