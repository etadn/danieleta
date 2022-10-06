export default function ArticleMoon({ isDark, handleSetDarkTheme }) {

    console.log(isDark)
    return (
        <svg onClick={handleSetDarkTheme} className="make-cursor" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.91532 6.60813C5.91532 6.30616 5.95088 6.02192 6.00416 5.73767C5.40022 6.41273 5.06268 7.26536 5.06268 8.20685C5.06268 10.2496 6.71465 11.9017 8.75756 11.9017C9.55691 11.9017 10.303 11.653 10.9248 11.1912C10.7826 11.209 10.6583 11.209 10.5162 11.209C7.97592 11.209 5.91537 9.14832 5.91537 6.60812L5.91532 6.60813ZM11.6886 0.60394C10.7115 0.213135 9.64579 0 8.50884 0C4.17446 0 0.586154 3.25079 0.0710015 7.44307C0.0354388 7.79831 0 8.13586 0 8.4911C0 13.1808 3.80147 17 8.5089 17C13.1986 17 17.0178 13.1985 17.0178 8.4911C17.0178 4.92056 14.7973 1.86518 11.6886 0.60394H11.6886ZM12.2215 10.8182C11.3866 11.9195 10.1255 12.559 8.7398 12.559C6.34162 12.559 4.38765 10.6049 4.38765 8.20685C4.38765 6.66142 5.1693 5.27587 6.50159 4.47643C6.626 4.40543 6.78584 4.42315 6.89239 4.512C6.99896 4.61856 7.03452 4.76068 6.9634 4.9028C6.69699 5.45345 6.57259 6.02196 6.57259 6.6082C6.57259 8.77539 8.33125 10.5518 10.5162 10.5518C10.9603 10.5518 11.4221 10.4629 11.8485 10.3208C11.9906 10.2675 12.1327 10.3208 12.2216 10.4274C12.3104 10.5339 12.3104 10.7116 12.2216 10.8182L12.2215 10.8182Z" fill="black"/>
        </svg>
    )
}
