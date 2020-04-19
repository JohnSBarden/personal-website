import { Carousel } from "react-bootstrap";
import { useState } from "react";
import React from "react";
import "./Carousel.scss";

function MyCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lh3.googleusercontent.com/J2BAMSfe2YJHv1QakY9HCUVOiGRbDM8EZ89KvYZqdnjJyQhrrpN2T-CqrScSSafy9dfpa1--gBP94seaok3ZyJuYH2Uz6vcU_lfgAoWN1Xc4owSjNYcjaQTReiBK6e2jdJjNgGJ0e8D4TwgaYEMnA2Qy3_I7NuGVmQl69E53tZ4bxZ_W88midfXn0J5xD-eyWZ5yKh9UOx6e5cXH9OtjLAy22Jvzgvau7bkD3BpAVHy72KkshyVIATzaJN2U4rZQbm0vz0DYCwTNh1wPtmW0hATsdUXZprnXFB4Ug9juLN2AXVT4zNaBrXKqb3i-QrE6nF5cK0tpKPa6U5abHnBmopMPtdleFW3G7Cco3wA-8Ct1U7yJmmEB2A7_b2T2jGUfhWZLT3_ZA3H3GvyecM_Zfh1fgTL5soUVLj2mHtLS6Be1Qa2BMgikOrXK9jorWuqGnxSkrX2aYsURPH4S_hIVttojVmARVQ4iYGvPrxD86tMLAtWitxqo-IMMENoB_7wEdSixPU_L8FyjFljBUWSZyU5WMoX4LHsYUxUiEB6VXC_LFBglHwGFmA-RmsUuAoB4lx4FIDHoqP8Nj6mr6GdNWtJZZuIIMwjIRFqZMp2cvHlbG50L4R4QT-T720n8Jcjm1WTIZlwvHzOKTfvFlvDUSUG6lWyAgQzgJCq2G-tcQ2CFeS8JSZ2N16ay26Qs=w1090-h975-no"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lh3.googleusercontent.com/hzTUl2kVVHkuqsCpW9jZKXMxExI3pJ-Hd6S6ZCsOY4YuLexu3o0SauCtVb3O7bOclNWz2-BYxVO4d5WxZxdKSlCLeBU3J0XeeWWfjXOzk9bcHfJ71klaTDVc5VzoB3S1jSTRo5z0-kqns_0CGVCZGfRcSlQMa4E_qXA6iajKGUhFH6sl8JCExgRedNJPCnTfsHUozt11VGVUMltPT20VakuWxQMfc39ZtJ5FTIGrDojFFlF3x8xyebR0hQfatI2wp7zEYr7nOriZ4QgMVZ9C6YQHCwBjUrMUS8EQRr2rakGBajU5ihSB1wXneziEGVkVL_rKJfA0pVERai00adLQge4TPi7KGR00sfGTzDIxt5LopM3inK4-T4uNEYFv_2dGSyNqr2ogw5asSjWE_0V2gqsbpGT7Y09j7ffPtcAXkBMZTN2DjPJ6bKgh-F6Oo-it8eH5kVZJzAuaUznridbJQ97J6D1N9haA9Y4gANZi8-FfXUz478IgJuvhA8rmF9AIoGJLsYgjZiy8O770PXbYja1bWX101ruc9E4_Mk4X1SXYAl9co--MkSziBc5MloVPo7li9Q_8d74YAwW6nxKHrLZeMm41eNt5RrigIgr0yIvaejIIjT5DfbVAcpgM5SZkLkBA86FLltBC9HxkuWJduRAExesO5i0_3BUOIthlAbwVAYioncqmtRnSXsSjcK8u1WyaGBa1kMRycl_WWQPzy5wQTAoQuh4sWY7DvtJr7mzJxrax35wCrA=w1043-h975-no"
          alt="Bike tour of Versailles"
        />
        {/*<Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>*/}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lh3.googleusercontent.com/Yt8Z0QfIOmAo2AevsRjyTYU2wDl0ka5lygAi5as3lysC5tTJF2k280-nFpykvXXUqBTJzK2Uxq8MkIXWOfWe3s940VNN2jzTe5Ip6Ht0p3UuliZmm6g-qqPIuUNI6CIO3NwhXxMng2zObpnogO6W3e5JoqVnRm4MRPmNuUWRAVrYqXfiUjM1fwYc38zWMAo3iKXQP4Hi1Fkx-O6ZW5_5TAnZ0CcuaW938QiS_0azD8WVgFDD0LiTV_CshdNb0udLKr2baD3b9ElTbVOBM6b56EcmGjFya9N8fjGFwWmUq0ZU74qHR5kuQ1Qxu3PI68n-npLn_hwBSu7JfD4fmrC2hQ0jxxn1fDTkqIkfwPJZeP5-TzaxhC3Q07geSAe8EiRRATkKeWcwUhvGgK_VgMA0DEKzX9UApOnfDO0VblPpzFMvOXjmEEKPz_I2IVWZ9A7nXxsQ0SmRg0nrEStsbGvwL-nVEPZ87F1FFacrU94rJJ1Lyd-W-6M13fdyuMmC3FMNtCmhdtYk5zMZxH6I1A5qlkBLyP9EnspYzAFGXLJ1NwEROTV5v3iid78QebdTdfUJAZ4yiFymsec1UVo0O9SORrDsV3ZwutdNR-kPhQGs6pcBcbCOWSePuie4JZoRbBmD4xxrfuYsUJeoIq9qiLpZ7FZTb3iHaVj2vhvxhPBrN14rGbUAXrTzpl9Gu9uo=w1167-h975-no"
          alt="Halloween"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lh3.googleusercontent.com/x5U31swKP5Yr9wBNa9zjaJ0idD34KJS_ve7wwi97hzyP56HOX1j92OQT-rJIzGABDJeEON9iThFq0dbRmZbx3Tttmq98rn4WEwnVUrMt5d2gNLYsqeJCYfWTbNCAURnz0r1wiYhwmkYgdB9LWdEe5UWDCwutVlcB2_rs8EwK8XlDecL82L_m_XKHgSYuVmkE-x37_cojIHJy6RpRIPEZNErV-5dowWnqiF-wQVKTY8kVfvQ6W7ll_DrmCXKeGG1NfXs9MjJfWKr96ruQ2DgVdmp0D1zAMmPs_NPAwlXdHHp54QaO6pdDjqxFT2MwMTCAnMIjvbbn_a3hALA2vRJ038agP1TQ3jqneodmzj9VGg8jb11_e2lbyqTHQH2wAsmWrfYtjx3u5wvL_y5IrV9SRTdPcHGf0WY9Q5seKm8rA7j2kNXdvrQkAwT_Ew5o8CtXPzPYBx21meDZmW635evj0aNQsziw_eqqdx-ZVB6RewoyyqAqSrX4K0pVw_8-eUnGch8XQjWNpMIKy9-d0Aj9mbHYhJviqbw-feLBs6Ry1ADunPqGzBZ4uw5tcGBzVaP_l5_YggCiMl76sACFwTxUfuJSgwPJIcHkDjEiR5xnchLOpnmkTPuhpk9GEWHY0dRcGTJh3v29UwqLJvm2CfYTuj6kwxujaKRr0SVg6wBsIYmogNdefw47FJYZiwmx=w1015-h975-no"
          alt="Halloween"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export { MyCarousel };
