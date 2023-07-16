export const useEmergencyWord = (limitDate) => {
    const diff = new Date().getMonth() - limitDate.getMonth();
    console.log('diff',diff);

    switch(diff) {
        case 0:
            return '緊急';
        case -1:
            return 'やや緊急';
        default:
            return '普通';
}
}
