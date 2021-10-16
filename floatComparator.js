export default class FloatComparator {
    static EPSILON = 0.000000000000001;

    /**
     * Returns true if numberA is greater than numberB
     *
     * @param {number} numberA
     * @param {number} numberB
     * @param {number} epsilon
     *
     * @return {boolean}
     */
    static isFloatGreaterThan(numberA, numberB, epsilon = FloatComparator.EPSILON) {
        return (numberA - numberB > epsilon) && (Math.abs(numberA - numberB) > epsilon);
    }

    /**
     * Returns true if numberA is less than numberB
     *
     * @param {number} numberA
     * @param {number} numberB
     * @param {number} epsilon
     *
     * @return {boolean}
     */
    static isFloatLessThan(numberA, numberB, epsilon = FloatComparator.EPSILON) {
        return (numberA - numberB < epsilon) && (Math.abs(numberA - numberB) > epsilon);
    }

    /**
     * Returns true if numberA is greater or equal than numberB
     *
     * @param {number} numberA
     * @param {number} numberB
     * @param {number} epsilon
     *
     * @return {boolean}
     */
    static isFloatGreaterOrEqualThan(numberA, numberB, epsilon = FloatComparator.EPSILON) {
        return FloatComparator.isFloatGreaterThan(numberA, numberB, epsilon)
            || FloatComparator.isFloatsEqual(numberA, numberB, epsilon);
    }

    /**
     * Returns true if numberA is less or equal than numberB
     *
     * @param {number} numberA
     * @param {number} numberB
     * @param {number} epsilon
     *
     * @return {boolean}
     */
    static isFloatLessOrEqualThan(numberA, numberB, epsilon = FloatComparator.EPSILON) {
        return FloatComparator.isFloatLessThan(numberA, numberB, epsilon)
            || FloatComparator.isFloatsEqual(numberA, numberB, epsilon);
    }

    /**
     * Returns true if numberA and numberB are equal
     *
     * @param {number} numberA
     * @param {number} numberB
     * @param {number} epsilon
     *
     * @return {boolean}
     */
    static isFloatsEqual(numberA, numberB, epsilon = FloatComparator.EPSILON) {
        if (numberA === numberB) {
            return true;
        }

        const difference = Math.abs(numberA - numberB);

        if (difference < epsilon) {
            return true;
        }

        return difference <= epsilon * Math.min(Math.abs(numberA), Math.abs(numberB));
    }
}
