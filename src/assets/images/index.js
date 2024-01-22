const images = {
  logo: require("./logo.png"),
  bgrLogin: require("./bgr-login.png"),
  profileTestImage: require("./Rectangle 4261.png"),
  facebookIcon: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
    <g clip-path="url(#clip0_209_668)">
      <path d="M50 25C50 11.193 38.807 0 25 0C11.193 0 0 11.193 0 25C0 37.4781 9.14219 47.8209 21.0938 49.6963V32.2266H14.7461V25H21.0938V19.4922C21.0938 13.2266 24.8262 9.76562 30.5367 9.76562C33.2719 9.76562 36.1328 10.2539 36.1328 10.2539V16.4062H32.9805C29.8748 16.4062 28.9062 18.3334 28.9062 20.3105V25H35.8398L34.7314 32.2266H28.9062V49.6963C40.8578 47.8209 50 37.4783 50 25Z" fill="#1877F2" />
      <path d="M34.7314 32.2266L35.8398 25H28.9062V20.3105C28.9062 18.3332 29.8748 16.4062 32.9805 16.4062H36.1328V10.2539C36.1328 10.2539 33.2719 9.76562 30.5365 9.76562C24.8262 9.76562 21.0938 13.2266 21.0938 19.4922V25H14.7461V32.2266H21.0938V49.6963C22.386 49.8988 23.692 50.0003 25 50C26.308 50.0004 27.614 49.8988 28.9062 49.6963V32.2266H34.7314Z" fill="white" />
    </g>
    <defs>
      <clipPath id="clip0_209_668">
        <rect width="50" height="50" fill="white" />
      </clipPath>
    </defs>
  </svg>,
  googleIcon: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
    <g clip-path="url(#clip0_209_669)">
      <path d="M17.418 1.64469C12.4222 3.37777 8.11384 6.66722 5.12575 11.0299C2.13765 15.3925 0.627311 20.5984 0.816573 25.8828C1.00583 31.1673 2.88472 36.2518 6.17725 40.3895C9.46979 44.5272 14.0024 47.5 19.1094 48.8713C23.2497 49.9396 27.5875 49.9865 31.75 49.008C35.5208 48.161 39.007 46.3492 41.8672 43.7502C44.8441 40.9625 47.0048 37.4161 48.1172 33.4923C49.3258 29.2254 49.541 24.7382 48.7461 20.3752H25.4961V30.0197H38.9609C38.6918 31.5579 38.1152 33.0261 37.2654 34.3362C36.4157 35.6464 35.3104 36.7717 34.0156 37.6447C32.3716 38.7327 30.5181 39.4646 28.5742 39.7931C26.6248 40.1557 24.6252 40.1557 22.6758 39.7931C20.6998 39.3851 18.8306 38.5695 17.1875 37.3986C14.5475 35.5298 12.5651 32.8749 11.5234 29.8127C10.4644 26.6931 10.4644 23.3112 11.5234 20.1916C12.2649 18.0049 13.4908 16.014 15.1094 14.3673C16.9617 12.4484 19.3068 11.0767 21.8873 10.4028C24.4679 9.72889 27.1842 9.7788 29.7383 10.547C31.7336 11.1592 33.5582 12.2294 35.0664 13.672C36.5846 12.1616 38.1003 10.6473 39.6133 9.12907C40.3945 8.31266 41.2461 7.53532 42.0156 6.69938C39.713 4.55687 37.0104 2.88963 34.0625 1.79313C28.6942 -0.156129 22.8202 -0.208514 17.418 1.64469Z" fill="white" />
      <path d="M17.418 1.64464C22.8198 -0.209828 28.6937 -0.158822 34.0625 1.78917C37.0109 2.89312 39.7123 4.56839 42.0117 6.71886C41.2305 7.55479 40.4062 8.33604 39.6094 9.14854C38.0938 10.6616 36.5794 12.1694 35.0664 13.672C33.5582 12.2293 31.7336 11.1592 29.7383 10.547C27.1851 9.77605 24.4688 9.72326 21.8876 10.3944C19.3063 11.0656 16.9598 12.4347 15.1055 14.3517C13.4868 15.9983 12.261 17.9892 11.5195 20.1759L3.42188 13.9064C6.32034 8.15855 11.3389 3.76192 17.418 1.64464Z" fill="#E33629" />
      <path d="M1.27343 20.1172C1.70835 17.96 2.43096 15.8711 3.42187 13.9062L11.5195 20.1914C10.4605 23.311 10.4605 26.6929 11.5195 29.8125C8.82161 31.8958 6.12239 33.9896 3.42187 36.0938C0.941991 31.1575 0.185671 25.5332 1.27343 20.1172Z" fill="#F8BD00" />
      <path d="M25.4961 20.3711H48.7461C49.541 24.7341 49.3258 29.2213 48.1172 33.4883C47.0048 37.412 44.8441 40.9584 41.8672 43.7461C39.2539 41.707 36.6289 39.6836 34.0156 37.6445C35.3112 36.7706 36.4171 35.6441 37.2668 34.3326C38.1166 33.021 38.6928 31.5513 38.9609 30.0117H25.4961C25.4922 26.8008 25.4961 23.5859 25.4961 20.3711Z" fill="#587DBD" />
      <path d="M3.41797 36.0938C6.11849 34.0104 8.81771 31.9167 11.5156 29.8125C12.5594 32.8758 14.5446 35.5308 17.1875 37.3984C18.8357 38.5639 20.709 39.3728 22.6875 39.7734C24.6369 40.136 26.6365 40.136 28.5859 39.7734C30.5298 39.4449 32.3833 38.713 34.0273 37.625C36.6406 39.6641 39.2656 41.6875 41.8789 43.7266C39.0191 46.3271 35.5329 48.1402 31.7617 48.9883C27.5993 49.9668 23.2614 49.9199 19.1211 48.8516C15.8465 47.9772 12.7878 46.4359 10.1367 44.3242C7.33097 42.0962 5.0392 39.2888 3.41797 36.0938Z" fill="#319F43" />
    </g>
    <defs>
      <clipPath id="clip0_209_669">
        <rect width="50" height="50" fill="white" />
      </clipPath>
    </defs>
  </svg>,
  xIcon: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
    <path d="M38.2812 0H11.7188C5.24666 0 0 5.24666 0 11.7188V38.2812C0 44.7533 5.24666 50 11.7188 50H38.2812C44.7533 50 50 44.7533 50 38.2812V11.7188C50 5.24666 44.7533 0 38.2812 0Z" fill="white" />
    <path d="M38.2812 0H11.7188C5.24666 0 0 5.24666 0 11.7188V38.2812C0 44.7533 5.24666 50 11.7188 50H38.2812C44.7533 50 50 44.7533 50 38.2812V11.7188C50 5.24666 44.7533 0 38.2812 0Z" fill="#1D9BF0" />
    <path d="M38.9789 17.8537C39.0004 18.1637 39.0004 18.4736 39.0004 18.7865C39.0004 28.3172 31.7449 39.309 18.4779 39.309V39.3031C14.5586 39.3088 10.7205 38.1863 7.42188 36.0697C7.9918 36.1383 8.56445 36.1725 9.13867 36.1738C12.3871 36.1764 15.5421 35.0869 18.0967 33.0803C16.5916 33.0518 15.1329 32.5538 13.9248 31.6557C12.7166 30.7577 11.8192 29.5045 11.3582 28.0715C12.4388 28.2798 13.5528 28.2373 14.6145 27.9473C11.2496 27.2674 8.82871 24.3109 8.82871 20.8773V20.7859C9.83182 21.3446 10.9545 21.6542 12.1021 21.6887C8.93301 19.5705 7.95605 15.3543 9.86973 12.0578C11.6805 14.2861 13.9398 16.1086 16.5009 17.4068C19.0619 18.7051 21.8674 19.45 24.7352 19.5934C24.4492 18.3626 24.4915 17.0783 24.8576 15.8689C25.2238 14.6596 25.9011 13.5676 26.8217 12.7021C29.7268 9.97128 34.2957 10.1113 37.0266 13.0148C38.6418 12.6959 40.1908 12.1038 41.6068 11.2639C41.0684 12.9339 39.9416 14.3515 38.4361 15.2529C39.8659 15.0845 41.2623 14.7017 42.5781 14.1176C41.6102 15.5672 40.3913 16.8323 38.9789 17.8537Z" fill="white" />
  </svg>
};

export default images;