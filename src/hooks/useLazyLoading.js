import { useEffect, useState } from "react";

function useLazyLoading() {
  const [imgBlur, setImgBlur] = useState(true);

  useEffect(() => {
    const imgTargets = document.querySelectorAll("img[data-src");
    const imgTargetRef = Array.from(imgTargets);

    const loadImg = function (enteries, observer) {
      enteries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;

          img.addEventListener("load", () => {
            setImgBlur(false);
          });
        }
      });
    };

    const imgObserver = new IntersectionObserver(loadImg, {
      root: null,
      threshold: 0,
    });

    imgTargetRef.forEach((img) => imgObserver.observe(img));

    return () => imgObserver.disconnect();
  }, []);

  const blurClass = imgBlur ? "lazyImg" : "";

  return { blurClass };
}

export default useLazyLoading;
