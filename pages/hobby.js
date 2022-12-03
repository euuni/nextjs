import React from "react"
import Image from "next/image"

export default function HobbyPage() {
  return (
    <div className="mx-auto max-w-screen-md bg-white-100">
      <div className="flex flex-row justify-between">
        <div className="basis-1/4">
          <Image src="/img/musical.jpg" width={500} height={500}></Image>
          <p>
            <b>Musical</b>
          </p>
          <p>
            <a href="https://www.youtube.com/watch?v=hY-Pf70fSH8">
              <b>지킬 앤 하이드</b>
            </a>
          </p>
          <p>
            <a href="https://www.youtube.com/watch?v=geyAsxko87s">
              <b> 데스노트</b>
            </a>
          </p>
        </div>
        <div className="basis-1/4">
          <Image src="/img/music.jpg" width={500} height={500}></Image>
          <p>
            <b>Music is my life ᖰ(˙Ⱉ˙)ᖳ</b>
          </p>
          <p>
            <a href=" https://www.youtube.com/watch?v=FRilMXZqNhA">
              <b>ᖰNCT127-질주ᖳ</b>
            </a>
          </p>
          <p>
            <a href="https://www.youtube.com/watch?v=5gR8kqgv9oc">
              <b>ᖰ원필-행운을 빌어줘ᖳ</b>
            </a>
          </p>
          <p>
            <a href="https://www.youtube.com/watch?v=0OliiOgXlJI">
              <b>ᖰ기현-Youthᖳ</b>
            </a>
          </p>
          <p>
            <a href="https://www.youtube.com/watch?v=BBdC1rl5sKY">
              <b>ᖰ윤하-사건의 지평선ᖳ</b>
            </a>
          </p>
        </div>
        <div className="basis-1/4">
          <Image src="/img/baseball.jpg" width={500} height={500}></Image>
          <p>
            <b>Baseball</b>
          </p>
          <p>
            <a href="https://www.youtube.com/watch?v=uzgSlqbOeG0">
              <b>ε=ε=ε=┏(Lg twins)┛</b>
            </a>
          </p>
        </div>
        <div className="basis-1/4">
          <Image src="/img/webtoon.jpg" width={500} height={500}></Image>
          <p>
            <b>Webtoon</b>
          </p>
          <p>
            <a href="https://comic.naver.com/webtoon/list?titleId=796152">
              <b>마루는 강쥐</b>
            </a>
          </p>
          <p>
            <a href="https://comic.naver.com/webtoon/list?titleId=788167">
              <b>가짜 동맹</b>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
