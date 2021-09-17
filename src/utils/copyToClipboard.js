export const copyToClipboard = (value) => {
    const element = document.createElement('textarea');
    element.value = value;
    element.setAttribute('readonly', '');
    element.style.position = 'absolute';
    element.style.left = '-9999px';
    document.body.appendChild(element);
    element.select();
    var returnValue = document.execCommand('copy');
    document.body.removeChild(element);
    if (!returnValue) {
        throw new Error('copied nothing');
    }
};