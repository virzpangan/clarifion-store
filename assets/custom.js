window.addEventListener('DOMContentLoaded', () => {
    //Get UTM Parameters
    const checkUTMParams = JSON.parse(localStorage.getItem('utm_params'));
    if (!checkUTMParams) {
        const url_string = window.location.href
        let url = new URL(url_string);
        const utm_campaign = url.searchParams.get("utm_campaign");
        const utm_content = url.searchParams.get("utm_content");
        const utm_medium = url.searchParams.get("utm_medium");
        const utm_source = url.searchParams.get("utm_source");
        const utm_term = url.searchParams.get("utm_term");

        const data = {
            'utm_campaign': `${utm_campaign}`,
            'utm_content': `${utm_content}`,
            'utm_medium': `${utm_medium}`,
            'utm_source': `${utm_source}`,
            'utm_term': `${utm_term}`
        }
        localStorage.setItem('utm_params', JSON.stringify(data));
    }

});

function getCollabButton() {
    const dovetaleContainer = document.querySelector('#dovetale-container');
    dovetaleContainer.style.display = 'block';
    const btniframe = document.querySelector('#dovetale-container iframe');
    const btndovelate = btniframe.contentWindow.document.querySelector('.dovetale-button');
    btndovelate.click();
}


