import React from "react"
import Image from "next/image"

export default function Contact() {
  return (
    <div className="mx-auto max-w-screen-md bg-white-100">
      <hmx-auto max-w-screen-md bg-white-100>
        <h1>
          <b>갱쓰가 사랑하는 음식들을 소개합나당당당!!!!!</b>
        </h1>
      </hmx-auto>
      <h2>냠냠 쩝쩝 맛좋은 음식 </h2>
      <div className="basis-1/4">
        <Image
          src="/img/star.jpg"
          width={300}
          height={300}
          layout="responsive"
        ></Image>
        <p>
          <b>별다방에서 제일 좋아하는 디가풰인 돌체라떼</b>
        </p>
      </div>
      <div>
        <Image
          src="/img/pizza.jpg"
          width={300}
          height={300}
          layout="responsive"
        ></Image>
        <p>
          <b>연남동에 있는 피자집인데 저 감자튀김 피자가 정말 꿀맛임돠</b>
        </p>
      </div>
      <div>
        <Image
          src="/img/bread.jpg"
          width={300}
          height={300}
          layout="responsive"
        ></Image>
        <p>
          <b>저는 빵을 사랑하는 뇨자로써 유맹한 빵집은 다 가야합니다ㅣ@.@ </b>
        </p>
      </div>
    </div>
  )
}
