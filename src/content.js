function theaterMode() {
  const removeContainerSpacingFromVideoPage = () => {
    const containerDiv = document.getElementById('container').childNodes[0];
    containerDiv.classList.remove('max-w-[747px]');
    containerDiv.classList.remove('ml-8');
    containerDiv.classList.remove('pt-24');
  }
  
  const removeArrowBackFromVideoPage = () => {
    const arrowBack = document.querySelectorAll('a.flex.w-fit.items-center.font-sans.text-16.text-white')[0];
  
    if (arrowBack) {
      arrowBack.remove();
    }
  }

  const removeLiveNowButton = () => {
    const liveNowBtn = document.querySelectorAll('button.bg-redLive')[0];
  
    if (liveNowBtn) {
      liveNowBtn.remove();
    }
  }
  
  const setVideoPlayerFullscreen = () => {
    const videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.style.height = '92vh';
    videoPlayer.style.zIndex = 9999;
    videoPlayer.style.objectFit = 'contain';
    videoPlayer.style.borderRadius = '0px';
  }

  removeLiveNowButton();
  removeContainerSpacingFromVideoPage();
  removeArrowBackFromVideoPage();
  setVideoPlayerFullscreen();
}

