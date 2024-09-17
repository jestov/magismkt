const Logo = function ({ width = "70", className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height="70"
      viewBox="0 0 90 90"
      fill="none"
      className={className}
    >
      <g clip-path="url(#clip0_178_9439)">
        <path
          d="M17.8059 0L10.5942 55.0912H24.5557L28.5285 24.1246L40.0827 44.3687H48.6802L60.4191 23.755L64.777 55.0912H79.0926L71.0083 0H57.4113L44.846 31.1566L32.3012 0H17.8059Z"
          fill="currentColor"
        />
        <path
          d="M22.8105 68.2363C21.6569 67.1565 20.1247 66.5738 18.5451 66.6144C17.564 66.5851 16.592 66.8097 15.7233 67.2666C14.8546 67.7234 14.1186 68.3969 13.5867 69.2219C13.1357 68.4083 12.4694 67.7346 11.6609 67.2747C10.8524 66.8148 9.93282 66.5863 9.00305 66.6144C8.11714 66.5962 7.23896 66.7824 6.43661 67.1584C5.85817 67.4558 5.34508 67.866 4.92754 68.3647L3.81884 67.143H0.0256348V83.3424H5.19445V74.5498C5.1389 73.7338 5.35749 72.9227 5.81553 72.2451C6.03207 71.988 6.30625 71.7857 6.61574 71.6546C6.92524 71.5235 7.26132 71.4673 7.59664 71.4906C9.05951 71.4906 9.76785 72.4915 9.76785 74.5703V83.3732H14.9623V74.5498C14.9623 73.4514 15.1779 72.6558 15.5885 72.1989C15.8068 71.9649 16.0729 71.7805 16.3687 71.6583C16.6645 71.5361 16.9831 71.4789 17.3029 71.4906C17.6305 71.4905 17.9543 71.5605 18.2525 71.6959C18.517 71.8064 18.7486 71.9832 18.9249 72.2092C19.1158 72.481 19.2454 72.791 19.3048 73.1177C19.3918 73.6538 19.4296 74.1967 19.4177 74.7397V83.327H24.5968V74.5498C24.6449 73.2082 24.5311 71.8657 24.258 70.5513C23.9969 69.6615 23.4962 68.8606 22.8105 68.2363Z"
          fill="currentColor"
        />
        <path
          d="M39.8517 68.3083C38.8919 67.1636 37.3777 66.5836 35.3245 66.5836C34.2097 66.5483 33.0998 66.746 32.0657 67.164C31.0316 67.5821 30.0961 68.2113 29.319 69.0115C28.5352 69.842 27.9245 70.8202 27.5226 71.8892C27.1208 72.9582 26.9358 74.0964 26.9785 75.2377C26.888 77.5338 27.7069 79.773 29.2575 81.469C30.021 82.2678 30.9448 82.8962 31.9683 83.3128C32.9918 83.7295 34.0918 83.925 35.1962 83.8866C37.3828 83.8866 38.9432 83.3219 39.8466 82.203V83.3527H44.7485V67.1534H40.673L39.8517 68.3083ZM35.8891 79.0155C35.3953 79.0312 34.9036 78.9434 34.4457 78.7578C33.9878 78.5721 33.5738 78.2927 33.2303 77.9375C32.8802 77.5763 32.6063 77.1485 32.4246 76.6795C32.243 76.2104 32.1574 75.7096 32.1729 75.2069C32.159 74.716 32.2472 74.2276 32.4318 73.7725C32.6165 73.3175 32.8936 72.9058 33.2457 72.5634C33.5832 72.2135 33.9897 71.9374 34.4394 71.7527C34.8891 71.5681 35.3723 71.4788 35.8583 71.4906C36.355 71.4735 36.85 71.5586 37.3124 71.7408C37.7747 71.9231 38.1947 72.1984 38.5461 72.5499C38.8976 72.9013 39.1729 73.3213 39.3552 73.7836C39.5374 74.246 39.6225 74.741 39.6053 75.2377C39.6249 75.7359 39.5441 76.2331 39.3677 76.6995C39.1914 77.166 38.9231 77.5922 38.5788 77.9529C38.23 78.3088 37.8104 78.5873 37.347 78.7703C36.8836 78.9534 36.3869 79.0369 35.8891 79.0155Z"
          fill="currentColor"
        />
        <path
          d="M60.3679 68.1597C59.3413 66.4042 57.4935 66.2451 55.697 66.2451C54.2207 66.2286 52.7685 66.6201 51.5005 67.3764C50.2325 68.1326 49.198 69.2243 48.5109 70.5311C47.7951 71.9078 47.4302 73.44 47.4484 74.9916C47.4313 76.4815 47.784 77.9523 48.475 79.2724C49.1376 80.5313 50.1202 81.5935 51.3237 82.3521C52.5016 83.1063 53.8724 83.5038 55.2709 83.4968C56.3031 83.5013 57.3228 83.2714 58.2531 82.8243C58.825 82.5679 59.3398 82.1996 59.7673 81.7413C59.795 82.6086 59.5509 83.4628 59.0693 84.1846C58.7354 84.6119 58.3042 84.9534 57.8117 85.1803C57.3009 85.4258 56.741 85.5521 56.1743 85.5499C54.8552 85.5499 54.0134 85.0828 53.6079 84.1127L53.5463 83.9741H47.7358L47.7718 84.2359C47.8791 85.0737 48.1634 85.8791 48.6059 86.5986C49.0484 87.3181 49.6389 87.9352 50.3382 88.4089C51.9528 89.4964 53.8695 90.0461 55.815 89.9796C57.4605 89.9959 59.0903 89.6581 60.5937 88.9889C61.9436 88.4115 63.106 87.4695 63.9506 86.2685C64.3649 85.6627 64.6546 84.9804 64.8027 84.2616C64.9658 83.1229 65.0311 81.9723 64.9977 80.8225V66.7841H61.4047L60.3679 68.1597ZM59.8084 74.9402C59.8234 75.4287 59.7403 75.9153 59.564 76.3711C59.3876 76.8269 59.1217 77.2427 58.7818 77.5939C58.4417 77.9359 58.0344 78.2037 57.5856 78.3804C57.1368 78.5571 56.6563 78.6388 56.1743 78.6205C55.6993 78.6338 55.227 78.5438 54.7901 78.3568C54.3533 78.1698 53.9622 77.8903 53.6438 77.5375C52.9532 76.789 52.5845 75.799 52.6172 74.7811C52.6035 74.2982 52.6874 73.8174 52.8638 73.3676C53.0402 72.9179 53.3055 72.5083 53.6438 72.1633C53.9783 71.8219 54.3776 71.5507 54.8183 71.3655C55.259 71.1803 55.7322 71.0849 56.2102 71.0849C56.6883 71.0849 57.1615 71.1803 57.6021 71.3655C58.0428 71.5507 58.4421 71.8219 58.7767 72.1633C59.1226 72.5358 59.3917 72.9727 59.5687 73.4492C59.7458 73.9256 59.8272 74.4323 59.8084 74.9402Z"
          fill="currentColor"
        />
        <path
          d="M73.5592 60.7632H68.3647V65.198H73.5592V60.7632Z"
          fill="currentColor"
        />
        <path
          d="M73.5592 67.1533H68.3647V83.3578H73.5592V67.1533Z"
          fill="currentColor"
        />
        <path
          d="M88.1112 74.8476C87.67 74.4812 87.1748 74.1851 86.6432 73.9698C85.7859 73.6417 84.9101 73.3641 84.0203 73.1383C82.9937 72.856 81.7413 72.3684 81.7413 71.6293C81.7448 71.5233 81.776 71.4202 81.8318 71.3301C81.8877 71.24 81.9662 71.1662 82.0595 71.116C82.3513 70.9449 82.6867 70.8628 83.0245 70.8798C83.3123 70.8561 83.5994 70.9342 83.8355 71.1006C84.0303 71.2955 84.1409 71.559 84.1435 71.8346V72.0399H89.2045L89.1788 71.7935C89.1388 71.2272 89.0267 70.6684 88.8452 70.1304C88.6661 69.6531 88.4114 69.2076 88.0906 68.8113C86.9409 67.3638 85.2727 66.6298 83.1271 66.6298C81.4408 66.5863 79.7935 67.1409 78.4768 68.1953C77.8778 68.6453 77.3913 69.2281 77.0555 69.8978C76.7197 70.5676 76.5438 71.3061 76.5417 72.0553C76.5466 73.0979 76.8931 74.1101 77.5281 74.9371C78.1631 75.764 79.0517 76.36 80.0577 76.6338C81.8491 77.1009 82.9321 77.3935 83.276 77.5115C83.6013 77.6186 83.9053 77.7819 84.1743 77.994C84.2761 78.0792 84.3576 78.1861 84.4127 78.3069C84.4677 78.4277 84.495 78.5594 84.4925 78.6921C84.4902 78.8296 84.4539 78.9645 84.3867 79.0845C84.3195 79.2046 84.2236 79.306 84.1075 79.3799C83.8098 79.5952 83.4481 79.7037 83.081 79.6879C82.1262 79.6879 81.6283 79.2926 81.5411 78.4509V78.2507H76.4082V78.497C76.463 79.2054 76.6366 79.8994 76.9215 80.5502C77.2125 81.1491 77.6189 81.6846 78.1175 82.126C79.4314 83.3243 81.1597 83.9648 82.9372 83.9122C84.6789 83.9676 86.3841 83.4059 87.7519 82.3262C88.364 81.8579 88.8592 81.254 89.1986 80.562C89.5379 79.8699 89.7121 79.1087 89.7075 78.3379C89.7255 77.6729 89.591 77.0126 89.3143 76.4075C89.0376 75.8025 88.626 75.2689 88.1112 74.8476Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_178_9439">
          <rect width="89.692" height="90" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Logo;