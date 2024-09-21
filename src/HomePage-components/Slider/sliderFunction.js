// src/sliderFunctions.js
export const startSlideShow = (setCurrentIndex, images, slideInterval) => {
    return setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    }, slideInterval);
  };
  
  export const updateSliderPosition = (sliderRef, currentIndex) => {
    if (sliderRef.current) {
      const width = sliderRef.current.clientWidth;
      sliderRef.current.style.transform = `translateX(-${currentIndex * width}px)`;
    }
  };
  
  export const updateImageSources = (sliderRef, images) => {
    const screenWidth = window.innerWidth;
    images.forEach((img, index) => {
      const imgElement = sliderRef.current?.children[index];
      if (imgElement) {
        imgElement.src = screenWidth <= 695 ? img.small : img.large;
      }
    });
  };
  