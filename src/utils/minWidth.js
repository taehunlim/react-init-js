export const minWidth = (deviceSize) => {
    return (Number(deviceSize.split('px')[0]) + 1).toString() + 'px'
};