import React from 'react'

const Header = () => {
  return (
    <div class="banner">
    <p class="banner__text"> Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
    <a class="banner__link" href="#">Shop Now</a>
    <div class="select__banner">
        <select class="language__selector">
            <option value="uz">Uzbek</option>
            <option value="en">English</option>
            <option value="ru">Russian</option>
        </select>
    </div>
</div>
  )
}

export default Header