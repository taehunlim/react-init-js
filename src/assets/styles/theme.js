import { minWidth } from '../../utils/minWidth';

const deviceSize = {
    desktop: '1280px',
    laptop: '1024px',
    tablet: '767px',
    mobile: '479px',
};

const device = {
    desktop: `@media (min-width: ${minWidth(deviceSize.laptop)})`,
    laptop: `@media (min-width: ${minWidth(deviceSize.tablet)}) and (max-width: ${deviceSize.laptop})`,
    tablet: `@media (min-width: ${minWidth(deviceSize.mobile)}) and (max-width: ${deviceSize.tablet})`,
    mobile: `@media (max-width: ${deviceSize.mobile})`
};

const primary = {
    font: "#ffffff",
    bg: "#4e98ed",
}

const bgColor = {
    lightMode: "#ffffff",
    blackMode: "#434446"
};

const fontColor = {
    lightMode: "#434446",
    blackMode: "#ffffff"
}

const color = {
    primary: "#4e98ed",
    white: "#ffffff",
    black: "#434446"
};

const theme = {
    primary,
    deviceSize,
    device,
    color,
    bgColor,
    fontColor,
};

export default theme;