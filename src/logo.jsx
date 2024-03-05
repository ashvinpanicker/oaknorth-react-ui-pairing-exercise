import React from "react";

export default () => {
  return (
    <div className="header__logo-wrapper">
      <a
        className="header__logo logo"
        href="https://oaknorth.co.uk/"
        title="OakNorth Bank"
      >
        <div className="header__logo-text">
          <svg
            width="130"
            height="22"
            viewBox="0 0 130 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M127.302 21.613H129.549C129.672 21.613 129.781 21.5679 129.865 21.4843C129.948 21.3941 129.994 21.2911 129.994 21.1623V12.8249C129.994 10.8033 129.549 9.23881 128.667 8.125C127.785 7.01119 126.498 6.45751 124.804 6.45751C123.555 6.45751 122.364 6.80517 121.231 7.50693C121.109 7.59707 120.974 7.6357 120.826 7.6357C120.671 7.6357 120.542 7.57775 120.439 7.4683C120.336 7.35886 120.278 7.21078 120.278 7.02407V0.450674C120.278 0.32191 120.233 0.218899 120.15 0.128764C120.066 0.0386292 119.956 0 119.834 0H117.587C117.465 0 117.355 0.0450674 117.272 0.128764C117.182 0.218899 117.143 0.32191 117.143 0.450674V21.1559C117.143 21.2847 117.188 21.3877 117.272 21.4778C117.355 21.5679 117.465 21.6066 117.587 21.6066H119.834C119.956 21.6066 120.066 21.5615 120.15 21.4778C120.233 21.3877 120.278 21.2847 120.278 21.1559V12.9215C120.278 12.2712 120.375 11.7497 120.574 11.357C120.774 10.9642 121.09 10.623 121.534 10.3462C122.416 9.81181 123.266 9.54784 124.07 9.54784C124.985 9.54784 125.674 9.83756 126.144 10.4234C126.614 11.0093 126.852 11.9235 126.852 13.179V21.1623C126.852 21.2911 126.897 21.3941 126.98 21.4843C127.064 21.5744 127.174 21.613 127.296 21.613M109.256 16.9518V10.7711C109.256 10.4685 109.353 10.2239 109.546 10.0243C109.739 9.83112 109.984 9.73455 110.28 9.73455H113.48C113.615 9.73455 113.731 9.68304 113.827 9.58647C113.924 9.4899 113.969 9.37401 113.969 9.23881V7.21078C113.969 7.07557 113.924 6.95969 113.827 6.86311C113.731 6.76654 113.615 6.71504 113.48 6.71504H110.28C109.984 6.71504 109.739 6.61846 109.546 6.42532C109.353 6.23217 109.256 5.98108 109.256 5.68492V2.02803C109.256 1.89283 109.211 1.77694 109.114 1.68037C109.018 1.5838 108.902 1.53229 108.767 1.53229H107.383C107.009 1.53229 106.719 1.65462 106.52 1.90571C106.32 2.15679 106.204 2.45939 106.192 2.83281L106.146 5.77506C106.146 6.04546 106.056 6.2708 105.883 6.45107C105.702 6.63134 105.477 6.72147 105.2 6.72147H104.537C104.279 6.72147 104.041 6.81161 103.829 6.98544C103.616 7.15927 103.513 7.41036 103.513 7.74515V9.24525C103.513 9.38045 103.558 9.49633 103.655 9.59291C103.751 9.68948 103.867 9.74099 104.003 9.74099H105.11C105.406 9.74099 105.651 9.83756 105.844 10.0307C106.037 10.2239 106.134 10.4749 106.134 10.7775V16.9968C106.134 18.0141 106.307 18.8961 106.662 19.6301C107.009 20.364 107.518 20.9241 108.175 21.304C108.831 21.6903 109.61 21.877 110.499 21.877C111.162 21.877 111.838 21.7675 112.533 21.5422C113.222 21.3169 113.885 21.0014 114.51 20.5958C114.632 20.5056 114.696 20.3898 114.696 20.2288C114.696 20.1902 114.69 20.1322 114.671 20.055L114.394 19.2953C114.271 18.9476 114.091 18.6836 113.866 18.5098C113.641 18.336 113.377 18.2458 113.08 18.2458C112.804 18.2458 112.507 18.3167 112.186 18.4647C111.735 18.6772 111.265 18.7866 110.788 18.7866C110.338 18.7866 109.971 18.6386 109.687 18.3489C109.404 18.0591 109.263 17.5891 109.263 16.9518M96.8433 11.093C97.2296 10.623 97.661 10.2625 98.1503 9.99208C98.6331 9.72167 99.1546 9.59291 99.7019 9.59291C100.017 9.59291 100.313 9.61866 100.584 9.66373C100.738 9.68304 100.848 9.68948 100.912 9.68948C101.299 9.68948 101.627 9.58003 101.904 9.35469C102.181 9.12936 102.361 8.82676 102.438 8.43403L102.683 7.33954C102.702 7.23009 102.689 7.13352 102.644 7.04338C102.599 6.95325 102.528 6.88887 102.438 6.8438C101.73 6.57983 101.009 6.45107 100.275 6.45107C99.1224 6.45107 98.0859 6.86311 97.1781 7.6872C96.9849 7.8546 96.8176 7.93829 96.6759 7.93829C96.457 7.93829 96.251 7.75158 96.0578 7.38461L96.0321 7.32666C95.9162 7.12064 95.7681 6.96613 95.5879 6.86955C95.4076 6.76654 95.1758 6.71504 94.8925 6.71504H93.6242C93.5019 6.71504 93.386 6.7601 93.2959 6.85668C93.1993 6.94681 93.1542 7.0627 93.1542 7.1979V21.1302C93.1542 21.2589 93.1993 21.3684 93.2959 21.4649C93.3924 21.5615 93.5019 21.613 93.6242 21.613H95.8003C95.9355 21.613 96.045 21.5615 96.1415 21.4649C96.2317 21.3684 96.2767 21.2589 96.2767 21.1302V12.9987C96.2767 12.1939 96.4699 11.5566 96.8562 11.0866M78.8357 14.1769C78.8357 13.3013 79.0288 12.5158 79.4216 11.8205C79.8078 11.1252 80.3487 10.5844 81.044 10.1981C81.7329 9.81181 82.5119 9.61866 83.381 9.61866C84.2502 9.61866 85.0228 9.81181 85.7181 10.1981C86.407 10.5844 86.9478 11.1252 87.3405 11.8205C87.7333 12.5158 87.9264 13.3013 87.9264 14.1769C87.9264 15.0525 87.7333 15.838 87.3405 16.5268C86.9542 17.2222 86.4134 17.763 85.7181 18.1493C85.0292 18.5356 84.2502 18.7287 83.381 18.7287C82.5119 18.7287 81.7393 18.5291 81.044 18.1364C80.3551 17.7437 79.8143 17.1964 79.4216 16.5011C79.0353 15.8058 78.8357 15.0267 78.8357 14.164M83.3746 21.8577C84.8425 21.8577 86.1623 21.5293 87.3212 20.8662C88.4801 20.2031 89.3943 19.2953 90.051 18.1235C90.7077 16.9582 91.036 15.6384 91.036 14.1576C91.036 12.6768 90.7077 11.357 90.051 10.1852C89.3943 9.01347 88.4801 8.09925 87.3212 7.43611C86.1559 6.77298 84.8425 6.44463 83.3746 6.44463C81.9067 6.44463 80.5869 6.77298 79.4216 7.43611C78.2562 8.09925 77.342 9.01347 76.6918 10.1852C76.0415 11.357 75.7132 12.6832 75.7132 14.1576C75.7132 15.6319 76.0415 16.9582 76.6982 18.1235C77.3549 19.2888 78.2691 20.2031 79.428 20.8662C80.5933 21.5293 81.9067 21.8577 83.3746 21.8577ZM70.0797 1.29408L70.1248 14.0031C70.1248 14.1705 70.0733 14.3057 69.9638 14.4087C69.8544 14.5117 69.7321 14.5696 69.5904 14.5696C69.4939 14.5696 69.4037 14.5439 69.3072 14.4924C69.217 14.4409 69.1398 14.3636 69.0689 14.267L60.7122 1.75119C60.474 1.38421 60.2164 1.12668 59.9396 0.978605C59.6627 0.830527 59.3151 0.759707 58.8773 0.759707H57.1197C56.978 0.759707 56.8557 0.811212 56.7527 0.914223C56.6497 1.01723 56.5982 1.146 56.5982 1.30052V21.0786C56.5982 21.2332 56.6497 21.3619 56.7527 21.4649C56.8557 21.5679 56.978 21.6195 57.1197 21.6195H59.2507C59.4052 21.6195 59.534 21.5679 59.6305 21.4649C59.7336 21.3619 59.7851 21.2332 59.7851 21.0786L59.74 7.80309C59.74 7.6357 59.7915 7.5005 59.901 7.39748C60.004 7.29447 60.1392 7.23653 60.2872 7.23653C60.3838 7.23653 60.474 7.26228 60.5705 7.31379C60.6607 7.36529 60.7379 7.44255 60.8087 7.53912L69.6162 20.731C69.848 21.0786 70.0797 21.3169 70.3244 21.4392C70.5626 21.5615 70.9038 21.6195 71.3481 21.6195H72.758C72.8997 21.6195 73.022 21.5679 73.125 21.4649C73.228 21.3619 73.2795 21.2332 73.2795 21.0786V1.29408C73.2795 1.13956 73.228 1.0108 73.125 0.907785C73.022 0.804774 72.8997 0.753269 72.758 0.753269H70.6141C70.4596 0.753269 70.3308 0.804774 70.2342 0.907785C70.1377 1.0108 70.0797 1.13956 70.0797 1.29408ZM44.5459 14.3057L49.0397 20.6473C49.2779 20.9885 49.5548 21.2332 49.8574 21.3812C50.16 21.5293 50.5591 21.6066 51.0613 21.6066H52.9348C53.0314 21.6066 53.1087 21.5744 53.173 21.5164C53.2374 21.4585 53.2632 21.3877 53.2632 21.2975C53.2632 21.2074 53.2374 21.1366 53.1924 21.0786L48.5697 14.795C48.3766 14.5246 48.28 14.2348 48.28 13.9322C48.28 13.6297 48.3766 13.3464 48.5697 13.076L52.8769 7.23009C52.9219 7.15283 52.9477 7.08201 52.9477 7.01119C52.9477 6.93393 52.9155 6.86311 52.8447 6.79873C52.7803 6.73435 52.6966 6.70216 52.6 6.70216H50.4948C50.0698 6.70216 49.7286 6.77298 49.4711 6.91462C49.2135 7.05626 48.956 7.31379 48.7049 7.68076L44.5394 13.5975C44.4686 13.694 44.4364 13.8099 44.4364 13.9451C44.4364 14.0739 44.4686 14.1898 44.5394 14.2928M40.9662 21.5937H43.1552C43.2904 21.5937 43.3999 21.5422 43.4964 21.4456C43.5866 21.349 43.6316 21.2396 43.6316 21.1108V0.482864C43.6316 0.347662 43.5866 0.231775 43.4964 0.14164C43.4063 0.0515055 43.2904 0.00643819 43.1552 0.00643819H40.9662C40.8439 0.00643819 40.728 0.0515055 40.6379 0.14164C40.5413 0.231775 40.4962 0.347662 40.4962 0.482864V21.1366C40.4962 21.2654 40.5413 21.3748 40.6379 21.4714C40.7344 21.5679 40.8439 21.6195 40.9662 21.6195M26.3 14.2155C26.3 13.3399 26.4803 12.5545 26.8473 11.8592C27.2142 11.1638 27.7164 10.623 28.3667 10.2367C29.0169 9.85044 29.7445 9.65729 30.5492 9.65729C31.1287 9.65729 31.6759 9.76674 32.191 9.98564C32.7125 10.2045 33.1567 10.4814 33.5301 10.8097C33.955 11.1574 34.1675 11.7304 34.1675 12.5158V15.5611C34.1675 16.0053 34.1095 16.3852 33.9872 16.7007C33.8649 17.0097 33.6718 17.2865 33.4013 17.5312C32.5258 18.3295 31.5536 18.7287 30.4913 18.7287C29.6865 18.7287 28.9654 18.5356 28.3281 18.1557C27.6971 17.7694 27.1949 17.235 26.8344 16.5526C26.4739 15.8701 26.2936 15.0911 26.2936 14.2284M29.796 21.922C31.2059 21.922 32.4421 21.51 33.4979 20.6859C33.6331 20.5765 33.7554 20.525 33.8585 20.525C34.0194 20.525 34.1611 20.6602 34.2769 20.9306L34.3027 20.9756C34.3993 21.1881 34.5216 21.349 34.6697 21.4649C34.8177 21.5744 35.0238 21.6323 35.2813 21.6323H36.8265C36.9617 21.6323 37.0711 21.5808 37.1677 21.4843C37.2578 21.3877 37.3029 21.2782 37.3029 21.1495V7.1979C37.3029 7.0627 37.2578 6.94681 37.1677 6.85668C37.0776 6.76654 36.9617 6.71504 36.8265 6.71504H34.7083C34.5667 6.71504 34.4443 6.7601 34.3542 6.85668C34.2641 6.94681 34.2061 7.0627 34.1868 7.1979V7.21078C34.1804 7.33954 34.1353 7.42968 34.0645 7.49406C33.9937 7.55844 33.8971 7.59063 33.7683 7.59063C33.5881 7.59063 33.4013 7.52625 33.2211 7.40392C32.3455 6.81161 31.3926 6.51545 30.3561 6.51545C28.9719 6.51545 27.7357 6.8438 26.6477 7.50693C25.5596 8.17007 24.7033 9.08429 24.0917 10.256C23.4801 11.4278 23.1711 12.7541 23.1711 14.2284C23.1711 15.7028 23.4543 17.029 24.0209 18.1943C24.5875 19.3596 25.3729 20.2739 26.3773 20.9241C27.3816 21.5808 28.5212 21.9092 29.8024 21.9092M3.2706 11.1896C3.2706 9.79249 3.59251 8.52417 4.24277 7.38461C4.89303 6.25149 5.77506 5.35014 6.90174 4.69344C8.02843 4.03675 9.271 3.7084 10.6359 3.7084C12.0008 3.7084 13.2434 4.03675 14.37 4.69344C15.4903 5.35014 16.3788 6.24505 17.029 7.38461C17.6793 8.52417 18.0012 9.79249 18.0012 11.1896C18.0012 12.5867 17.6793 13.8421 17.029 14.9881C16.3788 16.1277 15.4967 17.029 14.37 17.6793C13.2434 18.3295 12.0008 18.6579 10.6359 18.6579C9.271 18.6579 8.02843 18.3295 6.90174 17.6793C5.77506 17.029 4.89303 16.1341 4.24277 14.9881C3.59251 13.8486 3.2706 12.5802 3.2706 11.1896ZM10.623 21.8705C12.5931 21.8705 14.3894 21.4006 16.0118 20.4541C17.6342 19.5142 18.9154 18.2265 19.8618 16.5912C20.8018 14.9624 21.2718 13.1597 21.2718 11.1831C21.2718 9.20662 20.8018 7.39105 19.8618 5.76218C18.9219 4.12688 17.6342 2.83924 16.0118 1.89927C14.3894 0.959291 12.5931 0.482864 10.623 0.482864C8.65293 0.482864 6.86955 0.952853 5.24713 1.89927C3.6247 2.83924 2.3435 4.12688 1.40353 5.76218C0.469988 7.40392 0 9.21305 0 11.1896C0 13.1661 0.469988 14.9624 1.40353 16.5977C2.33706 18.2265 3.61826 19.5142 5.24713 20.4606C6.86955 21.4006 8.66581 21.877 10.623 21.877"
                fill="#006D6B"
              ></path>
            </g>
          </svg>
        </div>
        <div className="header__logo-icon">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                d="M50 25V9.99901V0H39.9985H25V9.99901H39.9985V25H50Z"
                fill="#006D6B"
              ></path>
              <path
                d="M39.9985 25C39.9985 33.2855 33.283 39.9985 25 39.9985C16.717 39.9985 9.99901 33.283 9.99901 25C9.99901 16.717 16.7145 9.99901 25 9.99901C33.2855 9.99901 39.9985 16.7145 39.9985 25ZM49.9975 25C50 11.1926 38.8074 0 25 0C11.1926 0 0 11.1926 0 25C0 38.8074 11.1926 50 25 50C38.8074 50 50 38.8074 50 25"
                fill="#2ADAA5"
              ></path>
            </g>
          </svg>
        </div>
      </a>
    </div>
  );
};
