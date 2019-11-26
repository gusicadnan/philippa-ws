const backgroundVideo = new BackgroundVideo('.bv-video', {
    src: [
        '../WebPage/assets/videos/bv_1.mp4',
		'../WebPage/assets/videos/bv_1.webm'
    ],
    parallax: {
        effect: 1.9
    },
    onReady: function () {
        // Use onReady() to prevent flickers or force loading state
        const vidParent = document.querySelector(`.${this.bvVideoWrapClass}`);
        vidParent.classList.add('bv-video-wrap--ready');
    }
});
