const TARGET_URL = "https://rss-bridge.org/bridge01/?action=display&context=By+band&band=azured&bridge=BandcampBridge&format=json";
const PROXY_URL = `https://api.allorigins.win/get?url=${encodeURIComponent(TARGET_URL)}`;

async function buildEmbed() {
    console.log("hello!!!");
    const releasesContainer = document.getElementById('releases');
    const headerContainer = document.getElementById('header');

    if (!releasesContainer) {
        return;
    }

    try {
        const response = await fetch(PROXY_URL);
        const wrapper = await response.json();
        
        const data = JSON.parse(wrapper.contents);

        // noooo my loading text :(((
        if (headerContainer) headerContainer.innerHTML = ""; 
        const html = data.items.map(item => {
            const imgMatch = item.content_html.match(/src=['"](.*?)['"]/);
            const imgSrc = imgMatch ? imgMatch[1] : '';
            const cleanTitle = item.title.replace('AZURED - ', '');

            return `
                <a href="${item.url}" target="_blank" class="release-card">
                    <img src="${imgSrc}" alt="${cleanTitle}">
                    <h3>${cleanTitle}</h3>
                    <span>${new Date(item.date_modified).getFullYear()}</span>
                    <div class="play-btn">▶ Listen</div>
                </a>
            `;
        }).join('');

        releasesContainer.innerHTML = html;
        console.log("that was easy");

    } catch (e) {
        releasesContainer.innerHTML = "Error loading music, try refreshing?";
    }
}


buildEmbed();
const container = document.getElementById('snap-container');
const sections = document.querySelectorAll('.content');
const sectionHeight = window.innerHeight;


container.scrollTop = sectionHeight;

container.addEventListener('scroll', () => {
    const scrollPos = container.scrollTop;
    const totalHeight = container.scrollHeight;


    if (scrollPos + sectionHeight >= totalHeight) {
        container.scrollTo({ top: sectionHeight, behavior: 'instantly' });
    }


    if (scrollPos <= 0) {
        container.scrollTo({ top: totalHeight - (sectionHeight * 2), behavior: 'instantly' });
    }
});