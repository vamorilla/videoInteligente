//Video Inteligente

document.addEventListener('DOMContentLoaded', () => {
    const $smartVideo = document.getElementById('inteligente-video');

    function playVideo() {
        const callback = (entries, obs) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    $smartVideo.play();
                }else{
                    $smartVideo.pause();
                }

                window.addEventListener('visibilitychange', e => {
                    document.visibilityState === 'visible' ? $smartVideo.play() : $smartVideo.pause()
                })
            })
            
        }
        const obs = new IntersectionObserver(callback, {
            threshold: 0.5,
        });
        obs.observe($smartVideo);
    }

    playVideo();
})