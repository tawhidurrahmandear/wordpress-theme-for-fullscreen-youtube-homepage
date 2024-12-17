        // Function to find the first YouTube video
        function findYouTubeVideo() {
            const iframes = document.querySelectorAll('iframe');
            for (const iframe of iframes) {
                const src = iframe.src;
                // Check if the iframe source is a YouTube URL
                if (src.includes('youtube.com/embed/') || src.includes('youtu.be/')) {
                    return src; // Return the embed URL directly
                }
            }

            // Check for YouTube links in anchor tags
            const links = document.querySelectorAll('a');
            for (const link of links) {
                const href = link.href;
                // Check if the link is a YouTube URL
                if (href.includes('youtube.com/watch?v=')) {
                    // Convert to embed URL
                    const videoId = href.split('v=')[1].split('&')[0]; // Extract the video ID
                    return `https://www.youtube.com/embed/${videoId}`; // Return the embed URL
                } else if (href.includes('youtu.be/')) {
                    // Handle short URLs
                    const videoId = href.split('youtu.be/')[1];
                    return `https://www.youtube.com/embed/${videoId}`; // Return the embed URL
                }
            }

            return null; // No video found
        }

        // Function to play the video in fullscreen
        function playVideoInFullscreen(videoSrc) {
            const videoContainer = document.createElement('div');
            videoContainer.style.position = 'fixed';
            videoContainer.style.top = '0';
            videoContainer.style.left = '0';
            videoContainer.style.width = '100%';
            videoContainer.style.height = '100%';
            videoContainer.style.zIndex = '9999';
            videoContainer.style.backgroundColor = 'black';

            const iframe = document.createElement('iframe');
            iframe.src = videoSrc + '?autoplay=1';
            iframe.width = '100%';
            iframe.height = '100%';
            iframe.frameBorder = '0';
            iframe.allowFullscreen = true;

            videoContainer.appendChild(iframe);
            document.body.appendChild(videoContainer);

            // Request fullscreen
            if (videoContainer.requestFullscreen) {
                videoContainer.requestFullscreen();
            } else if (videoContainer.mozRequestFullScreen) { // Firefox
                videoContainer.mozRequestFullScreen();
            } else if (videoContainer.webkitRequestFullscreen) { // Chrome, Safari, and Opera
                videoContainer.webkitRequestFullscreen();
            } else if (videoContainer.msRequestFullscreen) { // IE/Edge
                videoContainer.msRequestFullscreen();
            }
        }

        // Find the YouTube video and play it in fullscreen
        const videoSrc = findYouTubeVideo();
        if (videoSrc) {
            playVideoInFullscreen(videoSrc);
        } else {
            console.log('No YouTube video found on this page.');
        }
		
	   // Hide Scrollbar
		document.body.style.overflow = 'hidden';
