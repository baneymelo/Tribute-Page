const nikolaTesla = {
    introduction: 'Nikola Tesla, (born July 9/10, 1856, Smiljan, Austrian Empire [now in Croatia]—died January 7, 1943, New York, New York, U.S.), Serbian American inventor and engineer who discovered and patented the rotating magnetic field, the basis of most alternating-current machinery. He also developed the three-phase system of electric power transmission. He immigrated to the United States in 1884 and sold the patent rights to his system of alternating-current dynamos, transformers, and motors to George Westinghouse. In 1891 he invented the Tesla coil, an induction coil widely used in radio technology',
    img: 'https://2.bp.blogspot.com/-nApx_SMi8Jg/Um0KDg0NDjI/AAAAAAAADQo/ddLPJRIBPJI/s1600/nikola-tesla.jpg',
    caption: 'Serbian-American inventor',
    href: 'https://teslauniverse.com/nikola-tesla/timeline/1856-birth-nikola-tesla',
    timeline: [
        { year: '1875', caption: 'Tesla Enrolls At Austrian Polytechnic' },
        { year: '1882', caption: 'Nikola Tesla begins working for Continental Edison' },
        { year: '1882', caption: 'Tesla Identifies Magnetic Induction Field Principle' },
        { year: '1884', caption: 'Tesla arrives in the United States' },
        { year: '1885', caption: 'Nikola Tesla quits working for Edison' },
        { year: '1886', caption: 'Nikola Tesla forms Tesla Electric Light and Manufacturing Company' },
        { year: '1887', caption: 'War of Currents era begins' },
        { year: 'Apr 1887', caption: 'Nikola Tesla begins experimenting with X-Rays' },
        { year: 'May 16 1888', caption: 'Tesla Delivers Lecture: A New System of Alternating Current Motors and Transformers' },
        { year: '1891', caption: 'Nikola Tesla Patents the Tesla Coil' },
        { year: 'Jul 30 1891', caption: 'Nikola Tesla becomes a citizen of the United States' },
        { year: '1893', caption: 'Nikola Tesla and George Westinghouse power the World\'s Columbian Exposition' },
        { year: '1899', caption: 'Tesla moves to research facility in Colorado Springs' },
        { year: '1901', caption: 'Construction begins on Tesla\'s Wardenclyffe Tower' },
        { year: '1913', caption: 'Tesla Patents Bladeless Turbine' },
        { year: '1915', caption: 'Tesla and Edison ignored by Nobel Prize committee' },
        { year: 'Aug 4 1915', caption: 'Tesla Files Lawsuit Against Guglielmo Marconi' },
        { year: 'Jul 10 1934', caption: 'The New York Times publicizes Nikola Tesla\'s particle Beam research' },
        { year: 'Jan 7 1943', caption: 'Nikola Tesla Dies' },
        { year: '1960', caption: '\'Tesla\' Defined As a Unit of Measure' },
    ]
}

const img = document.querySelector('#image');
img.setAttribute('src',nikolaTesla.img)

const imgCaption = document.querySelector('#img-caption');
imgCaption.innerHTML = `<span>${nikolaTesla.caption}</span>`

const intro = document.querySelector('#tribute-info');
intro.innerHTML = `<span>${nikolaTesla.introduction}</span>`


const link = document.querySelector('#tribute-link');
link.setAttribute('href',nikolaTesla.href)

const timeline = document.querySelector('#timeline');

const content = nikolaTesla.timeline.map(e => {
    return `
    <li><b>${e.year}</b></li>
    <li>${e.caption}</li>
    <br>
    `
})

timeline.innerHTML = `<ul>${content.join(" ")}</ul>`
