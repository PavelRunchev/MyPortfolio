const windowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

//main function used before pages js in html!
function openPage(content, isSertificate) {
    isSertificate === true 
    ? window.open(`${content}`,'_blank','top=0, left=0,width=450,height=650,', false)
    :	window.open(`${content}`,'_blank', windowFeatures);
}
